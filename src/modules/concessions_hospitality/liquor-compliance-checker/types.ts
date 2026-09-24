/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Legal Drinking Age ID Verification and Alcohol Cutoff Time Enforcer (liquor-compliance-checker)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum LiquorComplianceCheckerStatus {
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

export enum LiquorComplianceCheckerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum LiquorComplianceCheckerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface LiquorComplianceCheckerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface LiquorComplianceCheckerConfiguration {
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

export interface LiquorComplianceCheckerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface LiquorComplianceCheckerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LiquorComplianceCheckerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'liquor' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: LiquorComplianceCheckerStatus;
  priorityTier: LiquorComplianceCheckerPriority;
  venueTier: LiquorComplianceCheckerVenueTier;
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
  metadataHeaders: LiquorComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LiquorComplianceCheckerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LiquorComplianceCheckerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
