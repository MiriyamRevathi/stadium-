/**
 * Eden Gardens (Kolkata) - Full Seat Matrix Registry
 * Generates seat records across Club House, B/C/D Blocks, F/G/H Blocks, and High Court Pavilion.
 */

import { SeatInventoryRecord } from './seatInventoryMatrixPart1';

export function buildEdenGardensSeatMatrix(): SeatInventoryRecord[] {
  const seats: SeatInventoryRecord[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];

  const stands = [
    {
      id: 'eden-clubhouse',
      name: 'B.C. Roy Club House',
      gate: 'Gate 1',
      sections: [
        { id: 'EDN-CH-L1', name: 'Club House Lower Tier A', cat: 'VIP', price: 8500 },
        { id: 'EDN-CH-L2', name: 'Club House Lower Tier B', cat: 'VIP', price: 8000 },
        { id: 'EDN-CH-U1', name: 'Club House Upper Balcony', cat: 'Premium', price: 5000 }
      ]
    },
    {
      id: 'eden-east-blocks',
      name: 'East Stands (B, C, D Blocks)',
      gate: 'Gate 4',
      sections: [
        { id: 'EDN-BLK-B', name: 'Block B Lower', cat: 'Regular', price: 1500 },
        { id: 'EDN-BLK-C', name: 'Block C Middle', cat: 'Regular', price: 1800 },
        { id: 'EDN-BLK-D', name: 'Block D Upper Bowl', cat: 'Regular', price: 1200 }
      ]
    },
    {
      id: 'eden-west-blocks',
      name: 'West Stands (F, G, H Blocks)',
      gate: 'Gate 8',
      sections: [
        { id: 'EDN-BLK-F', name: 'Block F Lower', cat: 'Premium', price: 2800 },
        { id: 'EDN-BLK-G', name: 'Block G Middle', cat: 'Premium', price: 3200 },
        { id: 'EDN-BLK-H', name: 'Block H Upper Deck', cat: 'Regular', price: 1400 }
      ]
    },
    {
      id: 'eden-high-court',
      name: 'High Court End Pavilion',
      gate: 'Gate 12',
      sections: [
        { id: 'EDN-HC-S1', name: 'High Court Suite Tier 1', cat: 'Suite', price: 18000 },
        { id: 'EDN-HC-S2', name: 'High Court Corporate Box', cat: 'Suite', price: 28000 }
      ]
    }
  ];

  stands.forEach((stand) => {
    stand.sections.forEach((sec) => {
      rows.forEach((r, rIdx) => {
        for (let s = 1; s <= 40; s++) {
          const seatId = `EDEN-${sec.id}-${r}-${s}`;
          const isSold = (s * 4 + rIdx * 3) % 5 === 0;
          const isBlocked = (s * rIdx) % 19 === 0;

          seats.push({
            seatId,
            standId: stand.id,
            standName: stand.name,
            sectionId: sec.id,
            sectionName: sec.name,
            tier: sec.cat === 'Suite' ? 'Suite' : rIdx < 10 ? 'Lower' : 'Upper',
            category: sec.cat as any,
            row: r,
            seatNumber: s,
            basePrice: sec.price,
            gate: stand.gate,
            sightlineQualityScore: 90 - rIdx * 0.5,
            wheelchairAccessible: rIdx === 0,
            powerOutletAvailable: sec.cat === 'VIP' || sec.cat === 'Suite',
            paddedChair: sec.cat !== 'Regular',
            inSeatDining: sec.cat !== 'Regular',
            defaultStatus: isSold ? 'Sold' : isBlocked ? 'Blocked' : 'Available'
          });
        }
      });
    });
  });

  return seats;
}

export const EDEN_GARDENS_FULL_SEAT_MATRIX: SeatInventoryRecord[] = buildEdenGardensSeatMatrix();
