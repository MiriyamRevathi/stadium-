/**
 * Stadium Analytics, Occupancy Heatmaps & Concession Revenue Predictor
 * Provides high-dimensional analytics for stadium operations management.
 */

export interface SectorOccupancyMetrics {
  sectionId: string;
  sectionName: string;
  category: string;
  totalSeats: number;
  soldSeats: number;
  heldSeats: number;
  availableSeats: number;
  occupancyPercentage: number;
  revenueGenerated: number;
  averagePricePerSeat: number;
  heatmapColor: string;
}

export interface GateTurnstileMetric {
  gateId: string;
  gateName: string;
  scannedPassesCount: number;
  scansPerMinute: number;
  queueDepth: number;
  congestionLevel: 'Low' | 'Moderate' | 'Heavy' | 'Critical';
}

export class StadiumAnalyticsEngine {
  /**
   * Evaluates section heatmap colors based on occupancy rate thresholds
   */
  public getOccupancyHeatmapColor(occupancyRate: number): string {
    if (occupancyRate >= 0.95) return '#EF4444'; // Red (Sellout alert)
    if (occupancyRate >= 0.80) return '#F97316'; // Orange (High demand)
    if (occupancyRate >= 0.60) return '#EAB308'; // Yellow (Medium occupancy)
    if (occupancyRate >= 0.30) return '#3B82F6'; // Blue (Moderate availability)
    return '#22C55E'; // Green (High availability)
  }

  /**
   * Generates section occupancy analysis for administrative dashboards
   */
  public generateSectionAnalytics(sections: any[], seats: any[]): SectorOccupancyMetrics[] {
    return sections.map((sec) => {
      const secSeats = seats.filter((s) => s.sectionId === sec.id);
      const totalSeats = secSeats.length || sec.totalSeats || 100;
      const soldSeats = secSeats.filter((s) => s.status === 'Sold').length;
      const heldSeats = secSeats.filter((s) => s.status === 'Held' || s.status === 'Selected').length;
      const availableSeats = totalSeats - soldSeats - heldSeats;

      const occupancyPercentage = Math.round(((soldSeats + heldSeats) / totalSeats) * 100);
      const averagePricePerSeat = sec.basePrice || 2000;
      const revenueGenerated = soldSeats * averagePricePerSeat;

      return {
        sectionId: sec.id,
        sectionName: sec.name,
        category: sec.category,
        totalSeats,
        soldSeats,
        heldSeats,
        availableSeats,
        occupancyPercentage,
        revenueGenerated,
        averagePricePerSeat,
        heatmapColor: this.getOccupancyHeatmapColor(occupancyPercentage / 100)
      };
    });
  }

  /**
   * Simulates turnstile gate throughput metrics for crowd control
   */
  public simulateGateMetrics(): GateTurnstileMetric[] {
    return Array.from({ length: 12 }, (_, i) => {
      const gateNum = i + 1;
      const scansPerMin = Math.floor(Math.random() * 45) + 15;
      const queueDepth = Math.floor(Math.random() * 80);

      let congestionLevel: GateTurnstileMetric['congestionLevel'] = 'Low';
      if (queueDepth > 60) congestionLevel = 'Critical';
      else if (queueDepth > 35) congestionLevel = 'Heavy';
      else if (queueDepth > 15) congestionLevel = 'Moderate';

      return {
        gateId: `GATE-${gateNum}`,
        gateName: `Gate ${gateNum}`,
        scannedPassesCount: Math.floor(Math.random() * 3000) + 1200,
        scansPerMinute: scansPerMin,
        queueDepth,
        congestionLevel
      };
    });
  }
}

export const stadiumAnalyticsEngine = new StadiumAnalyticsEngine();
