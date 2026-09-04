/**
 * Revenue Forecasting & Ticket Velocity Simulation Engine
 * Runs projection models to simulate stadium capacity fill rates,
 * revenue curves, and category yield optimizations.
 */

export interface RevenueForecastPoint {
  daysBeforeEvent: number;
  projectedOccupancyRate: number;
  projectedRevenue: number;
  projectedTicketsSold: number;
}

export interface StadiumYieldReport {
  eventId: string;
  eventName: string;
  totalSeatsAvailable: number;
  currentSeatsSold: number;
  currentRevenue: number;
  projectedFinalRevenue: number;
  occupancyForecastSeries: RevenueForecastPoint[];
  topPerformingCategory: string;
}

export class RevenueForecastingEngine {
  /**
   * Generates a 30-day projected revenue trajectory using logistic growth model
   */
  public generateForecast(
    eventId: string,
    eventName: string,
    totalSeats: number,
    currentSeatsSold: number,
    averagePricePerSeat: number
  ): StadiumYieldReport {
    const series: RevenueForecastPoint[] = [];
    const maxCapacityRatio = 0.96; // 96% peak sellout capacity

    for (let day = 30; day >= 0; day -= 3) {
      // Logistic curve model for ticket sales velocity
      const progress = (30 - day) / 30;
      const occupancyRate = Math.min(maxCapacityRatio, 0.20 + 0.75 * (1 / (1 + Math.exp(-6 * (progress - 0.5)))));
      const projectedSold = Math.round(totalSeats * occupancyRate);
      const projectedRev = Math.round(projectedSold * averagePricePerSeat);

      series.push({
        daysBeforeEvent: day,
        projectedOccupancyRate: Math.round(occupancyRate * 100) / 100,
        projectedRevenue: projectedRev,
        projectedTicketsSold: projectedSold
      });
    }

    const projectedFinalRevenue = series[series.length - 1]?.projectedRevenue || currentSeatsSold * averagePricePerSeat;

    return {
      eventId,
      eventName,
      totalSeatsAvailable: totalSeats,
      currentSeatsSold,
      currentRevenue: currentSeatsSold * averagePricePerSeat,
      projectedFinalRevenue,
      occupancyForecastSeries: series,
      topPerformingCategory: 'VIP & Corporate Suites'
    };
  }
}

export const revenueForecastingEngine = new RevenueForecastingEngine();
