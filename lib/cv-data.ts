export const cvData = {
  profile: {
    name: "Әлібай Арлан Аханұлы",
    latinName: "Alibay Arlan Akhanuly",
    initials: "AR",
    role: "Frontend Developer Intern / Junior Web Developer",
    location: "Astana, Kazakhstan",
    email: "arlanhan1997@gmail.com",
    phone: "+7 707 259 6137",
    targetPosition: "Frontend Developer Intern / Junior Web Developer",
    tagline:
      "React, Next.js, TypeScript, and responsive web applications.",
    availability:
      "Frontend internship, part-time during study / full-time in summer, Astana or remote",
  },
  links: [
    { label: "Portfolio", href: "https://arlan-6.github.io" },
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
      skills: ["Git", "GitHub", "Vercel", "Vercel deployment", "VS Code"],
      variant: "muted",
    },
    {
      label: "Currently learning",
      skills: ["Go", "Backend API design", "Data analytics"],
      variant: "muted",
    },
  ],
  languages: [
    "Kazakh - Native",
    "Russian - Fluent",
    "English - B1/B2, technical reading",
  ],
  summary:
    "Frontend Developer Intern / Junior Web Developer based in Astana, focused on React, Next.js, TypeScript, and responsive web applications. Built and deployed live student projects with authentication, protected routes, database integration, reusable UI components, and Vercel deployment. Currently studying Big Data Analytics at Astana IT University and seeking a frontend internship or junior developer opportunity.",
  capabilities: [
    "Build responsive pages from designs and mockups",
    "Create reusable React and shadcn/ui components",
    "Work with Next.js routing, layouts, and frontend architecture",
    "Connect apps to Supabase or MongoDB-backed data",
    "Implement protected routes and account authentication flows",
    "Use Git, GitHub, and Vercel in deployment workflows",
  ],
  practicalExperience: {
    title: "Project Experience",
    period: "2024 - Present",
    points: [
      "Built and deployed student web applications using Next.js, TypeScript, Supabase, MongoDB, and Vercel.",
      "Owned routing, responsive UI, reusable components, authentication flows, and database-connected CRUD features.",
      "Maintained source code on GitHub with live demos, project screenshots, and public repositories.",
    ],
  },
  educationHistory: [
    {
      period: "09/2025 - Present | Expected graduation: 2028",
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
        "A student adaptation platform for first-year students to view schedules, deadlines, and academic resources in one interface.",
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
        "Built a responsive platform for first-year students to access schedules, deadlines, and academic resources.",
        "Implemented Supabase authentication, protected routes, and database-connected content.",
        "Created reusable UI components and deployed the project on Vercel.",
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
        "Built a web app for creating, managing, and sharing digital invitations.",
        "Developed event forms, invitation preview pages, and responsive user flows.",
        "Integrated Better Auth and MongoDB for authentication and persistent invitation data.",
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
  leadershipActivities: [
    {
      period: "2026 - Present",
      title: "Digital Committee Member",
      organization: "Student Association, AITU",
      points: [
        "Participate in the digital committee focused on student-facing digital initiatives.",
        "Support early-stage planning and coordination of digital projects.",
        "Collaborate with other students on ideas for university digital services.",
      ],
    },
  ],
} as const;

export type CvData = typeof cvData;
