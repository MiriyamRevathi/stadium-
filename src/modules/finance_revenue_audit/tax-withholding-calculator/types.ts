/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Local Municipality Entertainment Tax and Sales Tax Withholding Calculator (tax-withholding-calculator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum TaxWithholdingCalculatorStatus {
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

export enum TaxWithholdingCalculatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum TaxWithholdingCalculatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface TaxWithholdingCalculatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface TaxWithholdingCalculatorConfiguration {
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

export interface TaxWithholdingCalculatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TaxWithholdingCalculatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tax' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TaxWithholdingCalculatorStatus;
  priorityTier: TaxWithholdingCalculatorPriority;
  venueTier: TaxWithholdingCalculatorVenueTier;
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
  metadataHeaders: TaxWithholdingCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TaxWithholdingCalculatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TaxWithholdingCalculatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
