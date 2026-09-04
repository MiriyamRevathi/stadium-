# STADIA — Stadium Event & Interactive Seat Booking Platform

STADIA is a production-grade, frontend-first stadium ticketing and seat reservation application inspired by Ticketmaster and the Rajiv Gandhi International Cricket Stadium in Uppal, Hyderabad.

The application operates **entirely client-side** using strongly-typed local seed data and responsive state persistence. No external backend, database, or API keys are required.

---

## 🏟️ Highlights & Architectural Capabilities

### 1. Interactive SVG Stadium Map
- **Full Stadium Geometry**: Complete radial geometry of Uppal Stadium, featuring the central cricket pitch, 30-yard fielding circle, boundary ropes, sight screens, and cardinal grandstands (North Pavilion, South Pavilion / VVS Laxman End, East Stand, and West Stand).
- **Multi-Tiered Sections**: Interactive SVG paths for lower bowl (`A01-A06`, `B01-B06`, `C01-C06`, `D01-D06`), middle corporate suites & VIP enclosures (`SUITE-A`, `SUITE-B`, `VIP-A`, `VIP-B`, `PREMIUM-A`, `PREMIUM-B`), and upper bowl (`E01-E06`).
- **Dynamic Pan & Zoom**: Controls for Zoom In (`+`), Zoom Out (`-`), and Reset View, plus mouse wheel zooming and click-and-drag panning.
- **Section Selection**: Clicking any section zooms into the sector and opens its individual seat grid.

### 2. High-Density Individual Seat Map
- **Seat Status Visuals**: Distinct visual states with accessibility indicators:
  - **Available**: White seat with black border.
  - **Selected**: Vibrant Orange (`#F97316`) with ring accent and checkmark.
  - **Sold**: Dark charcoal with subtle cross indicator.
  - **Blocked**: Light neutral with subtle dash indicator.
- **Hover Tooltips**: Live details displaying Section, Row, Seat Number, Category, Price, and Availability.
- **Pitch Orientation**: Visual field indicator showing playing pitch direction (`CRICKET PITCH THIS WAY ↓`).
- **8-Seat Allocation Limit**: Guard preventing more than 8 seats per order.

### 3. Connected Right-Side Ticket Panel
- Synchronized with the stadium map:
  - Clicking a ticket listing highlights and zooms to the corresponding stadium section.
  - Selecting a section on the map highlights and reveals its ticket details.
- **Ticket Filters & Sorting**:
  - Filter by Category (`All`, `Regular`, `Premium`, `VIP`, `Suite`).
  - Max price range slider (`₹600` – `₹10,000`).
  - Available-only toggle.
  - Sort by **Lowest Price** or **Best Seats**.

### 4. Booking Summary & Real-Time Checkout
- **Sticky Booking Summary**: Shows count of selected seats, subtotal, convenience fee (₹125/seat), taxes/GST (8%), and grand total.
- **Simulated Checkout Flow**:
  - Customer contact information (Name, Email, Mobile).
  - Simulated payment methods: **UPI / QR**, **Cards**, and **Net Banking**.
  - 1-second simulated transaction processing with loading animation.

### 5. Confirmation & Digital Match Pass
- **Booking Confirmation**: Instant confirmation view with generated Booking ID (e.g., `STAD-2026-XXXXXX`), match details, seat list, and total amount paid.
- **Official Digital Match Pass**: Realistic mobile-style ticket pass with turnstile entry guidance, simulated SVG barcode, and simulated vector QR code for gate scanning.
- **Print Option**: Integrated print shortcut for offline ticket printing.

### 6. Additional Modules
- **My Bookings**: Customer match pass history with pre-seeded example bookings and newly created passes stored in `localStorage`.
- **Stadium Venue Profile**: Uppal Stadium facts, capacity (55,000), grandstand breakdown, facilities (floodlights, corporate boxes, wheelchair access), and Hyderabad Metro transit guide.
- **Admin Management Portal**: Frontend administrative dashboard with real-time KPIs (Total Events, Confirmed Bookings, Available Seats, Simulated Revenue) and data tables for matches, seats, and transactions.

---

## 🎨 Visual Identity

- **Primary Colors**: Orange (`#F97316`), White (`#FFFFFF`), Black (`#000000`).
- **Layout**: Full-width viewport design (`w-full max-w-none`) with no artificial side gaps or empty container margins.
- **Typography & Icons**: Clean typographic hierarchy paired with icons from `lucide-react`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Deterministic Installation
To install the exact locked dependencies:
```bash
npm ci
```

### Running Locally
Start the development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### Building for Production
To test production compilation:
```bash
npm run build
```

---

## 📁 Project Structure

```
├── index.html                 # HTML entry point with synchronized metadata
├── metadata.json              # Platform configuration
├── package.json               # Dependencies & scripts
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Master state controller & routing
│   ├── index.css              # Global styles & Tailwind CSS
│   ├── types/
│   │   └── index.ts           # Strongly typed data models
│   ├── data/
│   │   ├── events.ts          # Seeded cricket events & tournaments
│   │   ├── stadium.ts         # Rajiv Gandhi Stadium venue specs
│   │   ├── sections.ts        # SVG geometry & arc sector algorithms
│   │   ├── seats.ts           # Deterministic seat availability engine
│   │   ├── bookings.ts        # Seeded bookings & localStorage sync
│   │   └── users.ts           # Demo customer profile
│   └── components/
│       ├── Navbar.tsx         # Responsive navigation & search
│       ├── Hero.tsx           # Stadium banner & featured match
│       ├── EventCard.tsx      # Match fixture card
│       ├── EventGrid.tsx      # Filterable event catalog
│       ├── Legend.tsx         # Seat & section status color key
│       ├── StadiumMap.tsx     # Interactive SVG stadium map
│       ├── SeatMap.tsx        # Section seat grid & row layout
│       ├── Seat.tsx           # Interactive seat button with ARIA
│       ├── TicketPanel.tsx    # Right-hand filterable ticket feed
│       ├── BookingSummary.tsx # Sticky bottom cart bar
│       ├── BookingView.tsx    # Connected map & ticket workspace
│       ├── CheckoutModal.tsx  # Customer details & payment simulator
│       ├── BookingConfirmation.tsx # Transaction success screen
│       ├── DigitalTicket.tsx  # Realistic match pass with barcode/QR
│       ├── MyBookings.tsx     # User pass collection
│       ├── StadiumsPage.tsx   # Uppal venue guide & transit info
│       └── AdminDashboard.tsx # Operations & analytics portal
```
