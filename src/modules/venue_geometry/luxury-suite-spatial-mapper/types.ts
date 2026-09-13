/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: Skybox Luxury Suite Spatial Layout and Hospitality Boundary Mapper (luxury-suite-spatial-mapper)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum LuxurySuiteSpatialMapperStatus {
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

export enum LuxurySuiteSpatialMapperPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum LuxurySuiteSpatialMapperVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface LuxurySuiteSpatialMapperMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface LuxurySuiteSpatialMapperConfiguration {
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

export interface LuxurySuiteSpatialMapperEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LuxurySuiteSpatialMapperSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'luxury' | 'mapper' | 'ticketing' | 'stadium';
  lifecycleState: LuxurySuiteSpatialMapperStatus;
  priorityTier: LuxurySuiteSpatialMapperPriority;
  venueTier: LuxurySuiteSpatialMapperVenueTier;
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
  metadataHeaders: LuxurySuiteSpatialMapperMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LuxurySuiteSpatialMapperBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LuxurySuiteSpatialMapperSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
