"use client";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export const FloatingContact = ({ isVisible }: { isVisible: boolean }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className={`bg-forest hover:bg-forest-deep text-white rounded-full px-5 py-3 shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none"
          }`}
          tabIndex={isVisible ? 0 : -1}
          aria-hidden={!isVisible}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          Get in Touch
        </button>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
