import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, Code2, Trophy } from "lucide-react";

const stats = [
  {
    icon: <GitBranch className="w-5 h-5" />,
    label: "PUBLIC REPOS",
    value: "20+",
    color: "#7C5CFC",
  },
  {
    icon: <Star className="w-5 h-5" />,
    label: "GITHUB STARS",
    value: "50+",
    color: "#F4C95D",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    label: "LEETCODE SOLVED",
    value: "100+",
    color: "#5FE3A1",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    label: "LEETCODE RATING",
    value: "1400+",
    color: "#61D9FF",
  },
];

export const GithubStats: React.FC = () => {
  return (
    <section
      id="github-stats"
      className="py-24 px-6 bg-[#0D0F12] relative border-t border-[#242932]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#5FE3A1] tracking-widest uppercase mb-3">
              <GitBranch className="w-4 h-4" />
              <span>CODING ACTIVITY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              STATS.
            </h2>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/mishraji018"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#A6ADB8] hover:border-[#7C5CFC] hover:text-[#7C5CFC] transition-all"
            >
              GITHUB ↗
            </a>
            <a
              href="https://leetcode.com/u/pawan_018/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#A6ADB8] hover:border-[#F4C95D] hover:text-[#F4C95D] transition-all"
            >
              LEETCODE ↗
            </a>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-opacity-60 transition-all text-center space-y-3"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = stat.color + "60")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#242932")
              }
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto"
                style={{ background: stat.color + "20", color: stat.color }}
              >
                {stat.icon}
              </div>
              <p
                className="text-4xl font-extrabold font-heading"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-xs font-mono text-[#69717D]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
