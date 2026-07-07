import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Sparkles, MessageSquare, Brain, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const aiFeatures = [
  {
    icon: MessageSquare,
    title: 'AI Chat Assistant',
    description: 'Ask me anything about my skills, projects, or experience. Powered by intelligent NLP.',
  },
  {
    icon: Brain,
    title: 'Smart Recommendations',
    description: 'Get personalized project suggestions based on your interests and needs.',
  },
  {
    icon: Zap,
    title: 'Instant Responses',
    description: 'Real-time AI-powered responses with context-aware understanding.',
  },
];

const initialMessages = [
  {
    role: 'assistant',
    content: `Hi! I'm ${personalInfo.name}'s AI assistant. Ask me about skills, Nilavitech projects, GitHub repos, or experience!`,
  },
];

export default function AIFeatures() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm currently offline. Please try again later or use the contact form to reach out directly!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    'What are your skills?',
    'Tell me about your projects',
    'What is your experience?',
  ];

  return (
    <section id="ai-features" className="py-20 md:py-28 relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/25 mb-4">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-400">Powered by AI</span>
          </div>
          <h2 className="section-title">AI Features</h2>
          <p className="section-subtitle mx-auto">
            Experience intelligent interactions powered by modern AI technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 border border-gray-200/80 dark:border-gray-700/60"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 mb-4">
                <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-200/50 dark:shadow-black/30 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-700 bg-slate-800">
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 shadow-md shadow-primary-500/20">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-white text-sm sm:text-base">
                Portfolio AI Assistant
              </h3>
              <p className="text-xs text-slate-300">Ask anything about my portfolio</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/20 border border-green-400/40">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-green-300">Online</span>
            </div>
          </div>

          {/* Chat area */}
          <div className="h-80 sm:h-96 overflow-y-auto p-4 sm:p-5 space-y-4 bg-gray-50 dark:bg-gray-950/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0 mr-2 mt-1">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-br-md shadow-md shadow-primary-500/20'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-bl-md shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0 mr-2">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick questions */}
          <div className="px-4 sm:px-5 py-3 flex flex-wrap gap-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            {quickQuestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setInput(q)}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:border-primary-400 dark:hover:border-primary-500 transition-colors text-gray-700 dark:text-gray-300 font-medium"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="p-4 sm:p-5 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              Questions are answered from my CV and sent to {personalInfo.email} so I can follow up.
            </p>
            <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects, experience..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-sm"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="btn-primary p-3 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
