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
  title: "Naveen Gali | Founding Engineer & Full-Stack Software Engineer",
  description:
    "Software Engineer with 5+ years of experience building consumer-scale products. Founding Engineer at Polyhistor Inc (Geospatial AI Platform). SDE-2 at Rebecca Everlene Trust Company. Previously at Mutual Mobile & Inventgrid. Expert in React Native, Next.js, Node.js, AWS, PostgreSQL, PostGIS, and LLMs. MS CS @ Illinois Tech.",
  keywords: [
    "Naveen Gali",
    "Founding Engineer",
    "Full-Stack Engineer",
    "Software Development Engineer",
    "React Native Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "AWS",
    "PostgreSQL",
    "PostGIS",
    "pgvector",
    "H3 Geospatial",
    "Docker",
    "Kubernetes",
    "Terraform",
    "LLM Engineer",
    "Geospatial AI",
    "Polyhistor",
    "Rebecca Everlene Trust Company",
    "Mutual Mobile",
    "Inventgrid",
    "Illinois Tech",
    "Location Intelligence",
  ],
  authors: [
    { name: "Naveen Gali", url: "https://www.linkedin.com/in/naveen-gali/" },
  ],
  creator: "Naveen Gali",
  openGraph: {
    title: "Naveen Gali | Founding Engineer & Full-Stack Software Engineer",
    description:
      "Founding Engineer at Polyhistor Inc building a distributed Geospatial AI Platform serving 3.55M+ POIs. SDE-2 at Rebecca Everlene Trust Company. Expert in React Native, AWS, PostGIS, pgvector, Docker, Kubernetes & LLMs. MS CS @ Illinois Tech.",
    url: "https://naveengali11.github.io/",
    siteName: "Naveen Gali | Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naveen Gali – Founding Engineer & Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Gali | Founding Engineer & Full-Stack Software Engineer",
    description:
      "Founding Engineer at Polyhistor (Geospatial AI). SDE-2 @ Rebecca Everlene. Previously Mutual Mobile & Inventgrid. React Native, AWS, PostGIS, LLMs. MS CS @ Illinois Tech.",
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
