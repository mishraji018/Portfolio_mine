import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-[#7C5CFC] font-bold">PAWAN MISHRA CLI TERMINAL OS v2.6</p>
          <p className="text-[#69717D]">Type <span className="text-[#5FE3A1] font-bold">help</span> to list available commands.</p>
        </div>
      ),
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs text-[#A6ADB8]">
            <p className="text-[#7C5CFC] font-semibold">AVAILABLE COMMANDS:</p>
            <p>› <span className="text-[#5FE3A1]">whoami</span> ...... Display background & developer summary</p>
            <p>› <span className="text-[#5FE3A1]">skills</span> ...... Show core tech stack capabilities</p>
            <p>› <span className="text-[#5FE3A1]">projects</span> .... List featured interactive projects</p>
            <p>› <span className="text-[#5FE3A1]">contact</span> ..... Show email & communication channels</p>
            <p>› <span className="text-[#5FE3A1]">matrix</span> ...... Run simulated matrix telemetry stream</p>
            <p>› <span className="text-[#5FE3A1]">clear</span> ....... Clear terminal history</p>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="text-xs text-[#A6ADB8] space-y-1">
            <p className="text-[#F5F7FA] font-bold">PAWAN MISHRA</p>
            <p>B.Tech Computer Science Student & Fullstack / AI Builder.</p>
            <p>Building high-performance web systems, computer vision models, and intelligent AI tools.</p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="text-xs text-[#A6ADB8] space-y-1">
            <p className="text-[#61D9FF]">WEB: React · TypeScript · Tailwind CSS · Vite · Framer Motion</p>
            <p className="text-[#7C5CFC]">AI & CV: Python · OpenCV · PyTorch · Whisper STT · LangChain</p>
            <p className="text-[#5FE3A1]">DB & TOOLS: PostgreSQL · SQLite · Git · Linux · Vercel</p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="text-xs text-[#A6ADB8] space-y-1">
            <p>1. <span className="text-[#F5F7FA] font-bold">AI Document Summarizer</span> (React, FastAPI, LLM Embeddings)</p>
            <p>2. <span className="text-[#F5F7FA] font-bold">Smart Face Attendance</span> (Python, OpenCV, Anti-Spoofing)</p>
            <p>3. <span className="text-[#F5F7FA] font-bold">3D Interactive Canvas</span> (Three.js, WebGL, Shaders)</p>
            <p>4. <span className="text-[#F5F7FA] font-bold">Jarvis Voice Assistant</span> (Whisper, Python, System OS API)</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="text-xs text-[#A6ADB8] space-y-1">
            <p>Email: <a href="mailto:pmishra2084@gmail.com" className="text-[#7C5CFC] underline">pmishra2084@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/mishraji018" target="_blank" rel="noreferrer" className="text-[#61D9FF] underline">github.com/mishraji018</a></p>
          </div>
        );
        break;

      case "matrix":
        outputNode = (
          <div className="text-[11px] font-mono text-[#5FE3A1] space-y-0.5 animate-pulse">
            <p>01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100</p>
            <p>01010000 01000001 01010111 01000001 01001110 00100000 01001101 01001001 01010011 01001000 01010010 01000001</p>
            <p>[ MATRIX SUBSYSTEM OK ]</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        outputNode = (
          <p className="text-xs text-[#FF6B7A]">
            Command not recognized: <span className="font-bold">{cmd}</span>. Type <span className="underline font-bold">help</span> for command list.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output: outputNode }]);
    setInputVal("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 250 }}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#08090B] border-t border-[#7C5CFC]/40 shadow-2xl font-mono ${
          isExpanded ? "h-[80vh]" : "h-72 sm:h-80"
        } transition-all duration-300 flex flex-col`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D0F12] border-b border-[#242932] text-xs text-[#A6ADB8]">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-[#7C5CFC]" />
            <span className="font-semibold text-[#F5F7FA]">pawan@portfolio:~ $</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded hover:bg-[#15181D] text-[#69717D] hover:text-[#F5F7FA]"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-[#15181D] text-[#69717D] hover:text-[#FF6B7A]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal History Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-[#7C5CFC]">pawan@portfolio:~$</span>
                <span className="text-[#F5F7FA] font-bold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommandSubmit} className="flex items-center border-t border-[#242932] px-4 py-2 bg-[#0D0F12]">
          <span className="text-[#7C5CFC] text-xs font-bold mr-2">pawan@portfolio:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (try 'help')..."
            className="flex-1 bg-transparent text-xs text-[#F5F7FA] focus:outline-none placeholder-[#69717D] font-mono"
            autoFocus
          />
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalDrawer;
