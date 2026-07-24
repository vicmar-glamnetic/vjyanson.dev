import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vjyanson.dev"),
  title: "Vicmar Yanson — Shopify Developer",
  description:
    "Shopify developer in Bacolod City, Philippines. Liquid theme architecture, Shopify Plus, and storefront performance for brands in the US, Australia, and the Philippines. Building for the web since 2018.",
  keywords: [
    "Shopify developer",
    "Shopify Plus developer",
    "Liquid developer",
    "Shopify theme development",
    "headless Shopify",
    "Philippines",
  ],
  authors: [{ name: "Vicmar Joseph Yanson" }],
  openGraph: {
    title: "Vicmar Yanson — Shopify Developer",
    description:
      "Liquid theme architecture, Shopify Plus, and storefront performance. Thirty live stores for brands in the US, Australia, and the Philippines.",
    url: "https://vjyanson.dev",
    siteName: "vjyanson.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
