import { contact, nav, projects } from "@/lib/data";
import { CrestLogo, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-cocoa-deep text-white">
      <div className="mx-auto w-full max-w-[1360px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <CrestLogo className="h-10 w-10 text-gold" />
              <span className="text-[12px] uppercase tracking-[.18em]">
                Yevhenii Riabokon
              </span>
            </div>
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
            <div className="mt-5 space-y-3">
              <a href={`mailto:${contact.email}`} className="link-line">
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="link-line">
                {contact.phone}
              </a>
              <p className="text-[13px] text-white/60">{contact.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-7 sm:flex-row">
          <p className="text-[11px] uppercase tracking-[.16em] text-white/40">
            Webentwicklung: Yevhenii Riabokon · Demo- und Übungsprojekte
          </p>
          <p className="text-[11px] uppercase tracking-[.16em] text-white/40">
            © 2026 · Baunatal bei Kassel
          </p>
        </div>
        <p className="mt-3 text-center text-[10px] leading-relaxed text-white/35">
          Projekte, Code und Präsentationen sind Lern- und Übungsprojekte
          beziehungsweise Abschlussarbeiten. Sie zeigen keinen echten
          Geschäftsbetrieb. Screenshots zeigen die veröffentlichten Live-Demos.
        </p>
      </div>
    </footer>
  );
}
