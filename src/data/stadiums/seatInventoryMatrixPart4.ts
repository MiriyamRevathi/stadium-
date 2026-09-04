/**
 * High-Density Stadium Seat Inventory Matrix - Part 4: West Grandstand
 * Rajiv Gandhi International Cricket Stadium (Uppal, Hyderabad)
 */

import { SeatInventoryRecord } from './seatInventoryMatrixPart1';

function generateWestStandSeats(): SeatInventoryRecord[] {
  const seats: SeatInventoryRecord[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];
  const sections = [
    { id: 'W01', name: 'West Stand Lower Tier 1', cat: 'Premium', price: 3200, gate: 'Gate 11' },
    { id: 'W02', name: 'West Stand Lower Tier 2', cat: 'Premium', price: 3200, gate: 'Gate 11' },
    { id: 'W03', name: 'West Stand Executive Club 1', cat: 'VIP', price: 6000, gate: 'Gate 12' },
    { id: 'W04', name: 'West Stand Executive Club 2', cat: 'VIP', price: 6000, gate: 'Gate 12' },
    { id: 'W05', name: 'West Stand Upper Bowl 1', cat: 'Regular', price: 1500, gate: 'Gate 13' },
    { id: 'W06', name: 'West Stand Upper Bowl 2', cat: 'Regular', price: 1500, gate: 'Gate 14' }
  ];

  sections.forEach((sec) => {
    rows.forEach((r, rIdx) => {
      for (let s = 1; s <= 45; s++) {
        const seatId = `SEAT-${sec.id}-${r}-${s}`;
        const isSold = (s * 3 + rIdx * 4) % 5 === 0;
        const isBlocked = (s * rIdx) % 31 === 0;

        seats.push({
          seatId,
          standId: 'stand-west',
          standName: 'West Grandstand',
          sectionId: sec.id,
          sectionName: sec.name,
          tier: sec.cat === 'VIP' ? 'Middle' : rIdx < 10 ? 'Lower' : 'Upper',
          category: sec.cat as any,
          row: r,
          seatNumber: s,
          basePrice: sec.price,
          gate: sec.gate,
          sightlineQualityScore: 88 - rIdx * 0.5,
          wheelchairAccessible: rIdx === 0,
          powerOutletAvailable: sec.cat === 'VIP',
          paddedChair: sec.cat === 'VIP' || sec.cat === 'Premium',
          inSeatDining: sec.cat === 'VIP',
          defaultStatus: isSold ? 'Sold' : isBlocked ? 'Blocked' : 'Available'
        });
      }
    });
  });

  return seats;
}

export const WEST_PAVILION_SEAT_INVENTORY: SeatInventoryRecord[] = generateWestStandSeats();
