/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Corporate Sponsor Lucky Row and Seat Number Raffle Draw System (sponsored-raffle-draw)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum SponsoredRaffleDrawStatus {
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

export enum SponsoredRaffleDrawPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum SponsoredRaffleDrawVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface SponsoredRaffleDrawMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface SponsoredRaffleDrawConfiguration {
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

export interface SponsoredRaffleDrawEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface SponsoredRaffleDrawSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SponsoredRaffleDrawSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'sponsored' | 'draw' | 'ticketing' | 'stadium';
  lifecycleState: SponsoredRaffleDrawStatus;
  priorityTier: SponsoredRaffleDrawPriority;
  venueTier: SponsoredRaffleDrawVenueTier;
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
  metadataHeaders: SponsoredRaffleDrawMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SponsoredRaffleDrawBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SponsoredRaffleDrawSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
