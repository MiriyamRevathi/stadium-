/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Match Official Locker Room Security and VAR Video Hub Allocator (referee-dressing-room-allocator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum RefereeDressingRoomAllocatorStatus {
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

export enum RefereeDressingRoomAllocatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum RefereeDressingRoomAllocatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface RefereeDressingRoomAllocatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface RefereeDressingRoomAllocatorConfiguration {
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

export interface RefereeDressingRoomAllocatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RefereeDressingRoomAllocatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'referee' | 'allocator' | 'ticketing' | 'stadium';
  lifecycleState: RefereeDressingRoomAllocatorStatus;
  priorityTier: RefereeDressingRoomAllocatorPriority;
  venueTier: RefereeDressingRoomAllocatorVenueTier;
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
  metadataHeaders: RefereeDressingRoomAllocatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RefereeDressingRoomAllocatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RefereeDressingRoomAllocatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
