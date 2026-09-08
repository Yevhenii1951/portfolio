"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type SectionHeadProps = {
  index: string;
  label: string;
  title: ReactNode;
  dark?: boolean;
  intro?: string;
};

export function SectionHead({ index, label, title, dark, intro }: SectionHeadProps) {
  return (
    <Reveal className="text-center">
      <p
        className={`eyebrow ${dark ? "text-gold" : "text-gold-deep"}`}
      >
        {index} · {label}
      </p>
      <h2
        className={`mt-4 text-[clamp(1.5rem,3.5vw,2.25rem)] uppercase tracking-[.18em] font-[400] leading-snug ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mx-auto mt-5 max-w-[640px] text-[0.9375rem] leading-relaxed ${
            dark ? "text-white/60" : "text-[rgb(57,35,20,.6)]"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}