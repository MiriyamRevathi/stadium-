import React, { useState } from 'react';
import { RefundRequest, RefundStatus, AdminRefundDecision } from '../../../types/admin';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  ShieldAlert,
  Search,
  Check,
  X,
  FileText,
  Calculator
} from 'lucide-react';

interface RefundRequestsViewProps {
  refundRequests: RefundRequest[];
  onApproveRefund: (requestId: string, overrideNote?: string) => void;
  onRejectRefund: (requestId: string, reason: string) => void;
}

export const RefundRequestsView: React.FC<RefundRequestsViewProps> = ({
  refundRequests,
  onApproveRefund,
  onRejectRefund
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterEligibility, setFilterEligibility] = useState<string>('all');

  // Decision Modal State
  const [approvingRequest, setApprovingRequest] = useState<RefundRequest | null>(null);
  const [rejectingRequest, setRejectingRequest] = useState<RefundRequest | null>(null);
  const [overrideNote, setOverrideNote] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Policy Simulator State
  const [showSimulator, setShowSimulator] = useState(false);
  const [simEventDate, setSimEventDate] = useState('2026-11-20');
  const [simRequestDate, setSimRequestDate] = useState('2026-11-15');

  const filteredRequests = refundRequests.filter((r) => {
    if (
      searchTerm &&
      !r.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !r.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !r.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    if (filterStatus !== 'all' && r.status !== filterStatus) return false;
    if (filterEligibility !== 'all' && r.eligibility !== filterEligibility) return false;
    return true;
  });

  const handleConfirmApprove = () => {
    if (!approvingRequest) return;
    if (approvingRequest.eligibility === 'Not Eligible' && !overrideNote.trim()) {
      alert('Approval of non-eligible refund requests strictly requires an Admin Override Note.');
      return;
    }

    onApproveRefund(approvingRequest.id, overrideNote || undefined);
    setActionSuccess(`Refund request ${approvingRequest.id} has been Approved and seats released.`);
    setTimeout(() => setActionSuccess(null), 3000);
    setApprovingRequest(null);
    setOverrideNote('');
  };

  const handleConfirmReject = () => {
    if (!rejectingRequest || !rejectionReason.trim()) {
      alert('Please provide a specific rejection reason for the customer.');
      return;
    }

    onRejectRefund(rejectingRequest.id, rejectionReason);
    setActionSuccess(`Refund request ${rejectingRequest.id} has been Rejected.`);
    setTimeout(() => setActionSuccess(null), 3000);
    setRejectingRequest(null);
    setRejectionReason('');
  };

  // Simulator calculation
  const simEvDate = new Date(simEventDate);
  const simReqDate = new Date(simRequestDate);
  const simDiffDays = Math.round((simEvDate.getTime() - simReqDate.getTime()) / (1000 * 60 * 60 * 24));
  const simIsEligible = simDiffDays >= 3;

  return (
    <div className="space-y-6 text-white">
      {/* ---------------------------------------------------- */}
      {/* CRITICAL 3-DAY BUSINESS LOGIC BANNER (Required) */}
      {/* ---------------------------------------------------- */}
      <div className="bg-gradient-to-r from-amber-950/60 via-neutral-900 to-amber-950/60 border-2 border-amber-500/60 rounded-xl p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 bg-amber-500/20 rounded-lg text-amber-400 shrink-0 mt-0.5">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">
                Official Uppal Stadium Regulations
              </span>
              <h3 className="text-base font-black text-white tracking-wide">
                STRICT 3-DAY REFUND COMPLIANCE MANDATE
              </h3>
              <p className="text-xs text-neutral-300 mt-1 max-w-3xl leading-relaxed">
                Tickets are strictly non-refundable unless a refund request is submitted at least{' '}
                <strong className="text-amber-400">3 days before the scheduled event</strong>.
                Requests submitted within 72 hours of match day are automatically categorized as{' '}
                <span className="text-rose-400 font-bold">Not Eligible</span>. Overriding an ineligible refund requires recorded administrative justification.
              </p>
            </div>
          </div>

          <button
            id="open-policy-simulator-btn"
            onClick={() => setShowSimulator(!showSimulator)}
            className="px-3.5 py-2 bg-neutral-800 hover:bg-neutral-700 text-amber-300 hover:text-white rounded-lg text-xs font-bold transition-colors shrink-0 flex items-center space-x-2 border border-neutral-700"
          >
            <Calculator className="w-4 h-4" />
            <span>{showSimulator ? 'Close Policy Tester' : 'Interactive Policy Tester'}</span>
          </button>
        </div>

        {/* Interactive Policy Tester Box */}
        {showSimulator && (
          <div className="mt-4 pt-4 border-t border-amber-900/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs animate-fadeIn">
            <div>
              <label className="block text-neutral-400 mb-1">Scheduled Event Date</label>
              <input
                type="date"
                value={simEventDate}
                onChange={(e) => setSimEventDate(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-700 rounded px-2.5 py-1.5 text-white font-mono text-xs"
              />
            </div>
            <div>
              <label className="block text-neutral-400 mb-1">Refund Request Submission Date</label>
              <input
                type="date"
                value={simRequestDate}
                onChange={(e) => setSimRequestDate(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-700 rounded px-2.5 py-1.5 text-white font-mono text-xs"
              />
            </div>
            <div className="bg-neutral-950 p-2.5 rounded border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-neutral-500 block text-[10px]">Lead Time: {simDiffDays} Days</span>
                <span className="text-white font-bold">
                  {simIsEligible ? 'Meets 3-Day Rule' : 'Violates 3-Day Rule'}
                </span>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs font-bold ${
                  simIsEligible
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    : 'bg-rose-950 text-rose-400 border border-rose-800'
                }`}
              >
                {simIsEligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}
              </span>
            </div>
          </div>
        )}
      </div>

      {actionSuccess && (
        <div className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs px-4 py-2 rounded-lg flex items-center space-x-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by refund ID, booking reference, customer..."
            className="w-full bg-neutral-950 border border-neutral-700 rounded-lg pl-9 pr-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={filterEligibility}
            onChange={(e) => setFilterEligibility(e.target.value)}
            className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-2.5 py-2 text-xs"
          >
            <option value="all">All Eligibility</option>
            <option value="Eligible">Eligible (&gt;= 3 Days)</option>
            <option value="Not Eligible">Not Eligible (&lt; 3 Days)</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-2.5 py-2 text-xs"
          >
            <option value="all">All Statuses</option>
            <option value="Requested">Requested (Action Required)</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Processed">Processed</option>
          </select>
        </div>
      </div>

      {/* Refund Requests Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-neutral-300">
            <thead className="bg-neutral-950 text-neutral-400 uppercase font-semibold text-[10px] tracking-wider border-b border-neutral-800">
              <tr>
                <th className="px-4 py-3">Refund Ref</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Event & Match Date</th>
                <th className="px-4 py-3">Seats</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Days to Event</th>
                <th className="px-4 py-3">Eligibility</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-medium">
              {filteredRequests.map((r) => {
                const isPending = r.status === 'Requested' || r.status === 'Under Review';

                return (
                  <tr key={r.id} className="hover:bg-neutral-800/30 transition-colors">
                    <td className="px-4 py-3.5 font-bold font-mono text-white text-xs">
                      {r.id}
                      <span className="text-[10px] text-neutral-500 block">{r.bookingId}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-bold text-white block">{r.customerName}</span>
                      <span className="text-[11px] text-neutral-400">{r.customerEmail}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-semibold text-neutral-200 block">{r.eventName}</span>
                      <span className="text-[11px] text-neutral-500">Match: {r.eventDate}</span>
                    </td>
                    <td className="px-4 py-3.5 font-mono text-neutral-300">
                      {(r.seatIds || r.seats || []).join(', ') || '—'}
                    </td>
                    <td className="px-4 py-3.5 font-mono font-bold text-orange-400">
                      ₹{r.refundAmount.toLocaleString('en-IN')}
                    </td>
                    <td className="px-4 py-3.5 font-mono">
                      <span
                        className={`font-bold ${
                          r.daysBeforeEvent >= 3 ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {r.daysBeforeEvent} Days
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          r.eligibility === 'Eligible'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-rose-950 text-rose-400 border border-rose-800'
                        }`}
                      >
                        {r.eligibility}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          r.status === 'Approved'
                            ? 'bg-emerald-950 text-emerald-400'
                            : r.status === 'Rejected'
                            ? 'bg-rose-950 text-rose-400'
                            : 'bg-amber-950 text-amber-400 border border-amber-800'
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      {isPending ? (
                        <div className="flex items-center justify-end space-x-1.5">
                          <button
                            id={`approve-refund-btn-${r.id}`}
                            onClick={() => setApprovingRequest(r)}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold inline-flex items-center space-x-1 transition-colors"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Approve</span>
                          </button>
                          <button
                            id={`reject-refund-btn-${r.id}`}
                            onClick={() => setRejectingRequest(r)}
                            className="px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded text-xs font-bold inline-flex items-center space-x-1 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>Reject</span>
                          </button>
                        </div>
                      ) : (
                        <span className="text-[11px] text-neutral-500">Decision Recorded</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* APPROVE MODAL (With Override Note Requirement for <3 Days) */}
      {/* ---------------------------------------------------- */}
      {approvingRequest && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-md w-full p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h4 className="text-base font-bold text-white">
                Approve Refund: {approvingRequest.id}
              </h4>
              <button onClick={() => setApprovingRequest(null)} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Customer:</span>
                <span className="font-bold text-white">{approvingRequest.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Refund Sum:</span>
                <span className="font-bold font-mono text-orange-400">
                  ₹{approvingRequest.refundAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Lead Time:</span>
                <span
                  className={`font-bold ${
                    approvingRequest.daysBeforeEvent >= 3 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {approvingRequest.daysBeforeEvent} Days (Policy: &gt;= 3 Days)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Customer Reason:</span>
                <span className="text-neutral-300 italic">"{approvingRequest.reason}"</span>
              </div>
            </div>

            {/* Over-ride Warning for non-eligible requests */}
            {approvingRequest.eligibility === 'Not Eligible' ? (
              <div className="p-3.5 bg-rose-950/40 border border-rose-800/80 rounded-lg text-rose-200 text-xs space-y-2">
                <div className="flex items-center space-x-2 font-bold text-rose-300">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>CRITICAL: REQUEST IS NOT ELIGIBLE UNDER 3-DAY POLICY</span>
                </div>
                <p>
                  This request was received within 72 hours of match day ({approvingRequest.daysBeforeEvent} days). Under official Uppal Stadium policy, you MUST provide an <strong>Administrative Override Note</strong> (e.g. Medical emergency or authorized promoter exception) to proceed.
                </p>
                <div>
                  <label className="block font-semibold text-rose-300 mb-1">
                    Required Override Reason Note:
                  </label>
                  <input
                    type="text"
                    id="override-note-input"
                    value={overrideNote}
                    onChange={(e) => setOverrideNote(e.target.value)}
                    placeholder="e.g. Approved per HCA stadium executive order #402"
                    className="w-full bg-neutral-950 border border-rose-800 rounded px-3 py-2 text-white text-xs"
                    required
                  />
                </div>
              </div>
            ) : (
              <p className="text-xs text-neutral-400">
                This request complies with the 3-day return policy. Approving will automatically release seats{' '}
                <strong className="text-white">{(approvingRequest.seatIds || approvingRequest.seats || []).join(', ') || 'selected'}</strong> back to available inventory.
              </p>
            )}

            <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => setApprovingRequest(null)}
                className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg font-bold text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                id="confirm-approve-refund-btn"
                onClick={handleConfirmApprove}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs shadow-lg shadow-emerald-950"
              >
                Authorize Refund & Release Seats
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* REJECT MODAL */}
      {/* ---------------------------------------------------- */}
      {rejectingRequest && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-md w-full p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h4 className="text-base font-bold text-white">
                Reject Refund: {rejectingRequest.id}
              </h4>
              <button onClick={() => setRejectingRequest(null)} className="text-neutral-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed">
              State the policy grounds for rejection. The customer will receive this explanation on their booking receipt.
            </p>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1">
                Rejection Grounds (Required)
              </label>
              <textarea
                id="rejection-reason-input"
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                rows={3}
                placeholder="e.g. Request violates the mandatory 3-day pre-match submission window. As per Uppal Stadium ticketing bylaws, tickets within 72 hours are strictly non-refundable."
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white text-xs focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => setRejectingRequest(null)}
                className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg font-bold text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                id="confirm-reject-refund-btn"
                onClick={handleConfirmReject}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-xs shadow-lg shadow-rose-950"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
