import { IconSchool } from "@tabler/icons-react";

import type { CvData } from "@/lib/cv-data";

type EducationSectionProps = {
  education: CvData["education"];
  educationHistory: CvData["educationHistory"];
};

export function EducationSection({
  education,
  educationHistory,
}: EducationSectionProps) {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Education
          </p>
          <h2 className="mt-3 font-heading text-2xl tracking-tight">
            {education.degree}
          </h2>
          <p className="mt-2 text-muted-foreground">{education.school}</p>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3">
          <IconSchool aria-hidden="true" className="size-5 text-muted-foreground" />
          <span className="text-sm font-medium">Current program</span>
        </div>
      </div>

      <div className="divide-y divide-border rounded-lg border border-border bg-card text-card-foreground">
        {educationHistory.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="grid gap-4 p-5 sm:grid-cols-[170px_1fr] sm:p-6"
          >
            <p className="text-sm font-medium text-muted-foreground">
              {item.period}
            </p>
            <div>
              <h3 className="font-heading text-xl tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.company}
              </p>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
