import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://truetoblue.com'),
  title: {
    default: "True To Blue - Smart Voice Solutions for Trade Professionals",
    template: "%s | True To Blue"
  },
  description: "Never miss another call. Smart voice assistants and automated solutions built specifically for plumbers, electricians, HVAC contractors, and trade professionals. Keep leads warm while spending quality time with family.",
  keywords: ["contractor software", "trade professional solutions", "plumbing software", "electrician software", "HVAC software", "voice assistant for contractors", "automated scheduling", "lead management", "service business automation"],
  authors: [{ name: "True To Blue" }],
  creator: "True To Blue",
  publisher: "True To Blue",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://truetoblue.com",
    siteName: "True To Blue",
    title: "True To Blue - Smart Voice Solutions for Trade Professionals",
    description: "Never miss another call. Smart voice assistants keep your leads warm while you focus on the job.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "True To Blue - Smart Voice Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "True To Blue - Smart Voice Solutions for Trade Professionals",
    description: "Never miss another call. Smart voice assistants keep your leads warm while you focus on the job.",
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
      <body className={`${inter.className} bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900 min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
