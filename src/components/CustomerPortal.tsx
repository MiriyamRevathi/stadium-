import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { EventGrid } from './EventGrid';
import { StadiumsPage } from './StadiumsPage';
import { BookingView } from './BookingView';
import { CheckoutModal } from './CheckoutModal';
import { BookingConfirmation } from './BookingConfirmation';
import { DigitalTicket } from './DigitalTicket';
import { MyBookings } from './MyBookings';
import { AuthPage } from './AuthPage';
import { customerAuthService, CustomerUser } from '../services/customerAuthService';
import { SEEDED_EVENTS } from '../data/events';
import { INITIAL_SEEDED_BOOKINGS } from '../data/bookings';
import { RAJIV_GANDHI_STADIUM } from '../data/stadium';
import { CURRENT_USER } from '../data/users';
import { StadiumEvent, Seat, Booking, UserProfile } from '../types';
import { ArrowLeft, Ticket, Calendar, ShieldCheck, UserCheck, LogOut, LogIn } from 'lucide-react';

interface CustomerPortalProps {
  onNavigateToAdmin: () => void;
}

export const CustomerPortal: React.FC<CustomerPortalProps> = ({ onNavigateToAdmin }) => {
  const [currentUser, setCurrentUser] = useState<CustomerUser | null>(() =>
    customerAuthService.getCurrentUser()
  );

  const [currentView, setCurrentView] = useState<
    'home' | 'events' | 'booking' | 'stadiums' | 'my-bookings' | 'confirmation' | 'auth'
  >('home');
  const [authInitialMode, setAuthInitialMode] = useState<'login' | 'register'>('login');
  const [pendingAuthResumeAction, setPendingAuthResumeAction] = useState<'checkout' | 'booking' | null>(null);

  const [selectedEvent, setSelectedEvent] = useState<StadiumEvent | null>(SEEDED_EVENTS[0]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_SEEDED_BOOKINGS);
  const [showCheckout, setShowCheckout] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [activeDigitalTicket, setActiveDigitalTicket] = useState<Booking | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Subscribe to auth state updates
  useEffect(() => {
    const unsubscribe = customerAuthService.subscribe((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Handle seat toggling in the interactive stadium map
  const handleToggleSeat = (seat: Seat) => {
    setSelectedSeats((prev) => {
      const exists = prev.some((s) => s.id === seat.id);
      if (exists) {
        return prev.filter((s) => s.id !== seat.id);
      }
      // Maximum 6 seats per booking rule
      if (prev.length >= 6) {
        alert('You can select up to 6 seats per booking.');
        return prev;
      }
      return [...prev, seat];
    });
  };

  const handleClearSeats = () => {
    setSelectedSeats([]);
  };

  const handleSelectEvent = (event: StadiumEvent) => {
    setSelectedEvent(event);
    setSelectedSeats([]);
    setCurrentView('booking');
  };

  // Redirect to login if user is not authenticated when proceeding to checkout
  const handleProceedToCheckout = (seats: Seat[]) => {
    setSelectedSeats(seats);

    if (!currentUser) {
      // User is logged out: redirect to login/register page and remember pending booking
      setPendingAuthResumeAction('checkout');
      setAuthInitialMode('login');
      setCurrentView('auth');
      return;
    }

    setShowCheckout(true);
  };

  // Called if user attempts to submit payment from inside the checkout modal while logged out
  const handleRequireLoginFromModal = () => {
    setShowCheckout(false);
    setPendingAuthResumeAction('checkout');
    setAuthInitialMode('login');
    setCurrentView('auth');
  };

  const handleBookingConfirmed = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
    setConfirmedBooking(newBooking);
    setShowCheckout(false);
    setSelectedSeats([]);
    setCurrentView('confirmation');
  };

  const handleNavChange = (view: 'home' | 'events' | 'stadiums' | 'my-bookings' | 'admin' | 'auth') => {
    if (view === 'admin') {
      onNavigateToAdmin();
      return;
    }
    if (view === 'auth') {
      setAuthInitialMode('login');
      setPendingAuthResumeAction(null);
      setCurrentView('auth');
      return;
    }
    setCurrentView(view);
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthInitialMode(mode);
    setCurrentView('auth');
  };

  const handleLogout = () => {
    customerAuthService.logout();
    setCurrentUser(null);
    if (showCheckout) {
      setShowCheckout(false);
    }
    if (currentView === 'my-bookings') {
      // Remain on page, will show logged out notice
    }
  };

  const handleAuthSuccess = (authenticatedUser: UserProfile) => {
    setCurrentUser(authenticatedUser as CustomerUser);

    // If user was redirected while booking/paying, resume right where they left off!
    if (pendingAuthResumeAction === 'checkout' && selectedEvent && selectedSeats.length > 0) {
      setPendingAuthResumeAction(null);
      setCurrentView('booking');
      setShowCheckout(true);
    } else if (pendingAuthResumeAction === 'booking' && selectedEvent) {
      setPendingAuthResumeAction(null);
      setCurrentView('booking');
    } else {
      setCurrentView('events');
    }
  };

  // Pending booking data for the AuthPage banner
  const pendingBookingData =
    selectedEvent && selectedSeats.length > 0
      ? {
          event: selectedEvent,
          seats: selectedSeats,
          totalAmount:
            selectedSeats.reduce((sum, s) => sum + s.price, 0) +
            selectedSeats.length * 125 +
            Math.round(
              (selectedSeats.reduce((sum, s) => sum + s.price, 0) + selectedSeats.length * 125) * 0.08
            )
        }
      : null;

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      {/* Top Notification Bar for Portal & Auth status */}
      <div className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-2">
          <Ticket className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">
            Customer Ticketing • Rajiv Gandhi International Cricket Stadium, Uppal
          </span>
          <span className="sm:hidden">Uppal Stadium Tickets</span>
          {currentUser ? (
            <span className="hidden md:inline-flex items-center space-x-1 ml-3 px-2 py-0.5 bg-black/25 rounded-full text-[11px] font-normal border border-white/20">
              <UserCheck className="w-3 h-3 text-emerald-300" />
              <span>Signed in: {currentUser.name}</span>
            </span>
          ) : (
            <span className="hidden md:inline-flex items-center space-x-1 ml-3 px-2 py-0.5 bg-black/25 rounded-full text-[11px] font-normal border border-white/20">
              <span>Guest Mode (Sign in to book)</span>
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {currentUser ? (
            <button
              id="topbar-logout-btn"
              onClick={handleLogout}
              className="bg-black/30 hover:bg-black/60 text-white px-2.5 py-1 rounded text-xs font-bold flex items-center space-x-1 transition-colors border border-white/20"
              title="Sign out of account"
            >
              <LogOut className="w-3 h-3" />
              <span className="hidden xs:inline">Sign Out</span>
            </button>
          ) : (
            <button
              id="topbar-signin-btn"
              onClick={() => handleOpenAuth('login')}
              className="bg-black/30 hover:bg-black/60 text-white px-2.5 py-1 rounded text-xs font-bold flex items-center space-x-1 transition-colors border border-white/20"
            >
              <LogIn className="w-3 h-3" />
              <span>Sign In</span>
            </button>
          )}

          <button
            id="topbar-switch-admin-btn"
            onClick={onNavigateToAdmin}
            className="bg-neutral-900/80 hover:bg-neutral-900 text-white px-3 py-1 rounded text-xs font-bold flex items-center space-x-1.5 transition-colors border border-white/20 shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            <span>Admin Portal</span>
          </button>
        </div>
      </div>

      {/* Customer Header Navbar */}
      <Navbar
        currentView={
          currentView === 'booking' || currentView === 'confirmation' ? 'events' : currentView
        }
        onNavigate={handleNavChange}
        selectedSeatsCount={selectedSeats.length}
        user={currentUser}
        onLogout={handleLogout}
        onOpenAuth={handleOpenAuth}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Areas */}
      <main className="flex-1 w-full flex flex-col">
        {/* VIEW: AUTHENTICATION (LOGIN / REGISTER) */}
        {currentView === 'auth' && (
          <div className="w-full flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <AuthPage
              initialMode={authInitialMode}
              pendingBooking={pendingBookingData}
              onAuthSuccess={handleAuthSuccess}
              onCancel={() => {
                if (pendingAuthResumeAction && selectedEvent) {
                  setCurrentView('booking');
                } else {
                  setCurrentView('home');
                }
              }}
            />
          </div>
        )}

        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div className="space-y-12 pb-16">
            <Hero
              onExploreEvents={() => setCurrentView('events')}
              onViewStadium={() => setCurrentView('stadiums')}
              onSelectEvent={handleSelectEvent}
              featuredEvent={SEEDED_EVENTS[0]}
            />

            {/* Quick Match Showcase */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                    Featured Fixtures
                  </h2>
                  <p className="text-xs text-neutral-400">
                    Book seats across North, South, East, and West stands with real-time seat availability
                  </p>
                </div>
                <button
                  id="home-view-all-events-btn"
                  onClick={() => setCurrentView('events')}
                  className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center space-x-1 uppercase tracking-wider"
                >
                  <span>View All Matches</span>
                  <Calendar className="w-3.5 h-3.5" />
                </button>
              </div>

              <EventGrid
                events={SEEDED_EVENTS}
                onSelectEvent={handleSelectEvent}
                externalSearchQuery={searchQuery}
              />
            </div>
          </div>
        )}

        {/* VIEW 2: ALL EVENTS / MATCHES */}
        {currentView === 'events' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
            <div className="border-b border-neutral-800 pb-4">
              <h1 className="text-3xl font-black uppercase tracking-tight text-white">
                Upcoming Cricket & Stadium Events
              </h1>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Select a fixture to access the interactive Rajiv Gandhi Stadium seat map and book tickets.
              </p>
            </div>

            <EventGrid
              events={SEEDED_EVENTS}
              onSelectEvent={handleSelectEvent}
              externalSearchQuery={searchQuery}
            />
          </div>
        )}

        {/* VIEW 3: INTERACTIVE SEAT BOOKING */}
        {currentView === 'booking' && selectedEvent && (
          <div className="w-full flex-1 flex flex-col">
            <BookingView
              event={selectedEvent}
              onBackToEvents={() => setCurrentView('events')}
              onProceedToCheckout={handleProceedToCheckout}
              selectedSeats={selectedSeats}
              onToggleSelectSeat={handleToggleSeat}
              onClearSeats={handleClearSeats}
              isLoggedIn={!!currentUser}
            />
          </div>
        )}

        {/* VIEW 4: STADIUM GUIDE & SPECIFICATIONS */}
        {currentView === 'stadiums' && (
          <StadiumsPage
            stadium={RAJIV_GANDHI_STADIUM}
            events={SEEDED_EVENTS}
            onSelectEvent={handleSelectEvent}
          />
        )}

        {/* VIEW 5: MY BOOKINGS / CUSTOMER PASSES */}
        {currentView === 'my-bookings' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full bg-neutral-900/50 rounded-xl my-6 border border-neutral-800">
            <MyBookings
              bookings={bookings}
              currentUser={currentUser}
              onBrowseEvents={() => setCurrentView('events')}
              onRequireLogin={() => handleOpenAuth('login')}
            />
          </div>
        )}

        {/* VIEW 6: BOOKING CONFIRMATION */}
        {currentView === 'confirmation' && confirmedBooking && (
          <div className="max-w-4xl mx-auto px-4 py-12 w-full">
            <BookingConfirmation
              booking={confirmedBooking}
              onViewTicket={() => setActiveDigitalTicket(confirmedBooking)}
              onBackToEvents={() => setCurrentView('events')}
            />
          </div>
        )}
      </main>

      {/* Checkout Modal */}
      {showCheckout && selectedEvent && (
        <CheckoutModal
          event={selectedEvent}
          selectedSeats={selectedSeats}
          currentUser={currentUser}
          onRequireLogin={handleRequireLoginFromModal}
          onClose={() => setShowCheckout(false)}
          onBookingConfirmed={handleBookingConfirmed}
        />
      )}

      {/* Digital Pass / QR Ticket Modal */}
      {activeDigitalTicket && (
        <DigitalTicket
          booking={activeDigitalTicket}
          onClose={() => setActiveDigitalTicket(null)}
        />
      )}

      {/* Customer Footer */}
      <footer className="w-full bg-black border-t border-neutral-800 py-8 px-4 sm:px-6 text-neutral-400 text-xs text-center space-y-2">
        <p className="font-semibold text-neutral-300">
          Rajiv Gandhi International Cricket Stadium • Uppal, Hyderabad
        </p>
        <p className="text-neutral-500">
          Official ticketing platform powered by Hyderabad Cricket Association (HCA). All rights reserved.
        </p>
      </footer>
    </div>
  );
};
