export const PhilosophySection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#0D1117]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">My Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-3 text-blue-400">
              User-Centric Design
            </h3>
            <p className="text-gray-400">
              I believe the best products are born from a deep understanding of
              the user. My process always starts with empathy, aiming to solve
              real-world problems with intuitive, elegant, and accessible
              designs. Every component, screen, and interaction is crafted with
              the user's journey in mind.
            </p>
          </div>
          <div className="bg-[#161B22] p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-3 text-green-400">
              Scalable Development & Collaboration
            </h3>
            <p className="text-gray-400">
              Great design deserves a robust foundation. I build with a
              component-driven architecture, writing clean, reusable TypeScript
              code that ensures consistency and simplifies maintenance. I excel
              in collaborative environments, where I can lead and mentor team
              members to deliver high-quality, bug-free applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
