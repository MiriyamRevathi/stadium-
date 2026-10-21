/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Official Matchday Match Sheet and Player Registration Roster Validator (sports-league-roster-validator)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum SportsLeagueRosterValidatorStatus {
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

export enum SportsLeagueRosterValidatorPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum SportsLeagueRosterValidatorVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface SportsLeagueRosterValidatorMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface SportsLeagueRosterValidatorConfiguration {
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

export interface SportsLeagueRosterValidatorEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SportsLeagueRosterValidatorSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sports' | 'validator' | 'ticketing' | 'stadium';
  lifecycleState: SportsLeagueRosterValidatorStatus;
  priorityTier: SportsLeagueRosterValidatorPriority;
  venueTier: SportsLeagueRosterValidatorVenueTier;
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
  metadataHeaders: SportsLeagueRosterValidatorMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SportsLeagueRosterValidatorBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SportsLeagueRosterValidatorSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
