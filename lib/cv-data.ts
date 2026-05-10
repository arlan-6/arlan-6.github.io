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
      "I build practical web applications with React, Next.js, and TypeScript.",
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
      label: "Backend & Database",
      skills: ["Supabase", "MongoDB", "Better Auth"],
      variant: "muted",
    },
    {
      label: "Tools",
      skills: ["Git", "GitHub", "Vercel", "VS Code"],
      variant: "muted",
    },
    {
      label: "Learning",
      skills: ["Go", "Backend development", "API design"],
      variant: "muted",
    },
  ],
  languages: [
    "Kazakh - Native",
    "Russian - Fluent",
    "English - A2/B1, technical reading",
  ],
  summary:
    "I build responsive web applications with React, Next.js, TypeScript, and Tailwind CSS. I focus on clean UI, reusable components, authentication, and database-connected features. Open to frontend internships and junior web developer roles.",
  capabilities: [
    "Build responsive pages from designs and mockups",
    "Create reusable React components",
    "Work with Next.js routing and layouts",
    "Connect apps to databases using Supabase or MongoDB",
    "Implement basic authentication flows",
    "Use Git and GitHub in project workflows",
  ],
  practicalExperience: [
    "Built and deployed full-stack web applications using Next.js, Supabase, and MongoDB.",
    "Practiced authentication, responsive design, database integration, and reusable component development.",
    "Deployed projects to Vercel and managed code with GitHub.",
  ],
  educationHistory: [
    {
      period: "09/2025 - Present",
      title: "BSc in Big Data Analytics",
      company: "Astana IT University",
      points: [
        "Coursework: programming, databases, data analysis, information processing.",
        "Continuing frontend practice with React, Next.js, Tailwind CSS.",
      ],
    },
    {
      period: "09/2021 - 06/2025",
      title: "Software Development",
      company: "Innovative Technical College",
      points: [
        "Completed training in software development, programming, databases, and web technologies.",
        "Built practical projects as part of technical coursework.",
      ],
    },
  ],
  projects: [
    {
      name: "Qoldanba",
      subtitle: "Student Dashboard",
      summary:
        "A web platform for students to view schedules, deadlines, and academic information.",
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
        "Built responsive dashboard pages with Next.js and Tailwind CSS.",
        "Connected schedule and deadline data using Supabase.",
        "Implemented authentication and protected routes.",
        "Created reusable UI components with shadcn/ui.",
      ],
      caseStudy: {
        problem:
          "Students need a simple way to check schedules and deadlines.",
        solution:
          "Built a dashboard with authentication, database-connected schedule data, and responsive pages.",
        role:
          "Frontend development, UI design, authentication setup, and database integration.",
        learned:
          "Protected routes, reusable components, database queries, and responsive layout.",
      },
    },
    {
      name: "Shaqr",
      subtitle: "Online Invitation Platform",
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
        "Built invitation creation and preview pages.",
        "Stored invitation data using MongoDB.",
        "Added user authentication with Better Auth.",
        "Designed responsive UI for mobile and desktop users.",
      ],
      caseStudy: {
        problem:
          "Event organizers need a simple way to create and share invitations online.",
        solution:
          "Built a full-stack invitation flow with persistent event data and responsive preview pages.",
        role:
          "Frontend development, form flow implementation, authentication, and database integration.",
        learned:
          "Form state, preview layouts, MongoDB persistence, and Better Auth integration.",
      },
    },
  ],
  education: {
    school: "Astana IT University (AITU)",
    degree: "Bachelor's Degree in Big Data Analytics",
    period: "09/2025 - Present",
  },
} as const;

export type CvData = typeof cvData;
