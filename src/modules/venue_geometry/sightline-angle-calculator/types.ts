/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: Pitch Sightline Obstructed View Angle and C-Value Calculator (sightline-angle-calculator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum SightlineAngleCalculatorStatus {
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

export enum SightlineAngleCalculatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum SightlineAngleCalculatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface SightlineAngleCalculatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface SightlineAngleCalculatorConfiguration {
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

export interface SightlineAngleCalculatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface SightlineAngleCalculatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SightlineAngleCalculatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sightline' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: SightlineAngleCalculatorStatus;
  priorityTier: SightlineAngleCalculatorPriority;
  venueTier: SightlineAngleCalculatorVenueTier;
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
  metadataHeaders: SightlineAngleCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SightlineAngleCalculatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SightlineAngleCalculatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
