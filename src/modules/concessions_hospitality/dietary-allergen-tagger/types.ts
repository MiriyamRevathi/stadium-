/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: Food Allergy Cross-Contamination Warning and Menu Diet Tagger (dietary-allergen-tagger)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum DietaryAllergenTaggerStatus {
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

export enum DietaryAllergenTaggerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum DietaryAllergenTaggerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface DietaryAllergenTaggerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface DietaryAllergenTaggerConfiguration {
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

export interface DietaryAllergenTaggerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface DietaryAllergenTaggerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface DietaryAllergenTaggerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'dietary' | 'tagger' | 'ticketing' | 'stadium';
  lifecycleState: DietaryAllergenTaggerStatus;
  priorityTier: DietaryAllergenTaggerPriority;
  venueTier: DietaryAllergenTaggerVenueTier;
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
  metadataHeaders: DietaryAllergenTaggerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface DietaryAllergenTaggerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: DietaryAllergenTaggerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
