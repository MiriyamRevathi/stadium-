/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Goal Celebration Flame Pyrotechnics Safety Distance Permit Engine (pyrotechnics-safety-permit)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum PyrotechnicsSafetyPermitStatus {
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

export enum PyrotechnicsSafetyPermitPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum PyrotechnicsSafetyPermitVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface PyrotechnicsSafetyPermitMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface PyrotechnicsSafetyPermitConfiguration {
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

export interface PyrotechnicsSafetyPermitEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PyrotechnicsSafetyPermitSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'pyrotechnics' | 'permit' | 'ticketing' | 'stadium';
  lifecycleState: PyrotechnicsSafetyPermitStatus;
  priorityTier: PyrotechnicsSafetyPermitPriority;
  venueTier: PyrotechnicsSafetyPermitVenueTier;
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
  metadataHeaders: PyrotechnicsSafetyPermitMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PyrotechnicsSafetyPermitBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PyrotechnicsSafetyPermitSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
