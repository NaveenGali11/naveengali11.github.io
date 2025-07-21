"use client";

import Image from "next/image";
import {Project} from "@/app/projects";
import React, {useEffect, useState} from "react";

// --- SVG ICONS ---
const CheckIcon = () => (<svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
</svg>);
const GithubIcon = () => (<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
</svg>);
const ExternalLinkIcon = () => (<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
</svg>);
const TechIcons: { [key: string]: React.ReactNode } = {
    'React': <div className="w-3 h-3 rounded-full bg-sky-400"/>,
    'React Native': <div className="w-3 h-3 rounded-full bg-sky-600"/>,
    'Node.js': <div className="w-3 h-3 rounded-full bg-green-500"/>,
    'MySQL': <div className="w-3 h-3 rounded-full bg-blue-500"/>,
    'MongoDB': <div className="w-3 h-3 rounded-full bg-emerald-500"/>,
    'Elasticsearch': <div className="w-3 h-3 rounded-full bg-amber-400"/>,
    'OpenAI': <div className="w-3 h-3 rounded-full bg-gray-300"/>,
    'Docker': <div className="w-3 h-3 rounded-full bg-blue-600"/>,
    'Strapi CMS': <div className="w-3 h-3 rounded-full bg-indigo-500"/>,
    'CI/CD': <div className="w-3 h-3 rounded-full bg-yellow-500"/>,
};

// --- SCROLL-TO-TOP BUTTON ---
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) setIsVisible(true); else setIsVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return (<div className="fixed bottom-8 right-8 z-50">
        <button type="button" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                className={`bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                aria-label="Go to top">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
        </button>
    </div>);
};


// --- MAIN VIEW COMPONENT ---
export default function ProjectView({project}: { project: Project }) {
    const [activeTab, setActiveTab] = useState("screens");
    const tabClass = (tabName: string) => `px-6 py-3 font-semibold rounded-t-lg transition-colors duration-300 focus:outline-none ${activeTab === tabName ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-600'}`;

    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    {project.link.includes('github') ? <GithubIcon/> : <ExternalLinkIcon/>}
                    {project.linkText}
                </a>
            </div>

            <div className="relative h-64 sm:h-[450px] rounded-lg overflow-hidden my-12 shadow-2xl">
                <Image src={project.image} alt={project.title} fill className="object-cover"/>
            </div>

            {project.projectGoal && (
                <div className="my-16 p-8 bg-[#161B22] border border-gray-800 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center">Project Goal</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">{project.projectGoal}</p>
                </div>
            )}

            <div className="my-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Project Highlights</h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-[#161B22] rounded-lg border border-gray-800">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
                        <div className="flex justify-around text-center p-4 bg-[#0D1117] rounded-lg">
                            {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key}>
                                    <div className="text-4xl font-bold text-blue-400">{value}%</div>
                                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                        <ul className="space-y-3">
                            {project.techDetails.map((detail) => (
                                <li key={detail} className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">▹</span>
                                    <span className="text-gray-300"
                                          dangerouslySetInnerHTML={{__html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-100">$1</strong>')}}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* DYNAMIC CONTENT BASED ON PROJECT TYPE */}
            {project.type === 'dev' && (
                <div className="my-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Technology Deep Dive</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {project.techStackDetails.map(tech => (
                            <div key={tech.name}
                                 className="flex gap-4 p-4 bg-[#161B22] rounded-lg border border-gray-800 items-start">
                                <div className="flex-shrink-0 pt-1.5">
                                    {TechIcons[tech.name.split(' / ')[0]] ||
                                        <div className="w-3 h-3 rounded-full bg-gray-500"/>}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-200">{tech.name}</h4>
                                    <p className="text-gray-400">{tech.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {project.type === 'design' && (
                <>
                    {project.designProcess && (
                        <div className="my-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">My Process</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {project.designProcess.map(step => (
                                    <div key={step}
                                         className="flex items-center gap-2 bg-[#161B22] border border-gray-800 rounded-full px-4 py-2 text-sm">
                                        <CheckIcon/>
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {((project.screenGallery && project.screenGallery.length > 0) || (project.componentGallery && project.componentGallery.length > 0)) && (
                        <div className="my-16">
                            <div className="border-b border-gray-800 mb-8">
                                <nav className="-mb-px flex justify-center gap-4" aria-label="Tabs">
                                    {project.screenGallery && project.screenGallery.length > 0 && (
                                        <button onClick={() => setActiveTab("screens")}
                                                className={tabClass("screens")}>Screen Design</button>)}
                                    {project.componentGallery && project.componentGallery.length > 0 && (
                                        <button onClick={() => setActiveTab("components")}
                                                className={tabClass("components")}>Component Showcase</button>)}
                                </nav>
                            </div>
                            {activeTab === 'screens' && (
                                <div className="space-y-16 animate-fade-in">
                                    {project.screenGallery?.map((item, index) => (
                                        <div key={index} className="space-y-4 text-center">
                                            <div
                                                className="relative h-96 rounded-lg bg-[#161B22] p-4 border border-gray-800">
                                                <Image src={item.imageUrl} alt={item.title} fill
                                                       className="object-contain"/>
                                            </div>
                                            <div className="max-w-2xl mx-auto pt-4">
                                                <h3 className="text-2xl font-bold text-blue-400">{item.title}</h3>
                                                <p className="text-gray-300">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'components' && (
                                <div className="space-y-16 animate-fade-in">
                                    {project.componentGallery?.map((item, index) => (
                                        <div key={index}
                                             className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                                            <div
                                                className={`relative h-64 rounded-lg bg-[#161B22] p-4 border border-gray-800 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                                <Image src={item.imageUrl} alt={item.title} fill
                                                       className="object-contain"/>
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className="text-2xl font-bold text-blue-400">{item.title}</h3>
                                                <p className="text-gray-300">{item.description}</p>
                                                <p className="text-gray-400 italic border-l-4 border-blue-500 pl-4">{item.designRationale}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}

            <ScrollToTopButton/>
        </>
    );
}