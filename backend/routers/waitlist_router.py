"""Waitlist API Router"""
from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/api/waitlist", tags=["waitlist"])

class JoinRequest(BaseModel):
    user_id: str
    event_id: str
    max_price: float
    quantity_desired: int
    section_preferences: Optional[List[str]] = None

_entries = []

@router.post("/join")
def join(req: JoinRequest):
    entry = {**req.dict(), "id": f"wl-{len(_entries)+1}", "status": "active"}
    _entries.append(entry)
    return entry

@router.get("/event/{event_id}")
def queue(event_id: str):
    return [e for e in _entries if e["event_id"] == event_id and e["status"] == "active"]

@router.get("/user/{user_id}")
def user_entries(user_id: str):
    return [e for e in _entries if e["user_id"] == user_id]
