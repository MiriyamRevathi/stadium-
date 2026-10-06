/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Matchday Energy Consumption and Fan Commuter Carbon Footprint Calculator (carbon-footprint-calculator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum CarbonFootprintCalculatorStatus {
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

export enum CarbonFootprintCalculatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum CarbonFootprintCalculatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface CarbonFootprintCalculatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface CarbonFootprintCalculatorConfiguration {
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

export interface CarbonFootprintCalculatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CarbonFootprintCalculatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'carbon' | 'calculator' | 'ticketing' | 'stadium';
  lifecycleState: CarbonFootprintCalculatorStatus;
  priorityTier: CarbonFootprintCalculatorPriority;
  venueTier: CarbonFootprintCalculatorVenueTier;
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
  metadataHeaders: CarbonFootprintCalculatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CarbonFootprintCalculatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CarbonFootprintCalculatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
