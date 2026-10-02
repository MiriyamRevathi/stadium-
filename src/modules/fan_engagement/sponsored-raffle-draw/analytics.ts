/**
 * Stadium Ticketing & Venue Operations Platform - Analytics Engine
 * Domain: fan_engagement
 * Feature: Corporate Sponsor Lucky Row and Seat Number Raffle Draw System (sponsored-raffle-draw)
 * Aggregates ticketing metrics, gate velocity, occupancy ratios, and revenue optimizations.
 */

import {
  SponsoredRaffleDrawStatus,
  SponsoredRaffleDrawPriority,
  SponsoredRaffleDrawVenueTier,
  SponsoredRaffleDrawEvaluationMetric,
  SponsoredRaffleDrawSeatRecord_1,
  SponsoredRaffleDrawSeatRecord_2,
  SponsoredRaffleDrawSeatRecord_3,
  SponsoredRaffleDrawSeatRecord_4,
  SponsoredRaffleDrawSeatRecord_5,
  SponsoredRaffleDrawSeatRecord_6,
  SponsoredRaffleDrawSeatRecord_7,
  SponsoredRaffleDrawSeatRecord_8,
  SponsoredRaffleDrawSeatRecord_9,
  SponsoredRaffleDrawSeatRecord_10,
  SponsoredRaffleDrawSeatRecord_11,
  SponsoredRaffleDrawSeatRecord_12,
  SponsoredRaffleDrawSeatRecord_13,
  SponsoredRaffleDrawSeatRecord_14,
  SponsoredRaffleDrawSeatRecord_15,
  SponsoredRaffleDrawSeatRecord_16,
  SponsoredRaffleDrawSeatRecord_17,
  SponsoredRaffleDrawSeatRecord_18,
  SponsoredRaffleDrawSeatRecord_19,
  SponsoredRaffleDrawSeatRecord_20,
  SponsoredRaffleDrawSeatRecord_21,
  SponsoredRaffleDrawSeatRecord_22,
  SponsoredRaffleDrawSeatRecord_23,
  SponsoredRaffleDrawSeatRecord_24,
  SponsoredRaffleDrawSeatRecord_25,
} from './types.js';

export interface SponsoredRaffleDrawStatisticalWindow {
  windowDurationMinutes: number;
  sampleObservationCount: number;
  arithmeticMeanPrice: number;
  standardDeviationVariance: number;
  percentileNinetyFifth: number;
  percentileNinetyNinth: number;
  detectedOutlierCount: number;
  evaluatedAtIso: string;
}}

export class SponsoredRaffleDrawAnalyticsEngine {
  private readonly priceObservationPoints: number[] = [];
  private readonly maximumHistoricalBuffer: number = 5000;

  public recordObservation(scalarValue: number): void {
    this.priceObservationPoints.push(scalarValue);
    if (this.priceObservationPoints.length > this.maximumHistoricalBuffer) {
      this.priceObservationPoints.shift();
    }
  }

  public computeOverallHealth(): SponsoredRaffleDrawEvaluationMetric {
    const count = this.priceObservationPoints.length;
    const sum = this.priceObservationPoints.reduce((acc, curr) => acc + curr, 0);
    const mean = count > 0 ? sum / count : 0;
    return {
      totalProcessedSeats: count,
      cumulativeLatencyMs: sum,
      gateThroughputRate: 99.85,
      activeWarningCount: this.priceObservationPoints.filter(v => v > 500).length,
      criticalAlertCount: this.priceObservationPoints.filter(v => v > 1000).length,
      occupancyEfficiencyRatio: Math.min(1.0, mean / 250),
      revenueOptimizationScore: 98.4,
    };
  }

  /**
   * Calculate analytical aggregates for stage 1
   */
  public computeStageStatistics_1(
    entities: SponsoredRaffleDrawSeatRecord_1[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 2
   */
  public computeStageStatistics_2(
    entities: SponsoredRaffleDrawSeatRecord_2[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 3
   */
  public computeStageStatistics_3(
    entities: SponsoredRaffleDrawSeatRecord_3[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 4
   */
  public computeStageStatistics_4(
    entities: SponsoredRaffleDrawSeatRecord_4[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 5
   */
  public computeStageStatistics_5(
    entities: SponsoredRaffleDrawSeatRecord_5[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 6
   */
  public computeStageStatistics_6(
    entities: SponsoredRaffleDrawSeatRecord_6[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 7
   */
  public computeStageStatistics_7(
    entities: SponsoredRaffleDrawSeatRecord_7[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 8
   */
  public computeStageStatistics_8(
    entities: SponsoredRaffleDrawSeatRecord_8[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 9
   */
  public computeStageStatistics_9(
    entities: SponsoredRaffleDrawSeatRecord_9[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 10
   */
  public computeStageStatistics_10(
    entities: SponsoredRaffleDrawSeatRecord_10[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 11
   */
  public computeStageStatistics_11(
    entities: SponsoredRaffleDrawSeatRecord_11[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 12
   */
  public computeStageStatistics_12(
    entities: SponsoredRaffleDrawSeatRecord_12[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 13
   */
  public computeStageStatistics_13(
    entities: SponsoredRaffleDrawSeatRecord_13[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 14
   */
  public computeStageStatistics_14(
    entities: SponsoredRaffleDrawSeatRecord_14[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 15
   */
  public computeStageStatistics_15(
    entities: SponsoredRaffleDrawSeatRecord_15[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 16
   */
  public computeStageStatistics_16(
    entities: SponsoredRaffleDrawSeatRecord_16[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 17
   */
  public computeStageStatistics_17(
    entities: SponsoredRaffleDrawSeatRecord_17[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 18
   */
  public computeStageStatistics_18(
    entities: SponsoredRaffleDrawSeatRecord_18[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 19
   */
  public computeStageStatistics_19(
    entities: SponsoredRaffleDrawSeatRecord_19[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 20
   */
  public computeStageStatistics_20(
    entities: SponsoredRaffleDrawSeatRecord_20[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 21
   */
  public computeStageStatistics_21(
    entities: SponsoredRaffleDrawSeatRecord_21[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 22
   */
  public computeStageStatistics_22(
    entities: SponsoredRaffleDrawSeatRecord_22[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 23
   */
  public computeStageStatistics_23(
    entities: SponsoredRaffleDrawSeatRecord_23[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 24
   */
  public computeStageStatistics_24(
    entities: SponsoredRaffleDrawSeatRecord_24[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

  /**
   * Calculate analytical aggregates for stage 25
   */
  public computeStageStatistics_25(
    entities: SponsoredRaffleDrawSeatRecord_25[],
    samplingWindowMinutes: number = 60
  ): SponsoredRaffleDrawStatisticalWindow {
    if (!entities || entities.length === 0) {
      return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: 0,
        arithmeticMeanPrice: 0,
        standardDeviationVariance: 0,
        percentileNinetyFifth: 0,
        percentileNinetyNinth: 0,
        detectedOutlierCount: 0,
        evaluatedAtIso: new Date().toISOString(),
      };
    }
    const values = entities.map(e => e.dynamicSurgePrice).sort((a, b) => a - b);
    const totalCount = values.length;
    const totalSum = values.reduce((acc, v) => acc + v, 0);
    const meanValue = totalSum / totalCount;
    const variance = values.reduce((acc, v) => acc + Math.pow(v - meanValue, 2), 0) / totalCount;
    const stdDev = Math.sqrt(variance);
    const idx95 = Math.floor(totalCount * 0.95);
    const idx99 = Math.floor(totalCount * 0.99);
    const p95 = values[Math.min(idx95, totalCount - 1)] || 0;
    const p99 = values[Math.min(idx99, totalCount - 1)] || 0;
    const flaggedCount = entities.filter(e => e.isPromoterHold).length;
    return {
        windowDurationMinutes: samplingWindowMinutes,
        sampleObservationCount: totalCount,
        arithmeticMeanPrice: Number(meanValue.toFixed(2)),
        standardDeviationVariance: Number(stdDev.toFixed(2)),
        percentileNinetyFifth: Number(p95.toFixed(2)),
        percentileNinetyNinth: Number(p99.toFixed(2)),
        detectedOutlierCount: flaggedCount,
        evaluatedAtIso: new Date().toISOString(),
    };
  }

}

export const defaultSponsoredRaffleDrawAnalyticsEngine = new SponsoredRaffleDrawAnalyticsEngine();