/**
 * Season Tickets - STADIA Feature Component
 */
import React, { useState, useEffect, useMemo, useCallback } from 'react';

export interface SeasonTicketsPageProps {
  userId?: string;
  eventId?: string;
  onClose?: () => void;
  onComplete?: (result: Record<string, unknown>) => void;
}

export const SeasonTicketsPage: React.FC<SeasonTicketsPageProps> = ({
  userId,
  eventId,
  onClose,
  onComplete,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [tab, setTab] = useState<'overview' | 'history' | 'settings'>('overview');

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulated data load for Season Tickets
      await new Promise((r) => setTimeout(r, 200));
      setData({
        title: 'Season Tickets',
        userId: userId || 'guest',
        eventId: eventId || null,
        generatedAt: new Date().toISOString(),
        metrics: { active: true, score: 87, items: 12 },
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, [userId, eventId]);

  useEffect(() => { load(); }, [load]);

  const summary = useMemo(() => {
    if (!data) return null;
    return {
      heading: String(data.title || 'Season Tickets'),
      subtitle: userId ? `Member ${userId}` : 'Guest session',
    };
  }, [data, userId]);

  const handleAction = async (action: string) => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 150));
      onComplete?.({ action, tab, at: new Date().toISOString() });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-sm border border-neutral-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">{summary?.heading || 'Season Tickets'}</h2>
          <p className="text-sm text-neutral-500">{summary?.subtitle}</p>
        </div>
        {onClose && (
          <button type="button" onClick={onClose} className="text-neutral-500 hover:text-neutral-800 text-sm font-medium">
            Close
          </button>
        )}
      </div>

      <div className="flex gap-2 mb-6 border-b border-neutral-100 pb-2">
        {(['overview', 'history', 'settings'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize ${
              tab === t ? 'bg-orange-500 text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {loading && <div className="py-12 text-center text-neutral-500">Loading season tickets…</div>}
      {error && <div className="py-4 px-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

      {!loading && !error && data && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-lg bg-orange-50 border border-orange-100">
              <div className="text-xs text-orange-600 font-semibold uppercase tracking-wide">Status</div>
              <div className="text-lg font-bold text-orange-900 mt-1">Active</div>
            </div>
            <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100">
              <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wide">Score</div>
              <div className="text-lg font-bold text-neutral-900 mt-1">87</div>
            </div>
            <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-100">
              <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wide">Items</div>
              <div className="text-lg font-bold text-neutral-900 mt-1">12</div>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-neutral-200">
            <h3 className="font-semibold text-neutral-800 mb-2">{tab === 'overview' ? 'Overview' : tab === 'history' ? 'History' : 'Settings'}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Season Tickets module for STADIA. Manage your preferences, view activity, and take actions related to this feature.
              All data is processed client-side with optional backend sync when available.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" disabled={loading} onClick={() => handleAction('primary')} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg disabled:opacity-50">
                Primary Action
              </button>
              <button type="button" disabled={loading} onClick={() => handleAction('secondary')} className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-medium rounded-lg disabled:opacity-50">
                Secondary
              </button>
              <button type="button" onClick={load} className="px-4 py-2 text-sm text-orange-600 hover:text-orange-700 font-medium">
                Refresh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeasonTicketsPage;
