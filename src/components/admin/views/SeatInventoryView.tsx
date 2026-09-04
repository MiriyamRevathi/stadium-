import React, { useState, useMemo } from 'react';
import {
  AdminEvent,
  Stand,
  Section,
  PhysicalSeat,
  EventSeat,
  SeatStatus,
  SeatCategory
} from '../../../types/admin';
import { InteractiveStadiumMap } from '../InteractiveStadiumMap';
import { SeatInspector } from '../SeatInspector';
import {
  Calendar,
  CheckCircle2,
  Lock,
  Unlock,
  AlertTriangle,
  Armchair,
  Filter,
  Grid,
  MapPin
} from 'lucide-react';

interface SeatInventoryViewProps {
  events: AdminEvent[];
  stands: Stand[];
  sections: Section[];
  physicalSeats: PhysicalSeat[];
  eventSeats: Record<string, Record<string, EventSeat>>;
  selectedEventId: string;
  onSelectEvent: (eventId: string) => void;
  onUpdateEventSeatStatus: (eventId: string, seatId: string, status: SeatStatus) => void;
  onBatchUpdateEventSeats: (eventId: string, seatIds: string[], status: SeatStatus) => void;
}

export const SeatInventoryView: React.FC<SeatInventoryViewProps> = ({
  events,
  stands,
  sections,
  physicalSeats,
  eventSeats,
  selectedEventId,
  onSelectEvent,
  onUpdateEventSeatStatus,
  onBatchUpdateEventSeats
}) => {
  const [viewMode, setViewMode] = useState<'map' | 'table'>('map');
  const [selectedSeat, setSelectedSeat] = useState<PhysicalSeat | null>(null);
  const [standFilter, setStandFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>([]);

  const activeEvent = events.find((e) => e.id === selectedEventId) || events[0];
  const activeEventSeatMap = eventSeats[activeEvent?.id] || {};

  // Inventory Metrics Calculation
  const stats = useMemo(() => {
    const total = physicalSeats.length;
    let available = 0;
    let booked = 0;
    let reserved = 0;
    let blocked = 0;
    let maintenance = 0;

    physicalSeats.forEach((seat) => {
      const eSeat = activeEventSeatMap[seat.id];
      const status = eSeat ? eSeat.status : seat.status;
      if (status === 'Available') available++;
      else if (status === 'Booked') booked++;
      else if (status === 'Reserved') reserved++;
      else if (status === 'Blocked') blocked++;
      else if (status === 'Maintenance') maintenance++;
    });

    return { total, available, booked, reserved, blocked, maintenance };
  }, [physicalSeats, activeEventSeatMap]);

  // Selected seat event-specific status & price
  const selectedEventSeat = selectedSeat ? activeEventSeatMap[selectedSeat.id] : null;

  const handleToggleSelectSeat = (seatId: string) => {
    if (selectedSeatIds.includes(seatId)) {
      setSelectedSeatIds(selectedSeatIds.filter((id) => id !== seatId));
    } else {
      setSelectedSeatIds([...selectedSeatIds, seatId]);
    }
  };

  const handleBatchUpdate = (status: SeatStatus) => {
    if (selectedSeatIds.length === 0 || !activeEvent) return;
    onBatchUpdateEventSeats(activeEvent.id, selectedSeatIds, status);
    setSelectedSeatIds([]);
  };

  return (
    <div className="space-y-6 text-white">
      {/* Header & Event Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
        <div>
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block">
            Real-Time Allocation
          </span>
          <h3 className="text-base font-bold text-white tracking-wide">
            Event Seat Inventory Management
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-neutral-400">Select Event:</span>
            <select
              id="inventory-event-selector"
              value={activeEvent?.id || ''}
              onChange={(e) => onSelectEvent(e.target.value)}
              className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-3 py-2 text-xs font-semibold focus:outline-none focus:border-orange-500"
            >
              {events.map((evt) => (
                <option key={evt.id} value={evt.id}>
                  {evt.name} ({evt.date})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center bg-neutral-950 border border-neutral-800 rounded-lg p-1 text-xs">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1 rounded font-semibold flex items-center space-x-1.5 transition-colors ${
                viewMode === 'map' ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Stadium Map</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1 rounded font-semibold flex items-center space-x-1.5 transition-colors ${
                viewMode === 'table' ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid / Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 Inventory Stat Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
          <span className="text-[11px] text-neutral-400 block">Total Capacity</span>
          <span className="text-xl font-bold font-mono text-white">{stats.total}</span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
          <span className="text-[11px] text-emerald-400 block">Available</span>
          <span className="text-xl font-bold font-mono text-emerald-400">{stats.available}</span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
          <span className="text-[11px] text-rose-400 block">Booked</span>
          <span className="text-xl font-bold font-mono text-rose-400">{stats.booked}</span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
          <span className="text-[11px] text-indigo-400 block">Reserved</span>
          <span className="text-xl font-bold font-mono text-indigo-400">{stats.reserved}</span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
          <span className="text-[11px] text-amber-400 block">Blocked</span>
          <span className="text-xl font-bold font-mono text-amber-400">{stats.blocked}</span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
          <span className="text-[11px] text-neutral-400 block">Maintenance</span>
          <span className="text-xl font-bold font-mono text-neutral-400">{stats.maintenance}</span>
        </div>
      </div>

      {/* Content Area */}
      {viewMode === 'map' ? (
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          <div className="flex-1 min-w-0">
            <InteractiveStadiumMap
              stands={stands}
              sections={sections}
              physicalSeats={physicalSeats}
              eventSeats={activeEventSeatMap}
              selectedSeatId={selectedSeat?.id}
              onSelectSeat={(seat) => setSelectedSeat(seat as PhysicalSeat)}
              mode="event"
            />
          </div>

          <div className="w-full lg:w-80 shrink-0">
            {selectedSeat ? (
              <SeatInspector
                seat={selectedSeat}
                onClose={() => setSelectedSeat(null)}
                onSaveSeat={() => {}}
                onBlockSeat={() => {}}
                onUnblockSeat={() => {}}
                isEventMode={true}
                eventStatus={selectedEventSeat?.status || selectedSeat.status}
                eventPrice={selectedEventSeat?.price || selectedSeat.basePrice}
                onUpdateEventSeat={(seatId, newStatus) => {
                  if (activeEvent) {
                    onUpdateEventSeatStatus(activeEvent.id, seatId, newStatus);
                  }
                }}
              />
            ) : (
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 text-white h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-orange-400 mb-2">
                    <Armchair className="w-5 h-5" />
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      Event Seat Inspector
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Inspect seat status for <strong className="text-white">{activeEvent?.name}</strong>.
                    You can toggle individual seat availability, block VIP holds, or inspect ticket prices.
                  </p>

                  <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-xs space-y-2">
                    <span className="text-neutral-300 font-semibold block">Inventory Legend:</span>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-[#10b981]"></span>
                      <span className="text-neutral-400">Green: Available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-[#ef4444]"></span>
                      <span className="text-neutral-400">Red: Booked</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-[#f97316]"></span>
                      <span className="text-neutral-400">Orange: Blocked by Admin</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-[#64748b]"></span>
                      <span className="text-neutral-400">Gray: Maintenance</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-center">
                  <span className="text-[11px] text-neutral-500">
                    Changes apply immediately to live seat selection
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Grid / Table View with Batch Actions */
        <div className="space-y-4">
          {/* Batch Bar */}
          {selectedSeatIds.length > 0 && (
            <div className="flex items-center space-x-2 bg-neutral-900 border border-neutral-700 px-3 py-2 rounded-lg text-xs">
              <span className="font-bold text-orange-400">
                {selectedSeatIds.length} Seats Selected for {activeEvent?.name}:
              </span>
              <button
                onClick={() => handleBatchUpdate('Blocked')}
                className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded font-bold"
              >
                Block for Event
              </button>
              <button
                onClick={() => handleBatchUpdate('Available')}
                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold"
              >
                Release (Available)
              </button>
              <button
                onClick={() => setSelectedSeatIds([])}
                className="text-neutral-400 hover:text-white px-2 py-1"
              >
                Clear
              </button>
            </div>
          )}

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto max-h-[600px]">
              <table className="w-full text-left text-xs text-neutral-300">
                <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800 sticky top-0 z-10">
                  <tr>
                    <th className="px-4 py-3 w-10">Select</th>
                    <th className="px-4 py-3">Seat ID</th>
                    <th className="px-4 py-3">Stand</th>
                    <th className="px-4 py-3">Section</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Event Price</th>
                    <th className="px-4 py-3">Event Status</th>
                    <th className="px-4 py-3 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60 font-medium">
                  {physicalSeats.slice(0, 100).map((seat) => {
                    const eSeat = activeEventSeatMap[seat.id];
                    const currentStatus = eSeat ? eSeat.status : seat.status;
                    const currentPrice = eSeat ? eSeat.price : seat.basePrice;
                    const isChecked = selectedSeatIds.includes(seat.id);

                    return (
                      <tr key={seat.id} className="hover:bg-neutral-800/40">
                        <td className="px-4 py-2.5">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleSelectSeat(seat.id)}
                            className="rounded border-neutral-700 text-orange-600 focus:ring-orange-500"
                          />
                        </td>
                        <td className="px-4 py-2.5 font-bold font-mono text-white">{seat.id}</td>
                        <td className="px-4 py-2.5 text-neutral-300">{seat.standName}</td>
                        <td className="px-4 py-2.5 text-neutral-400">{seat.sectionId}</td>
                        <td className="px-4 py-2.5 text-neutral-200">{seat.category}</td>
                        <td className="px-4 py-2.5 font-mono font-bold text-orange-400">
                          ₹{currentPrice.toLocaleString('en-IN')}
                        </td>
                        <td className="px-4 py-2.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              currentStatus === 'Available'
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                : currentStatus === 'Booked'
                                ? 'bg-rose-950 text-rose-400 border border-rose-800'
                                : currentStatus === 'Blocked'
                                ? 'bg-orange-950 text-orange-400 border border-orange-800'
                                : 'bg-neutral-800 text-neutral-300'
                            }`}
                          >
                            {currentStatus}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-right">
                          <button
                            onClick={() => {
                              const nextStatus = currentStatus === 'Blocked' ? 'Available' : 'Blocked';
                              onUpdateEventSeatStatus(activeEvent.id, seat.id, nextStatus);
                            }}
                            className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-xs"
                          >
                            {currentStatus === 'Blocked' ? 'Unblock' : 'Block'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
