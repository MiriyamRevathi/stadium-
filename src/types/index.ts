export type SportType = 'Cricket' | 'Football' | 'Concert';

export type SectionCategory = 'Regular' | 'Premium' | 'VIP' | 'Suite';

export type TierLevel = 'Lower Bowl' | 'Middle Bowl' | 'Upper Bowl' | 'Special Hospitality';

export type SeatStatus = 'available' | 'selected' | 'sold' | 'blocked';

export interface Stadium {
  id: string;
  name: string;
  shortName: string;
  nickname: string;
  city: string;
  location: string;
  capacity: number;
  established: number;
  operator: string;
  homeTeam: string;
  floodlights: string;
  ends: [string, string];
  description: string;
  facilities: string[];
}

export interface StadiumSection {
  id: string;
  stadiumId: string;
  name: string;
  displayName: string;
  stand: 'North Pavilion' | 'South Pavilion' | 'East Stand' | 'West Stand';
  tier: TierLevel;
  category: SectionCategory;
  price: number;
  gate: string;
  rows: string[];
  seatsPerRow: number;
  totalSeats: number;
  // Angular coordinates for SVG generation (polar coordinates around center)
  startAngle: number; // degrees
  endAngle: number;   // degrees
  innerRadius: number; // px from center in SVG coordinate system
  outerRadius: number; // px from center
  labelX?: number;
  labelY?: number;
}

export interface Seat {
  id: string;
  sectionId: string;
  row: string;
  number: number;
  price: number;
  status: SeatStatus;
  category: SectionCategory;
}

export interface StadiumEvent {
  id: string;
  name: string;
  matchType: string;
  sport: SportType;
  date: string;
  time: string;
  venue: string;
  venueLocation: string;
  stadiumId: string;
  startingPrice: number;
  teams: {
    team1: { name: string; short: string; flagOrBadge: string; color: string };
    team2: { name: string; short: string; flagOrBadge: string; color: string };
  };
  description: string;
  tournament: string;
  isHot?: boolean;
}

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
}

export interface Booking {
  id: string;
  eventId: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  customer: CustomerInfo;
  seats: {
    id: string;
    sectionId: string;
    sectionName: string;
    row: string;
    number: number;
    price: number;
    category: SectionCategory;
  }[];
  ticketPrice: number;
  convenienceFee: number;
  taxes: number;
  total: number;
  bookingDate: string;
  paymentMethod: 'UPI' | 'Card' | 'Net Banking';
  paymentStatus: 'Paid' | 'Pending';
  status: 'Confirmed' | 'Cancelled';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarInitials: string;
  role: 'fan' | 'admin';
}
