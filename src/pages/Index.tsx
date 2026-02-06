import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import InternshipsSection from "@/components/InternshipsSection";
import AcademicsSection from "@/components/AcademicsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div id="skills">
        <SkillsSection />
      </div>
      <ProjectsSection />
      <InternshipsSection />
      <AcademicsSection />
    </div>
  );
};

export default Index;