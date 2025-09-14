// pages/AboutPage.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Anjali Banwani',
      role: 'Team Member',
      bio: 'Contributing to frontend development and AI integration.'
    },
    {
      name: 'Navya Khandelwal',
      role: 'Team Member',
      bio: 'Focusing on UI/UX design and user experience.'
    },
    {
      name: 'Abhishek Pareek',
      role: 'Team Member',
      bio: 'Working on backend integration and functionality.'
    },
    {
      name: 'Ishaan Singhani',
      role: 'Team Member',
      bio: 'Specializing in AI model implementation and optimization.'
    },
    {
      name: 'Manan Lalwani',
      role: 'Team Member',
      bio: 'Handling project coordination and documentation.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About LegiSafe</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative legal document analysis powered by Generative AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              We are a team of students from BIT Jaipur. Our project, LegiSafe, is a prototype that uses 
              Generative AI to help users quickly verify and understand legal documents by scanning them 
              for risks and simplifying complex terms.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began with a simple observation: legal documents are often intimidating and 
              difficult to understand for the average person. This creates barriers to access to justice 
              and puts individuals at a disadvantage when dealing with legal matters.
            </p>
            <p className="text-gray-600">
              We set out to create a solution that would democratize access to legal document analysis 
              using the power of artificial intelligence.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              Our goal is to demonstrate how emerging AI technologies can be applied responsibly to build 
              solutions that are both innovative and user-friendly. We believe that understanding legal 
              documents shouldn't require a law degree.
            </p>
            <p className="text-gray-600 mb-4">
              LegiSafe breaks down complex legal language into plain English, identifies potential risks, 
              and provides actionable insights to help users make informed decisions about their legal documents.
            </p>
            <p className="text-gray-600">
              We're committed to maintaining the highest standards of security and privacy while making 
              legal document analysis more accessible, affordable, and understandable for everyone.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
                <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Our Technology</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <i className="fas fa-robot text-xl"></i>
              </div>
              <h4 className="text-lg font-semibold mb-2">Generative AI</h4>
              <p className="text-gray-600">Leveraging cutting-edge AI models to analyze and simplify legal language.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <i className="fas fa-shield-alt text-xl"></i>
              </div>
              <h4 className="text-lg font-semibold mb-2">Security First</h4>
              <p className="text-gray-600">Implementing robust security measures to protect your sensitive documents.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <i className="fas fa-graduation-cap text-xl"></i>
              </div>
              <h4 className="text-lg font-semibold mb-2">Educational Focus</h4>
              <p className="text-gray-600">Helping users understand legal concepts, not just identify risks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;