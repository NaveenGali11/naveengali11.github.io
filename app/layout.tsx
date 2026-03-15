import HotjarAnalytics from "@/app/analytics/hotjar-analytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./analytics/google-analytics";
import MainLayout from "./components/MainLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO-Optimized Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://naveengali11.github.io"),
  title: "Naveen Gali | Full-Stack Engineer & AI Researcher",
  description:
    "Full-Stack Engineer and AI Researcher specializing in production agentic systems, multi-agent frameworks, and geospatial indexing. Founding Engineer at Polyhistor. Expert in React, React Native, Node.js, LLMs, and AWS.",
  keywords: [
    "Full-Stack Engineer",
    "AI Researcher",
    "Naveen Gali",
    "React Developer",
    "React Native Developer",
    "Next.js",
    "TypeScript",
    "LLM Engineer",
    "Multi-Agent Systems",
    "Node.js Developer",
    "AWS",
    "PostgreSQL",
    "Geospatial Systems",
    "Founding Engineer",
    "Polyhistor",
  ],
  authors: [
    { name: "Naveen Gali", url: "https://www.linkedin.com/in/naveen-gali/" },
  ],
  creator: "Naveen Gali",
  openGraph: {
    title: "Naveen Gali | Full-Stack Engineer & AI Researcher",
    description:
      "Founding Engineer at Polyhistor building AI-powered travel platform. Expert in React, Node.js, LLMs, and geospatial systems. MS CS @ Illinois Tech.",
    url: "https://naveengali11.github.io/",
    siteName: "Naveen Gali | Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naveen Gali - Full-Stack Engineer & AI Researcher",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Gali | Full-Stack Engineer & AI Researcher",
    description:
      "Founding Engineer building production agentic systems. Expert in React, AI/LLMs, and full-stack development.",
    creator: "@NaveenGali20",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <HotjarAnalytics />
        <GoogleAnalytics />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
