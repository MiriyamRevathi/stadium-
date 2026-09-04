/**
 * Narendra Modi Stadium (Ahmedabad) - Comprehensive Geometry & Sector Configuration
 * Capacity: 132,000 spectators (Largest cricket stadium in the world)
 * Location: Motera, Ahmedabad, Gujarat 380005
 */

import { StadiumVenueProfile } from './wankhedeStadiumData';

export const NARENDRA_MODI_STADIUM_DATA: StadiumVenueProfile = {
  id: 'stadium-narendra-modi',
  name: 'Narendra Modi Stadium',
  shortName: 'Narendra Modi Stadium',
  city: 'Ahmedabad',
  state: 'Gujarat',
  location: 'Stadium Road, Motera, Ahmedabad, Gujarat 380005',
  established: 2020,
  totalCapacity: 132000,
  pitchType: 'Dual Soil (Red Soil Bounce + Black Soil Spin Pitches)',
  boundaryLengthMeters: {
    straight: 78,
    cover: 75,
    midwicket: 76,
    fineLeg: 73
  },
  floodlights: true,
  transitAccess: {
    nearestStation: 'Motera Stadium Metro Station (North-South Corridor)',
    walkTimeMinutes: 3,
    parkingZones: ['Zone A - Motera Metro Park', 'Zone B - Sabarmati Riverfront Lot', 'Zone C - Koteshwar Multi-Level Park']
  },
  stands: [
    {
      id: 'nms-adani-pavilion',
      name: 'Adani Pavilion End (North)',
      code: 'ADANI_PAVILION',
      capacity: 18500,
      description: 'Ultra-modern North Pavilion end with 3D LED sightlines, player dugouts, and 76 corporate boxes.',
      viewingAngle: 'Direct Bowler Pitch Axis (North)',
      sunExposure: 'Full Shade',
      gates: ['Gate 1', 'Gate 2', 'Gate 3', 'Gate 4'],
      features: ['Olympic-Standard Dressing Rooms', 'Presidential Suites', '360 LED Ribbon Screen Proximity', 'VVIP Lounge'],
      sections: [
        {
          id: 'NMS-AD-L1',
          name: 'Adani Pavilion Lower Bowl A',
          category: 'VIP',
          tier: 'Lower',
          basePrice: 9000,
          totalSeats: 500,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W'],
          seatsPerRow: 25,
          gate: 'Gate 1',
          svgPath: 'M 150 40 A 280 280 0 0 1 450 40 L 410 90 A 230 230 0 0 0 190 90 Z'
        },
        {
          id: 'NMS-AD-L2',
          name: 'Adani Pavilion Lower Bowl B',
          category: 'VIP',
          tier: 'Lower',
          basePrice: 8500,
          totalSeats: 500,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W'],
          seatsPerRow: 25,
          gate: 'Gate 2',
          svgPath: 'M 450 40 A 280 280 0 0 1 750 40 L 710 90 A 230 230 0 0 0 490 90 Z'
        },
        {
          id: 'NMS-AD-U1',
          name: 'Adani Pavilion Upper Deck',
          category: 'Premium',
          tier: 'Upper',
          basePrice: 4800,
          totalSeats: 800,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', 'A1', 'B1'],
          seatsPerRow: 32,
          gate: 'Gate 3',
          svgPath: 'M 110 0 A 330 330 0 0 1 790 0 L 750 35 A 280 280 0 0 0 150 35 Z'
        }
      ]
    },
    {
      id: 'nms-reliance-pavilion',
      name: 'Reliance Pavilion End (South)',
      code: 'RELIANCE_PAVILION',
      capacity: 19000,
      description: 'South Pavilion featuring media center with capacity for 250 journalists and corporate suites.',
      viewingAngle: 'Direct Bowler Pitch Axis (South)',
      sunExposure: 'Full Shade',
      gates: ['Gate 5', 'Gate 6', 'Gate 7', 'Gate 8'],
      features: ['Media Center View', 'High-Speed Elevators', 'Buffet Lounges'],
      sections: [
        {
          id: 'NMS-REL-L1',
          name: 'Reliance Pavilion Lower Bowl',
          category: 'VIP',
          tier: 'Lower',
          basePrice: 8500,
          totalSeats: 450,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T'],
          seatsPerRow: 26,
          gate: 'Gate 5',
          svgPath: 'M 200 620 A 280 280 0 0 1 700 620 L 660 570 A 230 230 0 0 0 240 570 Z'
        },
        {
          id: 'NMS-REL-S1',
          name: 'Reliance Corporate Suites Level',
          category: 'Suite',
          tier: 'Middle',
          basePrice: 22000,
          totalSeats: 250,
          rows: ['S1', 'S2', 'S3', 'S4', 'S5'],
          seatsPerRow: 50,
          gate: 'Gate 6',
          svgPath: 'M 180 660 A 320 320 0 0 1 720 660 L 700 625 A 280 280 0 0 0 200 625 Z'
        }
      ]
    },
    {
      id: 'nms-east-stand',
      name: 'East Grandstand (Lower & Upper Bowls)',
      code: 'EAST_BOWL',
      capacity: 47000,
      description: 'Colossal eastern grandstand seating over 47,000 fans with continuous pillar-less roof shade.',
      viewingAngle: 'Mid-Wicket, Cover & Boundary Views',
      sunExposure: 'Afternoon Shade',
      gates: ['Gate 9', 'Gate 10', 'Gate 11', 'Gate 12', 'Gate 13', 'Gate 14'],
      features: ['Continuous Column-Free View', 'Massive Concourse Plazas', 'Esports & Fan Zone'],
      sections: [
        {
          id: 'NMS-EST-L1',
          name: 'East Bowl Lower Tier 1',
          category: 'Regular',
          tier: 'Lower',
          basePrice: 2500,
          totalSeats: 700,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A1', 'B1'],
          seatsPerRow: 28,
          gate: 'Gate 9',
          svgPath: 'M 760 50 A 280 280 0 0 1 880 330 L 830 330 A 230 230 0 0 0 710 90 Z'
        },
        {
          id: 'NMS-EST-L2',
          name: 'East Bowl Lower Tier 2',
          category: 'Regular',
          tier: 'Lower',
          basePrice: 2500,
          totalSeats: 700,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A1', 'B1'],
          seatsPerRow: 28,
          gate: 'Gate 10',
          svgPath: 'M 880 330 A 280 280 0 0 1 760 610 L 710 570 A 230 230 0 0 0 830 330 Z'
        },
        {
          id: 'NMS-EST-U1',
          name: 'East Bowl Upper Tier Sky Deck',
          category: 'Regular',
          tier: 'Upper',
          basePrice: 1500,
          totalSeats: 1200,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1'],
          seatsPerRow: 40,
          gate: 'Gate 11',
          svgPath: 'M 800 0 A 330 330 0 0 1 940 330 L 880 330 A 280 280 0 0 0 760 50 Z'
        }
      ]
    },
    {
      id: 'nms-west-stand',
      name: 'West Grandstand (Club & Premium Tiers)',
      code: 'WEST_BOWL',
      capacity: 47500,
      description: 'Western grandstand featuring club seating, premium hospitality lounges, and LED halo ring view.',
      viewingAngle: 'Point, Square Leg & Sunset View',
      sunExposure: 'Morning Sun',
      gates: ['Gate 15', 'Gate 16', 'Gate 17', 'Gate 18', 'Gate 19', 'Gate 20'],
      features: ['Club Lounge Access', 'Wheelchair Accessibility Escalators', 'Souvenir Stores'],
      sections: [
        {
          id: 'NMS-WST-L1',
          name: 'West Bowl Lower Tier 1',
          category: 'Premium',
          tier: 'Lower',
          basePrice: 3500,
          totalSeats: 650,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
          seatsPerRow: 26,
          gate: 'Gate 15',
          svgPath: 'M 190 90 A 230 230 0 0 0 70 330 L 20 330 A 280 280 0 0 1 140 50 Z'
        },
        {
          id: 'NMS-WST-U1',
          name: 'West Bowl Upper Sky Lounge',
          category: 'Premium',
          tier: 'Upper',
          basePrice: 2200,
          totalSeats: 1100,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY', 'ZZ', 'A1', 'B1', 'C1', 'D1'],
          seatsPerRow: 40,
          gate: 'Gate 16',
          svgPath: 'M 150 35 A 280 280 0 0 0 10 330 L -50 330 A 330 330 0 0 1 100 0 Z'
        }
      ]
    }
  ]
};
