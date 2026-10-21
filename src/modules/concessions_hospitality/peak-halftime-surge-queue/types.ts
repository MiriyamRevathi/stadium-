/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Half-Time Rush Rapid Dispense Express Queue Allocator (peak-halftime-surge-queue)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum PeakHalftimeSurgeQueueStatus {
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

export enum PeakHalftimeSurgeQueuePriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum PeakHalftimeSurgeQueueVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface PeakHalftimeSurgeQueueMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface PeakHalftimeSurgeQueueConfiguration {
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

export interface PeakHalftimeSurgeQueueEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PeakHalftimeSurgeQueueSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'peak' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: PeakHalftimeSurgeQueueStatus;
  priorityTier: PeakHalftimeSurgeQueuePriority;
  venueTier: PeakHalftimeSurgeQueueVenueTier;
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
  metadataHeaders: PeakHalftimeSurgeQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PeakHalftimeSurgeQueueBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PeakHalftimeSurgeQueueSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
