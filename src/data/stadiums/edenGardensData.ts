/**
 * Eden Gardens (Kolkata) - Comprehensive Geometry, Stand & Sector Configuration
 * Capacity: 68,000 spectators
 * Location: BBD Bagh, Kolkata, West Bengal 700021
 */

import { StadiumVenueProfile } from './wankhedeStadiumData';

export const EDEN_GARDENS_DATA: StadiumVenueProfile = {
  id: 'stadium-eden-gardens',
  name: 'Eden Gardens',
  shortName: 'Eden Gardens',
  city: 'Kolkata',
  state: 'West Bengal',
  location: 'Maidan, BBD Bagh, Kolkata, West Bengal 700021',
  established: 1864,
  totalCapacity: 68000,
  pitchType: 'Spin-Friendly Clay Pitch with High Outfield Speed',
  boundaryLengthMeters: {
    straight: 74,
    cover: 71,
    midwicket: 72,
    fineLeg: 69
  },
  floodlights: true,
  transitAccess: {
    nearestStation: 'Esplanade Metro Station / Chandni Chowk',
    walkTimeMinutes: 10,
    parkingZones: ['Zone A - Red Road Maidan', 'Zone B - Strand Road Pier', 'Zone C - Babughat Plaza']
  },
  stands: [
    {
      id: 'eden-club-house',
      name: 'B.C. Roy Club House & Main Pavilion',
      code: 'CLUBHOUSE',
      capacity: 8500,
      description: 'Historic main pavilion, player lounge, and West Bengal Cricket Association headquarters.',
      viewingAngle: 'High Sightline Behind Pitch Axis',
      sunExposure: 'Full Shade',
      gates: ['Gate 1', 'Gate 2', 'Gate 3'],
      features: ['Historic Bell Tower View', 'Air-Conditioned Dining', 'VIP Elevators', 'Padded Seating'],
      sections: [
        {
          id: 'EDN-CH-L1',
          name: 'Club House Lower Tier A',
          category: 'VIP',
          tier: 'Lower',
          basePrice: 8500,
          totalSeats: 300,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
          seatsPerRow: 25,
          gate: 'Gate 1',
          svgPath: 'M 200 50 A 250 250 0 0 1 400 50 L 370 95 A 210 210 0 0 0 230 95 Z'
        },
        {
          id: 'EDN-CH-L2',
          name: 'Club House Lower Tier B',
          category: 'VIP',
          tier: 'Lower',
          basePrice: 8000,
          totalSeats: 300,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
          seatsPerRow: 25,
          gate: 'Gate 2',
          svgPath: 'M 400 50 A 250 250 0 0 1 600 50 L 570 95 A 210 210 0 0 0 430 95 Z'
        },
        {
          id: 'EDN-CH-U1',
          name: 'Club House Upper Balcony',
          category: 'Premium',
          tier: 'Upper',
          basePrice: 5000,
          totalSeats: 500,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW'],
          seatsPerRow: 25,
          gate: 'Gate 3',
          svgPath: 'M 180 10 A 290 290 0 0 1 620 10 L 590 45 A 250 250 0 0 0 210 45 Z'
        }
      ]
    },
    {
      id: 'eden-b-c-d-blocks',
      name: 'East Stands (B, C, D Blocks)',
      code: 'EAST_BLOCKS',
      capacity: 22000,
      description: 'High-energy eastern stands offering unobstructed boundary views.',
      viewingAngle: 'Mid-Wicket & Deep Cover Angles',
      sunExposure: 'Afternoon Shade',
      gates: ['Gate 4', 'Gate 5', 'Gate 6', 'Gate 7'],
      features: ['Massive Crowd Energy', 'Concession Food Courts', 'Large Screen Proximity'],
      sections: [
        {
          id: 'EDN-BLK-B',
          name: 'Block B Lower',
          category: 'Regular',
          tier: 'Lower',
          basePrice: 1500,
          totalSeats: 450,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R'],
          seatsPerRow: 30,
          gate: 'Gate 4',
          svgPath: 'M 610 60 A 250 250 0 0 1 720 180 L 670 200 A 210 210 0 0 0 575 95 Z'
        },
        {
          id: 'EDN-BLK-C',
          name: 'Block C Middle',
          category: 'Regular',
          tier: 'Middle',
          basePrice: 1800,
          totalSeats: 450,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R'],
          seatsPerRow: 30,
          gate: 'Gate 5',
          svgPath: 'M 720 180 A 250 250 0 0 1 780 320 L 730 320 A 210 210 0 0 0 670 200 Z'
        },
        {
          id: 'EDN-BLK-D',
          name: 'Block D Upper Bowl',
          category: 'Regular',
          tier: 'Upper',
          basePrice: 1200,
          totalSeats: 600,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW'],
          seatsPerRow: 30,
          gate: 'Gate 6',
          svgPath: 'M 630 20 A 290 290 0 0 1 820 320 L 780 320 A 250 250 0 0 0 610 60 Z'
        }
      ]
    },
    {
      id: 'eden-f-g-h-blocks',
      name: 'West Stands (F, G, H Blocks)',
      code: 'WEST_BLOCKS',
      capacity: 21500,
      description: 'Western grandstand with views of Hooghly river breeze and dusk floodlights.',
      viewingAngle: 'Point & Square Leg Angles',
      sunExposure: 'Morning Sun',
      gates: ['Gate 8', 'Gate 9', 'Gate 10', 'Gate 11'],
      features: ['Panoramic Field View', 'Fan Zone Plaza', 'Family Sections'],
      sections: [
        {
          id: 'EDN-BLK-F',
          name: 'Block F Lower',
          category: 'Premium',
          tier: 'Lower',
          basePrice: 2800,
          totalSeats: 400,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S'],
          seatsPerRow: 25,
          gate: 'Gate 8',
          svgPath: 'M 190 60 A 250 250 0 0 0 80 180 L 130 200 A 210 210 0 0 1 225 95 Z'
        },
        {
          id: 'EDN-BLK-G',
          name: 'Block G Middle',
          category: 'Premium',
          tier: 'Middle',
          basePrice: 3200,
          totalSeats: 400,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S'],
          seatsPerRow: 25,
          gate: 'Gate 9',
          svgPath: 'M 80 180 A 250 250 0 0 0 20 320 L 70 320 A 210 210 0 0 1 130 200 Z'
        },
        {
          id: 'EDN-BLK-H',
          name: 'Block H Upper Deck',
          category: 'Regular',
          tier: 'Upper',
          basePrice: 1400,
          totalSeats: 500,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW'],
          seatsPerRow: 25,
          gate: 'Gate 10',
          svgPath: 'M 170 20 A 290 290 0 0 0 -20 320 L 20 320 A 250 250 0 0 1 190 60 Z'
        }
      ]
    },
    {
      id: 'eden-high-court-end',
      name: 'High Court End Pavilion & Corporate Suites',
      code: 'HIGHCOURT_END',
      capacity: 16000,
      description: 'North Pavilion facing the Kolkata High Court skyline with executive hospitality suites.',
      viewingAngle: 'Straight Behind Bowler Arm (North End)',
      sunExposure: 'Full Shade',
      gates: ['Gate 12', 'Gate 13', 'Gate 14'],
      features: ['Executive Suites', 'Private Bar & Buffet', 'VIP Access'],
      sections: [
        {
          id: 'EDN-HC-S1',
          name: 'High Court Suite Tier 1',
          category: 'Suite',
          tier: 'Middle',
          basePrice: 18000,
          totalSeats: 200,
          rows: ['S1', 'S2', 'S3', 'S4'],
          seatsPerRow: 50,
          gate: 'Gate 12',
          svgPath: 'M 250 560 A 250 250 0 0 1 550 560 L 520 515 A 210 210 0 0 0 280 515 Z'
        },
        {
          id: 'EDN-HC-S2',
          name: 'High Court Corporate Box',
          category: 'Suite',
          tier: 'Upper',
          basePrice: 28000,
          totalSeats: 150,
          rows: ['P1', 'P2', 'P3'],
          seatsPerRow: 50,
          gate: 'Gate 13',
          svgPath: 'M 230 600 A 290 290 0 0 1 570 600 L 550 565 A 250 250 0 0 0 250 565 Z'
        }
      ]
    }
  ]
};
