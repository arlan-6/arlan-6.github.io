export const cvData = {
  profile: {
    name: "Әлібай Арлан Аханұлы",
    latinName: "Alibay Arlan Akhanuly",
    initials: "AR",
    role: "Junior Web Developer",
    location: "Astana, Kazakhstan",
    email: "arlanhan1997@gmail.com",
    phone: "+7 707 259 6137",
    tagline:
      "I build clear, user-friendly, and scalable web applications with React and Next.js.",
  },
  links: [
    { label: "GitHub", href: "https://github.com/arlan-6" },
    { label: "Telegram", href: "https://t.me/ArLaN_XD" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arlan-alibai-83b550286/",
    },
  ],
  skillGroups: [
    {
      label: "Strongest",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      variant: "accent",
    },
    {
      label: "Used in projects",
      skills: ["Supabase", "MongoDB", "Better Auth", "shadcn/ui"],
      variant: "muted",
    },
    {
      label: "Learning",
      skills: ["Go", "Backend development", "Data analytics"],
      variant: "muted",
    },
  ],
  languages: ["Kazakh", "English", "Russian"],
  summary:
    "I am a junior web developer focused on building practical web applications with React and Next.js. I have built projects with authentication, database integration, reusable UI components, and responsive interfaces. I am currently expanding my backend skills with Go and looking for internship opportunities where I can contribute, learn, and grow in a real development team.",
  capabilities: [
    "Build responsive pages from designs and mockups",
    "Create reusable React components",
    "Work with Next.js routing and layouts",
    "Connect apps to databases using Supabase or MongoDB",
    "Implement basic authentication flows",
    "Use Git and GitHub in project workflows",
  ],
  educationHistory: [
    {
      period: "09/2025 - Present",
      title: "Bachelor Student",
      company: "Astana IT University",
      points: [
        "Studying Big Data Analytics with coursework in data analysis, programming, databases, and information processing methods.",
        "Continuing frontend practice with React, Next.js, Tailwind CSS, and shadcn/ui.",
      ],
    },
    {
      period: "09/2021 - 06/2025",
      title: "Software Development Student",
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
      summary: "Student service platform for viewing schedules and deadlines.",
      href: "https://github.com/arlan-6/qoldanba",
      website: "https://qoldanba.vercel.app",
      stack: "Next.js, React.js, Tailwind CSS, shadcn/ui, Supabase",
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
        "Built a student-focused dashboard for schedule and deadline access.",
        "Implemented authentication for student accounts.",
        "Connected schedule and deadline records to Supabase-backed storage.",
        "Created reusable responsive UI components with Tailwind CSS and shadcn/ui.",
      ],
    },
    {
      name: "Shaqr",
      summary: "Web platform for creating and managing online invitations.",
      href: "https://github.com/arlan-6/invites",
      website: "https://invitestry2.vercel.app/",
      stack: "Next.js, React.js, Tailwind CSS, shadcn/ui, MongoDB, Better Auth",
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
        "Built invitation creation flows for saving event details online.",
        "Configured account authentication with Better Auth.",
        "Stored invitation content persistently with MongoDB.",
        "Designed responsive form and preview interfaces for invitation pages.",
      ],
    },
  ],
  education: {
    school: "Astana IT University (AITU)",
    degree: "Bachelor's Degree in Big Data Analytics",
    period: "09/2025 - Present",
  },
} as const;

export type CvData = typeof cvData;
