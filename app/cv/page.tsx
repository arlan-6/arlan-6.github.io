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
    capabilities,
    educationHistory,
    projects,
    education,
  } = cvData;

  return (
    <main className="min-h-screen bg-white px-8 py-10 text-black print:min-h-0 print:p-0">
      <article className="mx-auto max-w-4xl bg-white print:max-w-none">
        <header className="border-b border-gray-300 pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            {profile.role}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            {profile.latinName}
          </h1>
          <p className="mt-1 text-sm text-gray-600">{profile.name}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
            <span>{profile.location}</span>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}: {link.href.replace(/^https?:\/\//, "")}
              </a>
            ))}
          </div>
        </header>

        <section className="grid gap-8 py-6 md:grid-cols-[1.4fr_0.8fr] print:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <CvSection title="Profile">
              <p className="text-sm leading-6 text-gray-700">{summary}</p>
            </CvSection>

            <CvSection title="Projects">
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.name}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {project.website.replace(/^https?:\/\//, "")}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-700">
                      {project.summary}
                    </p>
                    <p className="mt-1 text-xs font-medium text-gray-600">
                      {project.stack}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-700">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="Education">
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {education.school} · {education.period}
                  </p>
                </div>
                {educationHistory.map((item) => (
                  <div key={`${item.company}-${item.period}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.period}</p>
                    </div>
                    <p className="text-sm text-gray-700">{item.company}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-700">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CvSection>
          </div>

          <aside className="space-y-6">
            <CvSection title="Skills">
              <div className="space-y-3">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-sm font-semibold">{group.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      {group.skills.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="What I can do">
              <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-gray-700">
                {capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </CvSection>

            <CvSection title="Languages">
              <p className="text-sm leading-6 text-gray-700">
                {languages.join(", ")}
              </p>
            </CvSection>
          </aside>
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
    <section>
      <h2 className="mb-3 border-b border-gray-200 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
        {title}
      </h2>
      {children}
    </section>
  );
}
