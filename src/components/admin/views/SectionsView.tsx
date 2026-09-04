import React, { useState } from 'react';
import { Section, Stand, SeatCategory } from '../../../types/admin';
import { Edit3, X, Filter } from 'lucide-react';

interface SectionsViewProps {
  sections: Section[];
  stands: Stand[];
  onUpdateSection: (sectionId: string, updates: Partial<Section>) => void;
}

export const SectionsView: React.FC<SectionsViewProps> = ({ sections, stands, onUpdateSection }) => {
  const [standFilter, setStandFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [editingSection, setEditingSection] = useState<Section | null>(null);

  // Edit form state
  const [category, setCategory] = useState<SeatCategory>('General');
  const [basePrice, setBasePrice] = useState<number>(500);
  const [seatsPerRow, setSeatsPerRow] = useState<number>(10);
  const [gate, setGate] = useState<string>('Gate 1');

  const filteredSections = sections.filter((sec) => {
    if (standFilter !== 'all' && sec.standId !== standFilter) return false;
    if (categoryFilter !== 'all' && sec.category !== categoryFilter) return false;
    return true;
  });

  const handleStartEdit = (sec: Section) => {
    setEditingSection(sec);
    setCategory(sec.category);
    setBasePrice(sec.basePrice);
    setSeatsPerRow(sec.seatsPerRow);
    setGate(sec.gate);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSection) return;

    onUpdateSection(editingSection.id, {
      category,
      basePrice: Number(basePrice),
      seatsPerRow: Number(seatsPerRow),
      totalSeats: editingSection.rows.length * Number(seatsPerRow),
      gate
    });

    setEditingSection(null);
  };

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Sections Management
          </h3>
          <p className="text-xs text-neutral-400">
            Configure seating categories, physical baseline pricing, and row density across all 14 stadium sections.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center space-x-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
            <span className="text-neutral-500">Stand:</span>
            <select
              value={standFilter}
              onChange={(e) => setStandFilter(e.target.value)}
              className="bg-transparent text-white focus:outline-none"
            >
              <option value="all" className="bg-neutral-900">All Stands</option>
              {stands.map((st) => (
                <option key={st.id} value={st.id} className="bg-neutral-900">
                  {st.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
            <span className="text-neutral-500">Category:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-transparent text-white focus:outline-none"
            >
              <option value="all" className="bg-neutral-900">All Categories</option>
              <option value="General" className="bg-neutral-900">General</option>
              <option value="Premium" className="bg-neutral-900">Premium</option>
              <option value="VIP" className="bg-neutral-900">VIP</option>
              <option value="Hospitality" className="bg-neutral-900">Hospitality</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sections Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800">
              <tr>
                <th className="px-4 py-3">Section ID</th>
                <th className="px-4 py-3">Section Name</th>
                <th className="px-4 py-3">Stand</th>
                <th className="px-4 py-3">Category Tier</th>
                <th className="px-4 py-3">Base Price</th>
                <th className="px-4 py-3">Rows</th>
                <th className="px-4 py-3">Seats / Row</th>
                <th className="px-4 py-3">Total Seats</th>
                <th className="px-4 py-3">Entry Gate</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {filteredSections.map((sec) => (
                <tr key={sec.id} className="hover:bg-neutral-800/30 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-white font-mono text-sm">
                    {sec.id}
                  </td>
                  <td className="px-4 py-3.5 font-bold text-neutral-200">
                    {sec.name}
                    <span className="text-[10px] text-neutral-500 block font-normal">{sec.tier}</span>
                  </td>
                  <td className="px-4 py-3.5 text-neutral-400">{sec.standName}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        sec.category === 'Hospitality'
                          ? 'bg-purple-950 text-purple-400 border border-purple-800'
                          : sec.category === 'VIP'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : sec.category === 'Premium'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-blue-950 text-blue-400 border border-blue-800'
                      }`}
                    >
                      {sec.category}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-bold font-mono text-orange-400">
                    ₹{sec.basePrice.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3.5 text-neutral-400 font-mono">
                    {(sec.rows || []).join(', ')} ({(sec.rows || []).length})
                  </td>
                  <td className="px-4 py-3.5 text-neutral-400 font-mono">{sec.seatsPerRow}</td>
                  <td className="px-4 py-3.5 font-bold text-white font-mono">{sec.totalSeats}</td>
                  <td className="px-4 py-3.5 text-neutral-400">{sec.gate}</td>
                  <td className="px-4 py-3.5 text-right">
                    <button
                      id={`edit-section-btn-${sec.id}`}
                      onClick={() => handleStartEdit(sec)}
                      className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded text-xs font-semibold inline-flex items-center space-x-1 transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-orange-400" />
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Section Modal */}
      {editingSection && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-md w-full p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
              <div>
                <span className="text-[10px] font-bold text-orange-400 uppercase">
                  {editingSection.standName}
                </span>
                <h4 className="text-lg font-bold text-white">
                  Edit Section {editingSection.id}
                </h4>
              </div>
              <button
                onClick={() => setEditingSection(null)}
                className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Category Tier</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as SeatCategory)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
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
                  value={basePrice}
                  onChange={(e) => setBasePrice(Number(e.target.value))}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Seats Per Row</label>
                <input
                  type="number"
                  value={seatsPerRow}
                  onChange={(e) => setSeatsPerRow(Number(e.target.value))}
                  min={1}
                  max={30}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
                  required
                />
                <span className="text-[11px] text-neutral-500 mt-1 block">
                  Total Seats recalculates automatically ({editingSection.rows.length} rows × {seatsPerRow} = {editingSection.rows.length * seatsPerRow} seats).
                </span>
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Turnstile Access Gate</label>
                <input
                  type="text"
                  value={gate}
                  onChange={(e) => setGate(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setEditingSection(null)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold shadow-lg shadow-orange-950"
                >
                  Save Section
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
