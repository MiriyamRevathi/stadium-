/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Natural Turf Grass Root Moisture and Soil Temperature Sensor Grid (grass-turf-moisture-sensor)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum GrassTurfMoistureSensorStatus {
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

export enum GrassTurfMoistureSensorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum GrassTurfMoistureSensorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface GrassTurfMoistureSensorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface GrassTurfMoistureSensorConfiguration {
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

export interface GrassTurfMoistureSensorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface GrassTurfMoistureSensorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'grass' | 'sensor' | 'ticketing' | 'stadium';
  lifecycleState: GrassTurfMoistureSensorStatus;
  priorityTier: GrassTurfMoistureSensorPriority;
  venueTier: GrassTurfMoistureSensorVenueTier;
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
  metadataHeaders: GrassTurfMoistureSensorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface GrassTurfMoistureSensorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: GrassTurfMoistureSensorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
