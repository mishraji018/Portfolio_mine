import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div id="skills">
        <SkillsSection />
      </div>
    </div>
  );
};

export default Index;
