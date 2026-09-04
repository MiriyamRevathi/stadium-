"""
Refund Management Router
Provides REST endpoints for strict 3-day refund policy enforcement.
"""

from fastapi import APIRouter, HTTPException, status, Body
from typing import List, Dict, Any
from backend.models.domain_models import RefundSubmissionRequest, RefundDecisionAction
from backend.services.refund_service import refund_service

router = APIRouter(prefix="/api/admin/refunds", tags=["Refunds"])

# Seed database for backend router
refunds_db: List[Dict[str, Any]] = [
    {
        "id": "REF-2026-001",
        "bookingId": "BK-UPPAL-8901",
        "customerName": "Rahul Reddy",
        "eventName": "India vs Australia",
        "eventDate": "2026-10-18",
        "originalAmount": 7000,
        "refundAmount": 7000,
        "requestDate": "2026-10-12",
        "deadlineDate": "2026-10-15",
        "eligibility": "Eligible",
        "daysBeforeEvent": 6,
        "status": "Requested"
    },
    {
        "id": "REF-2026-003",
        "bookingId": "BK-UPPAL-8904",
        "customerName": "Sneha Kulkarni",
        "eventName": "India vs Australia",
        "eventDate": "2026-10-18",
        "originalAmount": 1500,
        "refundAmount": 1500,
        "requestDate": "2026-10-16",
        "deadlineDate": "2026-10-15",
        "eligibility": "Not Eligible",
        "daysBeforeEvent": 2,
        "status": "Rejected"
    }
]

@router.get("", response_model=List[Dict[str, Any]])
def get_refund_requests():
    return refunds_db

@router.post("/submit", status_code=status.HTTP_201_CREATED)
def submit_refund_request(req: RefundSubmissionRequest):
    eval_res = refund_service.evaluate_eligibility(req.eventDate, req.requestDate)
    
    new_id = f"REF-2026-{len(refunds_db) + 1:03d}"
    record = {
        "id": new_id,
        "bookingId": req.bookingId,
        "customerName": req.customerName,
        "eventName": req.eventName,
        "eventDate": req.eventDate,
        "originalAmount": req.originalAmount,
        "refundAmount": req.originalAmount if eval_res["eligibility"] == "Eligible" else 0,
        "requestDate": req.requestDate,
        "deadlineDate": eval_res["deadlineDate"],
        "eligibility": eval_res["eligibility"],
        "daysBeforeEvent": eval_res["daysBeforeEvent"],
        "reason": req.reason,
        "status": "Requested" if eval_res["eligibility"] == "Eligible" else "Rejected"
    }
    refunds_db.append(record)
    return record

@router.put("/{refund_id}/approve")
def approve_refund(refund_id: str, action: RefundDecisionAction = Body(default=None)):
    for r in refunds_db:
        if r["id"] == refund_id:
            try:
                override = action.overrideFlag if action else False
                notes = action.adminNotes if action else None
                updated = refund_service.process_refund_decision(r, "Approve", notes=notes, override=override)
                return updated
            except ValueError as ve:
                raise HTTPException(status_code=400, detail=str(ve))
    raise HTTPException(status_code=404, detail="Refund request not found")

@router.put("/{refund_id}/reject")
def reject_refund(refund_id: str, action: RefundDecisionAction = Body(default=None)):
    for r in refunds_db:
        if r["id"] == refund_id:
            notes = action.reason if action and action.reason else "Rejected per No General Return Policy."
            updated = refund_service.process_refund_decision(r, "Reject", notes=notes)
            return updated
    raise HTTPException(status_code=404, detail="Refund request not found")
