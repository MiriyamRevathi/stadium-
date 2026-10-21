/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Visiting Fan Dedicated Section Separation and Security Buffer (away-fan-zone-segregator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum AwayFanZoneSegregatorStatus {
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

export enum AwayFanZoneSegregatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum AwayFanZoneSegregatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface AwayFanZoneSegregatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface AwayFanZoneSegregatorConfiguration {
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

export interface AwayFanZoneSegregatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AwayFanZoneSegregatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'away' | 'segregator' | 'ticketing' | 'stadium';
  lifecycleState: AwayFanZoneSegregatorStatus;
  priorityTier: AwayFanZoneSegregatorPriority;
  venueTier: AwayFanZoneSegregatorVenueTier;
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
  metadataHeaders: AwayFanZoneSegregatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AwayFanZoneSegregatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AwayFanZoneSegregatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
