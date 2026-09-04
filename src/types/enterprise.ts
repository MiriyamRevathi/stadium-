/** STADIA Enterprise Domain Types - Full platform type system */
export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP' | 'AED' | 'SGD' | 'AUD';
export type LocaleCode = 'en-IN' | 'en-US' | 'hi-IN' | 'te-IN' | 'ta-IN' | 'kn-IN' | 'mr-IN';
export type LoyaltyTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Legend';
export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';
export type PaymentMethodType = 'upi' | 'card' | 'netbanking' | 'wallet' | 'emi' | 'bnpl' | 'loyalty_points' | 'voucher';
export type WaitlistPriority = 'standard' | 'loyalty_boost' | 'vip' | 'accessibility' | 'staff';
export type SeasonPackageType = 'full_season' | 'half_season' | 'weekend_pack' | 'rivalry_pack' | 'flex_pack' | 'corporate_box_season';
export type NotificationChannel = 'in_app' | 'email' | 'sms' | 'push' | 'whatsapp';
export type BookingLifecycle = 'draft' | 'held' | 'pending_payment' | 'confirmed' | 'checked_in' | 'cancelled' | 'refunded';

export interface Money {
  amount: number;
  currency: CurrencyCode;
  formatted?: string;
}

export interface GeoCoordinate {
  lat: number;
  lng: number;
  altitude?: number;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  geo?: GeoCoordinate;
}

export interface LoyaltyAccount {
  userId: string;
  memberId: string;
  tier: LoyaltyTier;
  pointsBalance: number;
  lifetimePoints: number;
  pointsExpiring30Days: number;
  tierProgressPercent: number;
  nextTier: LoyaltyTier | null;
  pointsToNextTier: number;
  joinedAt: string;
  lastActivityAt: string;
  benefits: LoyaltyBenefit[];
  badges: LoyaltyBadge[];
  referralCode: string;
  referredCount: number;
}

export interface LoyaltyBenefit {
  id: string;
  title: string;
  description: string;
  tierRequired: LoyaltyTier;
  category: 'discount' | 'access' | 'perk' | 'priority' | 'exclusive';
  valuePercent?: number;
  valueFlat?: number;
  active: boolean;
}

export interface LoyaltyBadge {
  id: string;
  name: string;
  description: string;
  iconKey: string;
  earnedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface LoyaltyTransaction {
  id: string;
  userId: string;
  type: 'earn' | 'redeem' | 'expire' | 'adjust' | 'bonus' | 'referral';
  points: number;
  balanceAfter: number;
  reason: string;
  relatedBookingId?: string;
  relatedEventId?: string;
  createdAt: string;
  expiresAt?: string;
}

export interface LoyaltyRedemptionOffer {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  category: 'ticket_discount' | 'concession' | 'merchandise' | 'parking' | 'upgrade' | 'experience';
  inventoryRemaining: number;
  validUntil: string;
  minTier: LoyaltyTier;
  imageKey?: string;
}

export interface SeasonTicketPackage {
  id: string;
  name: string;
  type: SeasonPackageType;
  stadiumId: string;
  stadiumName: string;
  seasonYear: number;
  sectionIds: string[];
  sectionNames: string[];
  category: string;
  totalMatches: number;
  includedMatches: SeasonMatchAllocation[];
  basePrice: number;
  currentPrice: number;
  earlyBirdDiscountPercent: number;
  installmentAvailable: boolean;
  installmentPlan?: InstallmentPlan;
  benefits: string[];
  maxPerCustomer: number;
  remainingInventory: number;
  salesOpenAt: string;
  salesCloseAt: string;
  status: 'draft' | 'on_sale' | 'sold_out' | 'closed';
}

export interface SeasonMatchAllocation {
  eventId: string;
  eventName: string;
  eventDate: string;
  included: boolean;
  transferable: boolean;
}

export interface InstallmentPlan {
  numberOfPayments: number;
  frequencyDays: number;
  firstPaymentPercent: number;
  interestPercent: number;
  lateFeeFlat: number;
}

export interface SeasonTicketHold {
  id: string;
  packageId: string;
  userId: string;
  seatIds: string[];
  quantity: number;
  totalAmount: number;
  depositPaid: number;
  remainingBalance: number;
  installmentSchedule: InstallmentPayment[];
  status: 'held' | 'active' | 'payment_overdue' | 'cancelled' | 'completed';
  purchasedAt: string;
  activatedAt?: string;
}

export interface InstallmentPayment {
  sequence: number;
  dueDate: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue' | 'waived';
  paidAt?: string;
  paymentMethod?: string;
}

export interface WaitlistEntry {
  id: string;
  userId: string;
  eventId: string;
  sectionPreferences: string[];
  categoryPreferences: string[];
  maxPrice: number;
  quantityDesired: number;
  priority: WaitlistPriority;
  loyaltyTierAtJoin: LoyaltyTier;
  joinedAt: string;
  notifiedAt?: string;
  claimedAt?: string;
  expiredAt?: string;
  status: 'active' | 'notified' | 'claimed' | 'expired' | 'cancelled';
  notificationChannels: ('email' | 'sms' | 'push' | 'whatsapp')[];
  holdExpiresAt?: string;
}

export interface WaitlistReleaseBatch {
  id: string;
  eventId: string;
  releasedSeatIds: string[];
  notifiedEntryIds: string[];
  createdAt: string;
  expiresAt: string;
  claimedCount: number;
}

export interface GroupBookingRequest {
  id: string;
  organizerUserId: string;
  eventId: string;
  groupName: string;
  estimatedSize: number;
  confirmedSize: number;
  sectionPreferences: string[];
  budgetPerPerson: number;
  specialRequests: string[];
  dietaryNotes?: string;
  accessibilityNeeds: string[];
  status: 'inquiry' | 'quoted' | 'deposit_paid' | 'confirmed' | 'cancelled';
  quote?: GroupQuote;
  members: GroupMember[];
  createdAt: string;
  updatedAt: string;
}

export interface GroupMember {
  id: string;
  name: string;
  email: string;
  phone?: string;
  seatId?: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  dietaryPreference?: string;
  accessibilityNeed?: string;
}

export interface GroupQuote {
  quoteId: string;
  perPersonTicket: number;
  perPersonConcessionCredit: number;
  groupDiscountPercent: number;
  coordinatorCompTickets: number;
  totalBeforeTax: number;
  taxAmount: number;
  grandTotal: number;
  validUntil: string;
  notes: string[];
}

export interface PaymentIntent {
  id: string;
  bookingId?: string;
  seasonHoldId?: string;
  groupRequestId?: string;
  amount: number;
  currency: CurrencyCode;
  methodsAllowed: PaymentMethodType[];
  status: 'created' | 'processing' | 'succeeded' | 'failed' | 'cancelled' | 'refunded' | 'partially_refunded';
  clientSecret?: string;
  metadata: Record<string, string>;
  createdAt: string;
  updatedAt: string;
  failureReason?: string;
  refunds: PaymentRefund[];
}

export interface PaymentRefund {
  id: string;
  amount: number;
  reason: string;
  status: 'pending' | 'processed' | 'failed';
  processedAt?: string;
}

export interface FraudSignal {
  id: string;
  type: 'velocity' | 'device' | 'geo' | 'payment' | 'behavior' | 'account' | 'bot';
  severity: RiskLevel;
  description: string;
  score: number;
  detectedAt: string;
  metadata: Record<string, unknown>;
}

export interface RiskAssessment {
  transactionId: string;
  userId: string;
  overallScore: number;
  riskLevel: RiskLevel;
  signals: FraudSignal[];
  recommendation: 'allow' | 'challenge' | 'review' | 'block';
  assessedAt: string;
  rulesTriggered: string[];
}

export interface SeatRecommendation {
  seatIds: string[];
  sectionId: string;
  sectionName: string;
  category: string;
  totalPrice: number;
  score: number;
  reasons: string[];
  viewQuality: number;
  proximityToAmenities: string[];
  shadeFactor: number;
  noiseLevel: 'quiet' | 'moderate' | 'loud';
}

export interface EventRecommendation {
  eventId: string;
  eventName: string;
  score: number;
  reasons: string[];
  predictedInterest: number;
}

export interface RecommendationContext {
  userId?: string;
  eventId?: string;
  currentSectionId?: string;
  budgetMax?: number;
  partySize?: number;
  preferredCategories?: string[];
  accessibilityRequired?: boolean;
}

export interface LiveMatchState {
  eventId: string;
  status: 'pre_match' | 'live' | 'innings_break' | 'rain_delay' | 'completed' | 'abandoned';
  score: MatchScore;
  currentOver?: string;
  batsmen?: LiveBatsman[];
  bowler?: LiveBowler;
  lastBalls: BallEvent[];
  commentary: CommentaryLine[];
  winProbability: { teamA: number; teamB: number };
  crowdEnergy: number;
  updatedAt: string;
}

export interface MatchScore {
  teamA: string;
  teamB: string;
  teamAScore: string;
  teamBScore: string;
  overs: string;
  target?: number;
  requiredRunRate?: number;
}

export interface LiveBatsman {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  onStrike: boolean;
}

export interface LiveBowler {
  name: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface BallEvent {
  over: string;
  ball: number;
  runs: number;
  isWicket: boolean;
  isBoundary: boolean;
  isSix: boolean;
  description: string;
  timestamp: string;
}

export interface CommentaryLine {
  id: string;
  over: string;
  text: string;
  type: 'ball' | 'milestone' | 'info' | 'sponsor';
  timestamp: string;
}

export interface FanClubMembership {
  userId: string;
  clubId: string;
  clubName: string;
  joinedAt: string;
  role: 'member' | 'moderator' | 'ambassador' | 'founder';
  postsCount: number;
  reputation: number;
  badges: string[];
}

export interface FanClubPost {
  id: string;
  clubId: string;
  authorId: string;
  authorName: string;
  title: string;
  body: string;
  mediaUrls: string[];
  likes: number;
  commentsCount: number;
  createdAt: string;
  tags: string[];
  pinned: boolean;
}

export interface FanMeetup {
  id: string;
  clubId: string;
  title: string;
  description: string;
  location: string;
  eventId?: string;
  startsAt: string;
  capacity: number;
  rsvpCount: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface NotificationPreference {
  userId: string;
  channel: NotificationChannel;
  categories: { booking: boolean; waitlist: boolean; loyalty: boolean; promotions: boolean; matchUpdates: boolean; security: boolean; group: boolean };
  quietHoursStart?: string;
  quietHoursEnd?: string;
}

export interface AppNotification {
  id: string;
  userId: string;
  title: string;
  body: string;
  category: string;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  read: boolean;
  actionUrl?: string;
  actionLabel?: string;
  createdAt: string;
  expiresAt?: string;
  imageUrl?: string;
}

export interface AccessibilityProfile {
  userId: string;
  wheelchairAccess: boolean;
  reducedMobility: boolean;
  visualAssistance: boolean;
  hearingAssistance: boolean;
  companionSeatRequired: boolean;
  preferredGate?: string;
  preferredAisle?: string;
  notes: string;
  updatedAt: string;
}

export interface AccessibleSeatInfo {
  seatId: string;
  sectionId: string;
  features: string[];
  companionSeatIds: string[];
  nearestAccessibleRestroom: string;
  nearestElevator: string;
  stepFreePath: boolean;
}

export interface ExchangeRateSnapshot {
  base: CurrencyCode;
  rates: Record<CurrencyCode, number>;
  fetchedAt: string;
  provider: string;
}

export interface DynamicPricePoint {
  seatId: string;
  eventId: string;
  basePrice: number;
  currentPrice: number;
  demandMultiplier: number;
  timeMultiplier: number;
  loyaltyDiscount: number;
  finalPrice: number;
  calculatedAt: string;
}

export interface AuditLogEntry {
  id: string;
  actorId: string;
  actorRole: string;
  action: string;
  resourceType: string;
  resourceId: string;
  before?: Record<string, unknown>;
  after?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  timestamp: string;
}

export interface TelemetryEvent {
  name: string;
  properties: Record<string, string | number | boolean>;
  userId?: string;
  sessionId?: string;
  timestamp: string;
}

export interface InventorySnapshot {
  eventId: string;
  sectionId: string;
  totalSeats: number;
  available: number;
  sold: number;
  blocked: number;
  held: number;
  capturedAt: string;
}

export interface RevenueBreakdown {
  ticketRevenue: number;
  concessionRevenue: number;
  merchandiseRevenue: number;
  parkingRevenue: number;
  loyaltyRedemptions: number;
  refundsIssued: number;
  netRevenue: number;
  periodStart: string;
  periodEnd: string;
}

export interface PromoCode {
  code: string;
  discountPercent: number;
  discountFlat: number;
  maxRedemptions: number;
  redeemedCount: number;
  validFrom: string;
  validUntil: string;
  minOrderAmount: number;
  applicableCategories: string[];
  active: boolean;
}

export interface GateConfiguration {
  gateId: string;
  gateName: string;
  standIds: string[];
  maxThroughputPerHour: number;
  accessible: boolean;
  openTime: string;
  closeTime: string;
  staffAssigned: number;
}

export interface TurnstileEvent {
  id: string;
  gateId: string;
  ticketId: string;
  userId: string;
  result: 'granted' | 'denied' | 'duplicate';
  scannedAt: string;
  deviceId: string;
}

export type EntityId1 = string & { readonly __brand: 'EntityId1' };
export interface PaginatedResult1<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse1<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId2 = string & { readonly __brand: 'EntityId2' };
export interface PaginatedResult2<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse2<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId3 = string & { readonly __brand: 'EntityId3' };
export interface PaginatedResult3<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse3<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId4 = string & { readonly __brand: 'EntityId4' };
export interface PaginatedResult4<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse4<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId5 = string & { readonly __brand: 'EntityId5' };
export interface PaginatedResult5<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse5<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId6 = string & { readonly __brand: 'EntityId6' };
export interface PaginatedResult6<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse6<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId7 = string & { readonly __brand: 'EntityId7' };
export interface PaginatedResult7<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse7<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId8 = string & { readonly __brand: 'EntityId8' };
export interface PaginatedResult8<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse8<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId9 = string & { readonly __brand: 'EntityId9' };
export interface PaginatedResult9<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse9<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId10 = string & { readonly __brand: 'EntityId10' };
export interface PaginatedResult10<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse10<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId11 = string & { readonly __brand: 'EntityId11' };
export interface PaginatedResult11<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse11<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId12 = string & { readonly __brand: 'EntityId12' };
export interface PaginatedResult12<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse12<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId13 = string & { readonly __brand: 'EntityId13' };
export interface PaginatedResult13<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse13<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId14 = string & { readonly __brand: 'EntityId14' };
export interface PaginatedResult14<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse14<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId15 = string & { readonly __brand: 'EntityId15' };
export interface PaginatedResult15<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse15<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId16 = string & { readonly __brand: 'EntityId16' };
export interface PaginatedResult16<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse16<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId17 = string & { readonly __brand: 'EntityId17' };
export interface PaginatedResult17<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse17<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId18 = string & { readonly __brand: 'EntityId18' };
export interface PaginatedResult18<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse18<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId19 = string & { readonly __brand: 'EntityId19' };
export interface PaginatedResult19<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse19<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId20 = string & { readonly __brand: 'EntityId20' };
export interface PaginatedResult20<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse20<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId21 = string & { readonly __brand: 'EntityId21' };
export interface PaginatedResult21<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse21<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId22 = string & { readonly __brand: 'EntityId22' };
export interface PaginatedResult22<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse22<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId23 = string & { readonly __brand: 'EntityId23' };
export interface PaginatedResult23<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse23<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId24 = string & { readonly __brand: 'EntityId24' };
export interface PaginatedResult24<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse24<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId25 = string & { readonly __brand: 'EntityId25' };
export interface PaginatedResult25<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse25<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId26 = string & { readonly __brand: 'EntityId26' };
export interface PaginatedResult26<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse26<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId27 = string & { readonly __brand: 'EntityId27' };
export interface PaginatedResult27<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse27<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId28 = string & { readonly __brand: 'EntityId28' };
export interface PaginatedResult28<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse28<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId29 = string & { readonly __brand: 'EntityId29' };
export interface PaginatedResult29<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse29<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId30 = string & { readonly __brand: 'EntityId30' };
export interface PaginatedResult30<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse30<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId31 = string & { readonly __brand: 'EntityId31' };
export interface PaginatedResult31<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse31<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId32 = string & { readonly __brand: 'EntityId32' };
export interface PaginatedResult32<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse32<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId33 = string & { readonly __brand: 'EntityId33' };
export interface PaginatedResult33<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse33<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId34 = string & { readonly __brand: 'EntityId34' };
export interface PaginatedResult34<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse34<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId35 = string & { readonly __brand: 'EntityId35' };
export interface PaginatedResult35<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse35<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId36 = string & { readonly __brand: 'EntityId36' };
export interface PaginatedResult36<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse36<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId37 = string & { readonly __brand: 'EntityId37' };
export interface PaginatedResult37<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse37<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId38 = string & { readonly __brand: 'EntityId38' };
export interface PaginatedResult38<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse38<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}

export type EntityId39 = string & { readonly __brand: 'EntityId39' };
export interface PaginatedResult39<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
export interface ApiResponse39<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  timestamp: string;
}
