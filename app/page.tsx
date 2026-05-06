"use client";

import { useEffect, useState } from "react";

import { AboutSection } from "@/components/portfolio/about-section";
import {
  sectionItems,
  type SectionId,
} from "@/components/portfolio/constants";
import { ConnectSection } from "@/components/portfolio/connect-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ProfileCard } from "@/components/portfolio/profile-card";
import { ProgressBar } from "@/components/portfolio/progress-bar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteHeader } from "@/components/portfolio/site-header";
import { cvData } from "@/lib/cv-data";

export default function Home() {
  const {
    profile,
    skills,
    educationHistory,
    projects,
    education,
    links,
    languages,
    summary,
  } = cvData;
  const [activeSection, setActiveSection] = useState<SectionId>(
    sectionItems[0].id,
  );
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedProject, setExpandedProject] = useState(0);
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
    <div className="min-h-screen bg-background text-foreground">
      <ProgressBar value={scrollProgress} />

      <SiteHeader
        activeSection={activeSection}
        links={links}
        profile={profile}
        onLogoClick={scrollToTop}
        onSectionClick={scrollToSection}
      />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(280px,340px)_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <ProfileCard
              copiedEmail={copiedEmail}
              languages={languages}
              links={links}
              profile={profile}
              skills={skills}
              onCopyEmail={copyEmail}
            />
          </aside>

          <div className="space-y-10 lg:space-y-14">
            <AboutSection links={links} profile={profile} summary={summary} />
            <EducationSection
              education={education}
              educationHistory={educationHistory}
            />
            <ProjectsSection
              expandedProject={expandedProject}
              projects={projects}
              onExpandedProjectChange={setExpandedProject}
            />
            <ConnectSection links={links} profile={profile} />
          </div>
        </section>
      </main>
    </div>
  );
}
