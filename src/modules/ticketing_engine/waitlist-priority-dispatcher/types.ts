/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: Real-Time Waitlist Queue Priority Dispatcher and FIFO Lock (waitlist-priority-dispatcher)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum WaitlistPriorityDispatcherStatus {
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

export enum WaitlistPriorityDispatcherPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum WaitlistPriorityDispatcherVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface WaitlistPriorityDispatcherMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface WaitlistPriorityDispatcherConfiguration {
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

export interface WaitlistPriorityDispatcherEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WaitlistPriorityDispatcherSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'waitlist' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: WaitlistPriorityDispatcherStatus;
  priorityTier: WaitlistPriorityDispatcherPriority;
  venueTier: WaitlistPriorityDispatcherVenueTier;
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
  metadataHeaders: WaitlistPriorityDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WaitlistPriorityDispatcherBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WaitlistPriorityDispatcherSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
