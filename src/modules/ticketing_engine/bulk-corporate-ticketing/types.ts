/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: Corporate Suite Bulk Ticket Allocation and Invoicing (bulk-corporate-ticketing)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum BulkCorporateTicketingStatus {
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

export enum BulkCorporateTicketingPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum BulkCorporateTicketingVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface BulkCorporateTicketingMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface BulkCorporateTicketingConfiguration {
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

export interface BulkCorporateTicketingEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface BulkCorporateTicketingSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BulkCorporateTicketingSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'bulk' | 'ticketing' | 'ticketing' | 'stadium';
  lifecycleState: BulkCorporateTicketingStatus;
  priorityTier: BulkCorporateTicketingPriority;
  venueTier: BulkCorporateTicketingVenueTier;
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
  metadataHeaders: BulkCorporateTicketingMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BulkCorporateTicketingBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BulkCorporateTicketingSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
