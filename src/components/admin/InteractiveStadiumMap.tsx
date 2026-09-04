import React, { useState, useRef, useMemo } from 'react';
import { Stand, Section, PhysicalSeat, SeatCategory, SeatStatus, EventSeatInventoryItem } from '../../types/admin';
import { ZoomIn, ZoomOut, RotateCcw, Info, Layers, Eye, Shield, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

interface InteractiveStadiumMapProps {
  stands: Stand[];
  sections: Section[];
  physicalSeats: PhysicalSeat[];
  eventInventory?: Record<string, EventSeatInventoryItem>;
  selectedSeatId?: string | null;
  onSelectSeat?: (seat: PhysicalSeat | (PhysicalSeat & { eventStatus?: SeatStatus; eventPrice?: number })) => void;
  onSelectSection?: (section: Section | null) => void;
  onSelectStand?: (stand: Stand | null) => void;
  mode?: 'physical' | 'event';
  eventName?: string;
}

const CATEGORY_COLORS: Record<SeatCategory, { bg: string; border: string; text: string; fill: string }> = {
  General: { bg: 'bg-blue-50 text-blue-700', border: 'border-blue-300', text: 'text-blue-700', fill: '#3B82F6' },
  Premium: { bg: 'bg-emerald-50 text-emerald-700', border: 'border-emerald-300', text: 'text-emerald-700', fill: '#10B981' },
  VIP: { bg: 'bg-amber-50 text-amber-700', border: 'border-amber-300', text: 'text-amber-700', fill: '#F59E0B' },
  Hospitality: { bg: 'bg-purple-50 text-purple-700', border: 'border-purple-300', text: 'text-purple-700', fill: '#8B5CF6' }
};

const STATUS_COLORS: Record<SeatStatus, { fill: string; stroke: string; label: string }> = {
  Available: { fill: '#10B981', stroke: '#059669', label: 'Available' },
  Booked: { fill: '#DC2626', stroke: '#B91C1C', label: 'Booked' },
  Reserved: { fill: '#3B82F6', stroke: '#2563EB', label: 'Reserved' },
  Blocked: { fill: '#F97316', stroke: '#EA580C', label: 'Blocked' },
  Maintenance: { fill: '#6B7280', stroke: '#4B5563', label: 'Maintenance' }
};

export const InteractiveStadiumMap: React.FC<InteractiveStadiumMapProps> = ({
  stands,
  sections,
  physicalSeats,
  eventInventory,
  selectedSeatId,
  onSelectSeat,
  onSelectSection,
  onSelectStand,
  mode = 'physical',
  eventName
}) => {
  // Navigation & Zoom State
  const [activeStand, setActiveStand] = useState<Stand | null>(null);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [colorMode, setColorMode] = useState<'category' | 'status'>('category');
  const [hoveredSection, setHoveredSection] = useState<Section | null>(null);
  const [hoveredSeat, setHoveredSeat] = useState<PhysicalSeat | null>(null);

  // SVG Pan & Zoom State
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const cx = 500;
  const cy = 400;

  // Handler: Stand Selection
  const handleStandClick = (stand: Stand) => {
    setActiveStand(stand);
    setActiveSection(null);
    setZoomLevel(1.5);
    onSelectStand?.(stand);
    onSelectSection?.(null);
  };

  // Handler: Section Selection
  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
    const stand = stands.find((s) => s.id === section.standId) || null;
    setActiveStand(stand);
    setZoomLevel(2.2);
    onSelectSection?.(section);
    onSelectStand?.(stand);
  };

  // Handler: Reset View
  const handleResetView = () => {
    setActiveStand(null);
    setActiveSection(null);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    onSelectStand?.(null);
    onSelectSection?.(null);
  };

  // Handler: Zoom In / Out
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.4, 3.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.4, 0.8));
  };

  // Mouse Drag / Pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Helper to compute SVG arc paths
  const describeArc = (
    centerX: number,
    centerY: number,
    innerR: number,
    outerR: number,
    startAngleDeg: number,
    endAngleDeg: number
  ) => {
    const toRad = (deg: number) => ((deg - 90) * Math.PI) / 180.0;
    const startAngle = toRad(startAngleDeg);
    const endAngle = toRad(endAngleDeg);

    const x1 = centerX + outerR * Math.cos(startAngle);
    const y1 = centerY + outerR * Math.sin(startAngle);
    const x2 = centerX + outerR * Math.cos(endAngle);
    const y2 = centerY + outerR * Math.sin(endAngle);

    const x3 = centerX + innerR * Math.cos(endAngle);
    const y3 = centerY + innerR * Math.sin(endAngle);
    const x4 = centerX + innerR * Math.cos(startAngle);
    const y4 = centerY + innerR * Math.sin(startAngle);

    const largeArc = endAngleDeg - startAngleDeg <= 180 ? 0 : 1;

    return `
      M ${x1} ${y1}
      A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4}
      Z
    `;
  };

  // Helper to get center coordinate of a section arc
  const getSectionCentroid = (sec: Section) => {
    const midAngleDeg = (sec.startAngle + sec.endAngle) / 2;
    const midR = (sec.innerRadius + sec.outerRadius) / 2;
    const rad = ((midAngleDeg - 90) * Math.PI) / 180.0;
    return {
      x: cx + midR * Math.cos(rad),
      y: cy + midR * Math.sin(rad)
    };
  };

  // Filter physical seats for active section
  const sectionSeats = useMemo(() => {
    if (!activeSection) return [];
    return physicalSeats.filter((s) => s.sectionId === activeSection.id);
  }, [activeSection, physicalSeats]);

  return (
    <div className="flex flex-col w-full h-full bg-[#111111] text-white select-none overflow-hidden rounded-xl border border-neutral-800">
      {/* Top Map Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800 gap-3">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs md:text-sm">
          <button
            id="map-breadcrumb-stadium"
            onClick={handleResetView}
            className="text-neutral-400 hover:text-white font-medium transition-colors"
          >
            Uppal Stadium
          </button>
          {activeStand && (
            <>
              <span className="text-neutral-600">/</span>
              <button
                id="map-breadcrumb-stand"
                onClick={() => {
                  setActiveSection(null);
                  setZoomLevel(1.5);
                }}
                className="text-orange-400 hover:text-orange-300 font-semibold"
              >
                {activeStand.name}
              </button>
            </>
          )}
          {activeSection && (
            <>
              <span className="text-neutral-600">/</span>
              <span className="text-white font-bold bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
                {activeSection.id} ({activeSection.category})
              </span>
            </>
          )}
        </div>

        {/* View Mode & Legend Selectors */}
        <div className="flex items-center space-x-3 text-xs">
          {mode === 'event' && eventName && (
            <div className="hidden sm:flex items-center space-x-1.5 bg-orange-950/40 text-orange-400 px-2.5 py-1 rounded border border-orange-800/50">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="font-semibold">{eventName}</span>
            </div>
          )}

          {/* Color Mode Toggle */}
          <div className="flex items-center bg-neutral-800 p-0.5 rounded-lg border border-neutral-700">
            <button
              id="map-toggle-category-mode"
              onClick={() => setColorMode('category')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                colorMode === 'category' ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Categories
            </button>
            <button
              id="map-toggle-status-mode"
              onClick={() => setColorMode('status')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                colorMode === 'status' ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Status
            </button>
          </div>

          {/* Zoom Buttons */}
          <div className="flex items-center space-x-1 bg-neutral-800 p-0.5 rounded-lg border border-neutral-700">
            <button
              id="map-zoom-in-btn"
              onClick={handleZoomIn}
              className="p-1.5 hover:bg-neutral-700 rounded text-neutral-300 hover:text-white transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              id="map-zoom-out-btn"
              onClick={handleZoomOut}
              className="p-1.5 hover:bg-neutral-700 rounded text-neutral-300 hover:text-white transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              id="map-zoom-reset-btn"
              onClick={handleResetView}
              className="p-1.5 hover:bg-neutral-700 rounded text-neutral-300 hover:text-white transition-colors"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Map Canvas Area */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative flex-1 w-full h-[520px] md:h-[620px] bg-[#0d0d0d] overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
      >
        {/* Subtle grid pattern in the canvas background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <svg
          id="uppal-stadium-interactive-svg"
          viewBox="0 0 1000 800"
          className="w-full h-full max-h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
            transformOrigin: '500px 400px'
          }}
        >
          <defs>
            {/* Outfield Grass Pattern */}
            <radialGradient id="outfieldGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2E7D32" />
              <stop offset="70%" stopColor="#1B5E20" />
              <stop offset="100%" stopColor="#0E3D12" />
            </radialGradient>

            {/* Stadium Pitch Pattern */}
            <linearGradient id="pitchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DEB887" />
              <stop offset="50%" stopColor="#D2B48C" />
              <stop offset="100%" stopColor="#C19A6B" />
            </linearGradient>

            <filter id="sectionShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Outer Stadium Concrete Ring Structure */}
          <ellipse
            cx={cx}
            cy={cy}
            rx="330"
            ry="295"
            fill="#1E1E22"
            stroke="#33333A"
            strokeWidth="6"
          />

          {/* Stands Outer Border Guidelines */}
          <ellipse
            cx={cx}
            cy={cy}
            rx="315"
            ry="280"
            fill="none"
            stroke="#2C2C34"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />

          {/* ---------------------------------------------------- */}
          {/* CRICKET FIELD IN THE BOWL CENTER */}
          {/* ---------------------------------------------------- */}
          <g id="stadium-field-oval">
            {/* Outfield Grass Oval */}
            <ellipse
              cx={cx}
              cy={cy}
              rx="155"
              ry="125"
              fill="url(#outfieldGrad)"
              stroke="#F97316"
              strokeWidth="2.5"
              strokeDasharray="8 4"
            />

            {/* 30-Yard Fielding Circle */}
            <ellipse
              cx={cx}
              cy={cy}
              rx="95"
              ry="75"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Central Cricket Pitch Rectangle */}
            <rect
              x={cx - 13}
              y={cy - 36}
              width="26"
              height="72"
              rx="3"
              fill="url(#pitchGrad)"
              stroke="#8B6914"
              strokeWidth="1"
            />

            {/* Bowling Creases & Wickets */}
            {/* North End (Pavilion End) */}
            <line x1={cx - 10} y1={cy - 24} x2={cx + 10} y2={cy - 24} stroke="#FFF" strokeWidth="1" />
            <circle cx={cx - 3} cy={cy - 26} r="1" fill="#FFF" />
            <circle cx={cx} cy={cy - 26} r="1" fill="#FFF" />
            <circle cx={cx + 3} cy={cy - 26} r="1" fill="#FFF" />

            {/* South End (VVS Laxman End) */}
            <line x1={cx - 10} y1={cy + 24} x2={cx + 10} y2={cy + 24} stroke="#FFF" strokeWidth="1" />
            <circle cx={cx - 3} cy={cy + 26} r="1" fill="#FFF" />
            <circle cx={cx} cy={cy + 26} r="1" fill="#FFF" />
            <circle cx={cx + 3} cy={cy + 26} r="1" fill="#FFF" />

            {/* Stadium Pitch Text */}
            <text
              x={cx}
              y={cy - 48}
              textAnchor="middle"
              fill="#A3E635"
              fontSize="9"
              fontWeight="bold"
              letterSpacing="1"
              opacity="0.9"
            >
              PAVILION END (NORTH)
            </text>
            <text
              x={cx}
              y={cy + 55}
              textAnchor="middle"
              fill="#A3E635"
              fontSize="9"
              fontWeight="bold"
              letterSpacing="1"
              opacity="0.9"
            >
              VVS LAXMAN END (SOUTH)
            </text>
          </g>

          {/* ---------------------------------------------------- */}
          {/* SECTIONS ARCS (DATA-DRIVEN RENDERING) */}
          {/* ---------------------------------------------------- */}
          <g id="stadium-sections-layer">
            {sections.map((section) => {
              const isSelected = activeSection?.id === section.id;
              const isStandSelected = activeStand?.sectionIds.includes(section.id);
              const isHovered = hoveredSection?.id === section.id;

              // Color determination
              let sectionFill = CATEGORY_COLORS[section.category].fill;
              if (colorMode === 'status') {
                sectionFill = '#10B981'; // default Available
              }

              // Path calculation
              const pathD = describeArc(
                cx,
                cy,
                section.innerRadius,
                section.outerRadius,
                section.startAngle,
                section.endAngle
              );

              const centroid = getSectionCentroid(section);

              return (
                <g
                  key={section.id}
                  id={`svg-section-${section.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionClick(section);
                  }}
                  onMouseEnter={() => setHoveredSection(section)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className="cursor-pointer transition-all duration-200"
                >
                  <path
                    d={pathD}
                    fill={sectionFill}
                    fillOpacity={
                      isSelected
                        ? 0.95
                        : isHovered
                        ? 0.85
                        : isStandSelected
                        ? 0.75
                        : activeStand
                        ? 0.25
                        : 0.65
                    }
                    stroke={
                      isSelected
                        ? '#F97316'
                        : isHovered
                        ? '#FFFFFF'
                        : '#1E1E22'
                    }
                    strokeWidth={isSelected ? 3.5 : isHovered ? 2.5 : 1.5}
                    filter={isSelected || isHovered ? 'url(#sectionShadow)' : undefined}
                  />

                  {/* Section ID label inside the arc */}
                  <text
                    x={centroid.x}
                    y={centroid.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#FFFFFF"
                    fontSize={isSelected ? '14' : '11'}
                    fontWeight="bold"
                    pointerEvents="none"
                    style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                  >
                    {section.id}
                  </text>
                </g>
              );
            })}
          </g>

          {/* ---------------------------------------------------- */}
          {/* STAND LABELS AROUND PERIMETER */}
          {/* ---------------------------------------------------- */}
          <g id="stadium-stand-labels">
            {/* North Stand */}
            <g
              id="svg-stand-north"
              onClick={(e) => {
                e.stopPropagation();
                const s = stands.find((st) => st.code === 'NORTH');
                if (s) handleStandClick(s);
              }}
              className="cursor-pointer"
            >
              <rect
                x={cx - 95}
                y={cy - 335}
                width="190"
                height="26"
                rx="5"
                fill={activeStand?.code === 'NORTH' ? '#F97316' : '#222226'}
                stroke="#444"
                strokeWidth="1"
              />
              <text
                x={cx}
                y={cy - 318}
                textAnchor="middle"
                fill="#FFF"
                fontSize="11"
                fontWeight="bold"
                letterSpacing="0.8"
              >
                NORTH STAND (MEDIA / BOXES)
              </text>
            </g>

            {/* South Stand */}
            <g
              id="svg-stand-south"
              onClick={(e) => {
                e.stopPropagation();
                const s = stands.find((st) => st.code === 'SOUTH');
                if (s) handleStandClick(s);
              }}
              className="cursor-pointer"
            >
              <rect
                x={cx - 105}
                y={cy + 310}
                width="210"
                height="26"
                rx="5"
                fill={activeStand?.code === 'SOUTH' ? '#F97316' : '#222226'}
                stroke="#444"
                strokeWidth="1"
              />
              <text
                x={cx}
                y={cy + 327}
                textAnchor="middle"
                fill="#FFF"
                fontSize="11"
                fontWeight="bold"
                letterSpacing="0.8"
              >
                SOUTH STAND (VVS LAXMAN PAVILION)
              </text>
            </g>

            {/* East Stand */}
            <g
              id="svg-stand-east"
              onClick={(e) => {
                e.stopPropagation();
                const s = stands.find((st) => st.code === 'EAST');
                if (s) handleStandClick(s);
              }}
              className="cursor-pointer"
            >
              <rect
                x={cx + 250}
                y={cy - 13}
                width="120"
                height="26"
                rx="5"
                fill={activeStand?.code === 'EAST' ? '#F97316' : '#222226'}
                stroke="#444"
                strokeWidth="1"
              />
              <text
                x={cx + 310}
                y={cy + 4}
                textAnchor="middle"
                fill="#FFF"
                fontSize="11"
                fontWeight="bold"
                letterSpacing="0.8"
              >
                EAST STAND
              </text>
            </g>

            {/* West Stand */}
            <g
              id="svg-stand-west"
              onClick={(e) => {
                e.stopPropagation();
                const s = stands.find((st) => st.code === 'WEST');
                if (s) handleStandClick(s);
              }}
              className="cursor-pointer"
            >
              <rect
                x={cx - 370}
                y={cy - 13}
                width="120"
                height="26"
                rx="5"
                fill={activeStand?.code === 'WEST' ? '#F97316' : '#222226'}
                stroke="#444"
                strokeWidth="1"
              />
              <text
                x={cx - 310}
                y={cy + 4}
                textAnchor="middle"
                fill="#FFF"
                fontSize="11"
                fontWeight="bold"
                letterSpacing="0.8"
              >
                WEST STAND
              </text>
            </g>
          </g>

          {/* Floodlight Towers at 6 realistic positions */}
          {[
            { x: cx - 280, y: cy - 250 },
            { x: cx + 280, y: cy - 250 },
            { x: cx - 330, y: cy + 160 },
            { x: cx + 330, y: cy + 160 },
            { x: cx - 180, y: cy + 300 },
            { x: cx + 180, y: cy + 300 }
          ].map((tower, idx) => (
            <g key={idx} opacity="0.6">
              <circle cx={tower.x} cy={tower.y} r="8" fill="#555" stroke="#FFF" strokeWidth="1.5" />
              <circle cx={tower.x} cy={tower.y} r="3" fill="#FBBF24" />
            </g>
          ))}
        </svg>

        {/* Floating Quick Info Pill for Hovered Section */}
        {hoveredSection && !activeSection && (
          <div className="absolute bottom-4 left-4 bg-neutral-900/90 backdrop-blur border border-neutral-700 text-white px-3.5 py-2 rounded-lg shadow-xl text-xs z-20 pointer-events-none flex items-center space-x-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: CATEGORY_COLORS[hoveredSection.category].fill }}
            ></span>
            <div>
              <span className="font-bold text-white mr-1">{hoveredSection.name} ({hoveredSection.id})</span>
              <span className="text-neutral-400">| Tier: {hoveredSection.tier} | Base: ₹{hoveredSection.basePrice}</span>
            </div>
          </div>
        )}
      </div>

      {/* ---------------------------------------------------- */}
      {/* DETAILED DATA-DRIVEN SEAT GRID VIEW (ZOOM LEVEL 3) */}
      {/* Appears when a specific section is selected! */}
      {/* ---------------------------------------------------- */}
      {activeSection && (
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 transition-all">
          <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-neutral-800 gap-2">
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {activeSection.name} ({activeSection.id}) Seats
                </h4>
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${CATEGORY_COLORS[activeSection.category].bg}`}>
                  {activeSection.category}
                </span>
                <span className="text-xs text-neutral-400">
                  {activeSection.totalSeats} Physical Seats | Base Price: ₹{activeSection.basePrice.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Click any seat node to inspect, block, or modify its metadata.
              </p>
            </div>

            <button
              id="close-section-seat-grid-btn"
              onClick={() => setActiveSection(null)}
              className="text-xs bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white px-3 py-1 rounded transition-colors"
            >
              Back to Stadium Bowl
            </button>
          </div>

          {/* Seat Grid Rows */}
          <div className="overflow-x-auto py-2">
            <div className="min-w-[500px] flex flex-col space-y-2">
              {activeSection.rows.map((rowLetter) => {
                const rowSeats = sectionSeats.filter((s) => s.row === rowLetter);

                return (
                  <div key={rowLetter} className="flex items-center space-x-2">
                    {/* Row Indicator */}
                    <div className="w-8 h-7 bg-neutral-800 rounded flex items-center justify-center text-xs font-bold text-neutral-300 border border-neutral-700">
                      Row {rowLetter}
                    </div>

                    {/* Seats in this Row */}
                    <div className="flex items-center space-x-1.5 flex-1">
                      {rowSeats.map((seat) => {
                        // Check if in Event Inventory Mode
                        const eventItem = eventInventory ? eventInventory[seat.id] : null;
                        const currentStatus = eventItem ? eventItem.status : seat.status;
                        const currentPrice = eventItem ? eventItem.price : seat.basePrice;
                        const isSelected = selectedSeatId === seat.id;

                        // Visual color determination
                        let seatColor = STATUS_COLORS[currentStatus].fill;
                        if (colorMode === 'category') {
                          seatColor = CATEGORY_COLORS[seat.category].fill;
                          if (currentStatus === 'Blocked') seatColor = '#F97316';
                          if (currentStatus === 'Maintenance') seatColor = '#6B7280';
                          if (currentStatus === 'Booked') seatColor = '#DC2626';
                        }

                        return (
                          <button
                            key={seat.id}
                            id={`seat-button-${seat.id}`}
                            onClick={() => {
                              onSelectSeat?.({
                                ...seat,
                                eventStatus: eventItem?.status,
                                eventPrice: eventItem?.price
                              });
                            }}
                            onMouseEnter={() => setHoveredSeat(seat)}
                            onMouseLeave={() => setHoveredSeat(null)}
                            title={`${seat.id} | ${seat.category} | ₹${currentPrice} | ${currentStatus}`}
                            className={`group relative w-8 h-8 rounded-md flex flex-col items-center justify-center transition-all ${
                              isSelected
                                ? 'ring-2 ring-orange-500 scale-110 z-10'
                                : 'hover:scale-105'
                            }`}
                            style={{
                              backgroundColor: seatColor,
                              border: isSelected ? '2px solid #FFF' : '1px solid rgba(0,0,0,0.3)'
                            }}
                          >
                            <span className="text-[10px] font-bold text-white leading-none">
                              {seat.seatNumber}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Status & Category Legend Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-neutral-950 border-t border-neutral-800 text-xs text-neutral-400 gap-3">
        {/* Status Legend */}
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-neutral-300">Status:</span>
          {Object.entries(STATUS_COLORS).map(([status, config]) => (
            <div key={status} className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: config.fill }}></span>
              <span>{config.label}</span>
            </div>
          ))}
        </div>

        {/* Category Legend */}
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-neutral-300">Categories:</span>
          {Object.entries(CATEGORY_COLORS).map(([cat, config]) => (
            <div key={cat} className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: config.fill }}></span>
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
