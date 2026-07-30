import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IconDownload } from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { cvData } from "@/lib/cv-data";

export const metadata: Metadata = {
  title: "CV",
  description: "Downloadable CV for Alibay Arlan Akhanuly.",
};

export default function CvPage() {
  const {
    profile,
    links,
    skillGroups,
    languages,
    summary,
    educationHistory,
    projects,
    hackathons,
    certifications,
    leadershipActivities,
  } = cvData;

  return (
    <main className="min-h-screen bg-white px-8 py-9 text-black print:min-h-0 print:p-0">
      <article className="cv-print-page mx-auto max-w-4xl bg-white print:max-w-none">
        <header className="border-b border-gray-300 pb-5 print:pb-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            {profile.role}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            {profile.latinName}
          </h1>
          <p className="mt-1 text-sm text-gray-600">{profile.name}</p>
          <div className="mt-3 text-sm text-gray-700">
            <span>{profile.location}</span>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true"> · </span>
            <span>{profile.phone}</span>
          </div>
          <div className="mb-3 mt-1 text-sm text-gray-700 print:mb-2">
            {links.map((link, index) => (
              <span key={link.href}>
                <a href={link.href}>{link.label}</a>
                {index < links.length - 1 ? (
                  <span aria-hidden="true"> · </span>
                ) : null}
              </span>
            ))}
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">
            {profile.availability}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 print:hidden">
            <a
              href="/alibay-arlan-cv.pdf"
              download
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              <IconDownload aria-hidden="true" />
              Download CV
            </a>
          </div>
        </header>

        <section className="grid gap-6 py-7 print:gap-4 print:py-4">
          <div className="space-y-7 print:space-y-4">
            <CvSection title="Professional Summary">
              <p className="text-sm leading-6 text-gray-700 print:leading-5">
                {summary}
              </p>
            </CvSection>

            <CvSection title="Technical Skills">
              <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2 print:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-sm font-semibold">{group.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-700 print:leading-5">
                      {group.skills.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="Selected Projects">
              <div className="space-y-5 print:space-y-3">
                {projects.map((project) => (
                  <div key={project.name} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {project.name} - {project.subtitle}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-gray-700 print:leading-5">
                      {project.summary}
                    </p>
                    <p className="mt-1 text-xs font-medium text-gray-600">
                      Tech: {project.stack}
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      <a href={project.website}>
                        Live Demo: {project.website.replace(/^https?:\/\//, "")}
                      </a>
                      <span aria-hidden="true"> · </span>
                      <a href={project.href}>
                        GitHub: {project.href.replace(/^https?:\/\//, "")}
                      </a>
                    </p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-700 print:space-y-0.5 print:leading-5">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="Education">
              <div className="space-y-4 print:space-y-2">
                {educationHistory.map((item) => (
                  <div
                    key={`${item.company}-${item.period}`}
                    className="break-inside-avoid"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {item.company} - {item.title}
                      </h3>
                      <p className="text-xs text-gray-500">{item.period}</p>
                    </div>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-700 print:space-y-0.5 print:leading-5">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="Hackathons & Certifications">
              <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2 print:gap-6">
                <div className="break-inside-avoid">
                  <h3 className="text-sm font-semibold">Hackathons</h3>
                  <div className="mt-2 space-y-2 print:space-y-1">
                    {hackathons.map((item) => (
                      <div key={`${item.name}-${item.period}`}>
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="font-semibold text-gray-900">
                            <a href={item.certificateHref}>{item.name}</a>
                          </p>
                          <p className="shrink-0 text-xs text-gray-500">
                            {item.period}
                          </p>
                        </div>
                        <p className="text-xs text-gray-600">
                          {item.result} · {item.organization}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="break-inside-avoid">
                  <h3 className="text-sm font-semibold">Certification</h3>
                  <div className="mt-2">
                    {certifications.map((item) => (
                      <div key={`${item.name}-${item.period}`}>
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="font-semibold text-gray-900">
                            {item.name}
                          </p>
                          <p className="shrink-0 text-xs text-gray-500">
                            {item.period}
                          </p>
                        </div>
                        <p className="text-xs text-gray-600">
                          {item.issuer} ·{" "}
                          <a href={item.credentialHref}>Verify credential</a>
                          <span aria-hidden="true"> · </span>
                          <a href={item.certificateHref}>Certificate</a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CvSection>

            <CvSection title="Leadership">
              <div className="space-y-4 print:space-y-2">
                {leadershipActivities.map((item) => (
                  <div
                    key={`${item.organization}-${item.period}`}
                    className="break-inside-avoid"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {item.title} - {item.organization}
                      </h3>
                      <p className="text-xs text-gray-500">{item.period}</p>
                    </div>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-700 print:space-y-0.5 print:leading-5">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="Languages">
              <p className="text-sm leading-6 text-gray-700 print:leading-5">
                {languages.join("; ")}
              </p>
            </CvSection>

          </div>
        </section>
      </article>
    </main>
  );
}

function CvSection({
  children,
  title,
}: Readonly<{
  children: ReactNode;
  title: string;
}>) {
  return (
    <section className="break-inside-avoid">
      <h2 className="mb-3 border-b border-gray-200 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 print:mb-2 print:pb-1">
        {title}
      </h2>
      {children}
    </section>
  );
}
