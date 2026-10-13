/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: event_management
 * Feature: Pitch Cover Floor Removal and Concert Rigging Teardown Logistics (stage-teardown-logistics)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum StageTeardownLogisticsStatus {
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

export enum StageTeardownLogisticsPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum StageTeardownLogisticsVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface StageTeardownLogisticsMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface StageTeardownLogisticsConfiguration {
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

export interface StageTeardownLogisticsEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface StageTeardownLogisticsSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface StageTeardownLogisticsSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'stage' | 'logistics' | 'ticketing' | 'stadium';
  lifecycleState: StageTeardownLogisticsStatus;
  priorityTier: StageTeardownLogisticsPriority;
  venueTier: StageTeardownLogisticsVenueTier;
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
  metadataHeaders: StageTeardownLogisticsMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface StageTeardownLogisticsBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: StageTeardownLogisticsSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
