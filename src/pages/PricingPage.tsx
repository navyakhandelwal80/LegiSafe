// pages/PricingPage.tsx
/*import React from 'react';
import type { PageType } from '../App';
interface PricingPageProps {
  onShowPage: (page: PageType) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onShowPage }) => {
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

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade security measures and encryption to protect all your documents and data.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for nonprofit organizations. Please contact our sales team for more information.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Pricing</h1>
        <p className="text-xl text-gray-600 mb-12">
          Choose the plan that works best for your legal document analysis needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
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
        
        <div className="mt-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingPage;*/
// pages/PricingPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const navigate = useNavigate();

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

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. We use enterprise-grade security measures and encryption to protect all your documents and data.',
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer:
        'Yes, we offer special pricing for nonprofit organizations. Please contact our sales team for more information.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Pricing
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Choose the plan that works best for your legal document analysis needs.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {plan.price}
                </div>
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

        {/* FAQs */}
        <div className="mt-12 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
