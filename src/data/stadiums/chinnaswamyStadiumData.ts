/**
 * M. Chinnaswamy Stadium (Bengaluru) - Comprehensive Geometry & Sector Configuration
 * Capacity: 32,000 spectators
 * Location: Cubbon Park, Bengaluru, Karnataka 560001
 */

import { StadiumVenueProfile } from './wankhedeStadiumData';

export const CHINNASWAMY_STADIUM_DATA: StadiumVenueProfile = {
  id: 'stadium-chinnaswamy',
  name: 'M. Chinnaswamy Stadium',
  shortName: 'Chinnaswamy',
  city: 'Bengaluru',
  state: 'Karnataka',
  location: 'MG Road, Cubbon Park, Bengaluru, Karnataka 560001',
  established: 1969,
  totalCapacity: 32000,
  pitchType: 'Batting Paradise with Short Boundaries & Solar Power Canopy',
  boundaryLengthMeters: {
    straight: 65,
    cover: 60,
    midwicket: 62,
    fineLeg: 58
  },
  floodlights: true,
  transitAccess: {
    nearestStation: 'MG Road Metro Station / Cubbon Park Station',
    walkTimeMinutes: 4,
    parkingZones: ['Zone A - Kanteerava Outdoor Lot', 'Zone B - UB City Multi-Level', 'Zone C - Cubbon Park East']
  },
  stands: [
    {
      id: 'chin-pavilion-stand',
      name: 'Members Pavilion & Royal Box (North)',
      code: 'PAVILION_ROYAL',
      capacity: 6800,
      description: 'Members pavilion housing KSCA offices, royal box, and player dressing rooms.',
      viewingAngle: 'Bowler Axis Pitch Angle',
      sunExposure: 'Full Shade',
      gates: ['Gate 1', 'Gate 2', 'Gate 3'],
      features: ['Solar Powered Roof Canopy', 'KSCA Club Lounge', 'Exclusive Bar Access'],
      sections: [
        {
          id: 'CHN-PAV-L1',
          name: 'Members Pavilion Lower Tier',
          category: 'VIP',
          tier: 'Lower',
          basePrice: 6500,
          totalSeats: 250,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
          seatsPerRow: 25,
          gate: 'Gate 1',
          svgPath: 'M 190 60 A 240 240 0 0 1 310 60 L 290 100 A 200 200 0 0 0 210 100 Z'
        },
        {
          id: 'CHN-ROY-S1',
          name: 'Royal Box Executive Suite',
          category: 'Suite',
          tier: 'Upper',
          basePrice: 16000,
          totalSeats: 150,
          rows: ['S1', 'S2', 'S3'],
          seatsPerRow: 50,
          gate: 'Gate 2',
          svgPath: 'M 170 20 A 280 280 0 0 1 330 20 L 310 55 A 240 240 0 0 0 190 55 Z'
        }
      ]
    },
    {
      id: 'chin-p2-p3-stands',
      name: 'P1, P2 & P3 Grandstands (East)',
      code: 'EAST_P_STANDS',
      capacity: 11200,
      description: 'High boundary strike zone stand popular for six-hitting excitement.',
      viewingAngle: 'Mid-Wicket to Long-On View',
      sunExposure: 'Afternoon Shade',
      gates: ['Gate 4', 'Gate 5', 'Gate 6', 'Gate 7'],
      features: ['High-Velocity Boundary Proximity', 'Cubbon Park Breeze', 'Craft Beer Kiosks'],
      sections: [
        {
          id: 'CHN-P1-L',
          name: 'P1 Lower Stand',
          category: 'Regular',
          tier: 'Lower',
          basePrice: 2000,
          totalSeats: 350,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P'],
          seatsPerRow: 25,
          gate: 'Gate 4',
          svgPath: 'M 320 60 A 240 240 0 0 1 430 160 L 390 180 A 200 200 0 0 0 300 100 Z'
        },
        {
          id: 'CHN-P2-U',
          name: 'P2 Upper Terrace',
          category: 'Regular',
          tier: 'Upper',
          basePrice: 1600,
          totalSeats: 450,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU'],
          seatsPerRow: 25,
          gate: 'Gate 5',
          svgPath: 'M 340 20 A 280 280 0 0 1 470 160 L 430 160 A 240 240 0 0 0 320 60 Z'
        }
      ]
    },
    {
      id: 'chin-terrace-g-stands',
      name: 'Terrace & G-Stands (West)',
      code: 'WEST_TERRACE',
      capacity: 10500,
      description: 'West grandstand with elevated sightlines above MG Road skyline.',
      viewingAngle: 'Cover & Point Angle View',
      sunExposure: 'Morning Sun',
      gates: ['Gate 8', 'Gate 9', 'Gate 10'],
      features: ['Elevated Sunset View', 'Wide Concourse Food Court', 'Merchandise Stall'],
      sections: [
        {
          id: 'CHN-TER-1',
          name: 'Grand Terrace Tier 1',
          category: 'Premium',
          tier: 'Lower',
          basePrice: 2800,
          totalSeats: 300,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
          seatsPerRow: 25,
          gate: 'Gate 8',
          svgPath: 'M 80 160 A 240 240 0 0 1 190 60 L 210 100 A 200 200 0 0 0 130 180 Z'
        },
        {
          id: 'CHN-G1-U',
          name: 'G Stand Upper Deck',
          category: 'Regular',
          tier: 'Upper',
          basePrice: 1500,
          totalSeats: 400,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS'],
          seatsPerRow: 25,
          gate: 'Gate 9',
          svgPath: 'M 50 160 A 280 280 0 0 1 170 20 L 190 60 A 240 240 0 0 0 80 160 Z'
        }
      ]
    }
  ]
};
