"""Loyalty API Router"""
from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/api/loyalty", tags=["loyalty"])

class EarnRequest(BaseModel):
    user_id: str
    amount_inr: float
    booking_id: str
    event_id: str

class RedeemRequest(BaseModel):
    user_id: str
    offer_id: str

_accounts = {}

@router.get("/account/{user_id}")
def get_account(user_id: str):
    if user_id not in _accounts:
        _accounts[user_id] = {"userId": user_id, "tier": "Bronze", "pointsBalance": 0, "lifetimePoints": 0}
    return _accounts[user_id]

@router.post("/earn")
def earn_points(req: EarnRequest):
    acc = get_account(req.user_id)
    pts = int(req.amount_inr)
    acc["pointsBalance"] += pts
    acc["lifetimePoints"] += pts
    return {"points": pts, "balance": acc["pointsBalance"]}

@router.post("/redeem")
def redeem(req: RedeemRequest):
    acc = get_account(req.user_id)
    cost = 1000
    if acc["pointsBalance"] < cost:
        return {"ok": False, "error": "Insufficient points"}
    acc["pointsBalance"] -= cost
    return {"ok": True, "balance": acc["pointsBalance"]}
