import { useState } from "react";
import { cn } from "@/lib/utils";
import SkillCard from "./SkillCard";
import {
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  Palette,
  Globe,
  Smartphone,
  GitBranch,
  Cloud,
  Terminal,
  Figma,
} from "lucide-react";

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
  frontend: [
    { name: "React", icon: <Code2 />, level: 95 },
    { name: "TypeScript", icon: <Code2 />, level: 90 },
    { name: "Next.js", icon: <Globe />, level: 85 },
    { name: "Tailwind CSS", icon: <Layout />, level: 95 },
    { name: "Vue.js", icon: <Code2 />, level: 75 },
    { name: "React Native", icon: <Smartphone />, level: 70 },
  ],
  backend: [
    { name: "Node.js", icon: <Server />, level: 90 },
    { name: "Python", icon: <Terminal />, level: 85 },
    { name: "PostgreSQL", icon: <Database />, level: 88 },
    { name: "MongoDB", icon: <Database />, level: 80 },
    { name: "GraphQL", icon: <Globe />, level: 75 },
    { name: "AWS", icon: <Cloud />, level: 78 },
  ],
  tools: [
    { name: "Git", icon: <GitBranch />, level: 95 },
    { name: "Docker", icon: <Server />, level: 85 },
    { name: "VS Code", icon: <Code2 />, level: 95 },
    { name: "Linux", icon: <Terminal />, level: 80 },
    { name: "CI/CD", icon: <Wrench />, level: 82 },
    { name: "Webpack", icon: <Wrench />, level: 75 },
  ],
  design: [
    { name: "Figma", icon: <Figma />, level: 88 },
    { name: "UI/UX", icon: <Palette />, level: 85 },
    { name: "Prototyping", icon: <Layout />, level: 80 },
    { name: "Animation", icon: <Palette />, level: 75 },
    { name: "Responsive", icon: <Smartphone />, level: 92 },
    { name: "Design Systems", icon: <Layout />, level: 85 },
  ],
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("frontend");
  const currentTab = tabs.find((t) => t.key === activeTab)!;

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary text-glow-cyan">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my technical expertise across different domains. Each skill represents
            years of hands-on experience and continuous learning.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                "border backdrop-blur-sm",
                activeTab === tab.key
                  ? cn(
                      "border-transparent",
                      tab.glowColor === "cyan" && "bg-glow-cyan/20 text-glow-cyan glow-cyan",
                      tab.glowColor === "purple" && "bg-glow-purple/20 text-glow-purple glow-purple",
                      tab.glowColor === "green" && "bg-glow-green/20 text-glow-green glow-green",
                      tab.glowColor === "pink" && "bg-glow-pink/20 text-glow-pink glow-pink"
                    )
                  : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
                glowColor={currentTab.glowColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
