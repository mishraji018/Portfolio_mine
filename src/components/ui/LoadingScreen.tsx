import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState("INITIALIZING");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 15) + 8;
        if (next > 30 && prev <= 30) setStep("LOADING INTERFACE");
        if (next > 70 && prev <= 70) setStep("COMPILING ASSETS");
        if (next >= 95) setStep("SYSTEM READY");

        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#08090B] flex flex-col justify-between p-8 md:p-16 font-mono select-none"
        >
          {/* Header metadata */}
          <div className="flex justify-between items-center text-xs text-[#69717D] tracking-wider">
            <span>PAWAN.MISHRA / PORTFOLIO OS v2.6</span>
            <span className="hidden sm:inline">LOC: INDIA (UTC+5:30)</span>
          </div>

          {/* Center boot message & progress bar */}
          <div className="max-w-xl mx-auto w-full my-auto space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C5CFC] animate-ping" />
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F7FA] tracking-wide">
                PAWAN MISHRA
              </h2>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-[#A6ADB8]">
              <div className="flex justify-between">
                <span>STATUS: {step}</span>
                <span className="text-[#7C5CFC] font-bold">{progress}%</span>
              </div>

              {/* Progress bar container */}
              <div className="w-full h-1.5 bg-[#15181D] rounded-full overflow-hidden border border-[#242932]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#7C5CFC] to-[#61D9FF]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Diagnostic logs */}
            <div className="space-y-1 text-[11px] text-[#69717D] pt-4 border-t border-[#242932]/50">
              <p>› INTERFACE MODULES .......... [ OK ]</p>
              <p>› SHADERS & ANIMATIONS ....... [ OK ]</p>
              <p>› PROJECTS & CASE STUDIES ..... [ OK ]</p>
            </div>
          </div>

          {/* Footer note */}
          <div className="flex justify-between items-center text-[11px] text-[#69717D]">
            <span>PRESS ESC FOR COMMAND PALETTE</span>
            <span>2026 EDITION</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
