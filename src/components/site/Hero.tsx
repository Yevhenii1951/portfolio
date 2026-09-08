"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { contact } from "@/lib/data";
import { ArrowDownIcon } from "./icons";

const SLIDES = ["/img/oma-1.webp", "/img/salon-1.webp", "/img/berg-1.webp"];
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden bg-cocoa">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[index]}
            alt=""
            fill
            priority
            quality={82}
            sizes="100vw"
            className="object-cover grayscale"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/45" />
      <div className="overlay-lux absolute inset-0" />

      <div className="relative mx-auto flex w-full max-w-[1360px] flex-1 flex-col items-center justify-center px-6 pb-24 pt-40 text-center text-white sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="max-w-[780px]"
        >
          <p className="eyebrow mb-7 text-gold">Full-Stack Webentwickler · Kassel, Deutschland</p>

          <h1 className="text-[clamp(2rem,5.5vw,3.75rem)] font-[400] uppercase leading-[1.15] tracking-[.15em]">
            Yevhenii
            <br />
            Riabokon
          </h1>

          <p className="mt-6 text-[13px] uppercase tracking-[.18em] text-gold-body">
            Junior Full-Stack Developer
          </p>

          <p className="mx-auto mt-6 max-w-[560px] text-[0.9375rem] leading-relaxed text-white/70">
            React · Next.js · TypeScript · Node.js · PostgreSQL — und
            KI-gestützte Entwicklung. Ich baue saubere, schnelle Webanwendungen
            mit Verantwortung für das Ergebnis.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#projekte" className="btn btn-solid-dark w-full sm:w-auto">
              Projekte ansehen
            </a>
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light w-full sm:w-auto"
            >
              Lebenslauf (PDF)
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownIcon className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}