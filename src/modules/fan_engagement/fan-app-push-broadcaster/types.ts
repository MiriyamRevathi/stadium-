/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Geofenced Urgent Push Notification and Weather Advisory Broadcaster (fan-app-push-broadcaster)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum FanAppPushBroadcasterStatus {
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

export enum FanAppPushBroadcasterPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum FanAppPushBroadcasterVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface FanAppPushBroadcasterMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface FanAppPushBroadcasterConfiguration {
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

export interface FanAppPushBroadcasterEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface FanAppPushBroadcasterSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FanAppPushBroadcasterSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fan' | 'broadcaster' | 'ticketing' | 'stadium';
  lifecycleState: FanAppPushBroadcasterStatus;
  priorityTier: FanAppPushBroadcasterPriority;
  venueTier: FanAppPushBroadcasterVenueTier;
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
  metadataHeaders: FanAppPushBroadcasterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FanAppPushBroadcasterBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FanAppPushBroadcasterSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
