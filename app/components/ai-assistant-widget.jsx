"use client";

import React, { useState } from "react";
import { HiSparkles, HiChatAlt2, HiX, HiPaperAirplane } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";
import { projectsData } from "@/utils/data/projects-data";

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Vanshika's AI Assistant 🤖. Ask me anything about her projects, tech stack, or experience!"
    }
  ]);

  const quickPrompts = [
    "🤖 Tell me about her AI & RAG projects",
    "💼 What's her work experience?",
    "🛠️ What is her core tech stack?",
    "📄 Resume & Contact details"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput("");

    // Generate AI Answer based on portfolio data
    setTimeout(() => {
      let reply = "";
      const q = query.toLowerCase();

      if (q.includes("ai") || q.includes("rag") || q.includes("research") || q.includes("agent")) {
        reply = `Vanshika has built 2 major AI applications:\n\n1. **AI Multi-Agent Research System** (Mistral AI, Tavily API, BeautifulSoup, SQLite, Flask) — Autonomous 4-agent web research engine (Live at https://ai-research-system-3tk6.onrender.com)\n\n2. **Smart PDF RAG Assistant** (Streamlit, LangChain, Gemini API, ChromaDB) — Document Q&A chatbot (Live at https://pdfuploadrag-wejfgxsmsebw2svulqd2pn.streamlit.app/)`;
      } else if (q.includes("experience") || q.includes("job") || q.includes("company") || q.includes("work")) {
        reply = `Vanshika's Professional Experience:\n\n• **Software Developer @ TechBridge Consultancy** (Aug 2025 - Present): Architecting Release Management modules for ObservaX ITSM Platform across 5 tools using Next.js & Redux Toolkit.\n\n• **Software Developer @ GoKwik Solutions** (Aug 2024 - Jul 2025): Spearheaded Shopify app modules, checkout enhancements, and payment integrations.`;
      } else if (q.includes("stack") || q.includes("skill") || q.includes("tech")) {
        reply = `Vanshika's Core Tech Stack:\n\n• **Frontend**: Next.js, React.js, Redux Toolkit, Tailwind CSS, TypeScript\n• **AI/LLM**: LangChain, Autonomous Multi-Agent Systems, RAG Pipelines, ChromaDB, Gemini API, Mistral AI\n• **Backend & DB**: Node.js, Express.js, REST APIs, PostgreSQL, MongoDB, Redis, Python, SQLite`;
      } else if (q.includes("contact") || q.includes("resume") || q.includes("email") || q.includes("hire")) {
        reply = `You can reach Vanshika at:\n📧 Email: ${personalData.email}\n📱 Phone: ${personalData.phone}\n🔗 LinkedIn: ${personalData.linkedIn}\n📄 Resume: Download from the button in the top navbar!`;
      } else {
        reply = `Vanshika is a Software Developer specializing in Next.js, React.js, Node.js, and Multi-Agent AI Systems. She has built enterprise ITSM platforms, Shopify e-commerce modules, and deployed Streamlit RAG & AI Agent applications!`;
      }

      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[120]">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full btn-theme-accent text-white shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-ring"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-xs font-bold tracking-wide">Ask Vanshika's AI</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-base">
            🤖
          </div>
        </button>
      )}

      {/* Glassmorphic Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] glass-panel rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeInUp border border-[var(--border-color)]">
          {/* Header */}
          <div className="px-5 py-3.5 bg-[var(--bg-terminal-header)] border-b border-[var(--border-color)] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg btn-theme-accent flex items-center justify-center text-white text-sm font-bold shadow-md">
                🤖
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-[var(--text-main)] tracking-wide">Vanshika AI Assistant</h4>
                <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online • RAG Knowledge
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-[var(--bg-card-hover)] text-[var(--text-sub)] hover:text-[var(--text-main)] transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "btn-theme-accent text-white rounded-br-none shadow-md font-medium"
                      : "bg-[var(--bg-card-hover)] text-[var(--text-main)] border border-[var(--border-color)] rounded-bl-none font-normal"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-[var(--bg-terminal)] border-t border-[var(--border-color)] flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-[var(--bg-card-hover)] text-[10px] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--border-accent)] transition-colors font-medium"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[var(--bg-terminal-header)] border-t border-[var(--border-color)] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about AI projects, tech stack..."
              className="flex-1 px-3 py-2 rounded-xl bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-xs text-[var(--text-main)] placeholder-[var(--text-sub)] focus:outline-none focus:border-[var(--border-accent)]"
            />
            <button
              type="submit"
              className="p-2 rounded-xl btn-theme-accent text-white transition-colors"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
