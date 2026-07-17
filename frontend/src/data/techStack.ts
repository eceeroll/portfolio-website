import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVite,
  SiPostman,
  SiAngular,
  SiMysql,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

export interface TechItem {
  name: string;
  icon: IconType;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Typescript", icon: SiTypescript },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
    ],
  },
];
