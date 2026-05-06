import { IconBrandGithub, IconChevronDown } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { CvData } from "@/lib/cv-data";
import { cn } from "@/lib/utils";

type ProjectsSectionProps = {
  expandedProject: number;
  projects: CvData["projects"];
  onExpandedProjectChange: (index: number | ((current: number) => number)) => void;
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
          Selected Builds
        </h2>
      </div>

      <div className="grid gap-3">
        {projects.map((project, index) => {
          const isExpanded = expandedProject === index;

          return (
            <article
              key={project.name}
              className="rounded-lg border border-border bg-card text-card-foreground"
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
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground">
                  <IconChevronDown
                    aria-hidden="true"
                    className={cn("size-5 transition", isExpanded && "rotate-180")}
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
                      <Badge variant="muted" className="w-fit whitespace-normal text-left">
                        {project.stack}
                      </Badge>
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
