/**
 * High-Density Stadium Seat Inventory Matrix - Part 1: North Pavilion & VVS Laxman South Stand
 * Rajiv Gandhi International Cricket Stadium (Uppal, Hyderabad)
 */

export interface SeatInventoryRecord {
  seatId: string;
  standId: string;
  standName: string;
  sectionId: string;
  sectionName: string;
  tier: 'Lower' | 'Middle' | 'Upper' | 'Suite';
  category: 'Regular' | 'Premium' | 'VIP' | 'Suite';
  row: string;
  seatNumber: number;
  basePrice: number;
  gate: string;
  sightlineQualityScore: number;
  wheelchairAccessible: boolean;
  powerOutletAvailable: boolean;
  paddedChair: boolean;
  inSeatDining: boolean;
  defaultStatus: 'Available' | 'Sold' | 'Blocked' | 'Held';
}

function generateNorthPavilionSeats(): SeatInventoryRecord[] {
  const seats: SeatInventoryRecord[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];
  const sections = [
    { id: 'N01', name: 'North Pavilion Lower A', cat: 'VIP', price: 7500, gate: 'Gate 1' },
    { id: 'N02', name: 'North Pavilion Lower B', cat: 'VIP', price: 7500, gate: 'Gate 1' },
    { id: 'N03', name: 'North Pavilion Suites Level 1', cat: 'Suite', price: 18000, gate: 'Gate 2' },
    { id: 'N04', name: 'North Pavilion Suites Level 2', cat: 'Suite', price: 25000, gate: 'Gate 2' },
    { id: 'N05', name: 'North Pavilion Upper Terrace A', cat: 'Premium', price: 4500, gate: 'Gate 3' },
    { id: 'N06', name: 'North Pavilion Upper Terrace B', cat: 'Premium', price: 4500, gate: 'Gate 3' }
  ];

  sections.forEach((sec) => {
    rows.forEach((r, rIdx) => {
      for (let s = 1; s <= 45; s++) {
        const seatId = `SEAT-${sec.id}-${r}-${s}`;
        const isSold = (s * 3 + rIdx * 7) % 5 === 0;
        const isBlocked = (s * rIdx) % 23 === 0;

        seats.push({
          seatId,
          standId: 'stand-north',
          standName: 'North Pavilion Stand',
          sectionId: sec.id,
          sectionName: sec.name,
          tier: sec.cat === 'Suite' ? 'Suite' : rIdx < 10 ? 'Lower' : rIdx < 20 ? 'Middle' : 'Upper',
          category: sec.cat as any,
          row: r,
          seatNumber: s,
          basePrice: sec.price,
          gate: sec.gate,
          sightlineQualityScore: 95 - rIdx * 0.5,
          wheelchairAccessible: rIdx === 0,
          powerOutletAvailable: sec.cat === 'VIP' || sec.cat === 'Suite',
          paddedChair: sec.cat !== 'Regular',
          inSeatDining: sec.cat !== 'Regular',
          defaultStatus: isSold ? 'Sold' : isBlocked ? 'Blocked' : 'Available'
        });
      }
    });
  });

  return seats;
}

export const NORTH_PAVILION_SEAT_INVENTORY: SeatInventoryRecord[] = generateNorthPavilionSeats();
