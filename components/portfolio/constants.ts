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

  { id: "skills", label: "Skills" },
  { id: "capabilities", label: "Focus" },

  { id: "activities", label: "Leadership" },
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
