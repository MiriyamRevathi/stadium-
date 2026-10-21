/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Multi-Tournament Stadium Fixture and Pitch Rest Scheduler (fixture-schedule-orchestrator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum FixtureScheduleOrchestratorStatus {
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

export enum FixtureScheduleOrchestratorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum FixtureScheduleOrchestratorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface FixtureScheduleOrchestratorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface FixtureScheduleOrchestratorConfiguration {
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

export interface FixtureScheduleOrchestratorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FixtureScheduleOrchestratorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'fixture' | 'orchestrator' | 'ticketing' | 'stadium';
  lifecycleState: FixtureScheduleOrchestratorStatus;
  priorityTier: FixtureScheduleOrchestratorPriority;
  venueTier: FixtureScheduleOrchestratorVenueTier;
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
  metadataHeaders: FixtureScheduleOrchestratorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FixtureScheduleOrchestratorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FixtureScheduleOrchestratorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
