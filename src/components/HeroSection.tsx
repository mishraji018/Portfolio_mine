import { useState, useEffect, useRef } from "react";
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

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 500);
    }, 3500);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* hero section background image */}
      <img
        src="/mine1.png"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none z-0"
      />

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

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
              <img
                src="/photo.png"
                alt="Profile"
                className="absolute left-10 top-0 h-full w-1/2 object-cover object-center opacity-15 pointer-events-none z-0"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="text-center md:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-glow-green rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Main heading with rotating text */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
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
              style={{ animationDelay: "0.3s" }}
            >
              <span className="text-foreground font-medium">AI Engineer</span>
              <span className="mx-3 text-border">|</span>
              <span>Building intelligent solutions</span>
            </div>

            {/* Description */}
            <p
              className="text-muted-foreground max-w-2xl md:mx-0 mx-auto mb-12 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Passionate about artificial intelligence, machine learning, and creating
              innovative solutions that push the boundaries of technology.
            </p>

            {/* Social links & Resume Button */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center justify-center md:justify-start gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/mishraji018" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/%E1%B4%98%E1%B4%80%E1%B4%A1%E1%B4%80%C9%B4-%E1%B4%8B%E1%B4%9C%E1%B4%8D%E1%B4%80%CA%80-%E1%B4%8D%C9%AA%EA%9C%B1%CA%9C%CA%80%E1%B4%80-7b9791321/" },
                  { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:pmishra2084@gmail.com" },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                      </svg>
                    ),
                    label: "LeetCode",
                    href: "https://leetcode.com/u/pawan_018/",
                  },
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

              <div className="flex justify-center md:justify-start">
                <a
                  href="/Resume.pdf"
                  download="MyResume.pdf"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:glow-cyan hover:scale-105 active:scale-95"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 animate-fade-in animate-float text-center"
          style={{ animationDelay: "0.6s" }}
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
