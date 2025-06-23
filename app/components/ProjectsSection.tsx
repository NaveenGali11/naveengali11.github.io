import Image from "next/image";

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
  >
    <path d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
);

export const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: "Momentum: Mobile Design System & Prototype",
              description:
                "A comprehensive mobile design system built from scratch in Figma, used to create a high-fidelity, interactive application prototype.",
              metrics: {
                reusability: 100,
                consistency: 100,
                usability: 95,
              },
              techDetails: [
                "End-to-End UI/UX Design in Figma",
                "Design System Architecture",
                "Component-Based Design (10+ Components)",
                "Advanced Prototyping & Animations",
                "Variant & Component Properties",
              ],
              image: "/design_system.png",
              link: "https://www.figma.com/design/xItX1Bg0sSv5Iirm0Igi2z/Design-System?m=auto&t=mQK8bZHSxTYs1emo-1",
            },
            {
              title: "Smart Homes E-Commerce Application",
              description:
                "FullStack Smart Home Appliances E-Commerce application with OpenAi integration for customer support.",
              metrics: {
                performance: 98,
                accessibility: 100,
                seo: 100,
              },
              techDetails: [
                "Full Stack Web Application",
                "Open Ai Customer Support",
                "Elastic Search",
                "MySql and Mongodb Combined Usage",
              ],
              image: "/code.jpg",
              link: "https://github.com/NaveenGali11/smart-homes",
            },
            {
              title: "Homvery",
              description:
                "Real World Home Services Application with over 5000+ Users",
              metrics: {
                performance: 95,
                accessibility: 98,
                seo: 100,
              },
              techDetails: [
                "Web and Mobile Applications",
                "Home Services Appointment booking",
                "Status Changings from the Representative App",
                "Payment Gateway Integration",
              ],
              image: "/homvery.png",
              link: "https://www.homvery.com/",
            },
          ].map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-[1.01] transition-transform duration-300 group"
            >
              <div className="bg-[#21262D] rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl sm:text-2xl font-bold">
                        {project.title}
                      </h3>
                      <LinkIcon />
                    </div>
                    <p className="text-sm sm:text-base text-gray-400">
                      {project.description}
                    </p>

                    {/* Performance Metrics */}
                    <div className="space-y-3">
                      <h4 className="text-base sm:text-lg font-semibold">
                        Performance Metrics
                      </h4>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-blue-400">
                              {value}
                            </div>
                            <div className="text-sm text-gray-400 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Implementation */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                        Technical Implementation
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                        {project.techDetails.map((detail) => (
                          <li key={detail} className="flex items-center gap-2">
                            <span className="text-green-400">▹</span>
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative h-full min-h-[300px] lg:min-h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
