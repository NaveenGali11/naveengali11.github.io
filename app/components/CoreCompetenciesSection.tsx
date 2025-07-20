export const CoreCompetenciesSection = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: "🎨",
            skills: ["React.js", "React Native", "TypeScript", "Redux", "HTML & CSS"],
        },
        {
            title: "Backend & APIs",
            icon: "⚡",
            skills: ["Node.js", "Express.js", "RESTful APIs", "PostgreSQL", "MySQL", "Firebase"],
        },
        {
            title: "Performance & DevOps",
            icon: "🚀",
            skills: ["Web Performance", "Mobile Performance", "AWS Amplify", "GitHub Actions", "Docker"],
        },
        {
            title: "AI & Search",
            icon: "🧠",
            skills: ["OpenAI (GPT, Embeddings)", "Elasticsearch", "Prompt Engineering"],
        },
        {
            title: "Browser APIs & Real-time",
            icon: "🔧",
            skills: ["Web Workers", "Service Workers", "WebRTC", "Push Notifications"],
        },
        {
            title: "Security",
            icon: "🔒",
            skills: ["JWT Authentication", "CORS Configuration", "Security Headers"],
        },
    ];

    return (
        <section className="py-12 sm:py-20 px-4 bg-[#161B22]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
                    Core Competencies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="group bg-[#21262D] p-6 rounded-lg border border-transparent hover:border-blue-500 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="text-xl font-bold text-gray-200">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <span className="text-green-400">▹</span>
                                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
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