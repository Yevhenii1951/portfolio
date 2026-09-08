"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { contact, stats } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Profil() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="profil"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-cocoa text-white"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/img/hwk-3.webp"
          alt=""
          fill
          quality={80}
          sizes="100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[rgba(42,25,13,0.86)]" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1150px] px-6 py-[clamp(4rem,10vw,8rem)] sm:px-8 lg:px-12">
        <Reveal className="text-center">
          <p className="eyebrow mb-6 text-gold">01 · Profil</p>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-[400] uppercase leading-snug tracking-[.18em]">
            Vom Handwerk
            <br />
            <span className="text-gold">zum Full-Stack-Entwickler</span>
          </h2>
          <div className="mx-auto mt-8 max-w-[640px] text-[0.9375rem] leading-loose text-white/75">
            <p>
              Ich habe mir zweimal ein Fundament aus Disziplin und praktischem
              Verständnis aufgebaut: 15 Jahre als Unternehmer für technische
              Systeme und davor als Teamleiter im Rettungsdienst. Jetzt verbinde
              ich das mit sauberer Softwareentwicklung.
            </p>
            <p className="mt-4">
              Ich verstehe Probleme, bevor ich Code schreibe. Bei OMA-NETZ habe
              ich eine produktnahe Full-Stack-Plattform mitgeprägt — von der
              Datenmodellierung (12+ Modelle) über rollenbasierte
              Authentifizierung bis zum integrierten KI-Assistenten. Ich setze
              KI-Werkzeuge gezielt ein, wo sie echten Wert bringen — nicht aus
              Mode.
            </p>
          </div>
          <div className="mt-10">
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Lebenslauf ansehen
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <div className="grid grid-cols-2 gap-px border border-white/15 bg-white/15 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 bg-cocoa px-4 py-8 text-center"
              >
                <span className="font-[400] text-[clamp(1.75rem,3vw,2.5rem)] leading-none tracking-[.08em] text-gold">
                  {s.value}
                </span>
                <span className="text-[11px] uppercase tracking-[.16em] text-white/55">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}