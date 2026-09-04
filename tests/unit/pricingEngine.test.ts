import { describe, it, expect } from 'vitest';
import { dynamicPricingEngine, PricingRuleConfig } from '../../src/services/pricing/dynamicPricingEngine';

describe('DynamicPricingEngine Unit Tests', () => {
  it('should calculate base price correctly with zero surge', () => {
    const config: PricingRuleConfig = {
      basePrice: 2000,
      category: 'Regular',
      occupancyRate: 0.20,
      daysUntilEvent: 15,
      sightlineScore: 75,
      isWeekend: false,
      tournamentMultiplier: 1.0
    };

    const res = dynamicPricingEngine.calculateSeatPrice(config);
    expect(res.basePrice).toBe(2000);
    expect(res.occupancySurgeAmount).toBe(0);
    expect(res.finalPrice).toBe(2000);
    expect(res.convenienceFee).toBe(125);
    expect(res.gstAmount).toBe(Math.round((2000 + 125) * 0.08));
    expect(res.grandTotal).toBe(2000 + 125 + res.gstAmount);
  });

  it('should apply +50% surge when occupancy rate >= 95%', () => {
    const config: PricingRuleConfig = {
      basePrice: 2000,
      category: 'Regular',
      occupancyRate: 0.96,
      daysUntilEvent: 10,
      sightlineScore: 75,
      isWeekend: false,
      tournamentMultiplier: 1.0
    };

    const res = dynamicPricingEngine.calculateSeatPrice(config);
    expect(res.occupancySurgeAmount).toBe(1000);
    expect(res.finalPrice).toBe(3000);
  });

  it('should apply 12% group discount for orders with 8 seats', () => {
    const subtotal = 10000;
    const res = dynamicPricingEngine.applyGroupDiscount(subtotal, 8);
    expect(res.discountAmount).toBe(1200);
    expect(res.discountedSubtotal).toBe(8800);
  });
});
