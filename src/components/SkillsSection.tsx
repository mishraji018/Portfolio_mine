import { useState } from "react";
import { cn } from "@/lib/utils";

type TabKey = "frontend" | "backend" | "tools" | "design";

interface Tab {
  key: TabKey;
  label: string;
  glowColor: "cyan" | "purple" | "green" | "orange" | "pink";
}

const tabs: Tab[] = [
  { key: "frontend", label: "Frontend", glowColor: "cyan" },
  { key: "backend", label: "Backend", glowColor: "purple" },
  { key: "tools", label: "Tools", glowColor: "green" },
  { key: "design", label: "Design", glowColor: "pink" },
];

const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React"],
  backend: ["Node.js", "Python", "Java", "C++", "SQL", "Data Structures", "Algorithms", "OOPs"],
  tools: ["Git", "GitHub", "VS Code", "NPM", "Chrome DevTools", "Figma", "Netlify", "Vercel"],
  design: ["CSS Animations", "Transitions", "Keyframes", "Flexbox", "Grid Layout", "SVG Animation", "Hover Effects", "Responsive UI"],
};

const glowClasses = {
  cyan: {
    text: "group-hover:text-glow-cyan",
    bg: "group-hover:bg-glow-cyan/20",
    border: "group-hover:border-glow-cyan/50",
    glow: "group-hover:glow-cyan",
    activeText: "text-glow-cyan",
    activeBg: "bg-glow-cyan/10",
    activeBorder: "border-glow-cyan/30",
  },
  purple: {
    text: "group-hover:text-glow-purple",
    bg: "group-hover:bg-glow-purple/20",
    border: "group-hover:border-glow-purple/50",
    glow: "group-hover:glow-purple",
    activeText: "text-glow-purple",
    activeBg: "bg-glow-purple/10",
    activeBorder: "border-glow-purple/30",
  },
  green: {
    text: "group-hover:text-glow-green",
    bg: "group-hover:bg-glow-green/20",
    border: "group-hover:border-glow-green/50",
    glow: "group-hover:glow-green",
    activeText: "text-glow-green",
    activeBg: "bg-glow-green/10",
    activeBorder: "border-glow-green/30",
  },
  orange: {
    text: "group-hover:text-glow-orange",
    bg: "group-hover:bg-glow-orange/20",
    border: "group-hover:border-glow-orange/50",
    glow: "group-hover:glow-orange",
    activeText: "text-glow-orange",
    activeBg: "bg-glow-orange/10",
    activeBorder: "border-glow-orange/30",
  },
  pink: {
    text: "group-hover:text-glow-pink",
    bg: "group-hover:bg-glow-pink/20",
    border: "group-hover:border-glow-pink/50",
    glow: "group-hover:glow-pink",
    activeText: "text-glow-pink",
    activeBg: "bg-glow-pink/10",
    activeBorder: "border-glow-pink/30",
  },
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("frontend");
  const currentTab = tabs.find((t) => t.key === activeTab)!;
  const colors = glowClasses[currentTab.glowColor];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary text-glow-cyan">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my technical expertise across different domains.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "px-5 py-2.5 rounded-full font-medium transition-all duration-300",
                "border backdrop-blur-sm text-sm md:text-base",
                activeTab === tab.key
                  ? cn(
                      "border-transparent",
                      glowClasses[tab.glowColor].activeBg,
                      glowClasses[tab.glowColor].activeText,
                      tab.glowColor === "cyan" && "glow-cyan",
                      tab.glowColor === "purple" && "glow-purple",
                      tab.glowColor === "green" && "glow-green",
                      tab.glowColor === "pink" && "glow-pink"
                    )
                  : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Heading */}
        <div className="text-center mb-10">
          <h3
            className={cn(
              "text-3xl md:text-4xl font-bold transition-all duration-300",
              colors.activeText,
              currentTab.glowColor === "cyan" && "text-glow-cyan",
              currentTab.glowColor === "purple" && "text-glow-purple",
              currentTab.glowColor === "green" && "text-glow-green",
              currentTab.glowColor === "pink" && "text-glow-pink"
            )}
          >
            {currentTab.label}
          </h3>
        </div>

        {/* Skills as small glowing pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={skill}
              className={cn(
                "group px-5 py-3 rounded-xl cursor-pointer",
                "glass-card border transition-all duration-300",
                "hover:scale-105 hover:-translate-y-1",
                colors.bg,
                colors.border,
                colors.glow,
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span
                className={cn(
                  "font-medium text-muted-foreground transition-colors duration-300",
                  colors.text
                )}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
