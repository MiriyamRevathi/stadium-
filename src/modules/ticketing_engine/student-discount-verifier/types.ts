/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: Student and Military Identity Verification Discount Engine (student-discount-verifier)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum StudentDiscountVerifierStatus {
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

export enum StudentDiscountVerifierPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum StudentDiscountVerifierVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface StudentDiscountVerifierMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface StudentDiscountVerifierConfiguration {
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

export interface StudentDiscountVerifierEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface StudentDiscountVerifierSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StudentDiscountVerifierSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'student' | 'verifier' | 'ticketing' | 'stadium';
  lifecycleState: StudentDiscountVerifierStatus;
  priorityTier: StudentDiscountVerifierPriority;
  venueTier: StudentDiscountVerifierVenueTier;
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
  metadataHeaders: StudentDiscountVerifierMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StudentDiscountVerifierBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StudentDiscountVerifierSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
