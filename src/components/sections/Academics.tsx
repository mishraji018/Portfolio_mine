import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "KIET Group of Institutions",
    year: "2024 – 2028",
    grade: "CGPA: 8.5 / 10",
    specialization: "Artificial Intelligence & Machine Learning",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "RPM Academy",
    year: "2022 – 2023",
    grade: "Percentage: 81%",
    specialization: "Science (PCM)",
  },
];



const courses = [
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Discrete Mathematics",
  "Theory of Computation",
  "Software Engineering",
  "Computer Architecture",
  "Web Development",
];

export const Academics: React.FC = () => {
  return (
    <section
      id="academics"
      className="py-24 px-6 bg-[#0D0F12] relative border-t border-b border-[#242932]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#5FE3A1] tracking-widest uppercase mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION & ACADEMIC RECORD</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              ACADEMICS.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            FORMAL EDUCATION & CORE CURRICULUM
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-[#5FE3A1]/50 transition-all group space-y-3"
            >
              <div className="flex items-center space-x-2 text-xs font-mono text-[#5FE3A1]">
                <GraduationCap className="w-4 h-4" />
                <span>{edu.year}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#F5F7FA] group-hover:text-[#5FE3A1] transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm font-semibold text-[#5FE3A1]">
                {edu.institution}
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#69717D] pt-1">
                <span className="px-2.5 py-1 rounded bg-[#0D0F12] border border-[#242932]">
                  {edu.grade}
                </span>
                {edu.specialization && (
                  <span className="px-2.5 py-1 rounded bg-[#0D0F12] border border-[#242932]">
                    {edu.specialization}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses */}
        <div className="mt-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-xl text-[#F5F7FA] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#61D9FF]" />
              KEY COURSES
            </h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-3 py-1.5 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#A6ADB8] hover:border-[#61D9FF] hover:text-[#61D9FF] transition-colors cursor-default"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
