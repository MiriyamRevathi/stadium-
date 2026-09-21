/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: gate_access_control
 * Feature: Apple Wallet and Google Pay NFC PKPass Ticket Provisioner (mobile-wallet-pass-provisioner)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum MobileWalletPassProvisionerStatus {
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

export enum MobileWalletPassProvisionerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum MobileWalletPassProvisionerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface MobileWalletPassProvisionerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface MobileWalletPassProvisionerConfiguration {
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

export interface MobileWalletPassProvisionerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface MobileWalletPassProvisionerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'mobile' | 'provisioner' | 'ticketing' | 'stadium';
  lifecycleState: MobileWalletPassProvisionerStatus;
  priorityTier: MobileWalletPassProvisionerPriority;
  venueTier: MobileWalletPassProvisionerVenueTier;
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
  metadataHeaders: MobileWalletPassProvisionerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface MobileWalletPassProvisionerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: MobileWalletPassProvisionerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
