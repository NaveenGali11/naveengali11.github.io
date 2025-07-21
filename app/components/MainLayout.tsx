"use client";

import React, {useEffect, useState} from 'react';
import {FloatingContact} from './FloatingContact';

export default function MainLayout({children}: { children: React.ReactNode }) {
    const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);

    useEffect(() => {
        const contactSection = document.getElementById('contact');

        // This function will be called when the contact section's visibility changes
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsContactSectionVisible(entry.isIntersecting);
            },
            {
                // The button will disappear when the section is about 30% visible
                threshold: 0.3,
            }
        );

        if (contactSection) {
            observer.observe(contactSection);
        }

        // Clean up the observer when the component is unmounted
        return () => {
            if (contactSection) {
                observer.unobserve(contactSection);
            }
        };
    }, []);

    return (
        <>
            {children}
            {/* We pass the INVERSE of the visibility to the button.
                Button is visible when the contact section is NOT. */}
            <FloatingContact isVisible={!isContactSectionVisible}/>
        </>
    );
}