/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Elastic Demand Curve Seat Yield Maximizer and Price Floor Engine (dynamic-surge-yield-maximizer)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum DynamicSurgeYieldMaximizerStatus {
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

export enum DynamicSurgeYieldMaximizerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum DynamicSurgeYieldMaximizerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface DynamicSurgeYieldMaximizerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface DynamicSurgeYieldMaximizerConfiguration {
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

export interface DynamicSurgeYieldMaximizerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DynamicSurgeYieldMaximizerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dynamic' | 'maximizer' | 'ticketing' | 'stadium';
  lifecycleState: DynamicSurgeYieldMaximizerStatus;
  priorityTier: DynamicSurgeYieldMaximizerPriority;
  venueTier: DynamicSurgeYieldMaximizerVenueTier;
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
  metadataHeaders: DynamicSurgeYieldMaximizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DynamicSurgeYieldMaximizerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DynamicSurgeYieldMaximizerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
