// pages/HomePage.tsx
/*import React from 'react';
import type { PageType } from '../App';

interface HomePageProps {
  onShowPage: (page: PageType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onShowPage }) => {
  const features = [
    {
      icon: 'fas fa-robot',
      title: 'AI Document Analysis',
      description: 'Upload legal documents and receive instant AI-powered analysis with risk assessment.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Interactive Legal Tutoring',
      description: 'Learn legal concepts through interactive Socratic questioning with our AI tutor.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Visual Legal Mapping',
      description: 'Convert complex legal clauses into easy-to-understand flowcharts and decision trees.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const steps = [
    {
      icon: 'fas fa-cloud-upload-alt',
      step: '1',
      title: 'Upload Your Document',
      description: 'Upload text, scanned documents, audio, or video for analysis.'
    },
    {
      icon: 'fas fa-robot',
      step: '2',
      title: 'AI Analysis & Summary',
      description: 'Our AI processes your document and generates a plain-language summary.'
    },
    {
      icon: 'fas fa-chart-pie',
      step: '3',
      title: 'Risk Assessment',
      description: 'Identify potential risks and red flags with our rating system.'
    },
    {
      icon: 'fas fa-check-circle',
      step: '4',
      title: 'Review & Take Action',
      description: 'Access your analyzed documents anytime in your dashboard.'
    }
  ];

  const testimonials = [
    {
      emoji: '👨‍💼',
      name: 'Rahul Sharma',
      role: 'Legal Counsel, TechNova Solutions',
      quote: 'LegiSafe has revolutionized how we review contracts. The AI analysis is incredibly accurate and saves us hours of work.'
    },
    {
      emoji: '👩‍💻',
      name: 'Priya Patel',
      role: 'Startup Founder, GreenGrowth',
      quote: 'As a non-lawyer, LegiSafe helps me understand complex legal documents and avoid potential pitfalls in agreements.'
    },
    {
      emoji: '👨‍⚖️',
      name: 'Arjun Mehta',
      role: 'Compliance Officer, FinSecure Bank',
      quote: 'The risk analysis feature has helped us identify several problematic clauses that would have otherwise gone unnoticed.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      description: 'For individuals getting started with legal document review',
      features: [
        '5 document analyses per month',
        'Basic risk assessment',
        'Standard support',
        'Plain-language summaries'
      ],
      buttonText: 'Get Started',
      buttonClass: 'w-full py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200 transition',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      description: 'For professionals and small businesses',
      features: [
        '50 document analyses per month',
        'Advanced risk assessment',
        'Priority support',
        'Visual legal mapping',
        'Interactive Q&A',
        'Downloadable reports'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited document analyses',
        'Custom risk models',
        '24/7 dedicated support',
        'API access',
        'White-label options',
        'Team collaboration tools',
        'Advanced analytics dashboard'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'w-full py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200 transition',
      popular: false
    }
  ];

  return (
    <div>*/
      {/* Hero Section */}
      /*<section className="gradient-bg text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Legal Document Verification</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Simplify legal document analysis with AI-driven insights, risk assessment, and plain-language explanations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition" 
              onClick={() => onShowPage('signup')}
            >
              Get Started Free
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>*/

      {/* Features Preview */}
      /*<section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Powerful Features for Legal Document Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform helps you understand, analyze, and verify legal documents with ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`w-14 h-14 rounded-lg ${feature.bgColor} ${feature.iconColor} flex items-center justify-center mb-6`}>
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition" 
              onClick={() => onShowPage('features')}
            >
              View All Features
            </button>
          </div>
        </div>
      </section>*/

      {/* How It Works Preview */}
     /* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How LegiSafe Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to analyze and understand any legal document
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                  <i className={`${step.icon} text-2xl`}></i>
                </div>
                <div className="text-blue-600 font-bold text-2xl mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition" 
              onClick={() => onShowPage('how-it-works')}
            >
              See Detailed Process
            </button>
          </div>
        </div>
      </section>*/

      {/* Testimonials */}
     /* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by legal professionals, businesses, and individuals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{testimonial.emoji}</div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/

      {/* Pricing Preview */}
      /*<section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`pricing-card bg-white rounded-xl shadow-sm relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border border-blue-500 ring-2 ring-blue-500 ring-opacity-20' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-sm font-bold py-1 text-center">MOST POPULAR</div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start mb-3">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={plan.buttonClass}
                    onClick={() => plan.buttonText === 'Contact Sales' ? onShowPage('contact') : onShowPage('signup')}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition" 
              onClick={() => onShowPage('pricing')}
            >
              See Full Pricing Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;*/

// pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'fas fa-robot',
      title: 'AI Document Analysis',
      description:
        'Upload legal documents and receive instant AI-powered analysis with risk assessment.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Interactive Legal Tutoring',
      description:
        'Learn legal concepts through interactive Socratic questioning with our AI tutor.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Visual Legal Mapping',
      description:
        'Convert complex legal clauses into easy-to-understand flowcharts and decision trees.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ];

  const steps = [
    {
      icon: 'fas fa-cloud-upload-alt',
      step: '1',
      title: 'Upload Your Document',
      description: 'Upload text, scanned documents, audio, or video for analysis.',
    },
    {
      icon: 'fas fa-robot',
      step: '2',
      title: 'AI Analysis & Summary',
      description: 'Our AI processes your document and generates a plain-language summary.',
    },
    {
      icon: 'fas fa-chart-pie',
      step: '3',
      title: 'Risk Assessment',
      description:
        'Identify potential risks and red flags with our rating system.',
    },
    {
      icon: 'fas fa-check-circle',
      step: '4',
      title: 'Review & Take Action',
      description: 'Access your analyzed documents anytime in your dashboard.',
    },
  ];

  const testimonials = [
    {
      emoji: '👨‍💼',
      name: 'Rahul Sharma',
      role: 'Legal Counsel, TechNova Solutions',
      quote:
        'LegiSafe has revolutionized how we review contracts. The AI analysis is incredibly accurate and saves us hours of work.',
    },
    {
      emoji: '👩‍💻',
      name: 'Priya Patel',
      role: 'Startup Founder, GreenGrowth',
      quote:
        'As a non-lawyer, LegiSafe helps me understand complex legal documents and avoid potential pitfalls in agreements.',
    },
    {
      emoji: '👨‍⚖️',
      name: 'Arjun Mehta',
      role: 'Compliance Officer, FinSecure Bank',
      quote:
        'The risk analysis feature has helped us identify several problematic clauses that would have otherwise gone unnoticed.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      description: 'For individuals getting started with legal document review',
      features: [
        '5 document analyses per month',
        'Basic risk assessment',
        'Standard support',
        'Plain-language summaries',
      ],
      buttonText: 'Get Started',
      buttonClass:
        'w-full py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200 transition',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$29',
      description: 'For professionals and small businesses',
      features: [
        '50 document analyses per month',
        'Advanced risk assessment',
        'Priority support',
        'Visual legal mapping',
        'Interactive Q&A',
        'Downloadable reports',
      ],
      buttonText: 'Start Free Trial',
      buttonClass:
        'w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited document analyses',
        'Custom risk models',
        '24/7 dedicated support',
        'API access',
        'White-label options',
        'Team collaboration tools',
        'Advanced analytics dashboard',
      ],
      buttonText: 'Contact Sales',
      buttonClass:
        'w-full py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200 transition',
      popular: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Legal Document Verification
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Simplify legal document analysis with AI-driven insights, risk assessment, and plain-language explanations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
              onClick={() => navigate('/signup')}
            >
              Get Started Free
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Powerful Features for Legal Document Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform helps you understand, analyze, and verify legal documents with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`w-14 h-14 rounded-lg ${feature.bgColor} ${feature.iconColor} flex items-center justify-center mb-6`}
                >
                  <i className={`${feature.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              onClick={() => navigate('/features')}
            >
              View All Features
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How LegiSafe Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to analyze and understand any legal document
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                  <i className={`${step.icon} text-2xl`}></i>
                </div>
                <div className="text-blue-600 font-bold text-2xl mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
              onClick={() => navigate('/how-it-works')}
            >
              See Detailed Process
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by legal professionals, businesses, and individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{testimonial.emoji}</div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card bg-white rounded-xl shadow-sm relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border border-blue-500 ring-2 ring-blue-500 ring-opacity-20'
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-sm font-bold py-1 text-center">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start mb-3">
                        <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={plan.buttonClass}
                    onClick={() =>
                      plan.buttonText === 'Contact Sales'
                        ? navigate('/contact')
                        : navigate('/signup')
                    }
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
              onClick={() => navigate('/pricing')}
            >
              See Full Pricing Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
