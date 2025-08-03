export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  priceUnit: 'hour' | 'day' | 'week';
  images: string[];
  location: string;
  distance: number;
  rating: number;
  reviewCount: number;
  owner: {
    name: string;
    avatar: string;
    verified: boolean;
    joinedDate: string;
  };
  availability: string[];
  features: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
  joinedDate: string;
  rating: number;
  reviewCount: number;
}

export interface Rental {
  id: string;
  itemId: string;
  renterId: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'active' | 'completed' | 'cancelled';
  totalAmount: number;
}