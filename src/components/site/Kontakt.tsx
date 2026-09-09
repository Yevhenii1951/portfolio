import { contact } from "@/lib/data";
import { Reveal } from "./Reveal";
import { LinkedinIcon, MailIcon, PinIcon } from "./icons";

export function Kontakt() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-cocoa text-white">
      <div className="mx-auto w-full max-w-[1150px] px-6 py-[clamp(4rem,10vw,8rem)] text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-6 text-gold">04 · Kontakt</p>
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-[400] uppercase leading-[1.25] tracking-[.18em]">
            Bereit für die
            <br />
            nächste
            <span className="text-gold"> Herausforderung</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[560px] text-[0.9375rem] leading-relaxed text-white/70">
            Ich bin offen für Junior-Rollen als Full-Stack- oder
            Frontend-Entwickler — in der Region Kassel, remote oder deutschlandweit.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className="btn btn-solid-dark w-full sm:w-auto"
            >
              <MailIcon className="h-4 w-4" />
              E-Mail schreiben
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light w-full sm:w-auto"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line py-3"
            >
              Lebenslauf (PDF)
            </a>
          </div>

          <div className="mx-auto mt-12 flex max-w-[520px] flex-col items-center gap-3 border-t border-white/15 pt-8 text-[13px] text-white/60">
            <span className="inline-flex items-center gap-2">
              <PinIcon className="h-4 w-4 text-gold" />
              {contact.location}
            </span>
            <a href={`mailto:${contact.email}`} className="link-line">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="link-line">
              {contact.phone}
            </a>
            <p className="mt-1 text-[12px] text-white/45">
              Uneingeschränkte Arbeitserlaubnis · kein Visumssponsoring nötig
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}