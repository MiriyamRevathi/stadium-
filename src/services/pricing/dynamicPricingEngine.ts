/**
 * Dynamic Pricing & Demand Surge Engine
 * Calculates real-time seat prices based on remaining occupancy, sales velocity,
 * tournament tiers, sightline quality scores, and day-of-week multipliers.
 */

export interface PricingRuleConfig {
  basePrice: number;
  category: 'Regular' | 'Premium' | 'VIP' | 'Suite';
  occupancyRate: number; // 0.0 to 1.0
  daysUntilEvent: number;
  sightlineScore: number; // 0 to 100
  isWeekend: boolean;
  tournamentMultiplier: number;
}

export interface CalculatedPriceBreakdown {
  basePrice: number;
  occupancySurgeAmount: number;
  timeDecaySurgeAmount: number;
  sightlineAdjustment: number;
  weekendSurgeAmount: number;
  tournamentSurgeAmount: number;
  finalPrice: number;
  convenienceFee: number;
  gstAmount: number;
  grandTotal: number;
}

export class DynamicPricingEngine {
  private baseConvenienceFeePerSeat = 125;
  private gstRate = 0.08; // 8% GST

  /**
   * Calculates surge-adjusted seat price and itemized breakdown
   */
  public calculateSeatPrice(config: PricingRuleConfig): CalculatedPriceBreakdown {
    const { basePrice, occupancyRate, daysUntilEvent, sightlineScore, isWeekend, tournamentMultiplier } = config;

    // 1. Occupancy surge (High demand when >70% sold)
    let occupancyMultiplier = 0;
    if (occupancyRate >= 0.95) {
      occupancyMultiplier = 0.50; // +50% surge
    } else if (occupancyRate >= 0.80) {
      occupancyMultiplier = 0.30; // +30% surge
    } else if (occupancyRate >= 0.65) {
      occupancyMultiplier = 0.15; // +15% surge
    }

    const occupancySurgeAmount = Math.round(basePrice * occupancyMultiplier);

    // 2. Time decay surge (Last 3 days surge, early bird discount >30 days)
    let timeSurgeMultiplier = 0;
    if (daysUntilEvent <= 2) {
      timeSurgeMultiplier = 0.25; // +25% last-minute surge
    } else if (daysUntilEvent <= 7) {
      timeSurgeMultiplier = 0.10; // +10% 1-week surge
    } else if (daysUntilEvent >= 30) {
      timeSurgeMultiplier = -0.10; // -10% early bird discount
    }

    const timeDecaySurgeAmount = Math.round(basePrice * timeSurgeMultiplier);

    // 3. Sightline quality adjustment (+-10%)
    const sightlineFactor = (sightlineScore - 75) / 100;
    const sightlineAdjustment = Math.round(basePrice * sightlineFactor);

    // 4. Weekend multiplier (+10%)
    const weekendSurgeAmount = isWeekend ? Math.round(basePrice * 0.10) : 0;

    // 5. Tournament multiplier (e.g. IPL / World Cup series deciders)
    const tournamentSurgeAmount = Math.round(basePrice * (tournamentMultiplier - 1.0));

    // Calculate final seat price before taxes
    const rawPrice = basePrice + occupancySurgeAmount + timeDecaySurgeAmount + sightlineAdjustment + weekendSurgeAmount + tournamentSurgeAmount;
    const finalPrice = Math.max(Math.round(basePrice * 0.7), Math.round(rawPrice));

    const convenienceFee = this.baseConvenienceFeePerSeat;
    const taxableSubtotal = finalPrice + convenienceFee;
    const gstAmount = Math.round(taxableSubtotal * this.gstRate);
    const grandTotal = taxableSubtotal + gstAmount;

    return {
      basePrice,
      occupancySurgeAmount,
      timeDecaySurgeAmount,
      sightlineAdjustment,
      weekendSurgeAmount,
      tournamentSurgeAmount,
      finalPrice,
      convenienceFee,
      gstAmount,
      grandTotal
    };
  }

  /**
   * Evaluates bulk group booking discounts for orders >= 5 seats
   */
  public applyGroupDiscount(subtotal: number, seatCount: number): { discountAmount: number; discountedSubtotal: number } {
    let discountPercent = 0;

    if (seatCount >= 8) {
      discountPercent = 0.12; // 12% group discount
    } else if (seatCount >= 5) {
      discountPercent = 0.08; // 8% family pack discount
    }

    const discountAmount = Math.round(subtotal * discountPercent);
    const discountedSubtotal = subtotal - discountAmount;

    return { discountAmount, discountedSubtotal };
  }
}

export const dynamicPricingEngine = new DynamicPricingEngine();
