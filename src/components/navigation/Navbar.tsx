import React, { useState, useEffect } from "react";
import { Search, Menu, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenMobileMenu,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "LAB", href: "#lab" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="group flex items-center space-x-2 font-heading font-extrabold text-lg tracking-wider text-[#F5F7FA]"
        >
          <span className="w-8 h-8 rounded-lg bg-[#7C5CFC] flex items-center justify-center text-white text-xs font-mono shadow-[0_0_15px_rgba(124,92,252,0.5)]">
            PM
          </span>
          <span className="transition-all duration-300 font-semibold text-sm hidden sm:inline text-[#A6ADB8] group-hover:text-[#F5F7FA]">
            {logoHovered ? "PAWAN MISHRA" : "PAWAN"}
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest text-[#A6ADB8]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-[#7C5CFC] transition-colors py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7C5CFC] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#15181D] border border-[#242932] text-xs font-mono text-[#A6ADB8] hover:border-[#7C5CFC] hover:text-[#F5F7FA] transition-all"
            data-cursor="SEARCH"
          >
            <Search className="w-3.5 h-3.5 text-[#7C5CFC]" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-[#0D0F12] border border-[#242932]">
              ⌘K
            </kbd>
          </button>

          {/* Resume CTA */}
          <MagneticButton strength={0.25}>
            <a
              href="/Resume.pdf"
              download="Pawan_Mishra_Resume.pdf"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-btn bg-[#7C5CFC] text-white text-xs font-semibold hover:bg-[#9278FF] transition-all shadow-[0_0_20px_rgba(124,92,252,0.3)]"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </MagneticButton>

          {/* Mobile Hamburger */}
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-lg bg-[#15181D] border border-[#242932] text-[#F5F7FA]"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
