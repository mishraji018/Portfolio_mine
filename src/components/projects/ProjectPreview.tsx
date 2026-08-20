import React from "react";
import { motion } from "framer-motion";

interface ProjectPreviewProps {
  image: string;
  title: string;
  isVisible: boolean;
  mousePos: { x: number; y: number };
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  image,
  title,
  isVisible,
  mousePos,
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        left: mousePos.x + 20,
        top: mousePos.y - 120,
      }}
      className="fixed pointer-events-none z-30 hidden lg:block w-[360px] h-[220px] rounded-card overflow-hidden border border-[#343B46] shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0D0F12]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-[#F5F7FA] truncate">
        {title}
      </div>
    </motion.div>
  );
};

export default ProjectPreview;
