import Link from "next/link";

const experience = [
    {
        company: "Data Strategy Lab",
        role: "AI Engineer (Contract)",
        duration: "Sep 2026–Present",
        icon: "🧠",
        responsibilities: [
            "Built and deployed retrieval-augmented generation (RAG) prototypes for internal documents, covering ingestion, retrieval, reranking, generation, evaluation, APIs, and frontend interfaces.",
            "Worked with clients to define requirements, architecture, structured outputs, acceptance criteria, and evaluation plans.",
        ],
        techStack: ["TypeScript", "Python", "FastAPI", "Convex", "LangChain", "LangGraph", "Vercel", "AWS"],
    },
    {
        company: "Polyhistor Inc",
        role: "Software Engineer & Technical Lead",
        duration: "Oct 2025–Aug 2026",
        location: "Washington, DC",
        icon: "🌍",
        responsibilities: [
            "Led architecture and implementation with a small team, building TypeScript and React neighborhood-insight pages and APIs for walkability, greenery, and noise for the first enterprise pilot.",
            "Replaced the Pandas ingestion path with disk-backed DuckDB and Parquet to process more than 3.55 million Overture Maps places.",
        ],
        techStack: ["TypeScript", "React", "DuckDB", "PostgreSQL", "PostGIS", "Docker", "Amazon EC2"],
        caseStudy: "/project/polyhistor-travel-platform",
    },
    {
        company: "Rebecca Everlene",
        role: "Software Development Engineer II",
        duration: "Jan 2025–Jan 2026",
        location: "Chicago, IL",
        icon: "💻",
        responsibilities: [
            "Coordinated 12 engineers across React Native and Node.js to bring Landmarks to public beta in four months with zero critical defects.",
            "Built a Storybook component library that reduced feature delivery time by 30%. Used Jest, Playwright, and GitHub Actions to support testing and code review.",
        ],
    },
    {
        company: "Grid Dynamics",
        role: "Software Engineer",
        duration: "Dec 2022–Sep 2023",
        location: "Hyderabad, India",
        icon: "📱",
        responsibilities: [
            "Migrated 150,000+ lines of React Native code to strict TypeScript with zero breaking changes.",
            "Worked on Java and Spring Boot services that handled 50,000+ daily transactions at 99.9% uptime.",
            "Reduced the Android crash rate by 15% through list profiling, memoized Redux selectors, and FlashList.",
        ],
    },
    {
        company: "IG Defence",
        role: "Software Engineer",
        duration: "Jul 2020–Dec 2022",
        location: "Hyderabad, India",
        icon: "🖥️",
        responsibilities: [
            "Rebuilt authentication and dashboard flows across 10,000+ business accounts using OAuth 2.0 and JWT refresh-token rotation, increasing retention by 50%.",
            "Built WebSocket and Redis notifications that cut alert latency from minutes to under two seconds.",
            "Introduced TypeScript, reducing type-related production defects by 80% within six months.",
        ],
    },
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-12 sm:py-20 px-4 border-t border-rule bg-parchment">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
                    Professional Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {experience.map((role) => (
                        <div
                            key={role.company}
                            className="bg-linen p-6 rounded-lg border border-rule flex flex-col"
                        >
                            {/* Card Header */}
                            <div className="mb-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-shrink-0 text-3xl">
                                        {role.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-ink">
                                            {role.company}
                                        </h3>
                                        <p className="text-lg font-semibold text-ink mb-1">
                                            {role.role}
                                        </p>
                                        <p className="text-sm text-muted">
                                            {role.duration}
                                        </p>
                                        {role.location && (
                                            <p className="text-xs text-muted mt-0.5">
                                                {role.location}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Responsibilities List */}
                            <div className="flex-grow">
                                <ul className="space-y-2 list-disc list-inside">
                                    {role.responsibilities.map((responsibility, index) => (
                                        <li
                                            key={index}
                                            className="text-sm text-muted"
                                        >
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {role.caseStudy && (
                                <Link href={role.caseStudy} target="_blank" rel="noopener noreferrer"
                                      className="mt-4 text-sm font-semibold text-forest underline decoration-forest/40 underline-offset-4 hover:decoration-current">
                                    Read the Polyhistor pilot case study
                                </Link>
                            )}

                            {/* Tech Stack Pills */}
                            {role.techStack && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {role.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-forest-pale text-forest-deep"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
