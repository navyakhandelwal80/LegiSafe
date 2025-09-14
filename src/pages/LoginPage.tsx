// pages/LoginPage.tsx
import React, { useState } from 'react';
import type { PageType } from '../App';

interface LoginPageProps {
  onShowPage: (page: PageType) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onShowPage }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Firebase Auth
    console.log('Login attempt:', formData);
    // For demo, redirect to dashboard
    onShowPage('dashboard');
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-blue-600 flex items-center justify-center">
              <i className="fas fa-scale-balanced mr-2"></i>
              <span>LegiSafe</span>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-800">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <button
                onClick={() => onShowPage('signup')}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                start your 14-day free trial
              </button>
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Sign in
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => onShowPage('signup')}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;