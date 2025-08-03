import React from 'react';
import { Star, MapPin, Shield } from 'lucide-react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onClick: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-200 hover:shadow-lg hover:scale-105"
    >
      <div className="relative">
        <img 
          src={item.images[0]} 
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium">
          ₹{item.price}/{item.priceUnit}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {item.title}
        </h3>
        
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600 ml-1">
            {item.rating} ({item.reviewCount} reviews)
          </span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{item.location} • {item.distance} mi away</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={item.owner.avatar} 
              alt={item.owner.name}
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600 ml-2">{item.owner.name}</span>
            {item.owner.verified && (
              <Shield className="h-3 w-3 text-green-500 ml-1" />
            )}
          </div>
          
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
};