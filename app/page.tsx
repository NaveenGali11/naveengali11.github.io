import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { InternshipExperiencesSection } from "./components/InternshipExperiencesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { WebCapabilitiesSection } from "./components/WebCapabilitiesSection";

export default function WebDeveloperPortfolio() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <HeroSection />
      <SkillsSection />
      <InternshipExperiencesSection />
      <ProjectsSection />
      <WebCapabilitiesSection />
      <ContactSection />
    </main>
  );
}
