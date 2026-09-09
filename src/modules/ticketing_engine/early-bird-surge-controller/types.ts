/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: Early-Bird Staged Price Ramp and Surge Control Valve (early-bird-surge-controller)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum EarlyBirdSurgeControllerStatus {
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

export enum EarlyBirdSurgeControllerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum EarlyBirdSurgeControllerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface EarlyBirdSurgeControllerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface EarlyBirdSurgeControllerConfiguration {
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

export interface EarlyBirdSurgeControllerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EarlyBirdSurgeControllerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'early' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: EarlyBirdSurgeControllerStatus;
  priorityTier: EarlyBirdSurgeControllerPriority;
  venueTier: EarlyBirdSurgeControllerVenueTier;
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
  metadataHeaders: EarlyBirdSurgeControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EarlyBirdSurgeControllerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EarlyBirdSurgeControllerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
