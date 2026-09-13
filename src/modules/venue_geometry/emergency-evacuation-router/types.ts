/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: Emergency Evacuation Egress Pathfinding and Bottleneck Estimator (emergency-evacuation-router)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum EmergencyEvacuationRouterStatus {
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

export enum EmergencyEvacuationRouterPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum EmergencyEvacuationRouterVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface EmergencyEvacuationRouterMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface EmergencyEvacuationRouterConfiguration {
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

export interface EmergencyEvacuationRouterEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface EmergencyEvacuationRouterSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'emergency' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: EmergencyEvacuationRouterStatus;
  priorityTier: EmergencyEvacuationRouterPriority;
  venueTier: EmergencyEvacuationRouterVenueTier;
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
  metadataHeaders: EmergencyEvacuationRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface EmergencyEvacuationRouterBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: EmergencyEvacuationRouterSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
