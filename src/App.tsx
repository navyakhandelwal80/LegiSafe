// App.tsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage'; // remove .tsx
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import Footer from './components/Footer';
import './App.css';

export type PageType =
  | 'home'
  | 'features'
  | 'how-it-works'
  | 'pricing'
  | 'about'
  | 'blog'
  | 'contact'
  | 'login'
  | 'signup'
  | 'dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showPage = (pageId: PageType) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onShowPage={showPage} />;
      case 'features':
        return <FeaturesPage onShowPage={showPage} />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'pricing':
        return <PricingPage onShowPage={showPage} />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage onShowPage={showPage} />;
      case 'signup':
        return <SignupPage onShowPage={showPage} />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <HomePage onShowPage={showPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'dashboard' && (
        <Header
          onShowPage={showPage}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
        />
      )}
      <main>{renderCurrentPage()}</main>
      {currentPage !== 'dashboard' &&
        currentPage !== 'login' &&
        currentPage !== 'signup' && <Footer onShowPage={showPage} />}
    </div>
  );
};

export default App; 
