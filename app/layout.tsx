import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
});

const description =
  "Web developer in Bacolod City, Philippines. Shopify and Shopify Plus stores, WordPress business sites, and custom React / Next.js builds for brands in the US, Australia, and the Philippines. Building for the web since 2018.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vjyanson.com"),
  title: "Vicmar Yanson — Web & Shopify Developer",
  description,
  keywords: [
    "web developer Philippines",
    "Shopify developer",
    "Shopify Plus developer",
    "WordPress developer",
    "Next.js developer",
    "Liquid developer",
    "freelance web developer",
  ],
  authors: [{ name: "Vicmar Joseph Yanson" }],
  openGraph: {
    title: "Vicmar Yanson — Web & Shopify Developer",
    description,
    url: "https://vjyanson.com",
    siteName: "vjyanson.com",
    type: "website",
    images: [{ url: "/work/inh-hair.webp", width: 960, height: 600 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
