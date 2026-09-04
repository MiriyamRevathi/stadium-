export type SeatCategory = 'General' | 'Premium' | 'VIP' | 'Hospitality';

export type SeatStatus = 'Available' | 'Booked' | 'Reserved' | 'Blocked' | 'Maintenance';

export type EventType = 'Cricket' | 'Football' | 'Concert' | 'Corporate' | 'Other';

export type EventStatus = 'Scheduled' | 'Active' | 'Completed' | 'Deactivated';

export type RefundStatus =
  | 'Requested'
  | 'Under Review'
  | 'Approved'
  | 'Rejected'
  | 'Processing'
  | 'Refunded'
  | 'Expired';

export type BookingStatus = 'Confirmed' | 'Pending' | 'Cancelled' | 'Refunded';

export interface PhysicalSeat {
  id: string; // e.g. "N03-A-01"
  standId: string;
  standName: 'North Stand' | 'South Stand' | 'East Stand' | 'West Stand';
  sectionId: string; // e.g. "N03"
  sectionName: string;
  row: string; // e.g. "A"
  seatNumber: number; // e.g. 1
  category: SeatCategory;
  basePrice: number;
  status: SeatStatus;
  gate: string;
}

export interface Stand {
  id: string;
  name: string;
  code: 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
  description: string;
  capacity: number;
  sectionIds: string[];
  gates: string[];
  features: string[];
}

export interface Section {
  id: string; // "N01", "N02", "N03", "N04", "S01"..."W03"
  standId: string;
  standName: string;
  name: string;
  category: SeatCategory;
  basePrice: number;
  totalSeats: number;
  rows: string[];
  seatsPerRow: number;
  gate: string;
  tier: 'Lower Tier' | 'Middle Tier' | 'Upper Tier' | 'Pavilion Club' | 'Corporate Box';
  startAngle: number;
  endAngle: number;
  innerRadius: number;
  outerRadius: number;
}

export interface AdminEvent {
  id: string;
  name: string;
  eventType: EventType;
  date: string; // YYYY-MM-DD
  startTime: string;
  endTime: string;
  description: string;
  status: EventStatus;
  tournament?: string;
  venue: string;
  venueLocation: string;
  activeBookingsCount?: number;
}

export interface CategoryPricing {
  category: SeatCategory;
  price: number;
  totalSeats: number;
  availableSeats: number;
  bookedSeats: number;
}

export interface EventPricingRecord {
  eventId: string;
  categories: Record<SeatCategory, CategoryPricing>;
  updatedAt: string;
}

export interface EventPricingMatrix {
  eventId: string;
  generalPrice: number;
  premiumPrice: number;
  vipPrice: number;
  hospitalityPrice: number;
  updatedAt: string;
}

export interface EventSeatInventoryItem {
  seatId: string;
  eventId: string;
  status: SeatStatus;
  price: number;
  category: SeatCategory;
  bookedByCustomerId?: string;
  bookingId?: string;
}

export type EventSeat = EventSeatInventoryItem;

export interface BookingSeatDetail {
  seatId: string;
  standName: string;
  sectionId: string;
  row: string;
  number: number;
  category: SeatCategory;
  price: number;
}

export interface Booking {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  eventId: string;
  eventName: string;
  eventDate: string;
  stand?: string;
  standName?: string;
  section?: string;
  sectionName?: string;
  row?: string;
  category?: string;
  seatCount?: number;
  seatIds?: string[];
  seats: string[]; // array of seat IDs
  seatDetails: BookingSeatDetail[];
  amount: number;
  convenienceFee: number;
  taxes: number;
  totalAmount: number;
  bookingDate: string;
  status: BookingStatus;
  paymentMethod: 'UPI' | 'Credit/Debit Card' | 'Net Banking';
  transactionRef: string;
}

export type AdminBooking = Booking;

export interface RefundRequest {
  id: string;
  bookingId: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  eventId: string;
  eventName: string;
  eventDate: string;
  seats?: string[];
  seatIds?: string[];
  originalAmount: number;
  refundAmount: number;
  requestDate: string;
  deadlineDate: string;
  eligibility: 'Eligible' | 'Not Eligible';
  eligibilityReason: string;
  daysBeforeEvent: number;
  reason: string;
  status: RefundStatus;
  processedDate?: string;
  adminNotes?: string;
  overrideNote?: string;
}

export interface AdminRefundDecision {
  requestId: string;
  decision: 'Approved' | 'Rejected';
  overrideNote?: string;
  reason?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  totalBookings: number;
  upcomingBookings: number;
  pastBookings: number;
  refundRequests?: number;
  refundsRequested?: number;
  totalSpent: number;
  joinedDate: string;
}

export type AdminCustomer = Customer;

export type NotificationType =
  | 'Booking'
  | 'Refund'
  | 'Maintenance'
  | 'System'
  | 'info'
  | 'alert'
  | 'success'
  | 'reminder';

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  targetAudience?: string;
  type: NotificationType;
  eventId?: string;
  timestamp?: string;
  createdAt: string;
  read: boolean;
  isRead?: boolean;
}

export interface AdminSettings {
  stadiumName: string;
  stadiumShortName?: string;
  stadiumLocation: string;
  city?: string;
  operator: string;
  established?: number;
  totalCapacity: number;
  gates: string[];
  refundWindowDays: number;
  refundProcessingTime?: string;
  strictReturnPolicy: boolean;
  cancellationFeePercentage: number;
  noGeneralReturnPolicyText?: string;
  maxTicketsPerBooking: number;
  maxSeatsPerBooking?: number;
  seatHoldDurationMinutes: number;
  seatHoldTimeoutMinutes?: number;
}

export interface AdminDashboardMetrics {
  totalEvents: number;
  upcomingEvents: number;
  totalStadiumSeats: number;
  availableSeats: number;
  bookedSeats: number;
  todayBookings: number;
  totalRevenue: number;
  pendingRefundRequests: number;
}

export type AdminTab =
  | 'dashboard'
  | 'stadium-overview'
  | 'stadium-map'
  | 'stands'
  | 'sections'
  | 'seats'
  | 'events'
  | 'seat-inventory'
  | 'pricing'
  | 'bookings'
  | 'refund-requests'
  | 'customers'
  | 'reports'
  | 'notifications'
  | 'settings';
