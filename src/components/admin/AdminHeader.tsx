import React from 'react';
import { AdminTab } from '../../types/admin';
import { Bell, Search, Shield, RefreshCw, Ticket } from 'lucide-react';

interface AdminHeaderProps {
  currentTab: AdminTab;
  unreadNotificationsCount: number;
  onOpenNotifications: () => void;
  onRefreshData?: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSwitchToCustomer?: () => void;
}

const TAB_TITLES: Record<AdminTab, { title: string; subtitle: string }> = {
  dashboard: { title: 'Dashboard', subtitle: 'Uppal Stadium booking performance, revenue, and active operations' },
  'stadium-overview': { title: 'Stadium Overview', subtitle: 'Rajiv Gandhi International Cricket Stadium infrastructure & capacity specifications' },
  'stadium-map': { title: 'Interactive Stadium Map', subtitle: 'SVG-based hierarchical bowl layout (Stadium > Stand > Section > Row > Seat)' },
  stands: { title: 'Stands Management', subtitle: 'North, South, East, and West Stands configuration and access control' },
  sections: { title: 'Sections Management', subtitle: 'Tiers, seating capacity, base pricing, and row allocation' },
  seats: { title: 'Physical Seats Inventory', subtitle: 'Complete physical stadium seat master records, maintenance, and blocking' },
  events: { title: 'Events Management', subtitle: 'Schedule, configure, and manage fixtures across cricket, football, and entertainment' },
  'seat-inventory': { title: 'Event Seat Inventory', subtitle: 'Real-time event-specific seat allocation and availability status' },
  pricing: { title: 'Event-Specific Pricing', subtitle: 'Dynamic category pricing matrices (General, Premium, VIP, Hospitality)' },
  bookings: { title: 'Bookings Management', subtitle: 'Complete transaction logs, seat allocations, and customer receipts' },
  'refund-requests': { title: 'Refund Requests', subtitle: 'Enforcing the strict 3-day return policy and processing disbursements' },
  customers: { title: 'Customers Directory', subtitle: 'Fan profiles, lifetime booking values, and refund history' },
  reports: { title: 'Analytics & Reports', subtitle: 'Occupancy statistics, revenue breakdowns, and refund summaries' },
  notifications: { title: 'System Notifications', subtitle: 'Broadcast alerts to admins and ticket holders' },
  settings: { title: 'Stadium Settings', subtitle: 'Global configurations, refund policy parameters, and booking rules' }
};

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  currentTab,
  unreadNotificationsCount,
  onOpenNotifications,
  onRefreshData,
  searchQuery,
  onSearchChange,
  onSwitchToCustomer
}) => {
  const currentInfo = TAB_TITLES[currentTab] || { title: 'Uppal Stadium Admin', subtitle: '' };

  return (
    <header className="h-16 bg-[#111111] border-b border-neutral-800 px-6 flex items-center justify-between text-white select-none">
      {/* View Title */}
      <div>
        <h2 className="text-base font-black text-white tracking-wide uppercase">
          {currentInfo.title}
        </h2>
        <p className="text-xs text-neutral-400 hidden sm:block">
          {currentInfo.subtitle}
        </p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-3">
        {/* Switch to Customer Portal Button */}
        {onSwitchToCustomer && (
          <button
            id="admin-header-switch-customer-btn"
            onClick={onSwitchToCustomer}
            className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md transition-colors"
            title="Open Live Customer Ticketing Page"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Go to Customer Page</span>
            <span className="sm:hidden">Fan Page</span>
          </button>
        )}

        {/* Stadium Live Status Indicator */}
        <div className="hidden lg:flex items-center space-x-2 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-neutral-300">Uppal Stadium</span>
          <span className="text-neutral-500">•</span>
          <span className="text-emerald-400 font-medium">55,000 Capacity</span>
        </div>

        {/* Refresh button */}
        {onRefreshData && (
          <button
            id="admin-header-refresh-btn"
            onClick={onRefreshData}
            title="Refresh System Data"
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}

        {/* Notifications Button */}
        <button
          id="admin-header-notifications-btn"
          onClick={onOpenNotifications}
          className="relative p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          {unreadNotificationsCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-[#111111]"></span>
          )}
        </button>

        {/* Admin Badge */}
        <div className="flex items-center space-x-2 pl-2 border-l border-neutral-800">
          <div className="bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs px-2.5 py-1 rounded-md font-bold flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">STADIUM ADMIN</span>
          </div>
        </div>
      </div>
    </header>
  );
};
