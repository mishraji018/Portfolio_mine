import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight, Sparkles, Phone, MessageCircle } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#08090B] relative border-t border-[#242932]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Large Statement */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>START A CONVERSATION</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-7xl md:text-8xl font-extrabold font-heading text-[#F5F7FA] leading-[0.95] max-w-5xl"
          >
            HAVE AN IDEA? LET'S BUILD IT.
          </motion.h2>

          <p className="text-base sm:text-xl text-[#A6ADB8] max-w-2xl font-sans">
            Whether you have an exciting project, AI collaboration, software opportunity, or just want to connect — feel free to drop a message.
          </p>
        </div>

        {/* Primary Contact CTA & Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <MagneticButton strength={0.2} className="w-full">
            <a
              href="mailto:pmishra2084@gmail.com"
              data-cursor="EMAIL ↗"
              className="flex flex-col justify-between p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-[#7C5CFC] transition-all h-44 group"
            >
              <div className="flex items-center justify-between text-[#7C5CFC]">
                <Mail className="w-6 h-6" />
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <p className="text-xs font-mono text-[#69717D]">DIRECT EMAIL</p>
                <p className="font-heading font-bold text-sm sm:text-base text-[#F5F7FA] truncate mt-1">
                  pmishra2084@gmail.com
                </p>
              </div>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2} className="w-full">
            <a
              href="https://github.com/mishraji018"
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB ↗"
              className="flex flex-col justify-between p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-[#7C5CFC] transition-all h-44 group"
            >
              <div className="flex items-center justify-between text-[#F5F7FA]">
                <Github className="w-6 h-6" />
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <p className="text-xs font-mono text-[#69717D]">SOURCE REPOSITORIES</p>
                <p className="font-heading font-bold text-base text-[#F5F7FA] mt-1">
                  GitHub Profile ↗
                </p>
              </div>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2} className="w-full">
            <a
              href="https://www.linkedin.com/in/%E1%B4%98%E1%B4%80%E1%B4%A1%E1%B4%80%C9%B4-%E1%B4%8B%E1%B4%9C%E1%B4%8D%E1%B4%80%CA%80-%E1%B4%8D%C9%AA%EA%9C%B1%CA%9C%CA%80%E1%B4%80-7b9791321/"
              target="_blank"
              rel="noreferrer"
              data-cursor="LINKEDIN ↗"
              className="flex flex-col justify-between p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-[#7C5CFC] transition-all h-44 group"
            >
              <div className="flex items-center justify-between text-[#61D9FF]">
                <Linkedin className="w-6 h-6" />
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <p className="text-xs font-mono text-[#69717D]">PROFESSIONAL NETWORK</p>
                <p className="font-heading font-bold text-base text-[#F5F7FA] mt-1">
                  LinkedIn Profile ↗
                </p>
              </div>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2} className="w-full">
            <a
              href="/Resume.pdf"
              download="Pawan_Mishra_Resume.pdf"
              data-cursor="DOWNLOAD"
              className="flex flex-col justify-between p-6 rounded-card bg-[#7C5CFC] text-white hover:bg-[#9278FF] transition-all h-44 shadow-[0_0_30px_rgba(124,92,252,0.4)] group"
            >
              <div className="flex items-center justify-between">
                <FileText className="w-6 h-6" />
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <p className="text-xs font-mono opacity-80">RESUME DOCUMENT</p>
                <p className="font-heading font-extrabold text-lg mt-1">
                  DOWNLOAD CV ↗
                </p>
              </div>
            </a>
          </MagneticButton>

          {/* Phone */}
          <MagneticButton strength={0.2} className="w-full">
            <a
              href="tel:+918400018527"
              data-cursor="CALL ↗"
              className="flex flex-col justify-between p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-[#5FE3A1] transition-all h-44 group"
            >
              <div className="flex items-center justify-between text-[#5FE3A1]">
                <Phone className="w-6 h-6" />
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <p className="text-xs font-mono text-[#69717D]">PHONE</p>
                <p className="font-heading font-bold text-sm text-[#F5F7FA] mt-1">+91 84000 18527</p>
              </div>
            </a>
          </MagneticButton>

          {/* WhatsApp */}
          <MagneticButton strength={0.2} className="w-full">
            <a
              href="https://wa.me/918400018527"
              target="_blank"
              rel="noreferrer"
              data-cursor="WHATSAPP ↗"
              className="flex flex-col justify-between p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-[#5FE3A1] transition-all h-44 group"
            >
              <div className="flex items-center justify-between text-[#5FE3A1]">
                <MessageCircle className="w-6 h-6" />
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <div>
                <p className="text-xs font-mono text-[#69717D]">WHATSAPP</p>
                <p className="font-heading font-bold text-base text-[#F5F7FA] mt-1">Message Me ↗</p>
              </div>
            </a>
          </MagneticButton>
        </div>

        {/* Footer Bar */}
        <div className="pt-16 border-t border-[#242932] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#69717D]">
          <div>
            <span>PAWAN MISHRA · BUILT WITH REACT, TYPESCRIPT & TAILWIND</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#5FE3A1]" />
            <span className="text-[#A6ADB8]">STATUS: ONLINE</span>
            <span className="mx-2">·</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
