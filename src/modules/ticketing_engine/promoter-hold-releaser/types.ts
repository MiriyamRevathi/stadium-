/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: Venue Promoter Hold Inventory Automated Release Scheduler (promoter-hold-releaser)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum PromoterHoldReleaserStatus {
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

export enum PromoterHoldReleaserPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum PromoterHoldReleaserVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface PromoterHoldReleaserMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface PromoterHoldReleaserConfiguration {
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

export interface PromoterHoldReleaserEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface PromoterHoldReleaserSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterHoldReleaserSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'releaser' | 'ticketing' | 'stadium';
  lifecycleState: PromoterHoldReleaserStatus;
  priorityTier: PromoterHoldReleaserPriority;
  venueTier: PromoterHoldReleaserVenueTier;
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
  metadataHeaders: PromoterHoldReleaserMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterHoldReleaserBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterHoldReleaserSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
