/**
 * Stadium Ticketing & Venue Operations Platform - Analytics Engine
 * Domain: fan_engagement
 * Feature: Live Stadium Half-Time Fan Poll and Song Request Voting Engine (half-time-show-voting)
 * Aggregates ticketing metrics, gate velocity, occupancy ratios, and revenue optimizations.
 */

import {
  HalfTimeShowVotingStatus,
  HalfTimeShowVotingPriority,
  HalfTimeShowVotingVenueTier,
  HalfTimeShowVotingEvaluationMetric,
  HalfTimeShowVotingSeatRecord_1,
  HalfTimeShowVotingSeatRecord_2,
  HalfTimeShowVotingSeatRecord_3,
  HalfTimeShowVotingSeatRecord_4,
  HalfTimeShowVotingSeatRecord_5,
  HalfTimeShowVotingSeatRecord_6,
  HalfTimeShowVotingSeatRecord_7,
  HalfTimeShowVotingSeatRecord_8,
  HalfTimeShowVotingSeatRecord_9,
  HalfTimeShowVotingSeatRecord_10,
  HalfTimeShowVotingSeatRecord_11,
  HalfTimeShowVotingSeatRecord_12,
  HalfTimeShowVotingSeatRecord_13,
  HalfTimeShowVotingSeatRecord_14,
  HalfTimeShowVotingSeatRecord_15,
  HalfTimeShowVotingSeatRecord_16,
  HalfTimeShowVotingSeatRecord_17,
  HalfTimeShowVotingSeatRecord_18,
  HalfTimeShowVotingSeatRecord_19,
  HalfTimeShowVotingSeatRecord_20,
  HalfTimeShowVotingSeatRecord_21,
  HalfTimeShowVotingSeatRecord_22,
  HalfTimeShowVotingSeatRecord_23,
  HalfTimeShowVotingSeatRecord_24,
  HalfTimeShowVotingSeatRecord_25,
} from './types.js';

export interface HalfTimeShowVotingStatisticalWindow {
  windowDurationMinutes: number;
  sampleObservationCount: number;
  arithmeticMeanPrice: number;
  standardDeviationVariance: number;
  percentileNinetyFifth: number;
  percentileNinetyNinth: number;
  detectedOutlierCount: number;
  evaluatedAtIso: string;
}}

export class HalfTimeShowVotingAnalyticsEngine {
  private readonly priceObservationPoints: number[] = [];
  private readonly maximumHistoricalBuffer: number = 5000;

  public recordObservation(scalarValue: number): void {
    this.priceObservationPoints.push(scalarValue);
    if (this.priceObservationPoints.length > this.maximumHistoricalBuffer) {
      this.priceObservationPoints.shift();
    }
  }

  public computeOverallHealth(): HalfTimeShowVotingEvaluationMetric {
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
    entities: HalfTimeShowVotingSeatRecord_1[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_2[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_3[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_4[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_5[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_6[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_7[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_8[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_9[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_10[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_11[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_12[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_13[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_14[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_15[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_16[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_17[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_18[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_19[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_20[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_21[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_22[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_23[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_24[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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
    entities: HalfTimeShowVotingSeatRecord_25[],
    samplingWindowMinutes: number = 60
  ): HalfTimeShowVotingStatisticalWindow {
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

export const defaultHalfTimeShowVotingAnalyticsEngine = new HalfTimeShowVotingAnalyticsEngine();