/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Post-Match Press Conference Room Microphone and Media Seat Allocator (media-press-conference-scheduler)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum MediaPressConferenceSchedulerStatus {
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

export enum MediaPressConferenceSchedulerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum MediaPressConferenceSchedulerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface MediaPressConferenceSchedulerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface MediaPressConferenceSchedulerConfiguration {
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

export interface MediaPressConferenceSchedulerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MediaPressConferenceSchedulerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'media' | 'scheduler' | 'ticketing' | 'stadium';
  lifecycleState: MediaPressConferenceSchedulerStatus;
  priorityTier: MediaPressConferenceSchedulerPriority;
  venueTier: MediaPressConferenceSchedulerVenueTier;
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
  metadataHeaders: MediaPressConferenceSchedulerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MediaPressConferenceSchedulerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MediaPressConferenceSchedulerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
