import React, { useState } from 'react';
import { MessageSquare, Send, HelpCircle } from 'lucide-react';
import { useGSAPAnimation } from '../hooks/useGSAPAnimation';

const Chatbot = () => {
  const componentRef = useGSAPAnimation();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ type: 'user' | 'bot'; message: string }[]>([]);

  const faqs = [
    {
      question: "What are the admission requirements for B.E. Computer Science?",
      answer: "Admission to B.E. Computer Science requires a minimum of 60% aggregate in 12th standard with Mathematics, Physics, and Chemistry. Selection is based on TNEA counselling."
    },
    {
      question: "What is the duration of the B.E. program?",
      answer: "The B.E. program is a 4-year undergraduate course divided into 8 semesters."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, various scholarships are available including merit-based, SC/ST scholarships, and other government schemes."
    },
    {
      question: "What are the placement opportunities?",
      answer: "The department has excellent placement records with major companies like TCS, Infosys, Wipro, and many more visiting for campus recruitment."
    },
    {
      question: "What are the research facilities available?",
      answer: "The department has state-of-the-art research laboratories with high-end systems and NVIDIA GPUs for research in Speech, Image/Video Processing, and Data Analytics."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { type: 'user', message }]);

    // Simulate bot response (replace with actual chatbot integration)
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        type: 'bot', 
        message: "Thank you for your question. Our team will assist you shortly. Meanwhile, you can check our FAQ section below for common queries."
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <div ref={componentRef} className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 split-text">
            May I Help You?
          </h1>
          <p className="text-lg text-gray-600 reveal">
            Ask any questions about our department, courses, or facilities
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 reveal">
          <div className="h-[400px] overflow-y-auto mb-4 p-4 border rounded-lg">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-4 flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    chat.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
            {chatHistory.length === 0 && (
              <div className="h-full flex items-center justify-center text-gray-500">
                <MessageSquare className="mr-2" />
                Start a conversation
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question here..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="reveal">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;