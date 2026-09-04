/**
 * High-Density Stadium Seat Inventory Matrix - Part 3: East Grandstand
 * Rajiv Gandhi International Cricket Stadium (Uppal, Hyderabad)
 */

import { SeatInventoryRecord } from './seatInventoryMatrixPart1';

function generateEastStandSeats(): SeatInventoryRecord[] {
  const seats: SeatInventoryRecord[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];
  const sections = [
    { id: 'E01', name: 'East Stand Lower Tier 1', cat: 'Regular', price: 1800, gate: 'Gate 4' },
    { id: 'E02', name: 'East Stand Lower Tier 2', cat: 'Regular', price: 1800, gate: 'Gate 4' },
    { id: 'E03', name: 'East Stand Middle Tier 1', cat: 'Regular', price: 2200, gate: 'Gate 5' },
    { id: 'E04', name: 'East Stand Middle Tier 2', cat: 'Regular', price: 2200, gate: 'Gate 5' },
    { id: 'E05', name: 'East Stand Upper Bowl 1', cat: 'Regular', price: 1200, gate: 'Gate 6' },
    { id: 'E06', name: 'East Stand Upper Bowl 2', cat: 'Regular', price: 1200, gate: 'Gate 7' }
  ];

  sections.forEach((sec) => {
    rows.forEach((r, rIdx) => {
      for (let s = 1; s <= 45; s++) {
        const seatId = `SEAT-${sec.id}-${r}-${s}`;
        const isSold = (s * 2 + rIdx * 3) % 4 === 0;
        const isBlocked = (s * rIdx) % 29 === 0;

        seats.push({
          seatId,
          standId: 'stand-east',
          standName: 'East Grandstand',
          sectionId: sec.id,
          sectionName: sec.name,
          tier: rIdx < 10 ? 'Lower' : rIdx < 20 ? 'Middle' : 'Upper',
          category: sec.cat as any,
          row: r,
          seatNumber: s,
          basePrice: sec.price,
          gate: sec.gate,
          sightlineQualityScore: 82 - rIdx * 0.5,
          wheelchairAccessible: rIdx === 0,
          powerOutletAvailable: false,
          paddedChair: false,
          inSeatDining: false,
          defaultStatus: isSold ? 'Sold' : isBlocked ? 'Blocked' : 'Available'
        });
      }
    });
  });

  return seats;
}

export const EAST_PAVILION_SEAT_INVENTORY: SeatInventoryRecord[] = generateEastStandSeats();
