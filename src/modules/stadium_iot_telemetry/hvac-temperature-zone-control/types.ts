/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Stadium Indoor Concourse HVAC Temperature and Air Quality Controller (hvac-temperature-zone-control)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum HvacTemperatureZoneControlStatus {
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

export enum HvacTemperatureZoneControlPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum HvacTemperatureZoneControlVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface HvacTemperatureZoneControlMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface HvacTemperatureZoneControlConfiguration {
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

export interface HvacTemperatureZoneControlEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface HvacTemperatureZoneControlSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'hvac' | 'control' | 'ticketing' | 'stadium';
  lifecycleState: HvacTemperatureZoneControlStatus;
  priorityTier: HvacTemperatureZoneControlPriority;
  venueTier: HvacTemperatureZoneControlVenueTier;
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
  metadataHeaders: HvacTemperatureZoneControlMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface HvacTemperatureZoneControlBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: HvacTemperatureZoneControlSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
