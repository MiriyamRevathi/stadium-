"""
Turnstile Gate Access & RFID/QR Ticket Verification Service
"""

from typing import Dict, Any, List
from datetime import datetime

class AccessControlService:
    def __init__(self):
        self.scanned_tickets: Dict[str, str] = {} # ticketId -> scannedTimestamp

    def verify_gate_entry(self, ticket_id: str, gate_name: str, expected_gate: str) -> Dict[str, Any]:
        now_iso = datetime.now().isoformat()

        # Check anti-passback
        if ticket_id in self.scanned_tickets:
            first_scan = self.scanned_tickets[ticket_id]
            return {
                "access": "DENIED",
                "reason": "ANTI-PASSBACK VIOLATION: Ticket already used to enter the stadium.",
                "firstScannedAt": first_scan,
                "attemptedGate": gate_name,
                "timestamp": now_iso
            }

        # Check gate alignment (warn or allow)
        gate_mismatch = False
        if expected_gate and gate_name != expected_gate:
            gate_mismatch = True

        self.scanned_tickets[ticket_id] = now_iso

        return {
            "access": "GRANTED",
            "ticketId": ticket_id,
            "gateName": gate_name,
            "gateMismatchWarning": gate_mismatch,
            "recommendedGate": expected_gate,
            "turnstileStatus": "UNLOCKED",
            "timestamp": now_iso
        }

access_service = AccessControlService()
