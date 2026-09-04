import React, { useState, useEffect } from 'react';
import {
  AdminEvent,
  EventPricingMatrix,
  SeatCategory,
  Section
} from '../../../types/admin';
import { Tag, IndianRupee, RotateCcw, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

interface PricingViewProps {
  events: AdminEvent[];
  sections: Section[];
  pricingMatrices: Record<string, EventPricingMatrix>;
  selectedEventId: string;
  onSelectEvent: (eventId: string) => void;
  onUpdatePricing: (eventId: string, matrix: EventPricingMatrix) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  events,
  sections,
  pricingMatrices,
  selectedEventId,
  onSelectEvent,
  onUpdatePricing
}) => {
  const activeEvent = events.find((e) => e.id === selectedEventId) || events[0];
  const currentMatrix = pricingMatrices[activeEvent?.id] || {
    eventId: activeEvent?.id,
    generalPrice: 500,
    premiumPrice: 1200,
    vipPrice: 3500,
    hospitalityPrice: 7500,
    updatedAt: new Date().toISOString()
  };

  const [generalPrice, setGeneralPrice] = useState(currentMatrix.generalPrice);
  const [premiumPrice, setPremiumPrice] = useState(currentMatrix.premiumPrice);
  const [vipPrice, setVipPrice] = useState(currentMatrix.vipPrice);
  const [hospitalityPrice, setHospitalityPrice] = useState(currentMatrix.hospitalityPrice);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setGeneralPrice(currentMatrix.generalPrice);
    setPremiumPrice(currentMatrix.premiumPrice);
    setVipPrice(currentMatrix.vipPrice);
    setHospitalityPrice(currentMatrix.hospitalityPrice);
    setIsSaved(false);
  }, [activeEvent?.id, currentMatrix]);

  // Section seats by category
  const seatsByCategory = sections.reduce(
    (acc, sec) => {
      acc[sec.category] = (acc[sec.category] || 0) + sec.totalSeats;
      return acc;
    },
    {} as Record<SeatCategory, number>
  );

  const estTotalRevenue =
    (seatsByCategory.General || 0) * generalPrice +
    (seatsByCategory.Premium || 0) * premiumPrice +
    (seatsByCategory.VIP || 0) * vipPrice +
    (seatsByCategory.Hospitality || 0) * hospitalityPrice;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeEvent) return;

    onUpdatePricing(activeEvent.id, {
      eventId: activeEvent.id,
      generalPrice: Number(generalPrice),
      premiumPrice: Number(premiumPrice),
      vipPrice: Number(vipPrice),
      hospitalityPrice: Number(hospitalityPrice),
      updatedAt: new Date().toISOString()
    });

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleResetDefaults = () => {
    setGeneralPrice(500);
    setPremiumPrice(1200);
    setVipPrice(3500);
    setHospitalityPrice(7500);
  };

  const pricingTiers = [
    {
      category: 'General' as SeatCategory,
      price: generalPrice,
      setter: setGeneralPrice,
      base: 500,
      seats: seatsByCategory.General || 240,
      description: 'East & West Upper and Lower Grandstands. High fan volume entry.'
    },
    {
      category: 'Premium' as SeatCategory,
      price: premiumPrice,
      setter: setPremiumPrice,
      base: 1200,
      seats: seatsByCategory.Premium || 252,
      description: 'East & West Club and Centerline seating with prime pitch sightlines.'
    },
    {
      category: 'VIP' as SeatCategory,
      price: vipPrice,
      setter: setVipPrice,
      base: 3500,
      seats: seatsByCategory.VIP || 180,
      description: 'North Pavilion & South VVS Laxman Lower tiers with exclusive lounge access.'
    },
    {
      category: 'Hospitality' as SeatCategory,
      price: hospitalityPrice,
      setter: setHospitalityPrice,
      base: 7500,
      seats: seatsByCategory.Hospitality || 120,
      description: 'Corporate Hospitality Suites, gourmet dining buffet, and private air-conditioned balcony.'
    }
  ];

  return (
    <div className="space-y-6 text-white">
      {/* Header & Event Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
        <div>
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block">
            Pricing Engine
          </span>
          <h3 className="text-base font-bold text-white tracking-wide">
            Event-Specific Pricing Matrix
          </h3>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-neutral-400">Select Event:</span>
          <select
            id="pricing-event-selector"
            value={activeEvent?.id || ''}
            onChange={(e) => onSelectEvent(e.target.value)}
            className="bg-neutral-950 border border-neutral-700 text-white rounded-lg px-3 py-2 text-xs font-semibold focus:outline-none focus:border-orange-500"
          >
            {events.map((evt) => (
              <option key={evt.id} value={evt.id}>
                {evt.name} ({evt.date})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Revenue Estimator Summary Card */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs text-neutral-400 block">
            Max Potential Sellout Revenue ({activeEvent?.name})
          </span>
          <div className="text-3xl font-black text-orange-400 mt-1 font-mono">
            ₹{estTotalRevenue.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-neutral-500">
            Based on 100% occupancy of 792 active stadium sample seats across all 4 category tiers.
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={handleResetDefaults}
            className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Baseline</span>
          </button>
        </div>
      </div>

      {/* Pricing Form / Matrix Cards */}
      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pricingTiers.map((tier) => {
            const markupPercent = Math.round(((tier.price - tier.base) / tier.base) * 100);
            const tierPotential = tier.seats * tier.price;

            return (
              <div
                key={tier.category}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                    <div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          tier.category === 'Hospitality'
                            ? 'bg-purple-950 text-purple-400 border border-purple-800'
                            : tier.category === 'VIP'
                            ? 'bg-amber-950 text-amber-400 border border-amber-800'
                            : tier.category === 'Premium'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-blue-950 text-blue-400 border border-blue-800'
                        }`}
                      >
                        {tier.category} Tier
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">
                        {tier.category} Tickets
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] text-neutral-400 block">Total Seats</span>
                      <span className="text-sm font-bold font-mono text-white">
                        {tier.seats} seats
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 mb-4">{tier.description}</p>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">
                        Event Ticket Price (₹)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500 text-sm">
                          ₹
                        </div>
                        <input
                          type="number"
                          id={`pricing-input-${tier.category.toLowerCase()}`}
                          value={tier.price}
                          onChange={(e) => tier.setter(Math.max(0, Number(e.target.value)))}
                          className="w-full pl-8 pr-3 py-2 bg-neutral-950 border border-neutral-700 text-white rounded-lg text-sm font-bold focus:outline-none focus:border-orange-500 font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs bg-neutral-950 p-2.5 rounded-lg border border-neutral-800">
                      <div>
                        <span className="text-neutral-500 block text-[10px]">Physical Base Price</span>
                        <span className="font-semibold text-neutral-300 font-mono">₹{tier.base}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block text-[10px]">Multiplier / Markup</span>
                        <span
                          className={`font-semibold font-mono ${
                            markupPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {markupPercent >= 0 ? `+${markupPercent}%` : `${markupPercent}%`}
                        </span>
                      </div>
                      <div className="col-span-2 pt-1 border-t border-neutral-800">
                        <span className="text-neutral-500 text-[10px] block">Category Yield:</span>
                        <span className="font-bold font-mono text-orange-400">
                          ₹{tierPotential.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action bar */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center justify-between">
          <div className="text-xs text-neutral-400">
            Last modified:{' '}
            <span className="text-neutral-200">{new Date(currentMatrix.updatedAt).toLocaleString()}</span>
          </div>

          <div className="flex items-center space-x-3">
            {isSaved && (
              <div className="text-emerald-400 text-xs font-bold flex items-center space-x-1.5 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>Pricing matrix applied successfully!</span>
              </div>
            )}

            <button
              type="submit"
              id="save-pricing-matrix-btn"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-orange-950"
            >
              Apply Pricing to Event Seats
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
