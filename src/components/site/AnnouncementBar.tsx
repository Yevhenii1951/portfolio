"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const MESSAGES = [
  "Offen für neue Herausforderungen als Junior Full-Stack Developer",
  "React · Next.js · TypeScript · Node.js · PostgreSQL · AI-gestützte Entwicklung",
  "Standort Kassel — uneingeschränkte Arbeitserlaubnis",
];

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function AnnouncementBar({ hidden }: { hidden: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % MESSAGES.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="overflow-hidden bg-cocoa text-white transition-[max-height,opacity] duration-500"
      style={{ maxHeight: hidden ? 0 : 40, opacity: hidden ? 0 : 1 }}
    >
      <div className="relative flex h-10 items-center justify-center px-20">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-center text-[12px] leading-none tracking-[0.08em] text-white/90"
          >
            {MESSAGES[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}