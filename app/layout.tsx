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
  title: "Naveen Gali, Solving Problems with Code and Design",
  description:
    "Naveen Gali is a React and React Native developer specializing in creating high-performance, user-friendly digital experiences. Experienced in full-stack development, UI/UX design, and building scalable applications with Node.js, TypeScript, and AWS. Explore projects that deliver measurable results and solve real-world problems.",
  keywords: [
    "React Developer",
    "React Native Developer",
    "Frontend Developer",
    "Naveen Gali",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Web Developer Portfolio",
    "Node.js Developer",
    "Express.js",
    "Full-Stack Developer",
    "Docker",
    "AWS Amplify",
    "Elasticsearch",
    "Figma Design System",
    "E-commerce Development",
  ],
  authors: [
    { name: "Naveen Gali", url: "https://www.linkedin.com/in/naveen-gali/" },
  ],
  creator: "Naveen Gali",
  openGraph: {
    title: "Naveen Gali, Solving Problems with Code and Design",
    description:
      "Explore the portfolio of Naveen Gali, a developer crafting modern and engaging digital experiences with React and React Native. Discover projects that leverage AI, advanced search, and scalable architecture to deliver real-world business value.",
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
    title: "Naveen Gali, Solving Problems with Code and Design",
    description:
      "Passionate developer crafting modern digital experiences. Explore my projects.",
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
