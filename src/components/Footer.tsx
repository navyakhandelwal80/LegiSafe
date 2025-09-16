/*import React from 'react';
import type { PageType } from '../App';
// components/Footer.tsx
interface FooterProps {
  onShowPage: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onShowPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4 flex items-center">
              <i className="fas fa-scale-balanced mr-2"></i>
              <span>LegiSafe</span>
            </div>
            <p className="text-gray-400 mb-4">AI-powered legal document verification and analysis platform.</p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin"></i>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook"></i>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onShowPage('features')} className="text-gray-400 hover:text-white transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => onShowPage('pricing')} className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Use Cases</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Demo</button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onShowPage('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onShowPage('blog')} className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Careers</button>
              </li>
              <li>
                <button onClick={() => onShowPage('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Security</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Compliance</button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2023 LegiSafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;*/

// components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4 flex items-center">
              <i className="fas fa-scale-balanced mr-2"></i>
              <span>LegiSafe</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered legal document verification and analysis platform.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-400 hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2023 LegiSafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
