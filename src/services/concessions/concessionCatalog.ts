/**
 * Concession Catalog & Food & Beverage Data Specifications
 * In-seat dining menu, dietary badges, vendor stand assignments, and pricing.
 */

export interface FoodItem {
  id: string;
  name: string;
  category: 'Snacks' | 'Beverages' | 'Combos' | 'Desserts' | 'Healthy';
  price: number;
  dietary: 'Veg' | 'Non-Veg' | 'Vegan' | 'Jain';
  description: string;
  calories: number;
  preparationTimeMinutes: number;
  imageUrl: string;
  available: boolean;
}

export const STADIA_FOOD_CATALOG: FoodItem[] = [
  {
    id: 'food-hyderabadi-biryani-box',
    name: 'Uppal Signature Biryani Combo',
    category: 'Combos',
    price: 350,
    dietary: 'Non-Veg',
    description: 'Authentic Hyderabadi Mutton Biryani served with Mirchi Ka Salan, Raita, and Cold Beverage.',
    calories: 780,
    preparationTimeMinutes: 10,
    imageUrl: '/assets/food/biryani.jpg',
    available: true
  },
  {
    id: 'food-paneer-tikka-roll',
    name: 'Tandoori Paneer Kathi Roll',
    category: 'Snacks',
    price: 220,
    dietary: 'Veg',
    description: 'Charcoal grilled paneer cubes wrapped in flaky paratha with mint chutney.',
    calories: 450,
    preparationTimeMinutes: 8,
    imageUrl: '/assets/food/paneer-roll.jpg',
    available: true
  },
  {
    id: 'food-samosa-chole-chaat',
    name: 'Delhi Style Samosa Chole Chaat',
    category: 'Snacks',
    price: 150,
    dietary: 'Veg',
    description: 'Two crispy samosas smothered in spiced chickpea curry, sweetened yogurt & tamarind sauce.',
    calories: 520,
    preparationTimeMinutes: 5,
    imageUrl: '/assets/food/chaat.jpg',
    available: true
  },
  {
    id: 'food-chill-cola-large',
    name: 'Fountain Cola (750ml Souvenir Cup)',
    category: 'Beverages',
    price: 120,
    dietary: 'Veg',
    description: 'Ice-cold carbonated beverage in collectible stadium match day cup.',
    calories: 210,
    preparationTimeMinutes: 2,
    imageUrl: '/assets/food/cola.jpg',
    available: true
  },
  {
    id: 'food-masala-chai-kulhad',
    name: 'Kulhad Masala Cutting Chai (2 Cups)',
    category: 'Beverages',
    price: 90,
    dietary: 'Veg',
    description: 'Hot spiced cardamom tea served in traditional eco-friendly clay cups.',
    calories: 140,
    preparationTimeMinutes: 3,
    imageUrl: '/assets/food/chai.jpg',
    available: true
  },
  {
    id: 'food-stadium-popcorn-bucket',
    name: 'Jumbo Butter Popcorn Bucket',
    category: 'Snacks',
    price: 250,
    dietary: 'Veg',
    description: 'Freshly popped movie-style butter popcorn in refillable stadium bucket.',
    calories: 380,
    preparationTimeMinutes: 2,
    imageUrl: '/assets/food/popcorn.jpg',
    available: true
  },
  {
    id: 'food-nachos-cheese-dip',
    name: 'Stadium Nachos & Warm Jalapeno Cheese',
    category: 'Snacks',
    price: 280,
    dietary: 'Veg',
    description: 'Crispy corn tortilla chips paired with warm melted cheddar dip and sliced jalapenos.',
    calories: 560,
    preparationTimeMinutes: 4,
    imageUrl: '/assets/food/nachos.jpg',
    available: true
  },
  {
    id: 'food-ice-cream-sandwich',
    name: 'Belgian Chocolate Ice Cream Sandwich',
    category: 'Desserts',
    price: 140,
    dietary: 'Veg',
    description: 'Rich Belgian chocolate ice cream sandwiched between freshly baked cookies.',
    calories: 320,
    preparationTimeMinutes: 1,
    imageUrl: '/assets/food/icecream.jpg',
    available: true
  }
];
