import { Item } from '../types';

export const mockItems: Item[] = [
  // Electronics
  {
    id: '1',
    title: 'Professional DSLR Camera',
    description: 'Canon EOS 5D Mark IV with 24-70mm lens. Perfect for photography enthusiasts and professionals. Includes battery, charger, and camera bag.',
    category: 'electronics',
    price: 45,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Koramangala, Bangalore',
    distance: 2.5,
    rating: 4.8,
    reviewCount: 23,
    owner: {
      name: 'Rajesh Kumar',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-15', '2024-03-16', '2024-03-17'],
    features: ['Full Frame Sensor', '30.4 MP', '4K Video', 'Weather Sealed']
  },
  {
    id: '2',
    title: 'MacBook Pro 16-inch',
    description: 'Latest MacBook Pro with M2 chip, 16GB RAM, 512GB SSD. Ideal for video editing, programming, and creative work.',
    category: 'electronics',
    price: 80,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Indiranagar, Bangalore',
    distance: 3.2,
    rating: 4.9,
    reviewCount: 31,
    owner: {
      name: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-18', '2024-03-19', '2024-03-20'],
    features: ['M2 Chip', '16GB RAM', '512GB SSD', 'Retina Display']
  },
  {
    id: '3',
    title: 'Gaming Console PS5',
    description: 'Sony PlayStation 5 with 2 controllers and popular games. Perfect for gaming nights and entertainment.',
    category: 'electronics',
    price: 35,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Whitefield, Bangalore',
    distance: 8.1,
    rating: 4.7,
    reviewCount: 18,
    owner: {
      name: 'Arjun Patel',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['4K Gaming', '2 Controllers', 'Popular Games', 'Ray Tracing']
  },

  // Home & Living
  {
    id: '4',
    title: 'Comfortable Sofa Set',
    description: '3-seater sofa with matching cushions. Perfect for events, temporary accommodation, or home staging.',
    category: 'home',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'HSR Layout, Bangalore',
    distance: 4.3,
    rating: 4.5,
    reviewCount: 12,
    owner: {
      name: 'Meera Reddy',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['3-Seater', 'Comfortable Cushions', 'Easy to Move', 'Clean']
  },
  {
    id: '5',
    title: 'Dining Table Set',
    description: '6-seater wooden dining table with chairs. Great for dinner parties and family gatherings.',
    category: 'home',
    price: 30,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Jayanagar, Bangalore',
    distance: 5.7,
    rating: 4.6,
    reviewCount: 9,
    owner: {
      name: 'Vikram Singh',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-19', '2024-03-20'],
    features: ['6-Seater', 'Wooden', 'Sturdy', 'Elegant Design']
  },

  // Travel & Outdoor
  {
    id: '6',
    title: 'Camping Tent (4-person)',
    description: 'Waterproof 4-person camping tent with easy setup. Perfect for weekend getaways and outdoor adventures.',
    category: 'camping',
    price: 20,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Marathahalli, Bangalore',
    distance: 6.2,
    rating: 4.4,
    reviewCount: 15,
    owner: {
      name: 'Anita Joshi',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-22', '2024-03-23', '2024-03-24'],
    features: ['4-Person Capacity', 'Waterproof', 'Easy Setup', 'Lightweight']
  },
  {
    id: '7',
    title: 'Mountain Bike',
    description: 'High-quality mountain bike with 21 gears. Perfect for city rides and light trail adventures.',
    category: 'vehicles',
    price: 15,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Banashankari, Bangalore',
    distance: 7.8,
    rating: 4.3,
    reviewCount: 21,
    owner: {
      name: 'Rohit Gupta',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-15', '2024-03-16'],
    features: ['21 Gears', 'Mountain Bike', 'Good Condition', 'Helmet Included']
  },

  // Tools & Equipment
  {
    id: '8',
    title: 'Power Drill Set',
    description: 'Professional power drill with various bits and accessories. Perfect for home improvement projects.',
    category: 'tools',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Electronic City, Bangalore',
    distance: 12.5,
    rating: 4.7,
    reviewCount: 28,
    owner: {
      name: 'Suresh Kumar',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-17', '2024-03-18', '2024-03-19'],
    features: ['Cordless', 'Multiple Bits', 'Professional Grade', 'Case Included']
  },
  {
    id: '9',
    title: 'Ladder (6 feet)',
    description: 'Sturdy aluminum ladder for household and light commercial use. Safety tested and reliable.',
    category: 'tools',
    price: 8,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Rajajinagar, Bangalore',
    distance: 9.1,
    rating: 4.2,
    reviewCount: 7,
    owner: {
      name: 'Lakshmi Devi',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-20', '2024-03-21'],
    features: ['6 Feet Height', 'Aluminum', 'Lightweight', 'Safety Tested']
  },

  // Books & Education
  {
    id: '10',
    title: 'Engineering Textbook Collection',
    description: 'Complete set of computer science engineering books for semester 1-8. Well maintained condition.',
    category: 'books',
    price: 5,
    priceUnit: 'week',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'BTM Layout, Bangalore',
    distance: 3.9,
    rating: 4.6,
    reviewCount: 14,
    owner: {
      name: 'Arun Krishnan',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-15', '2024-03-22', '2024-03-29'],
    features: ['Complete Set', 'Good Condition', 'CS Engineering', 'All Semesters']
  },

  // Fitness & Sports
  {
    id: '11',
    title: 'Yoga Mat & Props Set',
    description: 'Premium yoga mat with blocks, straps, and bolster. Perfect for home practice and classes.',
    category: 'fitness',
    price: 8,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Malleswaram, Bangalore',
    distance: 4.7,
    rating: 4.8,
    reviewCount: 19,
    owner: {
      name: 'Kavya Nair',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['Premium Quality', 'Complete Set', 'Non-slip', 'Eco-friendly']
  },
  {
    id: '12',
    title: 'Badminton Racket Set',
    description: 'Professional badminton rackets with shuttlecocks and carrying case. Great for recreational play.',
    category: 'fitness',
    price: 10,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Yelahanka, Bangalore',
    distance: 11.3,
    rating: 4.4,
    reviewCount: 8,
    owner: {
      name: 'Deepak Rao',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-19', '2024-03-20', '2024-03-21'],
    features: ['Professional Grade', '2 Rackets', 'Shuttlecocks', 'Carrying Case']
  },

  // Office & Work
  {
    id: '13',
    title: 'Projector & Screen',
    description: 'HD projector with portable screen. Perfect for presentations, movie nights, and events.',
    category: 'office',
    price: 40,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'MG Road, Bangalore',
    distance: 2.1,
    rating: 4.7,
    reviewCount: 25,
    owner: {
      name: 'Ravi Shankar',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-22', '2024-03-23'],
    features: ['HD Quality', 'Portable Screen', 'Easy Setup', 'Remote Control']
  },

  // Musical Instruments
  {
    id: '14',
    title: 'Acoustic Guitar',
    description: 'Yamaha acoustic guitar in excellent condition. Perfect for beginners and experienced players.',
    category: 'music',
    price: 15,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Basavanagudi, Bangalore',
    distance: 6.8,
    rating: 4.9,
    reviewCount: 16,
    owner: {
      name: 'Sanjay Iyer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-17', '2024-03-18', '2024-03-19'],
    features: ['Yamaha Brand', 'Excellent Condition', 'Steel Strings', 'Case Included']
  },

  // Kitchen & Cooking
  {
    id: '15',
    title: 'Stand Mixer',
    description: 'KitchenAid stand mixer with multiple attachments. Perfect for baking and cooking enthusiasts.',
    category: 'kitchen',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Frazer Town, Bangalore',
    distance: 5.2,
    rating: 4.6,
    reviewCount: 11,
    owner: {
      name: 'Pooja Agarwal',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-20', '2024-03-21', '2024-03-22'],
    features: ['KitchenAid', 'Multiple Attachments', 'Professional Grade', 'Easy to Use']
  },

  // Additional Electronics
  {
    id: '16',
    title: 'Bluetooth Speaker System',
    description: 'High-quality Bluetooth speakers with deep bass. Perfect for parties and outdoor events.',
    category: 'electronics',
    price: 20,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Cunningham Road, Bangalore',
    distance: 3.4,
    rating: 4.5,
    reviewCount: 22,
    owner: {
      name: 'Amit Verma',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-15', '2024-03-16', '2024-03-17'],
    features: ['Bluetooth 5.0', 'Deep Bass', 'Long Battery', 'Waterproof']
  },

  // More Home Items
  {
    id: '17',
    title: 'Air Conditioner (1.5 Ton)',
    description: 'Split AC unit perfect for temporary cooling needs. Energy efficient and quiet operation.',
    category: 'home',
    price: 50,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4857781/pexels-photo-4857781.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Hebbal, Bangalore',
    distance: 8.7,
    rating: 4.3,
    reviewCount: 13,
    owner: {
      name: 'Ramesh Babu',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-18', '2024-03-19', '2024-03-20'],
    features: ['1.5 Ton Capacity', 'Energy Efficient', 'Remote Control', 'Installation Help']
  },

  // More Camping Items
  {
    id: '18',
    title: 'Portable Camping Stove',
    description: 'Compact gas stove perfect for outdoor cooking. Includes gas canister and cookware.',
    category: 'camping',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Sarjapur Road, Bangalore',
    distance: 14.2,
    rating: 4.4,
    reviewCount: 9,
    owner: {
      name: 'Neha Kapoor',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-21', '2024-03-22', '2024-03-23'],
    features: ['Portable', 'Gas Included', 'Cookware Set', 'Easy to Use']
  },

  // More Vehicles
  {
    id: '19',
    title: 'Electric Scooter',
    description: 'Eco-friendly electric scooter with 50km range. Perfect for city commuting and short trips.',
    category: 'vehicles',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1416169/pexels-photo-1416169.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1416169/pexels-photo-1416169.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Banaswadi, Bangalore',
    distance: 7.5,
    rating: 4.6,
    reviewCount: 17,
    owner: {
      name: 'Kiran Kumar',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-16', '2024-03-17'],
    features: ['50km Range', 'Eco-friendly', 'Fast Charging', 'Helmet Included']
  },

  // More Tools
  {
    id: '20',
    title: 'Lawn Mower',
    description: 'Electric lawn mower for garden maintenance. Easy to use and environmentally friendly.',
    category: 'tools',
    price: 18,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'JP Nagar, Bangalore',
    distance: 6.3,
    rating: 4.2,
    reviewCount: 6,
    owner: {
      name: 'Sunita Rao',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-19', '2024-03-20'],
    features: ['Electric', 'Easy to Use', 'Adjustable Height', 'Grass Collector']
  },

  // More Books
  {
    id: '21',
    title: 'Medical Study Books',
    description: 'Complete MBBS textbook collection for all years. Well-maintained and updated editions.',
    category: 'books',
    price: 8,
    priceUnit: 'week',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Richmond Town, Bangalore',
    distance: 4.1,
    rating: 4.8,
    reviewCount: 20,
    owner: {
      name: 'Dr. Pradeep Kumar',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-15', '2024-03-22', '2024-03-29'],
    features: ['MBBS Complete Set', 'Updated Editions', 'Excellent Condition', 'All Years']
  },

  // More Fitness
  {
    id: '22',
    title: 'Treadmill',
    description: 'Professional treadmill with multiple speed settings and incline. Perfect for home workouts.',
    category: 'fitness',
    price: 35,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Vijayanagar, Bangalore',
    distance: 8.9,
    rating: 4.5,
    reviewCount: 12,
    owner: {
      name: 'Fitness Hub',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-18', '2024-03-19', '2024-03-20'],
    features: ['Multiple Speeds', 'Incline Settings', 'Heart Rate Monitor', 'Foldable']
  },

  // More Office
  {
    id: '23',
    title: 'Office Chair (Ergonomic)',
    description: 'Comfortable ergonomic office chair with lumbar support. Perfect for work from home setup.',
    category: 'office',
    price: 15,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Shivajinagar, Bangalore',
    distance: 3.7,
    rating: 4.4,
    reviewCount: 18,
    owner: {
      name: 'Office Solutions',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-21', '2024-03-22', '2024-03-23'],
    features: ['Ergonomic Design', 'Lumbar Support', 'Adjustable Height', 'Comfortable']
  },

  // More Music
  {
    id: '24',
    title: 'Keyboard Piano',
    description: '61-key digital piano with weighted keys and multiple sounds. Great for learning and practice.',
    category: 'music',
    price: 30,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Kammanahalli, Bangalore',
    distance: 9.4,
    rating: 4.7,
    reviewCount: 14,
    owner: {
      name: 'Music Academy',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-17', '2024-03-18'],
    features: ['61 Keys', 'Weighted Keys', 'Multiple Sounds', 'Stand Included']
  },

  // More Kitchen
  {
    id: '25',
    title: 'Food Processor',
    description: 'Multi-function food processor with various attachments. Perfect for meal prep and cooking.',
    category: 'kitchen',
    price: 20,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'RT Nagar, Bangalore',
    distance: 7.2,
    rating: 4.3,
    reviewCount: 10,
    owner: {
      name: 'Kitchen Rentals',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-19', '2024-03-20', '2024-03-21'],
    features: ['Multi-function', 'Various Attachments', 'Easy to Clean', 'Powerful Motor']
  },

  // Cleaning Equipment
  {
    id: '26',
    title: 'Pressure Washer',
    description: 'High-pressure washer for cleaning cars, driveways, and outdoor surfaces. Electric powered.',
    category: 'cleaning',
    price: 22,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Yeshwanthpur, Bangalore',
    distance: 10.1,
    rating: 4.6,
    reviewCount: 15,
    owner: {
      name: 'Clean Pro Services',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['High Pressure', 'Electric Powered', 'Multiple Nozzles', 'Easy to Use']
  },

  // Photography
  {
    id: '27',
    title: 'Professional Lighting Kit',
    description: 'Complete studio lighting setup with softboxes and stands. Perfect for photography and videography.',
    category: 'photography',
    price: 45,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Commercial Street, Bangalore',
    distance: 2.8,
    rating: 4.8,
    reviewCount: 27,
    owner: {
      name: 'Photo Studio Pro',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-22', '2024-03-23'],
    features: ['Professional Grade', 'Softboxes', 'Adjustable Stands', 'Complete Kit']
  },

  // Party & Entertainment
  {
    id: '28',
    title: 'DJ Sound System',
    description: 'Professional DJ equipment with speakers, mixer, and microphones. Perfect for parties and events.',
    category: 'party',
    price: 80,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Brigade Road, Bangalore',
    distance: 1.9,
    rating: 4.9,
    reviewCount: 32,
    owner: {
      name: 'Event Sounds',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'November 2023'
    },
    availability: ['2024-03-15', '2024-03-16'],
    features: ['Professional DJ Setup', 'Powerful Speakers', 'Wireless Mics', 'Setup Included']
  },

  // Medical & Health
  {
    id: '29',
    title: 'Wheelchair',
    description: 'Comfortable manual wheelchair for temporary mobility needs. Well-maintained and sanitized.',
    category: 'medical',
    price: 10,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Malleshwaram, Bangalore',
    distance: 4.5,
    rating: 4.7,
    reviewCount: 21,
    owner: {
      name: 'Medical Aids',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-18', '2024-03-19', '2024-03-20'],
    features: ['Manual', 'Comfortable', 'Sanitized', 'Good Condition']
  },

  // Art & Craft
  {
    id: '30',
    title: 'Art Easel Set',
    description: 'Professional art easel with canvas boards and basic painting supplies. Perfect for artists.',
    category: 'art',
    price: 18,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Seshadripuram, Bangalore',
    distance: 5.3,
    rating: 4.4,
    reviewCount: 8,
    owner: {
      name: 'Art Supplies Co',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['Professional Easel', 'Canvas Boards', 'Basic Supplies', 'Adjustable Height']
  },

  // Educational
  {
    id: '31',
    title: 'Microscope',
    description: 'Digital microscope with camera for educational and research purposes. High magnification capability.',
    category: 'education',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Sadashivanagar, Bangalore',
    distance: 6.7,
    rating: 4.6,
    reviewCount: 12,
    owner: {
      name: 'Science Equipment',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-17', '2024-03-18', '2024-03-19'],
    features: ['Digital', 'High Magnification', 'Camera Included', 'Educational Use']
  },

  // Security & Safety
  {
    id: '32',
    title: 'CCTV Camera System',
    description: '4-camera security system with DVR and monitor. Perfect for temporary security needs.',
    category: 'security',
    price: 40,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Domlur, Bangalore',
    distance: 4.8,
    rating: 4.5,
    reviewCount: 16,
    owner: {
      name: 'Security Solutions',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-20', '2024-03-21'],
    features: ['4 Cameras', 'DVR Included', 'Monitor', 'Easy Setup']
  },

  // Automotive
  {
    id: '33',
    title: 'Car Jack & Tools',
    description: 'Complete car maintenance toolkit with hydraulic jack and essential tools for repairs.',
    category: 'automotive',
    price: 15,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Peenya, Bangalore',
    distance: 11.5,
    rating: 4.3,
    reviewCount: 9,
    owner: {
      name: 'Auto Tools',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-22', '2024-03-23'],
    features: ['Hydraulic Jack', 'Complete Toolkit', 'Professional Grade', 'Portable Case']
  },

  // Seasonal & Holiday
  {
    id: '34',
    title: 'Christmas Decorations',
    description: 'Complete Christmas decoration set with lights, tree, ornaments, and festive accessories.',
    category: 'seasonal',
    price: 35,
    priceUnit: 'week',
    images: [
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'UB City, Bangalore',
    distance: 1.2,
    rating: 4.8,
    reviewCount: 24,
    owner: {
      name: 'Festival Decor',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-12-15', '2024-12-22'],
    features: ['Complete Set', 'LED Lights', 'Artificial Tree', 'Ornaments Included']
  },

  // Pet Care
  {
    id: '35',
    title: 'Dog Grooming Kit',
    description: 'Professional dog grooming equipment with clippers, brushes, and bathing accessories.',
    category: 'pets',
    price: 20,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Kalyan Nagar, Bangalore',
    distance: 9.8,
    rating: 4.4,
    reviewCount: 11,
    owner: {
      name: 'Pet Care Pro',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['Professional Clippers', 'Brushes Set', 'Bathing Kit', 'Complete Grooming']
  },

  // Additional High-Demand Items
  {
    id: '36',
    title: 'Wedding Photography Equipment',
    description: 'Complete wedding photography setup with multiple cameras, lenses, and lighting equipment.',
    category: 'photography',
    price: 120,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Palace Road, Bangalore',
    distance: 3.1,
    rating: 4.9,
    reviewCount: 45,
    owner: {
      name: 'Wedding Photographers',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'October 2023'
    },
    availability: ['2024-03-23', '2024-03-24'],
    features: ['Multiple Cameras', 'Professional Lenses', 'Lighting Setup', 'Wedding Specialist']
  },

  {
    id: '37',
    title: 'Industrial Sewing Machine',
    description: 'Heavy-duty industrial sewing machine for tailoring and garment production. High-speed operation.',
    category: 'tools',
    price: 40,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Chickpet, Bangalore',
    distance: 4.9,
    rating: 4.6,
    reviewCount: 13,
    owner: {
      name: 'Textile Equipment',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-19', '2024-03-20', '2024-03-21'],
    features: ['Industrial Grade', 'High Speed', 'Heavy Duty', 'Professional Use']
  },

  {
    id: '38',
    title: 'Karaoke Machine',
    description: 'Professional karaoke system with wireless microphones and song database. Perfect for parties.',
    category: 'party',
    price: 30,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Koramangala, Bangalore',
    distance: 2.7,
    rating: 4.7,
    reviewCount: 19,
    owner: {
      name: 'Party Rentals',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-15', '2024-03-16', '2024-03-17'],
    features: ['Wireless Mics', 'Song Database', 'Easy Setup', 'Party Perfect']
  },

  {
    id: '39',
    title: 'Hospital Bed',
    description: 'Adjustable hospital bed with side rails and mattress. Perfect for home care and recovery.',
    category: 'medical',
    price: 35,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Jayanagar, Bangalore',
    distance: 5.4,
    rating: 4.8,
    reviewCount: 22,
    owner: {
      name: 'Medical Equipment',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-18', '2024-03-19'],
    features: ['Adjustable', 'Side Rails', 'Mattress Included', 'Home Care']
  },

  {
    id: '40',
    title: 'Pottery Wheel',
    description: 'Electric pottery wheel for ceramic arts and crafts. Includes basic clay and tools.',
    category: 'art',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Malleswaram, Bangalore',
    distance: 4.2,
    rating: 4.5,
    reviewCount: 7,
    owner: {
      name: 'Ceramic Arts',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-20', '2024-03-21', '2024-03-22'],
    features: ['Electric', 'Clay Included', 'Basic Tools', 'Beginner Friendly']
  },

  // More High-Demand Items
  {
    id: '41',
    title: 'Tablet Set for Education',
    description: 'Set of 10 educational tablets loaded with learning apps. Perfect for schools and training.',
    category: 'education',
    price: 50,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Whitefield, Bangalore',
    distance: 8.3,
    rating: 4.6,
    reviewCount: 18,
    owner: {
      name: 'EduTech Solutions',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-17', '2024-03-18', '2024-03-19'],
    features: ['10 Tablets', 'Educational Apps', 'Charging Station', 'School Ready']
  },

  {
    id: '42',
    title: 'Fire Safety Equipment',
    description: 'Complete fire safety kit with extinguishers, smoke detectors, and safety equipment.',
    category: 'security',
    price: 30,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Bommanahalli, Bangalore',
    distance: 7.6,
    rating: 4.7,
    reviewCount: 14,
    owner: {
      name: 'Safety First',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['Fire Extinguishers', 'Smoke Detectors', 'Safety Kit', 'Emergency Ready']
  },

  {
    id: '43',
    title: 'Bike Repair Stand',
    description: 'Professional bike repair stand with tools for bicycle maintenance and repairs.',
    category: 'automotive',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Indiranagar, Bangalore',
    distance: 3.5,
    rating: 4.4,
    reviewCount: 10,
    owner: {
      name: 'Bike Service Pro',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-23', '2024-03-24'],
    features: ['Professional Stand', 'Repair Tools', 'Adjustable Height', 'Bike Maintenance']
  },

  {
    id: '44',
    title: 'Diwali Decoration Package',
    description: 'Traditional Diwali decorations with diyas, rangoli materials, lights, and festive accessories.',
    category: 'seasonal',
    price: 28,
    priceUnit: 'week',
    images: [
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Basavanagudi, Bangalore',
    distance: 6.1,
    rating: 4.9,
    reviewCount: 31,
    owner: {
      name: 'Indian Festivals',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'October 2023'
    },
    availability: ['2024-10-20', '2024-10-27'],
    features: ['Traditional Diyas', 'Rangoli Materials', 'LED Lights', 'Complete Package']
  },

  {
    id: '45',
    title: 'Pet Travel Carrier',
    description: 'Large pet travel carrier suitable for dogs and cats. Airline approved and comfortable.',
    category: 'pets',
    price: 15,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'HSR Layout, Bangalore',
    distance: 4.6,
    rating: 4.3,
    reviewCount: 12,
    owner: {
      name: 'Pet Travel',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-16', '2024-03-17'],
    features: ['Large Size', 'Airline Approved', 'Comfortable', 'Secure Lock']
  },

  // Professional Equipment
  {
    id: '46',
    title: 'Professional Treadmill',
    description: 'Commercial-grade treadmill with advanced features, heart rate monitoring, and multiple programs.',
    category: 'fitness',
    price: 60,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Koramangala, Bangalore',
    distance: 2.3,
    rating: 4.8,
    reviewCount: 26,
    owner: {
      name: 'Fitness Pro Equipment',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-18', '2024-03-19', '2024-03-20'],
    features: ['Commercial Grade', 'Heart Rate Monitor', 'Multiple Programs', 'Professional Use']
  },

  {
    id: '47',
    title: 'Complete Weight Set (100kg)',
    description: 'Professional weight training set with barbells, dumbbells, and weight plates. Total 100kg.',
    category: 'fitness',
    price: 40,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Marathahalli, Bangalore',
    distance: 6.4,
    rating: 4.6,
    reviewCount: 17,
    owner: {
      name: 'Gym Equipment Rental',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['100kg Total', 'Barbells & Dumbbells', 'Weight Plates', 'Professional Grade']
  },

  {
    id: '48',
    title: 'Boxing Gloves & Heavy Bag',
    description: 'Professional boxing equipment with gloves, heavy bag, and training accessories.',
    category: 'fitness',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Rajajinagar, Bangalore',
    distance: 9.2,
    rating: 4.5,
    reviewCount: 13,
    owner: {
      name: 'Boxing Academy',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-17', '2024-03-18'],
    features: ['Professional Gloves', 'Heavy Bag', 'Training Accessories', 'Complete Set']
  },

  {
    id: '49',
    title: 'Laser Printer (Color)',
    description: 'High-speed color laser printer for office and business use. Network enabled with duplex printing.',
    category: 'office',
    price: 20,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Electronic City, Bangalore',
    distance: 12.8,
    rating: 4.4,
    reviewCount: 15,
    owner: {
      name: 'Office Tech Solutions',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-19', '2024-03-20', '2024-03-21'],
    features: ['Color Laser', 'High Speed', 'Network Enabled', 'Duplex Printing']
  },

  {
    id: '50',
    title: 'Interactive Whiteboard',
    description: 'Smart interactive whiteboard with projector for presentations and educational use.',
    category: 'office',
    price: 80,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Whitefield, Bangalore',
    distance: 8.1,
    rating: 4.7,
    reviewCount: 21,
    owner: {
      name: 'Smart Classroom',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-22', '2024-03-23'],
    features: ['Interactive Touch', 'Projector Included', 'Smart Features', 'Educational Use']
  },

  {
    id: '51',
    title: 'Conference Room Setup',
    description: 'Complete conference room equipment with table, chairs, projector, and audio system.',
    category: 'office',
    price: 120,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'UB City, Bangalore',
    distance: 1.5,
    rating: 4.9,
    reviewCount: 34,
    owner: {
      name: 'Corporate Events',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'November 2023'
    },
    availability: ['2024-03-15', '2024-03-16'],
    features: ['Complete Setup', 'Table & Chairs', 'Projector & Audio', 'Professional Grade']
  },

  {
    id: '52',
    title: 'Standing Desk Converter',
    description: 'Adjustable standing desk converter for ergonomic work setup. Easy height adjustment.',
    category: 'office',
    price: 25,
    priceUnit: 'week',
    images: [
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Koramangala, Bangalore',
    distance: 2.9,
    rating: 4.5,
    reviewCount: 16,
    owner: {
      name: 'Ergonomic Solutions',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-18', '2024-03-25'],
    features: ['Adjustable Height', 'Ergonomic Design', 'Easy Setup', 'Health Benefits']
  },

  {
    id: '53',
    title: 'Acoustic Guitar (Yamaha)',
    description: 'Premium Yamaha acoustic guitar with case and accessories. Perfect for performances and practice.',
    category: 'music',
    price: 20,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Jayanagar, Bangalore',
    distance: 5.8,
    rating: 4.8,
    reviewCount: 23,
    owner: {
      name: 'Music Store Pro',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-17', '2024-03-18', '2024-03-19'],
    features: ['Yamaha Brand', 'Premium Quality', 'Case Included', 'Performance Ready']
  },

  {
    id: '54',
    title: 'Digital Piano (88 Keys)',
    description: 'Full-size digital piano with weighted keys and multiple instrument sounds. Stand included.',
    category: 'music',
    price: 40,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Malleswaram, Bangalore',
    distance: 4.7,
    rating: 4.7,
    reviewCount: 19,
    owner: {
      name: 'Piano Academy',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-20', '2024-03-21'],
    features: ['88 Weighted Keys', 'Multiple Sounds', 'Stand Included', 'Professional Grade']
  },

  {
    id: '55',
    title: 'Drum Kit (5-Piece)',
    description: 'Complete 5-piece drum kit with cymbals and hardware. Perfect for practice and performances.',
    category: 'music',
    price: 50,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Indiranagar, Bangalore',
    distance: 3.4,
    rating: 4.6,
    reviewCount: 14,
    owner: {
      name: 'Drum School',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-22', '2024-03-23'],
    features: ['5-Piece Kit', 'Cymbals Included', 'Complete Hardware', 'Performance Ready']
  },

  {
    id: '56',
    title: 'Commercial Blender',
    description: 'High-power commercial blender for smoothies, juices, and food preparation. Professional grade.',
    category: 'kitchen',
    price: 18,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'BTM Layout, Bangalore',
    distance: 4.1,
    rating: 4.5,
    reviewCount: 11,
    owner: {
      name: 'Kitchen Pro',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['Commercial Grade', 'High Power', 'Multiple Settings', 'Professional Use']
  },

  {
    id: '57',
    title: 'Food Processor (Large)',
    description: 'Large capacity food processor with multiple blades and attachments for all cooking needs.',
    category: 'kitchen',
    price: 15,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Hebbal, Bangalore',
    distance: 8.5,
    rating: 4.4,
    reviewCount: 9,
    owner: {
      name: 'Cooking Equipment',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-19', '2024-03-20'],
    features: ['Large Capacity', 'Multiple Blades', 'Various Attachments', 'Easy to Clean']
  },

  {
    id: '58',
    title: 'Professional Juicer',
    description: 'Cold-press juicer for healthy juice extraction. Preserves nutrients and enzymes.',
    category: 'kitchen',
    price: 22,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Koramangala, Bangalore',
    distance: 2.6,
    rating: 4.6,
    reviewCount: 16,
    owner: {
      name: 'Health Kitchen',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['Cold Press', 'Nutrient Preservation', 'Easy Cleaning', 'Professional Grade']
  },

  {
    id: '59',
    title: 'Carpet Cleaner (Steam)',
    description: 'Professional steam carpet cleaner for deep cleaning carpets and upholstery.',
    category: 'cleaning',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Banashankari, Bangalore',
    distance: 7.9,
    rating: 4.7,
    reviewCount: 18,
    owner: {
      name: 'Deep Clean Services',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-17', '2024-03-18'],
    features: ['Steam Cleaning', 'Deep Clean', 'Upholstery Safe', 'Professional Results']
  },

  {
    id: '60',
    title: 'Window Cleaning Kit',
    description: 'Professional window cleaning equipment with squeegees, brushes, and cleaning solutions.',
    category: 'cleaning',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Rajajinagar, Bangalore',
    distance: 9.3,
    rating: 4.3,
    reviewCount: 8,
    owner: {
      name: 'Window Pro',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-19', '2024-03-20', '2024-03-21'],
    features: ['Professional Kit', 'Squeegees & Brushes', 'Cleaning Solutions', 'Streak-Free Results']
  },

  {
    id: '61',
    title: 'Professional Camera Tripod',
    description: 'Heavy-duty camera tripod with fluid head for smooth video recording and stable photography.',
    category: 'photography',
    price: 15,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'MG Road, Bangalore',
    distance: 2.2,
    rating: 4.5,
    reviewCount: 12,
    owner: {
      name: 'Photo Gear',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['Heavy Duty', 'Fluid Head', 'Stable Support', 'Professional Grade']
  },

  {
    id: '62',
    title: 'Studio Flash Lights (Set of 3)',
    description: 'Professional studio flash lighting kit with stands, softboxes, and wireless triggers.',
    category: 'photography',
    price: 50,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Whitefield, Bangalore',
    distance: 8.4,
    rating: 4.8,
    reviewCount: 22,
    owner: {
      name: 'Studio Lighting Pro',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-19', '2024-03-20'],
    features: ['3 Flash Units', 'Softboxes', 'Wireless Triggers', 'Professional Studio']
  },

  {
    id: '63',
    title: 'Chocolate Fountain (3-Tier)',
    description: 'Large 3-tier chocolate fountain perfect for parties, weddings, and special events.',
    category: 'party',
    price: 40,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Jayanagar, Bangalore',
    distance: 5.6,
    rating: 4.7,
    reviewCount: 25,
    owner: {
      name: 'Sweet Events',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['3-Tier Design', 'Large Capacity', 'Easy Setup', 'Party Perfect']
  },

  {
    id: '64',
    title: 'Popcorn Machine (Commercial)',
    description: 'Commercial-grade popcorn machine for events, parties, and entertainment venues.',
    category: 'party',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Electronic City, Bangalore',
    distance: 12.7,
    rating: 4.4,
    reviewCount: 14,
    owner: {
      name: 'Snack Machines',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-17', '2024-03-18', '2024-03-19'],
    features: ['Commercial Grade', 'High Output', 'Easy Operation', 'Event Ready']
  },

  {
    id: '65',
    title: 'Manual Wheelchair',
    description: 'Lightweight manual wheelchair with comfortable seating and easy maneuverability.',
    category: 'medical',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Basavanagudi, Bangalore',
    distance: 6.2,
    rating: 4.6,
    reviewCount: 19,
    owner: {
      name: 'Mobility Aids',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['Lightweight', 'Comfortable', 'Easy Maneuver', 'Well Maintained']
  },

  {
    id: '66',
    title: 'Blood Pressure Monitor',
    description: 'Digital blood pressure monitor with large display and memory function for health monitoring.',
    category: 'medical',
    price: 8,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Malleshwaram, Bangalore',
    distance: 4.3,
    rating: 4.5,
    reviewCount: 13,
    owner: {
      name: 'Health Monitor',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-19', '2024-03-20', '2024-03-21'],
    features: ['Digital Display', 'Memory Function', 'Accurate Readings', 'Easy to Use']
  },

  {
    id: '67',
    title: 'Adjustable Hospital Bed',
    description: 'Electric adjustable hospital bed with side rails and remote control for patient care.',
    category: 'medical',
    price: 50,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Hebbal, Bangalore',
    distance: 8.8,
    rating: 4.8,
    reviewCount: 27,
    owner: {
      name: 'Medical Care Equipment',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-22', '2024-03-23'],
    features: ['Electric Adjustment', 'Side Rails', 'Remote Control', 'Patient Care']
  },

  {
    id: '68',
    title: 'Professional Art Easel Set',
    description: 'Complete art easel set with canvas, paints, brushes, and palette for artistic projects.',
    category: 'art',
    price: 25,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Indiranagar, Bangalore',
    distance: 3.6,
    rating: 4.4,
    reviewCount: 10,
    owner: {
      name: 'Art Studio',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-17', '2024-03-18'],
    features: ['Complete Set', 'Canvas & Paints', 'Brushes Included', 'Professional Grade']
  },

  {
    id: '69',
    title: 'Electric Pottery Wheel',
    description: 'Professional electric pottery wheel with foot pedal control for ceramic art and pottery making.',
    category: 'art',
    price: 35,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Koramangala, Bangalore',
    distance: 2.8,
    rating: 4.6,
    reviewCount: 15,
    owner: {
      name: 'Pottery Workshop',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-19', '2024-03-20'],
    features: ['Electric Motor', 'Foot Pedal', 'Variable Speed', 'Professional Use']
  },

  {
    id: '70',
    title: 'Digital Microscope',
    description: 'High-resolution digital microscope with camera and computer connectivity for research and education.',
    category: 'education',
    price: 30,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Whitefield, Bangalore',
    distance: 8.2,
    rating: 4.7,
    reviewCount: 17,
    owner: {
      name: 'Science Lab Equipment',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['High Resolution', 'Digital Camera', 'Computer Connect', 'Research Grade']
  },

  {
    id: '71',
    title: 'Language Learning Tablets (Set of 10)',
    description: 'Educational tablets pre-loaded with language learning apps and content for classroom use.',
    category: 'education',
    price: 60,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Electronic City, Bangalore',
    distance: 12.9,
    rating: 4.5,
    reviewCount: 20,
    owner: {
      name: 'Educational Technology',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['10 Tablets', 'Language Apps', 'Educational Content', 'Classroom Ready']
  },

  {
    id: '72',
    title: 'CCTV Camera System (4 Cameras)',
    description: 'Complete 4-camera CCTV security system with DVR, monitor, and night vision capability.',
    category: 'security',
    price: 45,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Banashankari, Bangalore',
    distance: 7.4,
    rating: 4.6,
    reviewCount: 18,
    owner: {
      name: 'Security Systems Pro',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-19', '2024-03-20'],
    features: ['4 Cameras', 'DVR & Monitor', 'Night Vision', 'Complete System']
  },

  {
    id: '73',
    title: 'Fire Extinguisher Set (5 Units)',
    description: 'Set of 5 fire extinguishers of different types for comprehensive fire safety coverage.',
    category: 'security',
    price: 20,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Rajajinagar, Bangalore',
    distance: 9.1,
    rating: 4.4,
    reviewCount: 11,
    owner: {
      name: 'Fire Safety Solutions',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['5 Extinguishers', 'Different Types', 'Safety Certified', 'Emergency Ready']
  },

  {
    id: '74',
    title: 'Car Jack & Tool Set',
    description: 'Professional automotive jack with complete tool set for car maintenance and emergency repairs.',
    category: 'automotive',
    price: 18,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Peenya, Bangalore',
    distance: 11.2,
    rating: 4.3,
    reviewCount: 14,
    owner: {
      name: 'Auto Service Tools',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-17', '2024-03-18'],
    features: ['Professional Jack', 'Complete Tool Set', 'Emergency Ready', 'Portable Case']
  },

  {
    id: '75',
    title: 'Bike Repair Stand',
    description: 'Adjustable bike repair stand with tool tray for bicycle maintenance and repairs.',
    category: 'automotive',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'HSR Layout, Bangalore',
    distance: 4.5,
    rating: 4.5,
    reviewCount: 9,
    owner: {
      name: 'Bike Repair Pro',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-19', '2024-03-20', '2024-03-21'],
    features: ['Adjustable Height', 'Tool Tray', 'Stable Support', 'Professional Use']
  },

  {
    id: '76',
    title: 'Christmas Decoration Set',
    description: 'Complete Christmas decoration package with tree, lights, ornaments, and festive accessories.',
    category: 'seasonal',
    price: 45,
    priceUnit: 'week',
    images: [
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'UB City, Bangalore',
    distance: 1.3,
    rating: 4.9,
    reviewCount: 35,
    owner: {
      name: 'Holiday Decorations',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'November 2023'
    },
    availability: ['2024-12-15', '2024-12-22'],
    features: ['Complete Package', 'Tree & Lights', 'Ornaments', 'Festive Accessories']
  },

  {
    id: '77',
    title: 'Diwali Decoration Package',
    description: 'Traditional Diwali decoration set with diyas, rangoli materials, lights, and festive items.',
    category: 'seasonal',
    price: 35,
    priceUnit: 'week',
    images: [
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Jayanagar, Bangalore',
    distance: 5.9,
    rating: 4.8,
    reviewCount: 28,
    owner: {
      name: 'Festival Celebrations',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'September 2023'
    },
    availability: ['2024-10-20', '2024-10-27'],
    features: ['Traditional Diyas', 'Rangoli Materials', 'Festival Lights', 'Complete Package']
  },

  {
    id: '78',
    title: 'Dog Grooming Kit',
    description: 'Professional dog grooming equipment with clippers, brushes, nail trimmers, and bathing supplies.',
    category: 'pets',
    price: 18,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Kalyan Nagar, Bangalore',
    distance: 9.7,
    rating: 4.4,
    reviewCount: 16,
    owner: {
      name: 'Pet Grooming Services',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-16', '2024-03-17'],
    features: ['Professional Clippers', 'Grooming Brushes', 'Nail Trimmers', 'Bathing Supplies']
  },

  {
    id: '79',
    title: 'Pet Travel Carrier (Large)',
    description: 'Large pet carrier suitable for dogs and cats, airline approved with comfortable interior.',
    category: 'pets',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Marathahalli, Bangalore',
    distance: 6.8,
    rating: 4.3,
    reviewCount: 12,
    owner: {
      name: 'Pet Transport',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-18', '2024-03-19', '2024-03-20'],
    features: ['Large Size', 'Airline Approved', 'Comfortable Interior', 'Secure Latches']
  },

  // Daily Use Items
  {
    id: '80',
    title: 'Iron & Ironing Board Set',
    description: 'Complete ironing setup with steam iron and adjustable ironing board for clothing care.',
    category: 'home',
    price: 8,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Koramangala, Bangalore',
    distance: 2.4,
    rating: 4.3,
    reviewCount: 15,
    owner: {
      name: 'Home Essentials',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['Steam Iron', 'Adjustable Board', 'Complete Set', 'Easy Setup']
  },

  {
    id: '81',
    title: 'Hair Dryer & Styling Kit',
    description: 'Professional hair dryer with styling attachments and brushes for complete hair care.',
    category: 'home',
    price: 10,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Indiranagar, Bangalore',
    distance: 3.7,
    rating: 4.5,
    reviewCount: 18,
    owner: {
      name: 'Beauty Equipment',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-19', '2024-03-20'],
    features: ['Professional Dryer', 'Styling Attachments', 'Multiple Settings', 'Complete Kit']
  },

  {
    id: '82',
    title: 'Sewing Machine (Electric)',
    description: 'Electric sewing machine with multiple stitches and automatic threading for alterations and crafts.',
    category: 'home',
    price: 15,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Malleswaram, Bangalore',
    distance: 4.8,
    rating: 4.4,
    reviewCount: 12,
    owner: {
      name: 'Craft Equipment',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-21', '2024-03-22'],
    features: ['Electric Operation', 'Multiple Stitches', 'Auto Threading', 'Easy to Use']
  },

  {
    id: '83',
    title: 'Water Purifier (RO+UV)',
    description: 'Advanced water purification system with RO and UV technology for clean drinking water.',
    category: 'home',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Whitefield, Bangalore',
    distance: 8.6,
    rating: 4.6,
    reviewCount: 22,
    owner: {
      name: 'Water Solutions',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-17', '2024-03-18', '2024-03-19'],
    features: ['RO + UV Technology', 'Clean Water', 'Easy Installation', 'Health Safe']
  },

  {
    id: '84',
    title: 'Pedestal Fan',
    description: 'High-speed pedestal fan with adjustable height and oscillation for effective cooling.',
    category: 'home',
    price: 6,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4857781/pexels-photo-4857781.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'BTM Layout, Bangalore',
    distance: 4.2,
    rating: 4.2,
    reviewCount: 14,
    owner: {
      name: 'Cooling Solutions',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-20', '2024-03-21'],
    features: ['High Speed', 'Adjustable Height', 'Oscillation', 'Energy Efficient']
  },

  {
    id: '85',
    title: 'Folding Table & Chairs Set',
    description: 'Portable folding table with 4 chairs, perfect for outdoor events and temporary seating.',
    category: 'home',
    price: 12,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Hebbal, Bangalore',
    distance: 8.9,
    rating: 4.3,
    reviewCount: 11,
    owner: {
      name: 'Event Furniture',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-16', '2024-03-17', '2024-03-18'],
    features: ['Folding Design', '4 Chairs Included', 'Portable', 'Event Ready']
  },

  {
    id: '86',
    title: 'Electric Kettle (2L)',
    description: 'Large capacity electric kettle with auto shut-off and temperature control for quick water boiling.',
    category: 'kitchen',
    price: 5,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Jayanagar, Bangalore',
    distance: 5.3,
    rating: 4.4,
    reviewCount: 19,
    owner: {
      name: 'Kitchen Appliances',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'February 2024'
    },
    availability: ['2024-03-19', '2024-03-20', '2024-03-21'],
    features: ['2L Capacity', 'Auto Shut-off', 'Temperature Control', 'Quick Boiling']
  },

  {
    id: '87',
    title: 'Portable Induction Cooktop',
    description: 'Single burner induction cooktop with digital controls for additional cooking space.',
    category: 'kitchen',
    price: 10,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Electronic City, Bangalore',
    distance: 12.4,
    rating: 4.5,
    reviewCount: 16,
    owner: {
      name: 'Portable Appliances',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'January 2024'
    },
    availability: ['2024-03-17', '2024-03-18'],
    features: ['Induction Technology', 'Digital Controls', 'Portable', 'Energy Efficient']
  },

  {
    id: '88',
    title: 'Vacuum Cleaner (Bagless)',
    description: 'Powerful bagless vacuum cleaner with HEPA filter for deep cleaning carpets and floors.',
    category: 'cleaning',
    price: 18,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Koramangala, Bangalore',
    distance: 2.7,
    rating: 4.6,
    reviewCount: 24,
    owner: {
      name: 'Cleaning Equipment Pro',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: true,
      joinedDate: 'December 2023'
    },
    availability: ['2024-03-22', '2024-03-23'],
    features: ['Bagless Design', 'HEPA Filter', 'Powerful Suction', 'Multi-surface']
  },

  {
    id: '89',
    title: 'Extension Cord Set (10m)',
    description: 'Heavy-duty extension cord set with multiple outlets for power distribution at events.',
    category: 'tools',
    price: 5,
    priceUnit: 'day',
    images: [
      'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    location: 'Banashankari, Bangalore',
    distance: 7.8,
    rating: 4.2,
    reviewCount: 13,
    owner: {
      name: 'Electrical Supplies',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
      verified: false,
      joinedDate: 'March 2024'
    },
    availability: ['2024-03-15', '2024-03-16', '2024-03-17'],
    features: ['10m Length', 'Multiple Outlets', 'Heavy Duty', 'Event Ready']
  }
];