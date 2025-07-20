"use client";

import Image from "next/image";
import Link from "next/link";
import {projects} from "@/app/projects";
import {motion} from "framer-motion"; // Import motion

export const ProjectsSection = () => {
    return (
        <section id="work" className="py-12 sm:py-20 px-4 bg-[#0D1117] scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                    Selected Works
                </h2>
                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.3}}
                            transition={{duration: 0.6}}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                        >
                            {/* Visual Column (Image/Video) */}
                            <Link
                                href={`/project/${project.slug}`}
                                className={`relative w-full h-80 rounded-lg overflow-hidden shadow-2xl group transition-transform duration-300 hover:scale-105 ${
                                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                                }`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                            </Link>

                            {/* Text Content Column */}
                            <div className={`text-center lg:text-left ${
                                index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                            }`}>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h3>
                                <p className="text-gray-400 mb-6">{project.description}</p>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                                    {project.techStack.map(tech => (
                                        <span key={tech}
                                              className="px-3 py-1 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Link href={`/project/${project.slug}`}
                                      className="group inline-flex items-center font-semibold text-blue-400 hover:text-blue-300 transition-colors text-lg">
                                    View Case Study
                                    <svg
                                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};