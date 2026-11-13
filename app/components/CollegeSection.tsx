import React from 'react';
import Image from 'next/image';


const educationAndLeadership = [
    {
        category: "Education",
        organization: "Illinois Institute of Technology",
        title: "Master of Science in Computer Science",
        duration: "Jan 2024–May 2025",
        location: "Chicago, IL",
        logo: "/iit.jpg",
    },
    {
        category: "Leadership",
        organization: "Founder Institute",
        title: "Working Group President",
        duration: "Oct 2025–Feb 2026",
        location: "Washington DC Cohort",
        logo: "/fi-logo.png",
    },
];

export const EducationSection = () => {
    return (
        <section className="py-12 sm:py-20 px-4 border-t border-rule text-ink">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
                    Education & Leadership
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {educationAndLeadership.map((edu) => (
                        <div
                            key={edu.organization}
                            className={`bg-linen p-6 rounded-lg border border-rule ${
                                edu.logo ? 'flex items-center' : 'flex flex-col'
                            }`}
                        >
                            {/* Logo Image */}
                            {edu.logo && (
                                <div className="flex-shrink-0 w-20 h-20 relative mr-5">
                                    <Image
                                        src={edu.logo}
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}

                            {/* Education Details */}
                            <div className="flex-grow">
                                <p className="mb-1 text-sm text-muted">{edu.category}</p>
                                <h3 className="text-xl font-bold mb-1 text-ink">
                                    {edu.organization}
                                </h3>
                                <p className="text-lg font-semibold text-ink mb-1">
                                    {edu.title}
                                </p>
                                <p className="text-sm text-muted">
                                    {edu.location}
                                </p>
                                <p className="text-sm text-muted">
                                    {edu.duration}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
