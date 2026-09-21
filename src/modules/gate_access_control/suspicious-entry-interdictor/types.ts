/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: gate_access_control
 * Feature: Banned Spectator and Counterfeit Ticket Blacklist Interdictor (suspicious-entry-interdictor)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum SuspiciousEntryInterdictorStatus {
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

export enum SuspiciousEntryInterdictorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum SuspiciousEntryInterdictorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface SuspiciousEntryInterdictorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface SuspiciousEntryInterdictorConfiguration {
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

export interface SuspiciousEntryInterdictorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SuspiciousEntryInterdictorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'suspicious' | 'interdictor' | 'ticketing' | 'stadium';
  lifecycleState: SuspiciousEntryInterdictorStatus;
  priorityTier: SuspiciousEntryInterdictorPriority;
  venueTier: SuspiciousEntryInterdictorVenueTier;
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
  metadataHeaders: SuspiciousEntryInterdictorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SuspiciousEntryInterdictorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SuspiciousEntryInterdictorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
