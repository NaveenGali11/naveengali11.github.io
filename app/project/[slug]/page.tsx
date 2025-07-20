import {projects} from "@/app/projects";
import Link from "next/link";
import {notFound} from "next/navigation";
import ProjectView from "./project-view";

// This server function tells Next.js which pages to build
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// This is a Server Component. Its only job is to get data.
export default function ProjectPage({params}: { params: { slug: string } }) {
    const project = projects.find((project) => project.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-[#0D1117] text-white min-h-screen">
            <header
                className="py-4 px-4 sm:px-8 border-b border-gray-800 sticky top-0 bg-[#0D1117]/80 backdrop-blur-sm z-20">
                <Link href="/#work" className="text-blue-400 hover:text-blue-300 transition-colors">
                    &larr; Back to Projects
                </Link>
            </header>
            <main className="max-w-4xl mx-auto p-4 sm:p-8">
                {/* It renders the client component with the final data */}
                <ProjectView project={project}/>
            </main>
        </div>
    );
}