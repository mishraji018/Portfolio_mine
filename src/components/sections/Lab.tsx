import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Terminal, ExternalLink, Code2, Sparkles } from "lucide-react";

interface Experiment {
  id: string;
  number: string;
  title: string;
  category: string;
  status: "ACTIVE" | "PROTOTYPE" | "RESEARCH";
  description: string;
  tech: string[];
}

export const Lab: React.FC = () => {
  const experiments: Experiment[] = [
    {
      id: "exp-01",
      number: "EXP-01",
      title: "Real-time Anti-Spoofing Facial Mesh",
      category: "COMPUTER VISION",
      status: "ACTIVE",
      description: "Testing depth map vector validation for web cameras to block static photo proxy attempts.",
      tech: ["Python", "OpenCV", "MediaPipe"],
    },
    {
      id: "exp-02",
      number: "EXP-02",
      title: "Local Speech-to-Text Whisper Hook",
      category: "AI / VOICE",
      status: "ACTIVE",
      description: "Low-latency streaming audio transcription listener running directly in Python process.",
      tech: ["Whisper", "PyTorch", "AudioStream"],
    },
    {
      id: "exp-03",
      number: "EXP-03",
      title: "Custom Fragment Shader Procedural Grid",
      category: "WEBGL",
      status: "PROTOTYPE",
      description: "GLSL fragment shader rendering infinite reactive cyber grids based on mouse movement coordinates.",
      tech: ["Three.js", "GLSL", "React Three Fiber"],
    },
    {
      id: "exp-04",
      number: "EXP-04",
      title: "Command Palette Terminal Router",
      category: "UI ENGINE",
      status: "ACTIVE",
      description: "Keyboard shortcut driven navigation matrix with fuzzy matching algorithm.",
      tech: ["TypeScript", "cmdk", "Tailwind"],
    },
  ];

  return (
    <section id="lab" className="py-24 px-6 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase mb-3">
              <FlaskConical className="w-4 h-4" />
              <span>THE EXPERIMENTAL LAB</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              PROTOTYPES & LABS.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            EXPERIMENTAL PROTOTYPES, COMPUTER VISION RESEARCH, AND SHADER LABS
          </p>
        </div>

        {/* Experiment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          {experiments.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-card bg-[#0D0F12] border border-[#242932] hover:border-[#7C5CFC]/50 transition-all space-y-4 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#7C5CFC] tracking-wider font-semibold">
                  {exp.number} · {exp.category}
                </span>

                <span
                  className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border ${
                    exp.status === "ACTIVE"
                      ? "bg-[#5FE3A1]/10 text-[#5FE3A1] border-[#5FE3A1]/30"
                      : "bg-[#F4C95D]/10 text-[#F4C95D] border-[#F4C95D]/30"
                  }`}
                >
                  STATUS: {exp.status}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                {exp.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A6ADB8] leading-relaxed font-sans">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[#15181D] border border-[#242932] text-[11px] font-mono text-[#69717D]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;
