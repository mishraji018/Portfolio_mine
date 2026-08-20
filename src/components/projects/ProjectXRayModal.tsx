import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, ExternalLink, Github, Layers, ArrowRight } from "lucide-react";
import { Project } from "../../data/projects";

interface ProjectXRayModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectXRayModal: React.FC<ProjectXRayModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-lg overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0D0F12] border border-[#242932] rounded-modal overflow-hidden shadow-2xl my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#242932] bg-[#15181D]/50">
            <div className="flex items-center space-x-3">
              <span className="p-2 rounded-lg bg-[#7C5CFC]/20 text-[#7C5CFC] border border-[#7C5CFC]/30">
                <Cpu className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-mono text-[#7C5CFC] tracking-wider font-semibold uppercase">
                  ARCHITECTURE X-RAY DIAGRAM
                </span>
                <h3 className="text-xl font-bold font-heading text-[#F5F7FA]">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#15181D] text-[#A6ADB8] hover:text-[#F5F7FA] hover:bg-[#242932] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* Overview & Problem -> Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-card bg-[#15181D]/40 border border-[#242932] space-y-2">
                <h4 className="text-xs font-mono text-[#7C5CFC] uppercase tracking-wider font-semibold">
                  [ OVERVIEW ]
                </h4>
                <p className="text-xs sm:text-sm text-[#A6ADB8] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="p-4 rounded-card bg-[#15181D]/40 border border-[#242932] space-y-2">
                <h4 className="text-xs font-mono text-[#F4C95D] uppercase tracking-wider font-semibold">
                  [ PROBLEM & APPROACH ]
                </h4>
                <p className="text-xs sm:text-sm text-[#A6ADB8] leading-relaxed">
                  {project.approach}
                </p>
              </div>

              <div className="p-4 rounded-card bg-[#15181D]/40 border border-[#242932] space-y-2">
                <h4 className="text-xs font-mono text-[#5FE3A1] uppercase tracking-wider font-semibold">
                  [ VERIFIED RESULT ]
                </h4>
                <p className="text-xs sm:text-sm text-[#A6ADB8] leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Interactive Architecture Flow Nodes */}
            <div className="space-y-4 pt-4 border-t border-[#242932]">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono text-[#F5F7FA] tracking-wider uppercase font-semibold flex items-center">
                  <Layers className="w-4 h-4 mr-2 text-[#7C5CFC]" />
                  DATA PIPELINE & SYSTEM NODE FLOW
                </h4>
                <span className="text-[11px] font-mono text-[#69717D]">
                  ANIMATED PATHWAYS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.architectureNodes.map((node, index) => (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="relative p-4 rounded-card bg-[#15181D] border border-[#242932] hover:border-[#7C5CFC] transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#7C5CFC] bg-[#7C5CFC]/10 px-2 py-0.5 rounded uppercase font-semibold">
                        NODE 0{index + 1} · {node.type}
                      </span>
                      {index < project.architectureNodes.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-[#69717D] group-hover:text-[#7C5CFC] transition-colors" />
                      )}
                    </div>
                    <h5 className="font-heading font-semibold text-sm text-[#F5F7FA] group-hover:text-[#7C5CFC] transition-colors">
                      {node.label}
                    </h5>
                    <p className="text-xs text-[#69717D] mt-1">
                      {node.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & Links */}
            <div className="flex flex-wrap items-center justify-between pt-6 border-t border-[#242932] gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#15181D] border border-[#242932] text-xs font-mono text-[#A6ADB8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#F5F7FA] hover:border-[#7C5CFC] transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  <span>GitHub Repository</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-btn bg-[#7C5CFC] text-white text-xs font-semibold hover:bg-[#9278FF] transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectXRayModal;
