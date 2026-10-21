/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: fan_engagement
 * Feature: Season Ticket Holder VIP Lounge Access and Merch Discount Engine (season-ticket-member-perks)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum SeasonTicketMemberPerksStatus {
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

export enum SeasonTicketMemberPerksPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum SeasonTicketMemberPerksVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface SeasonTicketMemberPerksMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface SeasonTicketMemberPerksConfiguration {
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

export interface SeasonTicketMemberPerksEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface SeasonTicketMemberPerksSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'season' | 'perks' | 'ticketing' | 'stadium';
  lifecycleState: SeasonTicketMemberPerksStatus;
  priorityTier: SeasonTicketMemberPerksPriority;
  venueTier: SeasonTicketMemberPerksVenueTier;
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
  metadataHeaders: SeasonTicketMemberPerksMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface SeasonTicketMemberPerksBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: SeasonTicketMemberPerksSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
