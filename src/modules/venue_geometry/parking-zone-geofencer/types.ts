/**
 * Stadium Ticketing & Venue Operations Platform - Type Definitions
 * Domain: venue_geometry
 * Feature: Stadium Parking Lot Spatial Zone Geofencer and Space Assigner (parking-zone-geofencer)
 * Strongly-typed domain schemas, lifecycle status enums, and analytical audit interfaces.
 */

export enum ParkingZoneGeofencerStatus {
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

export enum ParkingZoneGeofencerPriority {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
  SEASON_HOLDER = 'SEASON_HOLDER',
  EXECUTIVE_CLUB = 'EXECUTIVE_CLUB',
}}

export enum ParkingZoneGeofencerVenueTier {
  UPPER_DECK = 'UPPER_DECK',
  LOWER_BOWL = 'LOWER_BOWL',
  CLUB_LEVEL = 'CLUB_LEVEL',
  LUXURY_SUITE = 'LUXURY_SUITE',
  FIELD_SIDELINE = 'FIELD_SIDELINE',
}}

export interface ParkingZoneGeofencerMetadata {
  readonly recordId: string;
  readonly stadiumId: string;
  readonly eventId: string;
  readonly operatorId: string;
  readonly createdEpochMs: number;
  readonly updatedTimestamp: string;
  readonly schemaVersion: string;
  readonly checksumSignature: string;
}}

export interface ParkingZoneGeofencerConfiguration {
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

export interface ParkingZoneGeofencerEvaluationMetric {
  totalProcessedSeats: number;
  cumulativeLatencyMs: number;
  gateThroughputRate: number;
  activeWarningCount: number;
  criticalAlertCount: number;
  occupancyEfficiencyRatio: number;
  revenueOptimizationScore: number;
}}

export interface ParkingZoneGeofencerSeatRecord_1 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_1 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_1[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_2 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_2 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_2[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_3 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_3 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_3[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_4 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_4 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_4[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_5 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_5 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_5[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_6 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_6 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_6[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_7 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_7 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_7[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_8 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_8 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_8[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_9 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_9 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_9[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_10 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_10 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_10[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_11 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_11 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_11[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_12 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_12 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_12[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_13 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_13 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_13[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_14 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_14 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_14[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_15 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_15 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_15[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_16 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_16 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_16[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_17 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_17 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_17[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_18 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_18 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_18[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_19 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_19 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_19[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_20 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_20 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_20[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_21 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_21 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_21[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_22 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_22 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_22[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_23 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_23 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_23[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_24 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_24 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_24[];
  cryptographicProof: string;
  processingDurationMs: number;
}}

export interface ParkingZoneGeofencerSeatRecord_25 {
  recordId: string;
  sequenceOrder: number;
  trackingBarcode: string;
  domainCategory: 'parking' | 'geofencer' | 'ticketing' | 'stadium';
  lifecycleState: ParkingZoneGeofencerStatus;
  priorityTier: ParkingZoneGeofencerPriority;
  venueTier: ParkingZoneGeofencerVenueTier;
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
  metadataHeaders: ParkingZoneGeofencerMetadata;
  customAttributes: Record<string, string | number | boolean>;
  validityWindow: {
    gatesOpenEpoch: number;
    eventStartEpoch: number;
    curfewEndEpoch?: number;
  };
}}

export interface ParkingZoneGeofencerBatchResult_25 {
  batchTransactionId: string;
  initiatedTimestampIso: string;
  submittedSeatsCount: number;
  successfullyAllocated: number;
  failedAllocationCount: number;
  allocatedSeats: ParkingZoneGeofencerSeatRecord_25[];
  cryptographicProof: string;
  processingDurationMs: number;
}}
