/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Concessions Staff Shared Tip Pool and Gratuity Distribution Calculator (tips-distribution-calculator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum TipsDistributionCalculatorStatus {
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

export enum TipsDistributionCalculatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum TipsDistributionCalculatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface TipsDistributionCalculatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface TipsDistributionCalculatorConfiguration {
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

export interface TipsDistributionCalculatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface TipsDistributionCalculatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TipsDistributionCalculatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tips' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: TipsDistributionCalculatorStatus;
  priorityTier: TipsDistributionCalculatorPriority;
  venueTier: TipsDistributionCalculatorVenueTier;
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
  metadataHeaders: TipsDistributionCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TipsDistributionCalculatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TipsDistributionCalculatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
