import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Serif_JP({
  variable: "--font-noto",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yevhenii Riabokon — Junior Full-Stack Developer",
  description:
    "Portfolio von Yevhenii Riabokon — Junior Full-Stack Webentwickler in Kassel. React, Next.js, TypeScript, Node.js, PostgreSQL und AI-gestützte Entwicklung.",
  metadataBase: new URL("https://yevhenii-portfolio-navy.vercel.app"),
  themeColor: "#372111",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Webentwickler Kassel",
    "Portfolio",
    "AI",
  ],
  openGraph: {
    title: "Yevhenii Riabokon — Junior Full-Stack Developer",
    description:
      "Full-Stack-Webentwickler · React · TypeScript · Node.js · PostgreSQL · AI-gestützte Entwicklung",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${noto.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}