/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Annual Stadium Club VIP Seat License and Debenture Subscription Biller (membership-subscription-biller)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum MembershipSubscriptionBillerStatus {
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

export enum MembershipSubscriptionBillerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum MembershipSubscriptionBillerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface MembershipSubscriptionBillerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface MembershipSubscriptionBillerConfiguration {
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

export interface MembershipSubscriptionBillerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MembershipSubscriptionBillerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'membership' | 'biller' | 'ticketing' | 'stadium';
  lifecycleState: MembershipSubscriptionBillerStatus;
  priorityTier: MembershipSubscriptionBillerPriority;
  venueTier: MembershipSubscriptionBillerVenueTier;
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
  metadataHeaders: MembershipSubscriptionBillerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MembershipSubscriptionBillerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MembershipSubscriptionBillerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
