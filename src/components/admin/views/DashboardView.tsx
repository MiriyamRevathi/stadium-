import React from 'react';
import { AdminDashboardMetrics, AdminEvent, AdminTab, RefundRequest } from '../../../types/admin';
import {
  Calendar,
  Armchair,
  CheckCircle2,
  TrendingUp,
  RotateCcw,
  IndianRupee,
  Clock,
  ArrowRight,
  ChevronRight,
  Layers,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface DashboardViewProps {
  metrics: AdminDashboardMetrics;
  events: AdminEvent[];
  refundRequests: RefundRequest[];
  onNavigate: (tab: AdminTab, eventId?: string) => void;
  onSelectEventForPricing?: (eventId: string) => void;
  onSelectEventForInventory?: (eventId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  metrics,
  events,
  refundRequests,
  onNavigate,
  onSelectEventForPricing,
  onSelectEventForInventory
}) => {
  const upcomingEvents = events.filter((e) => e.status === 'Active' || e.status === 'Scheduled');
  const pendingRefunds = refundRequests.filter(
    (r) => r.status === 'Requested' || r.status === 'Under Review' || r.status === 'Processing'
  );

  return (
    <div className="space-y-6">
      {/* ---------------------------------------------------- */}
      {/* 8 TOP METRIC CARDS (Exact match to Section 1) */}
      {/* ---------------------------------------------------- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Events */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Events</span>
            <Calendar className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-2xl font-black text-white">{metrics.totalEvents}</div>
          <span className="text-[11px] text-neutral-500 mt-1 block">Scheduled on season calendar</span>
        </div>

        {/* Upcoming Events */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Upcoming Events</span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-400">{metrics.upcomingEvents}</div>
          <span className="text-[11px] text-neutral-500 mt-1 block">Active ticketing open</span>
        </div>

        {/* Total Stadium Seats */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Stadium Seats</span>
            <Armchair className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-black text-white">{metrics.totalStadiumSeats}</div>
          <span className="text-[11px] text-neutral-500 mt-1 block">Active tiered physical bowl</span>
        </div>

        {/* Available Seats */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Available Seats</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-400">{metrics.availableSeats}</div>
          <span className="text-[11px] text-neutral-500 mt-1 block">Across active fixtures</span>
        </div>

        {/* Booked Seats */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Booked Seats</span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white">{metrics.bookedSeats}</div>
          <span className="text-[11px] text-neutral-500 mt-1 block">Confirmed fan reservations</span>
        </div>

        {/* Today's Bookings */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Today's Bookings</span>
            <Clock className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-black text-white">{metrics.todayBookings}</div>
          <span className="text-[11px] text-emerald-400 mt-1 block">↑ 12% vs yesterday</span>
        </div>

        {/* Total Revenue */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Revenue</span>
            <IndianRupee className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-2xl font-black text-orange-400">
            ₹{metrics.totalRevenue.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-neutral-500 mt-1 block">Verified ticket settlements</span>
        </div>

        {/* Pending Refund Requests */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <div className="flex items-center justify-between text-neutral-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Pending Refunds</span>
            <RotateCcw className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-black text-rose-400">{metrics.pendingRefundRequests}</div>
          <span className="text-[11px] text-neutral-500 mt-1 block">3-day policy review required</span>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* UPCOMING EVENTS TABLE (Exact match to Section 1) */}
      {/* ---------------------------------------------------- */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
        <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-neutral-800 gap-2">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Upcoming Stadium Events</h3>
            <p className="text-xs text-neutral-400">
              Live capacity, occupancy percentage, and rapid operational shortcuts
            </p>
          </div>
          <button
            id="dashboard-view-all-events-btn"
            onClick={() => onNavigate('events')}
            className="text-xs text-orange-400 hover:text-orange-300 font-bold flex items-center space-x-1"
          >
            <span>View All Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800">
              <tr>
                <th className="px-4 py-3">Event Name</th>
                <th className="px-4 py-3">Sport / Type</th>
                <th className="px-4 py-3">Date & Time</th>
                <th className="px-4 py-3">Total Seats</th>
                <th className="px-4 py-3">Booked</th>
                <th className="px-4 py-3">Available</th>
                <th className="px-4 py-3">Occupancy</th>
                <th className="px-4 py-3">Revenue (Est.)</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {upcomingEvents.map((evt) => {
                // Calculated stats for demonstration
                const totalSeats = 792;
                const bookedSeats = evt.id === 'evt-ind-aus' ? 488 : evt.id === 'evt-ind-eng' ? 382 : 227;
                const availableSeats = totalSeats - bookedSeats;
                const occupancy = Math.round((bookedSeats / totalSeats) * 100);
                const revenue = evt.id === 'evt-ind-aus' ? 1420000 : evt.id === 'evt-ind-eng' ? 950000 : 480000;

                return (
                  <tr key={evt.id} className="hover:bg-neutral-800/40 transition-colors">
                    <td className="px-4 py-3.5">
                      <span className="font-bold text-white block text-sm">{evt.name}</span>
                      <span className="text-[11px] text-neutral-500">{evt.tournament || 'Stadium Fixture'}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-semibold text-[10px]">
                        {evt.eventType}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-semibold text-neutral-200 block">{evt.date}</span>
                      <span className="text-neutral-500 text-[11px]">{evt.startTime} IST</span>
                    </td>
                    <td className="px-4 py-3.5 text-neutral-300 font-mono">{totalSeats}</td>
                    <td className="px-4 py-3.5 text-amber-400 font-mono font-bold">{bookedSeats}</td>
                    <td className="px-4 py-3.5 text-emerald-400 font-mono font-bold">{availableSeats}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-neutral-800 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              occupancy > 60 ? 'bg-orange-500' : 'bg-emerald-500'
                            }`}
                            style={{ width: `${occupancy}%` }}
                          ></div>
                        </div>
                        <span className="font-bold font-mono text-[11px] text-neutral-200">{occupancy}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 font-bold font-mono text-orange-400">
                      ₹{revenue.toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                        {evt.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end space-x-1.5">
                        <button
                          id={`dash-view-inventory-${evt.id}`}
                          onClick={() => {
                            onSelectEventForInventory?.(evt.id);
                            onNavigate('seat-inventory');
                          }}
                          className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded text-[11px] font-medium transition-colors"
                        >
                          Inventory
                        </button>
                        <button
                          id={`dash-manage-pricing-${evt.id}`}
                          onClick={() => {
                            onSelectEventForPricing?.(evt.id);
                            onNavigate('pricing');
                          }}
                          className="px-2.5 py-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded text-[11px] font-medium transition-colors"
                        >
                          Pricing
                        </button>
                        <button
                          id={`dash-edit-event-${evt.id}`}
                          onClick={() => onNavigate('events')}
                          className="px-2.5 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded text-[11px] font-bold transition-colors"
                        >
                          Edit
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
      {/* LOWER 2-COLUMN OPERATIONAL SUMMARY WIDGETS */}
      {/* ---------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Refund Alert Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Refund Compliance & Policy Check
                </h4>
              </div>
              <span className="text-[11px] bg-amber-950 text-amber-400 font-bold px-2 py-0.5 rounded border border-amber-800">
                {pendingRefunds.length} Action Needed
              </span>
            </div>

            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              <strong className="text-neutral-200">Policy:</strong> Uppal Stadium maintains{' '}
              <span className="text-orange-400 font-semibold">NO GENERAL RETURN POLICY</span>.
              Tickets are non-refundable unless requested at least 3 days before the scheduled match.
            </p>

            <div className="space-y-2">
              {pendingRefunds.slice(0, 2).map((ref) => (
                <div
                  key={ref.id}
                  className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-white block">{ref.customerName}</span>
                    <span className="text-[11px] text-neutral-400">
                      {ref.eventName} • {ref.id}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold font-mono text-orange-400 block">
                      ₹{ref.refundAmount.toLocaleString('en-IN')}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        ref.eligibility === 'Eligible'
                          ? 'bg-emerald-950 text-emerald-400'
                          : 'bg-rose-950 text-rose-400'
                      }`}
                    >
                      {ref.eligibility}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            id="dash-open-refunds-btn"
            onClick={() => onNavigate('refund-requests')}
            className="w-full mt-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
          >
            <span>Review All Refund Requests</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stadium Architecture Quick Access */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-orange-500" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Stadium Master Structure
                </h4>
              </div>
              <span className="text-[11px] bg-neutral-800 text-neutral-300 font-bold px-2 py-0.5 rounded">
                4 Stands • 14 Sections
              </span>
            </div>

            <p className="text-xs text-neutral-400 mb-3">
              Rajiv Gandhi International Cricket Stadium, Uppal, Hyderabad. Interactive data-driven bowl with 55,000 capacity.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-400 block text-[11px]">North Stand</span>
                <span className="font-bold text-white">Pavilion End (Media / Boxes)</span>
              </div>
              <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-400 block text-[11px]">South Stand</span>
                <span className="font-bold text-white">VVS Laxman Pavilion</span>
              </div>
              <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-400 block text-[11px]">East Stand</span>
                <span className="font-bold text-white">Public Grandstand Tiers</span>
              </div>
              <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-400 block text-[11px]">West Stand</span>
                <span className="font-bold text-white">Afternoon Shade & Club</span>
              </div>
            </div>
          </div>

          <button
            id="dash-open-stadium-map-btn"
            onClick={() => onNavigate('stadium-map')}
            className="w-full mt-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
          >
            <span>Open Interactive Stadium Map</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
