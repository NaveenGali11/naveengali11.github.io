import Image from "next/image";
import Link from "next/link";
import {projects} from "@/app/projects";

export const ProjectsSection = () => (
    <section id="work" className="scroll-mt-8 px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Selected Work</h2>
            <div className="mt-8 divide-y divide-rule border-y border-rule">
                {projects.filter(project => project.featured).map(project => (
                    <article key={project.slug} className="grid items-center gap-6 py-9 sm:py-12 md:grid-cols-2 md:gap-12 lg:gap-16">
                        <div>
                            <p className="mb-3 text-sm font-medium text-muted">{project.status}</p>
                            <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                                {project.title}
                            </h3>
                            <p className="mt-4 max-w-lg leading-relaxed text-muted">{project.description}</p>
                            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted" aria-label="Technologies">
                                {project.techStack.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>
                            <Link href={`/project/${project.slug}`} aria-label={`View case study: ${project.title}`}
                                  target="_blank" rel="noopener noreferrer"
                                  className="mt-6 inline-flex items-center gap-2 font-semibold text-forest underline decoration-forest/40 underline-offset-4 hover:decoration-current">
                                View case study <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        {project.image && (
                            <figure>
                                <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-rule bg-parchment">
                                    <Image src={project.image.url} alt={project.image.alt} fill
                                           sizes="(min-width: 1200px) 544px, (min-width: 768px) 45vw, 94vw"
                                           className="object-contain"/>
                                </div>
                                {project.coverLabel && (
                                    <figcaption className="mt-2 text-sm text-muted">{project.coverLabel}</figcaption>
                                )}
                            </figure>
                        )}
                    </article>
                ))}
            </div>
        </div>
    </section>
);
