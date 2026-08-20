import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface InteractiveTitleProps {
  title: string;
  className?: string;
}

export const InteractiveTitle: React.FC<InteractiveTitleProps> = ({
  title,
  className = "",
}) => {
  const letters = title.split("");

  return (
    <div className={`inline-flex flex-nowrap whitespace-nowrap ${className}`}>
      {letters.map((char, index) => {
        if (char === " ") {
          return <span key={index} className="w-2 sm:w-4 md:w-6 lg:w-8" />;
        }

        return (
          <motion.span
            key={index}
            animate={{
              y: 0,
              scale: 1,
            }}
            whileHover={{
              y: -12,
              scale: 1.15,
              color: "#7C5CFC",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-block transition-colors duration-200 cursor-default select-none"
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default InteractiveTitle;
