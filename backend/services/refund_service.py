"""
Strict 3-Day Refund Policy Business Logic Engine
Rajiv Gandhi International Cricket Stadium, Uppal, Hyderabad

Enforces strict rules:
1. Requests >= 3 days before scheduled event date: ELIGIBLE
2. Requests < 3 days before event date: NOT ELIGIBLE ("Refund not eligible — request submitted after the allowed deadline.")
3. Event already started / completed: NOT ELIGIBLE
4. Non-eligible refund approvals require explicit admin OVERRIDE flag.
"""

from datetime import datetime, timedelta
from typing import Dict, Any

class RefundService:
    def __init__(self, default_window_days: int = 3):
        self.default_window_days = default_window_days

    def evaluate_eligibility(
        self,
        event_date_str: str,
        request_date_str: str,
        window_days: int = None
    ) -> Dict[str, Any]:
        if window_days is None:
            window_days = self.default_window_days

        event_date = datetime.strptime(event_date_str, "%Y-%m-%d").date()
        request_date = datetime.strptime(request_date_str, "%Y-%m-%d").date()
        
        diff_days = (event_date - request_date).days
        deadline_date = event_date - timedelta(days=window_days)

        if diff_days >= window_days:
            return {
                "eligibility": "Eligible",
                "daysBeforeEvent": diff_days,
                "deadlineDate": deadline_date.strftime("%Y-%m-%d"),
                "isDeadlinePassed": False,
                "reason": f"Request submitted {diff_days} days prior to match day (allowed policy window >= {window_days} days)."
            }
        else:
            return {
                "eligibility": "Not Eligible",
                "daysBeforeEvent": diff_days,
                "deadlineDate": deadline_date.strftime("%Y-%m-%d"),
                "isDeadlinePassed": True,
                "reason": "Refund not eligible — request submitted after the allowed deadline."
            }

    def process_refund_decision(
        self,
        refund_record: Dict[str, Any],
        decision: str,
        notes: str = None,
        override: bool = False
    ) -> Dict[str, Any]:
        if decision == "Approve":
            if refund_record.get("eligibility") == "Not Eligible" and not override:
                raise ValueError("Cannot approve refund failing 3-day policy deadline without explicit OVERRIDE approval.")
            
            refund_record["status"] = "Approved"
            refund_record["adminNotes"] = notes if notes else "Approved by Stadium Administrator."
            refund_record["resolvedAt"] = datetime.now().isoformat()
        elif decision == "Reject":
            refund_record["status"] = "Rejected"
            refund_record["adminNotes"] = notes if notes else "Rejected in accordance with No General Return Policy."
            refund_record["resolvedAt"] = datetime.now().isoformat()
        else:
            raise ValueError(f"Invalid decision code: {decision}")

        return refund_record

refund_service = RefundService()
