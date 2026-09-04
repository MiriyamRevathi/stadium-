import React, { useState } from 'react';
import {
  AdminDashboardMetrics,
  AdminEvent,
  RefundRequest,
  AdminBooking
} from '../../../types/admin';
import {
  BarChart3,
  TrendingUp,
  Download,
  IndianRupee,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';

interface ReportsViewProps {
  metrics: AdminDashboardMetrics;
  events: AdminEvent[];
  refundRequests: RefundRequest[];
  bookings: AdminBooking[];
}

export const ReportsView: React.FC<ReportsViewProps> = ({
  metrics,
  events,
  refundRequests,
  bookings
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Stand breakdown
  const standRevenue = {
    'North Stand (Pavilion)': 1150000,
    'South Stand (VVS Laxman)': 980000,
    'East Stand (Grandstand)': 460000,
    'West Stand (Grandstand)': 260000
  };

  // Category breakdown
  const categoryRevenue = {
    VIP: 1250000,
    Hospitality: 900000,
    Premium: 510000,
    General: 190000
  };

  // Refund analytics
  const totalRefunds = refundRequests.length;
  const eligibleCount = refundRequests.filter((r) => r.eligibility === 'Eligible').length;
  const ineligibleCount = totalRefunds - eligibleCount;
  const approvedCount = refundRequests.filter((r) => r.status === 'Approved').length;
  const rejectedCount = refundRequests.filter((r) => r.status === 'Rejected').length;

  const handleExport = (type: string) => {
    setDownloadSuccess(`Exported ${type} dataset as CSV.`);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Reports & Analytics
          </h3>
          <p className="text-xs text-neutral-400">
            Audit stadium revenue distribution, occupancy yield, and 3-day refund compliance analytics.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          {downloadSuccess && (
            <span className="text-emerald-400 text-xs font-bold animate-fadeIn">
              {downloadSuccess}
            </span>
          )}
          <button
            onClick={() => handleExport('Revenue and Bookings')}
            className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-colors border border-neutral-700"
          >
            <Download className="w-3.5 h-3.5 text-orange-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Top 3 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
          <span className="text-xs text-neutral-400 block uppercase font-semibold">
            Gross Ticket Revenue
          </span>
          <div className="text-2xl font-black text-orange-400 mt-1 font-mono">
            ₹{metrics.totalRevenue.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-emerald-400 block mt-1">
            Across {bookings.length} confirmed ticketing orders
          </span>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
          <span className="text-xs text-neutral-400 block uppercase font-semibold">
            Average Stadium Occupancy
          </span>
          <div className="text-2xl font-black text-white mt-1 font-mono">
            68.4%
          </div>
          <span className="text-[11px] text-neutral-500 block mt-1">
            Peak match day: 92.1% (IND vs AUS)
          </span>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
          <span className="text-xs text-neutral-400 block uppercase font-semibold">
            Refund Compliance Ratio
          </span>
          <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">
            {Math.round((eligibleCount / totalRefunds) * 100)}% Eligible
          </div>
          <span className="text-[11px] text-neutral-500 block mt-1">
            {ineligibleCount} rejected due to &lt; 3-day policy cutoff
          </span>
        </div>
      </div>

      {/* Stand Revenue Distribution & Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by Stand */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
          <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
            Revenue by Stadium Stand
          </h4>
          <div className="space-y-3 text-xs">
            {Object.entries(standRevenue).map(([stand, rev]) => {
              const pct = Math.round((rev / metrics.totalRevenue) * 100);
              return (
                <div key={stand} className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span className="text-neutral-300">{stand}</span>
                    <span className="text-orange-400 font-mono">
                      ₹{rev.toLocaleString('en-IN')} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-neutral-800">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Revenue by Category */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
          <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4">
            Revenue by Seat Category Tier
          </h4>
          <div className="space-y-3 text-xs">
            {Object.entries(categoryRevenue).map(([cat, rev]) => {
              const pct = Math.round((rev / metrics.totalRevenue) * 100);
              return (
                <div key={cat} className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span className="text-neutral-300">{cat} Tier</span>
                    <span className="text-orange-400 font-mono">
                      ₹{rev.toLocaleString('en-IN')} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-neutral-800">
                    <div
                      className={`h-full rounded-full ${
                        cat === 'VIP'
                          ? 'bg-amber-500'
                          : cat === 'Hospitality'
                          ? 'bg-purple-500'
                          : cat === 'Premium'
                          ? 'bg-emerald-500'
                          : 'bg-blue-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3-Day Refund Compliance Deep-Dive */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
        <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
          3-Day Refund Policy Audit Summary
        </h4>
        <p className="text-xs text-neutral-400 mb-4">
          Breakdown of customer refund claims evaluated against the mandatory 72-hour cutoff rule.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-neutral-500 block">Total Claims</span>
            <span className="text-lg font-bold font-mono text-white">{totalRefunds}</span>
          </div>
          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-neutral-500 block">Met 3-Day Rule</span>
            <span className="text-lg font-bold font-mono text-emerald-400">{eligibleCount}</span>
          </div>
          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-neutral-500 block">Violated 3-Day Rule</span>
            <span className="text-lg font-bold font-mono text-rose-400">{ineligibleCount}</span>
          </div>
          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-neutral-500 block">Approved Disbursals</span>
            <span className="text-lg font-bold font-mono text-white">{approvedCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
