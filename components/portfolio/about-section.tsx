import {
  IconArrowRight,
  IconBriefcase,
  IconDownload,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import type { CvData } from "@/lib/cv-data";

type AboutSectionProps = {
  links: CvData["links"];
  profile: CvData["profile"];
  summary: CvData["summary"];
};

export function AboutSection({ links, profile, summary }: AboutSectionProps) {
  const githubLink = links.find((link) => link.label === "GitHub");

  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border pb-10 sm:pb-12"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {profile.targetPosition}
      </p>
      <div className="grid min-w-0 gap-6 xl:grid-cols-[1fr_260px]">
        <div className="min-w-0">
          <h2 className="max-w-full break-words font-heading text-3xl leading-[1.08] tracking-tight sm:max-w-4xl sm:text-5xl lg:text-6xl">
            Frontend Developer Intern
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              <IconBriefcase aria-hidden="true" />
              View Projects
            </a>
            <a
              href="/cv/"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <IconFileCv aria-hidden="true" />
              View CV
            </a>
            <a
              href="/alibay-arlan-cv.pdf"
              download
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <IconDownload aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#connect"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <IconMail aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>
        <div className="grid content-start gap-2 sm:grid-cols-3 xl:grid-cols-1">
          <a
            href={githubLink?.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg border border-border bg-card p-4 text-card-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10"
          >
            <span className="flex items-center justify-between gap-3 text-sm font-semibold">
              Code
              <IconArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
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
              Currently looking for
              <IconArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
            <span className="mt-2 block text-sm leading-6 text-muted-foreground">
              Frontend Developer Internship or Junior Web Developer role.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
