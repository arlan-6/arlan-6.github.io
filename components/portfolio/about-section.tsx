import { IconArrowUpRight } from "@tabler/icons-react";

import type { CvData } from "@/lib/cv-data";

type AboutSectionProps = {
  links: CvData["links"];
  profile: CvData["profile"];
  summary: CvData["summary"];
};

export function AboutSection({ links, profile, summary }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border pb-10 sm:pb-12"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        About
      </p>
      <div className="grid gap-6 xl:grid-cols-[1fr_260px]">
        <div>
          <h2 className="max-w-4xl font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Building polished interfaces with practical engineering.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {summary}
          </p>
        </div>
        <div className="grid content-start gap-2 sm:grid-cols-3 xl:grid-cols-1">
          <a
            href={links[0]?.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg border border-border bg-card p-4 text-card-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10"
          >
            <span className="flex items-center justify-between gap-3 text-sm font-semibold">
              Code
              <IconArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
            <span className="mt-2 block text-sm leading-6 text-muted-foreground">
              Frontend systems, UI modules, and product flows.
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group rounded-lg border border-border bg-card p-4 text-card-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10"
          >
            <span className="flex items-center justify-between gap-3 text-sm font-semibold">
              Availability
              <IconArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
            <span className="mt-2 block text-sm leading-6 text-muted-foreground">
              Open to internships and junior web developer opportunities.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
