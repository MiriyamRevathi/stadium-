/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Concert Touring Artist Backstage Hospitality Rider Compliance Checker (artist-rider-compliance-checker)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum ArtistRiderComplianceCheckerStatus {
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

export enum ArtistRiderComplianceCheckerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum ArtistRiderComplianceCheckerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface ArtistRiderComplianceCheckerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface ArtistRiderComplianceCheckerConfiguration {
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

export interface ArtistRiderComplianceCheckerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ArtistRiderComplianceCheckerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'artist' | 'checker' | 'ticketing' | 'stadium';
  lifecycleState: ArtistRiderComplianceCheckerStatus;
  priorityTier: ArtistRiderComplianceCheckerPriority;
  venueTier: ArtistRiderComplianceCheckerVenueTier;
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
  metadataHeaders: ArtistRiderComplianceCheckerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ArtistRiderComplianceCheckerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ArtistRiderComplianceCheckerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
