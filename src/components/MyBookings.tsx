import React, { useState } from 'react';
import { Ticket, Calendar, Clock, MapPin, CheckCircle, ChevronRight, ShoppingBag, LogIn } from 'lucide-react';
import { Booking, UserProfile } from '../types';
import { DigitalTicket } from './DigitalTicket';

interface MyBookingsProps {
  bookings: Booking[];
  currentUser?: UserProfile | null;
  onBrowseEvents: () => void;
  onRequireLogin?: () => void;
}

export const MyBookings: React.FC<MyBookingsProps> = ({
  bookings,
  currentUser,
  onBrowseEvents,
  onRequireLogin
}) => {
  const [selectedBookingForTicket, setSelectedBookingForTicket] = useState<Booking | null>(null);

  // Filter bookings for current logged in user if logged in
  const userBookings = currentUser
    ? bookings.filter(
        (b) => !b.customer?.email || b.customer.email.toLowerCase() === currentUser.email.toLowerCase()
      )
    : [];

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="w-full mb-8 border-b border-neutral-700 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">
            My Bookings
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Access your active match passes, view digital QR tickets, and check booking history.
          </p>
        </div>

        <button
          onClick={onBrowseEvents}
          className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors self-start sm:self-auto"
        >
          Book More Tickets
        </button>
      </div>

      {/* When user is logged out */}
      {!currentUser ? (
        <div className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-10 text-center my-6">
          <div className="w-14 h-14 bg-orange-500/10 text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
            <LogIn className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Sign in to View Your Bookings</h3>
          <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
            You are currently logged out. Sign in to access your digital tickets, match passes, and payment receipts.
          </p>
          {onRequireLogin && (
            <button
              id="my-bookings-login-cta"
              onClick={onRequireLogin}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-lg"
            >
              Sign In to Your Account
            </button>
          )}
        </div>
      ) : userBookings.length > 0 ? (
        <div className="space-y-4">
          {userBookings.map((booking) => {
            const sectionName = booking.seats?.[0]?.sectionName || 'A03';
            const rowLetter = booking.seats?.[0]?.row || 'C';
            const seatNumbers = (booking.seats || []).map((s) => s.number).join(', ');

            return (
              <div
                key={booking.id}
                id={`booking-card-${booking.id}`}
                className="w-full bg-white text-black border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:border-orange-500 transition-all p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left: Event & Match Info */}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase rounded-full tracking-wider border border-emerald-300 flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>{booking.status}</span>
                    </span>
                    <span className="text-xs font-mono text-neutral-400 font-bold">
                      {booking.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-black">{booking.eventName}</h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      <span className="font-semibold text-neutral-800">{booking.eventDate}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{booking.eventTime}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      <span className="truncate">{booking.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Middle: Seating Pills */}
                <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 grid grid-cols-3 gap-3 text-center min-w-[240px]">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-neutral-400">
                      Section
                    </span>
                    <span className="text-base font-black text-black">{sectionName}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-neutral-400">
                      Row
                    </span>
                    <span className="text-base font-black text-black">{rowLetter}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-neutral-400">
                      Seats
                    </span>
                    <span className="text-base font-black text-orange-600">{seatNumbers}</span>
                  </div>
                </div>

                {/* Right: Total Price & View Ticket Button */}
                <div className="flex items-center justify-between lg:justify-end space-x-6 border-t lg:border-t-0 pt-4 lg:pt-0 border-neutral-100">
                  <div className="text-left lg:text-right">
                    <span className="block text-[10px] uppercase font-bold text-neutral-400">
                      Total Paid
                    </span>
                    <span className="text-lg font-black text-black">
                      ₹{booking.total.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    id={`view-ticket-btn-${booking.id}`}
                    onClick={() => setSelectedBookingForTicket(booking)}
                    className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-black font-black text-xs uppercase tracking-wider rounded transition-all flex items-center space-x-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>View Ticket</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-12 text-center my-8">
          <ShoppingBag className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-neutral-800">No Bookings Yet</h3>
          <p className="text-sm text-neutral-500 mt-1 max-w-md mx-auto">
            You don't have any booked match passes. Browse upcoming events at Uppal Stadium to book your seats.
          </p>
          <button
            onClick={onBrowseEvents}
            className="mt-4 px-5 py-2.5 bg-orange-500 text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-orange-600 transition-colors"
          >
            Explore Events
          </button>
        </div>
      )}

      {/* Digital Ticket Modal */}
      {selectedBookingForTicket && (
        <DigitalTicket
          booking={selectedBookingForTicket}
          onClose={() => setSelectedBookingForTicket(null)}
        />
      )}
    </div>
  );
};
