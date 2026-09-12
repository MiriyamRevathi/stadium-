/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: Concourse Flow Velocity and Crowd Congestion Simulator (concourse-crowd-simulator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum ConcourseCrowdSimulatorStatus {
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

export enum ConcourseCrowdSimulatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum ConcourseCrowdSimulatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface ConcourseCrowdSimulatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface ConcourseCrowdSimulatorConfiguration {
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

export interface ConcourseCrowdSimulatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ConcourseCrowdSimulatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'concourse' | 'simulator' | 'ticketing' | 'stadium';
  lifecycleState: ConcourseCrowdSimulatorStatus;
  priorityTier: ConcourseCrowdSimulatorPriority;
  venueTier: ConcourseCrowdSimulatorVenueTier;
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
  metadataHeaders: ConcourseCrowdSimulatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ConcourseCrowdSimulatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ConcourseCrowdSimulatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
