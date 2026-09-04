import React from 'react';
import { Seat as SeatType, StadiumSection } from '../types';

interface SeatProps {
  seat: SeatType;
  section: StadiumSection;
  isSelected: boolean;
  onToggleSelect: (seat: SeatType) => void;
  onHover: (seat: SeatType | null, event?: React.MouseEvent) => void;
}

export const SeatComponent: React.FC<SeatProps> = ({
  seat,
  section,
  isSelected,
  onToggleSelect,
  onHover
}) => {
  const isAvailable = seat.status === 'available';
  const isSold = seat.status === 'sold';
  const isBlocked = seat.status === 'blocked';

  const handleClick = () => {
    if (!isAvailable && !isSelected) return;
    onToggleSelect(seat);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  // Determine appearance based on status matching Immersive UI theme
  let bgClasses = 'bg-white text-neutral-800 border border-[#999999] hover:border-[#F97316] hover:bg-orange-50 cursor-pointer shadow-xs';
  let innerContent: React.ReactNode = seat.number;

  if (isSelected) {
    bgClasses =
      'bg-[#F97316] text-white font-black border border-[#F97316] ring-1 ring-orange-300 scale-105 shadow-sm cursor-pointer z-10';
    innerContent = '✓';
  } else if (isSold) {
    bgClasses =
      'bg-[#D1D5DB] text-neutral-500 border border-[#D1D5DB] cursor-not-allowed opacity-90';
    innerContent = '';
  } else if (isBlocked) {
    bgClasses =
      'bg-[#EEEEEE] text-neutral-400 border border-[#DDDDDD] cursor-not-allowed opacity-80';
    innerContent = '';
  }

  const ariaLabel = `Section ${section.name}, Row ${seat.row}, Seat ${seat.number}, ${seat.category}, Price ₹${seat.price}, Status: ${
    isSelected ? 'Selected' : seat.status
  }`;

  return (
    <button
      id={`seat-${seat.id}`}
      type="button"
      role="checkbox"
      aria-checked={isSelected}
      aria-label={ariaLabel}
      disabled={!isAvailable && !isSelected}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={(e) => onHover(seat, e)}
      onMouseLeave={() => onHover(null)}
      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-[3px] flex items-center justify-center text-[10px] font-bold transition-all duration-150 select-none focus:outline-none focus:ring-2 focus:ring-[#F97316] ${bgClasses}`}
    >
      {innerContent}
    </button>
  );
};
