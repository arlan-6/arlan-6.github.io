import { IconBrandTelegram, IconDownload } from "@tabler/icons-react";

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
  const cvHref = "/alibay-arlan-cv.pdf";

  return (
    <header className="sticky top-1 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center gap-3 text-left md:flex-none"
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

        <nav aria-label="Sections" className="hidden items-center gap-1 lg:flex">
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

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={cvHref}
            download
            aria-label="Download CV"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <IconDownload aria-hidden="true" />
          </a>
          <a
            href={telegramLink?.href ?? `mailto:${profile.email}`}
            target={telegramLink ? "_blank" : undefined}
            rel={telegramLink ? "noreferrer" : undefined}
            className={buttonVariants({
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            <IconBrandTelegram aria-hidden="true" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
