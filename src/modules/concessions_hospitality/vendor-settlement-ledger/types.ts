/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Third-Party Food Truck and Concessionaire Revenue Split Ledger (vendor-settlement-ledger)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum VendorSettlementLedgerStatus {
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

export enum VendorSettlementLedgerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum VendorSettlementLedgerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface VendorSettlementLedgerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface VendorSettlementLedgerConfiguration {
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

export interface VendorSettlementLedgerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface VendorSettlementLedgerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VendorSettlementLedgerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vendor' | 'ledger' | 'ticketing' | 'stadium';
  lifecycleState: VendorSettlementLedgerStatus;
  priorityTier: VendorSettlementLedgerPriority;
  venueTier: VendorSettlementLedgerVenueTier;
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
  metadataHeaders: VendorSettlementLedgerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VendorSettlementLedgerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VendorSettlementLedgerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
