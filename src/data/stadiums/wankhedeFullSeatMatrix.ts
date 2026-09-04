/**
 * Wankhede Stadium (Mumbai) - Full Seat Matrix Registry
 * Generates seat records across Garware Pavilion, Sunil Gavaskar Stand, Sachin Tendulkar Stand, and MCA Corporate Suites.
 */

import { SeatInventoryRecord } from './seatInventoryMatrixPart1';

export function buildWankhedeSeatMatrix(): SeatInventoryRecord[] {
  const seats: SeatInventoryRecord[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];

  const stands = [
    {
      id: 'wankhede-garware',
      name: 'Garware Pavilion',
      gate: 'Gate 1',
      sections: [
        { id: 'GAR-L01', name: 'Garware Lower Tier 1', cat: 'VIP', price: 7500 },
        { id: 'GAR-L02', name: 'Garware Lower Tier 2', cat: 'VIP', price: 7000 },
        { id: 'GAR-U01', name: 'Garware Upper Tier', cat: 'Premium', price: 4500 }
      ]
    },
    {
      id: 'wankhede-gavaskar',
      name: 'Sunil Gavaskar Stand',
      gate: 'Gate 4',
      sections: [
        { id: 'GAV-L01', name: 'Gavaskar East Lower 1', cat: 'Regular', price: 2200 },
        { id: 'GAV-L02', name: 'Gavaskar East Lower 2', cat: 'Regular', price: 2200 },
        { id: 'GAV-U01', name: 'Gavaskar East Upper Tier', cat: 'Regular', price: 1800 }
      ]
    },
    {
      id: 'wankhede-tendulkar',
      name: 'Sachin Tendulkar Stand',
      gate: 'Gate 7',
      sections: [
        { id: 'TEN-L01', name: 'Tendulkar West Lower 1', cat: 'Premium', price: 3200 },
        { id: 'TEN-L02', name: 'Tendulkar West Lower 2', cat: 'Premium', price: 3200 },
        { id: 'TEN-U01', name: 'Tendulkar West Upper Tier', cat: 'Regular', price: 2000 }
      ]
    },
    {
      id: 'wankhede-mca',
      name: 'MCA Pavilion & Corporate Suites',
      gate: 'Gate 10',
      sections: [
        { id: 'MCA-S01', name: 'MCA Corporate Suite Level 1', cat: 'Suite', price: 15000 },
        { id: 'MCA-S02', name: 'MCA Presidential Lounge', cat: 'Suite', price: 25000 }
      ]
    }
  ];

  stands.forEach((stand) => {
    stand.sections.forEach((sec) => {
      rows.forEach((r, rIdx) => {
        for (let s = 1; s <= 40; s++) {
          const seatId = `WANK-${sec.id}-${r}-${s}`;
          const isSold = (s * 3 + rIdx * 5) % 4 === 0;
          const isBlocked = (s * rIdx) % 17 === 0;

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
            sightlineQualityScore: 92 - rIdx * 0.5,
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

export const WANKHEDE_FULL_SEAT_MATRIX: SeatInventoryRecord[] = buildWankhedeSeatMatrix();
