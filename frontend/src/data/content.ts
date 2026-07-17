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
  badge: "FULL-STACK ENGINEER",
  name: "Ece Erol Subaş",
  subtitle: "Building thoughtful digital experiences.",
  description:
    "I enjoy turning ideas into products people can actually use — combining thoughtful design, clean implementation, and attention to detail throughout the development process.",
  highlights: [
    { icon: Zap, label: "Full-Stack Development" },
    { icon: Rocket, label: "System Architecture" },
    { icon: Cpu, label: "Cloud & Deployment" },
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
    "I'm a Full-Stack Software Developer who enjoys turning ideas into real products. From planning and architecture to development and deployment, I enjoy being involved in every stage of the process and bringing ideas to life through software.",
    "I enjoy working across the entire stack — building intuitive user experiences, designing scalable backend systems, working with databases, and ensuring applications are reliable in production environments.",
    "What excites me most about software development is the constant opportunity to learn, improve, and solve new challenges. I enjoy building solutions that are not only functional, but also maintainable, efficient, and enjoyable to use.",
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
    "Have something in mind or just want to connect? Feel free to reach out — I'd love to hear from you.",
  successMessage: "✓ Message sent successfully! I'll get back to you soon.",
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
};
