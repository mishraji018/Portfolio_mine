import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail, FileText } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const links = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "LAB", href: "#lab" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#08090B]/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 md:hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-[#242932] pb-6">
            <span className="font-heading font-bold text-xl text-[#F5F7FA]">PAWAN MISHRA</span>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#242932] text-[#F5F7FA] hover:bg-[#15181D]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 my-auto">
            {links.map((link, idx) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => handleLinkClick(link.href)}
                className="text-left font-heading text-3xl font-extrabold text-[#F5F7FA] hover:text-[#7C5CFC] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Footer Socials */}
          <div className="border-t border-[#242932] pt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/mishraji018"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-[#15181D] border border-[#242932] text-[#F5F7FA] hover:text-[#7C5CFC]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/%E1%B4%98%E1%B4%80%E1%B4%A1%E1%B4%80%C9%B4-%E1%B4%8B%E1%B4%9C%E1%B4%8D%E1%B4%80%CA%80-%E1%B4%8D%C9%AA%EA%9C%B1%CA%9C%CA%80%E1%B4%80-7b9791321/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-[#15181D] border border-[#242932] text-[#F5F7FA] hover:text-[#7C5CFC]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pmishra2084@gmail.com"
                className="p-3 rounded-full bg-[#15181D] border border-[#242932] text-[#F5F7FA] hover:text-[#7C5CFC]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <a
              href="/Resume.pdf"
              download="Pawan_Mishra_Resume.pdf"
              className="inline-flex items-center justify-center w-full py-3 rounded-btn bg-[#7C5CFC] text-white font-semibold text-sm hover:bg-[#9278FF] transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Download Resume ↗
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
