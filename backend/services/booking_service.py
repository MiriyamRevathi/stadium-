"""STADIA Booking Service"""
from __future__ import annotations
from datetime import datetime
from typing import Dict, List, Optional, Any
import random, string

CONVENIENCE_FEE_PER_SEAT = 125.0
TAX_RATE = 0.08
MAX_SEATS = 8

class BookingService:
    def __init__(self) -> None:
        self._bookings: Dict[str, dict] = {}
        self._by_customer: Dict[str, List[str]] = {}
        self._by_event: Dict[str, List[str]] = {}

    def quote(self, seat_prices: Dict[str, float], loyalty_discount: float = 0.0, promo_discount: float = 0.0) -> dict:
        subtotal = sum(seat_prices.values())
        convenience = CONVENIENCE_FEE_PER_SEAT * len(seat_prices)
        discount = min(subtotal * (loyalty_discount + promo_discount), subtotal)
        taxable = max(0.0, subtotal - discount) + convenience
        tax = round(taxable * TAX_RATE, 2)
        total = round(taxable + tax, 2)
        return {"subtotal": round(subtotal, 2), "convenience_fee": round(convenience, 2), "tax": tax, "discount": round(discount, 2), "total": total}

    def create(self, event_id: str, customer_id: str, seats: list, payment_method: str, **kwargs) -> dict:
        if not seats or len(seats) > MAX_SEATS:
            raise ValueError("Invalid seat count")
        bid = f"STAD-2026-{''.join(random.choices(string.digits, k=6))}"
        prices = {s["seat_id"]: s["price"] for s in seats}
        q = self.quote(prices)
        booking = {
            "id": bid, "event_id": event_id, "customer_id": customer_id, "seats": seats,
            **q, "payment_method": payment_method, "status": "Pending", "payment_status": "Pending",
            "booking_date": datetime.utcnow().isoformat(),
        }
        self._bookings[bid] = booking
        self._by_customer.setdefault(customer_id, []).append(bid)
        self._by_event.setdefault(event_id, []).append(bid)
        return booking

    def confirm(self, booking_id: str) -> dict:
        b = self._bookings[booking_id]
        b["status"] = "Confirmed"
        b["payment_status"] = "Paid"
        return b

    def cancel(self, booking_id: str) -> dict:
        b = self._bookings[booking_id]
        b["status"] = "Cancelled"
        return b

    def get(self, booking_id: str) -> Optional[dict]:
        return self._bookings.get(booking_id)

    def list_for_customer(self, customer_id: str) -> List[dict]:
        return [self._bookings[i] for i in self._by_customer.get(customer_id, []) if i in self._bookings]

booking_service = BookingService()
