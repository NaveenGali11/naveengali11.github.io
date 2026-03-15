import React from 'react';
import Image from 'next/image';


const education = [
    {
        id: 1,
        school: "Illinois Institute of Technology",
        degree: "Master of Science in Computer Science",
        duration: "Jan 2024 - May 2025",
        location: "Chicago, IL, USA",
        grade: "GPA: 3.20 / 4.0",
        logo: '/iit.jpg',
        logoAlt: 'Illinois Institute of Technology Logo',
    },
    {
        id: 2,
        school: "Bharath Institute of Higher Education and Research",
        degree: "Bachelors of Technology in Computer Science",
        location: "Chennai, India",
        duration: "July 2019 - May 2023",
        grade: "GPA: 9.0 / 10.0",
        logo: '/bu.png',
        logoAlt: 'Bharath University Chennai Logo',
    },
    {
        id: 3,
        school: "Founder Institute",
        degree: "Startup Founder Program",
        duration: "October 2025 - February 2026",
        location: "Chicago Chapter",
        grade: "",
        logo: '/fi-logo.png',
        logoAlt: 'Founder Institute Logo',
        description: "Selected for prestigious startup accelerator program. Working Group President leading peer learning sessions.",
    },
];

export const EducationSection = () => {
    return (
        <section className="py-12 sm:py-20 px-4 border-t border-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
                    Education & Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {education.map((edu) => (
                        <div
                            key={edu.id}
                            className={`group bg-[#161B22] p-6 rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-[#21262D] transition-all ${
                                edu.logo ? 'flex items-center' : 'flex flex-col'
                            }`}
                        >
                            {/* Logo Image */}
                            {edu.logo && (
                                <div className="flex-shrink-0 w-20 h-20 relative mr-5">
                                    <Image
                                        src={edu.logo}
                                        alt={edu.logoAlt}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            )}

                            {/* Education Details */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-1 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                    {edu.school}
                                </h3>
                                <p className="text-lg font-semibold text-gray-200 mb-1">
                                    {edu.degree}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {edu.location}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {edu.duration}
                                </p>
                                {edu.grade && (
                                    <p className="text-sm text-gray-400">
                                        {edu.grade}
                                    </p>
                                )}
                                {edu.description && (
                                    <p className="text-sm text-gray-300 mt-2">
                                        {edu.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};