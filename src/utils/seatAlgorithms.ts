/**
 * STADIA Seat Geometry & Allocation Algorithms
 */
export interface SimpleSeat {
  id: string; sectionId: string; row: string; number: number; price: number; category: string;
  status: 'Available' | 'Sold' | 'Blocked' | 'Held' | 'Selected';
}
export interface SeatBlock {
  seats: SimpleSeat[]; sectionId: string; row: string; startNumber: number; endNumber: number; totalPrice: number; score: number;
}
export function areContiguous(seats: SimpleSeat[]): boolean {
  if (seats.length <= 1) return true;
  const sorted = [...seats].sort((a, b) => a.number - b.number);
  const section = sorted[0].sectionId; const row = sorted[0].row;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i].sectionId !== section || sorted[i].row !== row) return false;
    if (i > 0 && sorted[i].number !== sorted[i - 1].number + 1) return false;
  }
  return true;
}
export function findContiguousBlocks(seats: SimpleSeat[], size: number, filters?: { maxPrice?: number; category?: string; sectionId?: string }): SeatBlock[] {
  const available = seats.filter((s) => {
    if (s.status !== 'Available') return false;
    if (filters?.sectionId && s.sectionId !== filters.sectionId) return false;
    if (filters?.category && s.category !== filters.category) return false;
    return true;
  });
  const byKey = new Map<string, SimpleSeat[]>();
  for (const s of available) {
    const key = `${s.sectionId}|${s.row}`;
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key)!.push(s);
  }
  const blocks: SeatBlock[] = [];
  for (const group of byKey.values()) {
    group.sort((a, b) => a.number - b.number);
    for (let i = 0; i <= group.length - size; i++) {
      const slice = group.slice(i, i + size);
      let ok = true;
      for (let j = 1; j < slice.length; j++) { if (slice[j].number !== slice[j - 1].number + 1) { ok = false; break; } }
      if (!ok) continue;
      const totalPrice = slice.reduce((sum, s) => sum + s.price, 0);
      if (filters?.maxPrice != null && totalPrice > filters.maxPrice) continue;
      blocks.push({ seats: slice, sectionId: slice[0].sectionId, row: slice[0].row, startNumber: slice[0].number, endNumber: slice[slice.length - 1].number, totalPrice, score: scoreBlock(slice) });
    }
  }
  blocks.sort((a, b) => b.score - a.score || a.totalPrice - b.totalPrice);
  return blocks;
}
function scoreBlock(seats: SimpleSeat[]): number {
  let score = 50;
  const avgPrice = seats.reduce((s, x) => s + x.price, 0) / seats.length;
  score += Math.max(0, 30 - Math.abs(avgPrice - 2000) / 100);
  const rowChar = seats[0].row.toUpperCase().charCodeAt(0) - 65;
  score += Math.max(0, 15 - rowChar);
  if (seats[0].category === 'Premium' || seats[0].category === 'VIP') score += 10;
  return Math.round(score * 10) / 10;
}
export function holdSeats(allSeats: SimpleSeat[], seatIds: string[]): { updated: SimpleSeat[]; held: SimpleSeat[] } {
  const idSet = new Set(seatIds); const held: SimpleSeat[] = [];
  const updated = allSeats.map((s) => {
    if (idSet.has(s.id)) {
      if (s.status !== 'Available') throw new Error(`Seat ${s.id} is not available`);
      const h = { ...s, status: 'Held' as const }; held.push(h); return h;
    }
    return s;
  });
  return { updated, held };
}
export function releaseHolds(allSeats: SimpleSeat[], seatIds: string[]): SimpleSeat[] {
  const idSet = new Set(seatIds);
  return allSeats.map((s) => (idSet.has(s.id) && s.status === 'Held' ? { ...s, status: 'Available' as const } : s));
}
export function markSold(allSeats: SimpleSeat[], seatIds: string[]): SimpleSeat[] {
  const idSet = new Set(seatIds);
  return allSeats.map((s) => (idSet.has(s.id) ? { ...s, status: 'Sold' as const } : s));
}
export function sectionAvailability(seats: SimpleSeat[], sectionId: string) {
  const section = seats.filter((s) => s.sectionId === sectionId);
  const total = section.length;
  const available = section.filter((s) => s.status === 'Available').length;
  const sold = section.filter((s) => s.status === 'Sold').length;
  const blocked = section.filter((s) => s.status === 'Blocked').length;
  const held = section.filter((s) => s.status === 'Held').length;
  return { total, available, sold, blocked, held, percentAvailable: total ? Math.round((available / total) * 1000) / 10 : 0 };
}
export function bestAvailableInSection(seats: SimpleSeat[], sectionId: string, quantity: number, maxPrice?: number): SeatBlock | null {
  const blocks = findContiguousBlocks(seats, quantity, { sectionId, maxPrice });
  return blocks[0] || null;
}
export function priceBand(seats: SimpleSeat[]) {
  if (!seats.length) return { min: 0, max: 0, avg: 0, median: 0 };
  const prices = seats.map((s) => s.price).sort((a, b) => a - b);
  const sum = prices.reduce((a, b) => a + b, 0);
  const mid = Math.floor(prices.length / 2);
  const median = prices.length % 2 ? prices[mid] : (prices[mid - 1] + prices[mid]) / 2;
  return { min: prices[0], max: prices[prices.length - 1], avg: Math.round((sum / prices.length) * 100) / 100, median };
}
