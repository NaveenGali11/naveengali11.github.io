export const CoreCompetenciesSection = () => {
    const skillCategories = [
        {
            title: "🤖 AI & LLM Engineering",
            icon: "🧠",
            skills: [
                "Multi-Agent Systems",
                "Prompt Engineering & Orchestration",
                "Claude/Gemini/Perplexity APIs",
            ],
        },
        {
            title: "⚛️ Frontend & Mobile",
            icon: "📱",
            skills: [
                "React Native (Fabric)",
                "TypeScript",
                "Next.js",
            ],
        },
        {
            title: "🔧 Backend & Cloud",
            icon: "⚙️",
            skills: [
                "Node.js",
                "PostgreSQL",
                "AWS & Apache Kafka",
            ],
        },
        {
            title: "📍 Geospatial Systems",
            icon: "🌍",
            skills: [
                "D-GIX Spatial Indexing",
                "Location-Based Services",
                "GPS Optimization",
            ],
        },
    ];

    return (
        <section className="py-12 sm:py-20 px-4 bg-[#161B22]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
                    Core Competencies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="group bg-[#21262D] p-6 rounded-lg border border-transparent hover:border-cyan-500 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="text-lg font-bold text-gray-200">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="text-cyan-400">▹</span>
                                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
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