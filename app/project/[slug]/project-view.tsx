import Image from "next/image";
import Link from "next/link";
import type {Project, ProjectImage} from "@/app/projects";

const sectionClass = "mt-12 border-t border-rule pt-7 sm:mt-16 sm:pt-9";
const headingClass = "mb-4 text-2xl font-semibold tracking-tight sm:text-3xl";
const bodyClass = "max-w-prose leading-relaxed text-muted";

function Screenshot({url, alt, caption, width, height}: ProjectImage) {
    return (
        <figure>
            <a href={url} target="_blank" rel="noopener noreferrer"
               className="block rounded-lg" aria-label={`Open full-size image: ${alt}`}>
                <Image src={url} alt={alt} width={width} height={height}
                       sizes="(min-width: 1024px) 960px, 94vw"
                       className="block h-auto max-h-[42rem] w-full rounded-lg border border-rule bg-linen object-contain"/>
            </a>
            {caption && <figcaption className="mt-3 text-sm leading-relaxed text-muted">{caption}</figcaption>}
        </figure>
    );
}

export default function ProjectView({project}: {project: Project}) {
    return (
        <article>
            <header>
                <p className="mb-3 text-sm font-semibold text-forest">{project.status}</p>
                <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    {project.title}
                </h1>
                <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted sm:text-xl">{project.description}</p>
                {project.role && <p className="mt-4 font-medium">{project.role}</p>}
                {!!project.artifacts?.length && (
                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                        {project.artifacts.map(({href, label}) => (
                            <li key={href}>
                                <Link href={href} target="_blank" rel="noopener noreferrer"
                                      className="font-semibold text-forest underline decoration-forest/40 underline-offset-4 hover:decoration-current">
                                    {label} <span aria-hidden="true">↗</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </header>

            {project.image && (
                <div className="mt-9 sm:mt-12">
                    <Screenshot {...project.image}/>
                </div>
            )}

            {project.projectGoal && (
                <section className={sectionClass}>
                    <h2 className={headingClass}>Project goal</h2>
                    <p className={bodyClass}>{project.projectGoal}</p>
                </section>
            )}

            {project.techDetails.length > 0 && (
                <section className={sectionClass}>
                    <h2 className={headingClass}>{project.type === "design" ? "Design decisions" : "Implementation and methods"}</h2>
                    <ul className={`list-disc space-y-3 pl-5 marker:text-forest ${bodyClass}`}>
                        {project.techDetails.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                </section>
            )}

            {project.type === "dev" && project.techStackDetails && (
                <section className={sectionClass}>
                    <h2 className={headingClass}>Engineering decisions</h2>
                    <dl className="grid gap-4 sm:grid-cols-2">
                        {project.techStackDetails.map(({name, description}) => (
                            <div key={name} className="rounded-lg border border-rule bg-linen p-5">
                                <dt className="font-semibold">{name}</dt>
                                <dd className="mt-2 leading-relaxed text-muted">{description}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            )}

            {project.results && (
                <section className={sectionClass}>
                    <h2 className={headingClass}>Results and limitations</h2>
                    <ul className={`list-disc space-y-3 pl-5 marker:text-forest ${bodyClass}`}>
                        {project.results.map(result => <li key={result}>{result}</li>)}
                    </ul>
                </section>
            )}

            {project.screenshots && (
                <section className={sectionClass}>
                    <h2 className={headingClass}>Review and run receipt</h2>
                    <div className="grid items-start gap-6 sm:grid-cols-2">
                        {project.screenshots.map(screenshot => <Screenshot key={screenshot.url} {...screenshot}/>)}
                    </div>
                </section>
            )}

            {project.type === "design" && (
                <section className={sectionClass}>
                    <h2 className={headingClass}>Screens and components</h2>
                    <div className="grid items-start gap-8 sm:grid-cols-2">
                        {project.screenGallery.map(item => (
                            <div key={item.title}>
                                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                                <Screenshot {...item.image} caption={item.description}/>
                            </div>
                        ))}
                        {project.componentGallery.map(item => (
                            <div key={item.title} className="sm:col-span-2">
                                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                                <Screenshot {...item.image}
                                            caption={`${item.description} ${item.designRationale}`}/>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </article>
    );
}
