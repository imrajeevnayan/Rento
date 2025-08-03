import React, { useState } from 'react';
import { GoogleAuthProvider } from './components/GoogleAuthProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SmartRecommendations } from './components/SmartRecommendations';
import { ItemGrid } from './components/ItemGrid';
import { ItemDetail } from './components/ItemDetail';
import { Profile } from './components/Profile';
import { Messages } from './components/Messages';
import { AuthModal } from './components/AuthModal';
import { NotificationSystem } from './components/NotificationSystem';
import { Item } from './types';
import { mockItems } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'item-detail' | 'profile' | 'messages'>('home');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userPreferences, setUserPreferences] = useState({
    categories: ['electronics', 'tools'],
    priceRange: [10, 50] as [number, number],
    location: 'San Francisco, CA'
  });

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setCurrentView('item-detail');
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentView('home');
    setUserPreferences({
      categories: [],
      priceRange: [0, 100],
      location: ''
    });
  };

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderContent = () => {
    switch (currentView) {
      case 'item-detail':
        return selectedItem ? (
          <ItemDetail 
            item={selectedItem} 
            onBack={() => setCurrentView('home')}
            isLoggedIn={isLoggedIn}
            onLoginRequired={() => setIsAuthModalOpen(true)}
          />
        ) : null;
      case 'profile':
        return <Profile user={user} onBack={() => setCurrentView('home')} />;
      case 'messages':
        return <Messages onBack={() => setCurrentView('home')} />;
      default:
        return (
          <>
            <Hero 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            {isLoggedIn && (
              <SmartRecommendations 
                items={mockItems}
                onItemClick={handleItemClick}
                userPreferences={userPreferences}
              />
            )}
            <ItemGrid items={filteredItems} onItemClick={handleItemClick} />
          </>
        );
    }
  };

  return (
    <GoogleAuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          isLoggedIn={isLoggedIn}
          user={user}
          onAuthClick={() => setIsAuthModalOpen(true)}
          onLogout={handleLogout}
          onNavigate={setCurrentView}
          currentView={currentView}
        />
        
        <NotificationSystem isLoggedIn={isLoggedIn} />
        
        {renderContent()}

        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onLogin={handleLogin}
        />
      </div>
    </GoogleAuthProvider>
  );
}

export default App;