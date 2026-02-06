import { cn } from "@/lib/utils";

type GlowColor = "cyan" | "purple" | "green" | "orange" | "pink";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level?: number;
  glowColor?: GlowColor;
}

const glowStyles: Record<GlowColor, string> = {
  cyan: "hover:glow-cyan hover:border-glow-cyan/50",
  purple: "hover:glow-purple hover:border-glow-purple/50",
  green: "hover:glow-green hover:border-glow-green/50",
  orange: "hover:glow-orange hover:border-glow-orange/50",
  pink: "hover:glow-pink hover:border-glow-pink/50",
};

const iconColors: Record<GlowColor, string> = {
  cyan: "group-hover:text-glow-cyan",
  purple: "group-hover:text-glow-purple",
  green: "group-hover:text-glow-green",
  orange: "group-hover:text-glow-orange",
  pink: "group-hover:text-glow-pink",
};

const SkillCard = ({ name, icon, level = 80, glowColor = "cyan" }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "group relative glass-card rounded-xl p-6 cursor-pointer",
        "transition-all duration-500 ease-out",
        "hover:scale-105 hover:-translate-y-1",
        glowStyles[glowColor]
      )}
    >
      {/* Glow background effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500",
          "group-hover:opacity-100",
          "bg-gradient-radial from-transparent to-transparent",
          glowColor === "cyan" && "group-hover:bg-glow-cyan/5",
          glowColor === "purple" && "group-hover:bg-glow-purple/5",
          glowColor === "green" && "group-hover:bg-glow-green/5",
          glowColor === "orange" && "group-hover:bg-glow-orange/5",
          glowColor === "pink" && "group-hover:bg-glow-pink/5"
        )}
      />

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Icon */}
        <div
          className={cn(
            "text-4xl text-muted-foreground transition-all duration-300",
            iconColors[glowColor]
          )}
        >
          {icon}
        </div>

        {/* Name */}
        <h3 className="font-medium text-foreground/90 group-hover:text-foreground transition-colors">
          {name}
        </h3>

        {/* Skill level bar */}
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-700 ease-out",
              "group-hover:opacity-100 opacity-60",
              glowColor === "cyan" && "bg-glow-cyan",
              glowColor === "purple" && "bg-glow-purple",
              glowColor === "green" && "bg-glow-green",
              glowColor === "orange" && "bg-glow-orange",
              glowColor === "pink" && "bg-glow-pink"
            )}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
