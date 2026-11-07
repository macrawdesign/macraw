import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google"; // 1. Font eka import kala
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Aluth Font eka define kala
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Macraw",
  description: "Visual Identity & Creative Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. body class ekata variable eka damma */}
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
