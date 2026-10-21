/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Stadium Lost and Found Item Image Recognition and Owner Matcher (lost-and-found-item-matcher)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum LostAndFoundItemMatcherStatus {
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

export enum LostAndFoundItemMatcherPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum LostAndFoundItemMatcherVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface LostAndFoundItemMatcherMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface LostAndFoundItemMatcherConfiguration {
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

export interface LostAndFoundItemMatcherEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LostAndFoundItemMatcherSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'lost' | 'matcher' | 'ticketing' | 'stadium';
  lifecycleState: LostAndFoundItemMatcherStatus;
  priorityTier: LostAndFoundItemMatcherPriority;
  venueTier: LostAndFoundItemMatcherVenueTier;
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
  metadataHeaders: LostAndFoundItemMatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LostAndFoundItemMatcherBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LostAndFoundItemMatcherSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
