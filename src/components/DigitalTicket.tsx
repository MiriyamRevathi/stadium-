import React, { useRef } from 'react';
import { Ticket, Calendar, Clock, MapPin, Download, Printer, X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Booking } from '../types';

interface DigitalTicketProps {
  booking: Booking;
  onClose: () => void;
}

export const DigitalTicket: React.FC<DigitalTicketProps> = ({ booking, onClose }) => {
  const ticketRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = () => {
    window.print();
  };

  // Group seats nicely
  const seatDetails = (booking.seats || []).map((s) => `Sec ${s.sectionName} / Row ${s.row} / Seat ${s.number}`).join(' • ');

  return (
    <div
      id="digital-ticket-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-2xl border border-neutral-300 flex flex-col relative my-auto animate-in zoom-in-95 duration-200">
        {/* Modal Top Actions */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center space-x-2">
            <Ticket className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-black uppercase tracking-wider">
              Official Digital Match Pass
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="text-xs text-neutral-300 hover:text-white flex items-center space-x-1 font-bold"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Realistic Match Pass Body */}
        <div ref={ticketRef} className="p-6 sm:p-8 bg-neutral-100 flex flex-col space-y-6">
          <div className="bg-white rounded-lg border-2 border-neutral-800 shadow-lg overflow-hidden relative">
            {/* Header Brand Bar */}
            <div className="bg-black text-white p-4 sm:p-6 flex items-center justify-between border-b-2 border-orange-500">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center font-black text-black text-xl">
                  S
                </div>
                <div>
                  <h2 className="text-xl font-black tracking-widest text-white">
                    STAD<span className="text-orange-500">IA</span>
                  </h2>
                  <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                    Rajiv Gandhi Intl Stadium • Uppal
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="px-2.5 py-1 bg-emerald-500 text-black text-[10px] font-black uppercase rounded-full tracking-wider">
                  {booking.status}
                </span>
                <p className="text-xs font-mono text-neutral-400 mt-1 font-bold">
                  {booking.id}
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">
                  Confirmed Match Ticket
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-0.5">
                  {booking.eventName}
                </h3>
              </div>

              {/* Date, Time & Venue Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-neutral-200 text-xs">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-neutral-700">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="font-bold text-black">{booking.eventDate}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-700">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="font-bold text-black">{booking.eventTime} IST</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2 text-neutral-700">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-black block">{booking.venue}</span>
                    <span className="text-[11px] text-neutral-500">Turnstile Entry Open 3h Prior</span>
                  </div>
                </div>
              </div>

              {/* Seat Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-400">
                    Section
                  </span>
                  <span className="text-xl font-black text-black">
                    {booking.seats[0]?.sectionName || 'A03'}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-400">
                    Row
                  </span>
                  <span className="text-xl font-black text-black">
                    {booking.seats[0]?.row || 'C'}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-400">
                    Seat(s)
                  </span>
                  <span className="text-xl font-black text-orange-600">
                    {(booking.seats || []).map((s) => s.number).join(', ') || 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-neutral-400">
                    Category
                  </span>
                  <span className="text-base font-bold text-black mt-1 inline-block">
                    {booking.seats[0]?.category || 'Premium'}
                  </span>
                </div>
              </div>

              {/* Ticket Holder & Payment Info */}
              <div className="flex flex-wrap items-center justify-between text-xs pt-2 text-neutral-600">
                <div>
                  <span className="text-neutral-400">Ticket Holder: </span>
                  <span className="font-bold text-black">{booking.customer.fullName}</span>
                </div>
                <div>
                  <span className="text-neutral-400">Total Paid: </span>
                  <span className="font-black text-black text-sm">
                    ₹{booking.total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Simulated SVG Barcode & QR Code Section */}
              <div className="pt-4 border-t-2 border-dashed border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* SVG Simulated Barcode */}
                <div className="flex flex-col items-start space-y-1">
                  <svg className="w-56 h-12" viewBox="0 0 240 50">
                    {/* Deterministic barcode vertical lines */}
                    {[
                      4, 10, 16, 22, 26, 32, 40, 44, 52, 60, 64, 72, 80, 84, 92, 98, 104,
                      110, 116, 124, 130, 138, 144, 150, 158, 166, 172, 180, 186, 192,
                      200, 208, 216, 224, 232
                    ].map((x, i) => (
                      <rect
                        key={i}
                        x={x}
                        y="0"
                        width={i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1}
                        height="40"
                        fill="#000000"
                      />
                    ))}
                    <text x="120" y="48" fontSize="9" textAnchor="middle" fill="#555555" fontFamily="monospace">
                      {booking.id}
                    </text>
                  </svg>
                  <span className="text-[10px] text-neutral-400">Scan at Turnstile Gate</span>
                </div>

                {/* SVG Simulated QR Code Visual */}
                <div className="flex items-center space-x-3 bg-neutral-50 p-2 rounded border border-neutral-200">
                  <svg className="w-16 h-16" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="#FFFFFF" />
                    {/* Top-left position square */}
                    <rect x="5" y="5" width="28" height="28" fill="#000000" />
                    <rect x="9" y="9" width="20" height="20" fill="#FFFFFF" />
                    <rect x="13" y="13" width="12" height="12" fill="#000000" />

                    {/* Top-right position square */}
                    <rect x="67" y="5" width="28" height="28" fill="#000000" />
                    <rect x="71" y="9" width="20" height="20" fill="#FFFFFF" />
                    <rect x="75" y="13" width="12" height="12" fill="#000000" />

                    {/* Bottom-left position square */}
                    <rect x="5" y="67" width="28" height="28" fill="#000000" />
                    <rect x="9" y="71" width="20" height="20" fill="#FFFFFF" />
                    <rect x="13" y="75" width="12" height="12" fill="#000000" />

                    {/* Simulated data blocks */}
                    <rect x="40" y="10" width="8" height="8" fill="#000000" />
                    <rect x="52" y="15" width="8" height="8" fill="#000000" />
                    <rect x="42" y="28" width="6" height="6" fill="#F97316" />
                    <rect x="15" y="42" width="6" height="6" fill="#000000" />
                    <rect x="25" y="50" width="8" height="8" fill="#000000" />
                    <rect x="40" y="42" width="18" height="18" fill="#000000" />
                    <rect x="45" y="47" width="8" height="8" fill="#FFFFFF" />
                    <rect x="65" y="45" width="6" height="12" fill="#000000" />
                    <rect x="78" y="50" width="12" height="6" fill="#000000" />
                    <rect x="45" y="70" width="10" height="10" fill="#000000" />
                    <rect x="65" y="72" width="8" height="8" fill="#F97316" />
                    <rect x="80" y="80" width="12" height="12" fill="#000000" />
                  </svg>
                  <div className="text-[10px] text-neutral-500 font-mono">
                    <p className="font-bold text-black">SECURE ENTRY</p>
                    <p>VALIDATED HCA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-neutral-50 p-4 border-t border-neutral-200 flex items-center justify-between text-xs">
          <span className="text-neutral-500">Keep this pass ready on your phone at Uppal Stadium gates.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
