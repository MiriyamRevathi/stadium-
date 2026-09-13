/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: Media Press Box Seat Allocation and Press Credential Router (press-box-credential-router)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum PressBoxCredentialRouterStatus {
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

export enum PressBoxCredentialRouterPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum PressBoxCredentialRouterVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface PressBoxCredentialRouterMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface PressBoxCredentialRouterConfiguration {
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

export interface PressBoxCredentialRouterEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface PressBoxCredentialRouterSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface PressBoxCredentialRouterSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'press' | 'router' | 'ticketing' | 'stadium';
  lifecycleState: PressBoxCredentialRouterStatus;
  priorityTier: PressBoxCredentialRouterPriority;
  venueTier: PressBoxCredentialRouterVenueTier;
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
  metadataHeaders: PressBoxCredentialRouterMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface PressBoxCredentialRouterBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: PressBoxCredentialRouterSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
