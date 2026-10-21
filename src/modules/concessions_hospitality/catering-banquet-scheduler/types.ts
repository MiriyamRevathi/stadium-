/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Executive Box Private Catering Menu and Banquet Scheduler (catering-banquet-scheduler)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum CateringBanquetSchedulerStatus {
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

export enum CateringBanquetSchedulerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum CateringBanquetSchedulerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface CateringBanquetSchedulerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface CateringBanquetSchedulerConfiguration {
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

export interface CateringBanquetSchedulerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface CateringBanquetSchedulerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CateringBanquetSchedulerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'catering' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: CateringBanquetSchedulerStatus;
  priorityTier: CateringBanquetSchedulerPriority;
  venueTier: CateringBanquetSchedulerVenueTier;
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
  metadataHeaders: CateringBanquetSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CateringBanquetSchedulerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CateringBanquetSchedulerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
