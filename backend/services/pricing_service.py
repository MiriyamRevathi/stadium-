"""
Dynamic Pricing Service & Surge Calculator
Backend micro-service for dynamic seat pricing calculations.
"""

from typing import Dict, Any

class PricingService:
    def calculate_surge_price(
        self,
        base_price: int,
        occupancy_rate: float,
        days_until_event: int,
        is_weekend: bool = False,
        tournament_multiplier: float = 1.0
    ) -> Dict[str, Any]:
        # Occupancy surge
        if occupancy_rate >= 0.95:
            occ_surge = 0.50
        elif occupancy_rate >= 0.80:
            occ_surge = 0.30
        elif occupancy_rate >= 0.65:
            occ_surge = 0.15
        else:
            occ_surge = 0.0

        # Time surge
        if days_until_event <= 2:
            time_surge = 0.25
        elif days_until_event <= 7:
            time_surge = 0.10
        elif days_until_event >= 30:
            time_surge = -0.10
        else:
            time_surge = 0.0

        weekend_surge = 0.10 if is_weekend else 0.0
        tournament_surge = max(0.0, tournament_multiplier - 1.0)

        total_multiplier = 1.0 + occ_surge + time_surge + weekend_surge + tournament_surge
        final_price = max(int(base_price * 0.7), int(base_price * total_multiplier))
        
        convenience_fee = 125
        gst_amount = int((final_price + convenience_fee) * 0.08)
        total_payable = final_price + convenience_fee + gst_amount

        return {
            "basePrice": base_price,
            "finalPrice": final_price,
            "convenienceFee": convenience_fee,
            "gstAmount": gst_amount,
            "totalPayable": total_payable,
            "multipliers": {
                "occupancySurge": occ_surge,
                "timeSurge": time_surge,
                "weekendSurge": weekend_surge,
                "tournamentSurge": tournament_surge
            }
        }

pricing_service = PricingService()
