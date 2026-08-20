import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Database, Cpu, Sparkles } from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  category: "WEB" | "AI" | "DATA" | "SYSTEMS";
  icon: React.ReactNode;
  color: string;
  techs: string[];
  description: string;
}

export const SkillUniverse: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("AI");

  const nodes: NodeData[] = [
    {
      id: "WEB",
      name: "WEB INTERACTION",
      category: "WEB",
      icon: <Code2 className="w-5 h-5" />,
      color: "#7C5CFC",
      techs: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion", "WebGL / Three.js"],
      description: "Frontend architecture, reactive DOM state management, micro-animations, and responsive user experience design.",
    },
    {
      id: "AI",
      name: "AI & VISION",
      category: "AI",
      icon: <Brain className="w-5 h-5" />,
      color: "#61D9FF",
      techs: ["Python", "OpenCV", "PyTorch", "Whisper STT", "LangChain Embeddings", "Scikit-Learn"],
      description: "Computer vision face matching, low-latency audio transcription, and LLM retrieval-augmented generation pipelines.",
    },
    {
      id: "DATA",
      name: "DATA & STORAGE",
      category: "DATA",
      icon: <Database className="w-5 h-5" />,
      color: "#5FE3A1",
      techs: ["PostgreSQL", "SQLite", "JSON Telemetry", "REST APIs", "FastAPI Data Endpoints"],
      description: "Relational schema design, embedded timestamped logs, and structured API payload responses.",
    },
    {
      id: "SYSTEMS",
      name: "SYSTEMS & OS",
      category: "SYSTEMS",
      icon: <Cpu className="w-5 h-5" />,
      color: "#F4C95D",
      techs: ["C / C++", "Linux Bash", "Git Version Control", "Python Subprocess OS API", "Vercel / Cloud"],
      description: "Low-level data structures, system automation scripts, process orchestration, and deployment workflows.",
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <section className="py-24 px-6 bg-[#0D0F12] relative border-t border-b border-[#242932]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>INTERACTIVE SKILL UNIVERSE MAP</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              HOW I THINK & BUILD.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            HOVER OR CLICK NODES TO EXPLORE CONNECTED TECHNICAL PIPELINES
          </p>
        </div>

        {/* Horizontal Universe Visualizer */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Node Selector Map (Left Column) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative p-8 rounded-card bg-[#15181D] border border-[#242932] overflow-hidden">
              {/* Connected Line Background */}
              <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-[#242932] -translate-x-1/2 hidden sm:block" />
              <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-[#242932] -translate-y-1/2 hidden sm:block" />

              {/* Central Core Circle */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {nodes.map((node) => {
                  const isActive = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      onMouseEnter={() => setActiveNode(node.id)}
                      className={`p-6 rounded-card border transition-all text-left flex flex-col justify-between h-36 ${
                        isActive
                          ? "bg-[#0D0F12] border-[#7C5CFC] shadow-[0_0_25px_rgba(124,92,252,0.3)] scale-105"
                          : "bg-[#0D0F12]/60 border-[#242932] hover:border-[#343B46]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="p-2 rounded-lg"
                          style={{
                            backgroundColor: `${node.color}20`,
                            color: node.color,
                          }}
                        >
                          {node.icon}
                        </span>
                        <span className="text-[10px] font-mono text-[#69717D]">
                          NODE
                        </span>
                      </div>

                      <div>
                        <h4 className="font-heading font-bold text-sm text-[#F5F7FA]">
                          {node.name}
                        </h4>
                        <span
                          className="text-[11px] font-mono"
                          style={{ color: node.color }}
                        >
                          ● CONNECTED
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Node Detail Card (Right Column) */}
          <div className="lg:col-span-6">
            <motion.div
              key={currentNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-card bg-[#0D0F12] border border-[#7C5CFC]/50 space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#242932] pb-4">
                <div className="flex items-center space-x-3">
                  <span
                    className="p-3 rounded-xl border"
                    style={{
                      backgroundColor: `${currentNode.color}20`,
                      borderColor: `${currentNode.color}40`,
                      color: currentNode.color,
                    }}
                  >
                    {currentNode.icon}
                  </span>
                  <div>
                    <span className="text-xs font-mono text-[#69717D]">
                      ACTIVE PIPELINE REGION
                    </span>
                    <h3 className="text-2xl font-extrabold font-heading text-[#F5F7FA]">
                      {currentNode.name}
                    </h3>
                  </div>
                </div>

                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                  style={{
                    backgroundColor: `${currentNode.color}20`,
                    color: currentNode.color,
                  }}
                >
                  {currentNode.category} NODE
                </span>
              </div>

              <p className="text-sm text-[#A6ADB8] leading-relaxed font-sans">
                {currentNode.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono text-[#7C5CFC] tracking-wider uppercase font-semibold">
                  TECHNOLOGIES & TOOLING:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentNode.techs.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#F5F7FA]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillUniverse;
