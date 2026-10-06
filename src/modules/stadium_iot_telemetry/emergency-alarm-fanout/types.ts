/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Stadium Fire Alarm, Smoke Extraction, and PA System Automated Fanout (emergency-alarm-fanout)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum EmergencyAlarmFanoutStatus {
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

export enum EmergencyAlarmFanoutPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum EmergencyAlarmFanoutVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface EmergencyAlarmFanoutMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface EmergencyAlarmFanoutConfiguration {
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

export interface EmergencyAlarmFanoutEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyAlarmFanoutSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'fanout' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyAlarmFanoutStatus;
  priorityTier: EmergencyAlarmFanoutPriority;
  venueTier: EmergencyAlarmFanoutVenueTier;
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
  metadataHeaders: EmergencyAlarmFanoutMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyAlarmFanoutBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyAlarmFanoutSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
