import { journey } from "@/lib/data";
import { Reveal, SectionHead } from "./Reveal";
import { SparkIcon } from "./icons";

export function Werdegang() {
  return (
    <section id="werdegang" className="scroll-mt-24 bg-cream-1">
      <div className="mx-auto w-full max-w-[1360px] px-6 py-[clamp(4rem,9vw,7rem)] sm:px-8 lg:px-12">
        <SectionHead
          index="04"
          label="Werdegang"
          title="Erfahrung & Ausbildung"
          intro="Vom Teamleiter im Rettungsdienst über 15 Jahre Unternehmertum bis zur modernen Full-Stack-Entwicklung — mehr als nur Code."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <div className="border-l border-gold pl-8">
              {journey.map((item) => (
                <div key={item.role} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-gold bg-cream-1" />
                  <p className="eyebrow text-gold-deep">{item.period}</p>
                  <h3 className="mt-2 text-[15px] uppercase tracking-[.04em] text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-[13px] text-[rgb(57,35,20,.6)]">
                    {item.org}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-[rgb(57,35,20,.75)]">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-[9px] h-px w-4 shrink-0 bg-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="border border-line-light bg-white p-7">
                <p className="eyebrow text-gold-deep">Sprachen</p>
                <dl className="mt-5 space-y-4">
                  <LanguageRow lang="Deutsch" level="B2 · Zertifikat" />
                  <LanguageRow lang="Englisch" level="A2 · aktiv im Aufbau" />
                  <LanguageRow lang="Ukrainisch" level="Muttersprache" />
                  <LanguageRow lang="Russisch" level="Muttersprache" />
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="border border-line-light bg-white p-7">
                <p className="eyebrow text-gold-deep">Ausbildung</p>
                <h3 className="mt-4 text-[15px] uppercase tracking-[.04em] text-ink">
                  Diplom-Ingenieur · Systemprogrammierung
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[rgb(57,35,20,.65)]">
                  Nationale Technische Universität Kirovograd (UA) · 2001 — 2007
                  · Hochschulstatus: H+ laut Anabin / Kultusministerkonferenz.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="flex items-start gap-4 bg-cocoa p-7 text-white">
                <SparkIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="eyebrow text-gold">KI-gestützte Entwicklung</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/75">
Loop Engineering, iterative
                    Review-Loops,
                    Architekturverständnis statt blinder Code-Generierung — und
                    ein im Produktivcode laufender Groq-AI-Assistent.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function LanguageRow({ lang, level }: { lang: string; level: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line-light pb-3 last:border-0 last:pb-0">
      <dt className="text-[13px] uppercase tracking-[.12em] text-ink">{lang}</dt>
      <dd className="text-[12px] text-[rgb(57,35,20,.6)]">{level}</dd>
    </div>
  );
}