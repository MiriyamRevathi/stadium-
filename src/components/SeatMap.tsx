import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { Seat, StadiumSection, StadiumEvent } from '../types';
import { SeatComponent } from './Seat';

interface SeatMapProps {
  section: StadiumSection;
  event: StadiumEvent;
  seats: Seat[];
  selectedSeats: Seat[];
  onToggleSelectSeat: (seat: Seat) => void;
  onBackToStadium: () => void;
}

export const SeatMap: React.FC<SeatMapProps> = ({
  section,
  event,
  seats,
  selectedSeats,
  onToggleSelectSeat,
  onBackToStadium
}) => {
  const [hoveredSeat, setHoveredSeat] = useState<Seat | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Group seats by row
  const rows = section?.rows || [];
  const safeSeats = Array.isArray(seats) ? seats : [];
  const seatsByRow: Record<string, Seat[]> = {};
  rows.forEach((r) => {
    seatsByRow[r] = safeSeats.filter((s) => s.row === r).sort((a, b) => a.number - b.number);
  });

  const availableCount = safeSeats.filter((s) => s.status === 'available').length;
  const soldCount = safeSeats.filter((s) => s.status === 'sold').length;

  const handleSeatHover = (seat: Seat | null, e?: React.MouseEvent) => {
    setHoveredSeat(seat);
    if (e) {
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div className="w-full bg-white rounded-sm border border-neutral-200 overflow-hidden shadow-sm flex flex-col relative">
      {/* Top Section Header with Immersive UI styling */}
      <div className="bg-white text-black p-5 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200">
        <div className="flex items-center space-x-4">
          <button
            id="back-to-stadium-map-btn"
            onClick={onBackToStadium}
            className="p-2 bg-neutral-100 hover:bg-[#F97316] hover:text-white rounded transition-colors text-black border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            title="Return to Full Stadium Overview"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl sm:text-2xl font-black uppercase italic tracking-tighter text-black">
                Section {section.name} Details
              </h2>
              <span className="px-2 py-0.5 bg-[#F97316] text-white text-[10px] font-black uppercase rounded-[3px]">
                {section.category}
              </span>
            </div>
            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-0.5">
              Row-wise seat selection • {section.stand} ({section.tier})
            </p>
          </div>
        </div>

        {/* Section Stats */}
        <div className="flex items-center space-x-6 text-xs">
          <div className="text-right">
            <span className="block text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Price / Seat</span>
            <span className="text-base font-black text-black">₹{section.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="border-l border-neutral-200 pl-4 text-right">
            <span className="block text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Available</span>
            <span className="text-base font-black text-black">{availableCount} <span className="text-xs text-neutral-400 font-normal">/ {section.totalSeats}</span></span>
          </div>
          <div className="border-l border-neutral-200 pl-4 hidden md:block">
            <span className="block text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Access Gate</span>
            <span className="text-xs text-black font-bold uppercase">{section.gate}</span>
          </div>
        </div>
      </div>

      {/* Field Orientation Banner */}
      <div className="bg-neutral-900 text-white py-2 text-center text-[10px] font-black uppercase tracking-widest border-b border-neutral-800 flex items-center justify-center space-x-2">
        <span>CRICKET PITCH & PLAYING FIELD DIRECTION</span>
        <span>↓</span>
      </div>

      {/* Interactive Seating Grid Container */}
      <div className="p-6 overflow-x-auto bg-neutral-100 flex flex-col items-center">
        <div className="inline-block min-w-max space-y-3">
          {rows.map((rowLetter) => {
            const rowSeats = seatsByRow[rowLetter] || [];
            return (
              <div key={rowLetter} className="flex items-center space-x-3">
                {/* Row Header Label */}
                <div className="w-16 flex items-center justify-end pr-2 text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                  <span>ROW {rowLetter}</span>
                </div>

                {/* Seats in Row */}
                <div className="flex items-center space-x-1 sm:space-x-1.5">
                  {rowSeats.map((seat) => {
                    const isSelected = selectedSeats.some((s) => s.id === seat.id);
                    return (
                      <SeatComponent
                        key={seat.id}
                        seat={seat}
                        section={section}
                        isSelected={isSelected}
                        onToggleSelect={onToggleSelectSeat}
                        onHover={handleSeatHover}
                      />
                    );
                  })}
                </div>

                {/* Row Label Right Side for Ease of Use */}
                <div className="w-8 text-left pl-2 text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                  <span>{rowLetter}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom helper info */}
      <div className="p-4 bg-white border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-6 text-neutral-600">
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded-[3px] bg-white border border-[#999] inline-block" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#F97316] border border-[#F97316] inline-block" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Selected</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#D1D5DB] border border-[#D1D5DB] inline-block" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Sold Out</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded-[3px] bg-[#EEEEEE] border border-[#DDDDDD] inline-block" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Blocked</span>
          </div>
        </div>

        <div className="text-[11px] text-neutral-500 font-medium">
          Select seats directly in the grid. Maximum 8 seats per booking.
        </div>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredSeat && (
        <div
          className="fixed pointer-events-none z-50 bg-black text-white p-3 rounded-md shadow-2xl border border-orange-500 text-xs w-52 -translate-x-1/2 -translate-y-full mb-3"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y - 12}px`
          }}
        >
          <div className="flex items-center justify-between border-b border-neutral-800 pb-1 mb-1.5">
            <span className="font-black text-orange-400">
              Section {section.name} • Row {hoveredSeat.row}
            </span>
            <span className="font-mono text-[11px] text-white">Seat {hoveredSeat.number}</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-neutral-300">
              <span>Tier:</span>
              <span className="font-semibold text-white">{hoveredSeat.category}</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Price:</span>
              <span className="font-bold text-orange-400">₹{hoveredSeat.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Status:</span>
              <span
                className={`font-bold capitalize ${
                  hoveredSeat.status === 'available'
                    ? 'text-emerald-400'
                    : hoveredSeat.status === 'sold'
                    ? 'text-neutral-400'
                    : 'text-amber-400'
                }`}
              >
                {selectedSeats.some((s) => s.id === hoveredSeat.id) ? 'Selected' : hoveredSeat.status}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
