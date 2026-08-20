import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Github } from "lucide-react";
import { projectsData, Project } from "../../data/projects";
import { ProjectPreview } from "../projects/ProjectPreview";
import { ProjectXRayModal } from "../projects/ProjectXRayModal";

export const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [activeXRayProject, setActiveXRayProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" className="py-24 px-6 bg-[#08090B] relative">
      {/* Floating Hover Preview Card */}
      <ProjectPreview
        image={hoveredProject?.image || ""}
        title={hoveredProject?.title || ""}
        isVisible={!!hoveredProject}
        mousePos={mousePos}
      />

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
            HOVER OVER A ROW TO PREVIEW · CLICK ARCHITECTURE TO VIEW X-RAY DIAGRAM
          </p>
        </div>

        {/* Editorial Project Rows */}
        <div className="divide-y divide-[#242932]" onMouseMove={handleMouseMove}>
          {projectsData.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="py-10 group relative transition-all duration-300 hover:bg-[#0D0F12]/60 px-4 rounded-xl block cursor-pointer"
              data-cursor="VIEW ON GITHUB ↗"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Left: Number & Title */}
                <div className="flex items-start space-x-6">
                  <span className="text-xl sm:text-2xl font-mono text-[#69717D] group-hover:text-[#7C5CFC] transition-colors pt-1">
                    {project.number}
                  </span>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-bold font-heading text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight className="w-6 h-6 text-[#7C5CFC] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-[#A6ADB8] mt-2 max-w-xl font-sans">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#15181D] border border-[#242932] text-[11px] font-mono text-[#69717D] group-hover:border-[#343B46] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center space-x-3 pt-2 lg:pt-0" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveXRayProject(project); }}
                    className="inline-flex items-center px-4 py-2.5 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#F5F7FA] hover:border-[#7C5CFC] hover:text-[#7C5CFC] transition-all shadow-sm"
                  >
                    <Cpu className="w-4 h-4 mr-2 text-[#7C5CFC]" />
                    <span>VIEW ARCHITECTURE</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-btn bg-[#15181D] border border-[#242932] text-[#A6ADB8] hover:text-[#F5F7FA] hover:border-[#343B46] transition-all"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
