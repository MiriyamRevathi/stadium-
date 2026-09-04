"""
Uppal Stadium Admin - Enterprise FastAPI Backend
Rajiv Gandhi International Cricket Stadium, Uppal, Hyderabad
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routers.refunds_router import router as refunds_router
from backend.routers.bookings_router import router as bookings_router
from backend.routers.loyalty_router import router as loyalty_router
from backend.routers.waitlist_router import router as waitlist_router
from backend.services.pricing_service import pricing_service
from backend.services.access_service import access_service

app = FastAPI(
    title="Uppal Stadium Enterprise API",
    description="Enterprise administration & ticketing API for Rajiv Gandhi International Cricket Stadium, Uppal, Hyderabad",
    version="3.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(refunds_router)
app.include_router(bookings_router)
app.include_router(loyalty_router)
app.include_router(waitlist_router)

@app.get("/health")
def health_check():
    return {"status": "HEALTHY", "venue": "Rajiv Gandhi International Cricket Stadium", "version": "3.0.0"}

@app.get("/api/admin/dashboard")
def get_dashboard():
    return {
        "totalEvents": 4,
        "upcomingEvents": 3,
        "totalStadiumSeats": 55000,
        "availableSeats": 18500,
        "bookedSeats": 36500,
        "todayBookings": 142,
        "totalRevenue": 14250000,
        "pendingRefundRequests": 2,
        "activeWaitlist": 86,
        "loyaltyMembers": 12400,
        "groupInquiries": 7
    }

@app.post("/api/access/gate-scan")
def scan_gate_pass(ticketId: str, gateName: str, expectedGate: str = "Gate 1"):
    return access_service.verify_gate_entry(ticketId, gateName, expectedGate)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
