/**
 * Stadium Parking Pass & VIP Valet Logistics Engine
 * Manages parking zones (A-F), EV charging slots, valet allocation, vehicle pass QR codes.
 */

export interface ParkingZone {
  id: string;
  name: string;
  gateProximity: string[];
  vehicleType: 'Car' | 'Two-Wheeler' | 'VIP Valet' | 'Bus / Coach';
  totalSlots: number;
  availableSlots: number;
  pricePerSlot: number;
  evChargingAvailable: boolean;
}

export interface ParkingPassReservation {
  passId: string;
  bookingId: string;
  vehicleNumber: string;
  zoneId: string;
  vehicleType: string;
  slotNumber: string;
  pricePaid: number;
  entryGate: string;
  qrCodeData: string;
  status: 'Active Pass' | 'Scanned at Gate' | 'Expired';
}

export class ParkingSlotEngine {
  private zones: ParkingZone[] = [
    {
      id: 'PARK-ZONE-A',
      name: 'Zone A - Metro Plaza Multi-Level',
      gateProximity: ['Gate 1', 'Gate 2', 'Gate 3'],
      vehicleType: 'Car',
      totalSlots: 1200,
      availableSlots: 450,
      pricePerSlot: 250,
      evChargingAvailable: true
    },
    {
      id: 'PARK-ZONE-B',
      name: 'Zone B - East Ground Parking',
      gateProximity: ['Gate 4', 'Gate 5', 'Gate 6', 'Gate 7'],
      vehicleType: 'Car',
      totalSlots: 1800,
      availableSlots: 820,
      pricePerSlot: 200,
      evChargingAvailable: false
    },
    {
      id: 'PARK-ZONE-C',
      name: 'Zone C - Two Wheeler Stand North',
      gateProximity: ['Gate 1', 'Gate 12'],
      vehicleType: 'Two-Wheeler',
      totalSlots: 3500,
      availableSlots: 1400,
      pricePerSlot: 80,
      evChargingAvailable: true
    },
    {
      id: 'PARK-VALET-VIP',
      name: 'VIP Valet Enclosure - Main Pavilion',
      gateProximity: ['Gate 1 (VVIP Gate)'],
      vehicleType: 'VIP Valet',
      totalSlots: 250,
      availableSlots: 65,
      pricePerSlot: 800,
      evChargingAvailable: true
    }
  ];

  public getZones(): ParkingZone[] {
    return this.zones;
  }

  public reserveParkingPass(
    bookingId: string,
    vehicleNumber: string,
    zoneId: string,
    requestEV: boolean = false
  ): ParkingPassReservation {
    const zone = this.zones.find((z) => z.id === zoneId) || this.zones[0];
    const slotNumber = `${zone.id.split('-').pop()}-${Math.floor(Math.random() * 500) + 1}`;
    const pricePaid = zone.pricePerSlot + (requestEV ? 100 : 0);

    return {
      passId: `PRK-2026-${Math.floor(100000 + Math.random() * 900000)}`,
      bookingId,
      vehicleNumber: vehicleNumber.toUpperCase(),
      zoneId: zone.id,
      vehicleType: zone.vehicleType,
      slotNumber,
      pricePaid,
      entryGate: zone.gateProximity[0],
      qrCodeData: `STADIA_PARK_VERIFY:${bookingId}:${slotNumber}:${vehicleNumber}`,
      status: 'Active Pass'
    };
  }
}

export const parkingSlotEngine = new ParkingSlotEngine();

// Parking slot verification helper
export const checkParkingSlotAvailability = (slotId: string) => slotId.startsWith('PARK-');
