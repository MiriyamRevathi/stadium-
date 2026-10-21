/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: gate_access_control
 * Feature: Physical Smart Badge RFID Credential Encoding and Print Server (badge-credential-printer)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum BadgeCredentialPrinterStatus {
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

export enum BadgeCredentialPrinterPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum BadgeCredentialPrinterVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface BadgeCredentialPrinterMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface BadgeCredentialPrinterConfiguration {
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

export interface BadgeCredentialPrinterEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface BadgeCredentialPrinterSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BadgeCredentialPrinterSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'badge' | 'printer' | 'ticketing' | 'stadium';
  lifecycleState: BadgeCredentialPrinterStatus;
  priorityTier: BadgeCredentialPrinterPriority;
  venueTier: BadgeCredentialPrinterVenueTier;
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
  metadataHeaders: BadgeCredentialPrinterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BadgeCredentialPrinterBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BadgeCredentialPrinterSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
