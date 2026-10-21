/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: stadium_iot_telemetry
 * Feature: Stadium Airspace Unauthorized Drone RF Detection and Jammer Link (drone-detection-radar-link)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum DroneDetectionRadarLinkStatus {
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

export enum DroneDetectionRadarLinkPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum DroneDetectionRadarLinkVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface DroneDetectionRadarLinkMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface DroneDetectionRadarLinkConfiguration {
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

export interface DroneDetectionRadarLinkEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DroneDetectionRadarLinkSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'drone' | 'link' | 'ticketing' | 'stadium';
  lifecycleState: DroneDetectionRadarLinkStatus;
  priorityTier: DroneDetectionRadarLinkPriority;
  venueTier: DroneDetectionRadarLinkVenueTier;
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
  metadataHeaders: DroneDetectionRadarLinkMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DroneDetectionRadarLinkBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DroneDetectionRadarLinkSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
