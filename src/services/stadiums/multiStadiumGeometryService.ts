/**
 * Multi-Stadium Geometry Engine & Multi-Venue Registry Service
 * Provides radial sector geometry generation, viewing distance metrics,
 * gate routing maps, and dynamic stadium comparison calculators.
 */

import { StadiumVenueProfile, WANKHEDE_STADIUM_DATA } from '../../data/stadiums/wankhedeStadiumData';
import { EDEN_GARDENS_DATA } from '../../data/stadiums/edenGardensData';
import { NARENDRA_MODI_STADIUM_DATA } from '../../data/stadiums/narendraModiStadiumData';
import { CHINNASWAMY_STADIUM_DATA } from '../../data/stadiums/chinnaswamyStadiumData';

export interface SectorArcGeometry {
  sectionId: string;
  sectionName: string;
  innerRadius: number;
  outerRadius: number;
  startAngleDeg: number;
  endAngleDeg: number;
  centerAngleDeg: number;
  svgPath: string;
  labelX: number;
  labelY: number;
}

export interface GateDistanceMetric {
  gateName: string;
  recommendedStands: string[];
  nearestParkingZone: string;
  estimatedWalkTimeMin: number;
  wheelchairAccessible: boolean;
}

export class MultiStadiumGeometryService {
  private venues: Map<string, StadiumVenueProfile> = new Map();

  constructor() {
    this.registerVenue(WANKHEDE_STADIUM_DATA);
    this.registerVenue(EDEN_GARDENS_DATA);
    this.registerVenue(NARENDRA_MODI_STADIUM_DATA);
    this.registerVenue(CHINNASWAMY_STADIUM_DATA);
  }

  public registerVenue(venue: StadiumVenueProfile): void {
    if (venue && venue.id) {
      this.venues.set(venue.id, venue);
    }
  }

  public getVenue(venueId: string): StadiumVenueProfile | undefined {
    return this.venues.get(venueId) || Array.from(this.venues.values())[0];
  }

  public getAllVenues(): StadiumVenueProfile[] {
    return Array.from(this.venues.values());
  }

  /**
   * Generates continuous SVG polar coordinates path for radial stadium sector
   */
  public generatePolarArcPath(
    cx: number,
    cy: number,
    innerRadius: number,
    outerRadius: number,
    startAngleDeg: number,
    endAngleDeg: number
  ): string {
    const startRad = (startAngleDeg - 90) * (Math.PI / 180);
    const endRad = (endAngleDeg - 90) * (Math.PI / 180);

    const x1 = cx + innerRadius * Math.cos(startRad);
    const y1 = cy + innerRadius * Math.sin(startRad);

    const x2 = cx + outerRadius * Math.cos(startRad);
    const y2 = cy + outerRadius * Math.sin(startRad);

    const x3 = cx + outerRadius * Math.cos(endRad);
    const y3 = cy + outerRadius * Math.sin(endRad);

    const x4 = cx + innerRadius * Math.cos(endRad);
    const y4 = cy + innerRadius * Math.sin(endRad);

    const largeArc = endAngleDeg - startAngleDeg <= 180 ? 0 : 1;

    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1} Z`;
  }

  /**
   * Computes center coordinate for text label inside arc sector
   */
  public getArcLabelCoordinates(
    cx: number,
    cy: number,
    midRadius: number,
    startAngleDeg: number,
    endAngleDeg: number
  ): { x: number; y: number } {
    const midAngleDeg = (startAngleDeg + endAngleDeg) / 2;
    const rad = (midAngleDeg - 90) * (Math.PI / 180);
    return {
      x: Math.round(cx + midRadius * Math.cos(rad)),
      y: Math.round(cy + midRadius * Math.sin(rad))
    };
  }

  /**
   * Calculates viewing angle quality score (0-100) based on pitch axis alignment
   */
  public calculateSightlineScore(standCode: string, tier: string): number {
    let score = 70;

    if (standCode.includes('PAVILION') || standCode.includes('NORTH') || standCode.includes('SOUTH')) {
      score += 20; // Direct pitch axis behind bowler
    } else if (standCode.includes('WEST') || standCode.includes('EAST')) {
      score += 10;
    }

    if (tier === 'Lower') {
      score += 8; // Close boundary action
    } else if (tier === 'Middle') {
      score += 10; // Optimal elevation view
    } else if (tier === 'Upper') {
      score += 2; // Elevated aerial perspective
    }

    return Math.min(100, score);
  }

  /**
   * Evaluates gate routing for incoming ticket holder
   */
  public getGateRouting(venueId: string, sectionId: string): GateDistanceMetric {
    const venue = this.getVenue(venueId);
    let matchedGate = 'Gate 1';
    let matchedStand = 'Main Pavilion';

    if (venue) {
      for (const stand of venue.stands) {
        for (const section of stand.sections) {
          if (section.id === sectionId) {
            matchedGate = section.gate;
            matchedStand = stand.name;
            break;
          }
        }
      }
    }

    return {
      gateName: matchedGate,
      recommendedStands: [matchedStand],
      nearestParkingZone: venue?.transitAccess.parkingZones[0] || 'Zone A Parking',
      estimatedWalkTimeMin: Math.floor(Math.random() * 5) + 3,
      wheelchairAccessible: true
    };
  }

  /**
   * Venue comparative analysis helper
   */
  public compareVenues(venueIdA: string, venueIdB: string) {
    const vA = this.getVenue(venueIdA);
    const vB = this.getVenue(venueIdB);

    if (!vA || !vB) return null;

    return {
      capacityDiff: vA.totalCapacity - vB.totalCapacity,
      largerVenue: vA.totalCapacity >= vB.totalCapacity ? vA.name : vB.name,
      straightBoundaryDiffMeters: vA.boundaryLengthMeters.straight - vB.boundaryLengthMeters.straight,
      pitchComparison: `${vA.name} (${vA.pitchType}) vs ${vB.name} (${vB.pitchType})`
    };
  }
}

export const multiStadiumGeometryService = new MultiStadiumGeometryService();
