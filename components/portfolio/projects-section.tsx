"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconBrandGithub,
  IconChevronLeft,
  IconChevronRight,
  IconGlobe,
} from "@tabler/icons-react";
import Image from "next/image";

import { ScrollArea } from "@base-ui/react/scroll-area";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { CvData } from "@/lib/cv-data";

type ProjectsSectionProps = {
  projects: CvData["projects"];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-border pb-10 sm:pb-12"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Featured Projects
        </p>
        <h2 className="mt-2 font-heading text-3xl tracking-tight">
          Product work with screenshots and source
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Live projects with authentication, database-backed features,
          responsive layouts, and reusable UI components.
        </p>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => {
          const primaryScreenshot = project.screenshots[0];

          return (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10"
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(260px,0.9fr)_1fr]">
                <a
                  href={primaryScreenshot.src}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-b border-border bg-muted/50 lg:border-b-0 lg:border-r"
                  aria-label={`Open ${primaryScreenshot.label} screenshot for ${project.name}`}
                >
                  <div
                    className="relative min-h-56 w-full overflow-hidden p-3 sm:min-h-64"
                    style={{
                      aspectRatio: primaryScreenshot.aspectRatio.replace(
                        /\s/g,
                        "",
                      ),
                    }}
                  >
                    <Image
                      src={primaryScreenshot.src}
                      alt={primaryScreenshot.alt}
                      width={primaryScreenshot.width}
                      height={primaryScreenshot.height}
                      sizes="(min-width: 1024px) 420px, calc(100vw - 3rem)"
                      className="h-full w-full object-contain drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
                      priority={project === projects[0]}
                    />
                  </div>
                </a>

                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-2xl tracking-tight">
                    {project.name} — {project.subtitle}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>

                  <Badge
                    variant="muted"
                    className="mt-4 w-fit whitespace-normal text-left"
                  >
                    {project.stack}
                  </Badge>

                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({
                        variant: "default",
                        size: "sm",
                      })}
                      aria-label={`${project.name} live demo`}
                    >
                      <IconGlobe aria-hidden="true" />
                      Live Demo
                    </a>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })}
                    >
                      <IconBrandGithub aria-hidden="true" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-border px-5 py-5 sm:px-6">
                <h4 className="text-sm font-semibold">Case study</h4>
                <dl className="mt-3 grid gap-x-6 gap-y-3 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                  <CaseStudyItem label="Problem" value={project.caseStudy.problem} />
                  <CaseStudyItem label="Solution" value={project.caseStudy.solution} />
                  <CaseStudyItem label="My role" value={project.caseStudy.role} />
                  <CaseStudyItem label="What I learned" value={project.caseStudy.learned} />
                </dl>
              </div>

              {project.screenshots.length > 1 ? (
                <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <ScreenshotGrid
                    projectName={project.name}
                    screenshots={project.screenshots}
                  />
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

type CaseStudyItemProps = {
  label: string;
  value: string;
};

function CaseStudyItem({ label, value }: CaseStudyItemProps) {
  return (
    <div>
      <dt className="font-semibold text-foreground">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}

type Screenshot = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  aspectRatio?: string;
};

type ScreenshotGridProps = {
  projectName: string;
  screenshots: readonly Screenshot[];
};

function ScreenshotGrid({ projectName, screenshots }: ScreenshotGridProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [screenshots]);

  const scrollBy = (delta: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="size-2 rounded-full bg-green-400" />
        <span className="ml-2 min-w-0 truncate text-xs font-medium text-muted-foreground">
          {projectName} screenshots
        </span>
      </div>

      <div className="relative">
        <ScrollArea.Root>
          <ScrollArea.Viewport
            ref={containerRef}
            className="flex snap-x snap-mandatory gap-3 px-1 pb-2"
            aria-label={`${projectName} screenshots`}
          >
            {screenshots.map((screenshot) => (
              <a
                key={screenshot.src}
                href={screenshot.src}
                target="_blank"
                rel="noreferrer"
                className="group block w-48 shrink-0 snap-start overflow-hidden rounded-lg border border-border bg-background transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 sm:w-56 lg:w-64"
                aria-label={`Open ${screenshot.label} screenshot for ${projectName}`}
              >
                <div
                  className="relative w-full overflow-hidden bg-muted/60 p-2 sm:p-3"
                  style={{
                    aspectRatio: screenshot.aspectRatio
                      ? screenshot.aspectRatio.replace(/\s/g, "")
                      : `${screenshot.width}/${screenshot.height}`,
                    maxHeight: 220,
                  }}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes="(min-width: 1024px) 300px, 200px"
                    className="h-full w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
                <div className="border-t border-border px-3 py-2.5">
                  <p className="text-sm font-semibold">{screenshot.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {screenshot.width}x{screenshot.height} · opens full-size
                  </p>
                </div>
              </a>
            ))}
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal" />
        </ScrollArea.Root>

        {canScrollLeft ? (
          <button
            type="button"
            onClick={() => scrollBy(-containerRef.current!.clientWidth * 0.8)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md bg-background/80 p-1 shadow-md backdrop-blur"
            aria-label="Scroll left"
          >
            <IconChevronLeft className="size-4" aria-hidden="true" />
          </button>
        ) : null}

        {canScrollRight ? (
          <button
            type="button"
            onClick={() => scrollBy(containerRef.current!.clientWidth * 0.8)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-background/80 p-1 shadow-md backdrop-blur"
            aria-label="Scroll right"
          >
            <IconChevronRight className="size-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
