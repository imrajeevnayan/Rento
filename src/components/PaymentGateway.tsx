import React, { useState } from 'react';
import { CreditCard, Lock, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface PaymentGatewayProps {
  amount: number;
  itemTitle: string;
  onPaymentSuccess: (paymentId: string) => void;
  onPaymentError: (error: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  amount,
  itemTitle,
  onPaymentSuccess,
  onPaymentError,
  isOpen,
  onClose
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'apple'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const getCardType = (number: string) => {
    const num = number.replace(/\s/g, '');
    if (num.startsWith('4')) return 'visa';
    if (num.startsWith('5') || num.startsWith('2')) return 'mastercard';
    if (num.startsWith('3')) return 'amex';
    return 'unknown';
  };

  const validateCard = () => {
    const errors = [];
    if (cardDetails.number.replace(/\s/g, '').length < 13) {
      errors.push('Invalid card number');
    }
    if (!cardDetails.expiry.match(/^\d{2}\/\d{2}$/)) {
      errors.push('Invalid expiry date');
    }
    if (cardDetails.cvv.length < 3) {
      errors.push('Invalid CVV');
    }
    if (cardDetails.name.length < 2) {
      errors.push('Invalid cardholder name');
    }
    return errors;
  };

  const processPayment = async () => {
    setIsProcessing(true);
    
    try {
      // Validate card details
      const errors = validateCard();
      if (errors.length > 0) {
        throw new Error(errors[0]);
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random success/failure for demo
      if (Math.random() > 0.1) { // 90% success rate
        const paymentId = `pay_${Date.now()}`;
        onPaymentSuccess(paymentId);
        toast.success('Payment successful!');
        onClose();
      } else {
        throw new Error('Payment declined by bank');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Payment failed';
      onPaymentError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const processAlternativePayment = async (method: 'paypal' | 'apple') => {
    setIsProcessing(true);
    
    try {
      // Simulate alternative payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const paymentId = `${method}_${Date.now()}`;
      onPaymentSuccess(paymentId);
      toast.success(`Payment via ${method === 'paypal' ? 'PayPal' : 'Apple Pay'} successful!`);
      onClose();
    } catch (error) {
      const errorMessage = `${method === 'paypal' ? 'PayPal' : 'Apple Pay'} payment failed`;
      onPaymentError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Secure Payment</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              disabled={isProcessing}
            >
              ✕
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Order Summary</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{itemTitle}</span>
              <span className="font-bold text-gray-900">₹{amount}</span>
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
              <span className="font-medium text-gray-900">Total</span>
              <span className="font-bold text-lg text-blue-600">₹{amount}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Payment Method</h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  paymentMethod === 'card' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <CreditCard className="h-5 w-5 mx-auto mb-1" />
                <span className="text-xs">Card</span>
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  paymentMethod === 'paypal' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="h-5 w-5 mx-auto mb-1 bg-blue-600 rounded text-white text-xs flex items-center justify-center">P</div>
                <span className="text-xs">PayPal</span>
              </button>
              <button
                onClick={() => setPaymentMethod('apple')}
                className={`p-3 border rounded-lg text-center transition-colors ${
                  paymentMethod === 'apple' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="h-5 w-5 mx-auto mb-1 bg-black rounded text-white text-xs flex items-center justify-center">🍎</div>
                <span className="text-xs">Apple Pay</span>
              </button>
            </div>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({
                      ...cardDetails, 
                      number: formatCardNumber(e.target.value)
                    })}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={19}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {getCardType(cardDetails.number) === 'visa' && (
                      <div className="text-blue-600 font-bold text-xs">VISA</div>
                    )}
                    {getCardType(cardDetails.number) === 'mastercard' && (
                      <div className="text-red-600 font-bold text-xs">MC</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({
                      ...cardDetails, 
                      expiry: formatExpiry(e.target.value)
                    })}
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({
                      ...cardDetails, 
                      cvv: e.target.value.replace(/\D/g, '')
                    })}
                    placeholder="123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={4}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({
                    ...cardDetails, 
                    name: e.target.value
                  })}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Security Notice */}
          <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg mb-6">
            <Shield className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm text-green-700">
              Your payment is secured with 256-bit SSL encryption
            </span>
          </div>

          {/* Payment Button */}
          <button
            onClick={() => {
              if (paymentMethod === 'card') {
                processPayment();
              } else {
                processAlternativePayment(paymentMethod);
              }
            }}
            disabled={isProcessing}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Pay ₹{amount}
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            By completing this payment, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};