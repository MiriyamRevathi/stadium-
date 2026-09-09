/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: High-Demand Championship Ballot Lottery Selection Engine (lottery-ballot-selector)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum LotteryBallotSelectorStatus {
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

export enum LotteryBallotSelectorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum LotteryBallotSelectorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface LotteryBallotSelectorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface LotteryBallotSelectorConfiguration {
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

export interface LotteryBallotSelectorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface LotteryBallotSelectorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LotteryBallotSelectorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lottery' | 'selector' | 'ticketing' | 'stadium';
  lifecycleState: LotteryBallotSelectorStatus;
  priorityTier: LotteryBallotSelectorPriority;
  venueTier: LotteryBallotSelectorVenueTier;
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
  metadataHeaders: LotteryBallotSelectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LotteryBallotSelectorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LotteryBallotSelectorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
