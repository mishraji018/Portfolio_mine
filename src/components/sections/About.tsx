import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, GraduationCap, MapPin, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0D0F12] relative border-t border-b border-[#242932]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo Card (Editorial Crop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-card overflow-hidden border border-[#242932] group-hover:border-[#7C5CFC] transition-all duration-500 bg-[#15181D] shadow-2xl">
              <img
                src="/mine1.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/favicon.png";
                }}
                alt="Pawan Mishra"
                style={{ objectPosition: "20% 25%" }}
                className="w-full h-[420px] sm:h-[480px] object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-90" />

              {/* Photo Overlay Metadata */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <h4 className="font-heading font-extrabold text-xl text-[#F5F7FA]">
                    PAWAN MISHRA
                  </h4>
                  <p className="text-xs font-mono text-[#7C5CFC] tracking-wider">
                    DEVELOPER / BUILDER · 2026
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#15181D]/80 border border-[#242932] text-[11px] font-mono text-[#5FE3A1] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5FE3A1] animate-ping" />
                  <span>ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#7C5CFC]" />
              <span>ABOUT THE BUILDER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#F5F7FA]">
              ENGINEERING INTELLECTUAL & BEAUTIFUL SYSTEMS.
            </h2>

            <p className="text-base sm:text-lg text-[#A6ADB8] leading-relaxed font-sans">
              I am a B.Tech Computer Science student with a deep passion for building high-performance web applications, artificial intelligence models, and computer vision software.
            </p>

            <p className="text-sm sm:text-base text-[#69717D] leading-relaxed font-sans">
              Whether designing modern web architectures or crafting real-time face detection models, I focus on engineering clean codebases, intuitive micro-interactions, and robust system performance.
            </p>

            {/* Quick Fact Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-card bg-[#15181D] border border-[#242932] space-y-1">
                <div className="flex items-center space-x-2 text-[#7C5CFC]">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-mono">EDUCATION</span>
                </div>
                <p className="font-heading font-semibold text-sm text-[#F5F7FA]">B.Tech CSE</p>
                <p className="text-[11px] font-mono text-[#69717D]">Running 3rd Year · KIET</p>
              </div>

              <div className="p-4 rounded-card bg-[#15181D] border border-[#242932] space-y-1">
                <div className="flex items-center space-x-2 text-[#61D9FF]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-mono">LOCATION</span>
                </div>
                <p className="font-heading font-semibold text-sm text-[#F5F7FA]">Ghaziabad, India</p>
                <p className="text-[11px] font-mono text-[#69717D]">Open to Remote · UTC+5:30</p>
              </div>

              <div className="p-4 rounded-card bg-[#15181D] border border-[#242932] space-y-1 col-span-2 sm:col-span-1">
                <div className="flex items-center space-x-2 text-[#5FE3A1]">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-mono">FOCUS</span>
                </div>
                <p className="font-heading font-semibold text-sm text-[#F5F7FA]">AI/ML · Full Stack</p>
                <p className="text-[11px] font-mono text-[#69717D]">Python · React · OpenCV</p>
              </div>
            </div>

            {/* CGPA Highlight */}
            <div className="p-4 rounded-card bg-[#7C5CFC]/10 border border-[#7C5CFC]/30 flex items-center gap-3">
              <div className="text-2xl font-extrabold font-heading text-[#9278FF]">8.5</div>
              <div>
                <p className="text-xs font-mono text-[#7C5CFC] tracking-wider">CGPA / 10</p>
                <p className="text-[11px] font-mono text-[#69717D]">AI & Machine Learning Spec.</p>
              </div>
              <div className="ml-auto px-3 py-1 rounded-full bg-[#5FE3A1]/10 border border-[#5FE3A1]/30 text-[11px] font-mono text-[#5FE3A1]">
                OPEN TO INTERNSHIPS
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="p-4 rounded-card bg-[#15181D] border border-[#242932] space-y-2">
              <p className="text-xs font-mono text-[#61D9FF] tracking-wider">WHAT I'M LOOKING FOR</p>
              <div className="flex flex-wrap gap-2">
                {["AI/ML Internship", "Full Stack", "Python Backend", "Remote / Hybrid", "Available Now"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-btn bg-[#0D0F12] border border-[#343B46] text-[11px] font-mono text-[#A6ADB8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
