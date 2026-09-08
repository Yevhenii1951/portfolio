import Image from "next/image";
import { smallProjects, projects, contact, type Project } from "@/lib/data";
import { Reveal, SectionHead } from "./Reveal";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const primaryLink = project.links.live ?? project.links.code;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-1">
          <Image
            src={project.imageFront}
            alt={`${project.title} — Screenshot`}
            fill
            quality={82}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <Image
            src={project.imageHover}
            alt=""
            fill
            quality={82}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="scale-110 object-cover grayscale opacity-0 transition-all duration-700 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-cocoa/0 transition-colors duration-500 group-hover:bg-cocoa/10" />

          {project.badge ? (
            <span
              className={`badge-lux absolute left-4 top-4 ${
                project.featured
                  ? "bg-sale text-white"
                  : "bg-[#EFEFEF] text-ink"
              }`}
            >
              {project.badge}
            </span>
          ) : null}

          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} öffnen`}
            className="absolute inset-0"
          />
        </div>

        <div className="mt-6 flex flex-1 flex-col text-center">
          <p className="eyebrow text-[10px] text-gold-deep">{project.label}</p>
          <h3 className="mt-2 text-[15px] uppercase tracking-[.02em] text-ink">
            {project.title}
          </h3>
          <p className="mx-auto mt-3 max-w-[92%] text-[13px] leading-relaxed text-[rgb(57,35,20,.65)]">
            {project.description}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[.14em] text-[rgb(57,35,20,.5)]">
            {project.stack.slice(0, 6).join(" · ")}
          </p>

          <div className="mt-auto flex items-center justify-center gap-6 pt-5">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line inline-flex items-center gap-1"
              >
                {project.links.liveLabel ?? "Live-Demo"}
                <ArrowUpRightIcon className="h-3 w-3" />
              </a>
            ) : null}
            {project.links.presentation ? (
              <a
                href={project.links.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line inline-flex items-center gap-1"
              >
                Präsentation
                <ArrowUpRightIcon className="h-3 w-3" />
              </a>
            ) : null}
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line inline-flex items-center gap-1"
            >
              Code
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projekte" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1360px] px-6 py-[clamp(4rem,9vw,7rem)] sm:px-8 lg:px-12">
        <SectionHead
          index="03"
          label="Portfolio"
          title="Ausgewählte Projekte"
          intro="Produktnahe Projekte vom Training bis zum Abschlussprojekt — mit echtem Deployment, Datenbanken, Authentifizierung und KI-Integration."
        />

        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.06} />
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="border-t border-line-light pt-12">
            <p className="eyebrow text-center text-gold-deep">Weitere Arbeiten</p>
            <div className="mx-auto mt-6 max-w-[820px]">
              {smallProjects.map((p) => (
                <a
                  key={p.title}
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-line-light py-5"
                >
                  <div className="min-w-0">
                    <h4 className="text-[13px] uppercase tracking-[.02em] text-ink">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-[rgb(57,35,20,.6)]">
                      {p.description}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-gold-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <GithubIcon className="h-4 w-4" />
                Alle Projekte auf GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}