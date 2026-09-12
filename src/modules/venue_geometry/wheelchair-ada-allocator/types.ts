/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: ADA Wheelchair Accessible Seating and Companion Space Allocator (wheelchair-ada-allocator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum WheelchairAdaAllocatorStatus {
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

export enum WheelchairAdaAllocatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum WheelchairAdaAllocatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface WheelchairAdaAllocatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface WheelchairAdaAllocatorConfiguration {
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

export interface WheelchairAdaAllocatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WheelchairAdaAllocatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'wheelchair' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: WheelchairAdaAllocatorStatus;
  priorityTier: WheelchairAdaAllocatorPriority;
  venueTier: WheelchairAdaAllocatorVenueTier;
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
  metadataHeaders: WheelchairAdaAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WheelchairAdaAllocatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WheelchairAdaAllocatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
