// pages/DashboardPage.tsx
/*import React, { useState, useRef, useEffect } from 'react';

interface Document {
  id: string;
  name: string;
  date: string;
  riskLevel: 'Low Risk' | 'Medium Risk' | 'High Risk';
  icon: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp: Date;
}

const DashboardPage: React.FC = () => {
  const [isChatbotCollapsed, setIsChatbotCollapsed] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      message:
        "Hello! I'm your LegiSafe AI assistant. How can I help with your legal documents today?",
      timestamp: new Date(),
    },
    {
      id: '2',
      type: 'user',
      message: 'Can you review the employment agreement I just uploaded?',
      timestamp: new Date(),
    },
    {
      id: '3',
      type: 'ai',
      message: `I'd be happy to help with that. I've identified 4 clauses that need attention:

1. Non-compete clause is unusually broad
2. Termination conditions favor the employer excessively
3. Intellectual property assignment is ambiguous
4. Dispute resolution mandates arbitration without option for litigation

Would you like me to explain any of these in more detail?`,
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const documents: Document[] = [
    {
      id: '1',
      name: 'Employment Agreement',
      date: 'Jun 12, 2023',
      riskLevel: 'Low Risk',
      icon: 'fas fa-file-contract',
    },
    {
      id: '2',
      name: 'Software License Agreement',
      date: 'Jun 10, 2023',
      riskLevel: 'Medium Risk',
      icon: 'fas fa-file-contract',
    },
    {
      id: '3',
      name: 'Real Estate Contract',
      date: 'Jun 5, 2023',
      riskLevel: 'High Risk',
      icon: 'fas fa-file-contract',
    },
  ];

  const recentDocuments = [
    { name: 'Employment Agreement', icon: 'fas fa-file-pdf', color: 'text-red-500' },
    { name: 'Software License', icon: 'fas fa-file-word', color: 'text-blue-500' },
    { name: 'Real Estate Contract', icon: 'fas fa-file-contract', color: 'text-green-500' },
    { name: 'NDA - TechNova', icon: 'fas fa-file-alt', color: 'text-purple-500' },
  ];

  const recentChats = [
    { name: 'Contract Review' },
    { name: 'Clarification Questions' },
    { name: 'Risk Assessment' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const toggleChatbot = () => {
    setIsChatbotCollapsed(!isChatbotCollapsed);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: newMessage,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setNewMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        message:
          "I've analyzed your document and found that this clause is standard but could be strengthened to better protect your interests. Would you like me to suggest alternative language?",
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const getRiskLevelStyles = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low Risk':
        return 'px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full';
      case 'Medium Risk':
        return 'px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full';
      case 'High Risk':
        return 'px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full';
      default:
        return 'px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full';
    }
  };

  return (
    <div className="flex">*/
      {/* Sidebar */}
     /* <div className="dashboard-sidebar bg-white shadow-sm sticky top-0 w-80 h-screen overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="text-xl font-bold text-blue-600 flex items-center">
            <i className="fas fa-scale-balanced mr-2"></i>
            <span>LegiSafe</span>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button className="sidebar-item flex items-center p-3 text-blue-600 bg-blue-50 rounded-lg w-full text-left">
                <i className="fas fa-home mr-3"></i>
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors">
                <i className="fas fa-file-contract mr-3"></i>
                <span>Documents</span>
              </button>
            </li>
            <li>
              <button className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors">
                <i className="fas fa-comments mr-3"></i>
                <span>Chats</span>
              </button>
            </li>
            <li>
              <button className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors">
                <i className="fas fa-chart-bar mr-3"></i>
                <span>Analytics</span>
              </button>
            </li>
            <li>
              <button className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors">
                <i className="fas fa-cog mr-3"></i>
                <span>Settings</span>
              </button>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Recent Documents
            </h3>
            <ul className="space-y-2">
              {recentDocuments.map((doc, index) => (
                <li key={index}>
                  <button className="sidebar-item flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors">
                    <i className={`${doc.icon} ${doc.color} mr-3`}></i>
                    <span className="text-sm truncate">{doc.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Recent Chats
            </h3>
            <ul className="space-y-2">
              {recentChats.map((chat, index) => (
                <li key={index}>
                  <button className="sidebar-item flex items-center p-2 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors">
                    <i className="fas fa-comment-dots text-blue-500 mr-3"></i>
                    <span className="text-sm">{chat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>*/

     {/* Main Content */}
      /*<div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your document analysis overview.</p>
        </div>*/

        //{/* Stats */}
        /*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                <i className="fas fa-file-contract text-xl"></i>
              </div>
              <div>
                <p className="text-gray-600">Documents Analyzed</p>
                <p className="text-2xl font-bold text-gray-800">24</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-4">
                <i className="fas fa-check-circle text-xl"></i>
              </div>
              <div>
                <p className="text-gray-600">Low Risk Documents</p>
                <p className="text-2xl font-bold text-gray-800">18</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-4">
                <i className="fas fa-exclamation-triangle text-xl"></i>
              </div>
              <div>
                <p className="text-gray-600">High Risk Documents</p>
                <p className="text-2xl font-bold text-gray-800">6</p>
              </div>
            </div>
          </div>
        </div>*/

       // {/* Upload Section */}
        /*<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Upload New Document</h2>
          <div className="upload-area p-8 rounded-lg border-2 border-dashed border-gray-300 text-center cursor-pointer mb-4 hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-600">Drag & drop your document here or click to browse</p>
            <p className="text-sm text-gray-500 mt-2">
              Supports PDF, DOCX, images, audio, and video files
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 bg-gray-100 rounded-lg text-center hover:bg-gray-200 transition-colors">
              <i className="fas fa-file-pdf text-2xl text-red-500 mb-2"></i>
              <p className="text-sm text-gray-600">PDF Document</p>
            </button>

            <button className="p-4 bg-gray-100 rounded-lg text-center hover:bg-gray-200 transition-colors">
              <i className="fas fa-file-word text-2xl text-blue-500 mb-2"></i>
              <p className="text-sm text-gray-600">Word Document</p>
            </button>

            <button className="p-4 bg-gray-100 rounded-lg text-center hover:bg-gray-200 transition-colors">
              <i className="fas fa-file-image text-2xl text-green-500 mb-2"></i>
              <p className="text-sm text-gray-600">Scanned Image</p>
            </button>

            <button className="p-4 bg-gray-100 rounded-lg text-center hover:bg-gray-200 transition-colors">
              <i className="fas fa-microphone text-2xl text-purple-500 mb-2"></i>
              <p className="text-sm text-gray-600">Audio Recording</p>
            </button>
          </div>
        </div>*/

        //{/* Documents Table */}
       /* <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Documents</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Risk Level
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <i className={`${doc.icon} text-blue-500 mr-3`}></i>
                        <span>{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">{doc.date}</td>
                    <td className="px-4 py-4">
                      <span className={getRiskLevelStyles(doc.riskLevel)}>
                        {doc.riskLevel}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <i className="fas fa-download"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>*/

      //{/* Chatbot Panel */}
      /*<div
        className={`fixed bottom-0 right-5 w-96 h-[500px] bg-white rounded-t-xl shadow-lg transition-transform duration-300 flex flex-col z-40 ${
          isChatbotCollapsed ? 'transform translate-y-[460px]' : ''
        }`}
      >
        <div
          className="chatbot-header flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl cursor-pointer"
          onClick={toggleChatbot}
        >
          <div className="flex items-center">
            <i className="fas fa-robot mr-2"></i>
            <span>Legal Assistant</span>
          </div>
          <div>
            <i className={`fas ${isChatbotCollapsed ? 'fa-plus' : 'fa-minus'}`}></i>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4" style={{ maxHeight: '380px' }}>
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[80%] p-3 rounded-2xl mb-4 animate-fade-in ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white ml-auto'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              <div className="whitespace-pre-wrap">{message.message}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about your document..."
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;*/
// pages/DashboardPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 border-b">
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 flex items-center hover:text-blue-700"
          >
            <i className="fas fa-scale-balanced mr-2"></i>
            <span>LegiSafe</span>
          </Link>
        </div>

        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors"
              >
                <i className="fas fa-home mr-3"></i>
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="sidebar-item flex items-center p-3 text-blue-600 bg-blue-50 rounded-lg w-full text-left transition-colors"
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/documents"
                className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors"
              >
                <i className="fas fa-file-alt mr-3"></i>
                <span>Documents</span>
              </Link>
            </li>

            <li>
              <Link
                to="/chats"
                className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors"
              >
                <i className="fas fa-comments mr-3"></i>
                <span>Chats</span>
              </Link>
            </li>

            <li>
              <Link
                to="/analytics"
                className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors"
              >
                <i className="fas fa-chart-line mr-3"></i>
                <span>Analytics</span>
              </Link>
            </li>

            <li>
              <Link
                to="/settings"
                className="sidebar-item flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left transition-colors"
              >
                <i className="fas fa-cog mr-3"></i>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t">
          <h3 className="text-xs font-semibold text-gray-400 mb-2">
            RECENT DOCUMENTS
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
              <i className="fas fa-file-pdf text-red-500 mr-2"></i>
              Employment Agreement
            </li>
            <li className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
              <i className="fas fa-file-word text-blue-500 mr-2"></i>
              Software License
            </li>
            <li className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
              <i className="fas fa-file-contract text-green-500 mr-2"></i>
              Real Estate Contract
            </li>
            <li className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
              <i className="fas fa-file-signature text-purple-500 mr-2"></i>
              NDA - TechNova
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome back! Here's your document analysis overview.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <i className="fas fa-file-alt text-blue-500 text-3xl mr-4"></i>
            <div>
              <p className="text-gray-500">Documents Analyzed</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <i className="fas fa-check-circle text-green-500 text-3xl mr-4"></i>
            <div>
              <p className="text-gray-500">Low Risk Documents</p>
              <p className="text-2xl font-bold">18</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <i className="fas fa-exclamation-triangle text-red-500 text-3xl mr-4"></i>
            <div>
              <p className="text-gray-500">High Risk Documents</p>
              <p className="text-2xl font-bold">6</p>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Upload New Document</h2>
          <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center cursor-pointer hover:border-blue-400 transition">
            <i className="fas fa-cloud-upload-alt text-gray-400 text-4xl mb-2"></i>
            <p className="text-gray-500">
              Drag & drop your document here or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Supports PDF, DOCX, images, audio, and video files
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <i className="fas fa-file-pdf text-red-500 text-2xl mb-2"></i>
              <p className="text-sm text-gray-600">PDF Document</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <i className="fas fa-file-word text-blue-500 text-2xl mb-2"></i>
              <p className="text-sm text-gray-600">Word Document</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <i className="fas fa-image text-green-500 text-2xl mb-2"></i>
              <p className="text-sm text-gray-600">Scanned Image</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <i className="fas fa-microphone text-purple-500 text-2xl mb-2"></i>
              <p className="text-sm text-gray-600">Audio Recording</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;

