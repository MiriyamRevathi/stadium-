/**
 * High-Density Stadium Seat Inventory Matrix - Part 2: VVS Laxman South Stand
 * Rajiv Gandhi International Cricket Stadium (Uppal, Hyderabad)
 */

import { SeatInventoryRecord } from './seatInventoryMatrixPart1';

function generateSouthStandSeats(): SeatInventoryRecord[] {
  const seats: SeatInventoryRecord[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];
  const sections = [
    { id: 'S01', name: 'VVS Laxman Pavilion Lower 1', cat: 'VIP', price: 7000, gate: 'Gate 8' },
    { id: 'S02', name: 'VVS Laxman Pavilion Lower 2', cat: 'VIP', price: 7000, gate: 'Gate 8' },
    { id: 'S03', name: 'South Corporate Suites Level 1', cat: 'Suite', price: 16000, gate: 'Gate 9' },
    { id: 'S04', name: 'South Corporate Suites Level 2', cat: 'Suite', price: 22000, gate: 'Gate 9' },
    { id: 'S05', name: 'South Grandstand Upper 1', cat: 'Premium', price: 4000, gate: 'Gate 10' },
    { id: 'S06', name: 'South Grandstand Upper 2', cat: 'Premium', price: 4000, gate: 'Gate 10' }
  ];

  sections.forEach((sec) => {
    rows.forEach((r, rIdx) => {
      for (let s = 1; s <= 45; s++) {
        const seatId = `SEAT-${sec.id}-${r}-${s}`;
        const isSold = (s * 4 + rIdx * 5) % 5 === 0;
        const isBlocked = (s * rIdx) % 19 === 0;

        seats.push({
          seatId,
          standId: 'stand-south',
          standName: 'South Stand (VVS Laxman End)',
          sectionId: sec.id,
          sectionName: sec.name,
          tier: sec.cat === 'Suite' ? 'Suite' : rIdx < 10 ? 'Lower' : rIdx < 20 ? 'Middle' : 'Upper',
          category: sec.cat as any,
          row: r,
          seatNumber: s,
          basePrice: sec.price,
          gate: sec.gate,
          sightlineQualityScore: 94 - rIdx * 0.5,
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

export const SOUTH_PAVILION_SEAT_INVENTORY: SeatInventoryRecord[] = generateSouthStandSeats();
