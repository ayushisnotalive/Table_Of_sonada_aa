export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'burgers' | 'chicken' | 'tea-coffee' | 'bites';
  badge?: 'Best Seller' | 'Chef Special' | 'Signature' | 'Must Try' | 'Local Favorite';
  isVeg?: boolean;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  reviewText: string;
  highlight: string;
  verified: boolean;
  source: 'Google Review' | 'Trip Local';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Location' | 'Menu' | 'Pricing' | 'Timings';
}

export interface MediaAsset {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  subtitle: string;
  aspect?: string;
  category: 'ambiance' | 'food' | 'cozy' | 'video';
}
