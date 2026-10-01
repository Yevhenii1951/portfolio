"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const MESSAGES = [
  "Eintritt ab sofort · offen für Junior Full-Stack in Kassel und remote",
  "Projektcode auf GitHub · Lebenslauf als PDF",
];

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function AnnouncementBar({ hidden }: { hidden: boolean }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % MESSAGES.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div
      className="overflow-hidden bg-cocoa text-white transition-[max-height,opacity] duration-500"
      style={{ maxHeight: hidden ? 0 : 40, opacity: hidden ? 0 : 1 }}
    >
      <div className="relative flex h-10 items-center justify-center px-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
            className="text-center text-[12px] leading-none tracking-[0.08em] text-white/90"
          >
            {MESSAGES[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
