/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: ticketing_engine
 * Feature: Secondary Ticket Resale and Fan-to-Fan Exchange Guard (resale-exchange-marketplace)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum ResaleExchangeMarketplaceStatus {
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

export enum ResaleExchangeMarketplacePriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum ResaleExchangeMarketplaceVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface ResaleExchangeMarketplaceMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface ResaleExchangeMarketplaceConfiguration {
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

export interface ResaleExchangeMarketplaceEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ResaleExchangeMarketplaceSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'resale' | 'marketplace' | 'ticketing' | 'stadium';
  lifecycleState: ResaleExchangeMarketplaceStatus;
  priorityTier: ResaleExchangeMarketplacePriority;
  venueTier: ResaleExchangeMarketplaceVenueTier;
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
  metadataHeaders: ResaleExchangeMarketplaceMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ResaleExchangeMarketplaceBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ResaleExchangeMarketplaceSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
