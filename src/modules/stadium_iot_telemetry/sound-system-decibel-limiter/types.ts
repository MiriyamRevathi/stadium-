/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Public Address PA System Acoustic Clarity and Decibel Guard Limiter (sound-system-decibel-limiter)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum SoundSystemDecibelLimiterStatus {
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

export enum SoundSystemDecibelLimiterPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum SoundSystemDecibelLimiterVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface SoundSystemDecibelLimiterMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface SoundSystemDecibelLimiterConfiguration {
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

export interface SoundSystemDecibelLimiterEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SoundSystemDecibelLimiterSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sound' | 'limiter' | 'ticketing' | 'stadium';
  lifecycleState: SoundSystemDecibelLimiterStatus;
  priorityTier: SoundSystemDecibelLimiterPriority;
  venueTier: SoundSystemDecibelLimiterVenueTier;
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
  metadataHeaders: SoundSystemDecibelLimiterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SoundSystemDecibelLimiterBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SoundSystemDecibelLimiterSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
