"use client";
import React from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
                method: "POST",
                body: formData,
                headers: {'Accept': 'application/json'}
            });
            if (response.ok) {
                form.reset();
                onClose();
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div
                className="bg-[#161B22] rounded-lg shadow-2xl w-full max-w-md p-6 sm:p-8 border border-gray-700 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center text-white">Contact Me</h2>
                <p className="text-gray-400 mb-6 text-center text-sm">Have a project in mind or just want to say
                    hello?</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" required placeholder="Your Name"
                           className="w-full px-4 py-2 bg-[#21262D] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <input type="email" name="email" required placeholder="Your Email"
                           className="w-full px-4 py-2 bg-[#21262D] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <textarea name="message" required rows={4} placeholder="Your Message"
                              className="w-full px-4 py-2 bg-[#21262D] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    <div className="text-center">
                        <button type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};