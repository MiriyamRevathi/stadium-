import { Booking } from '../types';

export const INITIAL_SEEDED_BOOKINGS: Booking[] = [
  {
    id: 'STAD-2026-000124',
    eventId: 'evt-ind-aus-2026',
    eventName: 'India vs Australia',
    eventDate: 'October 18, 2026',
    eventTime: '7:00 PM',
    venue: 'Rajiv Gandhi International Cricket Stadium, Uppal, Hyderabad',
    customer: {
      fullName: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 98490 12345'
    },
    seats: [
      {
        id: 'sec-a03-C-14',
        sectionId: 'sec-a03',
        sectionName: 'A03',
        row: 'C',
        number: 14,
        price: 2500,
        category: 'Premium'
      },
      {
        id: 'sec-a03-C-15',
        sectionId: 'sec-a03',
        sectionName: 'A03',
        row: 'C',
        number: 15,
        price: 2500,
        category: 'Premium'
      }
    ],
    ticketPrice: 5000,
    convenienceFee: 250,
    taxes: 450,
    total: 5700,
    bookingDate: '2026-09-01T14:22:00Z',
    paymentMethod: 'UPI',
    paymentStatus: 'Paid',
    status: 'Confirmed'
  },
  {
    id: 'STAD-2026-000089',
    eventId: 'evt-hpl-final-2026',
    eventName: 'Hyderabad Premier League Final',
    eventDate: 'November 8, 2026',
    eventTime: '6:30 PM',
    venue: 'Rajiv Gandhi International Cricket Stadium, Uppal, Hyderabad',
    customer: {
      fullName: 'Priya Reddy',
      email: 'priya.reddy@example.com',
      phone: '+91 98765 43210'
    },
    seats: [
      {
        id: 'sec-b02-F-22',
        sectionId: 'sec-b02',
        sectionName: 'B02',
        row: 'F',
        number: 22,
        price: 1140,
        category: 'Regular'
      }
    ],
    ticketPrice: 1140,
    convenienceFee: 60,
    taxes: 0,
    total: 1200,
    bookingDate: '2026-08-28T18:10:00Z',
    paymentMethod: 'Card',
    paymentStatus: 'Paid',
    status: 'Confirmed'
  }
];

const STORAGE_KEY = 'stadia_bookings_list';

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw || typeof raw !== 'string') return fallback;
  const trimmed = raw.trim();
  // Guard against HTML error pages or other non-JSON content that would throw
  // "Unexpected token '<' ... is not valid JSON"
  if (!trimmed || trimmed.startsWith('<') || trimmed.startsWith('<!')) {
    return fallback;
  }
  try {
    return JSON.parse(trimmed) as T;
  } catch {
    return fallback;
  }
}

export function loadBookings(): Booking[] {
  try {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const parsed = safeJsonParse<Booking[]>(saved, []);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error('Failed to load bookings from storage', err);
  }
  return INITIAL_SEEDED_BOOKINGS;
}

export const getStoredBookings = loadBookings;

export function saveBooking(booking: Booking): void {
  try {
    const current = loadBookings();
    const updated = [booking, ...current.filter((b) => b.id !== booking.id)];
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  } catch (err) {
    console.error('Failed to save booking', err);
  }
}
