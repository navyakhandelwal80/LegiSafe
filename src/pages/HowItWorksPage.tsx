// pages/HowItWorksPage.tsx
import React, { useState } from 'react';
import type { PageType } from '../App';
const HowItWorksPage: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">How It Works</h1>
        <p className="text-xl text-gray-600 mb-12">
          A step-by-step guide to using LegiSafe for your legal document needs.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 1: Upload Your Document</h2>
          <p className="text-gray-600 mb-4">
            Upload text, scanned documents, audio, or video for analysis through our secure platform.
          </p>
          <div className="upload-area p-8 rounded-lg border-2 border-dashed border-gray-300 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-600">Drag & drop your document here or click to browse</p>
            <p className="text-sm text-gray-500 mt-2">Supports PDF, DOCX, images, audio, and video files</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 2: AI Analysis & Summary</h2>
          <p className="text-gray-600 mb-4">
            Our AI processes your document and generates a plain-language summary with key insights.
          </p>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <p className="font-medium">AI Analysis Complete</p>
                <p className="text-gray-600">
                  This document appears to be a standard employment agreement with 4 moderate risk clauses highlighted.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 3: Risk Assessment</h2>
          <p className="text-gray-600 mb-4">
            Identify potential risks and red flags with our visual rating system.
          </p>
          <div className="flex items-center">
            <div className="w-1/4 bg-white p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-2xl font-bold text-red-600">68%</div>
              <div className="text-sm text-gray-600">Risk Score</div>
            </div>
            <div className="w-3/4 ml-4">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: '68%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>Low Risk</span>
                <span>High Risk</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 4: Review & Take Action</h2>
          <p className="text-gray-600 mb-4">
            Access your analyzed documents anytime in your dashboard and take appropriate action.
          </p>
          <div className="p-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
            <div>
              <p className="font-medium">Employment_Agreement.pdf</p>
              <p className="text-gray-600">Analyzed on June 12, 2023</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Download Report
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorksPage;