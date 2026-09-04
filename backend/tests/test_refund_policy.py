"""
Pytest Unit Test Suite for Backend 3-Day Refund Policy
"""

import pytest
from backend.services.refund_service import refund_service

def test_refund_eligible_when_requested_6_days_prior():
    res = refund_service.evaluate_eligibility("2026-10-18", "2026-10-12")
    assert res["eligibility"] == "Eligible"
    assert res["daysBeforeEvent"] == 6
    assert res["isDeadlinePassed"] is False

def test_refund_ineligible_when_requested_2_days_prior():
    res = refund_service.evaluate_eligibility("2026-10-18", "2026-10-16")
    assert res["eligibility"] == "Not Eligible"
    assert res["daysBeforeEvent"] == 2
    assert res["isDeadlinePassed"] is True
    assert "submitted after the allowed deadline" in res["reason"]

def test_process_refund_rejection_without_override():
    record = {
        "id": "REF-001",
        "eligibility": "Not Eligible",
        "status": "Requested"
    }
    with pytest.raises(ValueError, match="OVERRIDE"):
        refund_service.process_refund_decision(record, "Approve", override=False)
