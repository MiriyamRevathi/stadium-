import { describe, it, expect } from 'vitest';
import { inSeatDeliveryEngine } from '../../src/services/concessions/inSeatDeliveryEngine';
import { STADIA_FOOD_CATALOG } from '../../src/services/concessions/concessionCatalog';

describe('In-Seat Concessions & Food Ordering Tests', () => {
  it('should create F&B order with runner delivery fee and taxes', () => {
    const item = STADIA_FOOD_CATALOG[0];
    const order = inSeatDeliveryEngine.createOrder(
      'Anand Kumar',
      '9876543210',
      'SEC-A01',
      'Row D',
      12,
      [{ item, quantity: 2 }]
    );

    expect(order.foodSubtotal).toBe(700);
    expect(order.inSeatDeliveryFee).toBe(49);
    expect(order.taxes).toBe(35); // 5% of 700
    expect(order.grandTotal).toBe(784);
    expect(order.status).toBe('Received');
  });

  it('should waive delivery fee for VIP suites', () => {
    const item = STADIA_FOOD_CATALOG[1];
    const order = inSeatDeliveryEngine.createOrder(
      'VIP Guest',
      '9999999999',
      'SUITE-A',
      'S1',
      1,
      [{ item, quantity: 1 }]
    );

    expect(order.inSeatDeliveryFee).toBe(0);
  });
});
