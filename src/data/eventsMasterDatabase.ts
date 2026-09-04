/**
 * Master Events & Tournament Database
 * Comprehensive fixtures, international series, IPL match schedules, team rosters, and weather models.
 */

export interface PlayerRosterSpec {
  id: string;
  name: string;
  role: 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicket-Keeper';
  battingStyle: 'Right-Hand Bat' | 'Left-Hand Bat';
  bowlingStyle?: string;
  nationality: string;
  isCaptain?: boolean;
}

export interface DetailedMatchEvent {
  id: string;
  title: string;
  tournament: string;
  format: 'T20' | 'ODI' | 'Test Match';
  venueId: string;
  venueName: string;
  city: string;
  date: string;
  startTime: string;
  endTime: string;
  teamA: { name: string; code: string; logoUrl: string; roster: PlayerRosterSpec[] };
  teamB: { name: string; code: string; logoUrl: string; roster: PlayerRosterSpec[] };
  pitchReport: string;
  weatherForecast: { temperatureCelsius: number; humidityPercent: number; rainProbabilityPercent: number };
  status: 'Scheduled' | 'Active' | 'Completed' | 'Postponed';
}

export const MASTER_MATCH_EVENTS: DetailedMatchEvent[] = [
  {
    id: 'evt-ind-aus-t20-2026',
    title: 'India vs Australia — 3rd T20 International',
    tournament: 'Border-Gavaskar T20 Series 2026',
    format: 'T20',
    venueId: 'stadium-uppal',
    venueName: 'Rajiv Gandhi International Cricket Stadium',
    city: 'Hyderabad',
    date: '2026-10-18',
    startTime: '19:00',
    endTime: '22:45',
    teamA: {
      name: 'India',
      code: 'IND',
      logoUrl: '/assets/teams/ind.png',
      roster: [
        { id: 'p-1', name: 'Suryakumar Yadav', role: 'Batsman', battingStyle: 'Right-Hand Bat', nationality: 'Indian', isCaptain: true },
        { id: 'p-2', name: 'Yashasvi Jaiswal', role: 'Batsman', battingStyle: 'Left-Hand Bat', nationality: 'Indian' },
        { id: 'p-3', name: 'Shubman Gill', role: 'Batsman', battingStyle: 'Right-Hand Bat', nationality: 'Indian' },
        { id: 'p-4', name: 'Rishabh Pant', role: 'Wicket-Keeper', battingStyle: 'Left-Hand Bat', nationality: 'Indian' },
        { id: 'p-5', name: 'Hardik Pandya', role: 'All-Rounder', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Fast-Medium', nationality: 'Indian' },
        { id: 'p-6', name: 'Rinku Singh', role: 'Batsman', battingStyle: 'Left-Hand Bat', nationality: 'Indian' },
        { id: 'p-7', name: 'Axar Patel', role: 'All-Rounder', battingStyle: 'Left-Hand Bat', bowlingStyle: 'Slow Left-Arm Ortho', nationality: 'Indian' },
        { id: 'p-8', name: 'Kuldeep Yadav', role: 'Bowler', battingStyle: 'Left-Hand Bat', bowlingStyle: 'Left-Arm Unorthodox', nationality: 'Indian' },
        { id: 'p-9', name: 'Jasprit Bumrah', role: 'Bowler', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Fast', nationality: 'Indian' },
        { id: 'p-10', name: 'Arshdeep Singh', role: 'Bowler', battingStyle: 'Left-Hand Bat', bowlingStyle: 'Left-Arm Medium-Fast', nationality: 'Indian' },
        { id: 'p-11', name: 'Mohammed Siraj', role: 'Bowler', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Fast-Medium', nationality: 'Indian' }
      ]
    },
    teamB: {
      name: 'Australia',
      code: 'AUS',
      logoUrl: '/assets/teams/aus.png',
      roster: [
        { id: 'p-12', name: 'Mitchell Marsh', role: 'All-Rounder', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Medium', nationality: 'Australian', isCaptain: true },
        { id: 'p-13', name: 'Travis Head', role: 'Batsman', battingStyle: 'Left-Hand Bat', nationality: 'Australian' },
        { id: 'p-14', name: 'Glenn Maxwell', role: 'All-Rounder', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Off-Break', nationality: 'Australian' },
        { id: 'p-15', name: 'Marcus Stoinis', role: 'All-Rounder', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Medium', nationality: 'Australian' },
        { id: 'p-16', name: 'Josh Inglis', role: 'Wicket-Keeper', battingStyle: 'Right-Hand Bat', nationality: 'Australian' },
        { id: 'p-17', name: 'Tim David', role: 'Batsman', battingStyle: 'Right-Hand Bat', nationality: 'Australian' },
        { id: 'p-18', name: 'Adam Zampa', role: 'Bowler', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Leg-Break', nationality: 'Australian' },
        { id: 'p-19', name: 'Josh Hazlewood', role: 'Bowler', battingStyle: 'Left-Hand Bat', bowlingStyle: 'Right-Arm Fast-Medium', nationality: 'Australian' },
        { id: 'p-20', name: 'Mitchell Starc', role: 'Bowler', battingStyle: 'Left-Hand Bat', bowlingStyle: 'Left-Arm Fast', nationality: 'Australian' },
        { id: 'p-21', name: 'Pat Cummins', role: 'Bowler', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Fast', nationality: 'Australian' },
        { id: 'p-22', name: 'Nathan Ellis', role: 'Bowler', battingStyle: 'Right-Hand Bat', bowlingStyle: 'Right-Arm Fast-Medium', nationality: 'Australian' }
      ]
    },
    pitchReport: 'True-bounce hard red soil pitch favoring high-scoring strokeplay. Spinners likely to come into play during middle overs.',
    weatherForecast: { temperatureCelsius: 28, humidityPercent: 62, rainProbabilityPercent: 5 },
    status: 'Active'
  },
  {
    id: 'evt-ind-eng-t20-2026',
    title: 'India vs England — 2nd T20 Clash',
    tournament: 'Paytm Trophy International Series 2026',
    format: 'T20',
    venueId: 'stadium-uppal',
    venueName: 'Rajiv Gandhi International Cricket Stadium',
    city: 'Hyderabad',
    date: '2026-10-24',
    startTime: '19:00',
    endTime: '22:45',
    teamA: {
      name: 'India',
      code: 'IND',
      logoUrl: '/assets/teams/ind.png',
      roster: []
    },
    teamB: {
      name: 'England',
      code: 'ENG',
      logoUrl: '/assets/teams/eng.png',
      roster: []
    },
    pitchReport: 'Fresh pitch under floodlights with excellent boundary carry.',
    weatherForecast: { temperatureCelsius: 26, humidityPercent: 58, rainProbabilityPercent: 0 },
    status: 'Active'
  }
];
