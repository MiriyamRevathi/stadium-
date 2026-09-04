import React, { useState, useEffect } from 'react';
import { PhysicalSeat, SeatCategory, SeatStatus } from '../../types/admin';
import { X, ShieldAlert, CheckCircle2, Lock, Unlock, Tag, IndianRupee } from 'lucide-react';

interface SeatInspectorProps {
  seat: PhysicalSeat | null;
  onClose: () => void;
  onSaveSeat: (updatedSeat: PhysicalSeat) => void;
  onBlockSeat: (seatId: string) => void;
  onUnblockSeat: (seatId: string) => void;
  isEventMode?: boolean;
  eventStatus?: SeatStatus;
  eventPrice?: number;
  onUpdateEventSeat?: (seatId: string, status: SeatStatus) => void;
}

export const SeatInspector: React.FC<SeatInspectorProps> = ({
  seat,
  onClose,
  onSaveSeat,
  onBlockSeat,
  onUnblockSeat,
  isEventMode = false,
  eventStatus,
  eventPrice,
  onUpdateEventSeat
}) => {
  if (!seat) return null;

  const [category, setCategory] = useState<SeatCategory>(seat.category);
  const [basePrice, setBasePrice] = useState<number>(seat.basePrice);
  const [status, setStatus] = useState<SeatStatus>(seat.status);
  const [activeEventStatus, setActiveEventStatus] = useState<SeatStatus>(eventStatus || seat.status);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setCategory(seat.category);
    setBasePrice(seat.basePrice);
    setStatus(seat.status);
    if (eventStatus) setActiveEventStatus(eventStatus);
    setIsSaved(false);
  }, [seat, eventStatus]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEventMode && onUpdateEventSeat) {
      onUpdateEventSeat(seat.id, activeEventStatus);
    } else {
      onSaveSeat({
        ...seat,
        category,
        basePrice: Number(basePrice),
        status
      });
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleQuickToggleBlock = () => {
    if (isEventMode) {
      const nextStatus = activeEventStatus === 'Blocked' ? 'Available' : 'Blocked';
      setActiveEventStatus(nextStatus);
      onUpdateEventSeat?.(seat.id, nextStatus);
    } else {
      if (status === 'Blocked') {
        setStatus('Available');
        onUnblockSeat(seat.id);
      } else {
        setStatus('Blocked');
        onBlockSeat(seat.id);
      }
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 text-white flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between pb-4 border-b border-neutral-800">
        <div>
          <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider">
            {isEventMode ? 'Event Seat Inventory' : 'Physical Stadium Seat'}
          </span>
          <h3 className="text-xl font-black text-white mt-0.5 tracking-tight flex items-center space-x-2">
            <span>{seat.id}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded font-bold ${
                (isEventMode ? activeEventStatus : status) === 'Available'
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : (isEventMode ? activeEventStatus : status) === 'Booked'
                  ? 'bg-rose-950 text-rose-400 border border-rose-800'
                  : (isEventMode ? activeEventStatus : status) === 'Blocked'
                  ? 'bg-orange-950 text-orange-400 border border-orange-800'
                  : 'bg-neutral-800 text-neutral-300'
              }`}
            >
              {isEventMode ? activeEventStatus : status}
            </span>
          </h3>
        </div>

        <button
          id="close-seat-inspector-btn"
          onClick={onClose}
          className="p-1.5 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Metadata Readout */}
      <div className="grid grid-cols-2 gap-3 py-4 border-b border-neutral-800 text-xs">
        <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800/80">
          <span className="text-neutral-500 block">Stand</span>
          <span className="font-bold text-neutral-200 text-sm">{seat.standName}</span>
        </div>
        <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800/80">
          <span className="text-neutral-500 block">Section</span>
          <span className="font-bold text-neutral-200 text-sm">{seat.sectionId} ({seat.sectionName})</span>
        </div>
        <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800/80">
          <span className="text-neutral-500 block">Row</span>
          <span className="font-bold text-neutral-200 text-sm">Row {seat.row}</span>
        </div>
        <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800/80">
          <span className="text-neutral-500 block">Seat Number</span>
          <span className="font-bold text-neutral-200 text-sm">#{seat.seatNumber}</span>
        </div>
      </div>

      {/* Form Controls */}
      <form onSubmit={handleSave} className="flex-1 flex flex-col justify-between pt-4 space-y-4">
        <div className="space-y-4">
          {/* Status Selection */}
          <div>
            <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
              Seat Status {isEventMode && '(For this Event)'}
            </label>
            <select
              id="inspector-seat-status-select"
              value={isEventMode ? activeEventStatus : status}
              onChange={(e) => {
                const val = e.target.value as SeatStatus;
                if (isEventMode) setActiveEventStatus(val);
                else setStatus(val);
              }}
              className="w-full bg-neutral-950 border border-neutral-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
            >
              <option value="Available">Available (Can be booked)</option>
              <option value="Booked">Booked</option>
              <option value="Reserved">Reserved</option>
              <option value="Blocked">Blocked (Admin Restricted)</option>
              <option value="Maintenance">Maintenance (Under Repair)</option>
            </select>
          </div>

          {!isEventMode && (
            <>
              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
                  Category Tier
                </label>
                <select
                  id="inspector-seat-category-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as SeatCategory)}
                  className="w-full bg-neutral-950 border border-neutral-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-orange-500"
                >
                  <option value="General">General</option>
                  <option value="Premium">Premium</option>
                  <option value="VIP">VIP</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </div>

              {/* Base Price */}
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
                  Physical Base Price (₹)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500 text-sm">
                    ₹
                  </div>
                  <input
                    type="number"
                    id="inspector-seat-price-input"
                    value={basePrice}
                    onChange={(e) => setBasePrice(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-3 py-2 bg-neutral-950 border border-neutral-700 text-white rounded-lg text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </>
          )}

          {isEventMode && (
            <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-xs">
              <span className="text-neutral-500 block">Event Ticket Price</span>
              <span className="font-bold text-orange-400 text-base">
                ₹{(eventPrice || seat.basePrice).toLocaleString('en-IN')}
              </span>
              <p className="text-neutral-500 text-[11px] mt-1">
                Pricing is determined by the active Event Pricing Matrix for {seat.category} tier.
              </p>
            </div>
          )}

          {/* Quick Block / Unblock Button */}
          <div>
            <button
              type="button"
              id="inspector-quick-block-btn"
              onClick={handleQuickToggleBlock}
              className={`w-full py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
                (isEventMode ? activeEventStatus : status) === 'Blocked'
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-amber-600 hover:bg-amber-500 text-white'
              }`}
            >
              {(isEventMode ? activeEventStatus : status) === 'Blocked' ? (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Unblock Seat (Release to Public)</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Block Seat (Prevent Bookings)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          {isSaved && (
            <div className="p-2 bg-emerald-950/80 border border-emerald-800 rounded text-emerald-300 text-xs flex items-center space-x-1.5 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Seat details updated successfully!</span>
            </div>
          )}

          <button
            type="submit"
            id="inspector-save-seat-btn"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-orange-950"
          >
            Save Seat Changes
          </button>
        </div>
      </form>
    </div>
  );
};
