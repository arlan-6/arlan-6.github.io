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
      "I build understandable, convenient, and scalable web applications with React and Next.js.",
  },
  links: [
    { label: "GitHub", href: "https://github.com/arlan-6" },
    { label: "Telegram", href: "https://t.me/ArLaN_XD" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arlan-alibai-83b550286/",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Python",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "shadcn/ui",
    "Supabase",
    "MongoDB",
    "Better Auth",
  ],
  languages: ["Kazakh", "English", "Russian"],
  summary:
    "I am a student and junior web developer with hands-on practice in React and Next.js through pet projects and coursework. I am also studying Go to grow my backend skills. I am interested in building clear, user-friendly, and scalable web applications, and I learn quickly as I continue developing professionally.",
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
      summary: "A student service for viewing schedules and deadlines.",
      href: "https://github.com/arlan-6/qoldanba",
      stack: "Next.js, React.js, Tailwind CSS, shadcn/ui, Supabase",
      details: [
        "Built authentication for students.",
        "Connected the app to a database for schedule and deadline data.",
        "Developed the project between December 2025 and January 2026.",
      ],
    },
    {
      name: "Shaqr",
      summary: "A platform for creating online invitations.",
      href: "https://github.com/arlan-6/invites",
      stack: "Next.js, React.js, Tailwind CSS, shadcn/ui, MongoDB, Better Auth",
      details: [
        "Configured user authentication.",
        "Implemented persistent data storage for invitation content.",
        "Developed the project between March 2025 and May 2025.",
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
