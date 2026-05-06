import { IconBrandTelegram } from "@tabler/icons-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { sectionItems, type SectionId } from "@/components/portfolio/constants";
import type { CvData } from "@/lib/cv-data";

type SiteHeaderProps = {
  activeSection: SectionId;
  links: CvData["links"];
  profile: CvData["profile"];
  onLogoClick: () => void;
  onSectionClick: (id: SectionId) => void;
};

export function SiteHeader({
  activeSection,
  links,
  profile,
  onLogoClick,
  onSectionClick,
}: SiteHeaderProps) {
  const telegramLink = links.find((link) => link.label === "Telegram");

  return (
    <header className="sticky top-1 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex min-w-0 items-center gap-3 text-left"
          onClick={onLogoClick}
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">
              {profile.latinName}
            </span>
            <span className="block truncate text-xs text-muted-foreground">
              {profile.name}
            </span>
          </span>
        </button>

        <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
          {sectionItems.map((item) => (
            <Button
              key={item.id}
              type="button"
              size="sm"
              variant={activeSection === item.id ? "default" : "ghost"}
              onClick={() => onSectionClick(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <a
          href={telegramLink?.href ?? `mailto:${profile.email}`}
          target={telegramLink ? "_blank" : undefined}
          rel={telegramLink ? "noreferrer" : undefined}
          className={buttonVariants({ size: "sm" })}
        >
          <IconBrandTelegram aria-hidden="true" />
          Telegram
        </a>
      </div>
    </header>
  );
}
