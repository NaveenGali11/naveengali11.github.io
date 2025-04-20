import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naveen Gali - React and React Native Developer",
  description:
    "Welcome to my portfolio! I am a passionate web developer creating modern, responsive, and user-friendly websites. Specializing in frontend technologies and interactive user interfaces, I build engaging web experiences that make an impact.",
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "UI/UX",
    "Web Accessibility",
    "Performance Optimization",
    "Modern Web Development",
    "Progressive Web Apps",
    "React Native Developer",
    "Illinois Institute of Technology",
    "Mutual Mobile",
    "Inventgrid",
    "Naveen Gali",
  ],
  authors: [{ name: "Naveen Gali" }],
  creator: "Naveen Gali",
  openGraph: {
    title: "Naveen Gali - React and React Native Developer",
    description:
      "Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.",
    url: "naveengali11.github.ui",
    siteName: "Naveen Gali - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naveen Gali - React and React Native Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Name] - Web Developer",
    description:
      "Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* === MS Clarity Script Start === */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script
            id="microsoft-clarity-script"
            strategy="afterInteractive" // Loads after the page is interactive
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
              `,
            }}
          />
        )}
        {/* === MS Clarity Script End === */}
      </body>
    </html>
  );
}
