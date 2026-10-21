/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: concessions_hospitality
 * Feature: In-Seat Food and Beverage Delivery Routing and Runner Dispatcher (in-seat-delivery-dispatcher)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum InSeatDeliveryDispatcherStatus {
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

export enum InSeatDeliveryDispatcherPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum InSeatDeliveryDispatcherVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface InSeatDeliveryDispatcherMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface InSeatDeliveryDispatcherConfiguration {
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

export interface InSeatDeliveryDispatcherEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface InSeatDeliveryDispatcherSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'in' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: InSeatDeliveryDispatcherStatus;
  priorityTier: InSeatDeliveryDispatcherPriority;
  venueTier: InSeatDeliveryDispatcherVenueTier;
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
  metadataHeaders: InSeatDeliveryDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface InSeatDeliveryDispatcherBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: InSeatDeliveryDispatcherSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
