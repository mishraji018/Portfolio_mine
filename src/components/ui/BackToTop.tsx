import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          data-cursor="TOP"
          aria-label="Back to Top"
          className="fixed bottom-24 right-6.5 z-40 w-13 h-13 rounded-full bg-[#15181D]/95 backdrop-blur-md border-2 border-[#242932] text-[#A6ADB8] hover:text-[#7C5CFC] hover:border-[#7C5CFC] shadow-2xl hover:shadow-[0_0_25px_rgba(124,92,252,0.5)] transition-all group flex items-center justify-center cursor-pointer"
        >
          {/* Circular Progress Ring */}
          <svg className="w-13 h-13 absolute inset-0 -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="24"
              cy="24"
              r="21"
              className="stroke-[#242932]"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r="21"
              className="stroke-[#7C5CFC] transition-all duration-150"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 21}
              strokeDashoffset={
                2 * Math.PI * 21 * (1 - scrollProgress / 100)
              }
              strokeLinecap="round"
            />
          </svg>

          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-[#F5F7FA] group-hover:text-[#7C5CFC]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
