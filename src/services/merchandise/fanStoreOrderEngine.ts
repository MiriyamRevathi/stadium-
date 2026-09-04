/**
 * Fan Store Order Engine & Jersey Customization Dispatch
 */

import { MerchItem, OFFICIAL_STADIA_MERCHANDISE } from './merchandiseCatalog';

export interface MerchOrderItem {
  item: MerchItem;
  size: string;
  quantity: number;
  customName?: string;
  customNumber?: number;
}

export interface MerchOrder {
  orderId: string;
  customerName: string;
  customerEmail: string;
  items: MerchOrderItem[];
  fulfillmentType: 'Kiosk Express Pick-Up' | 'Home Delivery';
  pickupKioskLocation?: string;
  subtotal: number;
  customizationFee: number;
  totalAmount: number;
  status: 'Pending' | 'Customizing Jersey' | 'Ready at Gate 3 Kiosk' | 'Completed';
  createdAt: string;
}

export class FanStoreOrderEngine {
  private orders: MerchOrder[] = [];

  public createMerchOrder(
    customerName: string,
    customerEmail: string,
    items: MerchOrderItem[],
    fulfillmentType: 'Kiosk Express Pick-Up' | 'Home Delivery',
    pickupKioskLocation?: string
  ): MerchOrder {
    const subtotal = items.reduce((acc, entry) => acc + entry.item.price * entry.quantity, 0);

    let customizationFee = 0;
    items.forEach((entry) => {
      if (entry.customName || entry.customNumber) {
        customizationFee += 350 * entry.quantity; // ₹350 per jersey customization
      }
    });

    const totalAmount = subtotal + customizationFee;

    const newOrder: MerchOrder = {
      orderId: `MERCH-${Date.now().toString().slice(-6)}`,
      customerName,
      customerEmail,
      items,
      fulfillmentType,
      pickupKioskLocation: pickupKioskLocation || 'Gate 3 Official Fan Store',
      subtotal,
      customizationFee,
      totalAmount,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  public getOrder(orderId: string): MerchOrder | undefined {
    return this.orders.find((o) => o.orderId === orderId);
  }
}

export const fanStoreOrderEngine = new FanStoreOrderEngine();
