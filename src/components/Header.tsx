// components/Header.tsx
import React from 'react';
import type { PageType } from '../App';

interface HeaderProps {
  onShowPage: (page: PageType) => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowPage, isMobileMenuOpen, onToggleMobileMenu }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600 flex items-center">
            <i className="fas fa-scale-balanced mr-2"></i>
            <span>LegiSafe</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => onShowPage('home')} 
            className="nav-link text-gray-600 hover:text-blue-600"
          >
            Home
          </button>
          <button 
            onClick={() => onShowPage('features')} 
            className="nav-link text-gray-600 hover:text-blue-600"
          >
            Features
          </button>
          <button 
            onClick={() => onShowPage('how-it-works')} 
            className="nav-link text-gray-600 hover:text-blue-600"
          >
            How It Works
          </button>
          <button 
            onClick={() => onShowPage('pricing')} 
            className="nav-link text-gray-600 hover:text-blue-600"
          >
            Pricing
          </button>
          <button 
            onClick={() => onShowPage('about')} 
            className="nav-link text-gray-600 hover:text-blue-600"
          >
            About
          </button>
          <button 
            onClick={() => onShowPage('blog')} 
            className="nav-link text-gray-600 hover:text-blue-600"
          >
            Blog
          </button>
          <button 
            onClick={() => onShowPage('contact')} 
            className="nav-link text-gray-600 hover:text-blue-600"
          >
            Contact
          </button>
        </nav>
        
        <div className="hidden md:flex space-x-4">
          <button 
            className="px-4 py-2 text-blue-600 font-medium rounded-lg hover:bg-blue-50" 
            onClick={() => onShowPage('login')}
          >
            Log in
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" 
            onClick={() => onShowPage('dashboard')}
          >
            Dashboard
          </button>
        </div>
        
        <button className="md:hidden text-gray-600" onClick={onToggleMobileMenu}>
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-4 bg-white shadow-lg rounded-lg mt-2">
          <div className="flex flex-col space-y-4">
            <button onClick={() => onShowPage('home')} className="text-gray-600 hover:text-blue-600 text-left">
              Home
            </button>
            <button onClick={() => onShowPage('features')} className="text-gray-600 hover:text-blue-600 text-left">
              Features
            </button>
            <button onClick={() => onShowPage('how-it-works')} className="text-gray-600 hover:text-blue-600 text-left">
              How It Works
            </button>
            <button onClick={() => onShowPage('pricing')} className="text-gray-600 hover:text-blue-600 text-left">
              Pricing
            </button>
            <button onClick={() => onShowPage('about')} className="text-gray-600 hover:text-blue-600 text-left">
              About
            </button>
            <button onClick={() => onShowPage('blog')} className="text-gray-600 hover:text-blue-600 text-left">
              Blog
            </button>
            <button onClick={() => onShowPage('contact')} className="text-gray-600 hover:text-blue-600 text-left">
              Contact
            </button>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <button 
                className="w-full py-2 text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50" 
                onClick={() => onShowPage('login')}
              >
                Log in
              </button>
              <button 
                className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" 
                onClick={() => onShowPage('dashboard')}
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;