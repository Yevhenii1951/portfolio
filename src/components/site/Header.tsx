"use client";

import { useEffect, useState } from "react";
import { contact, nav } from "@/lib/data";
import { AnnouncementBar } from "./AnnouncementBar";
import { CrestLogo, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar hidden={dark} />

      <div
        className={`transition-colors duration-500 ${
          dark
            ? "bg-cream-2/95 text-ink backdrop-blur-sm"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1360px] items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <CrestLogo className="h-10 w-10 text-gold" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[12px] uppercase tracking-[.18em]">
                Yevhenii Riabokon
              </span>
              <span className="text-[10px] uppercase tracking-[.18em] opacity-60">
                Full-Stack Developer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-line"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="link-line inline-flex h-6 w-6 items-center"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="link-line hidden h-6 w-6 items-center sm:inline-flex"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="E-Mail"
              className="link-line hidden h-6 w-6 items-center sm:inline-flex"
            >
              <MailIcon className="h-5 w-5" />
            </a>

            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn hidden lg:inline-flex ${
                dark ? "btn-solid" : "btn-outline-light"
              }`}
            >
              Lebenslauf
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menü"
              className="flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className="flex w-5 flex-col gap-[5px]">
                <span
                  className={`h-px w-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-[76px] z-40 flex flex-col bg-cream-2 px-8 pb-10 pt-6 text-ink lg:hidden">
          <nav className="flex flex-col gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line-light pb-3 text-[14px] uppercase tracking-[.18em]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4 border-t border-line pt-6">
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Lebenslauf (PDF)
            </a>
            <div className="flex items-center gap-5 text-ink">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={`mailto:${contact.email}`} className="link-line">
                E-Mail
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}