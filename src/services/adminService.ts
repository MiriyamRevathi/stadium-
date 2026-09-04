import {
  AdminDashboardMetrics,
  AdminEvent,
  AdminNotification,
  AdminSettings,
  Booking,
  Customer,
  EventPricingMatrix,
  EventPricingRecord,
  EventSeatInventoryItem,
  NotificationType,
  PhysicalSeat,
  RefundRequest,
  SeatCategory,
  SeatStatus,
  Section,
  Stand
} from '../types/admin';
import {
  initializeEventSeatInventory,
  SEED_ADMIN_SETTINGS,
  SEED_BOOKINGS,
  SEED_CUSTOMERS,
  SEED_EVENT_PRICING,
  SEED_EVENTS,
  SEED_NOTIFICATIONS,
  SEED_PHYSICAL_SEATS,
  SEED_REFUND_REQUESTS,
  SEED_SECTIONS,
  SEED_STANDS
} from '../data/adminSeedData';

class AdminService {
  private stands: Stand[] = [...SEED_STANDS];
  private sections: Section[] = [...SEED_SECTIONS];
  private physicalSeats: PhysicalSeat[] = [...SEED_PHYSICAL_SEATS];
  private events: AdminEvent[] = [...SEED_EVENTS];
  private eventPricing: Record<string, EventPricingRecord> = { ...SEED_EVENT_PRICING };
  private eventInventory: Record<string, Record<string, EventSeatInventoryItem>> = initializeEventSeatInventory();
  private bookings: Booking[] = [...SEED_BOOKINGS];
  private refundRequests: RefundRequest[] = [...SEED_REFUND_REQUESTS];
  private customers: Customer[] = [...SEED_CUSTOMERS];
  private notifications: AdminNotification[] = [...SEED_NOTIFICATIONS];
  private settings: AdminSettings = { ...SEED_ADMIN_SETTINGS };

  // ----------------------------------------------------
  // DASHBOARD
  // ----------------------------------------------------
  getDashboardMetrics(): AdminDashboardMetrics {
    const totalEvents = this.events.length;
    const upcomingEvents = this.events.filter((e) => e.status === 'Active' || e.status === 'Scheduled').length;
    const totalStadiumSeats = this.physicalSeats.length;

    // Available vs Booked across active events
    let bookedSeats = 0;
    let availableSeats = 0;
    Object.values(this.eventInventory).forEach((inv) => {
      Object.values(inv).forEach((item) => {
        if (item.status === 'Booked') bookedSeats++;
        if (item.status === 'Available') availableSeats++;
      });
    });

    const totalRevenue = this.bookings
      .filter((b) => b.status === 'Confirmed')
      .reduce((sum, b) => sum + b.totalAmount, 0);

    const pendingRefundRequests = this.refundRequests.filter(
      (r) => r.status === 'Requested' || r.status === 'Under Review' || r.status === 'Processing'
    ).length;

    return {
      totalEvents,
      upcomingEvents,
      totalStadiumSeats,
      availableSeats,
      bookedSeats,
      todayBookings: 14,
      totalRevenue,
      pendingRefundRequests
    };
  }

  // ----------------------------------------------------
  // STADIUM & STANDS & SECTIONS
  // ----------------------------------------------------
  getSettings(): AdminSettings {
    return { ...this.settings };
  }

  updateSettings(updates: Partial<AdminSettings>): AdminSettings {
    this.settings = { ...this.settings, ...updates };
    return { ...this.settings };
  }

  getStands(): Stand[] {
    return [...this.stands];
  }

  updateStand(standId: string, updates: Partial<Stand>): Stand {
    const index = this.stands.findIndex((s) => s.id === standId);
    if (index === -1) throw new Error(`Stand ${standId} not found`);
    this.stands[index] = { ...this.stands[index], ...updates };
    return this.stands[index];
  }

  getSections(standId?: string): Section[] {
    if (standId) {
      return this.sections.filter((s) => s.standId === standId);
    }
    return [...this.sections];
  }

  getSection(sectionId: string): Section | undefined {
    return this.sections.find((s) => s.id === sectionId);
  }

  updateSection(sectionId: string, updates: Partial<Section>): Section {
    const index = this.sections.findIndex((s) => s.id === sectionId);
    if (index === -1) throw new Error(`Section ${sectionId} not found`);
    this.sections[index] = { ...this.sections[index], ...updates };
    return this.sections[index];
  }

  // ----------------------------------------------------
  // PHYSICAL SEATS
  // ----------------------------------------------------
  getPhysicalSeats(filter?: { standId?: string; sectionId?: string; category?: SeatCategory; status?: SeatStatus }): PhysicalSeat[] {
    return this.physicalSeats.filter((seat) => {
      if (filter?.standId && seat.standId !== filter.standId) return false;
      if (filter?.sectionId && seat.sectionId !== filter.sectionId) return false;
      if (filter?.category && seat.category !== filter.category) return false;
      if (filter?.status && seat.status !== filter.status) return false;
      return true;
    });
  }

  getPhysicalSeat(seatId: string): PhysicalSeat | undefined {
    return this.physicalSeats.find((s) => s.id === seatId);
  }

  updatePhysicalSeat(seatId: string, updates: Partial<PhysicalSeat>): PhysicalSeat {
    const index = this.physicalSeats.findIndex((s) => s.id === seatId);
    if (index === -1) throw new Error(`Seat ${seatId} not found`);
    this.physicalSeats[index] = { ...this.physicalSeats[index], ...updates };
    return this.physicalSeats[index];
  }

  batchBlockPhysicalSeats(seatIds: string[], status: SeatStatus): number {
    let count = 0;
    this.physicalSeats = this.physicalSeats.map((seat) => {
      if (seatIds.includes(seat.id)) {
        count++;
        return { ...seat, status };
      }
      return seat;
    });
    return count;
  }

  blockPhysicalSeat(seatId: string): PhysicalSeat {
    return this.updatePhysicalSeat(seatId, { status: 'Blocked' });
  }

  unblockPhysicalSeat(seatId: string): PhysicalSeat {
    return this.updatePhysicalSeat(seatId, { status: 'Available' });
  }

  batchUpdatePhysicalSeats(seatIds: string[], status: SeatStatus): number {
    return this.batchBlockPhysicalSeats(seatIds, status);
  }

  // ----------------------------------------------------
  // EVENTS
  // ----------------------------------------------------
  getEvents(): AdminEvent[] {
    return [...this.events];
  }

  getEvent(eventId: string): AdminEvent | undefined {
    return this.events.find((e) => e.id === eventId);
  }

  createEvent(eventData: Omit<AdminEvent, 'id'> & { initialPricing?: Record<SeatCategory, number> }): AdminEvent {
    const id = `evt-${Date.now().toString(36)}`;
    const newEvent: AdminEvent = {
      ...eventData,
      id,
      venue: eventData.venue || this.settings.stadiumName,
      venueLocation: eventData.venueLocation || this.settings.stadiumLocation,
      activeBookingsCount: 0
    };

    this.events.unshift(newEvent);

    // Initialize Event-Specific Pricing
    const p = eventData.initialPricing || {
      General: 500,
      Premium: 1500,
      VIP: 3500,
      Hospitality: 7500
    };

    this.eventPricing[id] = {
      eventId: id,
      categories: {
        General: { category: 'General', price: p.General, totalSeats: 240, availableSeats: 240, bookedSeats: 0 },
        Premium: { category: 'Premium', price: p.Premium, totalSeats: 228, availableSeats: 228, bookedSeats: 0 },
        VIP: { category: 'VIP', price: p.VIP, totalSeats: 180, availableSeats: 180, bookedSeats: 0 },
        Hospitality: { category: 'Hospitality', price: p.Hospitality, totalSeats: 144, availableSeats: 144, bookedSeats: 0 }
      },
      updatedAt: new Date().toISOString()
    };

    // Initialize Event Seat Inventory
    this.eventInventory[id] = {};
    this.physicalSeats.forEach((seat) => {
      this.eventInventory[id][seat.id] = {
        seatId: seat.id,
        eventId: id,
        status: seat.status === 'Maintenance' || seat.status === 'Blocked' ? seat.status : 'Available',
        price: p[seat.category] || seat.basePrice,
        category: seat.category
      };
    });

    this.createNotification({
      title: 'New Event Created',
      message: `${newEvent.name} (${newEvent.date}) has been scheduled. Pricing configured.`,
      targetAudience: 'Admins',
      type: 'info',
      eventId: id
    });

    return newEvent;
  }

  updateEvent(eventId: string, updates: Partial<AdminEvent>): AdminEvent {
    const index = this.events.findIndex((e) => e.id === eventId);
    if (index === -1) throw new Error(`Event ${eventId} not found`);

    const currentEvent = this.events[index];
    // Check if event has bookings
    const bookingsCount = this.bookings.filter((b) => b.eventId === eventId && b.status === 'Confirmed').length;

    this.events[index] = {
      ...currentEvent,
      ...updates,
      activeBookingsCount: bookingsCount
    };

    return this.events[index];
  }

  deactivateEvent(eventId: string): AdminEvent {
    return this.updateEvent(eventId, { status: 'Deactivated' });
  }

  deleteEvent(eventId: string): boolean {
    const bookingsCount = this.bookings.filter((b) => b.eventId === eventId && b.status === 'Confirmed').length;
    if (bookingsCount > 0) {
      throw new Error(`Cannot delete event with ${bookingsCount} active bookings. Please deactivate it instead.`);
    }

    this.events = this.events.filter((e) => e.id !== eventId);
    delete this.eventPricing[eventId];
    delete this.eventInventory[eventId];
    return true;
  }

  // ----------------------------------------------------
  // EVENT-SPECIFIC PRICING
  // ----------------------------------------------------
  getEventPricing(eventId: string): EventPricingRecord {
    if (!this.eventPricing[eventId]) {
      // Fallback generate default
      this.eventPricing[eventId] = {
        eventId,
        categories: {
          General: { category: 'General', price: 500, totalSeats: 240, availableSeats: 240, bookedSeats: 0 },
          Premium: { category: 'Premium', price: 1500, totalSeats: 228, availableSeats: 228, bookedSeats: 0 },
          VIP: { category: 'VIP', price: 3500, totalSeats: 180, availableSeats: 180, bookedSeats: 0 },
          Hospitality: { category: 'Hospitality', price: 7500, totalSeats: 144, availableSeats: 144, bookedSeats: 0 }
        },
        updatedAt: new Date().toISOString()
      };
    }
    return this.eventPricing[eventId];
  }

  updateEventPricing(eventId: string, category: SeatCategory, newPrice: number): EventPricingRecord {
    const pricing = this.getEventPricing(eventId);
    if (!pricing.categories[category]) {
      throw new Error(`Category ${category} not found for event ${eventId}`);
    }

    pricing.categories[category].price = newPrice;
    pricing.updatedAt = new Date().toISOString();

    // Propagate price to the event's seat inventory
    if (this.eventInventory[eventId]) {
      Object.values(this.eventInventory[eventId]).forEach((item) => {
        if (item.category === category) {
          item.price = newPrice;
        }
      });
    }

    this.createNotification({
      title: 'Event Pricing Updated',
      message: `${category} tier price updated to ₹${newPrice.toLocaleString('en-IN')} for event ${eventId}.`,
      targetAudience: 'Admins',
      type: 'success',
      eventId
    });

    return pricing;
  }

  getAllPricingMatrices(): Record<string, EventPricingMatrix> {
    const result: Record<string, EventPricingMatrix> = {};
    Object.keys(this.eventPricing).forEach((eventId) => {
      const p = this.eventPricing[eventId];
      result[eventId] = {
        eventId,
        generalPrice: p.categories.General?.price || 500,
        premiumPrice: p.categories.Premium?.price || 1500,
        vipPrice: p.categories.VIP?.price || 3500,
        hospitalityPrice: p.categories.Hospitality?.price || 7500,
        updatedAt: p.updatedAt
      };
    });
    return result;
  }

  updatePricingMatrix(eventId: string, matrix: EventPricingMatrix): EventPricingMatrix {
    this.updateEventPricing(eventId, 'General', matrix.generalPrice);
    this.updateEventPricing(eventId, 'Premium', matrix.premiumPrice);
    this.updateEventPricing(eventId, 'VIP', matrix.vipPrice);
    this.updateEventPricing(eventId, 'Hospitality', matrix.hospitalityPrice);
    return matrix;
  }

  // ----------------------------------------------------
  // SEAT INVENTORY (EVENT-SPECIFIC)
  // ----------------------------------------------------
  getAllEventSeats(): Record<string, Record<string, EventSeatInventoryItem>> {
    this.events.forEach((ev) => {
      this.getEventInventory(ev.id);
    });
    return { ...this.eventInventory };
  }

  getEventInventory(eventId: string): Record<string, EventSeatInventoryItem> {
    if (!this.eventInventory[eventId]) {
      this.eventInventory[eventId] = {};
      const pricing = this.getEventPricing(eventId).categories;
      this.physicalSeats.forEach((seat) => {
        this.eventInventory[eventId][seat.id] = {
          seatId: seat.id,
          eventId,
          status: seat.status === 'Maintenance' || seat.status === 'Blocked' ? seat.status : 'Available',
          price: pricing[seat.category]?.price || seat.basePrice,
          category: seat.category
        };
      });
    }
    return this.eventInventory[eventId];
  }

  updateEventSeatStatus(eventId: string, seatId: string, status: SeatStatus): EventSeatInventoryItem {
    const inv = this.getEventInventory(eventId);
    if (!inv[seatId]) {
      throw new Error(`Seat ${seatId} not found in inventory for event ${eventId}`);
    }

    inv[seatId].status = status;
    return inv[seatId];
  }

  batchUpdateEventSeats(eventId: string, seatIds: string[], status: SeatStatus): void {
    seatIds.forEach((id) => {
      this.updateEventSeatStatus(eventId, id, status);
    });
  }

  // ----------------------------------------------------
  // BOOKINGS
  // ----------------------------------------------------
  getBookings(): Booking[] {
    return this.bookings.map((b) => {
      const seatList = b.seatIds && b.seatIds.length > 0 ? b.seatIds : b.seats || [];
      return {
        ...b,
        seats: seatList,
        seatIds: seatList,
        seatCount: b.seatCount ?? seatList.length,
        standName: b.standName || b.stand || b.seatDetails?.[0]?.standName || 'Stand',
        category: b.category || b.seatDetails?.[0]?.category || 'General'
      };
    });
  }

  getBooking(bookingId: string): Booking | undefined {
    const b = this.bookings.find((item) => item.id === bookingId);
    if (!b) return undefined;
    const seatList = b.seatIds && b.seatIds.length > 0 ? b.seatIds : b.seats || [];
    return {
      ...b,
      seats: seatList,
      seatIds: seatList,
      seatCount: b.seatCount ?? seatList.length,
      standName: b.standName || b.stand || b.seatDetails?.[0]?.standName || 'Stand',
      category: b.category || b.seatDetails?.[0]?.category || 'General'
    };
  }

  cancelBooking(bookingId: string): Booking {
    const booking = this.bookings.find((b) => b.id === bookingId);
    if (!booking) throw new Error(`Booking ${bookingId} not found`);
    booking.status = 'Cancelled';
    // Release seats
    if (this.eventInventory[booking.eventId]) {
      booking.seats.forEach((seatId) => {
        if (this.eventInventory[booking.eventId][seatId]) {
          this.eventInventory[booking.eventId][seatId].status = 'Available';
        }
      });
    }
    this.createNotification({
      title: 'Booking Cancelled',
      message: `Booking ${booking.id} for ${booking.customerName} cancelled. Seats released.`,
      targetAudience: 'Admins',
      type: 'Booking',
      createdAt: new Date().toISOString(),
      read: false
    });
    return booking;
  }

  // ----------------------------------------------------
  // REFUND LOGIC & STRICT 3-DAY BUSINESS RULE
  // ----------------------------------------------------
  /**
   * Backend calculation for the strict refund policy:
   * "Tickets are non-refundable unless a refund request is submitted at least 3 days before the event."
   * - At least 3 days (>= 3 days): Eligible
   * - Exactly 3 days (=== 3 days): Eligible
   * - Less than 3 days (< 3 days): Not Eligible
   * - After event (<= 0 days): Not Eligible
   */
  calculateRefundEligibility(
    eventDateStr: string,
    requestDateStr: string
  ): {
    eligibility: 'Eligible' | 'Not Eligible';
    daysBeforeEvent: number;
    deadlineDate: string;
    reason: string;
  } {
    // Parse normalized UTC midnight dates
    const eventParts = eventDateStr.split('-').map(Number);
    const requestParts = requestDateStr.split('-').map(Number);

    const eventDate = new Date(eventParts[0], eventParts[1] - 1, eventParts[2]);
    const requestDate = new Date(requestParts[0], requestParts[1] - 1, requestParts[2]);

    const diffMs = eventDate.getTime() - requestDate.getTime();
    const daysBeforeEvent = Math.round(diffMs / (1000 * 60 * 60 * 24));

    // Deadline is exactly refundWindowDays (3 days) before event date
    const deadlineObj = new Date(eventDate);
    deadlineObj.setDate(deadlineObj.getDate() - this.settings.refundWindowDays);
    const deadlineDate = deadlineObj.toISOString().split('T')[0];

    if (daysBeforeEvent >= this.settings.refundWindowDays) {
      return {
        eligibility: 'Eligible',
        daysBeforeEvent,
        deadlineDate,
        reason:
          daysBeforeEvent === this.settings.refundWindowDays
            ? 'Submitted exactly 3 days before the scheduled event. Request meets the minimum threshold.'
            : `Submitted ${daysBeforeEvent} days before the scheduled event (minimum required: 3 days). Fully eligible.`
      };
    }

    if (daysBeforeEvent > 0 && daysBeforeEvent < this.settings.refundWindowDays) {
      return {
        eligibility: 'Not Eligible',
        daysBeforeEvent,
        deadlineDate,
        reason: 'Refund not eligible — request submitted after the allowed deadline.'
      };
    }

    return {
      eligibility: 'Not Eligible',
      daysBeforeEvent,
      deadlineDate,
      reason: 'Refund not eligible — request submitted on or after the event date.'
    };
  }

  getRefundRequests(): RefundRequest[] {
    return this.refundRequests.map((r) => {
      const b = this.bookings.find((bk) => bk.id === r.bookingId);
      const seatList = (r.seatIds && r.seatIds.length > 0)
        ? r.seatIds
        : (r.seats && r.seats.length > 0)
        ? r.seats
        : (b?.seatIds && b.seatIds.length > 0)
        ? b.seatIds
        : b?.seats || [];
      return {
        ...r,
        seats: seatList,
        seatIds: seatList
      };
    });
  }

  getRefundRequest(refundId: string): RefundRequest | undefined {
    const r = this.refundRequests.find((item) => item.id === refundId);
    if (!r) return undefined;
    const b = this.bookings.find((bk) => bk.id === r.bookingId);
    const seatList = (r.seatIds && r.seatIds.length > 0)
      ? r.seatIds
      : (r.seats && r.seats.length > 0)
      ? r.seats
      : (b?.seatIds && b.seatIds.length > 0)
      ? b.seatIds
      : b?.seats || [];
    return {
      ...r,
      seats: seatList,
      seatIds: seatList
    };
  }

  approveRefund(refundId: string, adminNotes?: string): RefundRequest {
    const index = this.refundRequests.findIndex((r) => r.id === refundId);
    if (index === -1) throw new Error(`Refund ${refundId} not found`);

    const req = this.refundRequests[index];
    this.refundRequests[index] = {
      ...req,
      status: 'Approved',
      adminNotes: adminNotes || req.adminNotes || 'Approved by Admin. Ready for batch disbursement.'
    };

    // Release seats in event inventory back to available!
    const booking = this.bookings.find((b) => b.id === req.bookingId);
    if (booking && this.eventInventory[booking.eventId]) {
      booking.seats.forEach((seatId) => {
        if (this.eventInventory[booking.eventId][seatId]) {
          this.eventInventory[booking.eventId][seatId].status = 'Available';
        }
      });
    }

    this.createNotification({
      title: 'Refund Approved',
      message: `Refund of ₹${req.refundAmount.toLocaleString('en-IN')} approved for ${req.customerName} (${req.id}). Processing window: ${this.settings.refundProcessingTime}.`,
      targetAudience: 'Admins',
      type: 'success'
    });

    return this.refundRequests[index];
  }

  rejectRefund(refundId: string, reason?: string): RefundRequest {
    const index = this.refundRequests.findIndex((r) => r.id === refundId);
    if (index === -1) throw new Error(`Refund ${refundId} not found`);

    const req = this.refundRequests[index];
    this.refundRequests[index] = {
      ...req,
      status: 'Rejected',
      adminNotes: reason || 'Refund rejected as per Uppal Stadium No General Return Policy.'
    };

    this.createNotification({
      title: 'Refund Rejected',
      message: `Refund request ${req.id} rejected for ${req.customerName}. ${reason || 'Outside policy window.'}`,
      targetAudience: 'Admins',
      type: 'alert'
    });

    return this.refundRequests[index];
  }

  markRefundProcessing(refundId: string, adminNotes?: string): RefundRequest {
    const index = this.refundRequests.findIndex((r) => r.id === refundId);
    if (index === -1) throw new Error(`Refund ${refundId} not found`);

    const req = this.refundRequests[index];
    this.refundRequests[index] = {
      ...req,
      status: 'Processing',
      adminNotes: adminNotes || `Processing initiated with banking partner. ${this.settings.refundProcessingTime}.`
    };

    return this.refundRequests[index];
  }

  markRefundComplete(refundId: string, adminNotes?: string): RefundRequest {
    const index = this.refundRequests.findIndex((r) => r.id === refundId);
    if (index === -1) throw new Error(`Refund ${refundId} not found`);

    const req = this.refundRequests[index];
    this.refundRequests[index] = {
      ...req,
      status: 'Refunded',
      processedDate: new Date().toISOString(),
      adminNotes: adminNotes || 'Disbursement confirmed. Funds transferred to source account.'
    };

    // Update booking status
    const bIndex = this.bookings.findIndex((b) => b.id === req.bookingId);
    if (bIndex !== -1) {
      this.bookings[bIndex].status = 'Refunded';
    }

    this.createNotification({
      title: 'Refund Completed',
      message: `Disbursement completed for ${req.customerName} (₹${req.refundAmount.toLocaleString('en-IN')}).`,
      targetAudience: 'Admins',
      type: 'success'
    });

    return this.refundRequests[index];
  }

  processRefundDecision(params: {
    requestId: string;
    decision: 'Approved' | 'Rejected';
    overrideNote?: string;
    reason?: string;
  }): RefundRequest {
    if (params.decision === 'Approved') {
      return this.approveRefund(params.requestId, params.overrideNote);
    } else {
      return this.rejectRefund(params.requestId, params.reason);
    }
  }

  // ----------------------------------------------------
  // CUSTOMERS
  // ----------------------------------------------------
  getCustomers(): Customer[] {
    return [...this.customers];
  }

  getCustomer(customerId: string): Customer | undefined {
    return this.customers.find((c) => c.id === customerId);
  }

  // ----------------------------------------------------
  // NOTIFICATIONS
  // ----------------------------------------------------
  getNotifications(): AdminNotification[] {
    return [...this.notifications];
  }

  createNotification(notifData: Partial<AdminNotification> & { title: string; message: string }): AdminNotification {
    const notif: AdminNotification = {
      id: `notif-${Date.now().toString(36)}`,
      title: notifData.title,
      message: notifData.message,
      targetAudience: notifData.targetAudience || 'Admins',
      type: notifData.type || 'System',
      eventId: notifData.eventId,
      timestamp: notifData.timestamp || new Date().toISOString(),
      createdAt: notifData.createdAt || notifData.timestamp || new Date().toISOString(),
      read: notifData.read ?? false,
      isRead: notifData.read ?? false
    };
    this.notifications.unshift(notif);
    return notif;
  }

  markNotificationRead(id: string): void {
    this.markNotificationAsRead(id);
  }

  markNotificationAsRead(id: string): void {
    const notif = this.notifications.find((n) => n.id === id);
    if (notif) {
      notif.read = true;
      notif.isRead = true;
    }
  }

  markAllNotificationsAsRead(): void {
    this.notifications.forEach((n) => {
      n.read = true;
      n.isRead = true;
    });
  }

  addNotification(notif: { title: string; message: string; type: NotificationType; targetAudience?: string }): AdminNotification {
    return this.createNotification({
      title: notif.title,
      message: notif.message,
      type: notif.type,
      targetAudience: notif.targetAudience || 'Admins',
      createdAt: new Date().toISOString(),
      read: false
    });
  }

  resetToSeedData(): void {
    this.stands = [...SEED_STANDS];
    this.sections = [...SEED_SECTIONS];
    this.physicalSeats = [...SEED_PHYSICAL_SEATS];
    this.events = [...SEED_EVENTS];
    this.eventPricing = { ...SEED_EVENT_PRICING };
    this.eventInventory = initializeEventSeatInventory();
    this.bookings = [...SEED_BOOKINGS];
    this.refundRequests = [...SEED_REFUND_REQUESTS];
    this.customers = [...SEED_CUSTOMERS];
    this.notifications = [...SEED_NOTIFICATIONS];
    this.settings = { ...SEED_ADMIN_SETTINGS };
  }
}

export const adminService = new AdminService();
