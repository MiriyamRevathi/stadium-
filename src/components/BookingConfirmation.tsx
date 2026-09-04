import React from 'react';
import { CheckCircle2, Ticket, ArrowLeft, Calendar, Clock, MapPin, Share2 } from 'lucide-react';
import { Booking } from '../types';

interface BookingConfirmationProps {
  booking: Booking;
  onViewTicket: () => void;
  onBackToEvents: () => void;
}

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  booking,
  onViewTicket,
  onBackToEvents
}) => {
  const sectionName = booking.seats?.[0]?.sectionName || 'A03';
  const rowLetter = booking.seats?.[0]?.row || 'C';
  const seatNumbers = (booking.seats || []).map((s) => s.number).join(', ');

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white border border-neutral-300 rounded-xl p-6 sm:p-10 shadow-lg flex flex-col items-center text-center space-y-6">
        {/* Confirmed Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Heading */}
        <div className="space-y-1">
          <span className="text-xs uppercase font-black tracking-widest text-emerald-600">
            Transaction Successful
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
            Booking Confirmed
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Your match pass has been secured and sent to{' '}
            <span className="font-bold text-neutral-800">{booking.customer.email}</span>
          </p>
        </div>

        {/* Booking Card Details */}
        <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-5 text-left space-y-4">
          {/* Booking ID */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-xs">
            <span className="text-neutral-500 font-bold uppercase tracking-wider">Booking ID</span>
            <span className="font-mono font-black text-base text-black">{booking.id}</span>
          </div>

          {/* Event & Venue */}
          <div className="space-y-1 text-xs">
            <span className="text-neutral-500 font-bold uppercase text-[10px]">Event</span>
            <h4 className="text-lg font-black text-black">{booking.eventName}</h4>
            <p className="text-neutral-600">{booking.venue}</p>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4 py-2 border-y border-neutral-200 text-xs">
            <div>
              <span className="text-neutral-500 font-bold uppercase text-[10px] block">Date</span>
              <span className="font-bold text-black text-sm">{booking.eventDate}</span>
            </div>
            <div>
              <span className="text-neutral-500 font-bold uppercase text-[10px] block">Time</span>
              <span className="font-bold text-black text-sm">{booking.eventTime}</span>
            </div>
          </div>

          {/* Seating Details Grid */}
          <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded border border-neutral-200 text-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 block">Section</span>
              <span className="text-lg font-black text-black">{sectionName}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 block">Row</span>
              <span className="text-lg font-black text-black">{rowLetter}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 block">Seats</span>
              <span className="text-lg font-black text-orange-600">{seatNumbers}</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
            <span className="text-xs uppercase font-bold text-neutral-500">Total Paid</span>
            <span className="text-xl font-black text-black">
              ₹{booking.total.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
          <button
            id="view-ticket-btn"
            onClick={onViewTicket}
            className="flex-1 py-3 px-6 bg-orange-500 hover:bg-orange-600 text-black font-black text-sm uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-md"
          >
            <Ticket className="w-4 h-4" />
            <span>View Ticket</span>
          </button>

          <button
            id="back-to-events-btn"
            onClick={onBackToEvents}
            className="flex-1 py-3 px-6 bg-black hover:bg-neutral-800 text-white font-black text-sm uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-neutral-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Events</span>
          </button>
        </div>
      </div>
    </div>
  );
};
