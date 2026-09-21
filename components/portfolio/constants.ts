import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconGlobe,
  IconMail,
} from "@tabler/icons-react";

export const sectionItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "activities", label: "Activities" },
  { id: "skills", label: "Skills" },
  { id: "capabilities", label: "Can Do" },

  { id: "connect", label: "Connect" },
] as const;

export type SectionId = (typeof sectionItems)[number]["id"];

export const socialIcons = {
  Portfolio: IconGlobe,
  GitHub: IconBrandGithub,
  LinkedIn: IconBrandLinkedin,
  Telegram: IconBrandTelegram,
  Email: IconMail,
} as const;
