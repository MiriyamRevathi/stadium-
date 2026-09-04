/**
 * National Stadium Dataset Part 1 - Comprehensive Sector Geometry & Seating Specifications
 * Contains high-density sector specifications, SVG arc data, gate matrices, and seat availability indices.
 */

import { StadiumStandSpec } from './wankhedeStadiumData';

export const WANKHEDE_DETAILED_SECTOR_SPECS: StadiumStandSpec[] = [
  {
    id: 'wankhede-north-pavilion-ext',
    name: 'Wankhede North Pavilion Extension',
    code: 'GARWARE_EXT',
    capacity: 4500,
    description: 'Extended North Pavilion housing media press box and VIP hospitality boxes.',
    viewingAngle: '0 Deg North Pitch Axis',
    sunExposure: 'Full Shade',
    gates: ['Gate 1A', 'Gate 1B', 'Gate 2A'],
    features: ['Press Box Proximity', 'VIP Escort', 'Buffet Hall'],
    sections: Array.from({ length: 15 }, (_, i) => ({
      id: `GAR-EXT-${i + 1}`,
      name: `Garware Extension Block ${i + 1}`,
      category: i < 3 ? 'Suite' : i < 6 ? 'VIP' : i < 10 ? 'Premium' : 'Regular',
      tier: i < 5 ? 'Lower' : i < 10 ? 'Middle' : 'Upper',
      basePrice: i < 3 ? 15000 : i < 6 ? 7500 : i < 10 ? 3500 : 2000,
      totalSeats: 300,
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
      seatsPerRow: 30,
      gate: `Gate ${(i % 3) + 1}`,
      svgPath: `M ${150 + i * 20} 50 A 240 240 0 0 1 ${350 + i * 20} 50 L ${330 + i * 20} 95 A 200 200 0 0 0 ${170 + i * 20} 95 Z`
    }))
  },
  {
    id: 'wankhede-east-gavaskar-ext',
    name: 'Sunil Gavaskar Stand High Tier',
    code: 'GAVASKAR_HIGH',
    capacity: 6200,
    description: 'High-elevation eastern grandstand offering panoramic Arabian sea sunset views.',
    viewingAngle: '45 Deg Mid-Wicket Axis',
    sunExposure: 'Afternoon Shade',
    gates: ['Gate 4A', 'Gate 5A', 'Gate 6A'],
    features: ['High Altitude Sightline', 'Fast Concession Access'],
    sections: Array.from({ length: 20 }, (_, i) => ({
      id: `GAV-HIGH-${i + 1}`,
      name: `Gavaskar High Tier Section ${i + 1}`,
      category: i < 5 ? 'Premium' : 'Regular',
      tier: 'Upper',
      basePrice: i < 5 ? 3000 : 1800,
      totalSeats: 310,
      rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK'],
      seatsPerRow: 31,
      gate: `Gate ${(i % 3) + 4}`,
      svgPath: `M ${400 + i * 15} 60 A 250 250 0 0 1 ${550 + i * 15} 180 L ${510 + i * 15} 200 A 210 210 0 0 0 ${370 + i * 15} 95 Z`
    }))
  }
];

export const EDEN_GARDENS_DETAILED_SECTOR_SPECS: StadiumStandSpec[] = [
  {
    id: 'eden-club-house-ext',
    name: 'B.C. Roy Club House Upper Tier Extension',
    code: 'CLUBHOUSE_UPPER_EXT',
    capacity: 5500,
    description: 'Upper balcony level facing historic Kolkata skyline.',
    viewingAngle: 'Straight Behind Bowler Arm (South)',
    sunExposure: 'Full Shade',
    gates: ['Gate 1', 'Gate 2'],
    features: ['Air-Conditioned Lounge', 'Historic Photo Gallery'],
    sections: Array.from({ length: 18 }, (_, i) => ({
      id: `EDN-CH-EXT-${i + 1}`,
      name: `Club House Balcony Section ${i + 1}`,
      category: i < 4 ? 'VIP' : 'Premium',
      tier: 'Upper',
      basePrice: i < 4 ? 8000 : 4500,
      totalSeats: 300,
      rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
      seatsPerRow: 30,
      gate: `Gate ${(i % 2) + 1}`,
      svgPath: `M ${180 + i * 18} 40 A 260 260 0 0 1 ${380 + i * 18} 40 L ${350 + i * 18} 85 A 220 220 0 0 0 210 + i * 18} 85 Z`
    }))
  }
];
