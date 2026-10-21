/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Fan Rewards Concessions Points Redemption and Combo Coupon Vault (loyalty-point-redemption)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum LoyaltyPointRedemptionStatus {
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

export enum LoyaltyPointRedemptionPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum LoyaltyPointRedemptionVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface LoyaltyPointRedemptionMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface LoyaltyPointRedemptionConfiguration {
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

export interface LoyaltyPointRedemptionEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface LoyaltyPointRedemptionSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'loyalty' | 'redemption' | 'ticketing' | 'stadium';
  lifecycleState: LoyaltyPointRedemptionStatus;
  priorityTier: LoyaltyPointRedemptionPriority;
  venueTier: LoyaltyPointRedemptionVenueTier;
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
  metadataHeaders: LoyaltyPointRedemptionMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface LoyaltyPointRedemptionBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: LoyaltyPointRedemptionSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
