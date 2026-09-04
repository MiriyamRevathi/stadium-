import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Maximize2,
  Minimize2,
  Grid,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { StadiumEvent, StadiumSection, Seat } from '../types';
import { StadiumMap } from './StadiumMap';
import { SeatMap } from './SeatMap';
import { TicketPanel } from './TicketPanel';
import { BookingSummary } from './BookingSummary';
import { Legend } from './Legend';
import { STADIUM_SECTIONS } from '../data/sections';
import { generateSeatsForSection } from '../data/seats';

interface BookingViewProps {
  event: StadiumEvent;
  onBackToEvents: () => void;
  onProceedToCheckout: (seats: Seat[]) => void;
  selectedSeats: Seat[];
  onToggleSelectSeat: (seat: Seat) => void;
  onClearSeats: () => void;
  isLoggedIn?: boolean;
}

export const BookingView: React.FC<BookingViewProps> = ({
  event,
  onBackToEvents,
  onProceedToCheckout,
  selectedSeats,
  onToggleSelectSeat,
  onClearSeats,
  isLoggedIn = true
}) => {
  const [selectedSection, setSelectedSection] = useState<StadiumSection | null>(null);
  const [hoveredSectionId, setHoveredSectionId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'stadium' | 'seats'>('stadium');

  // When a section is chosen, generate its deterministic seats
  const sectionSeats = useMemo(() => {
    if (!selectedSection) return [];
    return generateSeatsForSection(selectedSection, event.id);
  }, [event.id, selectedSection]);

  const handleSelectSection = (section: StadiumSection) => {
    setSelectedSection(section);
    setViewMode('seats');
  };

  const handleBackToStadium = () => {
    setViewMode('stadium');
  };

  return (
    <div className="w-full flex-1 flex flex-col bg-neutral-100 min-h-screen pb-20">
      {/* Top Event Navigation Strip */}
      <div className="w-full bg-black text-white px-4 sm:px-6 h-12 flex items-center justify-between border-b border-neutral-800 shrink-0">
        <button
          id="booking-view-back-btn"
          onClick={onBackToEvents}
          className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
          title="Return to Events"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#F97316]" />
          <span>Events List</span>
        </button>

        {/* View Mode Toggle when section is selected */}
        {selectedSection && (
          <div className="flex items-center space-x-2">
            <button
              id="toggle-stadium-view-btn"
              onClick={() => setViewMode('stadium')}
              className={`px-3 py-1 rounded-[3px] font-bold uppercase tracking-wider text-[10px] flex items-center space-x-1 transition-colors ${
                viewMode === 'stadium'
                  ? 'bg-[#F97316] text-white'
                  : 'bg-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Stadium Overview</span>
            </button>

            <button
              id="toggle-section-seats-btn"
              onClick={() => setViewMode('seats')}
              className={`px-3 py-1 rounded-[3px] font-bold uppercase tracking-wider text-[10px] flex items-center space-x-1 transition-colors ${
                viewMode === 'seats'
                  ? 'bg-[#F97316] text-white'
                  : 'bg-neutral-800 text-neutral-300 hover:text-white'
              }`}
            >
              <Grid className="w-3 h-3" />
              <span>Section {selectedSection.name} Seats</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Immersive UI Container: Left Arena + Right Ticket Panel */}
      <div className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
        {/* Left Arena Viewport */}
        <div className="flex-1 flex flex-col bg-neutral-100 relative overflow-hidden min-h-[550px] lg:min-h-[680px]">
          {viewMode === 'seats' && selectedSection ? (
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
              <SeatMap
                section={selectedSection}
                event={event}
                seats={sectionSeats}
                selectedSeats={selectedSeats}
                onToggleSelectSeat={onToggleSelectSeat}
                onBackToStadium={handleBackToStadium}
              />
            </div>
          ) : (
            <StadiumMap
              event={event}
              selectedSection={selectedSection}
              onSelectSection={handleSelectSection}
              hoveredSectionFromPanel={hoveredSectionId}
              onHoverSectionChange={setHoveredSectionId}
            />
          )}
        </div>

        {/* Right Panel (w-96 border-l border-neutral-200 flex flex-col bg-white) */}
        <div className="w-full lg:w-96 border-t lg:border-t-0 lg:border-l border-neutral-200 flex flex-col bg-white shrink-0">
          <TicketPanel
            event={event}
            selectedSection={selectedSection}
            onSelectSection={handleSelectSection}
            hoveredSection={hoveredSectionId}
            onHoverSection={setHoveredSectionId}
          />
        </div>
      </div>

      {/* Floating Sticky Booking Summary */}
      <BookingSummary
        event={event}
        selectedSeats={selectedSeats}
        isLoggedIn={isLoggedIn}
        onClearSeats={onClearSeats}
        onProceedToCheckout={() => onProceedToCheckout(selectedSeats)}
        onRemoveSeat={(seatId) => {
          const s = selectedSeats.find((seat) => seat.id === seatId);
          if (s) onToggleSelectSeat(s);
        }}
      />
    </div>
  );
};
