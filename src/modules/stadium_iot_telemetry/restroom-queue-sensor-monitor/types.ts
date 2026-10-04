/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Concourse Restroom Wait Time Optical Sensor and Heatmap Monitor (restroom-queue-sensor-monitor)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum RestroomQueueSensorMonitorStatus {
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

export enum RestroomQueueSensorMonitorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum RestroomQueueSensorMonitorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface RestroomQueueSensorMonitorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface RestroomQueueSensorMonitorConfiguration {
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

export interface RestroomQueueSensorMonitorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RestroomQueueSensorMonitorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'restroom' | 'monitor' | 'ticketing' | 'stadium';
  lifecycleState: RestroomQueueSensorMonitorStatus;
  priorityTier: RestroomQueueSensorMonitorPriority;
  venueTier: RestroomQueueSensorMonitorVenueTier;
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
  metadataHeaders: RestroomQueueSensorMonitorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RestroomQueueSensorMonitorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RestroomQueueSensorMonitorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
