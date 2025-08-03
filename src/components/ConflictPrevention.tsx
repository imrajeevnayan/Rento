import React, { useState, useEffect } from 'react';
import { AlertTriangle, Calendar, Clock, CheckCircle } from 'lucide-react';
import { format, isWithinInterval, parseISO } from 'date-fns';

interface Booking {
  id: string;
  itemId: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'active' | 'completed';
  renterName: string;
}

interface ConflictPreventionProps {
  itemId: string;
  selectedStartDate: string;
  selectedEndDate: string;
  onConflictDetected: (conflicts: Booking[]) => void;
  onAvailabilityCheck: (isAvailable: boolean) => void;
}

export const ConflictPrevention: React.FC<ConflictPreventionProps> = ({
  itemId,
  selectedStartDate,
  selectedEndDate,
  onConflictDetected,
  onAvailabilityCheck
}) => {
  const [conflicts, setConflicts] = useState<Booking[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] = useState<'available' | 'conflict' | 'checking'>('checking');

  // Mock existing bookings - in real app, this would come from API
  const existingBookings: Booking[] = [
    {
      id: '1',
      itemId: itemId,
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      status: 'approved',
      renterName: 'John Doe'
    },
    {
      id: '2',
      itemId: itemId,
      startDate: '2024-03-25',
      endDate: '2024-03-27',
      status: 'pending',
      renterName: 'Jane Smith'
    }
  ];

  useEffect(() => {
    if (selectedStartDate && selectedEndDate) {
      checkForConflicts();
    }
  }, [selectedStartDate, selectedEndDate, itemId]);

  const checkForConflicts = async () => {
    setIsChecking(true);
    setAvailabilityStatus('checking');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const selectedStart = parseISO(selectedStartDate);
    const selectedEnd = parseISO(selectedEndDate);
    
    const conflictingBookings = existingBookings.filter(booking => {
      if (booking.status === 'completed') return false;
      
      const bookingStart = parseISO(booking.startDate);
      const bookingEnd = parseISO(booking.endDate);
      
      // Check for date overlap
      return (
        isWithinInterval(selectedStart, { start: bookingStart, end: bookingEnd }) ||
        isWithinInterval(selectedEnd, { start: bookingStart, end: bookingEnd }) ||
        isWithinInterval(bookingStart, { start: selectedStart, end: selectedEnd }) ||
        isWithinInterval(bookingEnd, { start: selectedStart, end: selectedEnd })
      );
    });
    
    setConflicts(conflictingBookings);
    const isAvailable = conflictingBookings.length === 0;
    setAvailabilityStatus(isAvailable ? 'available' : 'conflict');
    
    onConflictDetected(conflictingBookings);
    onAvailabilityCheck(isAvailable);
    setIsChecking(false);
  };

  const getAlternativeDates = () => {
    // Simple algorithm to suggest alternative dates
    const suggestions = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dateStr = format(date, 'yyyy-MM-dd');
      const hasConflict = existingBookings.some(booking => 
        isWithinInterval(parseISO(dateStr), { 
          start: parseISO(booking.startDate), 
          end: parseISO(booking.endDate) 
        })
      );
      
      if (!hasConflict) {
        suggestions.push(dateStr);
        if (suggestions.length >= 3) break;
      }
    }
    
    return suggestions;
  };

  if (!selectedStartDate || !selectedEndDate) {
    return null;
  }

  return (
    <div className="mt-4">
      {isChecking && (
        <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <Clock className="h-4 w-4 text-blue-600 mr-2 animate-spin" />
          <span className="text-sm text-blue-700">Checking availability...</span>
        </div>
      )}

      {!isChecking && availabilityStatus === 'available' && (
        <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
          <span className="text-sm text-green-700 font-medium">
            Great! This item is available for your selected dates.
          </span>
        </div>
      )}

      {!isChecking && availabilityStatus === 'conflict' && conflicts.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-start p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertTriangle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-red-700 font-medium mb-2">
                Sorry, this item is not available for your selected dates.
              </p>
              <div className="space-y-1">
                {conflicts.map((conflict) => (
                  <div key={conflict.id} className="text-xs text-red-600">
                    <span className="font-medium">{conflict.renterName}</span> has it booked from{' '}
                    {format(parseISO(conflict.startDate), 'MMM dd')} to{' '}
                    {format(parseISO(conflict.endDate), 'MMM dd')}
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      conflict.status === 'approved' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {conflict.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm text-blue-700 font-medium">Alternative dates available:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {getAlternativeDates().map((date) => (
                <button
                  key={date}
                  className="px-3 py-1 bg-white border border-blue-300 rounded-md text-xs text-blue-700 hover:bg-blue-100 transition-colors"
                  onClick={() => {
                    // In real app, this would update the parent component's date selection
                    console.log('Selected alternative date:', date);
                  }}
                >
                  {format(parseISO(date), 'MMM dd')}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};