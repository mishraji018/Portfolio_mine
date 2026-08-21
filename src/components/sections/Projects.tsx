import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Github, ExternalLink } from "lucide-react";
import { projectsData, Project } from "../../data/projects";
import { ProjectXRayModal } from "../projects/ProjectXRayModal";

export const Projects: React.FC = () => {
  const [activeXRayProject, setActiveXRayProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-6 bg-[#08090B] relative">
      {/* X-Ray Architecture Modal */}
      <ProjectXRayModal
        project={activeXRayProject}
        onClose={() => setActiveXRayProject(null)}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#242932] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7C5CFC]" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F7FA]">
              FEATURED PROJECTS.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#69717D] max-w-sm">
            PRODUCTION DEPLOYMENTS · REAL-TIME APPS · ARCHITECTURAL DESIGNS
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8 pt-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 sm:p-8 rounded-card bg-[#0D0F12] border border-[#242932] hover:border-[#7C5CFC]/60 transition-all duration-300 group relative shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Fixed Image Preview */}
                <div className="lg:col-span-5 relative">
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative rounded-xl overflow-hidden border border-[#242932] group-hover:border-[#7C5CFC]/50 transition-all duration-500 bg-[#15181D] shadow-md h-52 sm:h-60 w-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-80" />

                    {/* Badge on Image */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-[#242932] text-[10px] font-mono text-[#7C5CFC]">
                      {project.number}
                    </div>

                    {project.liveUrl && (
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#7C5CFC] text-white text-[11px] font-mono font-semibold flex items-center gap-1 shadow-lg">
                        <span>LIVE APP</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    )}
                  </a>
                </div>

                {/* Right Column: Project Details */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors flex items-center gap-2">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-[#A6ADB8] mt-1.5 font-sans">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#69717D] mt-3 leading-relaxed font-sans line-clamp-3">
                      {project.overview}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#15181D] border border-[#242932] text-[11px] font-mono text-[#A6ADB8] group-hover:border-[#343B46] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#242932]/70">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-btn bg-[#7C5CFC] text-white text-xs font-mono font-semibold hover:bg-[#9278FF] transition-all shadow-[0_0_20px_rgba(124,92,252,0.3)]"
                      >
                        <span>OPEN LIVE DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    )}

                    <button
                      onClick={() => setActiveXRayProject(project)}
                      className="inline-flex items-center px-4 py-2 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#F5F7FA] hover:border-[#7C5CFC] hover:text-[#7C5CFC] transition-all shadow-sm cursor-pointer"
                    >
                      <Cpu className="w-4 h-4 mr-1.5 text-[#7C5CFC]" />
                      <span>X-RAY ARCHITECTURE</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-3.5 py-2 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#A6ADB8] hover:text-[#F5F7FA] hover:border-[#7C5CFC] transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      <span>GITHUB</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

