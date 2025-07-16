import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justada - Content Creator & Brand Strategist",
  description:
    "Premium content creator with 800K+ followers helping brands connect with audiences through authentic storytelling. Trusted by Nike, Sephora, Samsung, and more.",
  keywords:
    "content creator, influencer marketing, brand partnerships, social media strategy, TikTok, Instagram, YouTube",
  authors: [{ name: "Justada" }],
  openGraph: {
    title: "Justada - Content Creator & Brand Strategist",
    description:
      "Premium content creator with 800K+ followers helping brands connect with audiences through authentic storytelling.",
    url: "https://sarahchen.com",
    siteName: "Justada",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Justada - Content Creator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justada - Content Creator & Brand Strategist",
    description:
      "Premium content creator with 800K+ followers helping brands connect with audiences through authentic storytelling.",
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
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
