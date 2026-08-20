import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Database, Wrench, Terminal, Cpu } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: string }[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: SkillCategory[] = [
    {
      id: "web",
      name: "WEB DEVELOPMENT",
      icon: <Code2 className="w-4 h-4" />,
      skills: [
        { name: "React", level: "Extensive Use" },
        { name: "TypeScript", level: "Daily Workflow" },
        { name: "Tailwind CSS", level: "Primary Styling" },
        { name: "Vite", level: "Build Tooling" },
        { name: "HTML5 / CSS3", level: "Core Standard" },
        { name: "Framer Motion", level: "Micro-animations" },
      ],
    },
    {
      id: "ai",
      name: "AI & COMPUTER VISION",
      icon: <Brain className="w-4 h-4" />,
      skills: [
        { name: "Python", level: "Primary Language" },
        { name: "OpenCV", level: "Computer Vision" },
        { name: "PyTorch", level: "Model Training" },
        { name: "Whisper STT", level: "Voice Models" },
        { name: "LangChain", level: "LLM Orchestration" },
        { name: "Scikit-Learn", level: "ML Pipelines" },
      ],
    },
    {
      id: "languages",
      name: "LANGUAGES",
      icon: <Terminal className="w-4 h-4" />,
      skills: [
        { name: "Python", level: "Fluent" },
        { name: "TypeScript / JavaScript", level: "Fluent" },
        { name: "C / C++", level: "Data Structures" },
        { name: "SQL", level: "Queries & Joins" },
      ],
    },
    {
      id: "tools",
      name: "DEVELOPER TOOLS",
      icon: <Wrench className="w-4 h-4" />,
      skills: [
        { name: "Git / GitHub", level: "Version Control" },
        { name: "VS Code", level: "IDE" },
        { name: "Postman", level: "API Testing" },
        { name: "Linux / Bash", level: "Shell Scripting" },
        { name: "Vercel / Netlify", level: "Deployment" },
      ],
    },
    {
      id: "database",
      name: "DATABASES",
      icon: <Database className="w-4 h-4" />,
      skills: [
        { name: "SQLite", level: "Embedded Storage" },
        { name: "PostgreSQL", level: "Relational DB" },
        { name: "MongoDB", level: "NoSQL Storage" },
      ],
    },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 bg-[#08090B] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7C5CFC]" />
              <span>SKILLS & TECH ECOSYSTEM</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              TECHNICAL CAPABILITIES.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            NO FAKE PERCENTAGE BARS · PRACTICAL FIELD EXPERIENCE & WORKING KNOWLEDGE
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 py-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeCategory === "all"
                ? "bg-[#7C5CFC] text-white shadow-[0_0_15px_rgba(124,92,252,0.4)]"
                : "bg-[#15181D] border border-[#242932] text-[#A6ADB8] hover:border-[#343B46]"
            }`}
          >
            ALL CATEGORIES
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? "bg-[#7C5CFC] text-white shadow-[0_0_15px_rgba(124,92,252,0.4)]"
                  : "bg-[#15181D] border border-[#242932] text-[#A6ADB8] hover:border-[#343B46]"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-card bg-[#0D0F12] border border-[#242932] hover:border-[#7C5CFC]/50 transition-all group"
            >
              <div className="flex items-center space-x-3 pb-4 mb-4 border-b border-[#242932]">
                <span className="p-2 rounded-lg bg-[#7C5CFC]/10 text-[#7C5CFC]">
                  {category.icon}
                </span>
                <h3 className="font-heading font-bold text-sm text-[#F5F7FA] tracking-wider">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex justify-between items-center text-xs font-mono"
                  >
                    <span className="text-[#F5F7FA] font-medium group-hover:text-[#7C5CFC] transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[#69717D] bg-[#15181D] px-2 py-0.5 rounded border border-[#242932]">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
