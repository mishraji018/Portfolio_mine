import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, FolderGit2, User, Code2, FlaskConical, Mail, Github, Linkedin, FileText, Terminal, X } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDevPanel?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenDevPanel,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open palette
          const event = new CustomEvent("toggle-command-palette");
          window.dispatchEvent(event);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLink = (url: string) => {
    onClose();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0D0F12] border border-[#242932] rounded-modal shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <Command className="w-full bg-transparent font-sans">
          <div className="flex items-center border-b border-[#242932] px-4 py-3 text-[#A6ADB8]">
            <Search className="w-5 h-5 mr-3 text-[#7C5CFC]" />
            <Command.Input
              autoFocus
              placeholder="Search portfolio, projects, social links..."
              className="w-full bg-transparent text-[#F5F7FA] placeholder-[#69717D] focus:outline-none text-sm font-sans"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#69717D] hover:text-[#F5F7FA] hover:bg-[#15181D]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 space-y-1 text-sm">
            <Command.Empty className="py-6 text-center text-xs text-[#69717D]">
              No results found.
            </Command.Empty>

            <Command.Group heading="NAVIGATION" className="text-[11px] font-mono text-[#69717D] px-3 py-1 font-semibold">
              <Command.Item
                onSelect={() => navigateTo("work")}
                className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
              >
                <FolderGit2 className="w-4 h-4 mr-3 text-[#69717D]" />
                <span>Projects & Work</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("about")}
                className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
              >
                <User className="w-4 h-4 mr-3 text-[#69717D]" />
                <span>About Pawan Mishra</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("skills")}
                className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
              >
                <Code2 className="w-4 h-4 mr-3 text-[#69717D]" />
                <span>Skills & Tech Ecosystem</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("lab")}
                className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
              >
                <FlaskConical className="w-4 h-4 mr-3 text-[#69717D]" />
                <span>The Lab (Experiments)</span>
              </Command.Item>

              <Command.Item
                onSelect={() => navigateTo("contact")}
                className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 mr-3 text-[#69717D]" />
                <span>Contact & Connect</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="EXTERNAL & RESUME" className="text-[11px] font-mono text-[#69717D] px-3 py-1 font-semibold pt-2">
              <Command.Item
                onSelect={() => openLink("https://github.com/mishraji018")}
                className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
              >
                <Github className="w-4 h-4 mr-3 text-[#69717D]" />
                <span>GitHub Profile ↗</span>
              </Command.Item>

              <Command.Item
                onSelect={() => openLink("https://www.linkedin.com/in/%E1%B4%98%E1%B4%80%E1%B4%A1%E1%B4%80%C9%B4-%E1%B4%8B%E1%B4%9C%E1%B4%8D%E1%B4%80%CA%80-%E1%B4%8D%C9%AA%EA%9C%B1%CA%9C%CA%80%E1%B4%80-7b9791321/")}
                className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-3 text-[#69717D]" />
                <span>LinkedIn Profile ↗</span>
              </Command.Item>

              <Command.Item
                onSelect={() => openLink("/Resume.pdf")}
                className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
              >
                <FileText className="w-4 h-4 mr-3 text-[#69717D]" />
                <span>Download Resume ↗</span>
              </Command.Item>
            </Command.Group>

            {onOpenDevPanel && (
              <Command.Group heading="DEVELOPER" className="text-[11px] font-mono text-[#69717D] px-3 py-1 font-semibold pt-2">
                <Command.Item
                  onSelect={() => {
                    onClose();
                    onOpenDevPanel();
                  }}
                  className="flex items-center px-3 py-2.5 rounded-lg text-[#F5F7FA] hover:bg-[#15181D] hover:text-[#7C5CFC] cursor-pointer transition-colors"
                >
                  <Terminal className="w-4 h-4 mr-3 text-[#69717D]" />
                  <span>Toggle Developer Panel (Ctrl+Shift+P)</span>
                </Command.Item>
              </Command.Group>
            )}
          </Command.List>

          <div className="border-t border-[#242932] px-4 py-2 flex justify-between items-center text-[11px] font-mono text-[#69717D]">
            <span>Navigation Shortcuts</span>
            <div className="flex gap-2">
              <kbd className="px-1.5 py-0.5 rounded bg-[#15181D] border border-[#242932]">↑↓</kbd> Select
              <kbd className="px-1.5 py-0.5 rounded bg-[#15181D] border border-[#242932]">↵</kbd> Confirm
              <kbd className="px-1.5 py-0.5 rounded bg-[#15181D] border border-[#242932]">ESC</kbd> Close
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
};

export default CommandPalette;
