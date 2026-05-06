import { siteConfig } from "@/lib/site-config";
import type { CvData } from "@/lib/cv-data";

type StructuredDataProps = {
  links: CvData["links"];
  profile: CvData["profile"];
  projects: CvData["projects"];
};

export function StructuredData({
  links,
  profile,
  projects,
}: StructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    mainEntity: {
      "@type": "Person",
      name: profile.latinName,
      alternateName: profile.name,
      jobTitle: profile.role,
      email: profile.email,
      telephone: profile.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Astana",
        addressCountry: "KZ",
      },
      sameAs: links.map((link) => link.href),
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
        "MongoDB",
      ],
      hasPart: projects.map((project) => ({
        "@type": "SoftwareSourceCode",
        name: project.name,
        description: project.summary,
        codeRepository: project.href,
        programmingLanguage: "TypeScript",
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
