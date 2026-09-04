import React, { useState } from 'react';
import { PhysicalSeat, Section, Stand, SeatCategory, SeatStatus } from '../../../types/admin';
import { Search, Lock, Unlock, Edit3, X, CheckSquare, Square } from 'lucide-react';

interface SeatsViewProps {
  seats: PhysicalSeat[];
  sections: Section[];
  stands: Stand[];
  onUpdateSeat: (seat: PhysicalSeat) => void;
  onBatchUpdateSeats: (seatIds: string[], status: SeatStatus) => void;
}

export const SeatsView: React.FC<SeatsViewProps> = ({
  seats,
  sections,
  stands,
  onUpdateSeat,
  onBatchUpdateSeats
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [standFilter, setStandFilter] = useState('all');
  const [sectionFilter, setSectionFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>([]);
  const [editingSeat, setEditingSeat] = useState<PhysicalSeat | null>(null);

  // Filtered Seats
  const filteredSeats = seats.filter((s) => {
    if (searchTerm && !s.id.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (standFilter !== 'all' && s.standId !== standFilter) return false;
    if (sectionFilter !== 'all' && s.sectionId !== sectionFilter) return false;
    if (statusFilter !== 'all' && s.status !== statusFilter) return false;
    return true;
  });

  const handleToggleSelectSeat = (id: string) => {
    if (selectedSeatIds.includes(id)) {
      setSelectedSeatIds(selectedSeatIds.filter((sId) => sId !== id));
    } else {
      setSelectedSeatIds([...selectedSeatIds, id]);
    }
  };

  const handleSelectAllVisible = () => {
    if (selectedSeatIds.length === filteredSeats.length) {
      setSelectedSeatIds([]);
    } else {
      setSelectedSeatIds(filteredSeats.map((s) => s.id));
    }
  };

  const handleBatchStatus = (status: SeatStatus) => {
    if (selectedSeatIds.length === 0) return;
    onBatchUpdateSeats(selectedSeatIds, status);
    setSelectedSeatIds([]);
  };

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Physical Stadium Seats Master
          </h3>
          <p className="text-xs text-neutral-400">
            {seats.length} total physical seat records across all stands and rows.
          </p>
        </div>

        {/* Batch Operations Bar */}
        {selectedSeatIds.length > 0 && (
          <div className="flex items-center space-x-2 bg-neutral-900 border border-neutral-700 px-3 py-1.5 rounded-lg text-xs animate-fadeIn">
            <span className="font-bold text-orange-400">{selectedSeatIds.length} Seats Selected:</span>
            <button
              id="batch-block-seats-btn"
              onClick={() => handleBatchStatus('Blocked')}
              className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded font-bold flex items-center space-x-1"
            >
              <Lock className="w-3 h-3" />
              <span>Block Selected</span>
            </button>
            <button
              id="batch-unblock-seats-btn"
              onClick={() => handleBatchStatus('Available')}
              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold flex items-center space-x-1"
            >
              <Unlock className="w-3 h-3" />
              <span>Make Available</span>
            </button>
            <button
              onClick={() => setSelectedSeatIds([])}
              className="text-neutral-400 hover:text-white px-2 py-1"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Seat ID (e.g. N03-A-01)..."
            className="w-full bg-neutral-950 border border-neutral-700 rounded-lg pl-9 pr-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={standFilter}
            onChange={(e) => {
              setStandFilter(e.target.value);
              setSectionFilter('all');
            }}
            className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-2.5 py-2 text-xs"
          >
            <option value="all">All Stands</option>
            {stands.map((st) => (
              <option key={st.id} value={st.id}>{st.name}</option>
            ))}
          </select>

          <select
            value={sectionFilter}
            onChange={(e) => setSectionFilter(e.target.value)}
            className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-2.5 py-2 text-xs"
          >
            <option value="all">All Sections</option>
            {sections
              .filter((sec) => standFilter === 'all' || sec.standId === standFilter)
              .map((sec) => (
                <option key={sec.id} value={sec.id}>{sec.id} - {sec.name}</option>
              ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-2.5 py-2 text-xs"
          >
            <option value="all">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Blocked">Blocked</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Booked">Booked</option>
            <option value="Reserved">Reserved</option>
          </select>
        </div>
      </div>

      {/* Seats Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto max-h-[600px]">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 w-10">
                  <button onClick={handleSelectAllVisible} className="p-0.5">
                    {selectedSeatIds.length === filteredSeats.length && filteredSeats.length > 0 ? (
                      <CheckSquare className="w-4 h-4 text-orange-400" />
                    ) : (
                      <Square className="w-4 h-4 text-neutral-500" />
                    )}
                  </button>
                </th>
                <th className="px-4 py-3">Seat ID</th>
                <th className="px-4 py-3">Stand</th>
                <th className="px-4 py-3">Section</th>
                <th className="px-4 py-3">Row</th>
                <th className="px-4 py-3">Number</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Base Price</th>
                <th className="px-4 py-3">Physical Status</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {filteredSeats.slice(0, 100).map((seat) => {
                const isChecked = selectedSeatIds.includes(seat.id);

                return (
                  <tr
                    key={seat.id}
                    className={`hover:bg-neutral-800/40 transition-colors ${
                      isChecked ? 'bg-orange-950/20' : ''
                    }`}
                  >
                    <td className="px-4 py-2.5">
                      <button onClick={() => handleToggleSelectSeat(seat.id)}>
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-orange-400" />
                        ) : (
                          <Square className="w-4 h-4 text-neutral-600" />
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-2.5 font-bold text-white font-mono text-xs">
                      {seat.id}
                    </td>
                    <td className="px-4 py-2.5 text-neutral-300">{seat.standName}</td>
                    <td className="px-4 py-2.5 font-semibold text-neutral-200">{seat.sectionId}</td>
                    <td className="px-4 py-2.5 font-mono text-neutral-400">{seat.row}</td>
                    <td className="px-4 py-2.5 font-mono text-neutral-400">#{seat.seatNumber}</td>
                    <td className="px-4 py-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-neutral-200">
                        {seat.category}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 font-mono font-bold text-orange-400">
                      ₹{seat.basePrice.toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          seat.status === 'Available'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : seat.status === 'Blocked'
                            ? 'bg-orange-950 text-orange-400 border border-orange-800'
                            : seat.status === 'Maintenance'
                            ? 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                            : 'bg-rose-950 text-rose-400 border border-rose-800'
                        }`}
                      >
                        {seat.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-right">
                      <button
                        onClick={() => setEditingSeat(seat)}
                        className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-xs inline-flex items-center space-x-1"
                      >
                        <Edit3 className="w-3 h-3 text-orange-400" />
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-3 bg-neutral-950 border-t border-neutral-800 text-xs text-neutral-500 text-center">
          Showing {Math.min(100, filteredSeats.length)} of {filteredSeats.length} matching seats (Paginated preview for smooth performance)
        </div>
      </div>

      {/* Edit Single Seat Modal */}
      {editingSeat && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-sm w-full p-5 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
              <h4 className="text-base font-bold text-white">Edit Seat {editingSeat.id}</h4>
              <button
                onClick={() => setEditingSeat(null)}
                className="text-neutral-400 hover:text-white p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Status</label>
                <select
                  value={editingSeat.status}
                  onChange={(e) => setEditingSeat({ ...editingSeat, status: e.target.value as SeatStatus })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                >
                  <option value="Available">Available</option>
                  <option value="Blocked">Blocked</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Booked">Booked</option>
                  <option value="Reserved">Reserved</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Category</label>
                <select
                  value={editingSeat.category}
                  onChange={(e) => setEditingSeat({ ...editingSeat, category: e.target.value as SeatCategory })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                >
                  <option value="General">General</option>
                  <option value="Premium">Premium</option>
                  <option value="VIP">VIP</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Base Price (₹)</label>
                <input
                  type="number"
                  value={editingSeat.basePrice}
                  onChange={(e) => setEditingSeat({ ...editingSeat, basePrice: Number(e.target.value) })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setEditingSeat(null)}
                  className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onUpdateSeat(editingSeat);
                    setEditingSeat(null);
                  }}
                  className="px-3 py-1.5 bg-orange-600 text-white rounded-lg font-bold"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
