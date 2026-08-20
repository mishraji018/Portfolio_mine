import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Prof. Rajan Sharma",
    role: "Professor, CSE Dept — KIET",
    quote:
      "Pawan demonstrates exceptional problem-solving skills and a genuine passion for AI/ML research. His ability to translate complex algorithms into working systems is remarkable for a student at his level.",
    avatar: "RS",
    color: "#7C5CFC",
  },
  {
    name: "Arjun Mehta",
    role: "Senior Developer — Tech Innovations Inc.",
    quote:
      "Working with Pawan was a pleasure. He picked up our NLP pipeline in days and improved model accuracy significantly. Highly self-motivated and professional.",
    avatar: "AM",
    color: "#5FE3A1",
  },
  {
    name: "Sneha Gupta",
    role: "Team Lead — KIET AI Club",
    quote:
      "Pawan built our Face Attendance System that we now use across the department. His attention to detail and commitment to code quality is outstanding.",
    avatar: "SG",
    color: "#61D9FF",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-[#0D0F12] relative border-t border-[#242932]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase mb-3">
              <Quote className="w-4 h-4" />
              <span>WHAT PEOPLE SAY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              TESTIMONIALS.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            FEEDBACK FROM PROFESSORS, MENTORS & COLLEAGUES
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-card bg-[#15181D] border border-[#242932] hover:border-opacity-60 transition-all space-y-6"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = t.color + "60")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#242932")
              }
            >
              {/* Quote */}
              <div className="space-y-4">
                <Quote
                  className="w-7 h-7 opacity-60"
                  style={{ color: t.color }}
                />
                <p className="text-sm text-[#A6ADB8] font-sans leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#242932]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0"
                  style={{ background: t.color + "20", color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-[#F5F7FA]">
                    {t.name}
                  </p>
                  <p className="text-xs font-mono text-[#69717D]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
