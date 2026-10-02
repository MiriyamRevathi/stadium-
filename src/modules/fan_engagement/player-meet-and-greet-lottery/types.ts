/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Post-Match Tunnel Walk and Player Autograph Lottery Selector (player-meet-and-greet-lottery)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum PlayerMeetAndGreetLotteryStatus {
  DRAFT = 'DRAFT',
  AVAILABLE = 'AVAILABLE',
  RESERVED = 'RESERVED',
  HELD_FOR_PROMOTER = 'HELD_FOR_PROMOTER',
  PURCHASED = 'PURCHASED',
  SCANNED_AT_GATE = 'SCANNED_AT_GATE',
  REFUNDED = 'REFUNDED',
  REVOKED = 'REVOKED',
  EXCHANGED = 'EXCHANGED',
  FLAGGED_FOR_AUDIT = 'FLAGGED_FOR_AUDIT',
}}

export enum PlayerMeetAndGreetLotteryPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum PlayerMeetAndGreetLotteryVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface PlayerMeetAndGreetLotteryMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface PlayerMeetAndGreetLotteryConfiguration {
  refreshIntervalSeconds: number;
  maxCapacityThreshold: number;
  surgeMultiplierCap: number;
  enableDynamicPricing: boolean;
  strictAccessValidation: boolean;
  auditRetentionDays: number;
  enableRealTimeGateSync: boolean;
  concurrencyRateCap: number;
  retryLimitAttempts: number;
  cacheTtlMilliseconds: number;
}}

export interface PlayerMeetAndGreetLotteryEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PlayerMeetAndGreetLotterySeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'player' | 'lottery' | 'ticketing' | 'stadium';
  lifecycleState: PlayerMeetAndGreetLotteryStatus;
  priorityTier: PlayerMeetAndGreetLotteryPriority;
  venueTier: PlayerMeetAndGreetLotteryVenueTier;
  baseFaceValue: number;
  dynamicSurgePrice: number;
  sectionIdentifier: string;
  rowNumber: number;
  seatNumber: number;
  isAdaAccessible: boolean;
  isCompanionSeat: boolean;
  isAisleAccess: boolean;
  isPromoterHold: boolean;
  historicalAuditLogs: string[];
  metadataHeaders: PlayerMeetAndGreetLotteryMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PlayerMeetAndGreetLotteryBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PlayerMeetAndGreetLotterySeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
