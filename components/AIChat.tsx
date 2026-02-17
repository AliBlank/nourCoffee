import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageCircle, X, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useMenu } from '../contexts/MenuContext';
import { generateSystemPrompt } from '../constants';

export const AIChat: React.FC = () => {
  const { items } = useMenu(); // Get current items from context
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "سلام! من باریستای هوشمند شما هستم. امروز چه حالی دارید؟ می‌توانم نوشیدنی خاصی پیشنهاد کنم؟"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const historyForApi = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      // Generate prompt based on CURRENT menu state
      const systemInstruction = generateSystemPrompt(items);
      
      const responseText = await sendMessageToGemini(userMessage.text, historyForApi, systemInstruction);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "متاسفانه ارتباطم با پایگاه دانش قهوه قطع شده است. لطفا دوباره تلاش کنید.",
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div id="ai-chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] bg-cream-50 rounded-2xl shadow-2xl overflow-hidden border border-sage-200 flex flex-col h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-sage-900 p-4 flex justify-between items-center text-cream-100">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-gold-500" />
              <div>
                <h3 className="font-bold">باریستای هوشمند</h3>
                <p className="text-xs text-sage-200 font-sans">با قدرت جمنای</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gold-500 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream-100/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm font-sans leading-loose shadow-sm text-justify ${
                    msg.role === 'user'
                      ? 'bg-sage-800 text-cream-100 rounded-bl-none'
                      : 'bg-white text-sage-900 border border-sage-100 rounded-br-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-br-none shadow-sm border border-sage-100 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-sage-500" />
                  <span className="text-xs text-sage-400 font-sans">در حال دم‌آوری پاسخ...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-sage-100">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="یک نوشیدنی برای هوای بارانی..."
                className="flex-1 bg-sage-50 border-none rounded-full px-4 py-3 text-sm text-sage-900 placeholder:text-sage-400 focus:ring-1 focus:ring-sage-500 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 flex items-center justify-center bg-gold-500 text-white rounded-full hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform rotate-180" 
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-sage-900 text-cream-100 px-6 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <span className="font-bold hidden md:inline">گفتگو با باریستا</span>
          <div className="relative">
            <MessageCircle size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
            </span>
          </div>
        </button>
      )}
    </div>
  );
};