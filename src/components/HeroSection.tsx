import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const rotatingTexts = [
  "Pawan",
  "an Engineer",
  "an AI Enthusiast",
  "a Problem Solver",
  "a Tech Explorer",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Main heading with rotating text */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-foreground">Hi, I'm </span>
          <span
            className={cn(
              "text-primary text-glow-cyan inline-block min-w-[200px] md:min-w-[320px] transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
          >
            {rotatingTexts[currentIndex]}
          </span>
        </h1>

        {/* Role */}
        <div
          className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground font-medium">AI Engineer</span>
          <span className="mx-3 text-border">|</span>
          <span>Building intelligent solutions</span>
        </div>

        {/* Description */}
        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Passionate about artificial intelligence, machine learning, and creating 
          innovative solutions that push the boundaries of technology.
        </p>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 mb-16 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/mishraji018" },
            { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/%E1%B4%98%E1%B4%80%E1%B4%A1%E1%B4%80%C9%B4-%E1%B4%8B%E1%B4%9C%E1%B4%8D%E1%B4%80%CA%80-%E1%B4%8D%C9%AA%EA%9C%B1%CA%9C%CA%80%E1%B4%80-7b9791321/" },
            { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:pmishra2084@gmail.com" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
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
            <span className="text-sm">Explore More</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;