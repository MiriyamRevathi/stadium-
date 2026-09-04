import React, { useState } from 'react';
import { AdminCustomer, AdminBooking } from '../../../types/admin';
import { Search, Users, Eye, X, Phone, Mail, MapPin, IndianRupee, Ticket } from 'lucide-react';

interface CustomersViewProps {
  customers: AdminCustomer[];
  bookings: AdminBooking[];
}

export const CustomersView: React.FC<CustomersViewProps> = ({ customers, bookings }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inspectCustomer, setInspectCustomer] = useState<AdminCustomer | null>(null);

  const filteredCustomers = customers.filter((c) => {
    if (
      searchTerm &&
      !c.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !c.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !c.phone.includes(searchTerm) &&
      !c.id.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const customerBookings = inspectCustomer
    ? bookings.filter((b) => b.customerId === inspectCustomer.id)
    : [];

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Customers Directory
          </h3>
          <p className="text-xs text-neutral-400">
            Fan accounts, verified contact records, booking loyalty, and refund activity.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center justify-between gap-3 text-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search fans by name, email, phone or customer ID..."
            className="w-full bg-neutral-950 border border-neutral-700 rounded-lg pl-9 pr-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800">
              <tr>
                <th className="px-4 py-3">Customer ID</th>
                <th className="px-4 py-3">Full Name</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3">Total Bookings</th>
                <th className="px-4 py-3">Lifetime Spend</th>
                <th className="px-4 py-3">Refunds Logged</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {filteredCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-neutral-800/30 transition-colors">
                  <td className="px-4 py-3.5 font-bold font-mono text-white">{c.id}</td>
                  <td className="px-4 py-3.5 font-bold text-white text-sm">{c.name}</td>
                  <td className="px-4 py-3.5">
                    <span className="text-neutral-300 block">{c.email}</span>
                    <span className="text-neutral-500 text-[11px]">{c.phone}</span>
                  </td>
                  <td className="px-4 py-3.5 text-neutral-300">{c.city}</td>
                  <td className="px-4 py-3.5 font-mono font-bold text-neutral-200">
                    {c.totalBookings} Bookings
                  </td>
                  <td className="px-4 py-3.5 font-mono font-bold text-orange-400">
                    ₹{c.totalSpent.toLocaleString('en-IN')}
                  </td>
                  <td className="px-4 py-3.5 font-mono">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        c.refundsRequested > 0
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      {c.refundsRequested} Requested
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <button
                      onClick={() => setInspectCustomer(c)}
                      className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded text-xs inline-flex items-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Profile</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inspect Customer Modal */}
      {inspectCustomer && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-lg w-full p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div>
                <span className="text-[10px] font-bold text-orange-400 uppercase">
                  Fan Dossier
                </span>
                <h4 className="text-lg font-bold text-white">{inspectCustomer.name}</h4>
              </div>
              <button
                onClick={() => setInspectCustomer(null)}
                className="text-neutral-400 hover:text-white p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                <span className="text-neutral-500 block">Email Address</span>
                <span className="font-semibold text-neutral-200">{inspectCustomer.email}</span>
              </div>
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                <span className="text-neutral-500 block">Phone</span>
                <span className="font-semibold text-neutral-200">{inspectCustomer.phone}</span>
              </div>
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                <span className="text-neutral-500 block">Location</span>
                <span className="font-semibold text-neutral-200">{inspectCustomer.city}, India</span>
              </div>
              <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                <span className="text-neutral-500 block">Total Lifetime Value</span>
                <span className="font-bold text-orange-400 font-mono text-sm">
                  ₹{inspectCustomer.totalSpent.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Booking History */}
            <div>
              <span className="text-xs font-bold text-white block mb-2">
                Booking History ({customerBookings.length})
              </span>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {customerBookings.length > 0 ? (
                  customerBookings.map((bk) => (
                    <div
                      key={bk.id}
                      className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-xs flex items-center justify-between"
                    >
                      <div>
                        <span className="font-bold text-white block">{bk.eventName}</span>
                        <span className="text-[11px] text-neutral-400">
                          {bk.id} • {bk.standName || bk.stand || bk.seatDetails?.[0]?.standName || 'Stand'} • Seats: {(bk.seatIds || bk.seats || []).join(', ') || 'N/A'}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold font-mono text-orange-400 block">
                          ₹{bk.totalAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-neutral-400">{bk.status}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-neutral-500 text-xs py-2">No past bookings found.</p>
                )}
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-neutral-800">
              <button
                onClick={() => setInspectCustomer(null)}
                className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
