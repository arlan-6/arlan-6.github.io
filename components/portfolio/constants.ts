import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconMail,
} from "@tabler/icons-react";

export const sectionItems = [
  { id: "about", label: "About" },
  { id: "capabilities", label: "Can Do" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
] as const;

export type SectionId = (typeof sectionItems)[number]["id"];

export const socialIcons = {
  GitHub: IconBrandGithub,
  LinkedIn: IconBrandLinkedin,
  Telegram: IconBrandTelegram,
  Email: IconMail,
} as const;
