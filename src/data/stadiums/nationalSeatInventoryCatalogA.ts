/**
 * National Seat Inventory Catalog - Part A
 * Provides individual seat records across national stadiums in India.
 */

export interface NationalSeatRecord {
  seatId: string;
  venueId: string;
  venueName: string;
  standName: string;
  sectionId: string;
  sectionName: string;
  tier: 'Lower' | 'Middle' | 'Upper' | 'Suite';
  category: 'Regular' | 'Premium' | 'VIP' | 'Suite';
  row: string;
  seatNumber: number;
  basePrice: number;
  gate: string;
  status: 'Available' | 'Sold' | 'Blocked' | 'Held';
}

export function buildNationalSeatCatalogA(): NationalSeatRecord[] {
  const catalog: NationalSeatRecord[] = [];
  const venues = [
    { id: 'wankhede', name: 'Wankhede Stadium', stands: ['Garware Pavilion', 'Sunil Gavaskar Stand', 'Sachin Tendulkar Stand', 'MCA Suites'] },
    { id: 'eden', name: 'Eden Gardens', stands: ['Club House', 'East Blocks B-D', 'West Blocks F-H', 'High Court Pavilion'] },
    { id: 'modi', name: 'Narendra Modi Stadium', stands: ['Adani Pavilion', 'Reliance Pavilion', 'East Bowl', 'West Bowl'] },
    { id: 'chinnaswamy', name: 'M. Chinnaswamy Stadium', stands: ['Members Pavilion', 'P1-P3 Grandstands', 'Terrace Stand'] },
    { id: 'chepauk', name: 'MA Chidambaram Stadium', stands: ['CDE Grandstands', 'MAC Pavilion', 'Breezeway Stand'] }
  ];

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  venues.forEach((v) => {
    v.stands.forEach((st, stIdx) => {
      for (let secIdx = 1; secIdx <= 4; secIdx++) {
        const sectionId = `${v.id.toUpperCase()}-${stIdx + 1}0${secIdx}`;
        const sectionName = `${st} Sector ${secIdx}`;
        const isVip = secIdx === 1;
        const isSuite = secIdx === 2 && st.includes('Pavilion');

        let category: NationalSeatRecord['category'] = 'Regular';
        let basePrice = 1800;
        if (isSuite) { category = 'Suite'; basePrice = 16000; }
        else if (isVip) { category = 'VIP'; basePrice = 6500; }
        else if (secIdx === 3) { category = 'Premium'; basePrice = 3200; }

        rows.forEach((r, rIdx) => {
          for (let sNo = 1; sNo <= 35; sNo++) {
            const seatId = `NAT-${sectionId}-${r}-${sNo}`;
            const isSold = (sNo * 2 + rIdx * 5) % 4 === 0;

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
              gate: `Gate ${(stIdx % 4) + 1}`,
              status: isSold ? 'Sold' : 'Available'
            });
          }
        });
      }
    });
  });

  return catalog;
}

export const NATIONAL_SEAT_CATALOG_A = buildNationalSeatCatalogA();
