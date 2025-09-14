import React from 'react';
import type { PageType } from '../App';


const AboutPage: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-xl text-gray-600">Learn about our mission, vision, and the team behind LegiSafe.</p>
    </div>
  </section>
);
export default AboutPage;