"use client";

import Image from "next/image";
import {useState} from "react";

const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
    </svg>
);

// Carousel Arrow SVG
const ArrowIcon = ({direction = 'left'}: { direction?: 'left' | 'right' }) => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}/>
    </svg>
);


type Project = {
    title: string;
    description: string;
    image: string;
    projectGoal?: string;
    designProcess?: string[];
    screenGallery?: { title: string; imageUrl: string; description: string }[];
    componentGallery?: { title: string; imageUrl: string; description: string; designRationale: string }[];
    metrics: {
        reusability?: number;
        consistency?: number;
        usability?: number;
        performance?: number;
        accessibility?: number;
        seo?: number;
    };
    techDetails: string[];
    link: string;
};

export default function ProjectView({project}: { project: Project }) {
    const [activeTab, setActiveTab] = useState("screens");
    const [currentScreen, setCurrentScreen] = useState(0);

    const tabClass = (tabName: string) =>
        `px-6 py-3 font-semibold rounded-t-lg transition-colors duration-300 focus:outline-none ${
            activeTab === tabName
                ? 'border-b-2 border-blue-500 text-white'
                : 'text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-600'
        }`;

    const hasVisuals = (project.screenGallery && project.screenGallery.length > 0) || (project.componentGallery && project.componentGallery.length > 0);

    const totalScreens = project.screenGallery?.length || 0;
    const handlePrev = () => setCurrentScreen(current => (current === 0 ? totalScreens - 1 : current - 1));
    const handleNext = () => setCurrentScreen(current => (current === totalScreens - 1 ? 0 : current + 1));

    return (
        <>
            {/* --- Project Header --- */}
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-gray-400 mb-8">{project.description}</p>
            <div className="relative h-64 sm:h-[450px] rounded-lg overflow-hidden mb-12 shadow-2xl">
                <Image src={project.image} alt={project.title} fill className="object-cover"/>
            </div>

            {/* --- Impact & Tech Stack --- */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Impact & Tech Stack</h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 bg-[#161B22] rounded-lg border border-gray-800">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {Object.entries(project.metrics).map(([key, value]) => (
                                value && <div key={key}>
                                    <div className="text-4xl font-bold text-blue-400">{value}%</div>
                                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Technical Implementation</h3>
                        <ul className="space-y-2">
                            {project.techDetails.map((detail) => (
                                <li key={detail} className="flex items-center gap-2">
                                    <span className="text-green-400">▹</span>
                                    <span className="text-gray-300">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                       className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        View Project in Figma
                    </a>
                </div>
            </div>

            {/* --- The Goal --- */}
            {project.projectGoal && (
                <div className="my-16 p-8 bg-[#161B22] border border-gray-800 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-center">Project Goal</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">{project.projectGoal}</p>
                </div>
            )}

            {/* --- The Process --- */}
            {project.designProcess && project.designProcess.length > 0 && (
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
            {/* --- Tabbed Interface for Visual Showcase --- */}
            {hasVisuals && (
                <div className="my-16">
                    <div className="border-b border-gray-800 mb-8">
                        <nav className="-mb-px flex justify-center gap-4" aria-label="Tabs">
                            {project.screenGallery && project.screenGallery.length > 0 && (
                                <button onClick={() => setActiveTab("screens")} className={tabClass("screens")}>
                                    Screen Design
                                </button>
                            )}
                            {project.componentGallery && project.componentGallery.length > 0 && (
                                <button onClick={() => setActiveTab("components")} className={tabClass("components")}>
                                    Component Showcase
                                </button>
                            )}
                        </nav>
                    </div>

                    {/* Screens Tab Content - NEW CAROUSEL LAYOUT */}
                    {activeTab === 'screens' && project.screenGallery && project.screenGallery.length > 0 && (
                        <div className="animate-fade-in">
                            <div className="carousel-container bg-[#161B22] p-4 border border-gray-800 rounded-lg">
                                <div className="carousel-track"
                                     style={{transform: `translateX(-${currentScreen * 100}%)`}}>
                                    {project.screenGallery.map((item, index) => (
                                        <div key={index} className="carousel-slide relative h-96">
                                            <Image src={item.imageUrl} alt={item.title} fill
                                                   className="object-contain"/>
                                        </div>
                                    ))}
                                </div>
                                {totalScreens > 1 && (
                                    <>
                                        <button onClick={handlePrev}
                                                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors">
                                            <ArrowIcon direction="left"/>
                                        </button>
                                        <button onClick={handleNext}
                                                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors">
                                            <ArrowIcon direction="right"/>
                                        </button>
                                    </>
                                )}
                            </div>
                            <div className="max-w-2xl mx-auto pt-6 text-center">
                                <h3 className="text-2xl font-bold text-blue-400">{project.screenGallery[currentScreen].title}</h3>
                                <p className="text-gray-300 mt-2">{project.screenGallery[currentScreen].description}</p>
                            </div>
                        </div>
                    )}

                    {/* Components Tab Content */}
                    {activeTab === 'components' && (
                        <div className="space-y-16 animate-fade-in">
                            {project.componentGallery?.map((item, index) => (
                                <div key={index}
                                     className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                                    <div
                                        className={`relative h-64 rounded-lg bg-[#161B22] p-4 border border-gray-800 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                        <Image src={item.imageUrl} alt={item.title} fill className="object-contain"/>
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
    );
}