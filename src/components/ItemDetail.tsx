import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Shield, Calendar, MessageCircle, Heart } from 'lucide-react';
import { ConflictPrevention } from './ConflictPrevention';
import { PaymentGateway } from './PaymentGateway';
import { Item } from '../types';
import toast from 'react-hot-toast';

interface ItemDetailProps {
  item: Item;
  onBack: () => void;
  isLoggedIn: boolean;
  onLoginRequired: () => void;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({ 
  item, 
  onBack, 
  isLoggedIn, 
  onLoginRequired 
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [conflicts, setConflicts] = useState<any[]>([]);

  const handleBooking = () => {
    if (!isLoggedIn) {
      onLoginRequired();
      return;
    }
    
    if (!isAvailable) {
      toast.error('Please select available dates');
      return;
    }
    
    if (!startDate || !endDate) {
      toast.error('Please select start and end dates');
      return;
    }
    
    setShowPayment(true);
  };

  const handleMessage = () => {
    if (!isLoggedIn) {
      onLoginRequired();
      return;
    }
    // Handle messaging logic here
    alert('Message sent to owner!');
  };

  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
    return days * item.price;
  };

  const handlePaymentSuccess = (paymentId: string) => {
    toast.success('Booking confirmed! The owner will be notified.');
    // In real app, this would create the booking in the database
    console.log('Payment successful:', paymentId);
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment failed:', error);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to results
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div>
          <div className="relative mb-4">
            <img 
              src={item.images[selectedImage]} 
              alt={item.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {item.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${item.title} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h1>
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-gray-600 ml-1">
                {item.rating} ({item.reviewCount} reviews)
              </span>
            </div>
            
            <div className="flex items-center text-gray-500 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{item.location} • {item.distance} mi away</span>
            </div>
            
            <div className="text-3xl font-bold text-blue-600 mb-4">
              ₹{item.price} <span className="text-lg text-gray-600">/ {item.priceUnit}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <div className="flex flex-wrap gap-2">
              {item.features.map((feature, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Owner Info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Owner</h3>
            <div className="flex items-center">
              <img 
                src={item.owner.avatar} 
                alt={item.owner.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <span className="font-medium">{item.owner.name}</span>
                  {item.owner.verified && (
                    <Shield className="h-4 w-4 text-green-500 ml-1" />
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Member since {item.owner.joinedDate}
                </p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Book this item</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <ConflictPrevention
              itemId={item.id}
              selectedStartDate={startDate}
              selectedEndDate={endDate}
              onConflictDetected={setConflicts}
              onAvailabilityCheck={setIsAvailable}
            />

            {startDate && endDate && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total</span>
                  <span className="text-xl font-bold text-blue-600">
                    ${calculateTotal()}
                  </span>
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={handleBooking}
                disabled={!startDate || !endDate || !isAvailable}
                className={`flex-1 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${
                  isAvailable 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500'
                }`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                {isAvailable ? 'Book Now' : 'Not Available'}
              </button>
              <button
                onClick={handleMessage}
                className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <PaymentGateway
        amount={calculateTotal()}
        itemTitle={item.title}
        onPaymentSuccess={handlePaymentSuccess}
        onPaymentError={handlePaymentError}
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
      />
    </div>
  );
};