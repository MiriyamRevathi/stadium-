import { Seat, SeatStatus, StadiumSection } from '../types';
import { STADIUM_SECTIONS } from './sections';

// Simple deterministic hash to get consistent sold/blocked states per event and seat
function pseudoRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/**
 * Generate seats for a given section and event
 */
export function generateSeatsForSection(
  sectionOrEventId: StadiumSection | string,
  eventIdOrSection?: string | StadiumSection
): Seat[] {
  let section: StadiumSection | undefined;
  let eventId: string = 'event';

  if (typeof sectionOrEventId === 'object' && sectionOrEventId !== null) {
    section = sectionOrEventId as StadiumSection;
    eventId = typeof eventIdOrSection === 'string' ? eventIdOrSection : 'event';
  } else if (typeof eventIdOrSection === 'object' && eventIdOrSection !== null) {
    section = eventIdOrSection as StadiumSection;
    eventId = typeof sectionOrEventId === 'string' ? sectionOrEventId : 'event';
  }

  if (!section || !section.rows || !Array.isArray(section.rows)) {
    return [];
  }

  const seats: Seat[] = [];
  const secIndex = STADIUM_SECTIONS.findIndex((s) => s.id === section!.id);

  section.rows.forEach((row, rIdx) => {
    for (let num = 1; num <= section.seatsPerRow; num++) {
      const seatId = `${section.id}-${row}-${num}`;
      // Calculate pseudo-random hash for realistic status
      const charCode = row.charCodeAt(0);
      const hashVal = pseudoRandom(secIndex * 1000 + charCode * 37 + num * 19 + eventId.length * 7);

      let status: SeatStatus = 'available';

      // Specific known demo combinations: ensure A03 Row C 14 & 15 are available for the user
      if (section.name === 'A03' && row === 'C' && (num === 14 || num === 15 || num === 16)) {
        status = 'available';
      } else if (hashVal < 0.22) {
        status = 'sold';
      } else if (hashVal < 0.28) {
        status = 'blocked';
      } else {
        status = 'available';
      }

      // Slightly adjust price per row (e.g. Front row A has a modest front-row premium)
      let price = section.price;
      if (row === 'A' || row === 'B') {
        price = Math.round(section.price * 1.08);
      } else if (row === 'E' || row === 'F') {
        price = Math.round(section.price * 0.95);
      }

      seats.push({
        id: seatId,
        sectionId: section.id,
        row,
        number: num,
        price,
        status,
        category: section.category
      });
    }
  });

  return seats;
}

// In-memory cache for loaded seats per event + section
const seatsCache: Record<string, Record<string, Seat[]>> = {};

export function getSeatsForEventAndSection(
  eventId: string,
  sectionId: string,
  modifiedStatuses: Record<string, SeatStatus> = {}
): Seat[] {
  const section = STADIUM_SECTIONS.find((s) => s.id === sectionId);
  if (!section) return [];

  if (!seatsCache[eventId]) {
    seatsCache[eventId] = {};
  }

  if (!seatsCache[eventId][sectionId]) {
    seatsCache[eventId][sectionId] = generateSeatsForSection(section, eventId);
  }

  // Apply any dynamic runtime modifications
  return seatsCache[eventId][sectionId].map((seat) => {
    if (modifiedStatuses[seat.id]) {
      return { ...seat, status: modifiedStatuses[seat.id] };
    }
    return seat;
  });
}

export function getSectionAvailability(
  eventId: string,
  sectionId: string,
  modifiedStatuses: Record<string, SeatStatus> = {}
): { total: number; available: number; sold: number; blocked: number; minPrice: number } {
  const seats = getSeatsForEventAndSection(eventId, sectionId, modifiedStatuses);
  const total = seats.length;
  let available = 0;
  let sold = 0;
  let blocked = 0;
  let minPrice = Infinity;

  for (const s of seats) {
    if (s.status === 'available') available++;
    else if (s.status === 'sold') sold++;
    else if (s.status === 'blocked') blocked++;

    if (s.price < minPrice) minPrice = s.price;
  }

  return {
    total,
    available,
    sold,
    blocked,
    minPrice: minPrice === Infinity ? 0 : minPrice
  };
}
