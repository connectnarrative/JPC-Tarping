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
  title: {
    default: "JPC Tarping Company | Interior Protection Specialists",
    template: "%s | JPC Tarping Company",
  },
  description: "Professional interior tarping, surface protection, dust containment, and temporary enclosures for residential, commercial, restoration, and construction projects.",
  keywords: ["interior tarping", "interior roof tarping", "open decking protection", "interior ceiling protection", "construction surface protection", "dust containment", "interior protection", "floor protection", "temporary construction enclosure"],
  openGraph: {
    title: "JPC Tarping Company",
    description: "We protect the space. You handle the work.",
    type: "website",
  },
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
      </body>
    </html>
  );
}
