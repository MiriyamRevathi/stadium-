/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Jumbotron Video Board Fan Cam Photo Moderation and Broadcast Queue (jumbotron-fan-cam-queue)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum JumbotronFanCamQueueStatus {
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

export enum JumbotronFanCamQueuePriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum JumbotronFanCamQueueVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface JumbotronFanCamQueueMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface JumbotronFanCamQueueConfiguration {
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

export interface JumbotronFanCamQueueEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface JumbotronFanCamQueueSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface JumbotronFanCamQueueSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'jumbotron' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: JumbotronFanCamQueueStatus;
  priorityTier: JumbotronFanCamQueuePriority;
  venueTier: JumbotronFanCamQueueVenueTier;
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
  metadataHeaders: JumbotronFanCamQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface JumbotronFanCamQueueBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: JumbotronFanCamQueueSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
