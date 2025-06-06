const internships = [
    {
        id: 1,
        company: "Rebecca Everlene Trust Company, Chicago, IL",
        role: "UX/UI Design Director",
        duration: "June 2025 - Present",
        icon: "💻",
        type: "Volunteer",
        isCurrent: true,
        responsibilities: [
            "Directed UX/UI design for 'Landmarks,' a GPS-based Unity game for kidnapping prevention.",
            "Developed game mechanics to help children identify safe, memorable locations in their neighborhood.",
            "Designed a location-based game that merges physical and virtual realities using Google gaming technology.",
            "Assisted in managing a cross-functional team of UI/UX designers and Unity developers."
        ]
    },
    {
        id: 2,
        company: "Mutual Mobiles",
        role: "React Native Intern",
        duration: "Dec 2022 - Sep 2023",
        icon: "📱",
        type: "Internship",
        responsibilities: [
            "Developed React Native features, boosting user engagement by 30%.",
            "Led TypeScript integration, significantly reducing code errors by 25%.",
            "Optimized app performance using MobX State Tree, achieving a 15% reduction in load times.",
            "Collaborated cross-functionally to enhance code quality and accelerate development.",
        ],
    },
    {
        id: 3,
        company: "Inventgrid India",
        role: "Application Developer Intern",
        duration: "July 2022 - Dec 2022",
        icon: "🖥️",
        type: "Internship",
        responsibilities: [
            "Optimized web apps (TypeScript/PHP), boosting performance by 30% & cutting load times by 15s.",
            "Implemented MobX State Tree for state management, reducing testing bugs by 25%.",
            "Saved ~20 hours per project through proactive code reviews and debugging sessions.",
            "Improved project delivery timelines by 40% via active participation in agile practices.",
        ],
    },
    {
        id: 4,
        company: "Inventgrid India",
        role: "Web Application Developer",
        duration: "July 2021 - July 2022",
        icon: "💻",
        type: "Internship",
        responsibilities: [
            "Spearheaded efforts boosting application performance by 30% using TypeScript and PHP.",
            "Implemented coding strategies that reduced web application load times by 25%.",
            "Streamlined project workflows through cross-functional collaboration, improving delivery timelines by 40%.",
            "Directed user experience design initiatives, creating intuitive interfaces and increasing user engagement.",
        ],
    },
    // Add more internship objects here as needed
];

export const InternshipExperiencesSection = () => {
    return (
        <section className="py-12 sm:py-20 px-4 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
                    Internship Experiences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {internships.map((internship) => (
                        <div
                            key={internship.id}
                            className="group bg-[#161B22] p-6 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-[#21262D] transition-all flex flex-col"
                        >
                            {/* Card Header */}
                            <div className="mb-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-shrink-0 text-3xl">
                                        {internship.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
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
                                                {/* UPDATED SOLID STAR SVG */}
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