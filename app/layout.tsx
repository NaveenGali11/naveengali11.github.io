import HotjarAnalytics from "@/app/analytics/hotjar-analytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "./analytics/google-analytics";
import MainLayout from "./components/MainLayout";
import {portfolioMetadata} from "./portfolio-metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const title = "Naveen Gali | Full-Stack Software Engineer";
const description = "Full-stack software engineer building web and mobile products, backend services, and search systems. Selected work in location intelligence and applied AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://naveengali11.github.io"),
  ...portfolioMetadata({title, description, path: "/"}),
  authors: [{name: "Naveen Gali", url: "https://www.linkedin.com/in/naveen-gali/"}],
  creator: "Naveen Gali",
  robots: {index: true, follow: true},
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
