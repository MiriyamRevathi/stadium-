import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Info } from 'lucide-react';

export const Legend: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      id="stadium-legend-container"
      className="bg-white/95 backdrop-blur-sm border border-neutral-300 rounded shadow-md text-xs text-neutral-800 transition-all z-20"
    >
      {/* Legend Header */}
      <button
        id="legend-toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 font-bold uppercase tracking-wider text-[11px] text-neutral-700 rounded-t"
      >
        <div className="flex items-center space-x-1.5">
          <Info className="w-3.5 h-3.5 text-orange-500" />
          <span>Map Legend</span>
        </div>
        {collapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {/* Legend Content */}
      {!collapsed && (
        <div className="p-3 space-y-2.5">
          {/* Seat Statuses */}
          <div>
            <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-1.5">
              Seat Status
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-white border-2 border-black inline-block" />
                <span className="font-medium">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-orange-500 border border-orange-600 inline-block shadow-sm" />
                <span className="font-bold text-orange-700">Selected</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-neutral-700 inline-flex items-center justify-center text-white text-[8px] font-bold">
                  ✕
                </span>
                <span className="text-neutral-700 font-medium">Sold</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-neutral-200 border border-neutral-300 inline-block" />
                <span className="text-neutral-700 font-medium">Blocked</span>
              </div>
            </div>
          </div>

          {/* Section Categories */}
          <div className="pt-2 border-t border-neutral-200">
            <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-1.5">
              Stand Tiers
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-amber-500 inline-block" />
                <span>Suite (₹9,500)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-amber-600 inline-block" />
                <span>VIP (₹5,500)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-orange-400 inline-block" />
                <span>Premium (₹2,200+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-slate-300 inline-block" />
                <span>Regular (₹600+)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
