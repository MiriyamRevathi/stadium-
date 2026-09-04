/**
 * Stadium Seat Inventory Full Specifications - Part 2
 * Rajiv Gandhi International Cricket Stadium (Uppal, Hyderabad) - South Stand Sectors S01 to S06
 */

import { DetailedSeatSpec } from './seatInventoryFullSpecs1';

function generateSouthSectorSpecs(): DetailedSeatSpec[] {
  const seats: DetailedSeatSpec[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];
  const sections = [
    { id: 'S01', name: 'VVS Laxman Stand Lower 1', cat: 'VIP', price: 7000, gate: 'Gate 8' },
    { id: 'S02', name: 'VVS Laxman Stand Lower 2', cat: 'VIP', price: 7000, gate: 'Gate 8' },
    { id: 'S03', name: 'South Corporate Suites Tier 1', cat: 'Suite', price: 16000, gate: 'Gate 9' },
    { id: 'S04', name: 'South Corporate Suites Tier 2', cat: 'Suite', price: 22000, gate: 'Gate 9' },
    { id: 'S05', name: 'South Grandstand Upper 1', cat: 'Premium', price: 4000, gate: 'Gate 10' },
    { id: 'S06', name: 'South Grandstand Upper 2', cat: 'Premium', price: 4000, gate: 'Gate 10' }
  ];

  sections.forEach((sec) => {
    rows.forEach((r, rIdx) => {
      for (let s = 1; s <= 50; s++) {
        const seatId = `UPPAL-${sec.id}-${r}-${s}`;
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
          sunShadeRatio: 0.90,
          sightlineQualityScore: 96 - rIdx * 0.4,
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

export const SOUTH_STAND_FULL_SPECS: DetailedSeatSpec[] = generateSouthSectorSpecs();
