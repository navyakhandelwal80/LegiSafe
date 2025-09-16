import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  message: string;
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const { docId } = useParams<{ docId?: string }>();
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      message: "Hello! I'm analyzing your document. What would you like to know about it?",
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: newMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        message: "I've analyzed that section. The clause appears standard but could benefit from clearer language regarding termination conditions. Would you like me to suggest specific improvements?",
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Dashboard
          </Link>
          <div className="text-lg font-semibold text-gray-800">
            Document Chat {docId && `- Document ${docId}`}
          </div>
        </div>
        <div className="text-2xl font-bold text-blue-600 flex items-center">
          <i className="fas fa-scale-balanced mr-2"></i>
          <span>LegiSafe</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Document Viewer - Left Panel */}
        <div className="w-1/2 bg-gray-50 border-r">
          <div className="h-full flex flex-col">
            <div className="bg-white p-4 border-b">
              <h3 className="font-semibold text-gray-800">Document Viewer</h3>
              <p className="text-sm text-gray-600">Employment Agreement.pdf</p>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <h4 className="font-semibold mb-4">EMPLOYMENT AGREEMENT</h4>
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    <strong>1. EMPLOYMENT TERMS:</strong> This Agreement is entered into between [Company Name] 
                    and [Employee Name] for the position of [Job Title].
                  </p>
                  <p className="bg-yellow-100 p-2 rounded">
                    <strong>⚠️ Risk Identified:</strong> The termination clause in Section 3 heavily favors 
                    the employer and may limit employee rights.
                  </p>
                  <p>
                    <strong>2. COMPENSATION:</strong> Employee shall receive a salary of $[Amount] per annum, 
                    payable in accordance with company payroll practices.
                  </p>
                  <p>
                    <strong>3. TERMINATION:</strong> Either party may terminate this agreement with [Notice Period] 
                    written notice. Company reserves the right to terminate immediately for cause.
                  </p>
                  <p className="bg-blue-100 p-2 rounded">
                    <strong>💡 AI Suggestion:</strong> Consider negotiating for mutual termination conditions 
                    and clearer definition of "cause."
                  </p>
                  <p>
                    <strong>4. CONFIDENTIALITY:</strong> Employee agrees to maintain confidentiality of all 
                    proprietary information during and after employment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface - Right Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="bg-white p-4 border-b">
            <h3 className="font-semibold text-gray-800">Legal AI Assistant</h3>
            <p className="text-sm text-gray-600">Ask questions about your document</p>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about clauses, risks, or request explanations..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;