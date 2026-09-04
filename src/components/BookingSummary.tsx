import React from 'react';
import { ShoppingBag, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { Seat, StadiumEvent } from '../types';
import { STADIUM_SECTIONS } from '../data/sections';

interface BookingSummaryProps {
  event: StadiumEvent;
  selectedSeats: Seat[];
  isLoggedIn?: boolean;
  onClearSeats: () => void;
  onProceedToCheckout: () => void;
  onRemoveSeat: (seatId: string) => void;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  event,
  selectedSeats,
  isLoggedIn = true,
  onClearSeats,
  onProceedToCheckout,
  onRemoveSeat
}) => {
  if (!selectedSeats || !Array.isArray(selectedSeats) || selectedSeats.length === 0) return null;

  // Calculate fees and taxes
  const ticketPrice = selectedSeats.reduce((sum, s) => sum + s.price, 0);
  const convenienceFee = selectedSeats.length * 125; // ₹125 per seat
  const taxes = Math.round((ticketPrice + convenienceFee) * 0.08); // 8% GST/taxes
  const total = ticketPrice + convenienceFee + taxes;

  // Group seats by section and row for clear display
  const groupedSeats: Record<string, Record<string, number[]>> = {};
  selectedSeats.forEach((seat) => {
    const sec = STADIUM_SECTIONS.find((s) => s.id === seat.sectionId);
    const secName = sec ? sec.name : seat.sectionId;
    if (!groupedSeats[secName]) groupedSeats[secName] = {};
    if (!groupedSeats[secName][seat.row]) groupedSeats[secName][seat.row] = [];
    groupedSeats[secName][seat.row].push(seat.number);
  });

  return (
    <aside
      id="fixed-booking-summary-bar"
      aria-label="Booking summary and checkout actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#111111] text-white border-t border-neutral-800 shadow-2xl p-3 sm:p-4 animate-in slide-in-from-bottom-6 duration-200"
    >
      <div className="w-full max-w-none flex flex-col md:flex-row items-center justify-between gap-4 px-2 sm:px-6">
        {/* Left: Selected Seats Details */}
        <div className="flex-1 flex flex-wrap items-center gap-3 sm:gap-6 text-xs">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-full bg-[#F97316] text-white font-black flex items-center justify-center text-xs">
              {selectedSeats.length}
            </span>
            <div>
              <span className="font-black uppercase tracking-wider text-white text-sm block">
                {selectedSeats.length} {selectedSeats.length === 1 ? 'Seat' : 'Seats'} Selected
              </span>
              <span className="text-neutral-400 truncate max-w-xs block text-xs">{event.name}</span>
            </div>
          </div>

          {/* Seat Badges Pill List */}
          <div className="flex flex-wrap items-center gap-1.5 max-h-16 overflow-y-auto custom-scroll">
            {Object.entries(groupedSeats).map(([secName, rows]) =>
              Object.entries(rows).map(([rowLetter, seatNums]) => (
                <div
                  key={`${secName}-${rowLetter}`}
                  className="bg-neutral-900 border border-neutral-700 px-2.5 py-1 rounded-[3px] flex items-center space-x-2 text-[11px]"
                >
                  <span className="font-bold text-[#F97316]">
                    Sec {secName}, Row {rowLetter}:
                  </span>
                  <span className="font-mono text-white">
                    {(seatNums || []).sort((a, b) => a - b).join(', ')}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Pricing Breakdown & Checkout Action */}
        <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6 w-full md:w-auto">
          {/* Price Breakdown Preview */}
          <div className="hidden lg:flex items-center space-x-4 text-xs border-r border-neutral-800 pr-6">
            <div>
              <span className="block text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Subtotal</span>
              <span className="font-bold text-neutral-200">₹{ticketPrice.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="block text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Fees & Tax</span>
              <span className="font-bold text-neutral-200">₹{(convenienceFee + taxes).toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Grand Total */}
          <div className="text-right">
            <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Total Amount</span>
            <span className="text-xl sm:text-2xl font-black text-[#F97316]">
              ₹{total.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              id="clear-all-seats-btn"
              onClick={onClearSeats}
              className="p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded transition-colors"
              title="Clear selection"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              id="continue-to-checkout-btn"
              onClick={onProceedToCheckout}
              className="px-6 py-3 bg-[#F97316] hover:bg-orange-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] transition-all shadow-sm flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <span>{isLoggedIn ? 'Continue to Checkout' : 'Sign In to Book & Pay'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
