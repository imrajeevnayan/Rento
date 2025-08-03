<h1 align="center">🏡 Rento</h1>
<p align="center"> <b>Rent Anything, Anywhere</b><br>A modern peer-to-peer rental marketplace built with React, TypeScript, and Tailwind CSS.</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38b2ac?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Google%20OAuth-enabled-brightgreen" alt="OAuth" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License: MIT" />
</p>

---

## 🚀 Features

- 🔍 **Smart Search & Filtering** – Find items by category, location, and price  
- 🤖 **AI-Powered Recommendations** – Personalized suggestions for each user  
- 💬 **Real-Time Messaging** – Chat with item owners instantly  
- 🔔 **Smart Notifications** – Stay updated on bookings and conversations  
- 💳 **Secure Payments** – Integrated payment gateways  
- 🔐 **Google OAuth** – Secure login with Google  
- 📱 **Fully Responsive** – Works great on all devices  
- ⚡ **Booking Conflict Prevention** – Avoids double bookings

---

## 🔐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create or select a project  
3. Enable **OAuth 2.0** credentials  
4. Add authorized domains:
   - Development: `http://localhost:5173`
   - Production: `https://imrajeevnayan.github.io`
5. Copy your Client ID  
6. Create a `.env` file:
   ```bash
   cp .env.example .env

7. Add your Google Client ID:
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

### 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more details.

---

### 🙌 Made with ❤️ by [@imrajeevnayan](https://github.com/imrajeevnayan)

If you like this project, consider giving it a ⭐  
Feel free to open issues, contribute, or just say hi!

