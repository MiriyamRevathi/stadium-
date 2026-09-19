/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: gate_access_control
 * Feature: VIP Tunnel Ingress Notification and Concierge Escort Dispatcher (vip-escort-dispatcher)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum VipEscortDispatcherStatus {
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

export enum VipEscortDispatcherPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum VipEscortDispatcherVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface VipEscortDispatcherMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface VipEscortDispatcherConfiguration {
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

export interface VipEscortDispatcherEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface VipEscortDispatcherSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface VipEscortDispatcherSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'vip' | 'dispatcher' | 'ticketing' | 'stadium';
  lifecycleState: VipEscortDispatcherStatus;
  priorityTier: VipEscortDispatcherPriority;
  venueTier: VipEscortDispatcherVenueTier;
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
  metadataHeaders: VipEscortDispatcherMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface VipEscortDispatcherBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: VipEscortDispatcherSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
