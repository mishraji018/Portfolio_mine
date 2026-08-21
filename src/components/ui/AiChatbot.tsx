import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  ArrowUpRight,
  RotateCcw,
  MessageSquare,
  ChevronDown,
  Terminal,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  actionUrl?: string;
  actionLabel?: string;
  timestamp?: string;
}

interface AiChatbotProps {
  onOpenTerminal?: () => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ onOpenTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "👋 Hi! I am Pawan's AI Portfolio Assistant. Ask me anything about his projects, skills, education, certifications, or internship availability!",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const quickPrompts = [
    "🚀 Show top projects",
    "⚡ What's his tech stack?",
    "🎓 Education & CGPA",
    "💼 Internship availability",
    "📜 Verified Certifications",
    "📞 How to contact Pawan?",
  ];

  const getAiResponse = (
    userText: string
  ): { text: string; actionUrl?: string; actionLabel?: string } => {
    const q = userText.toLowerCase();

    if (
      q.includes("project") ||
      q.includes("work") ||
      q.includes("build") ||
      q.includes("app") ||
      q.includes("delhi") ||
      q.includes("chitchat") ||
      q.includes("task") ||
      q.includes("jarvis")
    ) {
      return {
        text: "Pawan has built 4 key deployed projects:\n\n1. 📋 Task Caretaker — Smart task management web app (Vercel)\n2. 💬 ChitChat Web — Real-time chat web application (Vercel)\n3. 🏛️ Delhi Visit — Interactive travel guide web app (Vercel)\n4. 🎙️ JARVIS AI Voice Agent — Voice-activated assistant with Whisper & Python\n\nAll projects include live demos and architecture diagrams!",
        actionUrl: "#work",
        actionLabel: "Explore Featured Projects",
      };
    }

    if (
      q.includes("skill") ||
      q.includes("tech") ||
      q.includes("stack") ||
      q.includes("language") ||
      q.includes("python") ||
      q.includes("react")
    ) {
      return {
        text: "Pawan's core technical stack includes:\n\n• Frontend: React, TypeScript, Tailwind CSS, Vite\n• Backend & AI: Python, OpenCV, FastAPI, PyTorch, Whisper STT\n• Databases: SQLite, PostgreSQL, NoSQL / Firebase\n• Tools: Git/GitHub, Linux/Bash, VS Code, Vercel",
        actionUrl: "#skills",
        actionLabel: "View Technical Capabilities",
      };
    }

    if (
      q.includes("education") ||
      q.includes("college") ||
      q.includes("degree") ||
      q.includes("cgpa") ||
      q.includes("grade") ||
      q.includes("kiet") ||
      q.includes("study")
    ) {
      return {
        text: "Pawan is pursuing B.Tech in Computer Science & Engineering (AI/ML specialization) at KIET Group of Institutions (2024–2028, running 3rd Year) with a strong CGPA of 8.5 / 10. He completed his 12th from RPM Academy with 81% in Science (PCM).",
        actionUrl: "#academics",
        actionLabel: "View Academic Details",
      };
    }

    if (
      q.includes("intern") ||
      q.includes("hire") ||
      q.includes("job") ||
      q.includes("available") ||
      q.includes("opportunity") ||
      q.includes("role")
    ) {
      return {
        text: "✅ Pawan is currently OPEN TO INTERNSHIPS (2026)!\n\n• Target Roles: AI/ML Intern, Full-Stack Developer, Python Backend\n• Location: Ghaziabad, India · Open to Remote / Hybrid / Onsite\n• Availability: Immediate",
        actionUrl: "#contact",
        actionLabel: "Get In Touch with Pawan",
      };
    }

    if (
      q.includes("cert") ||
      q.includes("certificate") ||
      q.includes("credential") ||
      q.includes("cisco") ||
      q.includes("infosys")
    ) {
      return {
        text: "Pawan has 5 verified industry certifications with official PDF credentials:\n\n1. Networking & Cybersecurity (Cisco / IIPC)\n2. ER Modeling (Infosys Springboard)\n3. Introduction to AI (LinkedIn Learning)\n4. Introduction to NoSQL Databases (LinkedIn Learning)\n5. Experiential Learning in Data Analytics (FutureSkills Prime)\n\nYou can view and download all certificate PDFs in the Certifications section!",
        actionUrl: "#certifications",
        actionLabel: "View Verified Certifications",
      };
    }

    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("phone") ||
      q.includes("whatsapp") ||
      q.includes("call") ||
      q.includes("number") ||
      q.includes("resume") ||
      q.includes("cv")
    ) {
      return {
        text: "You can reach Pawan directly:\n\n📧 Email: pmishra2084@gmail.com\n📱 Phone: +91 84000 18527\n💬 WhatsApp: +91 84000 18527\n📄 Resume: Downloadable via the Contact section\n🔗 GitHub & LinkedIn: @mishraji018",
        actionUrl: "#contact",
        actionLabel: "Open Contact Cards",
      };
    }

    if (
      q.includes("location") ||
      q.includes("where") ||
      q.includes("city") ||
      q.includes("from")
    ) {
      return {
        text: "Pawan is based in Ghaziabad, India (UTC+5:30) and is open to remote roles worldwide as well as on-site/hybrid opportunities across Delhi-NCR and India.",
        actionUrl: "#about",
        actionLabel: "About Pawan",
      };
    }

    if (q.includes("who") || q.includes("about") || q.includes("pawan")) {
      return {
        text: "Pawan Mishra is a B.Tech Computer Science builder specializing in Full-Stack Web Development and AI/Machine Learning. He engineers interactive web applications, real-time communication systems, and intelligent computer vision models with high performance.",
        actionUrl: "#about",
        actionLabel: "Read Full Bio",
      };
    }

    return {
      text: "I can help you explore Pawan's projects (Task Caretaker, ChitChat, Delhi Visit, Jarvis), his tech stack (React, Python, OpenCV), academic background (KIET, CGPA 8.5), verified certs, or contact details. What would you like to see?",
      actionUrl: "#work",
      actionLabel: "View Featured Projects",
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: "Now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAiResponse(query);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: response.text,
        actionUrl: response.actionUrl,
        actionLabel: response.actionLabel,
        timestamp: "Now",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "ai",
        text: "Chat cleared! How can I help you learn more about Pawan?",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <>
      {/* ── FLOATING TRIGGER BUTTON (Fixed Bottom-Right) ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          >
            {/* Floating Terminal / CLI Button */}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                data-cursor="CLI"
                aria-label="Open Terminal CLI"
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#15181D]/90 backdrop-blur-md border border-[#242932] text-xs font-mono text-[#A6ADB8] hover:text-[#5FE3A1] hover:border-[#5FE3A1] shadow-lg hover:shadow-[0_0_20px_rgba(95,227,161,0.3)] transition-all cursor-pointer group"
              >
                <Terminal className="w-4 h-4 text-[#5FE3A1]" />
                <span className="hidden sm:inline">TERMINAL OS</span>
              </button>
            )}

            {/* Pulsing Helper Tag */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#15181D]/90 backdrop-blur-md border border-[#7C5CFC]/40 text-xs font-mono text-[#F5F7FA] shadow-lg cursor-pointer hover:border-[#7C5CFC] transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-[#5FE3A1] animate-pulse" />
              <span>Ask Pawan's AI</span>
              <Sparkles className="w-3 h-3 text-[#7C5CFC] group-hover:rotate-12 transition-transform" />
            </motion.div>

            {/* Main Round Floating Chatbot Button */}
            <button
              onClick={() => setIsOpen(true)}
              data-cursor="CHAT"
              aria-label="Open AI Assistant"
              className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#7C5CFC] via-[#61D9FF] to-[#7C5CFC] p-[2px] shadow-[0_0_30px_rgba(124,92,252,0.5)] hover:shadow-[0_0_40px_rgba(124,92,252,0.8)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <div className="w-full h-full rounded-full bg-[#0D0F12] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#7C5CFC]/10 group-hover:bg-[#7C5CFC]/20 transition-colors" />
                <Bot className="w-6 h-6 text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors" />
                {/* Ping Dot */}
                <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#5FE3A1] border-2 border-[#0D0F12]" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CONVERSATIONAL CHATBOT WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[calc(100vh-4rem)] bg-[#0D0F12] border border-[#7C5CFC]/50 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-[#15181D] border-b border-[#242932]">
              <div className="flex items-center space-x-3">
                <div className="relative w-9 h-9 rounded-xl bg-[#7C5CFC]/20 border border-[#7C5CFC]/50 flex items-center justify-center text-[#7C5CFC]">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#5FE3A1] border-2 border-[#15181D]" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#F5F7FA] flex items-center gap-1.5">
                    PAWAN'S AI ASSISTANT
                    <Sparkles className="w-3.5 h-3.5 text-[#5FE3A1]" />
                  </h4>
                  <p className="text-[10px] font-mono text-[#5FE3A1] tracking-wider">
                    ONLINE · ASK ANYTHING
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-2 rounded-lg text-[#69717D] hover:text-[#F5F7FA] hover:bg-[#242932] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-2 rounded-lg text-[#69717D] hover:text-[#F5F7FA] hover:bg-[#242932] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs scrollbar-thin scrollbar-thumb-[#242932]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start space-x-2.5 ${
                    msg.sender === "user"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      msg.sender === "user"
                        ? "bg-[#7C5CFC] text-white"
                        : "bg-[#15181D] text-[#7C5CFC] border border-[#242932]"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <User className="w-3.5 h-3.5" />
                    ) : (
                      <Bot className="w-3.5 h-3.5" />
                    )}
                  </div>

                  <div
                    className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-[#7C5CFC] text-white rounded-tr-none shadow-md"
                        : "bg-[#15181D] text-[#F5F7FA] border border-[#242932] rounded-tl-none shadow-sm"
                    }`}
                  >
                    <p className="text-xs leading-relaxed">{msg.text}</p>

                    {msg.actionUrl && (
                      <a
                        href={msg.actionUrl}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center justify-between text-[11px] font-mono text-[#61D9FF] hover:text-white bg-[#0D0F12] border border-[#242932] hover:border-[#61D9FF] rounded-lg px-2.5 py-1.5 mt-2.5 transition-all w-full group"
                      >
                        <span>{msg.actionLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-7 h-7 rounded-full bg-[#15181D] text-[#7C5CFC] border border-[#242932] flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-[#15181D] border border-[#242932] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] animate-bounce" />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#61D9FF] animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#5FE3A1] animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-[#15181D]/60 border-t border-[#242932] flex gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full bg-[#0D0F12] border border-[#242932] text-[#A6ADB8] hover:text-[#7C5CFC] hover:border-[#7C5CFC] whitespace-nowrap transition-colors shrink-0 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#0D0F12] border-t border-[#242932] flex items-center space-x-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Pawan's skills, projects, contact..."
                className="flex-1 bg-[#15181D] border border-[#242932] rounded-full px-4 py-2.5 text-xs text-[#F5F7FA] placeholder-[#69717D] focus:outline-none focus:border-[#7C5CFC] transition-colors font-sans"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-full bg-[#7C5CFC] text-white hover:bg-[#9278FF] disabled:opacity-40 disabled:hover:bg-[#7C5CFC] transition-all shadow-[0_0_15px_rgba(124,92,252,0.4)] cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiChatbot;
