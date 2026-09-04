/**
 * In-Seat Delivery & Concession Dispatch Engine
 * Manages order cart state, runner dispatch algorithm per stadium sector,
 * delivery fee calculation, and order tracking lifecycle.
 */

import { FoodItem, STADIA_FOOD_CATALOG } from './concessionCatalog';

export interface ConcessionOrderItem {
  item: FoodItem;
  quantity: number;
}

export interface ConcessionOrder {
  orderId: string;
  customerName: string;
  customerMobile: string;
  sectionId: string;
  row: string;
  seatNumber: number;
  items: ConcessionOrderItem[];
  foodSubtotal: number;
  inSeatDeliveryFee: number;
  taxes: number;
  grandTotal: number;
  status: 'Received' | 'Preparing in Kitchen' | 'Runner Dispatched' | 'Delivered to Seat' | 'Cancelled';
  estimatedDeliveryMinutes: number;
  createdAt: string;
}

export class InSeatDeliveryEngine {
  private activeOrders: ConcessionOrder[] = [];
  private baseInSeatDeliveryFee = 49; // Flat ₹49 in-seat delivery runner fee

  public createOrder(
    customerName: string,
    customerMobile: string,
    sectionId: string,
    row: string,
    seatNumber: number,
    items: ConcessionOrderItem[]
  ): ConcessionOrder {
    const foodSubtotal = items.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
    const deliveryFee = sectionId.includes('SUITE') || sectionId.includes('VIP') ? 0 : this.baseInSeatDeliveryFee;
    const taxes = Math.round(foodSubtotal * 0.05); // 5% F&B GST
    const grandTotal = foodSubtotal + deliveryFee + taxes;

    const maxPrepTime = Math.max(...items.map((i) => i.item.preparationTimeMinutes), 5);
    const estimatedDeliveryMinutes = maxPrepTime + 8; // prep time + 8 min runner walking

    const newOrder: ConcessionOrder = {
      orderId: `FND-${Date.now().toString().slice(-6)}`,
      customerName,
      customerMobile,
      sectionId,
      row,
      seatNumber,
      items,
      foodSubtotal,
      inSeatDeliveryFee: deliveryFee,
      taxes,
      grandTotal,
      status: 'Received',
      estimatedDeliveryMinutes,
      createdAt: new Date().toISOString()
    };

    this.activeOrders.push(newOrder);
    return newOrder;
  }

  public getOrderStatus(orderId: string): ConcessionOrder | undefined {
    return this.activeOrders.find((o) => o.orderId === orderId);
  }

  public updateOrderStatus(orderId: string, status: ConcessionOrder['status']): boolean {
    const order = this.getOrderStatus(orderId);
    if (order) {
      order.status = status;
      return true;
    }
    return false;
  }

  public getActiveOrdersForSection(sectionId: string): ConcessionOrder[] {
    return this.activeOrders.filter((o) => o.sectionId === sectionId);
  }
}

export const inSeatDeliveryEngine = new InSeatDeliveryEngine();
