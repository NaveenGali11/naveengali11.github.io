const internships = [
  {
    id: 1,
    company: "Mutual Mobiles",
    role: "React Native Intern",
    duration: "December 2022 - September 2023",
    icon: "📱",
    responsibilities: [
      "Developed React Native features, boosting user engagement by 30%.",
      "Led TypeScript integration, significantly reducing code errors by 25%.",
      "Optimized app performance using MobX State Tree, achieving a 15% reduction in load times.",
      "Collaborated cross-functionally to enhance code quality and accelerate development.",
    ],
  },
  {
    id: 2,
    company: "Inventgrid India",
    role: "Application Developer Intern",
    duration: "July 2022 - December 2022",
    icon: "🖥️",
    responsibilities: [
      "Optimized web apps (TypeScript/PHP), boosting performance by 30% & cutting load times by 15s.",
      "Implemented MobX State Tree for state management, reducing testing bugs by 25%.",
      "Saved ~20 hours per project through proactive code reviews and debugging sessions.",
      "Improved project delivery timelines by 40% via active participation in agile practices.",
    ],
  },
  {
    id: 3,
    company: "Inventgrid India",
    role: "Web Application Developer",
    duration: "July 2021 - July 2022",
    icon: "💻",
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
      {" "}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Internship Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {" "}
          {/* Adjusted grid for potentially fewer items and responsiveness */}
          {internships.map((internship) => (
            <div
              key={internship.id} // Use the unique ID as the key
              className="group bg-[#161B22] p-6 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-[#21262D] transition-all flex flex-col" // Added border and flex-col
            >
              {/* Optional Icon */}
              {internship.icon && (
                <div className="text-3xl mb-4 self-start">
                  {internship.icon}
                </div>
              )}

              {/* Internship Details */}
              <h3 className="text-xl font-bold mb-1 text-blue-400 group-hover:text-blue-300 transition-colors">
                {internship.company}
              </h3>
              <p className="text-lg font-semibold text-gray-200 mb-1">
                {internship.role}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                {internship.duration}
              </p>

              {/* Responsibilities/Achievements List */}
              <div className="flex-grow">
                {" "}
                {/* Allows list to take remaining space if needed */}
                <p className="text-sm font-medium text-gray-300 mb-2">
                  Key Responsibilities:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  {internship.responsibilities.map((responsibility, index) => (
                    <li
                      key={index} // Index is okay here if responsibilities don't change order/get added/removed dynamically
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
