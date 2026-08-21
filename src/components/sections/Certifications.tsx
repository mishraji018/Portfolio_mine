import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Networking & Cybersecurity",
    issuer: "Cisco · Powered by IIPC",
    year: "2026",
    color: "#61D9FF",
    badge: "🔵",
    link: "/COMPLETION CERTIFICATE.pdf",
  },
  {
    title: "ER Modeling",
    issuer: "Infosys Springboard",
    year: "2025",
    color: "#FF6B7A",
    badge: "🔴",
    link: "/Pawan Kumar Mishra_infosys springboard.pdf",
  },
  {
    title: "Introduction to AI",
    issuer: "LinkedIn Learning",
    year: "2024",
    color: "#0A66C2",
    badge: "🔷",
    link: "/202401100200225_PAWAN KUMAR MISHRA_CSE(D) (2).pdf",
  },
  {
    title: "Introduction to NoSQL Databases",
    issuer: "LinkedIn Learning",
    year: "2024",
    color: "#5FE3A1",
    badge: "🟢",
    link: "/202401100200225_Pawan Kumar Mishra_CSE(D)_completion Certificate.pdf",
  },
  {
    title: "Experiential Learning (DA)",
    issuer: "FutureSkills Prime",
    year: "2024",
    color: "#EC4899",
    badge: "🌸",
    link: "/Pawan Kumar Mishra_202401100200225_CSE(D)_Project_Completion_DA.pdf",
  },
];

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-[#08090B] relative border-t border-[#242932]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#F4C95D] tracking-widest uppercase mb-3">
              <Award className="w-4 h-4" />
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              CERTIFICATIONS.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            INDUSTRY CERTIFICATIONS & COMPLETED COURSES
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 pt-12">
          {certs.map((cert, idx) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between p-6 rounded-card bg-[#0D0F12] border border-[#242932] hover:border-opacity-80 transition-all group h-44 cursor-pointer"
              style={{ "--hover-border": cert.color } as React.CSSProperties}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = cert.color + "80")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#242932")
              }
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{cert.badge}</span>
                <ExternalLink
                  className="w-4 h-4 text-[#69717D] group-hover:text-[#A6ADB8] transition-colors"
                />
              </div>
              <div>
                <p
                  className="text-xs font-mono mb-1"
                  style={{ color: cert.color }}
                >
                  {cert.issuer} · {cert.year}
                </p>
                <h3 className="font-heading font-bold text-sm text-[#F5F7FA] leading-snug">
                  {cert.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
