/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Credit Card Acquirer Interchange Fee and Payment Settlement Engine (merchant-acquiring-settlement)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum MerchantAcquiringSettlementStatus {
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

export enum MerchantAcquiringSettlementPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum MerchantAcquiringSettlementVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface MerchantAcquiringSettlementMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface MerchantAcquiringSettlementConfiguration {
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

export interface MerchantAcquiringSettlementEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MerchantAcquiringSettlementSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'merchant' | 'settlement' | 'ticketing' | 'stadium';
  lifecycleState: MerchantAcquiringSettlementStatus;
  priorityTier: MerchantAcquiringSettlementPriority;
  venueTier: MerchantAcquiringSettlementVenueTier;
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
  metadataHeaders: MerchantAcquiringSettlementMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MerchantAcquiringSettlementBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MerchantAcquiringSettlementSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
