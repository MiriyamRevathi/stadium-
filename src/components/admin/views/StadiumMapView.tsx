import React, { useState } from 'react';
import { Stand, Section, PhysicalSeat, SeatStatus } from '../../../types/admin';
import { InteractiveStadiumMap } from '../InteractiveStadiumMap';
import { SeatInspector } from '../SeatInspector';
import { Layers, Armchair, Sliders, Shield, AlertTriangle } from 'lucide-react';

interface StadiumMapViewProps {
  stands: Stand[];
  sections: Section[];
  physicalSeats: PhysicalSeat[];
  onUpdateSeat: (updatedSeat: PhysicalSeat) => void;
  onBlockSeat: (seatId: string) => void;
  onUnblockSeat: (seatId: string) => void;
}

export const StadiumMapView: React.FC<StadiumMapViewProps> = ({
  stands,
  sections,
  physicalSeats,
  onUpdateSeat,
  onBlockSeat,
  onUnblockSeat
}) => {
  const [selectedSeat, setSelectedSeat] = useState<PhysicalSeat | null>(null);
  const [selectedStand, setSelectedStand] = useState<Stand | null>(null);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
      {/* Interactive SVG Stadium Map Area (Takes substantial horizontal width) */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 mb-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white uppercase tracking-wider">Map Navigation:</span>
            <span className="text-neutral-400">
              Select any Stand or Section on the bowl to drill down into rows and individual seats.
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-neutral-500">Stand filter:</span>
            <select
              value={selectedStand?.id || ''}
              onChange={(e) => {
                const s = stands.find((st) => st.id === e.target.value) || null;
                setSelectedStand(s);
                setSelectedSection(null);
              }}
              className="bg-neutral-950 border border-neutral-700 text-white rounded px-2.5 py-1 text-xs"
            >
              <option value="">All Stands (Full Stadium)</option>
              {stands.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <InteractiveStadiumMap
          stands={stands}
          sections={sections}
          physicalSeats={physicalSeats}
          selectedSeatId={selectedSeat?.id}
          onSelectSeat={(seat) => setSelectedSeat(seat as PhysicalSeat)}
          onSelectSection={(sec) => setSelectedSection(sec)}
          onSelectStand={(st) => setSelectedStand(st)}
          mode="physical"
        />
      </div>

      {/* Right Details / Seat Inspector Drawer */}
      <div className="w-full lg:w-80 shrink-0">
        {selectedSeat ? (
          <SeatInspector
            seat={selectedSeat}
            onClose={() => setSelectedSeat(null)}
            onSaveSeat={(updated) => {
              onUpdateSeat(updated);
              setSelectedSeat(updated);
            }}
            onBlockSeat={(id) => {
              onBlockSeat(id);
              if (selectedSeat) setSelectedSeat({ ...selectedSeat, status: 'Blocked' });
            }}
            onUnblockSeat={(id) => {
              onUnblockSeat(id);
              if (selectedSeat) setSelectedSeat({ ...selectedSeat, status: 'Available' });
            }}
            isEventMode={false}
          />
        ) : (
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 text-white h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-orange-400 mb-2">
                <Armchair className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wider">Seat Inspector</h4>
              </div>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Click any section on the stadium map to open its row view, then select an individual seat to inspect its base price, category tier, and operational status.
              </p>

              {/* Selected Context summary if stand/section is active */}
              {selectedSection && (
                <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-xs space-y-2 mb-4">
                  <span className="text-[10px] text-orange-400 uppercase font-bold block">
                    Active Section Drill-down
                  </span>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Section:</span>
                    <span className="font-bold text-white">{selectedSection.name} ({selectedSection.id})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Tier / Category:</span>
                    <span className="font-bold text-white">{selectedSection.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Base Price:</span>
                    <span className="font-bold text-orange-400 font-mono">₹{selectedSection.basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Total Physical Seats:</span>
                    <span className="font-bold text-white font-mono">{selectedSection.totalSeats}</span>
                  </div>
                </div>
              )}

              <div className="p-3 bg-neutral-950 border border-neutral-800/80 rounded-lg text-xs space-y-2">
                <span className="text-neutral-300 font-semibold block">Quick Guidelines:</span>
                <ul className="space-y-1.5 text-neutral-400 text-[11px]">
                  <li>• Blocked seats cannot be booked by any fan.</li>
                  <li>• Maintenance seats are withheld from active ticketing.</li>
                  <li>• Category pricing reflects the stadium master baseline.</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 text-center">
              <span className="text-[11px] text-neutral-500">
                Uppal Stadium Seating Engine v2.4
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
