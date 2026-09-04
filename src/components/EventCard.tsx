import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Flame } from 'lucide-react';
import { StadiumEvent } from '../types';

interface EventCardProps {
  event: StadiumEvent;
  onSelectEvent: (event: StadiumEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent }) => {
  return (
    <div
      id={`event-card-${event.id}`}
      className="w-full bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-orange-500 transition-all flex flex-col justify-between group"
    >
      {/* Top Banner / Match Header */}
      <div className="bg-neutral-900 text-white p-4 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 bg-orange-500 text-black text-[11px] font-black uppercase tracking-wider rounded">
            {event.sport}
          </span>
          <span className="text-xs text-neutral-400 font-medium truncate max-w-[180px] sm:max-w-none">
            {event.tournament}
          </span>
        </div>
        {event.isHot && (
          <div className="flex items-center space-x-1 text-orange-400 text-xs font-bold bg-orange-950/60 px-2 py-0.5 rounded border border-orange-800/40">
            <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
            <span>Fast Filling</span>
          </div>
        )}
      </div>

      {/* Main Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Matchup / Title */}
        <div>
          <h3 className="text-xl font-black text-black tracking-tight group-hover:text-orange-600 transition-colors">
            {event.name}
          </h3>
          <p className="text-xs text-neutral-500 mt-1 font-medium">{event.matchType}</p>
        </div>

        {/* Teams Flags / Visual Clash */}
        <div className="bg-neutral-50 p-3 rounded border border-neutral-100 flex items-center justify-around text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">{event.teams.team1.flagOrBadge}</span>
            <span className="text-xs font-bold text-neutral-800">{event.teams.team1.short}</span>
          </div>
          <div className="text-xs font-black text-neutral-400 uppercase tracking-widest px-2">VS</div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">{event.teams.team2.flagOrBadge}</span>
            <span className="text-xs font-bold text-neutral-800">{event.teams.team2.short}</span>
          </div>
        </div>

        {/* Date, Time, Venue */}
        <div className="space-y-2 text-xs text-neutral-600">
          <div className="flex items-center space-x-2">
            <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span className="font-semibold text-neutral-900">{event.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="truncate">{event.venue} • {event.venueLocation}</span>
          </div>
        </div>

        {/* Pricing and Action Button */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase font-bold text-neutral-400">Starting from</span>
            <span className="text-lg font-black text-black">
              ₹{event.startingPrice.toLocaleString('en-IN')}
            </span>
          </div>

          <button
            id={`view-tickets-btn-${event.id}`}
            onClick={() => onSelectEvent(event)}
            className="px-4 py-2 bg-black hover:bg-orange-500 hover:text-black text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>View Tickets</span>
          </button>
        </div>
      </div>
    </div>
  );
};
