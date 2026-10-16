/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Stolen Credit Card Ticket Chargeback Evidence Compiler and Mitigator (chargeback-dispute-mitigator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum ChargebackDisputeMitigatorStatus {
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

export enum ChargebackDisputeMitigatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum ChargebackDisputeMitigatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface ChargebackDisputeMitigatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface ChargebackDisputeMitigatorConfiguration {
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

export interface ChargebackDisputeMitigatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ChargebackDisputeMitigatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'chargeback' | 'mitigator' | 'ticketing' | 'stadium';
  lifecycleState: ChargebackDisputeMitigatorStatus;
  priorityTier: ChargebackDisputeMitigatorPriority;
  venueTier: ChargebackDisputeMitigatorVenueTier;
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
  metadataHeaders: ChargebackDisputeMitigatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ChargebackDisputeMitigatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ChargebackDisputeMitigatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
