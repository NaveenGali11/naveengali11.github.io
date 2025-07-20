import {ContactSection} from "./components/ContactSection";
import {HeroSection} from "./components/HeroSection";
import {InternshipExperiencesSection} from "./components/InternshipExperiencesSection";
import {ProjectsSection} from "./components/ProjectsSection";
import {EducationSection} from "./components/CollegeSection";
import {PhilosophySection} from "@/app/components/PhilosophySection";
import {CoreCompetenciesSection} from "@/app/components/CoreCompetenciesSection";

export default function WebDeveloperPortfolio() {
    return (
        <main className="min-h-screen bg-[#0D1117] text-white">
            <HeroSection/>
            <PhilosophySection/>
            <ProjectsSection/>
            <CoreCompetenciesSection/>
            <InternshipExperiencesSection/>
            <EducationSection/>
            <ContactSection/>
        </main>
    );
}
