# Rento - Rent Anything, Anywhere

A modern peer-to-peer rental marketplace built with React, TypeScript, and Tailwind CSS.

## Features

- 🔍 **Smart Search & Filtering** - Find items by category, location, and price
- 🤖 **AI-Powered Recommendations** - Personalized suggestions based on user preferences
- 💬 **Real-time Messaging** - Chat with item owners
- 🔔 **Smart Notifications** - Stay updated on bookings and messages
- 💳 **Secure Payments** - Integrated payment gateway with multiple options
- 🔒 **Google OAuth** - Secure authentication with Google Sign-In
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Conflict Prevention** - Smart booking system prevents double bookings

## Authentication

The app supports multiple authentication methods:

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create OAuth 2.0 credentials
5. Add your domain to authorized origins:
   - For development: `http://localhost:5173`
   - For production: your domain
6. Copy the Client ID
7. Create a `.env` file from `.env.example`
8. Add your Google Client ID:
   ```
   VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id-here
   ```

### Traditional Email/Password

Users can also sign up and log in using email and password with form validation.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rento
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your Google OAuth credentials
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: Google OAuth, Custom Auth
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom components

## Project Structure

```
src/
├── components/          # React components
│   ├── AuthModal.tsx   # Authentication modal with Google OAuth
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing page hero section
│   ├── ItemGrid.tsx    # Item listing grid
│   ├── ItemDetail.tsx  # Individual item details
│   ├── Profile.tsx     # User profile page
│   ├── Messages.tsx    # Messaging system
│   └── ...
├── data/               # Mock data and types
├── types/              # TypeScript type definitions
└── App.tsx            # Main application component
```

## Features in Detail

### Smart Recommendations
- AI-powered suggestions based on user preferences
- Category matching and location-based filtering
- Rating and popularity scoring

### Payment Integration
- Multiple payment methods (Card, PayPal, Apple Pay)
- Secure payment processing simulation
- Real-time payment status updates

### Conflict Prevention
- Smart booking system prevents overlapping rentals
- Alternative date suggestions
- Real-time availability checking

### Notification System
- Real-time notifications for bookings, messages, payments
- Toast notifications for immediate feedback
- Notification history and management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.