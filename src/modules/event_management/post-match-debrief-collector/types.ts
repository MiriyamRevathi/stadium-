/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Match Safety Officer Incident Log and Stadium Debrief Collector (post-match-debrief-collector)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum PostMatchDebriefCollectorStatus {
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

export enum PostMatchDebriefCollectorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum PostMatchDebriefCollectorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface PostMatchDebriefCollectorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface PostMatchDebriefCollectorConfiguration {
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

export interface PostMatchDebriefCollectorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PostMatchDebriefCollectorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'post' | 'collector' | 'ticketing' | 'stadium';
  lifecycleState: PostMatchDebriefCollectorStatus;
  priorityTier: PostMatchDebriefCollectorPriority;
  venueTier: PostMatchDebriefCollectorVenueTier;
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
  metadataHeaders: PostMatchDebriefCollectorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PostMatchDebriefCollectorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PostMatchDebriefCollectorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
