/**
 * Narendra Modi Stadium (Ahmedabad) - Full Seat Matrix Registry
 * Generates seat records across Adani Pavilion, Reliance Pavilion, East Bowl, and West Bowl.
 */

import { SeatInventoryRecord } from './seatInventoryMatrixPart1';

export function buildNarendraModiSeatMatrix(): SeatInventoryRecord[] {
  const seats: SeatInventoryRecord[] = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG'];

  const stands = [
    {
      id: 'nms-adani-pavilion',
      name: 'Adani Pavilion End',
      gate: 'Gate 1',
      sections: [
        { id: 'NMS-AD-L1', name: 'Adani Pavilion Lower Bowl A', cat: 'VIP', price: 9000 },
        { id: 'NMS-AD-L2', name: 'Adani Pavilion Lower Bowl B', cat: 'VIP', price: 8500 },
        { id: 'NMS-AD-U1', name: 'Adani Pavilion Upper Deck', cat: 'Premium', price: 4800 }
      ]
    },
    {
      id: 'nms-reliance-pavilion',
      name: 'Reliance Pavilion End',
      gate: 'Gate 5',
      sections: [
        { id: 'NMS-REL-L1', name: 'Reliance Pavilion Lower Bowl', cat: 'VIP', price: 8500 },
        { id: 'NMS-REL-S1', name: 'Reliance Corporate Suites Level', cat: 'Suite', price: 22000 }
      ]
    },
    {
      id: 'nms-east-bowl',
      name: 'East Grandstand',
      gate: 'Gate 9',
      sections: [
        { id: 'NMS-EST-L1', name: 'East Bowl Lower Tier 1', cat: 'Regular', price: 2500 },
        { id: 'NMS-EST-L2', name: 'East Bowl Lower Tier 2', cat: 'Regular', price: 2500 },
        { id: 'NMS-EST-U1', name: 'East Bowl Upper Tier Sky Deck', cat: 'Regular', price: 1500 }
      ]
    },
    {
      id: 'nms-west-bowl',
      name: 'West Grandstand',
      gate: 'Gate 15',
      sections: [
        { id: 'NMS-WST-L1', name: 'West Bowl Lower Tier 1', cat: 'Premium', price: 3500 },
        { id: 'NMS-WST-U1', name: 'West Bowl Upper Sky Lounge', cat: 'Premium', price: 2200 }
      ]
    }
  ];

  stands.forEach((stand) => {
    stand.sections.forEach((sec) => {
      rows.forEach((r, rIdx) => {
        for (let s = 1; s <= 45; s++) {
          const seatId = `NMS-${sec.id}-${r}-${s}`;
          const isSold = (s * 5 + rIdx * 2) % 4 === 0;
          const isBlocked = (s * rIdx) % 23 === 0;

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
            sightlineQualityScore: 95 - rIdx * 0.4,
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

export const NARENDRA_MODI_FULL_SEAT_MATRIX: SeatInventoryRecord[] = buildNarendraModiSeatMatrix();
