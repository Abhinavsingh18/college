import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduPath | Find Top Colleges, Courses & Exams in India",
  description: "Find Top Colleges & Universities in India by Ranking & Location. Get Detailed Information on College Admissions, Exams, Courses, Fees, Cutoff, Placements, and Latest News.",
};

import AIAssistant from '@/components/AIAssistant';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
