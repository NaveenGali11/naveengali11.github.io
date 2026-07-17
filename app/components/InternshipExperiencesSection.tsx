const internships = [
    {
        id: 1,
        company: "Polyhistor Inc",
        location: "Washington, DC",
        role: "Founding Engineer – Geospatial AI Platform",
        duration: "Oct 2025 – Present",
        icon: "🌍",
        type: "Full-time",
        isCurrent: true,
        responsibilities: [
            "Architected and shipped a distributed, consumer-facing location intelligence API at scale, serving contextual search over 3.55M+ points of interest using PostgreSQL, PostGIS, pgvector, and H3-based crowd signals.",
            "Cut warm-cache response time to 19ms — a 24x improvement over baseline and 98.7% lower infrastructure cost at 1M requests/month — by instrumenting per-layer latency and re-engineering the dynamic geospatial index.",
            "Served as backend partner to an external company (Inhotel Inc) on a European city pilot, designing and exposing customer-facing APIs that compute walkability, greenery, and noise scores from multi-source urban data.",
            "Shipped a React Native consumer app with LLM-driven itinerary generation, cutting user planning time by 40% and scaling to 2,000+ concurrent users on AWS (Lambda, S3, DynamoDB).",
            "Owned the AWS deployment lifecycle end-to-end — EC2, S3, Lambda, IAM, and CI/CD via GitHub Actions — for the production Polyhistor API.",
            "Containerized and orchestrated backend services with Docker and Kubernetes, standardizing local-to-production parity across the team.",
        ],
        techStack: ["PostgreSQL", "PostGIS", "pgvector", "H3", "React Native", "Next.js", "AWS", "Docker", "Kubernetes"],
    },
    {
        id: 2,
        company: "Rebecca Everlene Trust Company",
        location: "Chicago, IL",
        role: "Software Development Engineer II (SDE-2)",
        duration: "June 2025 – June 2026",
        icon: "💻",
        type: "Full-time",
        isCurrent: false,
        responsibilities: [
            "Led a cross-functional team of 12 engineers and stakeholders, translating business requirements into React Native technical specs for \"Landmarks,\" a gamified consumer app.",
            "Instituted CI/CD pipelines and code review standards, reviewing and merging 25+ pull requests with zero critical production regressions.",
            "Shipped the beta release ahead of schedule by building a reusable, scalable component library adopted across the client-side codebase.",
        ],
    },
    {
        id: 3,
        company: "Mutual Mobile",
        location: "Hyderabad, India",
        role: "Software Development Engineer I (SDE-1)",
        duration: "Dec 2022 – Sept 2023",
        icon: "📱",
        type: "Full-time",
        isCurrent: false,
        responsibilities: [
            "Led a JavaScript-to-TypeScript migration on a Fortune 500 consumer mobile app, improving runtime performance by 25% and eliminating entire classes of production errors.",
            "Reduced crash rates by 15% on legacy Android devices by profiling and optimizing list rendering and Redux state management.",
            "Partnered daily with designers, PMs, and backend engineers to ship pixel-perfect, cross-platform features under tight deadlines.",
        ],
    },
    {
        id: 4,
        company: "Inventgrid",
        location: "India",
        role: "Application Developer",
        duration: "July 2020 – Dec 2022",
        icon: "🖥️",
        type: "Full-time",
        isCurrent: false,
        responsibilities: [
            "Increased user retention by 50% by rebuilding core authentication and dashboard flows at the product's primary onboarding drop-off point.",
            "Cut initial data load times by 40% by replacing blocking synchronous API calls with optimized asynchronous data-bridging patterns across the full stack.",
            "Collaborated directly with founders/product leads in an early-stage environment, owning features from spec to deployment with minimal oversight.",
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
                                        {internship.location && (
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                📍 {internship.location}
                                            </p>
                                        )}
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

                            {/* Tech Stack Pills */}
                            {(internship as { techStack?: string[] }).techStack && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {(internship as { techStack: string[] }).techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800 group-hover:border-cyan-600 transition-colors"
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