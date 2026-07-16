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
];
