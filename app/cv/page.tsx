import type { Metadata } from "next";
import type { ReactNode } from "react";

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
    practicalExperience,
    educationHistory,
    projects,
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
          <p className="mt-3 text-sm font-semibold text-gray-800">
            Target: {profile.targetPosition}
          </p>
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
          <p className="text-sm text-gray-700">
            Languages: {languages.join("; ")}
          </p>
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

            <CvSection title="Experience">
              <div className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">
                    {practicalExperience.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {practicalExperience.period}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-700 print:space-y-0.5 print:leading-5">
                  {practicalExperience.points.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </CvSection>

            <CvSection title="Projects">
              <div className="space-y-5 print:space-y-3">
                {projects.map((project) => (
                  <div key={project.name} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {project.name} — {project.subtitle}
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
                        {item.company} — {item.title}
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
