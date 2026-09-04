"""Bookings API Router"""
from fastapi import APIRouter, HTTPException
from backend.services.booking_service import booking_service

router = APIRouter(prefix="/api/bookings", tags=["bookings"])

@router.get("/{booking_id}")
def get_booking(booking_id: str):
    b = booking_service.get(booking_id)
    if not b:
        raise HTTPException(404, "Booking not found")
    return b

@router.get("/customer/{customer_id}")
def list_customer_bookings(customer_id: str):
    return booking_service.list_for_customer(customer_id)

@router.post("/{booking_id}/confirm")
def confirm_booking(booking_id: str):
    try:
        return booking_service.confirm(booking_id)
    except KeyError:
        raise HTTPException(404, "Booking not found")

@router.post("/{booking_id}/cancel")
def cancel_booking(booking_id: str):
    try:
        return booking_service.cancel(booking_id)
    except KeyError:
        raise HTTPException(404, "Booking not found")
