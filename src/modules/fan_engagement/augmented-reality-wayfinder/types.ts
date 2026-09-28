/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: In-Stadium AR Camera Wayfinding and Seat Finder Compass (augmented-reality-wayfinder)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum AugmentedRealityWayfinderStatus {
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

export enum AugmentedRealityWayfinderPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum AugmentedRealityWayfinderVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface AugmentedRealityWayfinderMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface AugmentedRealityWayfinderConfiguration {
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

export interface AugmentedRealityWayfinderEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AugmentedRealityWayfinderSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'augmented' | 'wayfinder' | 'ticketing' | 'stadium';
  lifecycleState: AugmentedRealityWayfinderStatus;
  priorityTier: AugmentedRealityWayfinderPriority;
  venueTier: AugmentedRealityWayfinderVenueTier;
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
  metadataHeaders: AugmentedRealityWayfinderMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AugmentedRealityWayfinderBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AugmentedRealityWayfinderSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
