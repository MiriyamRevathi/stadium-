/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Live Stadium Half-Time Fan Poll and Song Request Voting Engine (half-time-show-voting)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum HalfTimeShowVotingStatus {
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

export enum HalfTimeShowVotingPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum HalfTimeShowVotingVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface HalfTimeShowVotingMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface HalfTimeShowVotingConfiguration {
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

export interface HalfTimeShowVotingEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface HalfTimeShowVotingSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HalfTimeShowVotingSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'half' | 'voting' | 'ticketing' | 'stadium';
  lifecycleState: HalfTimeShowVotingStatus;
  priorityTier: HalfTimeShowVotingPriority;
  venueTier: HalfTimeShowVotingVenueTier;
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
  metadataHeaders: HalfTimeShowVotingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HalfTimeShowVotingBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HalfTimeShowVotingSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
