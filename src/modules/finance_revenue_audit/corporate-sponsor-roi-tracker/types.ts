/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Stadium LED Ribbon Board Brand Impression and Sponsor ROI Tracker (corporate-sponsor-roi-tracker)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum CorporateSponsorRoiTrackerStatus {
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

export enum CorporateSponsorRoiTrackerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum CorporateSponsorRoiTrackerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface CorporateSponsorRoiTrackerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface CorporateSponsorRoiTrackerConfiguration {
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

export interface CorporateSponsorRoiTrackerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface CorporateSponsorRoiTrackerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'corporate' | 'tracker' | 'ticketing' | 'stadium';
  lifecycleState: CorporateSponsorRoiTrackerStatus;
  priorityTier: CorporateSponsorRoiTrackerPriority;
  venueTier: CorporateSponsorRoiTrackerVenueTier;
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
  metadataHeaders: CorporateSponsorRoiTrackerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface CorporateSponsorRoiTrackerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: CorporateSponsorRoiTrackerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
