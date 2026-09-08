"use client";

import { useState } from "react";
import { contact, nav, projects } from "@/lib/data";
import { CrestLogo, GithubIcon, LinkedinIcon, MailIcon, MailSend } from "./icons";

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Kontaktanfrage über Portfolio");
    const body = encodeURIComponent(
      `Hallo Yevhenii,\n\nich habe dein Portfolio gesehen und möchte Kontakt aufnehmen.\n\nDeine Nachricht:\n\n`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-cocoa-deep text-white">
      <div className="mx-auto w-full max-w-[1360px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <CrestLogo className="h-10 w-10 text-gold" />
              <span className="leading-tight">
                <span className="block text-[12px] uppercase tracking-[.18em]">
                  Yevhenii Riabokon
                </span>
                <span className="block text-[10px] uppercase tracking-[.18em] text-white/50">
                  Junior Full-Stack Developer
                </span>
              </span>
            </div>
            <p className="mt-5 text-[13px] leading-relaxed text-white/55">
              Webanwendungen mit React, Next.js, TypeScript und Node.js — mit
              Verantwortung für das Ergebnis.
            </p>
            <div className="mt-5 flex items-center gap-4 text-white/70">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-5 w-5 transition-opacity hover:opacity-60" />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5 transition-opacity hover:opacity-60" />
              </a>
              <a href={`mailto:${contact.email}`} aria-label="E-Mail">
                <MailIcon className="h-5 w-5 transition-opacity hover:opacity-60" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-line">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                >
                  Lebenslauf (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Projekte</h3>
            <ul className="mt-5 space-y-3">
              {projects.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Kontakt</h3>
            <form onSubmit={subscribe} className="mt-5" aria-label="Kontaktformular">
              <label htmlFor="newsletter-email" className="sr-only">
                E-Mail-Adresse
              </label>
              <div className="flex border-b border-white/30">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full bg-transparent py-2.5 text-[13px] text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Nachricht senden"
                  className="px-3 text-gold"
                >
                  <MailSend className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-white/45">
                Schreiben Sie mir direkt — Antwort in der Regel innerhalb von 24
                Stunden.
              </p>
            </form>
            <div className="mt-5 space-y-2 text-[12px] text-white/60">
              <p>{contact.location}</p>
              <p>{contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-7 sm:flex-row">
          <p className="text-[11px] uppercase tracking-[.16em] text-white/40">
            © 2026 Yevhenii Riabokon · Baunatal, Deutschland
          </p>
          <p className="text-[11px] uppercase tracking-[.16em] text-white/40">
            DE · EN — gebaut mit Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}