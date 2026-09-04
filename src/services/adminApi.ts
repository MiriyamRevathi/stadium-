import { adminService } from './adminService';
import {
  AdminDashboardMetrics,
  AdminEvent,
  AdminNotification,
  AdminSettings,
  Booking,
  Customer,
  EventPricingRecord,
  EventSeatInventoryItem,
  PhysicalSeat,
  RefundRequest,
  SeatCategory,
  SeatStatus,
  Section,
  Stand
} from '../types/admin';

// Admin API client that provides a direct interface matching the requested REST specification
export const adminApi = {
  // GET /api/admin/dashboard
  getDashboard: async (): Promise<AdminDashboardMetrics> => {
    return adminService.getDashboardMetrics();
  },

  // GET /api/admin/stadium
  getStadium: async (): Promise<{ settings: AdminSettings; standsCount: number; sectionsCount: number; seatsCount: number }> => {
    const settings = adminService.getSettings();
    const stands = adminService.getStands();
    const sections = adminService.getSections();
    const seats = adminService.getPhysicalSeats();
    return {
      settings,
      standsCount: stands.length,
      sectionsCount: sections.length,
      seatsCount: seats.length
    };
  },

  // GET /api/admin/stands
  getStands: async (): Promise<Stand[]> => {
    return adminService.getStands();
  },

  // PUT /api/admin/stands/{id}
  updateStand: async (id: string, updates: Partial<Stand>): Promise<Stand> => {
    return adminService.updateStand(id, updates);
  },

  // GET /api/admin/sections
  getSections: async (standId?: string): Promise<Section[]> => {
    return adminService.getSections(standId);
  },

  // PUT /api/admin/sections/{id}
  updateSection: async (id: string, updates: Partial<Section>): Promise<Section> => {
    return adminService.updateSection(id, updates);
  },

  // GET /api/admin/seats
  getSeats: async (filter?: { standId?: string; sectionId?: string; category?: SeatCategory; status?: SeatStatus }): Promise<PhysicalSeat[]> => {
    return adminService.getPhysicalSeats(filter);
  },

  // PUT /api/admin/seats/{id}
  updateSeat: async (id: string, updates: Partial<PhysicalSeat>): Promise<PhysicalSeat> => {
    return adminService.updatePhysicalSeat(id, updates);
  },

  // PUT /api/admin/seats/batch
  batchUpdateSeats: async (seatIds: string[], status: SeatStatus): Promise<number> => {
    return adminService.batchBlockPhysicalSeats(seatIds, status);
  },

  // GET /api/admin/events
  getEvents: async (): Promise<AdminEvent[]> => {
    return adminService.getEvents();
  },

  // POST /api/admin/events
  createEvent: async (eventData: Omit<AdminEvent, 'id'> & { initialPricing?: Record<SeatCategory, number> }): Promise<AdminEvent> => {
    return adminService.createEvent(eventData);
  },

  // PUT /api/admin/events/{id}
  updateEvent: async (id: string, updates: Partial<AdminEvent>): Promise<AdminEvent> => {
    return adminService.updateEvent(id, updates);
  },

  // DELETE /api/admin/events/{id}
  deleteEvent: async (id: string): Promise<boolean> => {
    return adminService.deleteEvent(id);
  },

  // PUT /api/admin/events/{id}/deactivate
  deactivateEvent: async (id: string): Promise<AdminEvent> => {
    return adminService.deactivateEvent(id);
  },

  // GET /api/admin/events/{id}/pricing
  getEventPricing: async (eventId: string): Promise<EventPricingRecord> => {
    return adminService.getEventPricing(eventId);
  },

  // PUT /api/admin/events/{id}/pricing
  updateEventPricing: async (eventId: string, category: SeatCategory, price: number): Promise<EventPricingRecord> => {
    return adminService.updateEventPricing(eventId, category, price);
  },

  // GET /api/admin/events/{id}/inventory
  getEventInventory: async (eventId: string): Promise<Record<string, EventSeatInventoryItem>> => {
    return adminService.getEventInventory(eventId);
  },

  // PUT /api/admin/events/{id}/inventory/{seatId}
  updateEventSeatStatus: async (eventId: string, seatId: string, status: SeatStatus): Promise<EventSeatInventoryItem> => {
    return adminService.updateEventSeatStatus(eventId, seatId, status);
  },

  // GET /api/admin/bookings
  getBookings: async (): Promise<Booking[]> => {
    return adminService.getBookings();
  },

  // GET /api/admin/bookings/{id}
  getBooking: async (id: string): Promise<Booking | undefined> => {
    return adminService.getBooking(id);
  },

  // GET /api/admin/refunds
  getRefunds: async (): Promise<RefundRequest[]> => {
    return adminService.getRefundRequests();
  },

  // GET /api/admin/refunds/{id}
  getRefund: async (id: string): Promise<RefundRequest | undefined> => {
    return adminService.getRefundRequest(id);
  },

  // PUT /api/admin/refunds/{id}/approve
  approveRefund: async (id: string, adminNotes?: string): Promise<RefundRequest> => {
    return adminService.approveRefund(id, adminNotes);
  },

  // PUT /api/admin/refunds/{id}/reject
  rejectRefund: async (id: string, reason?: string): Promise<RefundRequest> => {
    return adminService.rejectRefund(id, reason);
  },

  // PUT /api/admin/refunds/{id}/processing
  markRefundProcessing: async (id: string, adminNotes?: string): Promise<RefundRequest> => {
    return adminService.markRefundProcessing(id, adminNotes);
  },

  // PUT /api/admin/refunds/{id}/complete
  markRefundComplete: async (id: string, adminNotes?: string): Promise<RefundRequest> => {
    return adminService.markRefundComplete(id, adminNotes);
  },

  // GET /api/admin/customers
  getCustomers: async (): Promise<Customer[]> => {
    return adminService.getCustomers();
  },

  // GET /api/admin/notifications
  getNotifications: async (): Promise<AdminNotification[]> => {
    return adminService.getNotifications();
  },

  // POST /api/admin/notifications
  createNotification: async (data: Omit<AdminNotification, 'id' | 'timestamp'>): Promise<AdminNotification> => {
    return adminService.createNotification(data);
  },

  // GET /api/admin/settings
  getSettings: async (): Promise<AdminSettings> => {
    return adminService.getSettings();
  },

  // PUT /api/admin/settings
  updateSettings: async (updates: Partial<AdminSettings>): Promise<AdminSettings> => {
    return adminService.updateSettings(updates);
  }
};
