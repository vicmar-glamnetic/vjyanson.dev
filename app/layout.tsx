import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Vicmar Joseph Yanson — Senior Shopify Developer",
  description:
    "Senior Shopify Developer with 6+ years building high-converting e-commerce stores. Custom themes, Liquid templating, Shopify Plus, GraphQL APIs, and checkout optimization.",
  keywords: ["Shopify Developer", "Senior Shopify Dev", "Liquid", "Shopify Plus", "E-Commerce"],
  openGraph: {
    title: "Vicmar Joseph Yanson — Senior Shopify Developer",
    description:
      "6+ years crafting high-converting Shopify stores. Custom themes, Liquid templating, Shopify Plus, GraphQL, and checkout optimization.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#050505]">{children}</body>
    </html>
  );
}
