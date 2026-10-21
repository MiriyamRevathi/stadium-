/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: High-Density Multi-Tier Reserved Seating Matrix (reserved-seating-matrix)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum ReservedSeatingMatrixStatus {
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

export enum ReservedSeatingMatrixPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum ReservedSeatingMatrixVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface ReservedSeatingMatrixMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface ReservedSeatingMatrixConfiguration {
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

export interface ReservedSeatingMatrixEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface ReservedSeatingMatrixSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ReservedSeatingMatrixSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'reserved' | 'matrix' | 'ticketing' | 'stadium';
  lifecycleState: ReservedSeatingMatrixStatus;
  priorityTier: ReservedSeatingMatrixPriority;
  venueTier: ReservedSeatingMatrixVenueTier;
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
  metadataHeaders: ReservedSeatingMatrixMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ReservedSeatingMatrixBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ReservedSeatingMatrixSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
