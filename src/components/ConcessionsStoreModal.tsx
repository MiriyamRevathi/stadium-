import React, { useState } from 'react';
import { ShoppingBag, Utensils, X, CheckCircle, Clock, Truck, ShieldCheck, DollarSign } from 'lucide-react';
import { STADIA_FOOD_CATALOG, FoodItem } from '../services/concessions/concessionCatalog';
import { inSeatDeliveryEngine, ConcessionOrder } from '../services/concessions/inSeatDeliveryEngine';

interface ConcessionsStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  sectionId?: string;
  row?: string;
  seatNumber?: number;
  customerName?: string;
  customerMobile?: string;
}

export const ConcessionsStoreModal: React.FC<ConcessionsStoreModalProps> = ({
  isOpen,
  onClose,
  sectionId = 'SEC-A01',
  row = 'D',
  seatNumber = 12,
  customerName = 'Rahul Reddy',
  customerMobile = '9876543210'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [activeOrder, setActiveOrder] = useState<ConcessionOrder | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Combos', 'Snacks', 'Beverages', 'Desserts'];

  const filteredItems = selectedCategory === 'All'
    ? STADIA_FOOD_CATALOG
    : STADIA_FOOD_CATALOG.filter((i) => i.category === selectedCategory);

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[itemId] || 0;
      const updated = Math.max(0, current + delta);
      if (updated === 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: updated };
    });
  };

  const cartEntries = Object.entries(cart).map(([itemId, quantity]) => ({
    item: STADIA_FOOD_CATALOG.find((i) => i.id === itemId)!,
    quantity: Number(quantity)
  })).filter((e) => e.item !== undefined);

  const foodSubtotal = cartEntries.reduce((sum, e) => sum + e.item.price * e.quantity, 0);
  const deliveryFee = sectionId.includes('SUITE') || sectionId.includes('VIP') ? 0 : 49;
  const taxes = Math.round(foodSubtotal * 0.05);
  const grandTotal = foodSubtotal + deliveryFee + taxes;

  const handleCheckout = () => {
    if (cartEntries.length === 0) return;
    const order = inSeatDeliveryEngine.createOrder(
      customerName,
      customerMobile,
      sectionId,
      row,
      seatNumber,
      cartEntries
    );
    setActiveOrder(order);
    setCart({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-white shadow-2xl">
        {/* Header */}
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                In-Seat Dining & Express Concessions
              </h2>
              <p className="text-xs text-slate-400">
                Delivering straight to Section <span className="font-semibold text-orange-400">{sectionId}</span>, Row {row}, Seat {seatNumber}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/60 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {activeOrder ? (
          <div className="p-8 flex flex-col items-center justify-center text-center space-y-6 overflow-y-auto">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                Order Dispatched #{activeOrder.orderId}
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">Food Is On Its Way To Your Seat!</h3>
              <p className="text-slate-400 text-sm max-w-md mt-1">
                Our stadium runner has received your order and is fetching hot meals from the Concourse Kitchen.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl w-full max-w-md text-left space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Delivering To:</span>
                <span className="font-semibold text-white">Sec {activeOrder.sectionId}, Row {activeOrder.row}, Seat {activeOrder.seatNumber}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Est. Delivery Time:</span>
                <span className="font-semibold text-orange-400 flex items-center gap-1">
                  <Clock className="w-4 h-4" /> ~{activeOrder.estimatedDeliveryMinutes} Mins
                </span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-slate-800 font-bold">
                <span className="text-slate-300">Total Paid:</span>
                <span className="text-emerald-400">₹{activeOrder.grandTotal}</span>
              </div>
            </div>

            <button
              onClick={() => setActiveOrder(null)}
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-500 font-semibold text-white rounded-xl transition"
            >
              Order More Items
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Menu Grid */}
            <div className="flex-1 p-6 overflow-y-auto border-r border-slate-800">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                        : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-750'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredItems.map((item) => {
                  const qty = cart[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className="bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 p-4 rounded-xl flex flex-col justify-between transition"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                          <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                            item.dietary === 'Veg' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
                          }`}>
                            {item.dietary}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.description}</p>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/60">
                        <span className="text-sm font-bold text-white">₹{item.price}</span>

                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white rounded bg-slate-800 hover:bg-slate-700 text-xs font-bold"
                          >
                            -
                          </button>
                          <span className="w-5 text-center text-xs font-bold">{qty}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-orange-400 hover:text-white rounded bg-orange-600/30 hover:bg-orange-600 text-xs font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cart Drawer Right */}
            <div className="w-full md:w-80 bg-slate-950 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800">
              <div>
                <h3 className="font-bold text-white flex items-center gap-2 mb-4">
                  <ShoppingBag className="w-5 h-5 text-orange-500" />
                  Your Order Cart
                </h3>

                {cartEntries.length === 0 ? (
                  <div className="text-center py-12 text-slate-500 text-xs">
                    No food items selected yet. Tap '+' to add snacks to your in-seat order.
                  </div>
                ) : (
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {cartEntries.map(({ item, quantity }) => (
                      <div key={item.id} className="flex justify-between items-center text-xs border-b border-slate-850 pb-2">
                        <div>
                          <div className="text-white font-medium">{item.name}</div>
                          <div className="text-slate-400">Qty: {quantity} x ₹{item.price}</div>
                        </div>
                        <div className="font-bold text-white">₹{item.price * quantity}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Summary Footer */}
              {cartEntries.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Food Subtotal:</span>
                    <span>₹{foodSubtotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>In-Seat Delivery Runner:</span>
                    <span>{deliveryFee === 0 ? 'FREE (VIP)' : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>GST (5%):</span>
                    <span>₹{taxes}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                    <span>Total Amount:</span>
                    <span className="text-orange-400 text-base">₹{grandTotal}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 mt-3 bg-orange-600 hover:bg-orange-500 font-bold text-white rounded-xl shadow-lg shadow-orange-600/30 transition flex items-center justify-center gap-2"
                  >
                    <Truck className="w-4 h-4" />
                    Place In-Seat Order
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
