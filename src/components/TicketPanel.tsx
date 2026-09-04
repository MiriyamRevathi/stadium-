import React, { useState, useMemo } from 'react';
import {
  Ticket,
  SlidersHorizontal,
  ArrowUpDown,
  Check,
  ChevronRight,
  Sparkles,
  MapPin,
  Flame
} from 'lucide-react';
import { StadiumSection, StadiumEvent, SectionCategory } from '../types';
import { STADIUM_SECTIONS } from '../data/sections';
import { getSectionAvailability } from '../data/seats';

interface TicketPanelProps {
  event: StadiumEvent;
  selectedSection: StadiumSection | null;
  onSelectSection: (section: StadiumSection) => void;
  hoveredSection: string | null;
  onHoverSection: (sectionId: string | null) => void;
}

export const TicketPanel: React.FC<TicketPanelProps> = ({
  event,
  selectedSection,
  onSelectSection,
  hoveredSection,
  onHoverSection
}) => {
  const [sortBy, setSortBy] = useState<'lowest' | 'best'>('lowest');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(10000);
  const [availableOnly, setAvailableOnly] = useState<boolean>(true);

  // Compile section ticket listings with real availability data
  const ticketListings = useMemo(() => {
    return STADIUM_SECTIONS.map((section) => {
      const stats = getSectionAvailability(event.id, section.id);
      return {
        section,
        stats,
        representativeRow: section.rows[1] || section.rows[0]
      };
    });
  }, [event.id]);

  // Filter & sort listings
  const filteredListings = useMemo(() => {
    let list = ticketListings.filter((item) => {
      if (categoryFilter !== 'All' && item.section.category !== categoryFilter) {
        return false;
      }
      if (item.section.price > maxPriceFilter) {
        return false;
      }
      if (availableOnly && item.stats.available === 0) {
        return false;
      }
      return true;
    });

    if (sortBy === 'lowest') {
      list.sort((a, b) => a.section.price - b.section.price);
    } else {
      // Best Seats: Suite -> VIP -> Premium -> Regular, then by price descending
      const categoryRank: Record<SectionCategory, number> = {
        Suite: 4,
        VIP: 3,
        Premium: 2,
        Regular: 1
      };
      list.sort((a, b) => {
        const diff = categoryRank[b.section.category] - categoryRank[a.section.category];
        if (diff !== 0) return diff;
        return b.section.price - a.section.price;
      });
    }

    return list;
  }, [ticketListings, categoryFilter, maxPriceFilter, availableOnly, sortBy]);

  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Panel Header (Immersive UI styling) */}
      <div className="p-6 border-b border-neutral-100 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black uppercase italic tracking-tighter text-black">
              {selectedSection ? `Section ${selectedSection.name} Stand` : 'Available Tickets'}
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              {selectedSection
                ? `${selectedSection.stand} • ₹${selectedSection.price.toLocaleString('en-IN')} / seat`
                : 'Explore & choose seating sections'}
            </p>
          </div>
          <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-1 rounded font-bold uppercase tracking-wider">
            {filteredListings.length} Stands
          </span>
        </div>

        {/* Sort Controls */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-neutral-100 text-xs">
          <button
            id="sort-lowest-price-btn"
            onClick={() => setSortBy('lowest')}
            className={`py-2 px-3 rounded-[3px] font-bold uppercase tracking-wider flex items-center justify-center space-x-1 transition-colors ${
              sortBy === 'lowest'
                ? 'bg-black text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            <span>Lowest Price</span>
          </button>
          <button
            id="sort-best-seats-btn"
            onClick={() => setSortBy('best')}
            className={`py-2 px-3 rounded-[3px] font-bold uppercase tracking-wider flex items-center justify-center space-x-1 transition-colors ${
              sortBy === 'best'
                ? 'bg-black text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Best Seats</span>
          </button>
        </div>
      </div>

      {/* Filter Options Drawer / Strip */}
      <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-200 space-y-3 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-neutral-700 uppercase tracking-wider text-[10px]">
            Filter Category
          </span>
          <label className="flex items-center space-x-1.5 cursor-pointer text-[11px] text-neutral-600 font-medium">
            <input
              type="checkbox"
              checked={availableOnly}
              onChange={(e) => setAvailableOnly(e.target.checked)}
              className="accent-[#F97316] rounded"
            />
            <span>Available Only</span>
          </label>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {['All', 'Regular', 'Premium', 'VIP', 'Suite'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-[3px] text-[10px] font-bold uppercase tracking-wider transition-colors ${
                categoryFilter === cat
                  ? 'bg-black text-white'
                  : 'bg-white text-neutral-700 border border-neutral-200 hover:border-[#F97316]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Slider */}
        <div className="pt-1">
          <div className="flex justify-between text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
            <span>Max Price:</span>
            <span className="text-black font-black">₹{maxPriceFilter.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min="600"
            max="10000"
            step="200"
            value={maxPriceFilter}
            onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
            className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#F97316]"
          />
        </div>
      </div>

      {/* Ticket Listings Scrollable Feed */}
      <div className="flex-1 overflow-y-auto px-6 py-4 custom-scroll space-y-2">
        {filteredListings.length > 0 ? (
          filteredListings.map(({ section, stats }) => {
            const isSelected = selectedSection?.id === section.id;
            const isHovered = hoveredSection === section.id;

            return (
              <div
                key={section.id}
                id={`ticket-listing-${section.id}`}
                onClick={() => onSelectSection(section)}
                onMouseEnter={() => onHoverSection(section.id)}
                onMouseLeave={() => onHoverSection(null)}
                className={`p-3.5 rounded-[3px] border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-orange-50 border-[#F97316] ring-1 ring-[#F97316]'
                    : isHovered
                    ? 'bg-neutral-50 border-neutral-400'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {/* Section details */}
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-black text-sm text-black">Section {section.name}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-[2px] text-[9px] font-black uppercase tracking-wider ${
                        section.category === 'Suite'
                          ? 'bg-amber-100 text-amber-900'
                          : section.category === 'VIP'
                          ? 'bg-purple-100 text-purple-900'
                          : section.category === 'Premium'
                          ? 'bg-orange-100 text-orange-900'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {section.category}
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-500">{section.stand}</p>

                  <div className="flex items-center space-x-2 text-[10px] text-neutral-500 pt-0.5 uppercase tracking-wider font-semibold">
                    <span>Gate {section.gate}</span>
                    <span>•</span>
                    <span className={stats.available > 0 ? 'text-emerald-600 font-bold' : 'text-neutral-400'}>
                      {stats.available} available
                    </span>
                  </div>
                </div>

                {/* Price and Select Action */}
                <div className="text-right flex flex-col items-end pl-3">
                  <span className="text-base font-black text-black">
                    ₹{section.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-neutral-400 uppercase font-bold">per seat</span>

                  <button
                    type="button"
                    className={`mt-1.5 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-[2px] transition-colors flex items-center space-x-0.5 ${
                      isSelected
                        ? 'bg-[#F97316] text-white'
                        : 'bg-neutral-100 text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    <span>{isSelected ? 'Viewing' : 'Select'}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center p-8 text-neutral-500 text-xs">
            <p className="font-bold text-neutral-700">No sections match your filter criteria.</p>
            <p className="mt-1">Try expanding the price range or clearing category filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};
