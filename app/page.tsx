"use client";

import { useEffect, useState } from "react";

import { AboutSection } from "@/components/portfolio/about-section";
import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import {
  sectionItems,
  type SectionId,
} from "@/components/portfolio/constants";
import { ConnectSection } from "@/components/portfolio/connect-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { LeadershipSection } from "@/components/portfolio/leadership-section";
import { ProfileCard } from "@/components/portfolio/profile-card";
import { ProgressBar } from "@/components/portfolio/progress-bar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { StructuredData } from "@/components/portfolio/structured-data";
import { cvData } from "@/lib/cv-data";

export default function Home() {
  const {
    profile,
    skillGroups,
    educationHistory,
    projects,
    links,
    languages,
    summary,
    capabilities,
    leadershipActivities,
  } = cvData;
  const [activeSection, setActiveSection] = useState<SectionId>(
    sectionItems[0].id,
  );
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        height <= 0 ? 0 : Math.min(100, (top / height) * 100);
      setScrollProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  useEffect(() => {
    const sections = sectionItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionId);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -58% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);

      window.setTimeout(() => {
        setCopiedEmail(false);
      }, 1400);
    } catch {
      setCopiedEmail(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <StructuredData links={links} profile={profile} projects={projects} />
      <ProgressBar value={scrollProgress} />

      <SiteHeader
        activeSection={activeSection}
        links={links}
        profile={profile}
        onLogoClick={scrollToTop}
        onSectionClick={scrollToSection}
      />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <section className="grid min-w-0 gap-6 lg:grid-cols-[minmax(280px,340px)_1fr]">
          <aside className="min-w-0 lg:sticky lg:top-24 lg:h-fit">
            <ProfileCard
              copiedEmail={copiedEmail}
              languages={languages}
              links={links}
              profile={profile}
              onCopyEmail={copyEmail}
            />
          </aside>

          <div className="min-w-0 space-y-10 lg:space-y-14">
            <AboutSection links={links} profile={profile} summary={summary} />
            <ProjectsSection projects={projects} />
            <LeadershipSection leadershipActivities={leadershipActivities} />
            <SkillsSection languages={languages} skillGroups={skillGroups} />
            <CapabilitiesSection capabilities={capabilities} />
            <EducationSection educationHistory={educationHistory} />
            <ConnectSection links={links} profile={profile} />
          </div>
        </section>
      </main>
    </div>
  );
}
