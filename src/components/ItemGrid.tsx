import React from 'react';
import { ItemCard } from './ItemCard';
import { Item } from '../types';

interface ItemGridProps {
  items: Item[];
  onItemClick: (item: Item) => void;
}

export const ItemGrid: React.FC<ItemGridProps> = ({ items, onItemClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Available Items Near You
        </h2>
        <p className="text-gray-600">
          {items.length} items found
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No items found. Try adjusting your search or category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard 
              key={item.id} 
              item={item} 
              onClick={() => onItemClick(item)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};