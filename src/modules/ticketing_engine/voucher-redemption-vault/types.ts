/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: Multi-Event Credit Voucher and Gift Pass Redemption Vault (voucher-redemption-vault)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum VoucherRedemptionVaultStatus {
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

export enum VoucherRedemptionVaultPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum VoucherRedemptionVaultVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface VoucherRedemptionVaultMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface VoucherRedemptionVaultConfiguration {
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

export interface VoucherRedemptionVaultEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface VoucherRedemptionVaultSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VoucherRedemptionVaultSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'voucher' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: VoucherRedemptionVaultStatus;
  priorityTier: VoucherRedemptionVaultPriority;
  venueTier: VoucherRedemptionVaultVenueTier;
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
  metadataHeaders: VoucherRedemptionVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VoucherRedemptionVaultBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VoucherRedemptionVaultSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
