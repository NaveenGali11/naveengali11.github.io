export const CoreCompetenciesSection = () => {
    const skillCategories = [
        {title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Java"]},
        {title: "Web and mobile", skills: ["React", "Next.js", "React Native", "HTML/CSS", "Storybook"]},
        {title: "Backend and APIs", skills: ["Node.js", "Express", "FastAPI", "Django", "Spring Boot", "REST", "GraphQL", "WebSockets"]},
        {title: "Data and geospatial", skills: ["SQL", "PostgreSQL", "PostGIS", "pgvector", "Redis", "DuckDB", "MongoDB", "H3", "Mapbox", "D3"]},
        {title: "Applied AI and retrieval", skills: ["RAG", "Retrieval and reranking", "Evaluation", "LangChain", "LangGraph", "Structured outputs"]},
        {title: "Cloud and delivery", skills: ["AWS", "Docker", "Vercel", "GitHub Actions", "CI/CD"]},
        {title: "Testing and observability", skills: ["Jest", "Playwright", "Prometheus", "CloudWatch"]},
    ];

    return (
        <section className="py-12 sm:py-20 px-4 border-t border-rule bg-parchment">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-linen p-6 rounded-lg border border-rule"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-lg font-bold text-ink">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="text-forest">▹</span>
                                        <span className="text-muted text-sm">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
