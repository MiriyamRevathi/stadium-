import React, { useState, useEffect } from 'react';
import {
  AdminTab,
  AdminDashboardMetrics,
  Stand,
  Section,
  PhysicalSeat,
  AdminEvent,
  EventPricingMatrix,
  EventSeat,
  AdminBooking,
  RefundRequest,
  AdminCustomer,
  AdminNotification,
  AdminSettings,
  SeatStatus,
  NotificationType
} from '../../types/admin';
import { adminApi } from '../../services/adminApi';
import { adminService } from '../../services/adminService';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { AdminLogin } from './AdminLogin';

// Views
import { DashboardView } from './views/DashboardView';
import { StadiumOverviewView } from './views/StadiumOverviewView';
import { StadiumMapView } from './views/StadiumMapView';
import { StandsView } from './views/StandsView';
import { SectionsView } from './views/SectionsView';
import { SeatsView } from './views/SeatsView';
import { EventsView } from './views/EventsView';
import { SeatInventoryView } from './views/SeatInventoryView';
import { PricingView } from './views/PricingView';
import { BookingsView } from './views/BookingsView';
import { RefundRequestsView } from './views/RefundRequestsView';
import { CustomersView } from './views/CustomersView';
import { ReportsView } from './views/ReportsView';
import { NotificationsView } from './views/NotificationsView';
import { SettingsView } from './views/SettingsView';

interface AdminAppProps {
  onSwitchToCustomer?: () => void;
  initialTab?: AdminTab;
}

export const AdminApp: React.FC<AdminAppProps> = ({ onSwitchToCustomer, initialTab = 'dashboard' }) => {
  // Authentication: default to logged in as admin for immediate presentation
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [adminEmail, setAdminEmail] = useState('admin@uppalstadium.com');

  // Navigation
  const [currentTab, setCurrentTab] = useState<AdminTab>(initialTab);
  const [selectedEventId, setSelectedEventId] = useState<string>('evt-ind-aus');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Domain State loaded from Service
  const [metrics, setMetrics] = useState<AdminDashboardMetrics>(adminService.getDashboardMetrics());
  const [stands, setStands] = useState<Stand[]>(adminService.getStands());
  const [sections, setSections] = useState<Section[]>(adminService.getSections());
  const [physicalSeats, setPhysicalSeats] = useState<PhysicalSeat[]>(adminService.getPhysicalSeats());
  const [events, setEvents] = useState<AdminEvent[]>(adminService.getEvents());
  const [pricingMatrices, setPricingMatrices] = useState<Record<string, EventPricingMatrix>>(
    adminService.getAllPricingMatrices()
  );
  const [eventSeats, setEventSeats] = useState<Record<string, Record<string, EventSeat>>>(
    adminService.getAllEventSeats()
  );
  const [bookings, setBookings] = useState<AdminBooking[]>(adminService.getBookings());
  const [refundRequests, setRefundRequests] = useState<RefundRequest[]>(adminService.getRefundRequests());
  const [customers, setCustomers] = useState<AdminCustomer[]>(adminService.getCustomers());
  const [notifications, setNotifications] = useState<AdminNotification[]>(adminService.getNotifications());
  const [settings, setSettings] = useState<AdminSettings>(adminService.getSettings());

  // Refresh helper
  const refreshAll = () => {
    setMetrics(adminService.getDashboardMetrics());
    setStands(adminService.getStands());
    setSections(adminService.getSections());
    setPhysicalSeats(adminService.getPhysicalSeats());
    setEvents(adminService.getEvents());
    setPricingMatrices(adminService.getAllPricingMatrices());
    setEventSeats(adminService.getAllEventSeats());
    setBookings(adminService.getBookings());
    setRefundRequests(adminService.getRefundRequests());
    setCustomers(adminService.getCustomers());
    setNotifications(adminService.getNotifications());
    setSettings(adminService.getSettings());
  };

  // State update handlers
  const handleUpdateSeat = (updated: PhysicalSeat) => {
    adminService.updatePhysicalSeat(updated.id, updated);
    refreshAll();
  };

  const handleBlockSeat = (seatId: string) => {
    adminService.blockPhysicalSeat(seatId);
    refreshAll();
  };

  const handleUnblockSeat = (seatId: string) => {
    adminService.unblockPhysicalSeat(seatId);
    refreshAll();
  };

  const handleBatchUpdateSeats = (seatIds: string[], status: SeatStatus) => {
    adminService.batchUpdatePhysicalSeats(seatIds, status);
    refreshAll();
  };

  const handleUpdateStand = (standId: string, updates: Partial<Stand>) => {
    adminService.updateStand(standId, updates);
    refreshAll();
  };

  const handleUpdateSection = (sectionId: string, updates: Partial<Section>) => {
    adminService.updateSection(sectionId, updates);
    refreshAll();
  };

  const handleCreateEvent = (eventData: Omit<AdminEvent, 'id'>) => {
    const newEvt = adminService.createEvent(eventData);
    refreshAll();
    setSelectedEventId(newEvt.id);
  };

  const handleUpdateEvent = (eventId: string, updates: Partial<AdminEvent>) => {
    adminService.updateEvent(eventId, updates);
    refreshAll();
  };

  const handleDeactivateEvent = (eventId: string) => {
    adminService.deactivateEvent(eventId);
    refreshAll();
  };

  const handleDeleteEvent = (eventId: string) => {
    adminService.deleteEvent(eventId);
    refreshAll();
  };

  const handleUpdatePricing = (eventId: string, matrix: EventPricingMatrix) => {
    adminService.updatePricingMatrix(eventId, matrix);
    refreshAll();
  };

  const handleUpdateEventSeatStatus = (eventId: string, seatId: string, status: SeatStatus) => {
    adminService.updateEventSeatStatus(eventId, seatId, status);
    refreshAll();
  };

  const handleBatchUpdateEventSeats = (eventId: string, seatIds: string[], status: SeatStatus) => {
    adminService.batchUpdateEventSeats(eventId, seatIds, status);
    refreshAll();
  };

  const handleCancelBooking = (bookingId: string) => {
    adminService.cancelBooking(bookingId);
    refreshAll();
  };

  const handleApproveRefund = (requestId: string, overrideNote?: string) => {
    adminService.processRefundDecision({
      requestId,
      decision: 'Approved',
      overrideNote
    });
    refreshAll();
  };

  const handleRejectRefund = (requestId: string, reason: string) => {
    adminService.processRefundDecision({
      requestId,
      decision: 'Rejected',
      reason
    });
    refreshAll();
  };

  const handleMarkAsRead = (id: string) => {
    adminService.markNotificationAsRead(id);
    refreshAll();
  };

  const handleMarkAllAsRead = () => {
    adminService.markAllNotificationsAsRead();
    refreshAll();
  };

  const handleSendBroadcast = (broadcast: { title: string; message: string; type: NotificationType }) => {
    adminService.addNotification({
      ...broadcast,
      targetAudience: 'All'
    });
    refreshAll();
  };

  const handleUpdateSettings = (newSettings: AdminSettings) => {
    adminService.updateSettings(newSettings);
    refreshAll();
  };

  const handleResetSeedData = () => {
    adminService.resetToSeedData();
    refreshAll();
  };

  // Counts for Badges
  const pendingRefundsCount = refundRequests.filter(
    (r) => r.status === 'Requested' || r.status === 'Under Review'
  ).length;
  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLogin={(email) => {
          setAdminEmail(email);
          setIsAuthenticated(true);
        }}
      />
    );
  }

  return (
    <div className="flex h-screen bg-[#111111] text-neutral-100 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <AdminSidebar
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        pendingRefundsCount={pendingRefundsCount}
        unreadNotificationsCount={unreadNotificationsCount}
        onLogout={() => setIsAuthenticated(false)}
        adminEmail={adminEmail}
        onSwitchToCustomer={onSwitchToCustomer}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <AdminHeader
          currentTab={currentTab}
          unreadNotificationsCount={unreadNotificationsCount}
          onOpenNotifications={() => setCurrentTab('notifications')}
          onRefreshData={refreshAll}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSwitchToCustomer={onSwitchToCustomer}
        />

        {/* Scrollable Viewport */}
        <main className="flex-1 overflow-y-auto p-6">
          {currentTab === 'dashboard' && (
            <DashboardView
              metrics={metrics}
              events={events}
              refundRequests={refundRequests}
              onNavigate={(tab, evId) => {
                if (evId) setSelectedEventId(evId);
                setCurrentTab(tab);
              }}
              onSelectEventForPricing={(id) => {
                setSelectedEventId(id);
                setCurrentTab('pricing');
              }}
              onSelectEventForInventory={(id) => {
                setSelectedEventId(id);
                setCurrentTab('seat-inventory');
              }}
            />
          )}

          {currentTab === 'stadium-overview' && (
            <StadiumOverviewView
              stands={stands}
              sections={sections}
              settings={settings}
              onNavigate={(tab) => setCurrentTab(tab)}
            />
          )}

          {currentTab === 'stadium-map' && (
            <StadiumMapView
              stands={stands}
              sections={sections}
              physicalSeats={physicalSeats}
              onUpdateSeat={handleUpdateSeat}
              onBlockSeat={handleBlockSeat}
              onUnblockSeat={handleUnblockSeat}
            />
          )}

          {currentTab === 'stands' && (
            <StandsView
              stands={stands}
              sections={sections}
              onUpdateStand={handleUpdateStand}
            />
          )}

          {currentTab === 'sections' && (
            <SectionsView
              sections={sections}
              stands={stands}
              onUpdateSection={handleUpdateSection}
            />
          )}

          {currentTab === 'seats' && (
            <SeatsView
              seats={physicalSeats}
              sections={sections}
              stands={stands}
              onUpdateSeat={handleUpdateSeat}
              onBatchUpdateSeats={handleBatchUpdateSeats}
            />
          )}

          {currentTab === 'events' && (
            <EventsView
              events={events}
              onCreateEvent={handleCreateEvent}
              onUpdateEvent={handleUpdateEvent}
              onDeactivateEvent={handleDeactivateEvent}
              onDeleteEvent={handleDeleteEvent}
              onNavigate={(tab) => setCurrentTab(tab)}
              onSelectEventForPricing={(id) => {
                setSelectedEventId(id);
                setCurrentTab('pricing');
              }}
              onSelectEventForInventory={(id) => {
                setSelectedEventId(id);
                setCurrentTab('seat-inventory');
              }}
            />
          )}

          {currentTab === 'seat-inventory' && (
            <SeatInventoryView
              events={events}
              stands={stands}
              sections={sections}
              physicalSeats={physicalSeats}
              eventSeats={eventSeats}
              selectedEventId={selectedEventId}
              onSelectEvent={setSelectedEventId}
              onUpdateEventSeatStatus={handleUpdateEventSeatStatus}
              onBatchUpdateEventSeats={handleBatchUpdateEventSeats}
            />
          )}

          {currentTab === 'pricing' && (
            <PricingView
              events={events}
              sections={sections}
              pricingMatrices={pricingMatrices}
              selectedEventId={selectedEventId}
              onSelectEvent={setSelectedEventId}
              onUpdatePricing={handleUpdatePricing}
            />
          )}

          {currentTab === 'bookings' && (
            <BookingsView
              bookings={bookings}
              events={events}
              onCancelBooking={handleCancelBooking}
              onResendConfirmation={() => {}}
            />
          )}

          {currentTab === 'refund-requests' && (
            <RefundRequestsView
              refundRequests={refundRequests}
              onApproveRefund={handleApproveRefund}
              onRejectRefund={handleRejectRefund}
            />
          )}

          {currentTab === 'customers' && (
            <CustomersView
              customers={customers}
              bookings={bookings}
            />
          )}

          {currentTab === 'reports' && (
            <ReportsView
              metrics={metrics}
              events={events}
              refundRequests={refundRequests}
              bookings={bookings}
            />
          )}

          {currentTab === 'notifications' && (
            <NotificationsView
              notifications={notifications}
              onMarkAsRead={handleMarkAsRead}
              onMarkAllAsRead={handleMarkAllAsRead}
              onSendBroadcast={handleSendBroadcast}
            />
          )}

          {currentTab === 'settings' && (
            <SettingsView
              settings={settings}
              onUpdateSettings={handleUpdateSettings}
              onResetSeedData={handleResetSeedData}
            />
          )}
        </main>
      </div>
    </div>
  );
};
