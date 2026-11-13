import {projects} from "@/app/projects";
import {portfolioMetadata} from "@/app/portfolio-metadata";
import Link from "next/link";
import {notFound} from "next/navigation";
import ProjectView from "./project-view";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

type ProjectPageProps = {params: {slug: string}};

export function generateMetadata({params}: ProjectPageProps) {
    const project = projects.find(project => project.slug === params.slug);
    if (!project) {
        notFound();
    }

    return portfolioMetadata({
        title: `${project.title} | Naveen Gali`,
        description: project.description,
        path: `/project/${project.slug}`,
        image: project.image,
    });
}

export default function ProjectPage({params}: ProjectPageProps) {
    const project = projects.find(project => project.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="editorial min-h-screen bg-paper text-ink">
            <header
                className="sticky top-0 z-20 border-b border-rule bg-paper/95 px-5 py-4 backdrop-blur-sm sm:px-8">
                <Link href="/#work" target="_blank" rel="noopener noreferrer"
                      className="mx-auto block max-w-5xl font-semibold text-forest underline decoration-forest/40 underline-offset-4 hover:decoration-current">
                    &larr; Selected Work
                </Link>
            </header>
            <main className="mx-auto max-w-5xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
                <ProjectView project={project}/>
            </main>
        </div>
    );
}
