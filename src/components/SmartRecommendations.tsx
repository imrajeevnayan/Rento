import React from 'react';
import { Star, MapPin, TrendingUp, Users } from 'lucide-react';
import { Item } from '../types';

interface SmartRecommendationsProps {
  items: Item[];
  onItemClick: (item: Item) => void;
  userPreferences?: {
    categories: string[];
    priceRange: [number, number];
    location: string;
  };
}

export const SmartRecommendations: React.FC<SmartRecommendationsProps> = ({ 
  items, 
  onItemClick,
  userPreferences 
}) => {
  // Smart recommendation algorithm
  const getRecommendedItems = () => {
    return items
      .map(item => ({
        ...item,
        score: calculateRecommendationScore(item)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  };

  const calculateRecommendationScore = (item: Item) => {
    let score = 0;
    
    // Base score from rating and reviews
    score += item.rating * 10 + Math.min(item.reviewCount, 20);
    
    // Distance factor (closer is better)
    score += Math.max(0, 50 - item.distance * 10);
    
    // Category preference
    if (userPreferences?.categories.includes(item.category)) {
      score += 30;
    }
    
    // Price preference
    if (userPreferences?.priceRange) {
      const [min, max] = userPreferences.priceRange;
      if (item.price >= min && item.price <= max) {
        score += 20;
      }
    }
    
    // Popularity boost for highly rated items
    if (item.rating >= 4.5 && item.reviewCount >= 10) {
      score += 25;
    }
    
    return score;
  };

  const recommendedItems = getRecommendedItems();

  const getRecommendationReason = (item: Item & { score: number }) => {
    if (item.rating >= 4.8) return "Highly rated";
    if (item.distance <= 1) return "Very close to you";
    if (userPreferences?.categories.includes(item.category)) return "Matches your interests";
    if (item.reviewCount >= 15) return "Popular choice";
    return "Recommended for you";
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Smart Recommendations</h2>
          </div>
          <p className="text-gray-600">Items picked just for you based on your preferences and activity</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => onItemClick(item)}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100"
            >
              <div className="relative">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {getRecommendationReason(item)}
                </div>
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-bold text-gray-900">
                  ₹{item.price}/{item.priceUnit}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                  {item.title}
                </h3>
                
                <div className="flex items-center mb-2">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">
                    {item.rating} ({item.reviewCount})
                  </span>
                </div>
                
                <div className="flex items-center text-gray-500 text-xs mb-3">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{item.distance} mi away</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={item.owner.avatar} 
                      alt={item.owner.name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    <span className="text-xs text-gray-600 ml-1 truncate">{item.owner.name}</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Users className="h-3 w-3 mr-1" />
                    <span className="text-xs font-medium">Match: {Math.round((item.score / 100) * 100)}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};