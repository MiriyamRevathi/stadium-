/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: TV Broadcast Rigging and 4K Spidercam Wire Tension Monitor (broadcast-camera-positioner)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum BroadcastCameraPositionerStatus {
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

export enum BroadcastCameraPositionerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum BroadcastCameraPositionerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface BroadcastCameraPositionerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface BroadcastCameraPositionerConfiguration {
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

export interface BroadcastCameraPositionerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface BroadcastCameraPositionerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BroadcastCameraPositionerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'broadcast' | 'positioner' | 'ticketing' | 'stadium';
  lifecycleState: BroadcastCameraPositionerStatus;
  priorityTier: BroadcastCameraPositionerPriority;
  venueTier: BroadcastCameraPositionerVenueTier;
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
  metadataHeaders: BroadcastCameraPositionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BroadcastCameraPositionerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BroadcastCameraPositionerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
