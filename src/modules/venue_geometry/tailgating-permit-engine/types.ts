/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: Tailgating Zone Slot Reservation and Open-Flame Safety Permit Engine (tailgating-permit-engine)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum TailgatingPermitEngineStatus {
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

export enum TailgatingPermitEnginePriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum TailgatingPermitEngineVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface TailgatingPermitEngineMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface TailgatingPermitEngineConfiguration {
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

export interface TailgatingPermitEngineEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface TailgatingPermitEngineSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface TailgatingPermitEngineSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'tailgating' | 'engine' | 'ticketing' | 'stadium';
  lifecycleState: TailgatingPermitEngineStatus;
  priorityTier: TailgatingPermitEnginePriority;
  venueTier: TailgatingPermitEngineVenueTier;
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
  metadataHeaders: TailgatingPermitEngineMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface TailgatingPermitEngineBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: TailgatingPermitEngineSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
