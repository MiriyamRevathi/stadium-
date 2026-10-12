/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Multi-Day Summer Music Festival Multi-Stage Pass Indexer (multi-day-festival-indexer)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum MultiDayFestivalIndexerStatus {
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

export enum MultiDayFestivalIndexerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum MultiDayFestivalIndexerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface MultiDayFestivalIndexerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface MultiDayFestivalIndexerConfiguration {
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

export interface MultiDayFestivalIndexerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MultiDayFestivalIndexerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'multi' | 'indexer' | 'ticketing' | 'stadium';
  lifecycleState: MultiDayFestivalIndexerStatus;
  priorityTier: MultiDayFestivalIndexerPriority;
  venueTier: MultiDayFestivalIndexerVenueTier;
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
  metadataHeaders: MultiDayFestivalIndexerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MultiDayFestivalIndexerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MultiDayFestivalIndexerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
