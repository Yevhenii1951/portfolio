import { skills } from "@/lib/data";
import { Reveal, SectionHead } from "./Reveal";

export function Skills() {
  return (
    <section id="stack" className="scroll-mt-24 bg-cream-1">
      <div className="mx-auto w-full max-w-[1360px] px-6 py-[clamp(4rem,9vw,7rem)] sm:px-8 lg:px-12">
        <SectionHead
          index="01"
          label="Kompetenzen"
          title={
            <>
              Technischer
              <br className="hidden sm:block" /> Stack
            </>
          }
          intro="Ich wähle den Stack nach dem Projekt — nicht umgekehrt. Kern: TypeScript im Frontend und Backend, PostgreSQL als Datenbasis, Vercel & Netlify für Deployment."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full border border-line-light bg-white/55 p-7">
                <h3 className="eyebrow text-gold-deep">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-line bg-white/70 px-3 py-1.5 text-[11px] uppercase tracking-[.14em] text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}