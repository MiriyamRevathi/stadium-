import React, { useState } from 'react';
import { AdminSettings } from '../../../types/admin';
import { Settings, Shield, RotateCcw, CheckCircle2, AlertTriangle, Save } from 'lucide-react';

interface SettingsViewProps {
  settings: AdminSettings;
  onUpdateSettings: (newSettings: AdminSettings) => void;
  onResetSeedData: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  onUpdateSettings,
  onResetSeedData
}) => {
  const [formData, setFormData] = useState<AdminSettings>({ ...settings });
  const [isSaved, setIsSaved] = useState(false);
  const [resetDone, setResetDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSettings(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleReset = () => {
    if (
      window.confirm(
        'Reset all demo data back to factory seed? This will restore original seats, bookings, and refund requests.'
      )
    ) {
      onResetSeedData();
      setResetDone(true);
      setTimeout(() => setResetDone(false), 3000);
    }
  };

  return (
    <div className="space-y-6 text-white max-w-4xl">
      <div>
        <h3 className="text-base font-bold text-white uppercase tracking-wider">
          Stadium & Ticketing Settings
        </h3>
        <p className="text-xs text-neutral-400">
          Global operational parameters, strict refund rules, and turnstile configuration.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Stadium Identity Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wide border-b border-neutral-800 pb-2 flex items-center space-x-2">
            <Shield className="w-4 h-4 text-orange-400" />
            <span>Stadium Identification</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-neutral-400 font-semibold mb-1">Stadium Full Name</label>
              <input
                type="text"
                value={formData.stadiumName}
                onChange={(e) => setFormData({ ...formData, stadiumName: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-neutral-400 font-semibold mb-1">Location & City</label>
              <input
                type="text"
                value={formData.stadiumLocation}
                onChange={(e) => setFormData({ ...formData, stadiumLocation: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-neutral-400 font-semibold mb-1">Operating Authority</label>
              <input
                type="text"
                value={formData.operator}
                onChange={(e) => setFormData({ ...formData, operator: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-neutral-400 font-semibold mb-1">Design Capacity</label>
              <input
                type="number"
                value={formData.totalCapacity}
                onChange={(e) => setFormData({ ...formData, totalCapacity: Number(e.target.value) })}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white font-mono"
                required
              />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* REFUND POLICY CONFIGURATION (3-Day Requirement) */}
        {/* ---------------------------------------------------- */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wide border-b border-neutral-800 pb-2 flex items-center space-x-2">
            <RotateCcw className="w-4 h-4 text-orange-400" />
            <span>Official Refund Policy Rules</span>
          </h4>

          <div className="p-3 bg-neutral-950 border border-amber-800/60 rounded-lg text-amber-200 text-xs">
            <strong>Mandatory Policy Constraint:</strong> Uppal Stadium operates on a strict non-refundable ticket model. Fans must submit cancellation at least 3 full days prior to match day.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-neutral-400 font-semibold mb-1">
                Minimum Pre-Match Lead Time (Days)
              </label>
              <input
                type="number"
                min={1}
                max={14}
                value={formData.refundWindowDays}
                onChange={(e) => setFormData({ ...formData, refundWindowDays: Number(e.target.value) })}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white font-mono font-bold"
                required
              />
              <span className="text-[11px] text-neutral-500 mt-1 block">Default: 3 Days before event</span>
            </div>

            <div>
              <label className="block text-neutral-400 font-semibold mb-1">
                Administrative Cancellation Fee (%)
              </label>
              <input
                type="number"
                min={0}
                max={50}
                value={formData.cancellationFeePercentage}
                onChange={(e) =>
                  setFormData({ ...formData, cancellationFeePercentage: Number(e.target.value) })
                }
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white font-mono"
                required
              />
              <span className="text-[11px] text-neutral-500 mt-1 block">Default: 5% processing fee</span>
            </div>

            <div>
              <label className="block text-neutral-400 font-semibold mb-1">
                No General Return Policy
              </label>
              <div className="h-10 flex items-center">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.strictReturnPolicy}
                    onChange={(e) => setFormData({ ...formData, strictReturnPolicy: e.target.checked })}
                    className="rounded border-neutral-700 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="text-neutral-200 font-bold">Enforce Strict Policy</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Ticketing Rules */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wide border-b border-neutral-800 pb-2">
            Ticketing & Seat Allocation Rules
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-neutral-400 font-semibold mb-1">
                Max Tickets per Customer Booking
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={formData.maxTicketsPerBooking}
                onChange={(e) =>
                  setFormData({ ...formData, maxTicketsPerBooking: Number(e.target.value) })
                }
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white font-mono"
                required
              />
            </div>

            <div>
              <label className="block text-neutral-400 font-semibold mb-1">
                Seat Hold Timer (Minutes during Checkout)
              </label>
              <input
                type="number"
                min={2}
                max={30}
                value={formData.seatHoldDurationMinutes}
                onChange={(e) =>
                  setFormData({ ...formData, seatHoldDurationMinutes: Number(e.target.value) })
                }
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white font-mono"
                required
              />
            </div>
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-between pt-2">
          {isSaved && (
            <div className="text-emerald-400 text-xs font-bold flex items-center space-x-1.5 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              <span>Settings saved successfully!</span>
            </div>
          )}
          {!isSaved && <span></span>}

          <button
            type="submit"
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-lg shadow-orange-950 transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Stadium Settings</span>
          </button>
        </div>
      </form>

      {/* Demo Seed Reset Section */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide">
              Factory Seed Data Reset
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Restore all Uppal Stadium seed data, events, bookings, and 3-day refund requests to initial demo status.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-neutral-800 hover:bg-rose-950 hover:text-rose-400 text-neutral-300 rounded-lg text-xs font-bold transition-colors border border-neutral-700 shrink-0"
          >
            Reset Seed Data
          </button>
        </div>

        {resetDone && (
          <div className="mt-3 p-2 bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs rounded flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Demo seed data restored to pristine state!</span>
          </div>
        )}
      </div>
    </div>
  );
};
