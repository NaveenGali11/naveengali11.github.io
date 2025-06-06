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
    // Add more education history here
];

export const EducationSection = () => {
    return (
        <section className="py-12 sm:py-20 px-4 border-t border-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {education.map((edu) => (
                        <div
                            key={edu.id}
                            className="group bg-[#161B22] p-6 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-[#21262D] transition-all flex items-center" // added items-center
                        >
                            {/* Logo Image */}
                            {edu.logo && (
                                <div className="flex-shrink-0 w-16 h-16 relative mr-5">
                                    <Image
                                        src={edu.logo}
                                        alt={edu.logoAlt}
                                        layout="fill"
                                        objectFit="contain" // Use "contain" to prevent stretching the logo
                                    />
                                </div>
                            )}

                            {/* Education Details */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-1 text-blue-400 group-hover:text-blue-300 transition-colors">
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
                                <p className="text-sm text-gray-400">
                                    {edu.grade}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};