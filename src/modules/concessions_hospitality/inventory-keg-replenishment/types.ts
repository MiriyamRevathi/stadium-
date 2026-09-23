/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Draft Beer Keg Volume Telemetry and Automated Restock Order (inventory-keg-replenishment)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum InventoryKegReplenishmentStatus {
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

export enum InventoryKegReplenishmentPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum InventoryKegReplenishmentVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface InventoryKegReplenishmentMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface InventoryKegReplenishmentConfiguration {
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

export interface InventoryKegReplenishmentEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface InventoryKegReplenishmentSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InventoryKegReplenishmentSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'inventory' | 'replenishment' | 'ticketing' | 'stadium';
  lifecycleState: InventoryKegReplenishmentStatus;
  priorityTier: InventoryKegReplenishmentPriority;
  venueTier: InventoryKegReplenishmentVenueTier;
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
  metadataHeaders: InventoryKegReplenishmentMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InventoryKegReplenishmentBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InventoryKegReplenishmentSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
