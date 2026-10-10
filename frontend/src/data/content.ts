import { Zap, Rocket, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HeroHighlight {
  icon: LucideIcon;
  label: string;
}

export interface SectionContent {
  headingNumber: string;
  eyebrow: string;
  title: string;
  description?: string;
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
  ctaContact: "Get In Touch",
  ctaSecondary: "Download CV",
  scrollLabel: "Scroll to explore",
  terminal: {
    fileName: "developer.ts",
    lines: [
      "const developer = {",
      "  name: 'Ece Erol',",
      "  role: 'Full-Stack Developer',",
      "  focus: ['Frontend', 'Backend', 'Architecture'],",
      "  coffeeConsumed: 'too much',",
      "};",
    ],
  },
};

export const aboutContent = {
  section: {
    headingNumber: "01",
    eyebrow: "About Me",
    title: "Turning ideas into real products.",
  } as SectionContent,
  paragraphs: [
    "I'm a Full-Stack Software Developer who enjoys turning ideas into real products. From planning and architecture to development and deployment, I enjoy being involved in every stage of the process and bringing ideas to life through software.",
    "I enjoy working across the entire stack — building intuitive user experiences, designing scalable backend systems, working with databases, and ensuring applications are reliable in production environments.",
    "What excites me most about software development is the constant opportunity to learn, improve, and solve new challenges. I enjoy building solutions that are not only functional, but also maintainable, efficient, and enjoyable to use.",
  ],
  bioLabel: "Who I am",
  focusLabel: "What I focus on",
  connectLabel: "Let's connect",
  connectText: "Find me online or grab a copy of my CV.",
  portraitAlt: "Illustrated portrait of Ece Erol Subaş wearing headphones",
};

export const experienceContent = {
  section: {
    headingNumber: "02",
    eyebrow: "Experience",
    title: "Where I've learned and built.",
    description:
      "From computer engineering fundamentals to shipping features on production systems in an Agile team.",
  } as SectionContent,
};

export const techStackContent = {
  section: {
    headingNumber: "03",
    eyebrow: "Tech Stack",
    title: "Tools I build with.",
    description:
      "A pragmatic toolkit that covers the whole journey — from the interface to the database to the cloud.",
  } as SectionContent,
};

export const projectsContent = {
  section: {
    headingNumber: "04",
    eyebrow: "Projects",
    title: "Selected work.",
    description:
      "Things I've designed, built and shipped. This list is served live from my own Express + PostgreSQL API.",
  } as SectionContent,
  loadingText: "Loading projects...",
  slowLoadingText:
    "Waking up the API server — this can take a few seconds on the first visit.",
  emptyText: "New projects are on the way. Check back soon!",
  errorTitle: "Projects couldn't be loaded",
  retryLabel: "Try again",
  filterAllLabel: "All",
  filterLabel: "Filter projects by technology",
};

export const contactContent = {
  section: {
    headingNumber: "05",
    eyebrow: "Contact",
    title: "Let's build something together.",
  } as SectionContent,
  intro:
    "Have something in mind or just want to connect? Feel free to reach out — I'd love to hear from you.",
  emailLabel: "Email me directly",
  copyLabel: "Copy email",
  copiedLabel: "Email copied to clipboard",
  successTitle: "Message sent!",
  successMessage: "Thanks for reaching out — I'll get back to you soon.",
  errorTitle: "Message not sent",
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
  fields: {
    name: { label: "Name", placeholder: "Jane Doe" },
    email: { label: "Email", placeholder: "jane@company.com" },
    message: {
      label: "Message",
      placeholder: "Tell me a little about your project, role or idea…",
    },
  },
};

export const footerContent = {
  tagline: "Designed & built with React, TypeScript and Tailwind CSS.",
  backToTop: "Back to top",
};
