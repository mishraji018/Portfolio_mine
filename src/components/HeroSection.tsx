import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-glow-green rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for work</span>
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary text-glow-cyan">John</span>
        </h1>

        {/* Role */}
        <div
          className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground font-medium">Full Stack Developer</span>
          <span className="mx-3 text-border">|</span>
          <span>Creating digital experiences</span>
        </div>

        {/* Description */}
        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          I build modern web applications with clean code and stunning interfaces.
          Passionate about creating seamless user experiences that make a difference.
        </p>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 mb-16 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#" },
            { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#" },
            { icon: <Mail className="w-5 h-5" />, label: "Email", href: "#" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={cn(
                "glass rounded-full p-3 transition-all duration-300",
                "hover:glow-cyan hover:border-glow-cyan/50 hover:text-primary",
                "text-muted-foreground"
              )}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#skills"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Explore Skills</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
