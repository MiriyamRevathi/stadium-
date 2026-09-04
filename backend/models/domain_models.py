"""
STADIA Enterprise Domain Models & Pydantic Schemas
Rajiv Gandhi International Cricket Stadium, Uppal, Hyderabad & Multi-Venue Backend
"""

from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime

class StadiumVenueConfig(BaseModel):
    id: str = "stadium-uppal"
    name: str = "Rajiv Gandhi International Cricket Stadium"
    shortName: str = "Uppal Stadium"
    city: str = "Hyderabad"
    state: str = "Telangana"
    location: str = "Uppal, Hyderabad, Telangana 500039"
    established: int = 2004
    totalCapacity: int = 55000
    gates: List[str] = [f"Gate {i}" for i in range(1, 13)]
    refundWindowDays: int = 3
    refundProcessingTime: str = "5–7 business days"
    noGeneralReturnPolicyText: str = (
        "NO GENERAL RETURN POLICY: Tickets are non-refundable unless a refund request "
        "is submitted at least 3 days before the scheduled event."
    )
    maxSeatsPerBooking: int = 8
    seatHoldTimeoutMinutes: int = 10

class StandDetail(BaseModel):
    id: str
    name: str
    code: str
    description: str
    capacity: int
    sectionIds: List[str]
    gates: List[str]
    features: List[str]

class SectionDetail(BaseModel):
    id: str
    standId: str
    standName: str
    name: str
    category: str
    basePrice: int
    totalSeats: int
    rows: List[str]
    seatsPerRow: int
    gate: str
    tier: str

class PhysicalSeatModel(BaseModel):
    id: str
    standId: str
    standName: str
    sectionId: str
    sectionName: str
    row: str
    seatNumber: int
    category: str
    basePrice: int
    status: str = "Available"
    gate: str

class EventCreateModel(BaseModel):
    name: str
    eventType: str
    date: str # YYYY-MM-DD
    startTime: str
    endTime: str
    description: str
    status: str = "Scheduled"
    tournament: Optional[str] = None
    venue: Optional[str] = "Rajiv Gandhi International Cricket Stadium"
    venueLocation: Optional[str] = "Uppal, Hyderabad"
    initialPricing: Optional[Dict[str, int]] = None

class EventUpdateModel(BaseModel):
    name: Optional[str] = None
    eventType: Optional[str] = None
    date: Optional[str] = None
    startTime: Optional[str] = None
    endTime: Optional[str] = None
    description: Optional[str] = None
    status: Optional[str] = None
    tournament: Optional[str] = None

class DynamicPricingRequest(BaseModel):
    eventId: str
    sectionId: str
    category: str
    basePrice: int
    occupancyRate: float = Field(..., ge=0.0, le=1.0)
    daysUntilEvent: int
    isWeekend: bool = False
    tournamentMultiplier: float = 1.0

class RefundSubmissionRequest(BaseModel):
    bookingId: str
    customerName: str
    customerEmail: str
    eventName: str
    eventDate: str # YYYY-MM-DD
    requestDate: str # YYYY-MM-DD
    originalAmount: int
    reason: str

class RefundDecisionAction(BaseModel):
    adminNotes: Optional[str] = None
    reason: Optional[str] = None
    overrideFlag: bool = False

class FoodOrderCreateRequest(BaseModel):
    customerName: str
    customerMobile: str
    sectionId: str
    row: str
    seatNumber: int
    itemIdsWithQty: Dict[str, int]
