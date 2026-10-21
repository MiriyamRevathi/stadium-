/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Multi-Party Gate Receipt Revenue Split and League Royalty Ledger (ticket-revenue-split-ledger)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum TicketRevenueSplitLedgerStatus {
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

export enum TicketRevenueSplitLedgerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum TicketRevenueSplitLedgerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface TicketRevenueSplitLedgerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface TicketRevenueSplitLedgerConfiguration {
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

export interface TicketRevenueSplitLedgerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TicketRevenueSplitLedgerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'ticket' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: TicketRevenueSplitLedgerStatus;
  priorityTier: TicketRevenueSplitLedgerPriority;
  venueTier: TicketRevenueSplitLedgerVenueTier;
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
  metadataHeaders: TicketRevenueSplitLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TicketRevenueSplitLedgerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TicketRevenueSplitLedgerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
