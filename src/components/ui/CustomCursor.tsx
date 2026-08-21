import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Exact mouse coordinates (no lag for crosshair center)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for trailing corner brackets
  const springConfig = { damping: 26, stiffness: 280, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide on touchscreens
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window
    ) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor]"
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* ── 1. CENTER PRECISION CROSSHAIR DOT ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Center Neon Dot */}
        <div
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
            isHovered
              ? "bg-[#5FE3A1] shadow-[0_0_8px_#5FE3A1]"
              : "bg-[#61D9FF] shadow-[0_0_8px_#61D9FF]"
          }`}
        />

        {/* Micro Crosshair Center Lines */}
        <div
          className={`absolute w-3 h-[1px] ${
            isHovered ? "bg-[#5FE3A1]/80" : "bg-[#61D9FF]/70"
          }`}
        />
        <div
          className={`absolute h-3 w-[1px] ${
            isHovered ? "bg-[#5FE3A1]/80" : "bg-[#61D9FF]/70"
          }`}
        />
      </motion.div>

      {/* ── 2. CYBERPUNK CORNER BRACKETS (+) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 40 : 26,
          height: isHovered ? 40 : 26,
          rotate: isHovered ? 90 : 0,
          scale: isClicking ? 0.75 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      >
        {/* Top-Left Bracket ┌ */}
        <span
          className={`absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] transition-colors duration-200 ${
            isHovered
              ? "border-[#5FE3A1] shadow-[0_0_8px_rgba(95,227,161,0.6)]"
              : "border-[#7C5CFC] shadow-[0_0_8px_rgba(124,92,252,0.6)]"
          }`}
        />

        {/* Top-Right Bracket ┐ */}
        <span
          className={`absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] transition-colors duration-200 ${
            isHovered
              ? "border-[#5FE3A1] shadow-[0_0_8px_rgba(95,227,161,0.6)]"
              : "border-[#7C5CFC] shadow-[0_0_8px_rgba(124,92,252,0.6)]"
          }`}
        />

        {/* Bottom-Left Bracket └ */}
        <span
          className={`absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] transition-colors duration-200 ${
            isHovered
              ? "border-[#5FE3A1] shadow-[0_0_8px_rgba(95,227,161,0.6)]"
              : "border-[#7C5CFC] shadow-[0_0_8px_rgba(124,92,252,0.6)]"
          }`}
        />

        {/* Bottom-Right Bracket ┘ */}
        <span
          className={`absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] transition-colors duration-200 ${
            isHovered
              ? "border-[#5FE3A1] shadow-[0_0_8px_rgba(95,227,161,0.6)]"
              : "border-[#7C5CFC] shadow-[0_0_8px_rgba(124,92,252,0.6)]"
          }`}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
