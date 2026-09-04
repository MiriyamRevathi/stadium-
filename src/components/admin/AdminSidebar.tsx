import React, { useState } from 'react';
import { AdminTab } from '../../types/admin';
import {
  LayoutDashboard,
  Building2,
  MapPin,
  Calendar,
  Grid,
  Tag,
  Ticket,
  RotateCcw,
  Users,
  BarChart3,
  Bell,
  Settings,
  ChevronDown,
  ChevronRight,
  LogOut,
  Layers,
  Armchair
} from 'lucide-react';

interface AdminSidebarProps {
  currentTab: AdminTab;
  onSelectTab: (tab: AdminTab) => void;
  pendingRefundsCount: number;
  unreadNotificationsCount: number;
  onLogout: () => void;
  adminEmail: string;
  onSwitchToCustomer?: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  currentTab,
  onSelectTab,
  pendingRefundsCount,
  unreadNotificationsCount,
  onLogout,
  adminEmail,
  onSwitchToCustomer
}) => {
  const [isStadiumOpen, setIsStadiumOpen] = useState(
    ['stadium-overview', 'stadium-map', 'stands', 'sections', 'seats'].includes(currentTab)
  );

  const stadiumSubTabs: { id: AdminTab; label: string; icon: any }[] = [
    { id: 'stadium-overview', label: 'Overview', icon: Building2 },
    { id: 'stadium-map', label: 'Stadium Map', icon: MapPin },
    { id: 'stands', label: 'Stands', icon: Layers },
    { id: 'sections', label: 'Sections', icon: Grid },
    { id: 'seats', label: 'Seats', icon: Armchair }
  ];

  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col h-screen border-r border-neutral-800 shrink-0 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-neutral-800 flex items-center space-x-3">
        <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-black text-white text-lg tracking-wider shadow-lg shadow-orange-950">
          U
        </div>
        <div>
          <h1 className="text-sm font-black tracking-wider text-white uppercase leading-tight">
            Uppal Stadium
          </h1>
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block">
            Admin Portal
          </span>
        </div>
      </div>

      {/* Quick Customer Switcher */}
      {onSwitchToCustomer && (
        <div className="p-3 border-b border-neutral-800/80 bg-neutral-900/30">
          <button
            id="sidebar-switch-customer-btn"
            onClick={onSwitchToCustomer}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-2 px-3 rounded-lg shadow-md transition-all text-xs"
            title="Go to Live Customer Ticketing Portal"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>Go to Customer Page</span>
          </button>
        </div>
      )}

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1 text-xs">
        {/* Dashboard */}
        <button
          id="sidebar-nav-dashboard"
          onClick={() => onSelectTab('dashboard')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'dashboard'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <LayoutDashboard className="w-4 h-4 text-orange-400" />
          <span>Dashboard</span>
        </button>

        {/* Stadium Group (Accordion) */}
        <div>
          <button
            id="sidebar-nav-stadium-group"
            onClick={() => setIsStadiumOpen(!isStadiumOpen)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium transition-all ${
              ['stadium-overview', 'stadium-map', 'stands', 'sections', 'seats'].includes(currentTab)
                ? 'text-orange-400 bg-neutral-900/80 font-bold'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Building2 className="w-4 h-4 text-orange-400" />
              <span>Stadium</span>
            </div>
            {isStadiumOpen ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5" />
            )}
          </button>

          {isStadiumOpen && (
            <div className="pl-7 pr-1 py-1 space-y-0.5 border-l-2 border-neutral-800 ml-5 mt-1">
              {stadiumSubTabs.map((sub) => {
                const Icon = sub.icon;
                const isActive = currentTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    id={`sidebar-nav-${sub.id}`}
                    onClick={() => onSelectTab(sub.id)}
                    className={`w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-md font-medium text-left transition-all ${
                      isActive
                        ? 'bg-orange-600/20 text-orange-400 font-bold'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{sub.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Events */}
        <button
          id="sidebar-nav-events"
          onClick={() => onSelectTab('events')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'events'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Calendar className="w-4 h-4 text-orange-400" />
          <span>Events</span>
        </button>

        {/* Seat Inventory */}
        <button
          id="sidebar-nav-seat-inventory"
          onClick={() => onSelectTab('seat-inventory')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'seat-inventory'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Grid className="w-4 h-4 text-orange-400" />
          <span>Seat Inventory</span>
        </button>

        {/* Pricing */}
        <button
          id="sidebar-nav-pricing"
          onClick={() => onSelectTab('pricing')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'pricing'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Tag className="w-4 h-4 text-orange-400" />
          <span>Pricing</span>
        </button>

        {/* Bookings */}
        <button
          id="sidebar-nav-bookings"
          onClick={() => onSelectTab('bookings')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'bookings'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Ticket className="w-4 h-4 text-orange-400" />
          <span>Bookings</span>
        </button>

        {/* Refund Requests with 3-day policy badge */}
        <button
          id="sidebar-nav-refund-requests"
          onClick={() => onSelectTab('refund-requests')}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'refund-requests'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <div className="flex items-center space-x-3">
            <RotateCcw className="w-4 h-4 text-orange-400" />
            <span>Refund Requests</span>
          </div>
          {pendingRefundsCount > 0 && (
            <span className="bg-amber-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded-full">
              {pendingRefundsCount}
            </span>
          )}
        </button>

        {/* Customers */}
        <button
          id="sidebar-nav-customers"
          onClick={() => onSelectTab('customers')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'customers'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Users className="w-4 h-4 text-orange-400" />
          <span>Customers</span>
        </button>

        {/* Reports */}
        <button
          id="sidebar-nav-reports"
          onClick={() => onSelectTab('reports')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'reports'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <BarChart3 className="w-4 h-4 text-orange-400" />
          <span>Reports</span>
        </button>

        {/* Notifications */}
        <button
          id="sidebar-nav-notifications"
          onClick={() => onSelectTab('notifications')}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'notifications'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <div className="flex items-center space-x-3">
            <Bell className="w-4 h-4 text-orange-400" />
            <span>Notifications</span>
          </div>
          {unreadNotificationsCount > 0 && (
            <span className="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {unreadNotificationsCount}
            </span>
          )}
        </button>

        {/* Settings */}
        <button
          id="sidebar-nav-settings"
          onClick={() => onSelectTab('settings')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all ${
            currentTab === 'settings'
              ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-950'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
          }`}
        >
          <Settings className="w-4 h-4 text-orange-400" />
          <span>Settings</span>
        </button>
      </nav>

      {/* Admin User Footer Profile & Sign Out */}
      <div className="p-3 border-t border-neutral-800 bg-neutral-950">
        <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800">
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-neutral-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
              AD
            </div>
            <div className="overflow-hidden text-left">
              <span className="text-xs font-bold text-white block truncate">Admin User</span>
              <span className="text-[10px] text-neutral-400 block truncate">{adminEmail}</span>
            </div>
          </div>
          <button
            id="admin-logout-btn"
            onClick={onLogout}
            title="Sign Out"
            className="p-1.5 text-neutral-400 hover:text-rose-400 hover:bg-neutral-800 rounded transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
