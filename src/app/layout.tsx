import type { Metadata, Viewport } from "next";
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
    "Junior Full-Stack Webentwickler in Baunatal bei Kassel. React, Next.js, TypeScript, Node.js und PostgreSQL — Anforderungen, Tests und CI vor dem Merge.",
  metadataBase: new URL("https://yevhenii-portfolio-navy.vercel.app"),
  keywords: [
    "Junior Full-Stack Entwickler",
    "Webentwickler Kassel",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
  ],
  openGraph: {
    title: "Yevhenii Riabokon — Junior Full-Stack Developer",
    description:
      "Junior Full-Stack Webentwickler in Baunatal bei Kassel · React · TypeScript · Node.js · PostgreSQL",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport: Viewport = {
  themeColor: "#372111",
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
