import React from 'react';
import {
  MapPin,
  Users,
  Calendar,
  Zap,
  CheckCircle2,
  Train,
  Car,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Stadium, StadiumEvent } from '../types';
import { RAJIV_GANDHI_STADIUM } from '../data/stadium';
import { STADIUM_SECTIONS } from '../data/sections';

interface StadiumsPageProps {
  stadium: Stadium;
  events: StadiumEvent[];
  onSelectEvent: (event: StadiumEvent) => void;
}

export const StadiumsPage: React.FC<StadiumsPageProps> = ({
  stadium = RAJIV_GANDHI_STADIUM,
  events,
  onSelectEvent
}) => {
  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Stadium Header Hero */}
      <div className="w-full bg-black text-white p-6 sm:p-10 rounded-xl border border-neutral-800 shadow-xl relative overflow-hidden">
        <div className="max-w-4xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-700 px-3 py-1 rounded-full text-xs font-bold text-orange-400">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Official Venue Profile</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            {stadium.name}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-300">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>{stadium.location}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Users className="w-4 h-4 text-orange-500" />
              <span className="font-bold text-white">{stadium.capacity.toLocaleString()} Capacity</span>
            </div>
            <div>
              <span className="text-neutral-400">Established: </span>
              <span className="font-bold text-white">{stadium.established}</span>
            </div>
            <div>
              <span className="text-neutral-400">Home Ground: </span>
              <span className="font-bold text-white">{stadium.homeTeam}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-2 max-w-3xl">
            {stadium.description}
          </p>
        </div>

        {/* Quick Numbers Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-neutral-800">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">55,000</div>
            <div className="text-xs text-neutral-400">All-Seater Bowl</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-orange-500">6 Towers</div>
            <div className="text-xs text-neutral-400">HD Broadcast Floodlights</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">2 Ends</div>
            <div className="text-xs text-neutral-400">Pavilion & VVS Laxman</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-orange-500">20 Gates</div>
            <div className="text-xs text-neutral-400">Rapid Turnstiles</div>
          </div>
        </div>
      </div>

      {/* Stadium Stands Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-black text-black uppercase tracking-tight">
          Grandstands & Seating Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* North Pavilion */}
          <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-lg text-black">North Pavilion</h3>
              <span className="px-2 py-0.5 bg-orange-500/10 text-orange-600 font-bold text-xs rounded">
                Tier 1 & Suites
              </span>
            </div>
            <p className="text-xs text-neutral-600">
              Behind bowler's arm view. Hosts players’ dressing rooms, press media center, and ultra-exclusive Corporate Suites A & B.
            </p>
            <div className="text-xs font-semibold text-neutral-700 pt-2 border-t border-neutral-100">
              Sections: A01 to A06, SUITE-A, SUITE-B
            </div>
          </div>

          {/* South Pavilion */}
          <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-lg text-black">South Pavilion</h3>
              <span className="px-2 py-0.5 bg-orange-500/10 text-orange-600 font-bold text-xs rounded">
                VVS Laxman End
              </span>
            </div>
            <p className="text-xs text-neutral-600">
              Named in honour of legend VVS Laxman. Premium views straight down the ground with dedicated VIP Enclosures A & B.
            </p>
            <div className="text-xs font-semibold text-neutral-700 pt-2 border-t border-neutral-100">
              Sections: C01 to C06, VIP-A, VIP-B
            </div>
          </div>

          {/* East Stand */}
          <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-lg text-black">East Stand</h3>
              <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 font-bold text-xs rounded">
                Square & Mid-Wicket
              </span>
            </div>
            <p className="text-xs text-neutral-600">
              Massive multi-tiered grandstand with panoramic square-of-the-wicket angles. Vibrant fan section with energetic chanting.
            </p>
            <div className="text-xs font-semibold text-neutral-700 pt-2 border-t border-neutral-100">
              Sections: B01 to B06, PREMIUM-A, E02, E03
            </div>
          </div>

          {/* West Stand */}
          <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-lg text-black">West Stand</h3>
              <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 font-bold text-xs rounded">
                Cover & Point
              </span>
            </div>
            <p className="text-xs text-neutral-600">
              Exceptional view of fielding placements and slips cordon. Features shaded upper tiers and club level terraces.
            </p>
            <div className="text-xs font-semibold text-neutral-700 pt-2 border-t border-neutral-100">
              Sections: D01 to D06, PREMIUM-B, E05, E06
            </div>
          </div>
        </div>
      </div>

      {/* Facilities & Transit Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Facilities */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-black uppercase tracking-tight flex items-center space-x-2">
            <Shield className="w-5 h-5 text-orange-500" />
            <span>Stadium Facilities</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {stadium.facilities.map((fac, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{fac}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transit & How to Reach */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-black uppercase tracking-tight flex items-center space-x-2">
            <Train className="w-5 h-5 text-orange-500" />
            <span>Transit & Access Guide</span>
          </h2>
          <div className="space-y-3 text-xs text-neutral-700">
            <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
              <div className="font-bold text-black flex items-center space-x-1.5">
                <Train className="w-3.5 h-3.5 text-orange-500" />
                <span>Hyderabad Metro (Blue Line)</span>
              </div>
              <p className="mt-1 text-neutral-600">
                Direct pedestrian walkway from <strong>Stadium Metro Station</strong> and <strong>NGRI Metro Station</strong> (500m walking distance).
              </p>
            </div>

            <div className="p-3 bg-neutral-50 rounded border border-neutral-200">
              <div className="font-bold text-black flex items-center space-x-1.5">
                <Car className="w-3.5 h-3.5 text-orange-500" />
                <span>Road & Dedicated Parking</span>
              </div>
              <p className="mt-1 text-neutral-600">
                Accessible via Inner Ring Road and Ramanthapur Road. Reserved parking lots for pass holders at Genpact circle and Uppal ground.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Events at this Stadium */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-black uppercase tracking-tight">
            Upcoming Matches at Uppal Stadium
          </h2>
          <span className="text-xs text-neutral-500 font-bold">{events.length} Matches Scheduled</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm flex flex-col justify-between space-y-4 hover:border-orange-500 transition-colors"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 block">
                  {evt.tournament}
                </span>
                <h3 className="text-lg font-black text-black mt-1">{evt.name}</h3>
                <p className="text-xs text-neutral-500 mt-0.5">{evt.date} • {evt.time}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Starting from</span>
                  <span className="font-black text-black text-base">
                    ₹{evt.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  id={`stadium-page-book-${evt.id}`}
                  onClick={() => onSelectEvent(evt)}
                  className="px-3.5 py-2 bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs uppercase rounded transition-colors flex items-center space-x-1"
                >
                  <span>Book Seats</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
