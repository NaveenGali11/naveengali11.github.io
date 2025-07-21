import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./analytics/google-analytics";
import HotjarAnalytics from "@/app/analytics/hotjar-analytics";
import MainLayout from "./components/MainLayout";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

// SEO-Optimized Metadata
export const metadata: Metadata = {
    title: "Naveen Gali - React and React Native Developer",
    description:
        "Portfolio of Naveen Gali, a passionate React and React Native developer creating modern, responsive, and user-friendly digital experiences. Specializing in frontend technologies and interactive UI/UX.",
    keywords: [
        "React Developer", "React Native Developer", "Frontend Developer", "Naveen Gali", "Next.js", "TypeScript", "UI/UX", "Web Developer Portfolio"
    ],
    authors: [{name: "Naveen Gali", url: "https://www.linkedin.com/in/naveen-gali/"}],
    creator: "Naveen Gali",
    openGraph: {
        title: "Naveen Gali - React and React Native Developer",
        description:
            "Explore the portfolio of Naveen Gali, a developer crafting modern and engaging digital experiences with React and React Native.",
        url: "https://naveengali11.github.io/",
        siteName: "Naveen Gali | Portfolio",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Naveen Gali - Developer Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Naveen Gali - React and React Native Developer", // Corrected Title
        description:
            "Passionate developer crafting modern digital experiences. Explore my projects.",
        creator: "@NaveenGali20", // Corrected Twitter handle
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="!scroll-smooth">
        <body className={`${inter.variable} antialiased`}>
        <HotjarAnalytics/>
        <GoogleAnalytics/>
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        </html>
    );
}