import React, { useState } from 'react';
import { Stand, Section } from '../../../types/admin';
import { Edit3, Check, X, Layers, Users, DoorOpen } from 'lucide-react';

interface StandsViewProps {
  stands: Stand[];
  sections: Section[];
  onUpdateStand: (standId: string, updates: Partial<Stand>) => void;
}

export const StandsView: React.FC<StandsViewProps> = ({ stands, sections, onUpdateStand }) => {
  const [editingStand, setEditingStand] = useState<Stand | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState<number>(0);
  const [gates, setGates] = useState('');

  const handleStartEdit = (stand: Stand) => {
    setEditingStand(stand);
    setName(stand.name);
    setDescription(stand.description);
    setCapacity(stand.capacity);
    setGates((stand.gates || []).join(', '));
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStand) return;

    onUpdateStand(editingStand.id, {
      name,
      description,
      capacity: Number(capacity),
      gates: gates.split(',').map((g) => g.trim()).filter(Boolean)
    });

    setEditingStand(null);
  };

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Stands Management
          </h3>
          <p className="text-xs text-neutral-400">
            Configure Rajiv Gandhi International Cricket Stadium stand structures, design capacities, and turnstile gates.
          </p>
        </div>
      </div>

      {/* Stands Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800">
              <tr>
                <th className="px-4 py-3">Code / Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Capacity</th>
                <th className="px-4 py-3">Sections</th>
                <th className="px-4 py-3">Turnstile Gates</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {stands.map((stand) => {
                const standSections = sections.filter((s) => s.standId === stand.id);

                return (
                  <tr key={stand.id} className="hover:bg-neutral-800/30 transition-colors">
                    <td className="px-4 py-3.5">
                      <span className="font-bold text-white block text-sm">{stand.name}</span>
                      <span className="text-[10px] font-bold text-orange-400 uppercase">
                        {stand.code} STAND
                      </span>
                    </td>
                    <td className="px-4 py-3.5 max-w-xs text-neutral-400 text-xs">
                      {stand.description}
                    </td>
                    <td className="px-4 py-3.5 font-mono font-bold text-white">
                      {stand.capacity.toLocaleString()} Seats
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex flex-wrap gap-1">
                        {standSections.map((sec) => (
                          <span
                            key={sec.id}
                            className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-200 text-[10px] font-bold"
                          >
                            {sec.id}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-neutral-300">
                      {(stand.gates || []).join(', ') || 'None'}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button
                        id={`edit-stand-btn-${stand.id}`}
                        onClick={() => handleStartEdit(stand)}
                        className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded text-xs font-semibold inline-flex items-center space-x-1 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-orange-400" />
                        <span>Edit Stand</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Stand Modal */}
      {editingStand && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-lg w-full p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
              <h4 className="text-lg font-bold text-white">
                Edit {editingStand.name}
              </h4>
              <button
                onClick={() => setEditingStand(null)}
                className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Stand Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Design Capacity</label>
                <input
                  type="number"
                  value={capacity}
                  onChange={(e) => setCapacity(Number(e.target.value))}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Turnstile Gates (comma separated)</label>
                <input
                  type="text"
                  value={gates}
                  onChange={(e) => setGates(e.target.value)}
                  placeholder="e.g. Gate 1, Gate 2, Gate 3"
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setEditingStand(null)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold shadow-lg shadow-orange-950"
                >
                  Save Stand
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
