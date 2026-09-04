import React, { useState } from 'react';
import { AdminBooking, AdminEvent, BookingStatus } from '../../../types/admin';
import { Search, Ticket, Eye, X, CheckCircle2, AlertTriangle, Send } from 'lucide-react';

interface BookingsViewProps {
  bookings: AdminBooking[];
  events: AdminEvent[];
  onCancelBooking: (bookingId: string) => void;
  onResendConfirmation: (bookingId: string) => void;
}

export const BookingsView: React.FC<BookingsViewProps> = ({
  bookings,
  events,
  onCancelBooking,
  onResendConfirmation
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [eventFilter, setEventFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [inspectBooking, setInspectBooking] = useState<AdminBooking | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const filteredBookings = bookings.filter((b) => {
    if (
      searchTerm &&
      !b.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !b.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    if (eventFilter !== 'all' && b.eventId !== eventFilter) return false;
    if (statusFilter !== 'all' && b.status !== statusFilter) return false;
    return true;
  });

  const handleCancelClick = (b: AdminBooking) => {
    if (window.confirm(`Cancel booking ${b.id} for ${b.customerName}? Allocated seats will be released.`)) {
      onCancelBooking(b.id);
      setActionSuccess(`Booking ${b.id} has been cancelled.`);
      setTimeout(() => setActionSuccess(null), 3000);
      if (inspectBooking?.id === b.id) {
        setInspectBooking({ ...inspectBooking, status: 'Cancelled' });
      }
    }
  };

  const handleResend = (b: AdminBooking) => {
    onResendConfirmation(b.id);
    setActionSuccess(`Confirmation dispatched to ${b.customerEmail}`);
    setTimeout(() => setActionSuccess(null), 3000);
  };

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Bookings Management
          </h3>
          <p className="text-xs text-neutral-400">
            Audit fan reservations, seat allocations, payment settlement status, and e-tickets.
          </p>
        </div>

        {actionSuccess && (
          <div className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs px-3 py-1.5 rounded-lg flex items-center space-x-1.5 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{actionSuccess}</span>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Search */}
        <div className="relative flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by ID, customer name, email..."
            className="w-full bg-neutral-950 border border-neutral-700 rounded-lg pl-9 pr-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={eventFilter}
            onChange={(e) => setEventFilter(e.target.value)}
            className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-2.5 py-2 text-xs"
          >
            <option value="all">All Events</option>
            {events.map((evt) => (
              <option key={evt.id} value={evt.id}>
                {evt.name}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-2.5 py-2 text-xs"
          >
            <option value="all">All Statuses</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Refunded">Refunded</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800">
              <tr>
                <th className="px-4 py-3">Booking Ref</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Event</th>
                <th className="px-4 py-3">Stand & Tier</th>
                <th className="px-4 py-3">Seats</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Booked At</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-neutral-800/30 transition-colors">
                  <td className="px-4 py-3 font-bold font-mono text-white text-xs">
                    {b.id}
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-bold text-white block">{b.customerName}</span>
                    <span className="text-[11px] text-neutral-400">{b.customerEmail}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-neutral-200 block">{b.eventName}</span>
                    <span className="text-[11px] text-neutral-500">{b.eventDate}</span>
                  </td>
                  <td className="px-4 py-3 text-neutral-300">
                    <span className="block">{b.standName || b.stand || b.seatDetails?.[0]?.standName || 'Stand'}</span>
                    <span className="text-[10px] text-orange-400 font-bold">{b.category || b.seatDetails?.[0]?.category || 'General'}</span>
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-neutral-200">
                    {(b.seatIds || b.seats || []).join(', ')} ({b.seatCount ?? (b.seatIds || b.seats || []).length})
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-orange-400">
                    ₹{b.totalAmount.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3 text-neutral-400 text-[11px]">
                    {new Date(b.bookingDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        b.status === 'Confirmed'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : b.status === 'Refunded'
                          ? 'bg-blue-950 text-blue-400 border border-blue-800'
                          : b.status === 'Cancelled'
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : 'bg-amber-950 text-amber-400 border border-amber-800'
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end space-x-1.5">
                      <button
                        onClick={() => setInspectBooking(b)}
                        className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-xs inline-flex items-center space-x-1"
                        title="View Full Booking Details"
                      >
                        <Eye className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Inspect</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Inspection Modal */}
      {inspectBooking && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-lg w-full p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">
                  Booking Receipt
                </span>
                <h4 className="text-lg font-bold text-white font-mono">{inspectBooking.id}</h4>
              </div>
              <button
                onClick={() => setInspectBooking(null)}
                className="text-neutral-400 hover:text-white p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                <span className="text-neutral-500 block">Customer Name</span>
                <span className="font-bold text-white text-sm">{inspectBooking.customerName}</span>
                <span className="text-neutral-400 block text-[11px]">{inspectBooking.customerPhone}</span>
                <span className="text-neutral-400 block text-[11px]">{inspectBooking.customerEmail}</span>
              </div>
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                <span className="text-neutral-500 block">Settlement Details</span>
                <span className="font-bold text-orange-400 font-mono text-base">
                  ₹{inspectBooking.totalAmount.toLocaleString('en-IN')}
                </span>
                <span className="text-neutral-400 block text-[11px]">
                  Method: {inspectBooking.paymentMethod}
                </span>
                <span className="text-neutral-400 block text-[11px]">
                  Status: <strong className="text-emerald-400">{inspectBooking.status}</strong>
                </span>
              </div>
            </div>

            <div className="bg-neutral-950 p-3.5 rounded-lg border border-neutral-800 text-xs space-y-2">
              <span className="text-neutral-400 block font-semibold">Event & Allocation:</span>
              <div className="flex justify-between">
                <span className="text-neutral-500">Event:</span>
                <span className="font-bold text-white">{inspectBooking.eventName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Event Date:</span>
                <span className="font-bold text-neutral-200">{inspectBooking.eventDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Stand / Tier:</span>
                <span className="font-bold text-neutral-200">
                  {inspectBooking.standName || inspectBooking.stand || inspectBooking.seatDetails?.[0]?.standName || 'Stand'} (
                  {inspectBooking.category || inspectBooking.seatDetails?.[0]?.category || 'General'})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Allocated Seats:</span>
                <span className="font-bold font-mono text-orange-400">
                  {(inspectBooking.seatIds || inspectBooking.seats || []).join(', ') || 'None'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => handleResend(inspectBooking)}
                className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg text-xs font-semibold flex items-center space-x-1.5"
              >
                <Send className="w-3.5 h-3.5 text-neutral-400" />
                <span>Resend E-Ticket</span>
              </button>

              {inspectBooking.status === 'Confirmed' && (
                <button
                  type="button"
                  onClick={() => handleCancelClick(inspectBooking)}
                  className="px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold"
                >
                  Cancel Booking & Release Seats
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
