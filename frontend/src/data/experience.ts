export interface TimelineItem {
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    type: "education",
    title: "Computer Engineering Bachelor Degree",
    organization: "Kocaeli University",
    period: "2021-2025",
    description:
      "Focused on software engineering, algorithms, and web development. Actively building full-stack projects alongside coursework.",
  },
  {
    type: "experience",
    title: "Software Development Intern",
    organization: "Datasoft",
    period: "Summer 2024",
    description:
      "Worked on real-world features, collaborated with a development team, and gained hands-on experience with production codebases.",
  },
  {
    type: "experience",
    title: "Junior Software Developer",
    organization: "Nordstrom",
    period: "2025-2026",
    description:
      "Contributed to full-stack software development within an Agile Scrum team, working across frontend, backend, system design, and deployment processes. Collaborated with engineers on production systems, participated in team ceremonies, and helped deliver features in a fast-paced development environment.",
  },
  æ,
];
