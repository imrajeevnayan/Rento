import React from 'react';
import { ArrowLeft, Star, Calendar, Package, MessageCircle, Shield } from 'lucide-react';

interface ProfileProps {
  user: any;
  onBack: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onBack }) => {
  const mockListings = [
    {
      id: '1',
      title: 'Professional DSLR Camera',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      price: 45,
      status: 'available'
    },
    {
      id: '2',
      title: 'Camping Tent (4-person)',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      price: 25,
      status: 'rented'
    }
  ];

  const mockRentals = [
    {
      id: '1',
      title: 'Power Drill Set',
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      dates: 'Mar 15-17, 2024',
      status: 'completed'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </button>

      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <img 
            src={user?.avatar || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=128&h=128&dpr=1'} 
            alt={user?.name || 'User'}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div className="ml-6">
            <div className="flex items-center mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{user?.name || 'Sarah Johnson'}</h1>
              <Shield className="h-5 w-5 text-green-500 ml-2" />
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              <span>4.8 (24 reviews)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Member since January 2024</span>
              {user?.authProvider === 'google' && (
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google Account
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">Items Listed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-sm text-gray-600">Successful Rentals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">₹25,600</div>
            <div className="text-sm text-gray-600">Total Earned</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Listings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Package className="h-5 w-5 mr-2" />
            My Listings
          </h2>
          <div className="space-y-4">
            {mockListings.map((listing) => (
              <div key={listing.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="h-16 w-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{listing.title}</h3>
                  <p className="text-sm text-gray-600">₹{listing.price}/day</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    listing.status === 'available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {listing.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Add New Item
          </button>
        </div>

        {/* My Rentals */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            My Rentals
          </h2>
          <div className="space-y-4">
            {mockRentals.map((rental) => (
              <div key={rental.id} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                <img 
                  src={rental.image} 
                  alt={rental.title}
                  className="h-16 w-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{rental.title}</h3>
                  <p className="text-sm text-gray-600">{rental.dates}</p>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                    {rental.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};