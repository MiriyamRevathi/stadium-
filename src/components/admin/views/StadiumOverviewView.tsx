import React from 'react';
import { Stand, Section, AdminSettings, AdminTab } from '../../../types/admin';
import { Building2, MapPin, Layers, Users, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StadiumOverviewViewProps {
  stands: Stand[];
  sections: Section[];
  settings: AdminSettings;
  onNavigate: (tab: AdminTab) => void;
}

export const StadiumOverviewView: React.FC<StadiumOverviewViewProps> = ({
  stands,
  sections,
  settings,
  onNavigate
}) => {
  return (
    <div className="space-y-6 text-white">
      {/* Stadium Identity Hero Banner */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-orange-400 uppercase tracking-widest mb-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{settings.stadiumLocation}</span>
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              {settings.stadiumName}
            </h2>
            <p className="text-sm text-neutral-400 max-w-3xl mt-2 leading-relaxed">
              Premier international sports arena located in Uppal, Hyderabad, Telangana. Home of high-voltage international cricket series, Deccan Premier League finals, and world-class live entertainment events. Renowned for its electric atmosphere, panoramic bowl architecture, Pavilion End and VVS Laxman Pavilion.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
            <button
              id="overview-open-map-btn"
              onClick={() => onNavigate('stadium-map')}
              className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center space-x-2 shadow-lg shadow-orange-950"
            >
              <span>Open Interactive Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="overview-open-stands-btn"
              onClick={() => onNavigate('stands')}
              className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center space-x-2"
            >
              <span>Manage Stands ({stands.length})</span>
            </button>
          </div>
        </div>

        {/* Stadium Key Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-neutral-800">
          <div>
            <span className="text-xs text-neutral-400 block">Total Capacity</span>
            <span className="text-xl font-black text-orange-400">{settings.totalCapacity.toLocaleString()}</span>
          </div>
          <div>
            <span className="text-xs text-neutral-400 block">Number of Stands</span>
            <span className="text-xl font-black text-white">4 Major Stands</span>
          </div>
          <div>
            <span className="text-xs text-neutral-400 block">Configured Sections</span>
            <span className="text-xl font-black text-white">{sections.length} Sections</span>
          </div>
          <div>
            <span className="text-xs text-neutral-400 block">Turnstile Gates</span>
            <span className="text-xl font-black text-white">{settings.gates.length} Gates</span>
          </div>
        </div>
      </div>

      {/* 4 STANDS BREAKDOWN CARDS */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-white uppercase tracking-wider">
            Stadium Stand Architecture
          </h3>
          <span className="text-xs text-neutral-400">
            Click any stand to manage gates and sections
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stands.map((stand) => {
            const standSections = sections.filter((s) => s.standId === stand.id);
            const totalStandSeats = standSections.reduce((acc, s) => acc + s.totalSeats, 0);

            return (
              <div
                key={stand.id}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                    <div>
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                        {stand.code} STAND
                      </span>
                      <h4 className="text-lg font-bold text-white">{stand.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-neutral-400 block">Design Capacity</span>
                      <span className="text-sm font-bold text-white font-mono">
                        {stand.capacity.toLocaleString()} Seats
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                    {stand.description}
                  </p>

                  {/* Section Badges */}
                  <div className="mb-4">
                    <span className="text-[11px] text-neutral-400 font-semibold block mb-1.5">
                      Included Sections ({standSections.length}):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {standSections.map((sec) => (
                        <span
                          key={sec.id}
                          className="px-2 py-1 bg-neutral-950 border border-neutral-800 text-neutral-200 text-xs rounded font-bold"
                        >
                          {sec.id} - {sec.category} (₹{sec.basePrice})
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stand Features */}
                  <div className="mb-4">
                    <span className="text-[11px] text-neutral-400 font-semibold block mb-1.5">
                      Stand Highlights:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-neutral-300">
                      {stand.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Gate info & link */}
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">
                    Gates: <strong className="text-neutral-300">{(stand.gates || []).join(', ') || 'None'}</strong>
                  </span>
                  <button
                    onClick={() => onNavigate('sections')}
                    className="text-orange-400 hover:text-orange-300 font-bold flex items-center space-x-1"
                  >
                    <span>Inspect Sections</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
