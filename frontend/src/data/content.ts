import { Zap, Rocket, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HeroHighlight {
  icon: LucideIcon;
  label: string;
}

export interface SectionContent {
  headingNumber: string;
  title: string;
  description?: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryLabel?: string;
}

export const heroContent = {
  badge: "FULL-STACK ENGINEER • REACT • NODE.JS",
  name: "Ece Erol Subaş",
  subtitle: "Turning ideas into reliable digital products.",
  description:
    "From responsive interfaces to backend APIs, I enjoy building web applications that solve real problems and deliver a smooth user experience.",
  highlights: [
    { icon: Zap, label: "React & TypeScript" },
    { icon: Rocket, label: "Full-Stack Development" },
    { icon: Cpu, label: "Computer Engineer" },
  ] as HeroHighlight[],
  ctaPrimary: "View My Projects",
  ctaSecondary: "Get In Touch",
};

export const aboutContent = {
  section: {
    headingNumber: "01",
    title: "About Me",
  } as SectionContent,
  paragraphs: [
    "I'm a Computer Engineering student with a strong interest in full-stack development. I enjoy turning ideas into working products — from designing a database schema to shipping a polished, responsive interface.",
    "My recent focus has been on the TypeScript ecosystem — building REST APIs with Node.js and Express, working with PostgreSQL and Prisma, and crafting interfaces with React and Tailwind CSS.",
    "I'm currently looking for opportunities to grow as a developer and contribute to real-world projects.",
  ],
};

export const projectsContent = {
  section: {
    headingNumber: "03",
    title: "My Projects",
  } as SectionContent,
  loadingText: "Loading projects...",
};

export const contactContent = {
  section: {
    headingNumber: "04",
    title: "Get In Touch",
  } as SectionContent,
  intro:
    "Have a project in mind or just want to say hi? My inbox is always open. I'll try my best to get back to you as soon as possible.",
  successMessage: "✓ Message sent successfully! I'll get back to you soon.",
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
};
