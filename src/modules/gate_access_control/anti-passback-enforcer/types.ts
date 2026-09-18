/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: gate_access_control
 * Feature: Anti-Passback Real-Time Validation and Re-Entry Gate Guard (anti-passback-enforcer)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum AntiPassbackEnforcerStatus {
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

export enum AntiPassbackEnforcerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum AntiPassbackEnforcerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface AntiPassbackEnforcerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface AntiPassbackEnforcerConfiguration {
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

export interface AntiPassbackEnforcerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface AntiPassbackEnforcerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AntiPassbackEnforcerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'anti' | 'enforcer' | 'ticketing' | 'stadium';
  lifecycleState: AntiPassbackEnforcerStatus;
  priorityTier: AntiPassbackEnforcerPriority;
  venueTier: AntiPassbackEnforcerVenueTier;
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
  metadataHeaders: AntiPassbackEnforcerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AntiPassbackEnforcerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AntiPassbackEnforcerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
