import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ResearchSection } from "./components/ResearchSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/CollegeSection";
import { CoreCompetenciesSection } from "@/app/components/CoreCompetenciesSection";

export default function WebDeveloperPortfolio() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <div className="editorial bg-paper text-ink">
                <ProjectsSection />
                <ExperienceSection />
                <ResearchSection />
                <CoreCompetenciesSection />
                <EducationSection />
                <ContactSection />
            </div>
        </main>
    );
}
