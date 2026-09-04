import { describe, it, expect } from 'vitest';
import { multiStadiumGeometryService } from '../../src/services/stadiums/multiStadiumGeometryService';

describe('MultiStadiumGeometryService Unit Tests', () => {
  it('should generate continuous SVG arc path string', () => {
    const svgPath = multiStadiumGeometryService.generatePolarArcPath(400, 400, 150, 250, 0, 90);
    expect(svgPath).toContain('M');
    expect(svgPath).toContain('A');
    expect(svgPath).toContain('Z');
  });

  it('should calculate higher sightline score for pavilion end seats', () => {
    const pavScore = multiStadiumGeometryService.calculateSightlineScore('PAVILION_NORTH', 'Lower');
    const upperScore = multiStadiumGeometryService.calculateSightlineScore('EAST_STAND', 'Upper');
    expect(pavScore).toBeGreaterThan(upperScore);
  });
});
