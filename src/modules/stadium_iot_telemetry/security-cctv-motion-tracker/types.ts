/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Security Control Room Pan-Tilt-Zoom CCTV Optical Intrusion Tracker (security-cctv-motion-tracker)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum SecurityCctvMotionTrackerStatus {
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

export enum SecurityCctvMotionTrackerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum SecurityCctvMotionTrackerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface SecurityCctvMotionTrackerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface SecurityCctvMotionTrackerConfiguration {
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

export interface SecurityCctvMotionTrackerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SecurityCctvMotionTrackerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'security' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: SecurityCctvMotionTrackerStatus;
  priorityTier: SecurityCctvMotionTrackerPriority;
  venueTier: SecurityCctvMotionTrackerVenueTier;
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
  metadataHeaders: SecurityCctvMotionTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SecurityCctvMotionTrackerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SecurityCctvMotionTrackerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
