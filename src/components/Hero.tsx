import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'home', label: 'Home & Living' },
  { id: 'camping', label: 'Travel & Outdoor' },
  { id: 'vehicles', label: 'Vehicles' },
  { id: 'tools', label: 'Event & Party' },
  { id: 'books', label: 'Fashion & Wearables' },
  { id: 'fitness', label: 'Fitness & Sports' },
  { id: 'office', label: 'Office & Work' },
  { id: 'music', label: 'Musical Instruments' },
  { id: 'kitchen', label: 'Kitchen & Cooking' },
  { id: 'cleaning', label: 'Cleaning Equipment' },
  { id: 'photography', label: 'Photography' },
  { id: 'party', label: 'Party & Entertainment' },
  { id: 'medical', label: 'Medical & Health' },
  { id: 'art', label: 'Art & Craft' },
  { id: 'education', label: 'Educational' },
  { id: 'security', label: 'Security & Safety' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'seasonal', label: 'Seasonal & Holiday' },
  { id: 'pets', label: 'Pet Care' },
];

export const Hero: React.FC<HeroProps> = ({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Rent Anything, Anywhere
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Discover items from your neighbors and make extra income from your unused stuff
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-500 text-white hover:bg-blue-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center justify-center text-blue-100">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">Showing items near Bangalore, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};