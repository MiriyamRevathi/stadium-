import React, { useState } from 'react';
import { AdminNotification, NotificationType } from '../../../types/admin';
import {
  Bell,
  CheckCheck,
  Plus,
  Send,
  X,
  AlertTriangle,
  RotateCcw,
  Ticket,
  Wrench,
  CheckCircle2
} from 'lucide-react';

interface NotificationsViewProps {
  notifications: AdminNotification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onSendBroadcast: (broadcast: { title: string; message: string; type: NotificationType }) => void;
}

export const NotificationsView: React.FC<NotificationsViewProps> = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onSendBroadcast
}) => {
  const [filterType, setFilterType] = useState<string>('all');
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false);
  const [bTitle, setBTitle] = useState('');
  const [bMessage, setBMessage] = useState('');
  const [bType, setBType] = useState<NotificationType>('System');
  const [broadcastSent, setBroadcastSent] = useState(false);

  const filteredNotifications = notifications.filter((n) => {
    if (filterType !== 'all' && n.type !== filterType) return false;
    return true;
  });

  const handleBroadcastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendBroadcast({
      title: bTitle,
      message: bMessage,
      type: bType
    });
    setBroadcastSent(true);
    setTimeout(() => {
      setBroadcastSent(false);
      setIsBroadcastOpen(false);
      setBTitle('');
      setBMessage('');
    }, 1500);
  };

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            System Notifications & Alerts
          </h3>
          <p className="text-xs text-neutral-400">
            Real-time stadium operational events, pending refund triggers, and emergency announcements.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onMarkAllAsRead}
            className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors"
          >
            <CheckCheck className="w-4 h-4 text-emerald-400" />
            <span>Mark All Read</span>
          </button>
          <button
            onClick={() => setIsBroadcastOpen(true)}
            className="px-3 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-lg shadow-orange-950 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Send Alert / Broadcast</span>
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        {['all', 'Booking', 'Refund', 'Maintenance', 'System'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
              filterType === type
                ? 'bg-orange-600 text-white'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
            }`}
          >
            {type === 'all' ? 'All Alerts' : `${type} Alerts`}
          </button>
        ))}
      </div>

      {/* Notification Cards List */}
      <div className="space-y-3">
        {filteredNotifications.map((notif) => {
          return (
            <div
              key={notif.id}
              className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                notif.read
                  ? 'bg-neutral-900/60 border-neutral-800/80 text-neutral-400'
                  : 'bg-neutral-900 border-neutral-700 text-white shadow-md'
              }`}
            >
              <div className="flex items-start space-x-3.5">
                <div
                  className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                    notif.type === 'Refund'
                      ? 'bg-amber-500/20 text-amber-400'
                      : notif.type === 'Booking'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : notif.type === 'Maintenance'
                      ? 'bg-rose-500/20 text-rose-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {notif.type === 'Refund' ? (
                    <RotateCcw className="w-4 h-4" />
                  ) : notif.type === 'Booking' ? (
                    <Ticket className="w-4 h-4" />
                  ) : notif.type === 'Maintenance' ? (
                    <Wrench className="w-4 h-4" />
                  ) : (
                    <Bell className="w-4 h-4" />
                  )}
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-bold text-white">{notif.title}</h4>
                    {!notif.read && (
                      <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {notif.message}
                  </p>
                  <span className="text-[10px] text-neutral-500 block mt-2 font-mono">
                    {new Date(notif.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              {!notif.read && (
                <button
                  onClick={() => onMarkAsRead(notif.id)}
                  className="text-xs text-orange-400 hover:text-orange-300 font-semibold shrink-0"
                >
                  Mark read
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Broadcast Modal */}
      {isBroadcastOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-md w-full p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
              <h4 className="text-base font-bold text-white">Broadcast Stadium Alert</h4>
              <button
                onClick={() => setIsBroadcastOpen(false)}
                className="text-neutral-400 hover:text-white p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleBroadcastSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Alert Category</label>
                <select
                  value={bType}
                  onChange={(e) => setBType(e.target.value as NotificationType)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                >
                  <option value="System">System Announcement</option>
                  <option value="Booking">Ticketing Alert</option>
                  <option value="Maintenance">Maintenance Advisory</option>
                  <option value="Refund">Policy Notice</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Headline</label>
                <input
                  type="text"
                  value={bTitle}
                  onChange={(e) => setBTitle(e.target.value)}
                  placeholder="e.g. Weather Advisory or Gate Reassignment"
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-neutral-400 font-semibold mb-1">Broadcast Body</label>
                <textarea
                  value={bMessage}
                  onChange={(e) => setBMessage(e.target.value)}
                  rows={3}
                  placeholder="Enter alert text to display to stadium staff and fans..."
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg px-3 py-2 text-white"
                  required
                />
              </div>

              {broadcastSent && (
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-800 rounded text-emerald-300 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Broadcast transmitted successfully!</span>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setIsBroadcastOpen(false)}
                  className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold flex items-center space-x-1.5 shadow-lg shadow-orange-950"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Broadcast</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
