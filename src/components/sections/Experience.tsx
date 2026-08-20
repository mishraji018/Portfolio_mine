import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Award, Code } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

export const Experience: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      year: "2026",
      title: "ADVANCED AI & WEB SYSTEMS",
      role: "Independent Builder & Developer",
      description: "Focusing on fullstack web development, multi-modal AI voice agents, and real-time computer vision models.",
      highlights: ["AI Document Summarizer Engine", "JARVIS Voice Automation Agent", "WebGL Parametric 3D Canvas"],
      icon: <Award className="w-5 h-5 text-[#7C5CFC]" />,
    },
    {
      year: "2025",
      title: "COMPUTER VISION & MACHINE LEARNING",
      role: "Project Developer",
      description: "Designed automated biometric and document intelligence applications utilizing OpenCV, Python, and React.",
      highlights: ["Smart Face Attendance System with Anti-Spoofing", "Fullstack Portfolio OS Blueprint", "Data Structures & Algorithm Problem Solving"],
      icon: <Briefcase className="w-5 h-5 text-[#61D9FF]" />,
    },
    {
      year: "2024",
      title: "FOUNDATIONS & CORE ENGINEERING",
      role: "B.Tech Computer Science Student",
      description: "Mastered fundamental computer science concepts: Data Structures & Algorithms, C/C++, Web Fundamentals, and Object-Oriented Design.",
      highlights: ["Built foundational web tools & algorithms", "Competitive programming practice", "Core C++ & Python development"],
      icon: <Code className="w-5 h-5 text-[#5FE3A1]" />,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0D0F12] relative border-t border-b border-[#242932]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7C5CFC]" />
              <span>JOURNEY & MILESTONES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              DEVELOPMENT TIMELINE.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            INTERACTIVE CHRONOLOGICAL MILESTONES (2024 – 2026)
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pt-12">
          {/* Central Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-12 bottom-12 w-0.5 bg-[#242932] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Center Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#15181D] border-2 border-[#7C5CFC] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(124,92,252,0.5)]">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-40px)] pl-12 sm:pl-0">
                    <div className="p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-[#7C5CFC]/50 transition-all space-y-3 group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#7C5CFC] font-bold px-2.5 py-1 rounded bg-[#7C5CFC]/10">
                          {item.year}
                        </span>
                        <span className="text-xs font-mono text-[#69717D] flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          MILESTONE
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-lg text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-[#A6ADB8]">{item.role}</p>

                      <p className="text-xs text-[#69717D] leading-relaxed font-sans pt-1">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-[#242932] space-y-1">
                        {item.highlights.map((h) => (
                          <div key={h} className="text-[11px] font-mono text-[#A6ADB8] flex items-center">
                            <span className="text-[#7C5CFC] mr-2">›</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
