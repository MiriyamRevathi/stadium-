import React, { useState } from 'react';
import { QrCode, ShieldCheck, AlertTriangle, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { turnstileScannerEngine, TicketScanResult } from '../services/accessControl/turnstileScannerEngine';

export const GateScannerSimulator: React.FC = () => {
  const [selectedGate, setSelectedGate] = useState<string>('Gate 1');
  const [testTicketId, setTestTicketId] = useState<string>('STAD-2026-8901');
  const [isVipPass, setIsVipPass] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<TicketScanResult | null>(null);

  const handleSimulateScan = () => {
    const res = turnstileScannerEngine.processScan({
      ticketId: testTicketId,
      bookingId: 'BK-UPPAL-8901',
      customerName: 'Rahul Reddy',
      gateName: selectedGate,
      expectedGate: 'Gate 1',
      matchDate: '2026-10-18',
      sectionId: 'SEC-A01',
      isVipPass
    });
    setLastResult(res);
  };

  const handleResetScans = () => {
    turnstileScannerEngine.resetScans();
    setLastResult(null);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-white max-w-xl shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-xl">
          <QrCode className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">Turnstile Gate Scanner Simulator</h3>
          <p className="text-xs text-slate-400">Validate RFID/Vector QR Match Passes & Anti-Passback Enforcement</p>
        </div>
      </div>

      <div className="space-y-4 text-xs">
        <div>
          <label className="block text-slate-400 mb-1 font-medium">Scanner Station Gate:</label>
          <select
            value={selectedGate}
            onChange={(e) => setSelectedGate(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-medium focus:outline-none focus:border-orange-500"
          >
            {Array.from({ length: 12 }, (_, i) => `Gate ${i + 1}`).map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-slate-400 mb-1 font-medium">Ticket ID To Scan:</label>
          <input
            type="text"
            value={testTicketId}
            onChange={(e) => setTestTicketId(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="vipPassCheck"
            checked={isVipPass}
            onChange={(e) => setIsVipPass(e.target.checked)}
            className="w-4 h-4 rounded text-orange-600 accent-orange-600"
          />
          <label htmlFor="vipPassCheck" className="text-slate-300 font-medium cursor-pointer">
            VIP Hospitality All-Gate FastTrack Pass
          </label>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={handleSimulateScan}
            className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-500 font-bold text-white rounded-xl shadow-lg shadow-orange-600/30 transition flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            Scan Ticket at {selectedGate}
          </button>

          <button
            onClick={handleResetScans}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-300 rounded-xl transition flex items-center gap-1 font-medium"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset Scans
          </button>
        </div>

        {/* Result Banner */}
        {lastResult && (
          <div className={`p-4 rounded-xl border mt-4 space-y-2 ${
            lastResult.accessStatus === 'GRANTED'
              ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300'
              : 'bg-rose-950/60 border-rose-800 text-rose-300'
          }`}>
            <div className="flex items-center gap-2 font-bold text-sm">
              {lastResult.accessStatus === 'GRANTED' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400" />
              )}
              Status: {lastResult.accessStatus}
            </div>

            <p className="text-xs leading-relaxed">{lastResult.message}</p>

            <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-800 flex justify-between">
              <span>Scan ID: {lastResult.scanId}</span>
              <span>Scanned At: {new Date(lastResult.scannedAt).toLocaleTimeString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
