import React, { useState } from 'react';
import {
  X,
  CreditCard,
  QrCode,
  Building,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Seat, StadiumEvent, Booking, CustomerInfo, UserProfile } from '../types';
import { STADIUM_SECTIONS } from '../data/sections';
import { CURRENT_USER } from '../data/users';

interface CheckoutModalProps {
  event: StadiumEvent;
  selectedSeats: Seat[];
  currentUser?: UserProfile | null;
  onRequireLogin?: () => void;
  onClose: () => void;
  onBookingConfirmed: (newBooking: Booking) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  event,
  selectedSeats,
  currentUser,
  onRequireLogin,
  onClose,
  onBookingConfirmed
}) => {
  // Form state
  const [customer, setCustomer] = useState<CustomerInfo>({
    fullName: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'Net Banking'>('UPI');
  const [upiId, setUpiId] = useState('user@okhdfcbank');
  const [cardNumber, setCardNumber] = useState('4532 8921 7840 9102');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvv, setCardCvv] = useState('419');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update customer fields if currentUser changes
  React.useEffect(() => {
    if (currentUser) {
      setCustomer({
        fullName: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone
      });
    }
  }, [currentUser]);

  // Calculations
  const ticketPrice = selectedSeats.reduce((sum, s) => sum + s.price, 0);
  const convenienceFee = selectedSeats.length * 125;
  const taxes = Math.round((ticketPrice + convenienceFee) * 0.08);
  const grandTotal = ticketPrice + convenienceFee + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user is logged out - if so, redirect immediately to login page
    if (!currentUser) {
      if (onRequireLogin) {
        onRequireLogin();
      }
      return;
    }

    if (!customer.fullName.trim() || !customer.email.trim() || !customer.phone.trim()) {
      setErrorMessage('Please provide your name, email, and mobile number.');
      return;
    }

    setErrorMessage('');
    setIsProcessing(true);

    // Simulate 1 second payment processing
    setTimeout(() => {
      setIsProcessing(false);

      // Generate random booking ID in format STAD-2026-XXXXXX
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const bookingId = `STAD-2026-${randomNum}`;

      const bookingSeats = selectedSeats.map((s) => {
        const sec = STADIUM_SECTIONS.find((secItem) => secItem.id === s.sectionId);
        return {
          id: s.id,
          sectionId: s.sectionId,
          sectionName: sec ? sec.name : s.sectionId,
          row: s.row,
          number: s.number,
          price: s.price,
          category: s.category
        };
      });

      const newBooking: Booking = {
        id: bookingId,
        eventId: event.id,
        eventName: event.name,
        eventDate: event.date,
        eventTime: event.time,
        venue: `${event.venue}, ${event.venueLocation}`,
        customer,
        seats: bookingSeats,
        ticketPrice,
        convenienceFee,
        taxes,
        total: grandTotal,
        bookingDate: new Date().toISOString(),
        paymentMethod,
        paymentStatus: 'Paid',
        status: 'Confirmed'
      };

      onBookingConfirmed(newBooking);
    }, 1000);
  };

  return (
    <div
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-2xl border border-neutral-300 flex flex-col relative my-auto">
        {/* Header */}
        <div className="bg-black text-white p-4 sm:p-5 flex items-center justify-between border-b border-neutral-800">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-orange-400">
              Secure Checkout
            </span>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
              {event.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6 overflow-y-auto max-h-[80vh]">
          {!currentUser && (
            <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg flex items-center justify-between text-amber-900 text-xs">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>Account required:</strong> You are currently logged out. Please sign in or register to complete payment and receive your digital ticket pass.
                </span>
              </div>
              {onRequireLogin && (
                <button
                  type="button"
                  onClick={onRequireLogin}
                  className="ml-3 shrink-0 px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded text-xs transition-colors"
                >
                  Sign In Now
                </button>
              )}
            </div>
          )}

          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded flex items-center space-x-2 text-red-700 text-xs font-bold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Col: Customer & Payment */}
            <div className="lg:col-span-7 space-y-5">
              {/* Customer Info Section */}
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-black border-b border-neutral-200 pb-1">
                  1. Contact Information
                </h3>
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                    Full Name
                  </label>
                  <input
                    id="checkout-name-input"
                    type="text"
                    required
                    value={customer.fullName}
                    onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                    className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded focus:border-orange-500 focus:outline-none"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      id="checkout-email-input"
                      type="email"
                      required
                      value={customer.email}
                      onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                      className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded focus:border-orange-500 focus:outline-none"
                      placeholder="e.g. rahul@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Mobile Number
                    </label>
                    <input
                      id="checkout-phone-input"
                      type="tel"
                      required
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      className="w-full text-xs p-2.5 bg-neutral-50 border border-neutral-300 rounded focus:border-orange-500 focus:outline-none"
                      placeholder="e.g. +91 98490 12345"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods (Simulated) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
                  <h3 className="text-xs font-black uppercase tracking-wider text-black">
                    2. Payment Method
                  </h3>
                  <span className="text-[10px] text-neutral-500 font-medium">Demo Simulator</span>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('UPI')}
                    className={`py-2 px-3 text-xs font-bold rounded border flex flex-col items-center justify-center space-y-1 transition-colors ${
                      paymentMethod === 'UPI'
                        ? 'border-orange-500 bg-orange-50 text-orange-950 ring-1 ring-orange-500'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-orange-600" />
                    <span>UPI / QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Card')}
                    className={`py-2 px-3 text-xs font-bold rounded border flex flex-col items-center justify-center space-y-1 transition-colors ${
                      paymentMethod === 'Card'
                        ? 'border-orange-500 bg-orange-50 text-orange-950 ring-1 ring-orange-500'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-orange-600" />
                    <span>Cards</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Net Banking')}
                    className={`py-2 px-3 text-xs font-bold rounded border flex flex-col items-center justify-center space-y-1 transition-colors ${
                      paymentMethod === 'Net Banking'
                        ? 'border-orange-500 bg-orange-50 text-orange-950 ring-1 ring-orange-500'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    <Building className="w-4 h-4 text-orange-600" />
                    <span>Net Banking</span>
                  </button>
                </div>

                {/* Sub-form based on method */}
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-xs space-y-3">
                  {paymentMethod === 'UPI' && (
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase">
                        UPI ID (VPA)
                      </label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="w-full p-2 bg-white border border-neutral-300 rounded focus:border-orange-500 focus:outline-none"
                        placeholder="username@okhdfcbank"
                      />
                      <div className="flex items-center space-x-2 text-[10px] text-neutral-500">
                        <span>Instant verification with Google Pay, PhonePe, Paytm</span>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'Card' && (
                    <div className="space-y-2">
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase">
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full p-2 bg-white border border-neutral-300 rounded focus:border-orange-500 focus:outline-none font-mono"
                          placeholder="4532 •••• •••• ••••"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-700 uppercase">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="w-full p-2 bg-white border border-neutral-300 rounded focus:border-orange-500 focus:outline-none font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-neutral-700 uppercase">
                            CVV
                          </label>
                          <input
                            type="password"
                            maxLength={4}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            className="w-full p-2 bg-white border border-neutral-300 rounded focus:border-orange-500 focus:outline-none font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'Net Banking' && (
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase">
                        Select Bank
                      </label>
                      <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full p-2 bg-white border border-neutral-300 rounded focus:border-orange-500 focus:outline-none"
                      >
                        <option value="HDFC Bank">HDFC Bank</option>
                        <option value="State Bank of India">State Bank of India (SBI)</option>
                        <option value="ICICI Bank">ICICI Bank</option>
                        <option value="Axis Bank">Axis Bank</option>
                        <option value="Kotak Mahindra">Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Col: Order Summary & Confirm */}
            <div className="lg:col-span-5 bg-neutral-900 text-white p-4 sm:p-5 rounded-lg flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-orange-400 border-b border-neutral-800 pb-2 mb-3">
                  Order Breakdown
                </h3>

                {/* Event info */}
                <div className="space-y-1 mb-4 text-xs">
                  <span className="font-black text-white block text-sm">{event.name}</span>
                  <p className="text-neutral-400">{event.date} • {event.time}</p>
                  <p className="text-neutral-400 text-[11px]">{event.venue}</p>
                </div>

                {/* Selected seats list */}
                <div className="space-y-2 max-h-36 overflow-y-auto pr-1 border-t border-neutral-800 pt-3 text-xs">
                  <span className="text-[10px] uppercase font-bold text-neutral-400">
                    Seats ({selectedSeats.length})
                  </span>
                  {selectedSeats.map((seat) => {
                    const sec = STADIUM_SECTIONS.find((s) => s.id === seat.sectionId);
                    return (
                      <div
                        key={seat.id}
                        className="flex items-center justify-between text-neutral-300 py-1 border-b border-neutral-800/60"
                      >
                        <span>
                          Sec {sec?.name} • Row {seat.row} • Seat {seat.number}
                        </span>
                        <span className="font-bold text-white">₹{seat.price.toLocaleString('en-IN')}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-1.5 pt-4 text-xs border-t border-neutral-800">
                  <div className="flex justify-between text-neutral-400">
                    <span>Ticket Price</span>
                    <span className="text-white font-medium">₹{ticketPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Convenience Fee</span>
                    <span className="text-white font-medium">₹{convenienceFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Taxes & GST (8%)</span>
                    <span className="text-white font-medium">₹{taxes.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-neutral-700 text-sm">
                    <span className="font-black uppercase text-white">Total Amount</span>
                    <span className="text-xl font-black text-orange-400">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="confirm-booking-btn"
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 disabled:bg-neutral-700 text-black font-black text-sm uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-md"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Processing Booking...</span>
                    </>
                  ) : !currentUser ? (
                    <>
                      <Lock className="w-4 h-4 text-black" />
                      <span>Sign In to Pay (₹{grandTotal.toLocaleString('en-IN')})</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 text-black" />
                      <span>Confirm Booking (₹{grandTotal.toLocaleString('en-IN')})</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-neutral-400 text-center mt-2 flex items-center justify-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-orange-400 inline" />
                  <span>Simulated transaction • Official STADIA guarantee</span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
