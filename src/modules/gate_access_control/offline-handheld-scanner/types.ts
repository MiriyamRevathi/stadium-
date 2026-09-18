/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: gate_access_control
 * Feature: Offline-First Handheld Gate Scanner Sync and Mesh Network Cache (offline-handheld-scanner)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum OfflineHandheldScannerStatus {
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

export enum OfflineHandheldScannerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum OfflineHandheldScannerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface OfflineHandheldScannerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface OfflineHandheldScannerConfiguration {
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

export interface OfflineHandheldScannerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface OfflineHandheldScannerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface OfflineHandheldScannerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'offline' | 'scanner' | 'ticketing' | 'stadium';
  lifecycleState: OfflineHandheldScannerStatus;
  priorityTier: OfflineHandheldScannerPriority;
  venueTier: OfflineHandheldScannerVenueTier;
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
  metadataHeaders: OfflineHandheldScannerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface OfflineHandheldScannerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: OfflineHandheldScannerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
