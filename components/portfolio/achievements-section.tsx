import {
  IconAward,
  IconCertificate,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { CvData } from "@/lib/cv-data";

type AchievementsSectionProps = {
  certifications: CvData["certifications"];
  hackathons: CvData["hackathons"];
};

export function AchievementsSection({
  certifications,
  hackathons,
}: AchievementsSectionProps) {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-b border-border pb-10 sm:pb-12"
    >
      <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Technical Activities
          </p>
          <h2 className="mt-2 font-heading text-3xl tracking-tight">
            Achievements & Technical Activities
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Participation in technical hackathons and verified coursework
            across AI, data science, and software development.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3">
          <IconAward
            aria-hidden="true"
            className="size-5 text-muted-foreground"
          />
          <span className="text-sm font-medium">
            {hackathons.length} hackathons · {certifications.length} certificate
          </span>
        </div>
      </div>

      <div className="space-y-5">
        <div className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground">
          <div className="flex items-center gap-3 border-b border-border bg-muted/30 px-5 py-4 sm:px-6">
            <IconAward aria-hidden="true" className="size-5 text-primary" />
            <h3 className="font-heading text-xl tracking-tight">
              Hackathon participation
            </h3>
          </div>
          <div className="divide-y divide-border">
            {hackathons.map((item) => (
              <article key={`${item.name}-${item.period}`} className="p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-heading text-lg tracking-tight">
                        {item.name}
                      </h4>
                      <Badge variant="muted">{item.result}</Badge>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.organization}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-muted-foreground">
                    {item.period}
                  </p>
                </div>
                <a
                  href={item.certificateHref}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "mt-4",
                  })}
                >
                  <IconExternalLink aria-hidden="true" />
                  View certificate
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <h3 className="text-sm font-semibold text-muted-foreground">
            Supporting coursework
          </h3>
          {certifications.map((item) => (
            <p key={`${item.name}-${item.period}`} className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.name} · {item.issuer} · {item.period}{" · "}
              <a href={item.credentialHref} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Verify credential
              </a>{" · "}
              <a href={item.certificateHref} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                View certificate
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}