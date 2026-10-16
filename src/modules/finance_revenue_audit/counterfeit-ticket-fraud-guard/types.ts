/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Machine Learning Counterfeit Barcode and Duplicate Scan Fraud Guard (counterfeit-ticket-fraud-guard)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum CounterfeitTicketFraudGuardStatus {
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

export enum CounterfeitTicketFraudGuardPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum CounterfeitTicketFraudGuardVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface CounterfeitTicketFraudGuardMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface CounterfeitTicketFraudGuardConfiguration {
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

export interface CounterfeitTicketFraudGuardEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CounterfeitTicketFraudGuardSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'counterfeit' | 'guard' | 'ticketing' | 'stadium';
  lifecycleState: CounterfeitTicketFraudGuardStatus;
  priorityTier: CounterfeitTicketFraudGuardPriority;
  venueTier: CounterfeitTicketFraudGuardVenueTier;
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
  metadataHeaders: CounterfeitTicketFraudGuardMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CounterfeitTicketFraudGuardBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CounterfeitTicketFraudGuardSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
