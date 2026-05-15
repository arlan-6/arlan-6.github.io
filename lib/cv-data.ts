export const cvData = {
  profile: {
    name: "Әлібай Арлан Аханұлы",
    latinName: "Alibay Arlan Akhanuly",
    initials: "AR",
    role: "Junior Web Developer",
    location: "Astana, Kazakhstan",
    email: "arlanhan1997@gmail.com",
    phone: "+7 707 259 6137",
    targetPosition: "Frontend Developer Intern / Junior Web Developer",
    tagline:
      "React, Next.js, TypeScript, and full-stack web applications.",
  },
  links: [
    { label: "GitHub", href: "https://github.com/arlan-6" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arlan-alibai-83b550286/",
    },
    { label: "Telegram", href: "https://t.me/ArLaN_XD" },
  ],
  skillGroups: [
    {
      label: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      variant: "accent",
    },
    {
      label: "Backend & Databases",
      skills: [
        "Supabase",
        "MongoDB",
        "Better Auth",
        "REST API basics",
        "CRUD flows",
        "Database schema",
      ],
      variant: "muted",
    },
    {
      label: "Tools",
      skills: ["Git", "GitHub", "Vercel", "Deployment", "VS Code"],
      variant: "muted",
    },
    {
      label: "Learning",
      skills: ["Go", "Backend development", "API design", "Data analytics"],
      variant: "muted",
    },
  ],
  languages: [
    "Kazakh - Native",
    "Russian - Fluent",
    "English - B1/B2, technical reading",
  ],
  summary:
    "Junior Web Developer based in Astana, focused on React, Next.js, TypeScript, and practical full-stack web applications. Built live projects with authentication, database integration, reusable UI components, responsive layouts, and Vercel deployment. Currently expanding backend skills with Go and seeking internship or junior developer opportunities in Astana or remote teams.",
  capabilities: [
    "Build responsive pages from designs and mockups",
    "Create reusable React and shadcn/ui components",
    "Work with Next.js routing, layouts, and frontend architecture",
    "Connect apps to Supabase or MongoDB-backed data",
    "Implement protected routes and account authentication flows",
    "Use Git, GitHub, and Vercel in deployment workflows",
  ],
  practicalExperience: {
    title: "Independent Web Developer / Student Projects",
    period: "2024 - Present",
    points: [
      "Built and deployed full-stack web applications using Next.js, TypeScript, Supabase, MongoDB, and Vercel.",
      "Owned routing, responsive UI, reusable components, authentication flows, and database-connected CRUD features.",
      "Maintained source code on GitHub with live demos, project screenshots, and public repositories.",
    ],
  },
  educationHistory: [
    {
      period: "09/2025 - Present",
      title: "Bachelor's Degree in Big Data Analytics",
      company: "Astana IT University, Astana",
      points: [
        "Coursework: programming, databases, data analysis, information processing.",
        "Continuing frontend practice with React, Next.js, Tailwind CSS.",
      ],
    },
  ],
  projects: [
    {
      name: "Qoldanba",
      subtitle: "Student Adaptation Platform",
      summary:
        "A centralized platform for first-year students to view schedules, deadlines, and academic resources in one interface.",
      href: "https://github.com/arlan-6/qoldanba",
      website: "https://qoldanba.vercel.app",
      stack: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Supabase",
      screenshots: [
        {
          src: "/screenshots/qoldanba/home-page.png",
          alt: "Qoldanba landing page screenshot",
          label: "Landing page",
          width: 1920,
          height: 1096,
          aspectRatio: "1920 / 1096",
        },
        {
          src: "/screenshots/qoldanba/dashboard-page.png",
          alt: "Qoldanba dashboard screenshot",
          label: "Dashboard",
          width: 1920,
          height: 1190,
          aspectRatio: "1920 / 1190",
        },
        {
          src: "/screenshots/qoldanba/academic-year-page.png",
          alt: "Qoldanba academic year view screenshot",
          label: "Academic year",
          width: 807,
          height: 355,
          aspectRatio: "807 / 355",
        },
        {
          src: "/screenshots/qoldanba/dashboard-week-schedule-page.png",
          alt: "Qoldanba weekly schedule screenshot",
          label: "Weekly schedule",
          width: 1920,
          height: 1080,
          aspectRatio: "1920 / 1080",
        },
      ],
      details: [
        "Developed a centralized platform for first-year students to access schedules, deadlines, and academic resources in one place.",
        "Solved the problem of academic information being scattered across different websites and files.",
        "Designed the platform to help new students adapt faster to university pace, deadlines, and digital tools.",
        "Implemented authentication and protected routes using Supabase.",
        "Built responsive UI components with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
      ],
      caseStudy: {
        problem:
          "Academic information for first-year students is scattered across separate websites and files.",
        solution:
          "Developed one interface for schedules, deadlines, and academic resources to help new students adapt faster to university workflows.",
        role:
          "Frontend development, UI design, authentication setup, database integration, and deployment.",
        learned:
          "Protected routes, reusable components, database records, responsive layout, and deployment workflow.",
      },
    },
    {
      name: "Shaqr",
      subtitle: "Online Invitation Management Platform",
      summary:
        "A full-stack web app for creating and sharing digital invitations.",
      href: "https://github.com/arlan-6/invites",
      website: "https://invitestry2.vercel.app/",
      stack: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, MongoDB, Better Auth",
      screenshots: [
        {
          src: "/screenshots/shaqr/home-page.png",
          alt: "Shaqr invitation platform screenshot",
          label: "Invitation builder",
          width: 1440,
          height: 1000,
          aspectRatio: "1440 / 1000",
        },
      ],
      details: [
        "Built a web platform for creating, managing, and sharing online invitations.",
        "Developed event detail forms, invitation preview pages, and responsive UI flows.",
        "Configured account authentication with Better Auth.",
        "Stored invitation data persistently using MongoDB.",
        "Designed reusable interface components for form and preview sections.",
      ],
      caseStudy: {
        problem:
          "Event organizers need a simple way to create and share invitations online.",
        solution:
          "Built a multi-step invitation creation flow with persistent event data, account authentication, and responsive preview pages.",
        role:
          "Frontend development, form flow implementation, authentication, and database integration.",
        learned:
          "Form state, preview layouts, MongoDB persistence, and Better Auth integration.",
      },
    },
  ],
} as const;

export type CvData = typeof cvData;
