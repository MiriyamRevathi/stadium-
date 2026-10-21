/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Severe Lightning and Thunderstorm Game Delay Rescheduling Protocol (weather-contingency-rescheduler)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum WeatherContingencyReschedulerStatus {
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

export enum WeatherContingencyReschedulerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum WeatherContingencyReschedulerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface WeatherContingencyReschedulerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface WeatherContingencyReschedulerConfiguration {
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

export interface WeatherContingencyReschedulerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface WeatherContingencyReschedulerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'weather' | 'rescheduler' | 'ticketing' | 'stadium';
  lifecycleState: WeatherContingencyReschedulerStatus;
  priorityTier: WeatherContingencyReschedulerPriority;
  venueTier: WeatherContingencyReschedulerVenueTier;
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
  metadataHeaders: WeatherContingencyReschedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface WeatherContingencyReschedulerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: WeatherContingencyReschedulerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
