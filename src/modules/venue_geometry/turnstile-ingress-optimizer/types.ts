/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: Multi-Gate Turnstile Ingress Flow Optimizer (turnstile-ingress-optimizer)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum TurnstileIngressOptimizerStatus {
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

export enum TurnstileIngressOptimizerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum TurnstileIngressOptimizerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface TurnstileIngressOptimizerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface TurnstileIngressOptimizerConfiguration {
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

export interface TurnstileIngressOptimizerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TurnstileIngressOptimizerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'turnstile' | 'optimizer' | 'ticketing' | 'stadium';
  lifecycleState: TurnstileIngressOptimizerStatus;
  priorityTier: TurnstileIngressOptimizerPriority;
  venueTier: TurnstileIngressOptimizerVenueTier;
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
  metadataHeaders: TurnstileIngressOptimizerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TurnstileIngressOptimizerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TurnstileIngressOptimizerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
