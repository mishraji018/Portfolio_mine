import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal, Bot } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { TextReveal } from "../effects/TextReveal";
import { InteractiveTitle } from "../effects/InteractiveTitle";

interface HeroProps {
  onOpenTerminal?: () => void;
  onOpenAiAssistant?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTerminal,
  onOpenAiAssistant,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDigitalHovered, setIsDigitalHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 overflow-hidden bg-[#08090B]">
      {/* Dynamic Cursor Spotlight Radial Background */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 opacity-40"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 92, 252, 0.16), transparent 40%)`,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full my-auto z-10 relative">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#15181D] border border-[#242932] mb-8 text-xs font-mono text-[#A6ADB8]"
        >
          <span className="w-2 h-2 rounded-full bg-[#5FE3A1] animate-pulse" />
          <span>DEVELOPER OS</span>
          <span className="text-[#69717D]">·</span>
          <span className="text-[#7C5CFC]">AVAILABLE FOR PROJECTS</span>
        </motion.div>

        {/* Interactive Character Headline */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] font-extrabold font-heading tracking-tight text-[#F5F7FA] leading-[0.95] whitespace-nowrap">
            <InteractiveTitle title="PAWAN MISHRA." />
          </h1>

          {/* Interactive Sub-headline */}
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#A6ADB8] leading-tight pt-2">
            <span className="text-[#F5F7FA]">I BUILD </span>

            <span
              onMouseEnter={() => setIsDigitalHovered(true)}
              onMouseLeave={() => setIsDigitalHovered(false)}
              className="relative inline-block cursor-pointer underline decoration-[#7C5CFC]/60 underline-offset-8 group"
            >
              <TextReveal
                text="digital experiences"
                className="text-gradient bg-gradient-to-r from-[#7C5CFC] via-[#61D9FF] to-[#F5F7FA] bg-clip-text text-transparent"
                delay={0.2}
              />
            </span>

            <span className="block sm:inline"> that feel alive.</span>
          </div>

          {/* Interactive Tech-Pill Hover Expansion */}
          <AnimatePresence>
            {isDigitalHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="flex flex-wrap gap-2 pt-4"
              >
                {["[ React ]", "[ TypeScript ]", "[ Python ]", "[ OpenCV ]", "[ Three.js WebGL ]", "[ AI ]"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#7C5CFC]/20 border border-[#7C5CFC] text-xs font-mono text-[#7C5CFC] font-semibold animate-pulse"
                    >
                      {tech}
                    </span>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bio note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl text-base sm:text-lg text-[#69717D] leading-relaxed font-sans"
        >
          Engineering modern fullstack web systems, computer vision models, and intelligent AI tools with an obsession for sleek performance and interactive storytelling.
        </motion.p>

        {/* CTAs & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton strength={0.3}>
            <button
              onClick={scrollToWork}
              data-cursor="EXPLORE"
              className="px-8 py-4 rounded-btn bg-[#7C5CFC] text-white font-semibold text-sm hover:bg-[#9278FF] transition-all shadow-[0_0_30px_rgba(124,92,252,0.4)] flex items-center space-x-2"
            >
              <span>ENTER PORTFOLIO</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </MagneticButton>

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="px-5 py-4 rounded-btn bg-[#15181D] border border-[#242932] text-[#F5F7FA] hover:border-[#7C5CFC] hover:text-[#7C5CFC] transition-all text-xs font-mono flex items-center space-x-2"
            >
              <Terminal className="w-4 h-4 text-[#5FE3A1]" />
              <span>TERMINAL OS</span>
            </button>
          )}

          {onOpenAiAssistant && (
            <button
              onClick={onOpenAiAssistant}
              className="px-5 py-4 rounded-btn bg-[#15181D] border border-[#242932] text-[#F5F7FA] hover:border-[#7C5CFC] hover:text-[#7C5CFC] transition-all text-xs font-mono flex items-center space-x-2"
            >
              <Bot className="w-4 h-4 text-[#61D9FF]" />
              <span>ASK AI</span>
            </button>
          )}

          {/* Social Quick Links */}
          <div className="flex items-center space-x-3 ml-2 sm:ml-4 border-l border-[#242932] pl-4">
            <a
              href="https://github.com/mishraji018"
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB ↗"
              className="p-3 rounded-full bg-[#15181D] border border-[#242932] text-[#A6ADB8] hover:text-[#7C5CFC] hover:border-[#7C5CFC] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/%E1%B4%98%E1%B4%80%E1%B4%A1%E1%B4%80%C9%B4-%E1%B4%8B%E1%B4%9C%E1%B4%8D%E1%B4%80%CA%80-%E1%B4%8D%C9%AA%EA%9C%B1%CA%9C%CA%80%E1%B4%80-7b9791321/"
              target="_blank"
              rel="noreferrer"
              data-cursor="LINKEDIN ↗"
              className="p-3 rounded-full bg-[#15181D] border border-[#242932] text-[#A6ADB8] hover:text-[#7C5CFC] hover:border-[#7C5CFC] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:pmishra2084@gmail.com"
              data-cursor="EMAIL ↗"
              className="p-3 rounded-full bg-[#15181D] border border-[#242932] text-[#A6ADB8] hover:text-[#7C5CFC] hover:border-[#7C5CFC] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto w-full flex justify-between items-end text-xs font-mono text-[#69717D] pt-12 border-t border-[#242932]/40"
      >
        <div>
          <span>SCROLL TO DISCOVER</span>
        </div>
        <button
          onClick={scrollToWork}
          className="flex items-center space-x-2 text-[#A6ADB8] hover:text-[#7C5CFC] transition-colors"
        >
          <span>[ WORK ]</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
