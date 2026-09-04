import React, { useState } from 'react';
import {
  ShieldCheck,
  Calendar,
  Users,
  CreditCard,
  Layers,
  Settings,
  Plus,
  CheckCircle,
  XCircle,
  Eye,
  Sliders,
  AlertCircle
} from 'lucide-react';
import { StadiumEvent, Booking, StadiumSection, SeatStatus } from '../types';
import { STADIUM_SECTIONS } from '../data/sections';
import { RAJIV_GANDHI_STADIUM } from '../data/stadium';
import { getSectionAvailability } from '../data/seats';

interface AdminDashboardProps {
  events: StadiumEvent[];
  bookings: Booking[];
  onAddEvent?: (newEvent: StadiumEvent) => void;
  onUpdateEventStatus?: (eventId: string, isHot: boolean) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  events,
  bookings,
  onAddEvent,
  onUpdateEventStatus
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'stadium' | 'seats' | 'bookings'>('overview');
  const [selectedSectionForSeats, setSelectedSectionForSeats] = useState<string>(STADIUM_SECTIONS[0].id);
  const [seatFilter, setSeatFilter] = useState<'all' | 'available' | 'sold' | 'blocked'>('all');

  // KPI Calculations
  const totalEvents = events.length;
  const totalBookings = bookings.length;
  const totalRevenue = bookings.reduce((sum, b) => sum + b.total, 0);

  // Compute total available seats across all sections for first event
  const firstEventId = events[0]?.id || 'evt-ind-aus-2026';
  let totalAvailableSeats = 0;
  let totalStadiumSeats = 0;
  STADIUM_SECTIONS.forEach((sec) => {
    const stats = getSectionAvailability(firstEventId, sec.id);
    totalAvailableSeats += stats.available;
    totalStadiumSeats += stats.total;
  });

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Admin Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 bg-black text-white text-[10px] font-black uppercase rounded">
              Frontend Administration
            </span>
            <span className="text-xs text-neutral-500 font-bold">• Realtime Seed State</span>
          </div>
          <h1 className="text-3xl font-black text-black uppercase tracking-tight mt-1">
            Stadium Management Portal
          </h1>
          <p className="text-xs text-neutral-500">
            Rajiv Gandhi International Cricket Stadium operations, ticket allocations, and real-time sales overview.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1 rounded-lg border border-neutral-200 text-xs font-bold">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'events', label: 'Events' },
            { id: 'seats', label: 'Seat Allocations' },
            { id: 'bookings', label: 'Bookings' },
            { id: 'stadium', label: 'Venue Info' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-black shadow-xs font-extrabold'
                  : 'text-neutral-700 hover:text-black hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards (Always visible at top of overview or all tabs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Events */}
        <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs font-bold uppercase">
            <span>Total Events</span>
            <Calendar className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-3xl font-black text-black mt-2">{totalEvents}</div>
          <p className="text-[11px] text-neutral-500 mt-1">Active scheduled matches</p>
        </div>

        {/* Total Bookings */}
        <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs font-bold uppercase">
            <span>Total Bookings</span>
            <Users className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-3xl font-black text-black mt-2">{totalBookings}</div>
          <p className="text-[11px] text-emerald-600 font-bold mt-1">100% Confirmed Transactions</p>
        </div>

        {/* Available Seats */}
        <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs font-bold uppercase">
            <span>Available Seats</span>
            <Layers className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-3xl font-black text-black mt-2">
            {totalAvailableSeats.toLocaleString()}
          </div>
          <p className="text-[11px] text-neutral-500 mt-1">
            Out of {totalStadiumSeats.toLocaleString()} sampled seats
          </p>
        </div>

        {/* Total Revenue */}
        <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs font-bold uppercase">
            <span>Simulated Revenue</span>
            <CreditCard className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-3xl font-black text-orange-600 mt-2">
            ₹{totalRevenue.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] text-neutral-500 mt-1">Includes ticket price + convenience fees</p>
        </div>
      </div>

      {/* Tab 1: Overview / Dashboard */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Bookings Feed */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-base text-black uppercase">Recent Confirmed Bookings</h3>
              <button
                onClick={() => setActiveTab('bookings')}
                className="text-xs text-orange-600 hover:text-orange-700 font-bold"
              >
                View All →
              </button>
            </div>

            <div className="divide-y divide-neutral-100 text-xs">
              {bookings.slice(0, 5).map((b) => (
                <div key={b.id} className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-black block">{b.eventName}</span>
                    <span className="text-neutral-500 text-[11px]">
                      {b.customer.fullName} • {b.seats.length} seats (Sec {b.seats[0]?.sectionName})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-black block">₹{b.total.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-emerald-600 font-bold uppercase">{b.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Occupancy Highlights */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-base text-black uppercase">Section Capacity Status</h3>
              <button
                onClick={() => setActiveTab('seats')}
                className="text-xs text-orange-600 hover:text-orange-700 font-bold"
              >
                Inspect All Sections →
              </button>
            </div>

            <div className="space-y-3 text-xs">
              {STADIUM_SECTIONS.slice(0, 6).map((sec) => {
                const stats = getSectionAvailability(firstEventId, sec.id);
                const occupancyRate = Math.round(((stats.total - stats.available) / stats.total) * 100);

                return (
                  <div key={sec.id} className="space-y-1">
                    <div className="flex justify-between font-bold">
                      <span>
                        Section {sec.name} ({sec.stand})
                      </span>
                      <span className="text-neutral-600">
                        {stats.available} avail / {stats.total} total ({occupancyRate}% booked)
                      </span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-orange-500 h-full rounded-full"
                        style={{ width: `${occupancyRate}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Events Management */}
      {activeTab === 'events' && (
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-xs">
          <div className="p-4 sm:p-5 bg-neutral-900 text-white flex items-center justify-between">
            <div>
              <h3 className="text-base font-black uppercase tracking-wider text-white">
                Scheduled Stadium Events
              </h3>
              <p className="text-xs text-neutral-400">Manage fixture dates, matches, and ticket sales status</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 text-neutral-500 uppercase font-bold border-b border-neutral-200">
                <tr>
                  <th className="p-3.5">Event Name</th>
                  <th className="p-3.5">Date & Time</th>
                  <th className="p-3.5">Sport / Tournament</th>
                  <th className="p-3.5">Starting Price</th>
                  <th className="p-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {events.map((evt) => (
                  <tr key={evt.id} className="hover:bg-neutral-50">
                    <td className="p-3.5 font-black text-neutral-900">{evt.name}</td>
                    <td className="p-3.5 text-neutral-600">
                      {evt.date} at {evt.time}
                    </td>
                    <td className="p-3.5 text-neutral-600">{evt.tournament}</td>
                    <td className="p-3.5 font-bold text-black">
                      ₹{evt.startingPrice.toLocaleString('en-IN')}
                    </td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[11px]">
                        Tickets Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Seats & Sections Management */}
      {activeTab === 'seats' && (
        <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <h3 className="text-lg font-black text-black uppercase">
                Section & Seat Allocation Inspector
              </h3>
              <p className="text-xs text-neutral-500">
                Inspect capacity, available seats, pricing, and gates across all Uppal Stadium tiers.
              </p>
            </div>

            {/* Section selector */}
            <div className="flex items-center space-x-2">
              <label className="text-xs font-bold text-neutral-700 uppercase">Select Section:</label>
              <select
                value={selectedSectionForSeats}
                onChange={(e) => setSelectedSectionForSeats(e.target.value)}
                className="text-xs p-2 bg-neutral-50 border border-neutral-300 rounded font-bold focus:outline-none focus:border-orange-500"
              >
                {STADIUM_SECTIONS.map((sec) => (
                  <option key={sec.id} value={sec.id}>
                    {sec.name} - {sec.displayName} (₹{sec.price})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Section details summary */}
          {(() => {
            const currentSec = STADIUM_SECTIONS.find((s) => s.id === selectedSectionForSeats);
            if (!currentSec) return null;
            const stats = getSectionAvailability(firstEventId, currentSec.id);

            return (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">Stand</span>
                  <span className="text-base font-bold text-black">{currentSec.stand}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">Category</span>
                  <span className="text-base font-bold text-orange-600">{currentSec.category}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">Available Seats</span>
                  <span className="text-base font-bold text-emerald-600">{stats.available} / {stats.total}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-500">Seat Price</span>
                  <span className="text-base font-bold text-black">₹{currentSec.price.toLocaleString('en-IN')}</span>
                </div>
              </div>
            );
          })()}

          {/* Stand Table overview */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 text-neutral-500 uppercase font-bold border-b border-neutral-200">
                <tr>
                  <th className="p-3">Section</th>
                  <th className="p-3">Stand</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Rows</th>
                  <th className="p-3">Capacity</th>
                  <th className="p-3">Base Price</th>
                  <th className="p-3">Gate Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {STADIUM_SECTIONS.map((sec) => (
                  <tr key={sec.id} className="hover:bg-neutral-50">
                    <td className="p-3 font-black text-neutral-900">{sec.name}</td>
                    <td className="p-3 text-neutral-600">{sec.stand}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-neutral-100 rounded text-[11px] font-bold">
                        {sec.category}
                      </span>
                    </td>
                    <td className="p-3 text-neutral-600 font-mono">
                      {sec.rows[0]} - {sec.rows[sec.rows.length - 1]}
                    </td>
                    <td className="p-3 font-bold text-neutral-900">{sec.totalSeats} seats</td>
                    <td className="p-3 font-bold text-black">₹{sec.price.toLocaleString('en-IN')}</td>
                    <td className="p-3 text-neutral-500">{sec.gate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Bookings Management */}
      {activeTab === 'bookings' && (
        <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-xs">
          <div className="p-4 sm:p-5 bg-neutral-900 text-white flex items-center justify-between">
            <div>
              <h3 className="text-base font-black uppercase tracking-wider text-white">
                Customer Bookings Directory
              </h3>
              <p className="text-xs text-neutral-400">All seeded and user-generated transactions</p>
            </div>
            <span className="text-xs text-orange-400 font-bold">{bookings.length} Total Records</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 text-neutral-500 uppercase font-bold border-b border-neutral-200">
                <tr>
                  <th className="p-3.5">Booking ID</th>
                  <th className="p-3.5">Customer</th>
                  <th className="p-3.5">Match Event</th>
                  <th className="p-3.5">Seats Allocated</th>
                  <th className="p-3.5">Amount Paid</th>
                  <th className="p-3.5">Payment</th>
                  <th className="p-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {bookings.map((b) => (
                  <tr key={b.id} className="hover:bg-neutral-50">
                    <td className="p-3.5 font-mono font-bold text-neutral-900">{b.id}</td>
                    <td className="p-3.5">
                      <div className="font-bold text-black">{b.customer.fullName}</div>
                      <div className="text-[11px] text-neutral-500">{b.customer.email}</div>
                    </td>
                    <td className="p-3.5 font-medium text-neutral-800">{b.eventName}</td>
                    <td className="p-3.5">
                      <div className="font-bold text-orange-600">
                        Sec {b.seats[0]?.sectionName} • Row {b.seats[0]?.row}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Seats: {(b.seats || []).map((s) => s.number).join(', ') || 'N/A'}
                      </div>
                    </td>
                    <td className="p-3.5 font-black text-black">
                      ₹{b.total.toLocaleString('en-IN')}
                    </td>
                    <td className="p-3.5 text-neutral-600">{b.paymentMethod}</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[11px]">
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 5: Stadium Venue Info */}
      {activeTab === 'stadium' && (
        <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-xs space-y-4">
          <h3 className="text-xl font-black text-black uppercase">
            {RAJIV_GANDHI_STADIUM.name}
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            {RAJIV_GANDHI_STADIUM.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200 text-xs">
            <div>
              <span className="font-bold text-neutral-800">Operator: </span>
              <span>{RAJIV_GANDHI_STADIUM.operator}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-800">Location: </span>
              <span>{RAJIV_GANDHI_STADIUM.location}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-800">Seating Capacity: </span>
              <span>{RAJIV_GANDHI_STADIUM.capacity.toLocaleString()}</span>
            </div>
            <div>
              <span className="font-bold text-neutral-800">Lighting: </span>
              <span>{RAJIV_GANDHI_STADIUM.floodlights}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
