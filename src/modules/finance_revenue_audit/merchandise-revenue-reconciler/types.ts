/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Stadium Fan Megastore Retail Inventory and Revenue Reconciler (merchandise-revenue-reconciler)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum MerchandiseRevenueReconcilerStatus {
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

export enum MerchandiseRevenueReconcilerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum MerchandiseRevenueReconcilerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface MerchandiseRevenueReconcilerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface MerchandiseRevenueReconcilerConfiguration {
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

export interface MerchandiseRevenueReconcilerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchandiseRevenueReconcilerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchandise' | 'reconciler' | 'ticketing' | 'stadium';
  lifecycleState: MerchandiseRevenueReconcilerStatus;
  priorityTier: MerchandiseRevenueReconcilerPriority;
  venueTier: MerchandiseRevenueReconcilerVenueTier;
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
  metadataHeaders: MerchandiseRevenueReconcilerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchandiseRevenueReconcilerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchandiseRevenueReconcilerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
