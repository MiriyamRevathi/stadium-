import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Plus, Minus, RotateCcw, Maximize2, Compass } from 'lucide-react';
import { StadiumSection, StadiumEvent } from '../types';
import { STADIUM_SECTIONS, describeArcSector } from '../data/sections';
import { getSectionAvailability } from '../data/seats';

interface StadiumMapProps {
  event: StadiumEvent;
  selectedSection: StadiumSection | null;
  onSelectSection: (section: StadiumSection) => void;
  hoveredSectionFromPanel?: string | null;
  onHoverSectionChange?: (sectionId: string | null) => void;
}

export const StadiumMap: React.FC<StadiumMapProps> = ({
  event,
  selectedSection,
  onSelectSection,
  hoveredSectionFromPanel,
  onHoverSectionChange
}) => {
  // ViewBox pan & zoom state
  // Coordinate space is 0 0 1000 1000 with center at (500, 500)
  const [viewBox, setViewBox] = useState({ x: 0, y: 0, w: 1000, h: 1000 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const [hoveredSection, setHoveredSection] = useState<StadiumSection | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const svgRef = useRef<SVGSVGElement | null>(null);

  // Reset zoom to default full stadium view
  const handleResetZoom = useCallback(() => {
    setViewBox({ x: 0, y: 0, w: 1000, h: 1000 });
  }, []);

  // Zoom in/out via buttons
  const handleZoom = (factor: number) => {
    setViewBox((prev) => {
      const newW = Math.max(250, Math.min(1400, prev.w * factor));
      const newH = Math.max(250, Math.min(1400, prev.h * factor));
      const dx = (prev.w - newW) / 2;
      const dy = (prev.h - newH) / 2;
      return {
        x: Math.max(-200, Math.min(1000, prev.x + dx)),
        y: Math.max(-200, Math.min(1000, prev.y + dy)),
        w: newW,
        h: newH
      };
    });
  };

  // Zoom to a specific section bounding box
  const zoomToSection = useCallback((sec: StadiumSection) => {
    if (!sec.labelX || !sec.labelY) return;
    const targetW = 380;
    const targetH = 380;
    const targetX = sec.labelX - targetW / 2;
    const targetY = sec.labelY - targetH / 2;
    setViewBox({
      x: Math.max(0, Math.min(1000 - targetW, targetX)),
      y: Math.max(0, Math.min(1000 - targetH, targetY)),
      w: targetW,
      h: targetH
    });
  }, []);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
    handleZoom(zoomFactor);
  };

  // Drag to pan
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // only left click
    setIsPanning(true);
    setStartPan({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const scaleX = viewBox.w / rect.width;
      const scaleY = viewBox.h / rect.height;
      const dx = (e.clientX - startPan.x) * scaleX;
      const dy = (e.clientY - startPan.y) * scaleY;

      setViewBox((prev) => ({
        ...prev,
        x: prev.x - dx,
        y: prev.y - dy
      }));
      setStartPan({ x: e.clientX, y: e.clientY });
    }

    if (hoveredSection) {
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Section click
  const handleSectionClick = (sec: StadiumSection) => {
    onSelectSection(sec);
    zoomToSection(sec);
  };

  const handleSectionMouseEnter = (sec: StadiumSection, e: React.MouseEvent) => {
    setHoveredSection(sec);
    setTooltipPos({ x: e.clientX, y: e.clientY });
    if (onHoverSectionChange) {
      onHoverSectionChange(sec.id);
    }
  };

  const handleSectionMouseLeave = () => {
    setHoveredSection(null);
    if (onHoverSectionChange) {
      onHoverSectionChange(null);
    }
  };

  // Color helper for section tiers
  const getSectionFill = (sec: StadiumSection, isHovered: boolean, isSelected: boolean) => {
    if (isSelected) return '#F97316'; // Active orange
    if (isHovered) return '#fef3c7'; // Design hover color

    switch (sec.category) {
      case 'Suite':
        return '#f1f5f9';
      case 'VIP':
        return '#f8fafc';
      case 'Premium':
        return '#ffffff';
      case 'Regular':
      default:
        return sec.tier === 'Upper Bowl' ? '#f8fafc' : '#ffffff';
    }
  };

  const getSectionStroke = (sec: StadiumSection, isHovered: boolean, isSelected: boolean) => {
    if (isSelected) return '#111111';
    if (isHovered) return '#F97316';
    return '#111111';
  };

  return (
    <div className="w-full h-full relative bg-neutral-100 flex flex-col select-none overflow-hidden">
      {/* Immersive UI Event Details Floating Card Top-Left */}
      <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur p-4 rounded-sm border border-neutral-200 shadow-sm max-w-xs sm:max-w-sm pointer-events-auto">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#F97316]">
            {event.tournament}
          </span>
          <span className="text-neutral-400">•</span>
          <span className="text-[10px] text-neutral-500 font-bold uppercase">{event.matchType}</span>
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight mt-0.5">
          {event.name}
        </h1>
        <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-1">
          {event.date} • {event.time}
        </p>
        <p className="text-[10px] text-neutral-400 mt-0.5">
          {event.venue}, Uppal
        </p>
      </div>

      {/* Floating Zoom & Pan Controls (Immersive UI White Square Buttons) */}
      <div className="absolute top-6 right-6 z-10 flex flex-col gap-2 pointer-events-auto">
        <button
          id="zoom-in-btn"
          onClick={() => handleZoom(0.8)}
          className="bg-white w-10 h-10 shadow-sm border border-neutral-200 flex items-center justify-center font-bold text-lg hover:bg-neutral-50 text-black transition-colors focus:outline-none"
          title="Zoom In"
          aria-label="Zoom In"
        >
          +
        </button>
        <button
          id="zoom-out-btn"
          onClick={() => handleZoom(1.25)}
          className="bg-white w-10 h-10 shadow-sm border border-neutral-200 flex items-center justify-center font-bold text-lg hover:bg-neutral-50 text-black transition-colors focus:outline-none"
          title="Zoom Out"
          aria-label="Zoom Out"
        >
          -
        </button>
        <button
          id="zoom-reset-btn"
          onClick={handleResetZoom}
          className="bg-white px-3 py-2 shadow-sm border border-neutral-200 text-[10px] font-bold uppercase hover:bg-neutral-50 text-black transition-colors focus:outline-none"
          title="Reset Full Stadium View"
          aria-label="Reset View"
        >
          Reset View
        </button>
      </div>

      {/* Main Interactive SVG Map Viewport */}
      <div
        className="flex-1 w-full min-h-[480px] lg:min-h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden p-6 sm:p-10"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      >
        <svg
          ref={svgRef}
          viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`}
          className="w-full h-full max-h-[560px] transition-all duration-75"
          aria-label="Interactive Seating Map of Rajiv Gandhi International Cricket Stadium"
        >
          <defs>
            {/* Field Grass Gradient */}
            <radialGradient id="cricketTurfGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="70%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </radialGradient>
            <linearGradient id="cricketPitchSurface" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
            {/* Concrete concourses */}
            <radialGradient id="concourseGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </radialGradient>
          </defs>

          {/* Stadium Concrete Superstructure Base */}
          <circle cx="500" cy="500" r="495" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="6" />
          <circle cx="500" cy="500" r="485" fill="#F4F4F5" stroke="#E5E7EB" strokeWidth="2" />

          {/* Inter-tier concourses & walkways */}
          <circle cx="500" cy="500" r="400" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="3" />
          <circle cx="500" cy="500" r="322" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="3" />
          <circle cx="500" cy="500" r="240" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="3" />

          {/* CRICKET PLAYING ARENA */}
          {/* Boundary Rope Area */}
          <circle cx="500" cy="500" r="235" fill="url(#concourseGrad)" />
          {/* Cricket Outfield Grass (field-green) */}
          <circle cx="500" cy="500" r="222" fill="#4ade80" stroke="#FFFFFF" strokeWidth="2.5" />

          {/* 30-Yard Fielding Circle */}
          <circle
            cx="500"
            cy="500"
            r="132"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="6 6"
            opacity="0.95"
          />

          {/* Central 22-Yard Cricket Pitch */}
          <rect
            x="485"
            y="445"
            width="30"
            height="110"
            rx="3"
            fill="url(#cricketPitchSurface)"
            stroke="#d97706"
            strokeWidth="1.5"
          />
          {/* Batting & Bowling Creases */}
          <line x1="482" y1="460" x2="518" y2="460" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="482" y1="540" x2="518" y2="540" stroke="#FFFFFF" strokeWidth="2" />
          {/* Wickets */}
          <circle cx="496" cy="458" r="2" fill="#FFFFFF" />
          <circle cx="500" cy="458" r="2" fill="#FFFFFF" />
          <circle cx="504" cy="458" r="2" fill="#FFFFFF" />
          <circle cx="496" cy="542" r="2" fill="#FFFFFF" />
          <circle cx="500" cy="542" r="2" fill="#FFFFFF" />
          <circle cx="504" cy="542" r="2" fill="#FFFFFF" />

          {/* Sight Screens & Dugouts */}
          <rect x="470" y="240" width="60" height="6" rx="2" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
          <text x="500" y="235" fill="#111111" fontSize="9" fontWeight="bold" textAnchor="middle">
            NORTH SIGHT SCREEN
          </text>

          <rect x="470" y="754" width="60" height="6" rx="2" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
          <text x="500" y="774" fill="#111111" fontSize="9" fontWeight="bold" textAnchor="middle">
            SOUTH SIGHT SCREEN
          </text>

          {/* SEATING SECTIONS (INTERACTIVE SVGs with Immersive UI Styling) */}
          {STADIUM_SECTIONS.map((sec) => {
            const isSelected = selectedSection?.id === sec.id;
            const isHovered =
              hoveredSection?.id === sec.id || hoveredSectionFromPanel === sec.id;
            const d = describeArcSector(
              500,
              500,
              sec.innerRadius,
              sec.outerRadius,
              sec.startAngle,
              sec.endAngle
            );

            const fill = getSectionFill(sec, isHovered, isSelected);
            const stroke = getSectionStroke(sec, isHovered, isSelected);
            const strokeWidth = isSelected ? 2 : isHovered ? 1.5 : 0.6;

            return (
              <g
                key={sec.id}
                id={`stadium-section-group-${sec.id}`}
                className="cursor-pointer transition-all duration-150"
                onClick={() => handleSectionClick(sec)}
                onMouseEnter={(e) => handleSectionMouseEnter(sec, e)}
                onMouseLeave={handleSectionMouseLeave}
              >
                <path
                  d={d}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  className="transition-colors duration-150"
                />

                {/* Section Label Text */}
                {sec.labelX && sec.labelY && (
                  <text
                    x={sec.labelX}
                    y={sec.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isSelected ? '#FFFFFF' : '#111111'}
                    fontSize={sec.name.length > 3 ? '10' : '11'}
                    fontWeight="900"
                    pointerEvents="none"
                    className="select-none tracking-wider"
                  >
                    {sec.name}
                  </text>
                )}
              </g>
            );
          })}

          {/* Stand Orientation Cardinal Badges */}
          <g id="stand-labels-cardinal" pointerEvents="none">
            {/* North Pavilion */}
            <rect x="420" y="6" width="160" height="22" rx="2" fill="#111111" stroke="#F97316" strokeWidth="1" />
            <text x="500" y="21" fill="#F97316" fontSize="11" fontWeight="bold" textAnchor="middle">
              NORTH STAND
            </text>

            {/* South Pavilion */}
            <rect x="420" y="972" width="160" height="22" rx="2" fill="#111111" stroke="#F97316" strokeWidth="1" />
            <text x="500" y="987" fill="#F97316" fontSize="11" fontWeight="bold" textAnchor="middle">
              SOUTH STAND
            </text>

            {/* East Stand */}
            <rect x="880" y="488" width="116" height="24" rx="2" fill="#111111" stroke="#E5E7EB" strokeWidth="1" />
            <text x="938" y="504" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              EAST STAND
            </text>

            {/* West Stand */}
            <rect x="4" y="488" width="116" height="24" rx="2" fill="#111111" stroke="#E5E7EB" strokeWidth="1" />
            <text x="62" y="504" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              WEST STAND
            </text>
          </g>
        </svg>
      </div>

      {/* Immersive UI Bottom Status Strip (h-24 bg-white border-t border-neutral-200 px-8) */}
      <div className="h-20 sm:h-24 bg-white border-t border-neutral-200 px-6 sm:px-8 flex items-center justify-between shrink-0 z-10">
        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-[3px] bg-white border border-[#999]"></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-[3px] bg-[#F97316] border border-[#F97316]"></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-[3px] bg-[#D1D5DB] border border-[#D1D5DB]"></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Sold Out</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-[3px] bg-[#EEEEEE] border border-[#DDDDDD]"></div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-black">Blocked</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-neutral-400 font-bold uppercase">Section</span>
            <span className="text-sm font-black text-black">
              {selectedSection ? `${selectedSection.name} - ${selectedSection.category}` : 'ALL STANDS'}
            </span>
          </div>
          <div className="w-[1px] h-8 bg-neutral-200"></div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-neutral-400 font-bold uppercase">Price Range</span>
            <span className="text-sm font-black text-black">
              {selectedSection
                ? `₹${selectedSection.price.toLocaleString('en-IN')}`
                : '₹600 - ₹9,500'}
            </span>
          </div>
        </div>
      </div>

      {/* Section Hover Tooltip */}
      {hoveredSection && (
        <div
          className="fixed pointer-events-none z-50 bg-black text-white p-3 rounded shadow-2xl border-2 border-orange-500 text-xs w-60 -translate-x-1/2 -translate-y-full mb-4"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y - 8}px`
          }}
        >
          <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5 mb-1.5">
            <span className="font-black text-base text-orange-400 uppercase">
              Section {hoveredSection.name}
            </span>
            <span className="px-2 py-0.5 bg-orange-500 text-black text-[10px] font-black uppercase rounded">
              {hoveredSection.category}
            </span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-neutral-300">
              <span>Stand:</span>
              <span className="font-semibold text-white">{hoveredSection.stand}</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Tier Level:</span>
              <span className="font-semibold text-neutral-200">{hoveredSection.tier}</span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Starting from:</span>
              <span className="font-bold text-orange-400">
                ₹{hoveredSection.price.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between text-neutral-300">
              <span>Available Seats:</span>
              <span className="font-bold text-emerald-400">
                {getSectionAvailability(event.id, hoveredSection.id).available} seats
              </span>
            </div>
          </div>
          <div className="mt-2 pt-1.5 border-t border-neutral-800 text-[10px] text-orange-300 text-center font-bold">
            Click to zoom in & select individual seats
          </div>
        </div>
      )}
    </div>
  );
};
