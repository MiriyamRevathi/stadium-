import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

const mockDashboardData = {
  totalEvents: 4,
  upcomingEvents: 3,
  totalStadiumSeats: 55000,
  availableSeats: 18500,
  bookedSeats: 36500,
  todayBookings: 142,
  totalRevenue: 14250000,
  pendingRefundRequests: 2
};

const mockStadiumData = {
  settings: {
    stadiumName: 'Rajiv Gandhi International Cricket Stadium',
    stadiumShortName: 'Uppal Stadium',
    stadiumLocation: 'Uppal, Hyderabad, Telangana 500039',
    city: 'Hyderabad',
    established: 2004,
    totalCapacity: 55000,
    gates: ['Gate 1', 'Gate 2', 'Gate 3', 'Gate 4', 'Gate 5', 'Gate 6', 'Gate 7', 'Gate 8', 'Gate 9', 'Gate 10', 'Gate 11', 'Gate 12'],
    refundWindowDays: 3,
    refundProcessingTime: '5–7 business days after approval',
    noGeneralReturnPolicyText: 'NO GENERAL RETURN POLICY: Tickets are non-refundable unless a refund request is submitted at least 3 days before the scheduled event.',
    maxSeatsPerBooking: 8,
    seatHoldTimeoutMinutes: 10
  },
  standsCount: 4,
  sectionsCount: 24,
  seatsCount: 840
};

const mockStands = [
  { id: 'stand-north', name: 'North Stand', code: 'NORTH', description: 'Pavilion End featuring Media Centre and Corporate Boxes.', capacity: 14200, sectionIds: ['N01', 'N02', 'N03', 'N04'], gates: ['Gate 1', 'Gate 2', 'Gate 3'], features: ['Pavilion End View', 'Direct Bowler Axis', 'Air-Conditioned Lounges'] },
  { id: 'stand-south', name: 'South Stand', code: 'SOUTH', description: 'VVS Laxman Pavilion with dressing rooms and player facilities.', capacity: 15300, sectionIds: ['S01', 'S02', 'S03', 'S04'], gates: ['Gate 8', 'Gate 9', 'Gate 10'], features: ['VVS Laxman Pavilion', 'Dugout Proximity', 'Premium Buffets'] },
  { id: 'stand-east', name: 'East Stand', code: 'EAST', description: 'Public grandstand with panoramic field views.', capacity: 12800, sectionIds: ['E01', 'E02', 'E03'], gates: ['Gate 4', 'Gate 5', 'Gate 6', 'Gate 7'], features: ['High Atmosphere', 'Concessions Plaza', 'Wide Aisles'] },
  { id: 'stand-west', name: 'West Stand', code: 'WEST', description: 'Grandstand hospitality with afternoon shade and club suites.', capacity: 12700, sectionIds: ['W01', 'W02', 'W03'], gates: ['Gate 11', 'Gate 12', 'Gate 13', 'Gate 14'], features: ['Afternoon Shade', 'Executive Lounges', 'Padded Seats'] }
];

const mockEvents = [
  { id: 'evt-ind-aus', name: 'India vs Australia', eventType: 'Cricket', date: '2026-10-18', startTime: '19:00', endTime: '22:45', description: '3rd T20 International Series decider under floodlights at Uppal Stadium.', status: 'Active', tournament: 'Border-Gavaskar T20 Series', venue: 'Rajiv Gandhi International Cricket Stadium', venueLocation: 'Uppal, Hyderabad', activeBookingsCount: 142 },
  { id: 'evt-ind-eng', name: 'India vs England', eventType: 'Cricket', date: '2026-10-24', startTime: '19:00', endTime: '22:45', description: 'International clash under Rajiv Gandhi Stadium floodlights.', status: 'Active', tournament: 'Paytm Trophy Series', venue: 'Rajiv Gandhi International Cricket Stadium', venueLocation: 'Uppal, Hyderabad', activeBookingsCount: 98 }
];

const mockRefunds = [
  { id: 'REF-2026-001', bookingId: 'BK-UPPAL-8901', customerName: 'Rahul Reddy', eventName: 'India vs Australia', eventDate: '2026-10-18', originalAmount: 7000, refundAmount: 7000, requestDate: '2026-10-12', deadlineDate: '2026-10-15', eligibility: 'Eligible', daysBeforeEvent: 6, status: 'Requested' },
  { id: 'REF-2026-003', bookingId: 'BK-UPPAL-8904', customerName: 'Sneha Kulkarni', eventName: 'India vs Australia', eventDate: '2026-10-18', originalAmount: 1500, refundAmount: 1500, requestDate: '2026-10-16', deadlineDate: '2026-10-15', eligibility: 'Not Eligible', daysBeforeEvent: 2, status: 'Rejected' }
];

function createApiMiddleware() {
  return (req: any, res: any, next: any) => {
    const url = (req.url || '').split('?')[0];

    // Always return valid JSON for health & API routes — never SPA HTML fallback
    // This prevents "Unexpected token '<' ... is not valid JSON" errors
    if (url === '/health' || url.startsWith('/health/')) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.statusCode = 200;
      res.end(JSON.stringify({ status: 'HEALTHY', venue: 'Rajiv Gandhi International Cricket Stadium', version: '2.0.0' }));
      return;
    }

    if (url.startsWith('/api/')) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.statusCode = 200;

      if (url.startsWith('/api/admin/dashboard')) {
        res.end(JSON.stringify(mockDashboardData));
        return;
      }
      if (url.startsWith('/api/admin/stadium')) {
        res.end(JSON.stringify(mockStadiumData));
        return;
      }
      if (url.startsWith('/api/admin/stands')) {
        res.end(JSON.stringify(mockStands));
        return;
      }
      if (url.startsWith('/api/admin/events')) {
        res.end(JSON.stringify(mockEvents));
        return;
      }
      if (url.startsWith('/api/admin/refunds')) {
        res.end(JSON.stringify(mockRefunds));
        return;
      }
      if (url.startsWith('/api/admin/settings')) {
        res.end(JSON.stringify(mockStadiumData.settings));
        return;
      }
      if (url.startsWith('/api/access/gate-scan')) {
        res.end(JSON.stringify({ access: 'GRANTED', turnstileStatus: 'UNLOCKED', message: 'Gate pass verified.' }));
        return;
      }

      // Generic safe JSON fallback for any unhandled /api/... routes
      res.end(JSON.stringify({ status: 'success', message: 'STADIA API Endpoint Ready', url }));
      return;
    }

    next();
  };
}

function apiMiddlewarePlugin(): Plugin {
  return {
    name: 'api-middleware-plugin',
    configureServer(server) {
      server.middlewares.use(createApiMiddleware());
    },
    // Also apply in `vite preview` so production-like serves never return HTML for /api
    configurePreviewServer(server) {
      server.middlewares.use(createApiMiddleware());
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiMiddlewarePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
