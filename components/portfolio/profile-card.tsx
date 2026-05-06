import {
  IconBrandTelegram,
  IconCopy,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

import { socialIcons } from "@/components/portfolio/constants";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CvData } from "@/lib/cv-data";

type ProfileCardProps = {
  copiedEmail: boolean;
  languages: CvData["languages"];
  links: CvData["links"];
  profile: CvData["profile"];
  skills: CvData["skills"];
  onCopyEmail: () => void;
};

export function ProfileCard({
  copiedEmail,
  languages,
  links,
  profile,
  skills,
  onCopyEmail,
}: ProfileCardProps) {
  const telegramLink = links.find((link) => link.label === "Telegram");
  const languageSkills = skills.slice(0, 5);
  const frontendSkills = skills.slice(5, 9);
  const backendSkills = skills.slice(9);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="border-b border-border bg-muted/30 p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <Badge variant="muted">Open to internships</Badge>
            <span className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
              Astana
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex size-20 items-center justify-center rounded-lg bg-primary text-2xl font-semibold text-primary-foreground shadow-sm">
              {profile.initials}
            </div>
            <h1 className="mt-4 font-heading text-2xl leading-tight tracking-tight">
              {profile.latinName}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{profile.name}</p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {profile.role}
            </p>
          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div className="grid grid-cols-3 gap-2">
            {links.map((link) => {
              const Icon =
                socialIcons[link.label as keyof typeof socialIcons] ?? IconMail;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-lg border border-border bg-background px-2 py-2 text-center text-xs font-medium transition hover:bg-muted/50"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  <span className="max-w-full truncate">{link.label}</span>
                </a>
              );
            })}
          </div>

          <p className="text-sm leading-7 text-muted-foreground">
            {profile.tagline}
          </p>

          <Separator />

          <div className="space-y-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Contact
            </p>
            <div className="rounded-lg border border-border">
              <p className="flex items-center gap-3 border-b border-border px-3 py-2.5 text-muted-foreground">
                <IconMapPin aria-hidden="true" className="size-4 shrink-0" />
                <span>{profile.location}</span>
              </p>
              <p className="flex items-center gap-3 border-b border-border px-3 py-2.5 text-muted-foreground">
                <IconMail aria-hidden="true" className="size-4 shrink-0" />
                <span className="min-w-0 truncate">{profile.email}</span>
              </p>
              <p className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground">
                <IconPhone aria-hidden="true" className="size-4 shrink-0" />
                <span>{profile.phone}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-2">
            <a
              href={telegramLink?.href ?? `mailto:${profile.email}`}
              target={telegramLink ? "_blank" : undefined}
              rel={telegramLink ? "noreferrer" : undefined}
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "w-full",
              })}
            >
              <IconBrandTelegram aria-hidden="true" />
              Telegram
            </a>
            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              onClick={onCopyEmail}
              aria-label={copiedEmail ? "Email copied" : "Copy email"}
              aria-live="polite"
              title={copiedEmail ? "Email copied" : "Copy email"}
            >
              <IconCopy aria-hidden="true" />
            </Button>
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Skills
            </p>
            <SkillGroup label="Programming" skills={languageSkills} variant="muted" />
            <SkillGroup label="Frontend" skills={frontendSkills} variant="accent" />
            {backendSkills.length > 0 ? (
              <SkillGroup label="Tools & Data" skills={backendSkills} variant="muted" />
            ) : null}
            <SkillGroup
              label="Spoken Languages"
              skills={languages}
              variant="muted"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

type SkillGroupProps = {
  label: string;
  skills: readonly string[];
  variant: "accent" | "muted";
};

function SkillGroup({ label, skills, variant }: SkillGroupProps) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant={variant}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
