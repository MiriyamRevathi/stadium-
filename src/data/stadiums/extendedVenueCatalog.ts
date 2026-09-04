/**
 * Extended National & International Cricket Venue Catalog
 * Provides venue specs, radial section geometries, gate routing matrices,
 * and fan facilities across premier stadiums in India.
 */

import { StadiumVenueProfile } from './wankhedeStadiumData';

export const EXTENDED_VENUE_CATALOG: StadiumVenueProfile[] = [
  {
    id: 'stadium-chepauk',
    name: 'MA Chidambaram Stadium',
    shortName: 'Chepauk',
    city: 'Chennai',
    state: 'Tamil Nadu',
    location: 'Bells Road, Chepauk, Triplicane, Chennai, Tamil Nadu 600005',
    established: 1916,
    totalCapacity: 38200,
    pitchType: 'Traditional Clay Spinning Pitch with High Humidity Soil',
    boundaryLengthMeters: { straight: 68, cover: 65, midwicket: 67, fineLeg: 63 },
    floodlights: true,
    transitAccess: {
      nearestStation: 'Chepauk MRTS Railway Station',
      walkTimeMinutes: 2,
      parkingZones: ['Zone A - Marina Beach Parking', 'Zone B - Triplicane High Road']
    },
    stands: [
      {
        id: 'chep-c-d-e-stands',
        name: 'C, D & E Grandstands',
        code: 'CHE_CDE',
        capacity: 12500,
        description: 'New pillar-less grandstands offering sea breeze ventilation and unobstructed sightlines.',
        viewingAngle: 'Mid-Wicket & Boundary Axis',
        sunExposure: 'Afternoon Shade',
        gates: ['Gate 1', 'Gate 2', 'Gate 3'],
        features: ['Ocean Breeze Axis', 'Eco Canopy', 'TNCA Club Lounge'],
        sections: [
          {
            id: 'CHE-C1',
            name: 'Block C Lower Tier',
            category: 'Regular',
            tier: 'Lower',
            basePrice: 2000,
            totalSeats: 350,
            rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N'],
            seatsPerRow: 25,
            gate: 'Gate 1',
            svgPath: 'M 200 60 A 240 240 0 0 1 350 60 L 320 100 A 200 200 0 0 0 220 100 Z'
          }
        ]
      }
    ]
  },
  {
    id: 'stadium-sawai-mansingh',
    name: 'Sawai Mansingh Stadium',
    shortName: 'SMS Stadium',
    city: 'Jaipur',
    state: 'Rajasthan',
    location: 'Janpath, Amar Jawan Jyoti, Jaipur, Rajasthan 302005',
    established: 1969,
    totalCapacity: 30000,
    pitchType: 'True Batting Surface with Good Bounce',
    boundaryLengthMeters: { straight: 70, cover: 67, midwicket: 68, fineLeg: 65 },
    floodlights: true,
    transitAccess: {
      nearestStation: 'SMS Hospital Metro Station',
      walkTimeMinutes: 6,
      parkingZones: ['Zone A - Janpath Plaza', 'Zone B - Rambagh Circle']
    },
    stands: [
      {
        id: 'sms-royal-pavilion',
        name: 'Royal Rajputana Pavilion',
        code: 'SMS_ROYAL',
        capacity: 7500,
        description: 'Heritage Rajasthan Cricket Association pavilion with royal heritage suite lounges.',
        viewingAngle: 'Behind Bowler Arm North',
        sunExposure: 'Full Shade',
        gates: ['Gate 1', 'Gate 2'],
        features: ['Royal Heritage Suites', 'Air-Conditioned Dining', 'VIP Elevators'],
        sections: [
          {
            id: 'SMS-R1',
            name: 'Royal Box Tier 1',
            category: 'VIP',
            tier: 'Lower',
            basePrice: 6500,
            totalSeats: 300,
            rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
            seatsPerRow: 30,
            gate: 'Gate 1',
            svgPath: 'M 180 50 A 250 250 0 0 1 380 50 L 350 95 A 210 210 0 0 0 210 95 Z'
          }
        ]
      }
    ]
  },
  {
    id: 'stadium-dharamshala',
    name: 'HPCA Stadium Dharamshala',
    shortName: 'Dharamshala Stadium',
    city: 'Dharamshala',
    state: 'Himachal Pradesh',
    location: 'Tehsil, Dharamshala, Himachal Pradesh 176215',
    established: 2003,
    totalCapacity: 23000,
    pitchType: 'Ryegrass Pitch with High Pace and Cold Air Movement',
    boundaryLengthMeters: { straight: 71, cover: 66, midwicket: 68, fineLeg: 64 },
    floodlights: true,
    transitAccess: {
      nearestStation: 'Gaggal Airport / Kangra Railway',
      walkTimeMinutes: 15,
      parkingZones: ['Zone A - Dhauladhar Plaza', 'Zone B - HPCA Helipad Lot']
    },
    stands: [
      {
        id: 'hpca-dhauladhar-view',
        name: 'Dhauladhar Mountain Stand',
        code: 'HPCA_DHAU',
        capacity: 6200,
        description: 'Scenic grandstand offering breathtaking backdrop views of snow-capped Himalayan peaks.',
        viewingAngle: 'Panoramic Mountain Axis',
        sunExposure: 'Full Shade',
        gates: ['Gate 1', 'Gate 2'],
        features: ['Himalayan Mountain Backdrop', 'Pagoda Style Architecture', 'Heated VIP Lounges'],
        sections: [
          {
            id: 'HPCA-D1',
            name: 'Dhauladhar Terrace Lower',
            category: 'Premium',
            tier: 'Lower',
            basePrice: 4000,
            totalSeats: 250,
            rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J'],
            seatsPerRow: 25,
            gate: 'Gate 1',
            svgPath: 'M 190 40 A 260 260 0 0 1 390 40 L 360 85 A 220 220 0 0 0 220 85 Z'
          }
        ]
      }
    ]
  },
  {
    id: 'stadium-ekana',
    name: 'Ekana Cricket Stadium',
    shortName: 'Ekana Stadium',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    location: 'Amar Shaheed Path, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010',
    established: 2017,
    totalCapacity: 50000,
    pitchType: 'Black Soil Pitch with High Spin Variation',
    boundaryLengthMeters: { straight: 75, cover: 72, midwicket: 74, fineLeg: 70 },
    floodlights: true,
    transitAccess: {
      nearestStation: 'Transport Nagar Metro Station / Charbagh',
      walkTimeMinutes: 10,
      parkingZones: ['Zone A - Shaheed Path Plaza', 'Zone B - Ekana Sportz City']
    },
    stands: [
      {
        id: 'ekana-north-pavilion',
        name: 'North Pavilion Enclosure',
        code: 'EKANA_NORTH',
        capacity: 11000,
        description: 'Modern 3-level pavilion with corporate hospitality and media boxes.',
        viewingAngle: 'Pitch Center Axis',
        sunExposure: 'Full Shade',
        gates: ['Gate 1', 'Gate 2', 'Gate 3'],
        features: ['Corporate Box Dining', '360 Audio Sync', 'High Speed Escalators'],
        sections: [
          {
            id: 'EKA-N1',
            name: 'Ekana North Tier 1',
            category: 'VIP',
            tier: 'Lower',
            basePrice: 7000,
            totalSeats: 350,
            rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
            seatsPerRow: 30,
            gate: 'Gate 1',
            svgPath: 'M 170 50 A 270 270 0 0 1 470 50 L 430 95 A 220 220 0 0 0 210 95 Z'
          }
        ]
      }
    ]
  }
];
