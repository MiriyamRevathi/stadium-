/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: finance_revenue_audit
 * Feature: Event Promoter Advance Guarantee and Ticket Escrow Account Manager (promoter-escrow-accountant)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum PromoterEscrowAccountantStatus {
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

export enum PromoterEscrowAccountantPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum PromoterEscrowAccountantVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface PromoterEscrowAccountantMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface PromoterEscrowAccountantConfiguration {
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

export interface PromoterEscrowAccountantEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface PromoterEscrowAccountantSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PromoterEscrowAccountantSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'promoter' | 'accountant' | 'ticketing' | 'stadium';
  lifecycleState: PromoterEscrowAccountantStatus;
  priorityTier: PromoterEscrowAccountantPriority;
  venueTier: PromoterEscrowAccountantVenueTier;
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
  metadataHeaders: PromoterEscrowAccountantMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PromoterEscrowAccountantBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PromoterEscrowAccountantSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
