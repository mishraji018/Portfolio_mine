import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User, ArrowUpRight } from "lucide-react";

interface Message {
  sender: "user" | "ai";
  text: string;
  actionUrl?: string;
  actionLabel?: string;
}

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hi! I am Pawan's AI Portfolio Assistant. Ask me anything about Pawan's tech stack, featured AI projects, or background!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickPrompts = [
    "What technologies does Pawan use?",
    "Show me his top AI projects",
    "How can I contact Pawan?",
    "What is his education background?",
  ];

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMessages: Message[] = [...messages, { sender: "user", text: userText }];
    setMessages(newMessages);
    setInput("");

    // Process intelligence response
    setTimeout(() => {
      let reply = "Pawan is a B.Tech Computer Science student building interactive web applications and AI systems using React, TypeScript, Python, and OpenCV.";
      let actionUrl: string | undefined = undefined;
      let actionLabel: string | undefined = undefined;

      const lower = userText.toLowerCase();

      if (lower.includes("tech") || lower.includes("stack") || lower.includes("skill")) {
        reply = "Pawan works primarily with React, TypeScript, Tailwind CSS, Python, OpenCV, PyTorch, Whisper STT, and PostgreSQL.";
        actionUrl = "#skills";
        actionLabel = "Jump to Skills Section";
      } else if (lower.includes("project") || lower.includes("ai project") || lower.includes("work")) {
        reply = "His primary projects are: 1. AI Document Summarizer (React + LLM), 2. Smart Face Attendance with anti-spoofing (Python + OpenCV), 3. 3D WebGL Canvas, and 4. Jarvis Voice AI Agent.";
        actionUrl = "#work";
        actionLabel = "View Featured Projects";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire")) {
        reply = "You can email Pawan directly at pmishra2084@gmail.com or connect via GitHub and LinkedIn!";
        actionUrl = "#contact";
        actionLabel = "Open Contact Info";
      } else if (lower.includes("education") || lower.includes("degree") || lower.includes("college")) {
        reply = "Pawan is currently in his 3rd year pursuing a B.Tech degree in Computer Science and Engineering in India.";
        actionUrl = "#about";
        actionLabel = "View Education Details";
      }

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: reply, actionUrl, actionLabel },
      ]);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-[#0D0F12] border border-[#7C5CFC]/50 rounded-modal shadow-2xl overflow-hidden flex flex-col h-[500px]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#15181D] border-b border-[#242932]">
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-lg bg-[#7C5CFC]/20 text-[#7C5CFC] border border-[#7C5CFC]/40">
              <Bot className="w-5 h-5" />
            </span>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#F5F7FA] flex items-center gap-1.5">
                ASK PAWAN'S PORTFOLIO
                <Sparkles className="w-3.5 h-3.5 text-[#5FE3A1]" />
              </h4>
              <span className="text-[10px] font-mono text-[#5FE3A1] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FE3A1] animate-ping" />
                ONLINE AI ASSISTANT
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#A6ADB8] hover:text-[#F5F7FA] hover:bg-[#242932]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-2 ${
                msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                  msg.sender === "user"
                    ? "bg-[#7C5CFC] text-white"
                    : "bg-[#15181D] text-[#7C5CFC] border border-[#242932]"
                }`}
              >
                {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#7C5CFC] text-white rounded-tr-none"
                    : "bg-[#15181D] text-[#A6ADB8] border border-[#242932] rounded-tl-none"
                }`}
              >
                <p>{msg.text}</p>

                {msg.actionUrl && (
                  <a
                    href={msg.actionUrl}
                    onClick={onClose}
                    className="inline-flex items-center text-[11px] font-mono text-[#61D9FF] hover:underline mt-2 pt-2 border-t border-[#242932] w-full"
                  >
                    <span>{msg.actionLabel}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 bg-[#15181D]/50 border-t border-[#242932] flex gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 rounded-full bg-[#15181D] border border-[#242932] text-[#A6ADB8] hover:text-[#7C5CFC] hover:border-[#7C5CFC] whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="p-3 bg-[#0D0F12] border-t border-[#242932] flex items-center space-x-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Pawan..."
            className="flex-1 bg-[#15181D] border border-[#242932] rounded-full px-4 py-2 text-xs text-[#F5F7FA] placeholder-[#69717D] focus:outline-none focus:border-[#7C5CFC]"
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-[#7C5CFC] text-white hover:bg-[#9278FF] transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default AiAssistantModal;
