import { describe, it, expect } from 'vitest';
import { adminService } from '../../src/services/adminService';

describe('Strict 3-Day Refund Policy Unit Tests', () => {
  it('should approve refund requested 6 days prior to match day', () => {
    const requests = adminService.getRefundRequests();
    const eligibleRequest = requests.find((r) => r.daysBeforeEvent >= 3);
    expect(eligibleRequest).toBeDefined();
    if (eligibleRequest) {
      const result = adminService.approveRefund(eligibleRequest.id);
      expect(result.status).toBe('Approved');
    }
  });

  it('should evaluate refund requested 2 days prior as Not Eligible', () => {
    const res = adminService.calculateRefundEligibility('2026-10-18', '2026-10-16');
    expect(res.eligibility).toBe('Not Eligible');
    expect(res.daysBeforeEvent).toBe(2);
    expect(res.reason).toContain('submitted after the allowed deadline');
  });
});
