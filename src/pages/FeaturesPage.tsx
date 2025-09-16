// pages/FeaturesPage.tsx
/*import React from 'react';
import type { PageType } from '../App';

interface FeaturesPageProps {
  onShowPage: (page: PageType) => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onShowPage }) => {
  const features = [
    {
      icon: 'fas fa-robot',
      title: 'AI-Powered Document Analysis',
      description: 'Upload legal documents and receive instant AI-powered analysis with risk assessment and recommendations.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      details: [
        'Identify problematic clauses',
        'Highlight potential risks',
        'Provide alternative language suggestions'
      ]
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Interactive Legal Tutoring',
      description: 'Learn legal concepts through interactive Socratic questioning with our AI tutor.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      details: [
        'Step-by-step guidance through complex concepts',
        'Personalized learning paths',
        'Real-world examples and scenarios'
      ]
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Visual Legal Mapping',
      description: 'Convert complex legal clauses into easy-to-understand flowcharts and decision trees.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      details: [
        'Visual representation of legal relationships',
        'Interactive decision trees',
        'Conditional pathway analysis'
      ]
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Predictive Risk Analysis',
      description: 'Identify potential complications and risks in your contracts before signing.',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      details: [
        'Risk scoring for each clause',
        'Historical success/failure rates',
        'Industry-specific risk profiles'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Features</h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore all the powerful features LegiSafe offers for legal document analysis and verification.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className={`w-14 h-14 rounded-lg ${feature.bgColor} ${feature.iconColor} flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="text-gray-600 list-disc pl-5">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="mb-2">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" 
            onClick={() => onShowPage('signup')}
          >
            Get Started with LegiSafe
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturesPage;*/
// pages/FeaturesPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturesPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'fas fa-robot',
      title: 'AI-Powered Document Analysis',
      description: 'Upload legal documents and receive instant AI-powered analysis with risk assessment and recommendations.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      details: [
        'Identify problematic clauses',
        'Highlight potential risks',
        'Provide alternative language suggestions'
      ]
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Interactive Legal Tutoring',
      description: 'Learn legal concepts through interactive Socratic questioning with our AI tutor.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      details: [
        'Step-by-step guidance through complex concepts',
        'Personalized learning paths',
        'Real-world examples and scenarios'
      ]
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Visual Legal Mapping',
      description: 'Convert complex legal clauses into easy-to-understand flowcharts and decision trees.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      details: [
        'Visual representation of legal relationships',
        'Interactive decision trees',
        'Conditional pathway analysis'
      ]
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Predictive Risk Analysis',
      description: 'Identify potential complications and risks in your contracts before signing.',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
      details: [
        'Risk scoring for each clause',
        'Historical success/failure rates',
        'Industry-specific risk profiles'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Features</h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore all the powerful features LegiSafe offers for legal document analysis and verification.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className={`w-14 h-14 rounded-lg ${feature.bgColor} ${feature.iconColor} flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="text-gray-600 list-disc pl-5">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="mb-2">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" 
            onClick={() => navigate('/signup')}
          >
            Get Started with LegiSafe
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;

