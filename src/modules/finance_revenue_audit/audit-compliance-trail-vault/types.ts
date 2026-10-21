/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Immutable SHA-256 Chained Financial Ticket Audit Trail Vault (audit-compliance-trail-vault)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum AuditComplianceTrailVaultStatus {
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

export enum AuditComplianceTrailVaultPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum AuditComplianceTrailVaultVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface AuditComplianceTrailVaultMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface AuditComplianceTrailVaultConfiguration {
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

export interface AuditComplianceTrailVaultEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface AuditComplianceTrailVaultSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'audit' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: AuditComplianceTrailVaultStatus;
  priorityTier: AuditComplianceTrailVaultPriority;
  venueTier: AuditComplianceTrailVaultVenueTier;
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
  metadataHeaders: AuditComplianceTrailVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface AuditComplianceTrailVaultBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: AuditComplianceTrailVaultSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
