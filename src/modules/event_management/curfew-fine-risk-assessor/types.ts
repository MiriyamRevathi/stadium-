/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Venue Noise Curfew Municipal Ordinance Fine Risk Assessor (curfew-fine-risk-assessor)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum CurfewFineRiskAssessorStatus {
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

export enum CurfewFineRiskAssessorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum CurfewFineRiskAssessorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface CurfewFineRiskAssessorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface CurfewFineRiskAssessorConfiguration {
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

export interface CurfewFineRiskAssessorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CurfewFineRiskAssessorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'curfew' | 'assessor' | 'ticketing' | 'stadium';
  lifecycleState: CurfewFineRiskAssessorStatus;
  priorityTier: CurfewFineRiskAssessorPriority;
  venueTier: CurfewFineRiskAssessorVenueTier;
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
  metadataHeaders: CurfewFineRiskAssessorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CurfewFineRiskAssessorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CurfewFineRiskAssessorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
