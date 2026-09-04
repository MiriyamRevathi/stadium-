import React from 'react';
import { ArrowRight, Trophy, MapPin, Users, Zap } from 'lucide-react';
import { StadiumEvent } from '../types';

interface HeroProps {
  onExploreEvents: () => void;
  onViewStadium: () => void;
  onSelectEvent: (event: StadiumEvent) => void;
  featuredEvent?: StadiumEvent;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreEvents,
  onViewStadium,
  onSelectEvent,
  featuredEvent
}) => {
  return (
    <section className="w-full bg-black text-white relative overflow-hidden border-b border-neutral-800">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full text-xs font-semibold text-orange-400">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Official Ticketing • Rajiv Gandhi International Cricket Stadium</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
              Book Your Seat.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Experience The Game.
              </span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Discover live sports events and choose your perfect seat at Hyderabad’s premier stadium.
              Explore our interactive seat map, select your vantage point, and secure instant digital match passes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="hero-explore-events-btn"
                onClick={onExploreEvents}
                className="px-6 py-3.5 bg-[#F97316] hover:bg-orange-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] transition-all shadow-sm flex items-center space-x-2"
              >
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-stadium-btn"
                onClick={onViewStadium}
                className="px-6 py-3.5 bg-white text-black hover:bg-neutral-100 font-black text-xs sm:text-sm uppercase tracking-widest rounded-[3px] transition-all border border-neutral-300 flex items-center space-x-2"
              >
                <span>View Stadium</span>
              </button>
            </div>

            {/* Quick Stadium Facts Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
              <div>
                <div className="text-2xl font-black text-white">55,000</div>
                <div className="text-xs text-neutral-400 font-medium">Seating Capacity</div>
              </div>
              <div>
                <div className="text-2xl font-black text-orange-500">4 Stands</div>
                <div className="text-xs text-neutral-400 font-medium">North, South, East, West</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-neutral-400 font-medium">Digital Turnstile Access</div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Realistic Uppal Stadium SVG Architectural Render */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full relative bg-neutral-950 border border-neutral-800 rounded-lg p-3 sm:p-5 shadow-2xl">
              {/* Stadium graphic header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  <span className="font-bold uppercase tracking-wider text-white">
                    Rajiv Gandhi Stadium (Uppal, HYD)
                  </span>
                </div>
                <span className="text-neutral-400 font-mono text-[11px]">BOWL ELEVATION VIEW</span>
              </div>

              {/* Responsive Stadium Graphic SVG */}
              <div className="w-full aspect-[16/11] relative mt-2 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 700 480"
                  className="w-full h-full select-none"
                  aria-label="Architectural visual of Uppal Cricket Stadium"
                >
                  <defs>
                    <radialGradient id="fieldGrass" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#15803d" />
                      <stop offset="60%" stopColor="#166534" />
                      <stop offset="100%" stopColor="#14532d" />
                    </radialGradient>
                    <linearGradient id="pitchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#b45309" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Outer Stadium Concrete Structure & Roof ring */}
                  <ellipse cx="350" cy="240" rx="330" ry="215" fill="#0A0A0A" stroke="#262626" strokeWidth="6" />
                  <ellipse cx="350" cy="240" rx="310" ry="200" fill="#171717" stroke="#333333" strokeWidth="2" />

                  {/* Tier 3: Upper Bowl Grandstands */}
                  <ellipse cx="350" cy="240" rx="285" ry="180" fill="#1F2937" stroke="#374151" strokeWidth="2" />
                  {/* Stand segment dividers */}
                  <line x1="350" y1="40" x2="350" y2="440" stroke="#0F172A" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="40" y1="240" x2="660" y2="240" stroke="#0F172A" strokeWidth="2" strokeDasharray="4 4" />

                  {/* Tier 2: Club & Corporate Hospitality Ring */}
                  <ellipse cx="350" cy="240" rx="240" ry="150" fill="#111827" stroke="#F97316" strokeWidth="2" />

                  {/* Tier 1: Lower Bowl */}
                  <ellipse cx="350" cy="240" rx="195" ry="120" fill="#1E293B" stroke="#475569" strokeWidth="2" />

                  {/* Inner Stadium Concourse & Boundary Line */}
                  <ellipse cx="350" cy="240" rx="150" ry="92" fill="#0F172A" />

                  {/* Cricket Field Oval Grass */}
                  <ellipse cx="350" cy="240" rx="138" ry="84" fill="url(#fieldGrass)" stroke="#FFFFFF" strokeWidth="2.5" />

                  {/* 30-Yard Infield White Circle */}
                  <ellipse cx="350" cy="240" rx="88" ry="52" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8" />

                  {/* Central 22-Yard Cricket Pitch */}
                  <rect x="339" y="210" width="22" height="60" rx="2" fill="url(#pitchGrad)" stroke="#78350f" strokeWidth="1" />
                  {/* Bowling & Batting Creases */}
                  <line x1="337" y1="218" x2="363" y2="218" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="337" y1="262" x2="363" y2="262" stroke="#FFFFFF" strokeWidth="1.5" />
                  {/* Stumps / Wickets */}
                  <circle cx="347" cy="216" r="1.5" fill="#FFFFFF" />
                  <circle cx="350" cy="216" r="1.5" fill="#FFFFFF" />
                  <circle cx="353" cy="216" r="1.5" fill="#FFFFFF" />
                  <circle cx="347" cy="264" r="1.5" fill="#FFFFFF" />
                  <circle cx="350" cy="264" r="1.5" fill="#FFFFFF" />
                  <circle cx="353" cy="264" r="1.5" fill="#FFFFFF" />

                  {/* Stand labels on the SVG */}
                  <text x="350" y="58" fill="#F97316" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                    NORTH PAVILION END
                  </text>
                  <text x="350" y="425" fill="#F97316" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                    SOUTH PAVILION (VVS LAXMAN END)
                  </text>
                  <text x="615" y="244" fill="#E2E8F0" fontSize="10" fontWeight="bold" textAnchor="middle">
                    EAST STAND
                  </text>
                  <text x="85" y="244" fill="#E2E8F0" fontSize="10" fontWeight="bold" textAnchor="middle">
                    WEST STAND
                  </text>

                  {/* Floodlight Towers at 4 corners */}
                  <g id="floodlight-ne">
                    <circle cx="590" cy="70" r="12" fill="#262626" stroke="#F97316" strokeWidth="2" />
                    <circle cx="590" cy="70" r="6" fill="#F97316" />
                    <path d="M 590 70 L 450 180" stroke="#F97316" strokeWidth="1" opacity="0.25" strokeDasharray="3 3" />
                  </g>
                  <g id="floodlight-nw">
                    <circle cx="110" cy="70" r="12" fill="#262626" stroke="#F97316" strokeWidth="2" />
                    <circle cx="110" cy="70" r="6" fill="#F97316" />
                    <path d="M 110 70 L 250 180" stroke="#F97316" strokeWidth="1" opacity="0.25" strokeDasharray="3 3" />
                  </g>
                  <g id="floodlight-se">
                    <circle cx="590" cy="410" r="12" fill="#262626" stroke="#F97316" strokeWidth="2" />
                    <circle cx="590" cy="410" r="6" fill="#F97316" />
                    <path d="M 590 410 L 450 300" stroke="#F97316" strokeWidth="1" opacity="0.25" strokeDasharray="3 3" />
                  </g>
                  <g id="floodlight-sw">
                    <circle cx="110" cy="410" r="12" fill="#262626" stroke="#F97316" strokeWidth="2" />
                    <circle cx="110" cy="410" r="6" fill="#F97316" />
                    <path d="M 110 410 L 250 300" stroke="#F97316" strokeWidth="1" opacity="0.25" strokeDasharray="3 3" />
                  </g>
                </svg>
              </div>

              {/* Bottom Quick Feature Tag on Hero Card */}
              {featuredEvent && (
                <div className="mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] font-bold rounded uppercase">
                      Next Match
                    </span>
                    <span className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-none">
                      {featuredEvent.name}
                    </span>
                  </div>
                  <button
                    id="hero-book-featured-btn"
                    onClick={() => onSelectEvent(featuredEvent)}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 underline"
                  >
                    Select Seats →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
