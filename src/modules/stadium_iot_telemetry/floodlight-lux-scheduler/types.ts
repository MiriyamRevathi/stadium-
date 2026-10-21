/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Arena LED Floodlight Broadcast Lux Level and Scene Scheduler (floodlight-lux-scheduler)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum FloodlightLuxSchedulerStatus {
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

export enum FloodlightLuxSchedulerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum FloodlightLuxSchedulerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface FloodlightLuxSchedulerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface FloodlightLuxSchedulerConfiguration {
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

export interface FloodlightLuxSchedulerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface FloodlightLuxSchedulerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'floodlight' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: FloodlightLuxSchedulerStatus;
  priorityTier: FloodlightLuxSchedulerPriority;
  venueTier: FloodlightLuxSchedulerVenueTier;
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
  metadataHeaders: FloodlightLuxSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface FloodlightLuxSchedulerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: FloodlightLuxSchedulerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
