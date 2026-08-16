import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codetier.co/"),

  title: {
    default: "CodeTier Systems",
    template: "%s | CodeTier Systems",
  },
  description: "Codetier Systems designs and delivers high-throughput web platforms and zero-bloat native desktop terminals engineered for maximum uptime.",

  keywords: [
    "CodeTier Systems",
    "CodeTier",
    "Tauri v2 desktop application development",
    "Rust and SQLite local persistence",
    "Next.js App Router enterprise architecture",
    "React.js high-throughput web platforms",
    "TypeScript strict typing solutions",
    "Tailwind CSS v4 scalable styling",
    "Enterprise software engineering services",
    "High-performance web architecture",
    "Zero-bloat native desktop terminals",
    "Offline-first desktop software development",
    "B2B marketplace dashboard engineering",
    "SaaS cloud infrastructure analytics dashboards",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.codetier.co/",
    siteName: "CodeTier Systems",
    title: "CodeTier Systems",
    description: "Codetier Systems designs and delivers high-throughput web platforms and zero-bloat native desktop terminals engineered for maximum uptime.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "CodeTier Systems - Enterprise Software Engineering",
    },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeTier Systems",
    description: "Codetier Systems designs and delivers high-throughput web platforms and zero-bloat native desktop terminals engineered for maximum uptime.",
    images: ["/og-image.png"]
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
    }
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
