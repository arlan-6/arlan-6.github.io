"use client";

import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconExternalLink,
  IconGlobe,
} from "@tabler/icons-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CvData } from "@/lib/cv-data";
import { cn } from "@/lib/utils";

type ProjectsSectionProps = {
  expandedProject: number;
  projects: CvData["projects"];
  onExpandedProjectChange: (
    index: number | ((current: number) => number),
  ) => void;
};

export function ProjectsSection({
  expandedProject,
  projects,
  onExpandedProjectChange,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Projects
        </p>
        <h2 className="mt-2 font-heading text-3xl tracking-tight">
          Selected builds with proof
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Each project includes a live demo, source code, the product problem,
          and the parts I built.
        </p>
      </div>

      <div className="grid gap-3">
        {projects.map((project, index) => {
          const isExpanded = expandedProject === index;

          return (
            <article
              key={project.name}
              className="group rounded-lg border border-border bg-card text-card-foreground transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/10"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                onClick={() =>
                  onExpandedProjectChange((current) =>
                    current === index ? -1 : index,
                  )
                }
                aria-expanded={isExpanded}
              >
                <span>
                  <span className="block font-heading text-xl tracking-tight">
                    {project.name}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </span>
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:text-foreground">
                  <IconChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-5 transition-transform duration-200",
                      isExpanded && "rotate-180",
                    )}
                  />
                </span>
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300",
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                      <Badge
                        variant="muted"
                        className="w-fit whitespace-normal text-left"
                      >
                        {project.stack}
                      </Badge>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                          className={buttonVariants({
                            variant: "outline",
                            size: "xs",
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
                            size: "xs",
                          })}
                        >
                          <IconBrandGithub aria-hidden="true" />
                          GitHub
                        </a>
                      </div>
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
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

                    {/* <ScreenshotCarousel
                      projectName={project.name}
                      screenshots={project.screenshots}
                    /> */}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

type Screenshot = CvData["projects"][number]["screenshots"][number];

type ScreenshotCarouselProps = {
  projectName: string;
  screenshots: readonly Screenshot[];
};

function ScreenshotCarousel({
  projectName,
  screenshots,
}: ScreenshotCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const activeScreenshot = screenshots[selectedIndex] ?? screenshots[0];

  useEffect(() => {
    if (!api) return;

    const updateSelected = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    updateSelected();
    api.on("select", updateSelected);
    api.on("reInit", updateSelected);

    return () => {
      api.off("select", updateSelected);
      api.off("reInit", updateSelected);
    };
  }, [api]);

  return (
    <div className="mt-5 overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-amber-400" />
          <span className="size-2 rounded-full bg-green-400" />
        </div>
        <span className="min-w-0 truncate text-xs font-medium text-muted-foreground">
          {projectName} preview
        </span>
        <span className="text-xs text-muted-foreground">
          {selectedIndex + 1}/{Math.max(snapCount, screenshots.length)}
        </span>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-0">
          {screenshots.map((screenshot) => (
            <CarouselItem key={screenshot.src} className="basis-full pl-0">
              <a
                href={screenshot.src}
                target="_blank"
                rel="noreferrer"
                className="group/slide block overflow-hidden bg-muted"
                aria-label={`Open ${screenshot.label} screenshot for ${projectName}`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted/60 p-3 sm:p-4">
                  <div className="relative h-full w-full">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(min-width: 1024px) 960px, calc(100vw - 3rem)"
                      className="object-contain drop-shadow-sm transition-transform duration-500 group-hover/slide:scale-[1.01]"
                    />
                  </div>
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-lg border border-border bg-background/95 px-2.5 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-sm backdrop-blur transition-opacity duration-200 group-hover/slide:opacity-100">
                    <IconExternalLink aria-hidden="true" className="size-3.5" />
                    Open
                  </span>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex flex-col gap-3 border-t border-border px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">{activeScreenshot.label}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {activeScreenshot.width}x{activeScreenshot.height} · opens full-size
          </p>
        </div>
        {screenshots.length > 1 ? (
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous screenshot"
            >
              <IconChevronLeft aria-hidden="true" className="size-4" />
            </Button>
            <div className="flex gap-1.5" aria-label="Screenshot slides">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  type="button"
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-200",
                    index === selectedIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                  aria-label={`Go to ${screenshot.label} screenshot`}
                  aria-current={index === selectedIndex}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={() => api?.scrollNext()}
              aria-label="Next screenshot"
            >
              <IconChevronRight aria-hidden="true" className="size-4" />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
