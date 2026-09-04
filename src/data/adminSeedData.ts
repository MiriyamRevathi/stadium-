import {
  AdminEvent,
  AdminNotification,
  AdminSettings,
  Booking,
  Customer,
  EventPricingRecord,
  EventSeatInventoryItem,
  PhysicalSeat,
  RefundRequest,
  Section,
  Stand
} from '../types/admin';

export const SEED_ADMIN_SETTINGS: AdminSettings = {
  stadiumName: 'Rajiv Gandhi International Cricket Stadium',
  stadiumShortName: 'Uppal Stadium',
  stadiumLocation: 'Uppal, Hyderabad, Telangana 500039',
  operator: 'Hyderabad Cricket Association (HCA)',
  city: 'Hyderabad',
  established: 2004,
  totalCapacity: 55000,
  gates: ['Gate 1', 'Gate 2', 'Gate 3', 'Gate 4', 'Gate 5', 'Gate 6', 'Gate 7', 'Gate 8', 'Gate 9', 'Gate 10', 'Gate 11', 'Gate 12'],
  refundWindowDays: 3,
  refundProcessingTime: '5–7 business days after approval',
  strictReturnPolicy: true,
  cancellationFeePercentage: 5,
  noGeneralReturnPolicyText:
    'NO GENERAL RETURN POLICY: Tickets are non-refundable unless a refund request is submitted at least 3 days before the scheduled event. Refunds are processed within 5–7 business days after approval.',
  maxTicketsPerBooking: 6,
  maxSeatsPerBooking: 6,
  seatHoldDurationMinutes: 10,
  seatHoldTimeoutMinutes: 10
};

export const SEED_STANDS: Stand[] = [
  {
    id: 'stand-north',
    name: 'North Stand',
    code: 'NORTH',
    description: 'Pavilion End featuring the official Media Centre, President Box, and Executive Corporate Suites.',
    capacity: 14200,
    sectionIds: ['N01', 'N02', 'N03', 'N04'],
    gates: ['Gate 1', 'Gate 2', 'Gate 3'],
    features: ['Pavilion End View', 'Direct Bowler Axis', 'Air-Conditioned Lounges', 'Priority Parking']
  },
  {
    id: 'stand-south',
    name: 'South Stand',
    code: 'SOUTH',
    description: 'VVS Laxman Pavilion Stand with modern player dressing rooms, ultra-premium hospitality, and VIP bays.',
    capacity: 15300,
    sectionIds: ['S01', 'S02', 'S03', 'S04'],
    gates: ['Gate 8', 'Gate 9', 'Gate 10'],
    features: ['VVS Laxman Pavilion', 'Player Dugout Proximity', 'Fine Dining Buffets', 'Exclusive Elevators']
  },
  {
    id: 'stand-east',
    name: 'East Stand',
    code: 'EAST',
    description: 'Spacious multi-tiered grandstand with panoramic views across the full Hyderabad cricket oval.',
    capacity: 12800,
    sectionIds: ['E01', 'E02', 'E03'],
    gates: ['Gate 4', 'Gate 5', 'Gate 6', 'Gate 7'],
    features: ['High-Atmosphere Fan Zone', 'Multiple Concessions Courts', 'Wide Concourse Access']
  },
  {
    id: 'stand-west',
    name: 'West Stand',
    code: 'WEST',
    description: 'Grandstand hospitality with covered roof architecture, corporate club lounges, and shaded afternoon seating.',
    capacity: 12700,
    sectionIds: ['W01', 'W02', 'W03'],
    gates: ['Gate 11', 'Gate 12', 'Gate 13', 'Gate 14'],
    features: ['Shaded Afternoon Sun', 'Club Lounge Access', 'Cocktail Bars', 'Padded Bucket Seats']
  }
];

export const SEED_SECTIONS: Section[] = [
  // North Stand
  {
    id: 'N01',
    standId: 'stand-north',
    standName: 'North Stand',
    name: 'North Lower General',
    category: 'General',
    basePrice: 500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 1',
    tier: 'Lower Tier',
    startAngle: 60,
    endAngle: 80,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'N02',
    standId: 'stand-north',
    standName: 'North Stand',
    name: 'North Middle Premium',
    category: 'Premium',
    basePrice: 1500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 2',
    tier: 'Middle Tier',
    startAngle: 80,
    endAngle: 100,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'N03',
    standId: 'stand-north',
    standName: 'North Stand',
    name: 'North Pavilion VIP',
    category: 'VIP',
    basePrice: 3500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 2',
    tier: 'Pavilion Club',
    startAngle: 100,
    endAngle: 120,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'N04',
    standId: 'stand-north',
    standName: 'North Stand',
    name: 'North Media Hospitality',
    category: 'Hospitality',
    basePrice: 7500,
    totalSeats: 48,
    rows: ['A', 'B', 'C', 'D'],
    seatsPerRow: 12,
    gate: 'Gate 3',
    tier: 'Corporate Box',
    startAngle: 75,
    endAngle: 105,
    innerRadius: 245,
    outerRadius: 295
  },

  // South Stand
  {
    id: 'S01',
    standId: 'stand-south',
    standName: 'South Stand',
    name: 'South Lower General',
    category: 'General',
    basePrice: 500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 8',
    tier: 'Lower Tier',
    startAngle: 240,
    endAngle: 260,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'S02',
    standId: 'stand-south',
    standName: 'South Stand',
    name: 'South Middle Premium',
    category: 'Premium',
    basePrice: 1500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 9',
    tier: 'Middle Tier',
    startAngle: 260,
    endAngle: 280,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'S03',
    standId: 'stand-south',
    standName: 'South Stand',
    name: 'South Laxman VIP',
    category: 'VIP',
    basePrice: 3500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 9',
    tier: 'Pavilion Club',
    startAngle: 280,
    endAngle: 300,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'S04',
    standId: 'stand-south',
    standName: 'South Stand',
    name: 'South President Hospitality',
    category: 'Hospitality',
    basePrice: 7500,
    totalSeats: 48,
    rows: ['A', 'B', 'C', 'D'],
    seatsPerRow: 12,
    gate: 'Gate 10',
    tier: 'Corporate Box',
    startAngle: 255,
    endAngle: 285,
    innerRadius: 245,
    outerRadius: 295
  },

  // East Stand
  {
    id: 'E01',
    standId: 'stand-east',
    standName: 'East Stand',
    name: 'East General Tier 1',
    category: 'General',
    basePrice: 500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 4',
    tier: 'Lower Tier',
    startAngle: 340,
    endAngle: 20,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'E02',
    standId: 'stand-east',
    standName: 'East Stand',
    name: 'East General Tier 2',
    category: 'General',
    basePrice: 600,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 5',
    tier: 'Middle Tier',
    startAngle: 20,
    endAngle: 50,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'E03',
    standId: 'stand-east',
    standName: 'East Stand',
    name: 'East Boundary Premium',
    category: 'Premium',
    basePrice: 1500,
    totalSeats: 48,
    rows: ['A', 'B', 'C', 'D'],
    seatsPerRow: 12,
    gate: 'Gate 6',
    tier: 'Upper Tier',
    startAngle: 345,
    endAngle: 35,
    innerRadius: 245,
    outerRadius: 295
  },

  // West Stand
  {
    id: 'W01',
    standId: 'stand-west',
    standName: 'West Stand',
    name: 'West Grandstand Premium',
    category: 'Premium',
    basePrice: 1500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 11',
    tier: 'Lower Tier',
    startAngle: 160,
    endAngle: 200,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'W02',
    standId: 'stand-west',
    standName: 'West Stand',
    name: 'West Club VIP',
    category: 'VIP',
    basePrice: 3500,
    totalSeats: 60,
    rows: ['A', 'B', 'C', 'D', 'E', 'F'],
    seatsPerRow: 10,
    gate: 'Gate 12',
    tier: 'Middle Tier',
    startAngle: 130,
    endAngle: 160,
    innerRadius: 180,
    outerRadius: 235
  },
  {
    id: 'W03',
    standId: 'stand-west',
    standName: 'West Stand',
    name: 'West Executive Hospitality',
    category: 'Hospitality',
    basePrice: 7500,
    totalSeats: 48,
    rows: ['A', 'B', 'C', 'D'],
    seatsPerRow: 12,
    gate: 'Gate 13',
    tier: 'Corporate Box',
    startAngle: 145,
    endAngle: 195,
    innerRadius: 245,
    outerRadius: 295
  }
];

// Generate structured data-driven physical seats
export function generatePhysicalStadiumSeats(): PhysicalSeat[] {
  const seats: PhysicalSeat[] = [];

  SEED_SECTIONS.forEach((section) => {
    section.rows.forEach((row) => {
      for (let num = 1; num <= section.seatsPerRow; num++) {
        const seatNumberStr = num.toString().padStart(2, '0');
        const id = `${section.id}-${row}-${seatNumberStr}`;
        seats.push({
          id,
          standId: section.standId,
          standName: section.standName as any,
          sectionId: section.id,
          sectionName: section.name,
          row,
          seatNumber: num,
          category: section.category,
          basePrice: section.basePrice,
          status: 'Available',
          gate: section.gate
        });
      }
    });
  });

  return seats;
}

export const SEED_PHYSICAL_SEATS: PhysicalSeat[] = generatePhysicalStadiumSeats();

export const SEED_EVENTS: AdminEvent[] = [
  {
    id: 'evt-ind-aus',
    name: 'India vs Australia',
    eventType: 'Cricket',
    date: '2026-10-18',
    startTime: '19:00',
    endTime: '22:45',
    description: '3rd T20 International Series decider under floodlights at Uppal Stadium.',
    status: 'Active',
    tournament: 'Border-Gavaskar T20 Series',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    activeBookingsCount: 142
  },
  {
    id: 'evt-ind-eng',
    name: 'India vs England',
    eventType: 'Cricket',
    date: '2026-10-24',
    startTime: '19:00',
    endTime: '22:45',
    description: 'High-voltage International bilateral clash with packed stands and fan zones.',
    status: 'Active',
    tournament: 'Paytm Trophy Bilateral Series',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    activeBookingsCount: 98
  },
  {
    id: 'evt-t20-final',
    name: 'Hyderabad T20 League Final',
    eventType: 'Cricket',
    date: '2026-11-02',
    startTime: '19:30',
    endTime: '23:15',
    description: 'The pinnacle showdown of the Premier Deccan Cricket Tournament with trophy ceremony.',
    status: 'Scheduled',
    tournament: 'Deccan Premier Championship',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    activeBookingsCount: 65
  },
  {
    id: 'evt-hyd-football',
    name: 'Hyderabad Football Championship',
    eventType: 'Football',
    date: '2026-11-12',
    startTime: '18:00',
    endTime: '20:15',
    description: 'National Super League Inter-City clash with transformed arena layout.',
    status: 'Scheduled',
    tournament: 'Indian Inter-City Cup',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    activeBookingsCount: 34
  },
  {
    id: 'evt-music-night',
    name: 'Hyderabad Music Night',
    eventType: 'Concert',
    date: '2026-11-20',
    startTime: '18:30',
    endTime: '23:00',
    description: 'Grand arena concert featuring international pop & Tollywood musical legends.',
    status: 'Scheduled',
    tournament: 'Live Deccan Music Fest',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    activeBookingsCount: 45
  }
];

// Event-Specific Pricing configurations
export const SEED_EVENT_PRICING: Record<string, EventPricingRecord> = {
  'evt-ind-aus': {
    eventId: 'evt-ind-aus',
    categories: {
      General: { category: 'General', price: 500, totalSeats: 240, availableSeats: 110, bookedSeats: 130 },
      Premium: { category: 'Premium', price: 1500, totalSeats: 228, availableSeats: 94, bookedSeats: 134 },
      VIP: { category: 'VIP', price: 3500, totalSeats: 180, availableSeats: 58, bookedSeats: 122 },
      Hospitality: { category: 'Hospitality', price: 7500, totalSeats: 144, availableSeats: 42, bookedSeats: 102 }
    },
    updatedAt: '2026-09-01T10:00:00Z'
  },
  'evt-ind-eng': {
    eventId: 'evt-ind-eng',
    categories: {
      General: { category: 'General', price: 600, totalSeats: 240, availableSeats: 140, bookedSeats: 100 },
      Premium: { category: 'Premium', price: 1800, totalSeats: 228, availableSeats: 120, bookedSeats: 108 },
      VIP: { category: 'VIP', price: 4000, totalSeats: 180, availableSeats: 90, bookedSeats: 90 },
      Hospitality: { category: 'Hospitality', price: 8500, totalSeats: 144, availableSeats: 60, bookedSeats: 84 }
    },
    updatedAt: '2026-09-01T10:30:00Z'
  },
  'evt-t20-final': {
    eventId: 'evt-t20-final',
    categories: {
      General: { category: 'General', price: 750, totalSeats: 240, availableSeats: 175, bookedSeats: 65 },
      Premium: { category: 'Premium', price: 2000, totalSeats: 228, availableSeats: 160, bookedSeats: 68 },
      VIP: { category: 'VIP', price: 5000, totalSeats: 180, availableSeats: 130, bookedSeats: 50 },
      Hospitality: { category: 'Hospitality', price: 10000, totalSeats: 144, availableSeats: 100, bookedSeats: 44 }
    },
    updatedAt: '2026-09-01T11:00:00Z'
  },
  'evt-hyd-football': {
    eventId: 'evt-hyd-football',
    categories: {
      General: { category: 'General', price: 300, totalSeats: 240, availableSeats: 200, bookedSeats: 40 },
      Premium: { category: 'Premium', price: 800, totalSeats: 228, availableSeats: 185, bookedSeats: 43 },
      VIP: { category: 'VIP', price: 1800, totalSeats: 180, availableSeats: 145, bookedSeats: 35 },
      Hospitality: { category: 'Hospitality', price: 4000, totalSeats: 144, availableSeats: 120, bookedSeats: 24 }
    },
    updatedAt: '2026-09-01T11:15:00Z'
  },
  'evt-music-night': {
    eventId: 'evt-music-night',
    categories: {
      General: { category: 'General', price: 800, totalSeats: 240, availableSeats: 190, bookedSeats: 50 },
      Premium: { category: 'Premium', price: 2500, totalSeats: 228, availableSeats: 170, bookedSeats: 58 },
      VIP: { category: 'VIP', price: 6000, totalSeats: 180, availableSeats: 135, bookedSeats: 45 },
      Hospitality: { category: 'Hospitality', price: 12000, totalSeats: 144, availableSeats: 110, bookedSeats: 34 }
    },
    updatedAt: '2026-09-01T11:30:00Z'
  }
};

// Seed Customers
export const SEED_CUSTOMERS: Customer[] = [
  {
    id: 'cust-101',
    name: 'Rahul Reddy',
    email: 'rahul.reddy@gmail.com',
    phone: '+91 98480 12345',
    totalBookings: 4,
    upcomingBookings: 2,
    pastBookings: 2,
    refundRequests: 1,
    totalSpent: 16500,
    joinedDate: '2025-11-10'
  },
  {
    id: 'cust-102',
    name: 'Pooja Sharma',
    email: 'pooja.sharma@yahoo.com',
    phone: '+91 94401 56789',
    totalBookings: 2,
    upcomingBookings: 1,
    pastBookings: 1,
    refundRequests: 1,
    totalSpent: 8200,
    joinedDate: '2026-02-14'
  },
  {
    id: 'cust-103',
    name: 'Vikram Chaitanya',
    email: 'vikram.ch@outlook.com',
    phone: '+91 99887 65432',
    totalBookings: 3,
    upcomingBookings: 2,
    pastBookings: 1,
    refundRequests: 0,
    totalSpent: 22400,
    joinedDate: '2026-01-20'
  },
  {
    id: 'cust-104',
    name: 'Sneha Kulkarni',
    email: 'sneha.k@hotmail.com',
    phone: '+91 97012 34567',
    totalBookings: 1,
    upcomingBookings: 0,
    pastBookings: 1,
    refundRequests: 1,
    totalSpent: 3000,
    joinedDate: '2026-04-05'
  },
  {
    id: 'cust-105',
    name: 'Arjun Nambiar',
    email: 'arjun.nambiar@gmail.com',
    phone: '+91 96521 87654',
    totalBookings: 5,
    upcomingBookings: 3,
    pastBookings: 2,
    refundRequests: 2,
    totalSpent: 34000,
    joinedDate: '2025-08-19'
  }
];

// Seed Bookings
export const SEED_BOOKINGS: Booking[] = [
  {
    id: 'BK-UPPAL-8901',
    customerId: 'cust-101',
    customerName: 'Rahul Reddy',
    customerEmail: 'rahul.reddy@gmail.com',
    customerPhone: '+91 98480 12345',
    eventId: 'evt-ind-aus',
    eventName: 'India vs Australia',
    eventDate: '2026-10-18',
    stand: 'North Stand',
    standName: 'North Stand',
    section: 'N03',
    sectionName: 'N03',
    row: 'A',
    category: 'VIP',
    seats: ['N03-A-01', 'N03-A-02'],
    seatIds: ['N03-A-01', 'N03-A-02'],
    seatCount: 2,
    seatDetails: [
      { seatId: 'N03-A-01', standName: 'North Stand', sectionId: 'N03', row: 'A', number: 1, category: 'VIP', price: 3500 },
      { seatId: 'N03-A-02', standName: 'North Stand', sectionId: 'N03', row: 'A', number: 2, category: 'VIP', price: 3500 }
    ],
    amount: 7000,
    convenienceFee: 280,
    taxes: 504,
    totalAmount: 7784,
    bookingDate: '2026-09-01T14:30:00Z',
    status: 'Confirmed',
    paymentMethod: 'UPI',
    transactionRef: 'UPI/HDFC/20260901/98124'
  },
  {
    id: 'BK-UPPAL-8902',
    customerId: 'cust-102',
    customerName: 'Pooja Sharma',
    customerEmail: 'pooja.sharma@yahoo.com',
    customerPhone: '+91 94401 56789',
    eventId: 'evt-ind-aus',
    eventName: 'India vs Australia',
    eventDate: '2026-10-18',
    stand: 'North Stand',
    standName: 'North Stand',
    section: 'N02',
    sectionName: 'N02',
    row: 'B',
    category: 'Premium',
    seats: ['N02-B-05', 'N02-B-06'],
    seatIds: ['N02-B-05', 'N02-B-06'],
    seatCount: 2,
    seatDetails: [
      { seatId: 'N02-B-05', standName: 'North Stand', sectionId: 'N02', row: 'B', number: 5, category: 'Premium', price: 1500 },
      { seatId: 'N02-B-06', standName: 'North Stand', sectionId: 'N02', row: 'B', number: 6, category: 'Premium', price: 1500 }
    ],
    amount: 3000,
    convenienceFee: 120,
    taxes: 216,
    totalAmount: 3336,
    bookingDate: '2026-09-02T11:15:00Z',
    status: 'Confirmed',
    paymentMethod: 'Credit/Debit Card',
    transactionRef: 'CC/VISA/20260902/54821'
  },
  {
    id: 'BK-UPPAL-8903',
    customerId: 'cust-103',
    customerName: 'Vikram Chaitanya',
    customerEmail: 'vikram.ch@outlook.com',
    customerPhone: '+91 99887 65432',
    eventId: 'evt-ind-eng',
    eventName: 'India vs England',
    eventDate: '2026-10-24',
    stand: 'South Stand',
    standName: 'South Stand',
    section: 'S04',
    sectionName: 'S04',
    row: 'A',
    category: 'Hospitality',
    seats: ['S04-A-01'],
    seatIds: ['S04-A-01'],
    seatCount: 1,
    seatDetails: [
      { seatId: 'S04-A-01', standName: 'South Stand', sectionId: 'S04', row: 'A', number: 1, category: 'Hospitality', price: 8500 }
    ],
    amount: 8500,
    convenienceFee: 340,
    taxes: 612,
    totalAmount: 9452,
    bookingDate: '2026-09-02T16:45:00Z',
    status: 'Confirmed',
    paymentMethod: 'Net Banking',
    transactionRef: 'NB/SBI/20260902/77120'
  },
  {
    id: 'BK-UPPAL-8904',
    customerId: 'cust-104',
    customerName: 'Sneha Kulkarni',
    customerEmail: 'sneha.k@hotmail.com',
    customerPhone: '+91 97012 34567',
    eventId: 'evt-ind-aus',
    eventName: 'India vs Australia',
    eventDate: '2026-10-18',
    stand: 'East Stand',
    standName: 'East Stand',
    section: 'E01',
    sectionName: 'E01',
    row: 'C',
    category: 'General',
    seats: ['E01-C-01', 'E01-C-02', 'E01-C-03'],
    seatIds: ['E01-C-01', 'E01-C-02', 'E01-C-03'],
    seatCount: 3,
    seatDetails: [
      { seatId: 'E01-C-01', standName: 'East Stand', sectionId: 'E01', row: 'C', number: 1, category: 'General', price: 500 },
      { seatId: 'E01-C-02', standName: 'East Stand', sectionId: 'E01', row: 'C', number: 2, category: 'General', price: 500 },
      { seatId: 'E01-C-03', standName: 'East Stand', sectionId: 'E01', row: 'C', number: 3, category: 'General', price: 500 }
    ],
    amount: 1500,
    convenienceFee: 60,
    taxes: 108,
    totalAmount: 1668,
    bookingDate: '2026-09-02T19:20:00Z',
    status: 'Confirmed',
    paymentMethod: 'UPI',
    transactionRef: 'UPI/PAYTM/20260902/33912'
  },
  {
    id: 'BK-UPPAL-8905',
    customerId: 'cust-105',
    customerName: 'Arjun Nambiar',
    customerEmail: 'arjun.nambiar@gmail.com',
    customerPhone: '+91 96521 87654',
    eventId: 'evt-t20-final',
    eventName: 'Hyderabad T20 League Final',
    eventDate: '2026-11-02',
    stand: 'West Stand',
    standName: 'West Stand',
    section: 'W02',
    sectionName: 'W02',
    row: 'B',
    category: 'VIP',
    seats: ['W02-B-01', 'W02-B-02'],
    seatIds: ['W02-B-01', 'W02-B-02'],
    seatCount: 2,
    seatDetails: [
      { seatId: 'W02-B-01', standName: 'West Stand', sectionId: 'W02', row: 'B', number: 1, category: 'VIP', price: 5000 },
      { seatId: 'W02-B-02', standName: 'West Stand', sectionId: 'W02', row: 'B', number: 2, category: 'VIP', price: 5000 }
    ],
    amount: 10000,
    convenienceFee: 400,
    taxes: 720,
    totalAmount: 11120,
    bookingDate: '2026-09-03T09:10:00Z',
    status: 'Confirmed',
    paymentMethod: 'Credit/Debit Card',
    transactionRef: 'CC/ICICI/20260903/10293'
  }
];

// Seed Refund Requests demonstrating the strict 3-day refund policy rule!
export const SEED_REFUND_REQUESTS: RefundRequest[] = [
  {
    id: 'REF-2026-001',
    bookingId: 'BK-UPPAL-8901',
    customerId: 'cust-101',
    customerName: 'Rahul Reddy',
    customerEmail: 'rahul.reddy@gmail.com',
    eventId: 'evt-ind-aus',
    eventName: 'India vs Australia',
    eventDate: '2026-10-18',
    seats: ['N03-A-01', 'N03-A-02'],
    seatIds: ['N03-A-01', 'N03-A-02'],
    originalAmount: 7000,
    refundAmount: 7000,
    requestDate: '2026-10-12', // 6 days before event (Event: Oct 18). 18 - 12 = 6 days >= 3 days -> ELIGIBLE!
    deadlineDate: '2026-10-15',
    eligibility: 'Eligible',
    eligibilityReason: 'Submitted 6 days before event (Required: at least 3 days). Request is fully eligible for refund.',
    daysBeforeEvent: 6,
    reason: 'Family medical emergency, unable to travel to Hyderabad.',
    status: 'Requested',
    adminNotes: 'Awaiting admin review.'
  },
  {
    id: 'REF-2026-002',
    bookingId: 'BK-UPPAL-8902',
    customerId: 'cust-102',
    customerName: 'Pooja Sharma',
    customerEmail: 'pooja.sharma@yahoo.com',
    eventId: 'evt-ind-aus',
    eventName: 'India vs Australia',
    eventDate: '2026-10-18',
    seats: ['N02-B-05', 'N02-B-06'],
    seatIds: ['N02-B-05', 'N02-B-06'],
    originalAmount: 3000,
    refundAmount: 3000,
    requestDate: '2026-10-15', // Exactly 3 days before event (18 - 15 = 3 days). Exactly 3 days -> ELIGIBLE!
    deadlineDate: '2026-10-15',
    eligibility: 'Eligible',
    eligibilityReason: 'Submitted exactly 3 days before event. Within eligible policy window.',
    daysBeforeEvent: 3,
    reason: 'Official business conference scheduled on match evening.',
    status: 'Under Review',
    adminNotes: 'Validated 3-day window; checking seat release.'
  },
  {
    id: 'REF-2026-003',
    bookingId: 'BK-UPPAL-8904',
    customerId: 'cust-104',
    customerName: 'Sneha Kulkarni',
    customerEmail: 'sneha.k@hotmail.com',
    eventId: 'evt-ind-aus',
    eventName: 'India vs Australia',
    eventDate: '2026-10-18',
    seats: ['E01-C-01', 'E01-C-02', 'E01-C-03'],
    seatIds: ['E01-C-01', 'E01-C-02', 'E01-C-03'],
    originalAmount: 1500,
    refundAmount: 1500,
    requestDate: '2026-10-16', // 2 days before event (18 - 16 = 2 days < 3 days) -> NOT ELIGIBLE!
    deadlineDate: '2026-10-15',
    eligibility: 'Not Eligible',
    eligibilityReason: 'Refund not eligible — request submitted after the allowed deadline.',
    daysBeforeEvent: 2,
    reason: 'Friend cancelled, cannot attend alone.',
    status: 'Rejected',
    adminNotes: 'Automatic rule enforcement: submitted 2 days before event, minimum required is 3 days.'
  },
  {
    id: 'REF-2026-004',
    bookingId: 'BK-UPPAL-8905',
    customerId: 'cust-105',
    customerName: 'Arjun Nambiar',
    customerEmail: 'arjun.nambiar@gmail.com',
    eventId: 'evt-t20-final',
    eventName: 'Hyderabad T20 League Final',
    eventDate: '2026-11-02',
    seats: ['W02-B-01', 'W02-B-02'],
    seatIds: ['W02-B-01', 'W02-B-02'],
    originalAmount: 10000,
    refundAmount: 10000,
    requestDate: '2026-10-25', // 8 days before Nov 02 -> ELIGIBLE!
    deadlineDate: '2026-10-30',
    eligibility: 'Eligible',
    eligibilityReason: 'Submitted 8 days before event. Eligible.',
    daysBeforeEvent: 8,
    reason: 'Accidental double booking with colleague.',
    status: 'Processing',
    adminNotes: 'Approved by admin on Oct 26. Batch processing via bank payout (5–7 business days).'
  },
  {
    id: 'REF-2026-005',
    bookingId: 'BK-UPPAL-8890',
    customerId: 'cust-105',
    customerName: 'Arjun Nambiar',
    customerEmail: 'arjun.nambiar@gmail.com',
    eventId: 'evt-ind-aus',
    eventName: 'India vs Australia',
    eventDate: '2026-10-18',
    seats: ['N02-B-04'],
    seatIds: ['N02-B-04'],
    originalAmount: 3500,
    refundAmount: 3500,
    requestDate: '2026-10-10', // 8 days before event -> ELIGIBLE and COMPLETED!
    deadlineDate: '2026-10-15',
    eligibility: 'Eligible',
    eligibilityReason: 'Submitted 8 days before event. Eligible.',
    daysBeforeEvent: 8,
    reason: 'Flight tickets cancelled.',
    status: 'Refunded',
    processedDate: '2026-10-16T15:00:00Z',
    adminNotes: 'Refund completed and credited to customer original payment method.'
  }
];

export const SEED_NOTIFICATIONS: AdminNotification[] = [
  {
    id: 'notif-01',
    title: 'New Refund Request Received',
    message: 'Booking BK-UPPAL-8901 (Rahul Reddy) requested a refund of ₹7,000 for India vs Australia.',
    targetAudience: 'Admins',
    type: 'Refund',
    timestamp: '2026-10-12T14:30:00Z',
    createdAt: '2026-10-12T14:30:00Z',
    read: false,
    isRead: false
  },
  {
    id: 'notif-02',
    title: 'Refund Approved for Processing',
    message: 'Refund request REF-2026-004 (Arjun Nambiar - ₹10,000) marked as Processing.',
    targetAudience: 'Admins',
    type: 'Refund',
    timestamp: '2026-10-26T10:00:00Z',
    createdAt: '2026-10-26T10:00:00Z',
    read: false,
    isRead: false
  },
  {
    id: 'notif-03',
    title: 'Match Day Gates Open Notification',
    message: 'Gates for India vs Australia open at 4:30 PM. Concourse food courts operational.',
    targetAudience: 'Event Attendees',
    type: 'System',
    eventId: 'evt-ind-aus',
    timestamp: '2026-10-18T09:00:00Z',
    createdAt: '2026-10-18T09:00:00Z',
    read: true,
    isRead: true
  },
  {
    id: 'notif-04',
    title: 'Pricing Updated for India vs England',
    message: 'Hospitality tier revised from ₹8,000 to ₹8,500 following corporate demand surge.',
    targetAudience: 'Admins',
    type: 'Booking',
    eventId: 'evt-ind-eng',
    timestamp: '2026-09-01T10:30:00Z',
    createdAt: '2026-09-01T10:30:00Z',
    read: true,
    isRead: true
  }
];

// Seed Event-Specific Seat Inventory Map
// Keeps STADIUM SEAT and EVENT SEAT INVENTORY strictly separated!
export function initializeEventSeatInventory(): Record<string, Record<string, EventSeatInventoryItem>> {
  const eventInventory: Record<string, Record<string, EventSeatInventoryItem>> = {};

  SEED_EVENTS.forEach((event) => {
    eventInventory[event.id] = {};
    const pricing = SEED_EVENT_PRICING[event.id]?.categories;

    SEED_PHYSICAL_SEATS.forEach((physicalSeat) => {
      // Deterministic variation for different events
      let status: 'Available' | 'Booked' | 'Reserved' | 'Blocked' | 'Maintenance' = 'Available';

      const seatHash = (physicalSeat.id.charCodeAt(0) * 17 + physicalSeat.seatNumber * 7 + event.id.length) % 10;

      if (event.id === 'evt-ind-aus') {
        // High demand event
        if (seatHash === 1 || seatHash === 2 || seatHash === 4 || seatHash === 7) {
          status = 'Booked';
        } else if (seatHash === 3) {
          status = 'Reserved';
        } else if (seatHash === 9) {
          status = 'Blocked';
        }
      } else if (event.id === 'evt-ind-eng') {
        // Moderate demand
        if (seatHash === 2 || seatHash === 5) {
          status = 'Booked';
        } else if (seatHash === 8) {
          status = 'Reserved';
        }
      } else {
        // Newly scheduled
        if (seatHash === 1) {
          status = 'Booked';
        }
      }

      const price = pricing ? pricing[physicalSeat.category]?.price || physicalSeat.basePrice : physicalSeat.basePrice;

      eventInventory[event.id][physicalSeat.id] = {
        seatId: physicalSeat.id,
        eventId: event.id,
        status,
        price,
        category: physicalSeat.category
      };
    });
  });

  return eventInventory;
}
