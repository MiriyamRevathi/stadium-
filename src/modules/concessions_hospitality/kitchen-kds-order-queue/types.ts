/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Concessions Kitchen Display System Priority Order Queue (kitchen-kds-order-queue)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum KitchenKdsOrderQueueStatus {
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

export enum KitchenKdsOrderQueuePriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum KitchenKdsOrderQueueVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface KitchenKdsOrderQueueMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface KitchenKdsOrderQueueConfiguration {
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

export interface KitchenKdsOrderQueueEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface KitchenKdsOrderQueueSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'kitchen' | 'queue' | 'ticketing' | 'stadium';
  lifecycleState: KitchenKdsOrderQueueStatus;
  priorityTier: KitchenKdsOrderQueuePriority;
  venueTier: KitchenKdsOrderQueueVenueTier;
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
  metadataHeaders: KitchenKdsOrderQueueMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface KitchenKdsOrderQueueBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: KitchenKdsOrderQueueSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
