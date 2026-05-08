import { IconCheck } from "@tabler/icons-react";

import type { CvData } from "@/lib/cv-data";

type CapabilitiesSectionProps = {
  capabilities: CvData["capabilities"];
};

export function CapabilitiesSection({
  capabilities,
}: CapabilitiesSectionProps) {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 border-b border-border pb-10 sm:pb-12"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          What I can do
        </p>
        <h2 className="mt-2 font-heading text-3xl tracking-tight">
          Practical frontend contribution
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {capabilities.map((capability) => (
          <div
            key={capability}
            className="group flex min-h-16 items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-6 text-card-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10"
          >
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform duration-200 group-hover:scale-105">
              <IconCheck aria-hidden="true" className="size-4" />
            </span>
            <span>{capability}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
