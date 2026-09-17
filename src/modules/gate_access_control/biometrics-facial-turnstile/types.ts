/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: gate_access_control
 * Feature: Opt-In Biometric Facial Recognition Gate Ingress Verifier (biometrics-facial-turnstile)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum BiometricsFacialTurnstileStatus {
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

export enum BiometricsFacialTurnstilePriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum BiometricsFacialTurnstileVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface BiometricsFacialTurnstileMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface BiometricsFacialTurnstileConfiguration {
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

export interface BiometricsFacialTurnstileEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface BiometricsFacialTurnstileSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'biometrics' | 'turnstile' | 'ticketing' | 'stadium';
  lifecycleState: BiometricsFacialTurnstileStatus;
  priorityTier: BiometricsFacialTurnstilePriority;
  venueTier: BiometricsFacialTurnstileVenueTier;
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
  metadataHeaders: BiometricsFacialTurnstileMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface BiometricsFacialTurnstileBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: BiometricsFacialTurnstileSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
