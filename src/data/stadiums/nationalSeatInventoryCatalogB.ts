/**
 * National Seat Inventory Catalog - Part B
 * Provides extensive seat layout records for additional regional stadiums.
 */

import { NationalSeatRecord } from './nationalSeatInventoryCatalogA';

export function buildNationalSeatCatalogB(): NationalSeatRecord[] {
  const catalog: NationalSeatRecord[] = [];
  const venues = [
    { id: 'ekana', name: 'Ekana Stadium Lucknow', stands: ['North Pavilion', 'South Pavilion', 'East Stand', 'West Stand'] },
    { id: 'jaipur', name: 'Sawai Mansingh Stadium', stands: ['Rajputana Pavilion', 'Presidential Stand', 'East Terrace'] },
    { id: 'dharamshala', name: 'HPCA Dharamshala', stands: ['Dhauladhar Stand', 'Himalayan Balcony', 'Pavilion Terrace'] },
    { id: 'mohali', name: 'PCA Stadium Mohali', stands: ['Yuvraj Singh Stand', 'Harbhajan Singh Stand', 'Main Pavilion'] }
  ];

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  venues.forEach((v) => {
    v.stands.forEach((st, stIdx) => {
      for (let secIdx = 1; secIdx <= 5; secIdx++) {
        const sectionId = `${v.id.toUpperCase()}-${stIdx + 1}0${secIdx}`;
        const sectionName = `${st} Block ${secIdx}`;
        const isVip = secIdx === 1;
        const isSuite = secIdx === 2;

        let category: NationalSeatRecord['category'] = 'Regular';
        let basePrice = 2000;
        if (isSuite) { category = 'Suite'; basePrice = 18000; }
        else if (isVip) { category = 'VIP'; basePrice = 7000; }
        else if (secIdx === 3) { category = 'Premium'; basePrice = 3500; }

        rows.forEach((r, rIdx) => {
          for (let sNo = 1; sNo <= 35; sNo++) {
            const seatId = `NATB-${sectionId}-${r}-${sNo}`;
            const isSold = (sNo * 3 + rIdx * 4) % 5 === 0;

            catalog.push({
              seatId,
              venueId: v.id,
              venueName: v.name,
              standName: st,
              sectionId,
              sectionName,
              tier: isSuite ? 'Suite' : rIdx < 8 ? 'Lower' : rIdx < 16 ? 'Middle' : 'Upper',
              category,
              row: r,
              seatNumber: sNo,
              basePrice,
              gate: `Gate ${(stIdx % 3) + 1}`,
              status: isSold ? 'Sold' : 'Available'
            });
          }
        });
      }
    });
  });

  return catalog;
}

export const NATIONAL_SEAT_CATALOG_B = buildNationalSeatCatalogB();
