import React, { useState } from 'react';
import { AdminEvent, EventType, EventStatus, AdminTab } from '../../../types/admin';
import {
  Calendar,
  Plus,
  Edit3,
  Trash2,
  Power,
  Tag,
  Grid,
  AlertTriangle,
  X,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface EventsViewProps {
  events: AdminEvent[];
  onCreateEvent: (eventData: Omit<AdminEvent, 'id'>) => void;
  onUpdateEvent: (eventId: string, updates: Partial<AdminEvent>) => void;
  onDeactivateEvent: (eventId: string) => void;
  onDeleteEvent: (eventId: string) => void;
  onNavigate: (tab: AdminTab) => void;
  onSelectEventForPricing: (eventId: string) => void;
  onSelectEventForInventory: (eventId: string) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  events,
  onCreateEvent,
  onUpdateEvent,
  onDeactivateEvent,
  onDeleteEvent,
  onNavigate,
  onSelectEventForPricing,
  onSelectEventForInventory
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<AdminEvent | null>(null);
  const [deletingEvent, setDeletingEvent] = useState<AdminEvent | null>(null);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  // New Event Form State
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState<EventType>('Cricket');
  const [date, setDate] = useState('2026-11-25');
  const [startTime, setStartTime] = useState('19:00');
  const [endTime, setEndTime] = useState('22:45');
  const [description, setDescription] = useState('');
  const [tournament, setTournament] = useState('');
  const [status, setStatus] = useState<EventStatus>('Scheduled');

  // Edit Event Form State
  const [editName, setEditName] = useState('');
  const [editType, setEditType] = useState<EventType>('Cricket');
  const [editDate, setEditDate] = useState('');
  const [editStartTime, setEditStartTime] = useState('');
  const [editEndTime, setEditEndTime] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editStatus, setEditStatus] = useState<EventStatus>('Scheduled');

  const handleOpenAddModal = () => {
    setName('');
    setEventType('Cricket');
    setDate('2026-11-25');
    setStartTime('19:00');
    setEndTime('22:45');
    setDescription('');
    setTournament('');
    setStatus('Scheduled');
    setIsAddModalOpen(true);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateEvent({
      name,
      eventType,
      date,
      startTime,
      endTime,
      description,
      status,
      tournament: tournament || undefined,
      venue: 'Rajiv Gandhi International Cricket Stadium',
      venueLocation: 'Uppal, Hyderabad'
    });
    setIsAddModalOpen(false);
  };

  const handleStartEdit = (evt: AdminEvent) => {
    setEditingEvent(evt);
    setEditName(evt.name);
    setEditType(evt.eventType);
    setEditDate(evt.date);
    setEditStartTime(evt.startTime);
    setEditEndTime(evt.endTime);
    setEditDescription(evt.description);
    setEditStatus(evt.status);
    setWarningMessage(null);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEvent) return;

    onUpdateEvent(editingEvent.id, {
      name: editName,
      eventType: editType,
      date: editDate,
      startTime: editStartTime,
      endTime: editEndTime,
      description: editDescription,
      status: editStatus
    });

    setEditingEvent(null);
  };

  const handleDeleteConfirm = () => {
    if (!deletingEvent) return;
    try {
      onDeleteEvent(deletingEvent.id);
      setDeletingEvent(null);
    } catch (err: any) {
      alert(err.message || 'Error deleting event');
    }
  };

  return (
    <div className="space-y-6 text-white">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Events Management
          </h3>
          <p className="text-xs text-neutral-400">
            Create fixtures, configure event-specific category pricing matrices, and inspect seat inventory.
          </p>
        </div>

        <button
          id="add-new-event-btn"
          onClick={handleOpenAddModal}
          className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center space-x-2 transition-colors shadow-lg shadow-orange-950"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Event</span>
        </button>
      </div>

      {/* Events Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800">
              <tr>
                <th className="px-4 py-3">Event Name</th>
                <th className="px-4 py-3">Event Type</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Timing</th>
                <th className="px-4 py-3">Active Bookings</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {events.map((evt) => {
                const hasBookings = (evt.activeBookingsCount || 0) > 0;

                return (
                  <tr key={evt.id} className="hover:bg-neutral-800/30 transition-colors">
                    <td className="px-4 py-3.5">
                      <span className="font-bold text-white block text-sm">{evt.name}</span>
                      <span className="text-[11px] text-neutral-400">{evt.tournament || 'Stadium Event'}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-800 text-neutral-200">
                        {evt.eventType}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-semibold text-neutral-200">{evt.date}</td>
                    <td className="px-4 py-3.5 text-neutral-400">{evt.startTime} - {evt.endTime}</td>
                    <td className="px-4 py-3.5 font-bold font-mono text-orange-400">
                      {evt.activeBookingsCount || 0} Bookings
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          evt.status === 'Active'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : evt.status === 'Scheduled'
                            ? 'bg-blue-950 text-blue-400 border border-blue-800'
                            : evt.status === 'Completed'
                            ? 'bg-neutral-800 text-neutral-400'
                            : 'bg-rose-950 text-rose-400 border border-rose-800'
                        }`}
                      >
                        {evt.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end space-x-1.5">
                        {/* Pricing Shortcut */}
                        <button
                          id={`event-pricing-btn-${evt.id}`}
                          onClick={() => {
                            onSelectEventForPricing(evt.id);
                            onNavigate('pricing');
                          }}
                          className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-xs inline-flex items-center space-x-1"
                          title="Configure Event Pricing"
                        >
                          <Tag className="w-3.5 h-3.5 text-orange-400" />
                          <span>Pricing</span>
                        </button>

                        {/* Inventory Shortcut */}
                        <button
                          id={`event-inventory-btn-${evt.id}`}
                          onClick={() => {
                            onSelectEventForInventory(evt.id);
                            onNavigate('seat-inventory');
                          }}
                          className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-xs inline-flex items-center space-x-1"
                          title="View Seat Inventory"
                        >
                          <Grid className="w-3.5 h-3.5 text-orange-400" />
                          <span>Inventory</span>
                        </button>

                        {/* Edit Button */}
                        <button
                          id={`event-edit-btn-${evt.id}`}
                          onClick={() => handleStartEdit(evt)}
                          className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-xs"
                          title="Edit Event Details"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-neutral-300" />
                        </button>

                        {/* Deactivate Button */}
                        <button
                          id={`event-deactivate-btn-${evt.id}`}
                          onClick={() => onDeactivateEvent(evt.id)}
                          className="px-2 py-1 bg-neutral-800 hover:bg-amber-950 hover:text-amber-400 text-neutral-400 rounded text-xs"
                          title="Deactivate Event"
                        >
                          <Power className="w-3.5 h-3.5" />
                        </button>

                        {/* Delete Button */}
                        <button
                          id={`event-delete-btn-${evt.id}`}
                          onClick={() => setDeletingEvent(evt)}
                          className="px-2 py-1 bg-neutral-800 hover:bg-rose-950 hover:text-rose-400 text-neutral-400 rounded text-xs"
                          title="Delete Event"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* ADD EVENT MODAL */}
      {/* ---------------------------------------------------- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-lg w-full p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
              <h4 className="text-lg font-bold text-white">Create New Stadium Event</h4>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Event Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. India vs South Africa"
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">Event Type</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value as EventType)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                  >
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Concert">Concert</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as EventStatus)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Active">Active (Ticketing Open)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-2.5 py-2 text-white text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">Start Time</label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-2.5 py-2 text-white text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">End Time</label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-2.5 py-2 text-white text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Tournament / Subtitle</label>
                <input
                  type="text"
                  value={tournament}
                  onChange={(e) => setTournament(e.target.value)}
                  placeholder="e.g. International Bilateral T20 Trophy"
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                  placeholder="Event highlights and seating notes..."
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                />
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-400 text-[11px]">
                💡 Initial event-specific pricing and seat inventory will automatically be provisioned upon creation. You can fine-tune custom tier prices immediately.
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold shadow-lg shadow-orange-950"
                >
                  Create Event & Configure
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* EDIT EVENT MODAL (With Active Booking Warning as required!) */}
      {/* ---------------------------------------------------- */}
      {editingEvent && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-lg w-full p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
              <div>
                <h4 className="text-lg font-bold text-white">Edit Event Details</h4>
                <span className="text-[11px] text-neutral-400">{editingEvent.id}</span>
              </div>
              <button
                onClick={() => setEditingEvent(null)}
                className="text-neutral-400 hover:text-white p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Warning if event already has bookings */}
            {(editingEvent.activeBookingsCount || 0) > 0 && (
              <div className="mb-4 p-3.5 bg-amber-950/40 border border-amber-800/80 rounded-lg text-amber-200 text-xs flex items-start space-x-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold text-amber-300">
                    Warning: Event Has {editingEvent.activeBookingsCount} Active Bookings!
                  </strong>
                  Modifying event date or time will impact the 3-day refund eligibility deadline for ticket holders and affect existing seat reservations.
                </div>
              </div>
            )}

            <form onSubmit={handleEditSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Event Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">Event Type</label>
                  <select
                    value={editType}
                    onChange={(e) => setEditType(e.target.value as EventType)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                  >
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Concert">Concert</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">Status</label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as EventStatus)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Active">Active (Ticketing Open)</option>
                    <option value="Completed">Completed</option>
                    <option value="Deactivated">Deactivated</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">Date</label>
                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-2.5 py-2 text-white text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">Start Time</label>
                  <input
                    type="time"
                    value={editStartTime}
                    onChange={(e) => setEditStartTime(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-2.5 py-2 text-white text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-semibold mb-1">End Time</label>
                  <input
                    type="time"
                    value={editEndTime}
                    onChange={(e) => setEditEndTime(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-2.5 py-2 text-white text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Description</label>
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  rows={2}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold shadow-lg shadow-orange-950"
                >
                  Save Event Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* DELETE EVENT CONFIRMATION MODAL */}
      {/* ---------------------------------------------------- */}
      {deletingEvent && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-md w-full p-6 text-white shadow-2xl">
            <h4 className="text-lg font-bold text-white mb-2">Delete Event?</h4>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              Are you sure you want to delete <strong className="text-white">{deletingEvent.name}</strong>?
            </p>

            {(deletingEvent.activeBookingsCount || 0) > 0 ? (
              <div className="p-3.5 bg-rose-950/40 border border-rose-800/80 rounded-lg text-rose-200 text-xs mb-4">
                <strong>Cannot Delete:</strong> This event currently has {deletingEvent.activeBookingsCount} active confirmed bookings. To prevent customer ticketing disruption, please <em>Deactivate</em> the event instead of deleting.
              </div>
            ) : (
              <p className="text-xs text-neutral-500 mb-4">
                This action will delete the event, its pricing matrix, and event-specific seat allocation.
              </p>
            )}

            <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => setDeletingEvent(null)}
                className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg font-bold text-xs"
              >
                Cancel
              </button>
              {(deletingEvent.activeBookingsCount || 0) === 0 && (
                <button
                  type="button"
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-xs"
                >
                  Confirm Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
