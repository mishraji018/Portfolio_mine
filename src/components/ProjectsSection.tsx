import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Voice Assistant AI",
    description: "Jarvis-style AI assistant with neural TTS, Gemini AI brain & HUD interface",
    tech: ["Python", "Gemini AI", "Edge TTS", "SQLite"],
    github: "https://github.com/mishraji018/Voice_assistant_anti",
    live: "https://mishraji018.github.io/Voice_assistant_anti/",
  },
  {
    title: "Task Caretaker",
    description: "Task management automation tool",
    tech: ["React", "Node.js", "MongoDB", "Automation"],
    github: "https://github.com/mishraji018/task_caretaker",
    live: "https://github.com/mishraji018/task_caretaker",
  },
  {
    title: "Delhi Visit",
    description: "AI-powered Delhi tour guide with smart planner & mini explorer",
    tech: ["React", "JavaScript", "Groq API", "TailwindCSS"],
    github: "https://github.com/mishraji018/Delhi-visit",
    live: "https://delhi-visit.vercel.app",
  },
  {
    title: "Solar System",
    description: "Interactive 3D solar system simulation with cinematic visuals",
    tech: ["JavaScript", "Three.js", "HTML", "CSS"],
    github: "https://github.com/mishraji018/Solar-System",
    live: "https://solar-system-sepia-ten.vercel.app/", 
  },
  {
    title: "FoodAR — Premium Dine-In",
    description: "Futuristic AR-powered dining experience with AI-chef assist, real-time tracking, and scifi HUD interface.",
    tech: ["React", "Three.js", "Framer Motion", "TanStack"],
    github: "https://github.com/mishraji018/fooder-order",
    live: "https://fooder-order-ten.vercel.app", 
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-glow-purple">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my AI and engineering projects that demonstrate my skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group glass-card rounded-xl p-6 transition-all duration-500",
                "hover:glow-purple hover:border-glow-purple/50 hover:scale-[1.02]",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-glow-purple transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-4">
                {project.github && project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-muted-foreground/40 cursor-not-allowed select-none" aria-disabled="true">
                    <Github className="w-4 h-4" />
                    Code
                  </span>
                )}
                {project.live && project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-muted-foreground/40 cursor-not-allowed select-none" aria-disabled="true">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </span>
                )}

                {/* Open Project button */}
                {project.github && project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium
                               bg-glow-purple/10 border border-glow-purple/30 text-glow-purple
                               hover:bg-glow-purple/20 hover:border-glow-purple/60 hover:glow-purple
                               transition-all duration-300"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Project
                  </a>
                ) : (
                  <span
                    className="ml-auto flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium
                               bg-secondary/50 border border-border text-muted-foreground/40
                               cursor-not-allowed select-none"
                    aria-disabled="true"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;