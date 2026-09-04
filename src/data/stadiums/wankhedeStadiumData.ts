/**
 * Wankhede Stadium (Mumbai) - Comprehensive Geometry, Stand & Sector Configuration
 * Capacity: 33,108 spectators
 * Location: Churchgate, Mumbai, Maharashtra 400020
 */

export interface StadiumStandSpec {
  id: string;
  name: string;
  code: string;
  capacity: number;
  description: string;
  viewingAngle: string;
  sunExposure: 'Morning Sun' | 'Afternoon Shade' | 'Full Shade' | 'Floodlight Focus';
  gates: string[];
  features: string[];
  sections: Array<{
    id: string;
    name: string;
    category: 'Regular' | 'Premium' | 'VIP' | 'Suite';
    tier: 'Lower' | 'Middle' | 'Upper';
    basePrice: number;
    totalSeats: number;
    rows: string[];
    seatsPerRow: number;
    gate: string;
    svgPath: string;
  }>;
}

export interface StadiumVenueProfile {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  location: string;
  established: number;
  totalCapacity: number;
  pitchType: string;
  boundaryLengthMeters: {
    straight: number;
    cover: number;
    midwicket: number;
    fineLeg: number;
  };
  floodlights: boolean;
  transitAccess: {
    nearestStation: string;
    walkTimeMinutes: number;
    parkingZones: string[];
  };
  stands: StadiumStandSpec[];
}

export const WANKHEDE_STADIUM_DATA: StadiumVenueProfile = {
  id: 'stadium-wankhede',
  name: 'Wankhede Stadium',
  shortName: 'Wankhede',
  city: 'Mumbai',
  state: 'Maharashtra',
  location: 'D-Road, Churchgate, Mumbai, Maharashtra 400020',
  established: 1974,
  totalCapacity: 33108,
  pitchType: 'Red Soil (High Bounce & Turn)',
  boundaryLengthMeters: {
    straight: 68,
    cover: 65,
    midwicket: 66,
    fineLeg: 64
  },
  floodlights: true,
  transitAccess: {
    nearestStation: 'Churchgate Railway Station (Western Line)',
    walkTimeMinutes: 5,
    parkingZones: ['Zone A - Marine Drive North', 'Zone B - Churchgate Plaza', 'Zone C - Cooperage Ground']
  },
  stands: [
    {
      id: 'wankhede-garware',
      name: 'Garware Pavilion',
      code: 'GARWARE',
      capacity: 6500,
      description: 'Iconic pavilion housing team dressing rooms, press box, and presidential suite.',
      viewingAngle: 'Straight Behind Bowler Arm (North End)',
      sunExposure: 'Full Shade',
      gates: ['Gate 1', 'Gate 2', 'Gate 3'],
      features: ['Dressing Room Proximity', 'Air-Conditioned Dining', 'VIP Elevators', 'Padded Armchairs'],
      sections: [
        {
          id: 'GAR-L01',
          name: 'Garware Pavilion Lower Tier 1',
          category: 'VIP',
          tier: 'Lower',
          basePrice: 7500,
          totalSeats: 250,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
          seatsPerRow: 25,
          gate: 'Gate 1',
          svgPath: 'M 180 60 A 240 240 0 0 1 300 60 L 280 100 A 200 200 0 0 0 200 100 Z'
        },
        {
          id: 'GAR-L02',
          name: 'Garware Pavilion Lower Tier 2',
          category: 'VIP',
          tier: 'Lower',
          basePrice: 7000,
          totalSeats: 250,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
          seatsPerRow: 25,
          gate: 'Gate 2',
          svgPath: 'M 300 60 A 240 240 0 0 1 420 60 L 400 100 A 200 200 0 0 0 320 100 Z'
        },
        {
          id: 'GAR-U01',
          name: 'Garware Grand Tier Upper',
          category: 'Premium',
          tier: 'Upper',
          basePrice: 4500,
          totalSeats: 400,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS'],
          seatsPerRow: 25,
          gate: 'Gate 3',
          svgPath: 'M 160 20 A 280 280 0 0 1 440 20 L 420 55 A 240 240 0 0 0 180 55 Z'
        }
      ]
    },
    {
      id: 'wankhede-sunil-gavaskar',
      name: 'Sunil Gavaskar Stand',
      code: 'GAVASKAR',
      capacity: 8200,
      description: 'East grandstand named after legendary Indian opener Sunil Gavaskar.',
      viewingAngle: 'Mid-Wicket to Long-On View',
      sunExposure: 'Afternoon Shade',
      gates: ['Gate 4', 'Gate 5', 'Gate 6'],
      features: ['High Fan Energy', 'Food Plaza Access', 'Wide Concourse'],
      sections: [
        {
          id: 'GAV-L01',
          name: 'Gavaskar East Lower 1',
          category: 'Regular',
          tier: 'Lower',
          basePrice: 2200,
          totalSeats: 300,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R'],
          seatsPerRow: 20,
          gate: 'Gate 4',
          svgPath: 'M 430 70 A 240 240 0 0 1 520 160 L 480 180 A 200 200 0 0 0 410 105 Z'
        },
        {
          id: 'GAV-L02',
          name: 'Gavaskar East Lower 2',
          category: 'Regular',
          tier: 'Lower',
          basePrice: 2200,
          totalSeats: 300,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R'],
          seatsPerRow: 20,
          gate: 'Gate 5',
          svgPath: 'M 520 160 A 240 240 0 0 1 560 270 L 515 270 A 200 200 0 0 0 480 180 Z'
        },
        {
          id: 'GAV-U01',
          name: 'Gavaskar East Upper Tier',
          category: 'Regular',
          tier: 'Upper',
          basePrice: 1800,
          totalSeats: 500,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW'],
          seatsPerRow: 25,
          gate: 'Gate 6',
          svgPath: 'M 455 30 A 280 280 0 0 1 600 270 L 560 270 A 240 240 0 0 0 430 70 Z'
        }
      ]
    },
    {
      id: 'wankhede-sachin-tendulkar',
      name: 'Sachin Tendulkar Stand',
      code: 'TENDULKAR',
      capacity: 9400,
      description: 'West grandstand overlooking Arabian Sea breeze and twilight floodlights.',
      viewingAngle: 'Cover to Point Panoramic View',
      sunExposure: 'Morning Sun',
      gates: ['Gate 7', 'Gate 8', 'Gate 9'],
      features: ['Sea Breeze Axis', 'Merchandise Booths', 'Wheelchair Ramps'],
      sections: [
        {
          id: 'TEN-L01',
          name: 'Tendulkar West Lower 1',
          category: 'Premium',
          tier: 'Lower',
          basePrice: 3200,
          totalSeats: 350,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P'],
          seatsPerRow: 25,
          gate: 'Gate 7',
          svgPath: 'M 80 270 A 240 240 0 0 1 120 160 L 170 180 A 200 200 0 0 0 135 270 Z'
        },
        {
          id: 'TEN-L02',
          name: 'Tendulkar West Lower 2',
          category: 'Premium',
          tier: 'Lower',
          basePrice: 3200,
          totalSeats: 350,
          rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P'],
          seatsPerRow: 25,
          gate: 'Gate 8',
          svgPath: 'M 120 160 A 240 240 0 0 1 210 70 L 230 105 A 200 200 0 0 0 170 180 Z'
        },
        {
          id: 'TEN-U01',
          name: 'Tendulkar West Upper Tier',
          category: 'Regular',
          tier: 'Upper',
          basePrice: 2000,
          totalSeats: 550,
          rows: ['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'JJ', 'KK', 'LL', 'MM', 'NN', 'PP', 'RR', 'SS', 'TT', 'UU', 'VV', 'WW', 'XX', 'YY'],
          seatsPerRow: 25,
          gate: 'Gate 9',
          svgPath: 'M 0 270 A 280 280 0 0 1 145 30 L 210 70 A 240 240 0 0 0 80 270 Z'
        }
      ]
    },
    {
      id: 'wankhede-mca-pavilion',
      name: 'MCA Pavilion & Corporate Suites',
      code: 'MCA',
      capacity: 4500,
      description: 'South Pavilion end featuring luxury corporate suites and VIP lounges.',
      viewingAngle: 'Straight Behind Bowler Arm (South End)',
      sunExposure: 'Full Shade',
      gates: ['Gate 10', 'Gate 11'],
      features: ['Private Suite Dining', 'Butler Service', 'VIP Lounge', 'Exclusive Parking'],
      sections: [
        {
          id: 'MCA-S01',
          name: 'MCA Corporate Suite Level 1',
          category: 'Suite',
          tier: 'Middle',
          basePrice: 15000,
          totalSeats: 150,
          rows: ['S1', 'S2', 'S3'],
          seatsPerRow: 50,
          gate: 'Gate 10',
          svgPath: 'M 210 470 A 240 240 0 0 1 390 470 L 370 430 A 200 200 0 0 0 230 430 Z'
        },
        {
          id: 'MCA-S02',
          name: 'MCA Presidential Lounge',
          category: 'Suite',
          tier: 'Upper',
          basePrice: 25000,
          totalSeats: 100,
          rows: ['P1', 'P2'],
          seatsPerRow: 50,
          gate: 'Gate 11',
          svgPath: 'M 190 510 A 280 280 0 0 1 410 510 L 390 475 A 240 240 0 0 0 210 475 Z'
        }
      ]
    }
  ]
};
