/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Match Commemorative Digital Ticket Stub and Souvenir NFT Vault (digital-souvenir-nft-vault)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum DigitalSouvenirNftVaultStatus {
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

export enum DigitalSouvenirNftVaultPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum DigitalSouvenirNftVaultVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface DigitalSouvenirNftVaultMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface DigitalSouvenirNftVaultConfiguration {
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

export interface DigitalSouvenirNftVaultEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DigitalSouvenirNftVaultSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'digital' | 'vault' | 'ticketing' | 'stadium';
  lifecycleState: DigitalSouvenirNftVaultStatus;
  priorityTier: DigitalSouvenirNftVaultPriority;
  venueTier: DigitalSouvenirNftVaultVenueTier;
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
  metadataHeaders: DigitalSouvenirNftVaultMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DigitalSouvenirNftVaultBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DigitalSouvenirNftVaultSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
