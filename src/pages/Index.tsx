import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/ui/LoadingScreen";
import CustomCursor from "../components/ui/CustomCursor";
import ScrollProgress from "../components/ui/ScrollProgress";
import Navbar from "../components/navigation/Navbar";
import MobileMenu from "../components/navigation/MobileMenu";
import CommandPalette from "../components/navigation/CommandPalette";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import SkillUniverse from "../components/sections/SkillUniverse";
import Experience from "../components/sections/Experience";
import Internships from "../components/sections/Internships";
import Academics from "../components/sections/Academics";
import Certifications from "../components/sections/Certifications";
import GithubStats from "../components/sections/GithubStats";


import Lab from "../components/sections/Lab";
import Contact from "../components/sections/Contact";
import DevPanel from "../components/ui/DevPanel";
import TerminalDrawer from "../components/ui/TerminalDrawer";
import AiAssistantModal from "../components/ui/AiAssistantModal";

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDevPanelOpen, setIsDevPanelOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  useEffect(() => {
    // Keyboard shortcut for DevPanel (Ctrl + Shift + P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        setIsDevPanelOpen((prev) => !prev);
      }
    };

    const handleToggleCommandPalette = () => {
      setIsCommandPaletteOpen((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-palette", handleToggleCommandPalette);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-palette", handleToggleCommandPalette);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F7FA] relative selection:bg-[#7C5CFC]/30 selection:text-[#9278FF]">
      {/* Initial Boot Loader */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Global Interactive Cursor & Utilities */}
      <CustomCursor />
      <ScrollProgress />

      {/* Navigation Header & Modals */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenDevPanel={() => setIsDevPanelOpen(true)}
      />

      <DevPanel
        isOpen={isDevPanelOpen}
        onClose={() => setIsDevPanelOpen(false)}
      />

      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />

      {/* Main Portfolio Sections */}
      <main>
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        />
        <Projects />
        <About />
        <SkillUniverse />
        <Skills />
        <Experience />
        <Internships />
        <Academics />
        <Certifications />
        <GithubStats />
        <Lab />
        <Contact />
      </main>
    </div>
  );
};

export default Index;