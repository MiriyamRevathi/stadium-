/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Artist Performance Rights and Music Licensing Royalty Clearinghouse (royalty-syndication-clearing)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum RoyaltySyndicationClearingStatus {
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

export enum RoyaltySyndicationClearingPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum RoyaltySyndicationClearingVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface RoyaltySyndicationClearingMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface RoyaltySyndicationClearingConfiguration {
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

export interface RoyaltySyndicationClearingEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface RoyaltySyndicationClearingSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'royalty' | 'clearing' | 'ticketing' | 'stadium';
  lifecycleState: RoyaltySyndicationClearingStatus;
  priorityTier: RoyaltySyndicationClearingPriority;
  venueTier: RoyaltySyndicationClearingVenueTier;
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
  metadataHeaders: RoyaltySyndicationClearingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface RoyaltySyndicationClearingBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: RoyaltySyndicationClearingSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
