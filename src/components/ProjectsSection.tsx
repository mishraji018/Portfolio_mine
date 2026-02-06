import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Assistant",
    description: "An intelligent conversational AI powered by NLP and deep learning for customer support automation.",
    tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
    github: "#",
    live: "#",
  },
  {
    title: "Image Recognition System",
    description: "Computer vision application for real-time object detection and classification using CNNs.",
    tech: ["PyTorch", "OpenCV", "YOLO", "Flask"],
    github: "#",
    live: "#",
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "ML-powered analytics platform for business forecasting and data visualization.",
    tech: ["Scikit-learn", "Pandas", "React", "D3.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Smart Recommendation Engine",
    description: "Personalized recommendation system using collaborative filtering and content-based algorithms.",
    tech: ["Python", "AWS", "MongoDB", "Redis"],
    github: "#",
    live: "#",
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
            <span className="text-glow-purple text-glow-purple">Projects</span>
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
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;