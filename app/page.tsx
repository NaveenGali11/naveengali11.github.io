import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { InternshipExperiencesSection } from "./components/InternshipExperiencesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/CollegeSection";
import { CoreCompetenciesSection } from "@/app/components/CoreCompetenciesSection";

export default function WebDeveloperPortfolio() {
    return (
        <main className="min-h-screen bg-[#0D1117] text-white">
            <HeroSection />
            <CoreCompetenciesSection />
            <ProjectsSection />
            <InternshipExperiencesSection />
            <EducationSection />
            <ContactSection />
        </main>
    );
}
