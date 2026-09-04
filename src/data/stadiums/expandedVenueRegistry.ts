/**
 * Expanded National Venue Specifications Registry
 * Comprehensive seating matrices, gate configurations, concession booth maps, and transit profiles.
 */

export interface VenueGateSpec {
  gateId: string;
  gateName: string;
  turnstileCount: number;
  accessibleRamp: boolean;
  vipFastTrack: boolean;
  nearestParkingLot: string;
  assignedSections: string[];
}

export interface VenueConcessionStandSpec {
  standId: string;
  standName: string;
  locationSector: string;
  cuisineCategory: string;
  itemCount: number;
  acceptsUPI: boolean;
  acceptsCards: boolean;
  expressDeliveryAvailable: boolean;
}

export interface DetailedVenueProfile {
  id: string;
  name: string;
  city: string;
  state: string;
  capacity: number;
  pitchDimensions: { straight: number; square: number };
  floodlightMastCount: number;
  gates: VenueGateSpec[];
  concessions: VenueConcessionStandSpec[];
}

export const DETAILED_NATIONAL_VENUES: DetailedVenueProfile[] = [
  {
    id: 'venue-uppal-detailed',
    name: 'Rajiv Gandhi International Cricket Stadium',
    city: 'Hyderabad',
    state: 'Telangana',
    capacity: 55000,
    pitchDimensions: { straight: 69, square: 66 },
    floodlightMastCount: 6,
    gates: Array.from({ length: 12 }, (_, i) => ({
      gateId: `GATE-UPPAL-${i + 1}`,
      gateName: `Gate ${i + 1}`,
      turnstileCount: 8,
      accessibleRamp: true,
      vipFastTrack: i === 0 || i === 8,
      nearestParkingLot: i < 6 ? 'Zone A Metro Plaza' : 'Zone B East Ground',
      assignedSections: [`SEC-A0${(i % 6) + 1}`, `SEC-B0${(i % 6) + 1}`]
    })),
    concessions: Array.from({ length: 16 }, (_, i) => ({
      standId: `CONC-UPPAL-${i + 1}`,
      standName: `Hyderabadi Express Stand ${i + 1}`,
      locationSector: `Concourse Sector ${i + 1}`,
      cuisineCategory: i % 2 === 0 ? 'Hyderabadi Biryani & Snacks' : 'Beverages & Desserts',
      itemCount: 12,
      acceptsUPI: true,
      acceptsCards: true,
      expressDeliveryAvailable: true
    }))
  },
  {
    id: 'venue-wankhede-detailed',
    name: 'Wankhede Stadium',
    city: 'Mumbai',
    state: 'Maharashtra',
    capacity: 33108,
    pitchDimensions: { straight: 68, square: 65 },
    floodlightMastCount: 4,
    gates: Array.from({ length: 10 }, (_, i) => ({
      gateId: `GATE-WANKHEDE-${i + 1}`,
      gateName: `Gate ${i + 1}`,
      turnstileCount: 6,
      accessibleRamp: true,
      vipFastTrack: i === 0,
      nearestParkingLot: 'Zone A Marine Drive',
      assignedSections: [`GAR-L0${(i % 3) + 1}`, `GAV-L0${(i % 3) + 1}`]
    })),
    concessions: Array.from({ length: 12 }, (_, i) => ({
      standId: `CONC-WANKHEDE-${i + 1}`,
      standName: `Mumbai Vada Pav & Chai Kiosk ${i + 1}`,
      locationSector: `Garware Concourse ${i + 1}`,
      cuisineCategory: 'Local Snacks & Cold Drinks',
      itemCount: 10,
      acceptsUPI: true,
      acceptsCards: true,
      expressDeliveryAvailable: true
    }))
  },
  {
    id: 'venue-eden-detailed',
    name: 'Eden Gardens',
    city: 'Kolkata',
    state: 'West Bengal',
    capacity: 68000,
    pitchDimensions: { straight: 74, square: 71 },
    floodlightMastCount: 4,
    gates: Array.from({ length: 16 }, (_, i) => ({
      gateId: `GATE-EDEN-${i + 1}`,
      gateName: `Gate ${i + 1}`,
      turnstileCount: 10,
      accessibleRamp: true,
      vipFastTrack: i === 0 || i === 1,
      nearestParkingLot: 'Zone A Red Road Maidan',
      assignedSections: [`EDN-BLK-${String.fromCharCode(65 + (i % 8))}`]
    })),
    concessions: Array.from({ length: 20 }, (_, i) => ({
      standId: `CONC-EDEN-${i + 1}`,
      standName: `Kolkata Kathi Roll Plaza ${i + 1}`,
      locationSector: `Maidan View Concourse ${i + 1}`,
      cuisineCategory: 'Kathi Rolls & Indian Street Food',
      itemCount: 15,
      acceptsUPI: true,
      acceptsCards: true,
      expressDeliveryAvailable: true
    }))
  }
];
