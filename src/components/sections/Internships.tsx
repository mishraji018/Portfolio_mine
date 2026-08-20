import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const internships = [
  {
    role: "Networking & Cybersecurity Intern",
    company: "IIPC — Cisco Packet Tracer Program",
    location: "India",
    duration: "2026",
    description:
      "Completed industry-grade networking and cybersecurity training powered by IIPC using Cisco Packet Tracer. Gained hands-on experience in network topology design, IP addressing, routing protocols, and basic cybersecurity principles.",
    highlights: [
      "Cisco Packet Tracer Certified",
      "Network topology & IP routing",
      "Cybersecurity fundamentals",
      "Powered by IIPC",
    ],
  },
];

export const Internships: React.FC = () => {
  return (
    <section
      id="internships"
      className="py-24 px-6 bg-[#08090B] relative border-t border-[#242932]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase mb-3">
              <Briefcase className="w-4 h-4" />
              <span>PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              INTERNSHIPS.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            INDUSTRY EXPERIENCE & REAL-WORLD AI / DATA ENGINEERING ROLES
          </p>
        </div>

        {/* Internship Cards */}
        <div className="space-y-6 pt-12">
          {internships.map((item, idx) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-card bg-[#0D0F12] border border-[#242932] hover:border-[#7C5CFC]/50 transition-all group"
            >
              {/* Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-[#7C5CFC] mt-0.5">
                    {item.company}
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-xs font-mono text-[#69717D] shrink-0">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#A6ADB8] leading-relaxed font-sans mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 rounded-full bg-[#7C5CFC]/10 border border-[#7C5CFC]/30 text-xs font-mono text-[#7C5CFC]"
                  >
                    › {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
