import React, { useState, useEffect } from "react";
import { X, Terminal, Activity, CheckCircle2 } from "lucide-react";

interface DevPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevPanel: React.FC<DevPanelProps> = ({ isOpen, onClose }) => {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calcFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calcFps);
    };

    if (isOpen) {
      animId = requestAnimationFrame(calcFps);
    }

    return () => cancelAnimationFrame(animId);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[80] w-80 bg-[#0D0F12] border border-[#7C5CFC]/50 rounded-card p-4 shadow-2xl font-mono text-xs text-[#F5F7FA] animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center justify-between pb-3 border-b border-[#242932] text-[#7C5CFC]">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4" />
          <span className="font-bold tracking-wider">DEVELOPER CONSOLE</span>
        </div>
        <button onClick={onClose} className="p-1 text-[#69717D] hover:text-[#F5F7FA]">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="py-3 space-y-2 text-[11px]">
        <div className="flex justify-between items-center">
          <span className="text-[#69717D]">RENDER FPS:</span>
          <span className="text-[#5FE3A1] font-bold flex items-center">
            <Activity className="w-3 h-3 mr-1 animate-pulse" />
            {fps} FPS
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#69717D]">ASSETS INITIALIZED:</span>
          <span className="text-[#61D9FF]">42 / 42 [100%]</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#69717D]">INTERACTIVE MODE:</span>
          <span className="text-[#7C5CFC] font-bold">CINEMATIC DARK</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#69717D]">FRAMEWORK:</span>
          <span>REACT + VITE + TS</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#69717D]">ANIMATION ENGINE:</span>
          <span>FRAMER MOTION</span>
        </div>
      </div>

      <div className="pt-2 border-t border-[#242932] flex items-center text-[10px] text-[#5FE3A1]">
        <CheckCircle2 className="w-3 h-3 mr-1" />
        <span>PORTFOLIO OS STATUS: NOMINAL</span>
      </div>
    </div>
  );
};

export default DevPanel;
