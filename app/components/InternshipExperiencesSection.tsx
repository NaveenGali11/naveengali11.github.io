const internships = [
    {
        id: 1,
        company: "Rebecca Everlene Trust Company, Chicago, IL",
        role: "UX/UI Design Director",
        duration: "June 2024 - Present",
        icon: "💻",
        type: "Volunteer",
        isCurrent: true,
        responsibilities: [
            "Lead UX/UI strategy and mentor 3-5 designers on design best practices",
            "Translate business requirements into user flows and wireframes",
            "Manage end-to-end experience design from concept to developer handoff",
            "Collaborate with stakeholders to define product vision and roadmap"
        ]
    },
    {
        id: 2,
        company: "Mutual Mobile, Chicago, IL",
        role: "Software Engineer",
        duration: "Dec 2022 - Sep 2023",
        icon: "📱",
        type: "Full-time",
        responsibilities: [
            "Developed React Native features, boosting user engagement by 30%.",
            "Led TypeScript integration, reducing code errors by 25%.",
            "Optimized app performance using MobX State Tree, achieving 15% faster load times.",
            "Collaborated cross-functionally to enhance code quality and accelerate development.",
        ],
    },
    {
        id: 3,
        company: "Inventgrid India",
        role: "Application Developer → Web Application Developer",
        duration: "July 2021 - Dec 2022",
        icon: "🖥️",
        type: "Internship → Full-time",
        isCurrent: false,
        responsibilities: [
            "Optimized web apps (TypeScript/PHP), boosting performance by 30% and cutting load times by 15s.",
            "Implemented MobX State Tree for state management, reducing testing bugs by 25%.",
            "Saved ~20 hours per project through proactive code reviews and debugging sessions.",
            "Improved project delivery timelines by 40% via active participation in agile practices.",
        ],
    },
];

export const InternshipExperiencesSection = () => {
    return (
        <section className="py-12 sm:py-20 px-4 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
                    Professional Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {internships.map((internship) => (
                        <div
                            key={internship.id}
                            className="group bg-[#161B22] p-6 rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-[#21262D] transition-all flex flex-col"
                        >
                            {/* Card Header */}
                            <div className="mb-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-shrink-0 text-3xl">
                                        {internship.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                            {internship.company}
                                        </h3>
                                        <p className="text-lg font-semibold text-gray-200 mb-1">
                                            {internship.role}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {internship.duration}
                                        </p>
                                    </div>

                                    {/* Container for Star and Pill */}
                                    <div
                                        className="flex flex-col items-end gap-2 sm:flex-row sm:items-center flex-shrink-0">
                                        {internship.isCurrent && (
                                            <div title="Current Role">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-5 h-5 text-yellow-400"
                                                    aria-label="Current Role"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                        {internship.type && (
                                            <span
                                                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                                                    internship.type === "Volunteer"
                                                        ? "bg-green-900 text-green-200 border border-green-700"
                                                        : internship.type === "Full-time"
                                                        ? "bg-violet-900 text-violet-200 border border-violet-700"
                                                        : "bg-sky-900 text-sky-200 border border-sky-700"
                                                }`}
                                            >
                                                {internship.type}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Responsibilities List */}
                            <div className="flex-grow">
                                <p className="text-sm font-medium text-gray-300 mb-2">
                                    Key Responsibilities:
                                </p>
                                <ul className="space-y-2 list-disc list-inside">
                                    {internship.responsibilities.map((responsibility, index) => (
                                        <li
                                            key={index}
                                            className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                                        >
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};