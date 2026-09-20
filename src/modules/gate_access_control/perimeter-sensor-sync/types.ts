/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: gate_access_control
 * Feature: Outer Security Perimeter Magnetometer and Metal Detector Sync (perimeter-sensor-sync)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum PerimeterSensorSyncStatus {
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

export enum PerimeterSensorSyncPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum PerimeterSensorSyncVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface PerimeterSensorSyncMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface PerimeterSensorSyncConfiguration {
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

export interface PerimeterSensorSyncEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface PerimeterSensorSyncSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PerimeterSensorSyncSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'perimeter' | 'sync' | 'ticketing' | 'stadium';
  lifecycleState: PerimeterSensorSyncStatus;
  priorityTier: PerimeterSensorSyncPriority;
  venueTier: PerimeterSensorSyncVenueTier;
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
  metadataHeaders: PerimeterSensorSyncMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PerimeterSensorSyncBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PerimeterSensorSyncSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
