import { Badge } from "@/components/ui/badge";
import type { CvData } from "@/lib/cv-data";

type SkillsSectionProps = {
  languages: CvData["languages"];
  skillGroups: CvData["skillGroups"];
};

export function SkillsSection({ languages, skillGroups }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-border pb-10 sm:pb-12"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Skills
        </p>
        <h2 className="mt-2 font-heading text-3xl tracking-tight">
          Technical skills
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Frontend, backend, database, and deployment tools I use in live
          projects and continue to build on.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillPanel
            key={group.label}
            label={group.label}
            skills={group.skills}
            variant={group.variant}
          />
        ))}
        <SkillPanel label="Languages" skills={languages} variant="muted" />
      </div>
    </section>
  );
}

type SkillPanelProps = {
  label: string;
  skills: readonly string[];
  variant: "accent" | "muted";
};

function SkillPanel({ label, skills, variant }: SkillPanelProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10">
      <h3 className="text-sm font-semibold">{label}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant={variant}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
