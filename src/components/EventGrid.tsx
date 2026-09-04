import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { StadiumEvent } from '../types';
import { EventCard } from './EventCard';

interface EventGridProps {
  events: StadiumEvent[];
  onSelectEvent: (event: StadiumEvent) => void;
  externalSearchQuery?: string;
}

export const EventGrid: React.FC<EventGridProps> = ({
  events,
  onSelectEvent,
  externalSearchQuery = ''
}) => {
  const [search, setSearch] = useState(externalSearchQuery);
  const [selectedSport, setSelectedSport] = useState<string>('All');
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  // Filter logic
  const filteredEvents = useMemo(() => {
    return events.filter((evt) => {
      const matchesSearch =
        evt.name.toLowerCase().includes(search.toLowerCase()) ||
        evt.tournament.toLowerCase().includes(search.toLowerCase()) ||
        evt.venue.toLowerCase().includes(search.toLowerCase()) ||
        evt.teams.team1.name.toLowerCase().includes(search.toLowerCase()) ||
        evt.teams.team2.name.toLowerCase().includes(search.toLowerCase());

      const matchesSport = selectedSport === 'All' || evt.sport === selectedSport;

      let matchesPrice = true;
      if (selectedPriceTier === 'under1000') {
        matchesPrice = evt.startingPrice <= 1000;
      } else if (selectedPriceTier === '1000to1500') {
        matchesPrice = evt.startingPrice >= 1000 && evt.startingPrice <= 1500;
      } else if (selectedPriceTier === 'above1500') {
        matchesPrice = evt.startingPrice > 1500;
      }

      let matchesType = true;
      if (selectedType === 'International') {
        matchesType = evt.tournament.includes('International') || evt.matchType.includes('International');
      } else if (selectedType === 'League') {
        matchesType = evt.tournament.includes('League') || evt.tournament.includes('Premier');
      }

      return matchesSearch && matchesSport && matchesPrice && matchesType;
    });
  }, [events, search, selectedSport, selectedPriceTier, selectedType]);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedSport('All');
    setSelectedPriceTier('All');
    setSelectedType('All');
  };

  return (
    <div className="w-full">
      {/* Search & Filter Header Bar */}
      <div className="w-full bg-neutral-900 text-white p-4 sm:p-6 rounded-lg mb-6 border border-neutral-800">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Title & Count */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              Upcoming Events
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Showing {filteredEvents.length} of {events.length} matches scheduled at Uppal Stadium
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-96 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              id="event-search-input"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search team, tournament, or date..."
              className="w-full bg-black text-white text-xs pl-9 pr-3 py-2.5 border border-neutral-700 rounded focus:outline-none focus:border-orange-500 placeholder-neutral-500"
            />
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-neutral-800 text-xs">
          <div className="flex items-center space-x-1.5 text-neutral-400 font-bold uppercase tracking-wider text-[10px]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-orange-500" />
            <span>Filters:</span>
          </div>

          {/* Sport filter */}
          <select
            id="filter-sport-select"
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className="bg-black text-neutral-200 border border-neutral-700 rounded px-2.5 py-1.5 focus:outline-none focus:border-orange-500 font-medium"
          >
            <option value="All">All Sports</option>
            <option value="Cricket">Cricket</option>
          </select>

          {/* Price filter */}
          <select
            id="filter-price-select"
            value={selectedPriceTier}
            onChange={(e) => setSelectedPriceTier(e.target.value)}
            className="bg-black text-neutral-200 border border-neutral-700 rounded px-2.5 py-1.5 focus:outline-none focus:border-orange-500 font-medium"
          >
            <option value="All">All Starting Prices</option>
            <option value="under1000">Under ₹1,000</option>
            <option value="1000to1500">₹1,000 - ₹1,500</option>
            <option value="above1500">₹1,500+</option>
          </select>

          {/* Type filter */}
          <select
            id="filter-type-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-black text-neutral-200 border border-neutral-700 rounded px-2.5 py-1.5 focus:outline-none focus:border-orange-500 font-medium"
          >
            <option value="All">All Match Types</option>
            <option value="International">International Bilateral</option>
            <option value="League">League / T20 Final</option>
          </select>

          {/* Reset Filters Button */}
          {(search || selectedSport !== 'All' || selectedPriceTier !== 'All' || selectedType !== 'All') && (
            <button
              id="reset-filters-btn"
              onClick={handleResetFilters}
              className="text-orange-400 hover:text-orange-300 font-bold text-xs flex items-center space-x-1 ml-auto"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onSelectEvent={onSelectEvent} />
          ))}
        </div>
      ) : (
        <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg p-12 text-center my-8">
          <Filter className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-neutral-800">No events found</h3>
          <p className="text-sm text-neutral-500 mt-1 max-w-md mx-auto">
            We couldn’t find any scheduled events matching your current filter criteria.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-4 px-4 py-2 bg-orange-500 text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-orange-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
