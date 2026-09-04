/**
 * Fan Merchandise Catalog & Official Team Gear Specs
 */

export interface MerchItem {
  id: string;
  name: string;
  category: 'Jerseys' | 'Caps' | 'Memorabilia' | 'Accessories' | 'Match Balls';
  price: number;
  availableSizes: Array<'S' | 'M' | 'L' | 'XL' | 'XXL' | 'One Size'>;
  customizableNameNumber: boolean;
  description: string;
  imageUrl: string;
  stockCount: number;
}

export const OFFICIAL_STADIA_MERCHANDISE: MerchItem[] = [
  {
    id: 'merch-official-match-jersey-2026',
    name: 'India Official T20 International Match Jersey 2026',
    category: 'Jerseys',
    price: 3499,
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    customizableNameNumber: true,
    description: 'BCCI official pro-grade moisture-wicking match day jersey featuring gold star embroidery and ventilation panels.',
    imageUrl: '/assets/merch/jersey.jpg',
    stockCount: 250
  },
  {
    id: 'merch-fan-edition-replica-jersey',
    name: 'Uppal Hyderabad Stadium Fan Edition Blue Jersey',
    category: 'Jerseys',
    price: 1499,
    availableSizes: ['S', 'M', 'L', 'XL', 'XXL'],
    customizableNameNumber: true,
    description: 'Lightweight poly-mesh replica jersey for high-heat stadium support.',
    imageUrl: '/assets/merch/replica.jpg',
    stockCount: 500
  },
  {
    id: 'merch-embroidered-snapback-cap',
    name: 'BCCI Official Crest Snapback Cap',
    category: 'Caps',
    price: 899,
    availableSizes: ['One Size'],
    customizableNameNumber: false,
    description: 'Adjustable 6-panel snapback cap with 3D raised crest embroidery and sweatband.',
    imageUrl: '/assets/merch/cap.jpg',
    stockCount: 400
  },
  {
    id: 'merch-commemorative-leather-ball',
    name: 'Uppal Border-Gavaskar Series Match Souvenir Leather Ball',
    category: 'Match Balls',
    price: 1999,
    availableSizes: ['One Size'],
    customizableNameNumber: false,
    description: 'Hand-stitched alum-tanned gold-stamped commemorative cricket ball on mahogany display stand.',
    imageUrl: '/assets/merch/ball.jpg',
    stockCount: 85
  },
  {
    id: 'merch-stadium-fan-scarf',
    name: 'Bleed Blue Stadium Woven Jacquard Fan Scarf',
    category: 'Accessories',
    price: 699,
    availableSizes: ['One Size'],
    customizableNameNumber: false,
    description: 'Double-sided acrylic knit scarf with classic tassel fringes.',
    imageUrl: '/assets/merch/scarf.jpg',
    stockCount: 300
  }
];
