/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Heavy Rain Pitch Sub-Surface Vacuum Drainage Pump Controller (field-drainage-pump-controller)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum FieldDrainagePumpControllerStatus {
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

export enum FieldDrainagePumpControllerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum FieldDrainagePumpControllerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface FieldDrainagePumpControllerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface FieldDrainagePumpControllerConfiguration {
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

export interface FieldDrainagePumpControllerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FieldDrainagePumpControllerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'field' | 'controller' | 'ticketing' | 'stadium';
  lifecycleState: FieldDrainagePumpControllerStatus;
  priorityTier: FieldDrainagePumpControllerPriority;
  venueTier: FieldDrainagePumpControllerVenueTier;
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
  metadataHeaders: FieldDrainagePumpControllerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FieldDrainagePumpControllerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FieldDrainagePumpControllerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
