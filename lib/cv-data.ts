export const cvData = {
  profile: {
    name: "Әлібай Арлан Аханұлы",
    latinName: "Alibay Arlan Akhanuly",
    initials: "AR",
    role: "Junior Frontend Developer",
    location: "Astana, Kazakhstan",
    email: "arlanhan1997@gmail.com",
    phone: "+7 707 259 6137",
    targetPosition: "Frontend Internship / Junior Frontend Developer",
    tagline:
      "React, Next.js, TypeScript, and responsive web applications.",
    availability:
      "Open to frontend internships and junior opportunities in Astana or remote",
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
        "CRUD workflows",
        "Database schemas",
      ],
      variant: "muted",
    },
    {
      label: "Tools",
      skills: ["Git", "GitHub", "Vercel", "VS Code"],
      variant: "muted",
    },
    {
      label: "Additional Learning",
      skills: ["Go", "Backend API design", "Data analytics"],
      variant: "muted",
    },
  ],
  languages: [
    "Kazakh - Native",
    "Russian - Fluent",
    "English - Intermediate (B1/B2), technical reading",
  ],
  summary:
    "Frontend developer and Big Data Analytics student with hands-on experience building and deploying two responsive web applications using Next.js, React, and TypeScript. Implemented authentication, protected routes, reusable UI components, and database-backed features with Supabase and MongoDB.",
  capabilities: [
    "Build responsive pages from designs and mockups",
    "Create reusable React and shadcn/ui components",
    "Work with Next.js routing, layouts, and frontend architecture",
    "Connect apps to Supabase or MongoDB-backed data",
    "Implement protected routes and account authentication flows",
    "Use Git, GitHub, and Vercel in deployment workflows",
  ],

  educationHistory: [
    {
      period: "Sep 2025 - Present | Expected graduation: 2028",
      title: "Bachelor's degree in Big Data Analytics",
      company: "Astana IT University, Astana",
      points: [
        "Relevant coursework: Programming, Databases, Data Analysis, Information Processing.",
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
        "Implemented Supabase authentication, protected routes, and database-backed academic content.",
        "Built reusable interface components and responsive layouts with Tailwind CSS and shadcn/ui.",
        "Deployed the application on Vercel and published the source code on GitHub.",
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
        "Developed event creation forms, invitation preview pages, and the end-to-end invitation creation flow.",
        "Integrated Better Auth with MongoDB for account authentication and persistent invitation data.",
        "Created responsive, reusable components for the form and preview interfaces.",
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
  hackathons: [
    {
      period: "Mar - Apr 2026",
      name: "Decentrathon 5.0",
      organization: "AI InDrive track",
      result: "Participant",
      certificateHref: "https://arlan-6.github.io/certificates/hackathon/decentrathon5.pdf",
    },
    {
      period: "Apr 2026",
      name: "HackNU/26",
      organization: "Nazarbayev University ACM Student Chapter",
      result: "Participant",
      certificateHref: "https://arlan-6.github.io/certificates/hackathon/hackNu26.pdf",
    },
    {
      period: "Oct 2025",
      name: "HackNU/25",
      organization: "Nazarbayev University ACM Student Chapter",
      result: "Participant",
      certificateHref:
        "https://arlan-6.github.io/certificates/hackathon/Arlan_Alibay_hacknu2025_certificate.pdf",
    },
  ],
  certifications: [
    {
      period: "Jul 2026",
      name: "Python for Data Science, AI & Development",
      issuer: "IBM via Coursera",
      credentialHref: "https://coursera.org/verify/0F3SOSJZL6X0",
      certificateHref:
        "https://arlan-6.github.io/certificates/coursera/Coursera%200F3SOSJZL6X0.pdf",
    },
  ],
  leadershipActivities: [
    {
      period: "2026 - Present",
      title: "Digital Committee Member",
      organization: "Student Association, AITU",
      points: [
        "Contribute to planning and coordination for student-facing digital initiatives within AITU's Student Association.",
      ],
    },
  ],
} as const;

export type CvData = typeof cvData;
