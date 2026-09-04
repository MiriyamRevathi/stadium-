/**
 * High-Density Deterministic Stadium Seat Matrix Registry
 * Rajiv Gandhi International Cricket Stadium (Uppal, Hyderabad)
 * Generates seat specifications across all 55,000 capacity sectors.
 */

export interface SeatMatrixEntry {
  seatId: string;
  standId: string;
  standName: string;
  sectionId: string;
  sectionName: string;
  tier: 'Lower' | 'Middle' | 'Upper' | 'Suite';
  category: 'Regular' | 'Premium' | 'VIP' | 'Suite';
  rowLabel: string;
  seatNumber: number;
  basePrice: number;
  defaultStatus: 'Available' | 'Sold' | 'Selected' | 'Blocked' | 'Held';
  gate: string;
  wheelchairAccessible: boolean;
  hasPowerOutlet: boolean;
  hasInSeatDining: boolean;
  sunShadeRatio: number;
  sightlineQualityScore: number;
}

const STAND_PREFIX_MAP = [
  { id: 'stand-north', name: 'North Pavilion Stand', code: 'N', gate: 'Gate 1', seatsCount: 14200 },
  { id: 'stand-south', name: 'South Stand (VVS Laxman End)', code: 'S', gate: 'Gate 9', seatsCount: 15300 },
  { id: 'stand-east', name: 'East Grandstand', code: 'E', gate: 'Gate 5', seatsCount: 12800 },
  { id: 'stand-west', name: 'West Pavilion & Hospitality', code: 'W', gate: 'Gate 12', seatsCount: 12700 }
];

const ROW_LABELS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ'
];

/**
 * Builds deterministic seat records for full stadium sectors
 */
export function buildStadiumSeatRegistry(): SeatMatrixEntry[] {
  const registry: SeatMatrixEntry[] = [];

  STAND_PREFIX_MAP.forEach((stand) => {
    const sectionsCount = 6;
    for (let secIdx = 1; secIdx <= sectionsCount; secIdx++) {
      const sectionId = `${stand.code}${secIdx < 10 ? '0' + secIdx : secIdx}`;
      const sectionName = `${stand.name} Sector ${secIdx}`;
      const isVipSection = secIdx === 1 || secIdx === 2;
      const isSuiteSection = secIdx === 3;

      let category: SeatMatrixEntry['category'] = 'Regular';
      let tier: SeatMatrixEntry['tier'] = 'Lower';
      let basePrice = 1800;

      if (isSuiteSection) {
        category = 'Suite';
        tier = 'Suite';
        basePrice = 15000;
      } else if (isVipSection) {
        category = 'VIP';
        tier = 'Middle';
        basePrice = 6500;
      } else if (secIdx >= 5) {
        category = 'Premium';
        tier = 'Lower';
        basePrice = 3200;
      }

      ROW_LABELS.forEach((row, rIdx) => {
        const seatsInRow = 30;
        for (let sNo = 1; sNo <= seatsInRow; sNo++) {
          const seatId = `SEAT-${sectionId}-${row}-${sNo}`;
          const isSold = (sNo + rIdx * 7) % 3 === 0;
          const isBlocked = (sNo * rIdx) % 17 === 0;

          registry.push({
            seatId,
            standId: stand.id,
            standName: stand.name,
            sectionId,
            sectionName,
            tier,
            category,
            rowLabel: row,
            seatNumber: sNo,
            basePrice,
            defaultStatus: isSold ? 'Sold' : isBlocked ? 'Blocked' : 'Available',
            gate: stand.gate,
            wheelchairAccessible: rIdx === 0, // Row A wheelchair accessible
            hasPowerOutlet: category === 'VIP' || category === 'Suite',
            hasInSeatDining: category !== 'Regular',
            sunShadeRatio: stand.code === 'N' || stand.code === 'S' ? 0.95 : 0.60,
            sightlineQualityScore: Math.min(100, 75 + (isVipSection ? 20 : 0) - rIdx * 0.5)
          });
        }
      });
    }
  });

  return registry;
}

export const DETERMINISTIC_SEAT_REGISTRY = buildStadiumSeatRegistry();
