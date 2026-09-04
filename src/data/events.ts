import { StadiumEvent } from '../types';

export const SEEDED_EVENTS: StadiumEvent[] = [
  {
    id: 'evt-ind-aus-2026',
    name: 'India vs Australia',
    matchType: '3rd T20 International (Border-Gavaskar Trophy Series)',
    sport: 'Cricket',
    date: 'October 18, 2026',
    time: '7:00 PM',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    stadiumId: 'stadium-uppal-01',
    startingPrice: 1200,
    tournament: 'International Bilateral T20 Series',
    isHot: true,
    teams: {
      team1: {
        name: 'India',
        short: 'IND',
        flagOrBadge: '🇮🇳',
        color: '#0284C7'
      },
      team2: {
        name: 'Australia',
        short: 'AUS',
        flagOrBadge: '🇦🇺',
        color: '#EAB308'
      }
    },
    description:
      'High-voltage international cricket action comes to Uppal! Team India hosts the reigning powerhouse Australia in the electric series decider under the Rajiv Gandhi floodlights.'
  },
  {
    id: 'evt-hh-mw-2026',
    name: 'Hyderabad Hawks vs Mumbai Warriors',
    matchType: 'T20 Derby Championship Match',
    sport: 'Cricket',
    date: 'October 25, 2026',
    time: '7:30 PM',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    stadiumId: 'stadium-uppal-01',
    startingPrice: 800,
    tournament: 'Indian Premier T20 League',
    isHot: true,
    teams: {
      team1: {
        name: 'Hyderabad Hawks',
        short: 'HYD',
        flagOrBadge: '🦅',
        color: '#F97316'
      },
      team2: {
        name: 'Mumbai Warriors',
        short: 'MUM',
        flagOrBadge: '🛡️',
        color: '#2563EB'
      }
    },
    description:
      'The classic rivalry returns to Hyderabad as the orange army takes on the explosive Mumbai contingent. Expect packed grandstands, roaring chants, and non-stop maximums.'
  },
  {
    id: 'evt-hpl-final-2026',
    name: 'Hyderabad Premier League Final',
    matchType: 'Grand Championship Trophy Clash',
    sport: 'Cricket',
    date: 'November 8, 2026',
    time: '6:30 PM',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    stadiumId: 'stadium-uppal-01',
    startingPrice: 600,
    tournament: 'HPL Season 10 Final',
    isHot: true,
    teams: {
      team1: {
        name: 'Secunderabad Strikers',
        short: 'SEC',
        flagOrBadge: '⚡',
        color: '#DC2626'
      },
      team2: {
        name: 'Cyberabad Champions',
        short: 'CYB',
        flagOrBadge: '🏆',
        color: '#059669'
      }
    },
    description:
      'The pinnacle match of the Hyderabad Premier League Season 10. Witness the grand closing ceremony, fireworks, celebrity performances, and trophy coronation under lights.'
  },
  {
    id: 'evt-intl-t20-2026',
    name: 'International T20 Night',
    matchType: 'India vs South Africa',
    sport: 'Cricket',
    date: 'November 15, 2026',
    time: '7:00 PM',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    stadiumId: 'stadium-uppal-01',
    startingPrice: 1000,
    tournament: 'Global Super T20 Challenge',
    teams: {
      team1: {
        name: 'India',
        short: 'IND',
        flagOrBadge: '🇮🇳',
        color: '#0284C7'
      },
      team2: {
        name: 'South Africa',
        short: 'SA',
        flagOrBadge: '🇿🇦',
        color: '#16A34A'
      }
    },
    description:
      'Pace, spin, and boundary-hitting mastery collide as South Africa challenges India at Uppal. Special laser show and half-time DJ sets included for all ticket holders.'
  },
  {
    id: 'evt-hyd-allstars-2026',
    name: 'Hyderabad All Stars',
    matchType: 'Legends Exhibition & Charity Trophy',
    sport: 'Cricket',
    date: 'November 22, 2026',
    time: '7:30 PM',
    venue: 'Rajiv Gandhi International Cricket Stadium',
    venueLocation: 'Uppal, Hyderabad',
    stadiumId: 'stadium-uppal-01',
    startingPrice: 750,
    tournament: 'Deccan Cricket Masters Cup',
    teams: {
      team1: {
        name: 'Hyderabad Legends XI',
        short: 'HLX',
        flagOrBadge: '🌟',
        color: '#D97706'
      },
      team2: {
        name: 'World Veterans XI',
        short: 'WVX',
        flagOrBadge: '🌍',
        color: '#475569'
      }
    },
    description:
      'Iconic legends and cricketing masters return to grace the pitch in a celebration of Hyderabad cricket legacy and charitable community benefit.'
  }
];
