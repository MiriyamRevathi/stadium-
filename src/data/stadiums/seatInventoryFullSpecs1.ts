/**
 * Stadium Seat Inventory Full Specifications - Part 1
 * Rajiv Gandhi International Cricket Stadium (Uppal, Hyderabad) - North Stand Sectors N01 to N06
 */

export interface DetailedSeatSpec {
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
  sunShadeRatio: number;
  sightlineQualityScore: number;
  wheelchairAccessible: boolean;
  powerOutletAvailable: boolean;
  paddedChair: boolean;
  inSeatDining: boolean;
  status: 'Available' | 'Sold' | 'Blocked' | 'Held';
}

function generateNorthSectorSpecs(): DetailedSeatSpec[] {
  const seats: DetailedSeatSpec[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];
  const sections = [
    { id: 'N01', name: 'North Pavilion Lower Sector 1', cat: 'VIP', price: 7500, gate: 'Gate 1' },
    { id: 'N02', name: 'North Pavilion Lower Sector 2', cat: 'VIP', price: 7500, gate: 'Gate 1' },
    { id: 'N03', name: 'North Corporate Suites Tier 1', cat: 'Suite', price: 18000, gate: 'Gate 2' },
    { id: 'N04', name: 'North Corporate Suites Tier 2', cat: 'Suite', price: 25000, gate: 'Gate 2' },
    { id: 'N05', name: 'North Grandstand Upper 1', cat: 'Premium', price: 4500, gate: 'Gate 3' },
    { id: 'N06', name: 'North Grandstand Upper 2', cat: 'Premium', price: 4500, gate: 'Gate 3' }
  ];

  sections.forEach((sec) => {
    rows.forEach((r, rIdx) => {
      for (let s = 1; s <= 50; s++) {
        const seatId = `UPPAL-${sec.id}-${r}-${s}`;
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
          sunShadeRatio: 0.95,
          sightlineQualityScore: 98 - rIdx * 0.4,
          wheelchairAccessible: rIdx === 0,
          powerOutletAvailable: sec.cat === 'VIP' || sec.cat === 'Suite',
          paddedChair: sec.cat !== 'Regular',
          inSeatDining: sec.cat !== 'Regular',
          status: isSold ? 'Sold' : isBlocked ? 'Blocked' : 'Available'
        });
      }
    });
  });

  return seats;
}

export const NORTH_STAND_FULL_SPECS: DetailedSeatSpec[] = generateNorthSectorSpecs();
