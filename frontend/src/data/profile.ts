import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

export interface NavLink {
  id: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  displayText?: string;
  icon: IconType;
  external?: boolean;
}

export const profileData = {
  name: "Ece Erol",
  title: "Full-Stack Developer",
  email: "ecee.eroll00@gmail.com",
  githubUrl: "https://github.com/eceeroll",
  linkedinUrl: "https://www.linkedin.com/in/ece-erol-b64231242",
};

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    href: `mailto:${profileData.email}`,
    label: "Email",
    displayText: profileData.email,
    icon: FaEnvelope,
    external: false,
  },
  {
    href: profileData.githubUrl,
    label: "GitHub",
    displayText: profileData.githubUrl,
    icon: FaGithub,
    external: true,
  },
  {
    href: profileData.linkedinUrl,
    label: "LinkedIn",
    displayText: profileData.linkedinUrl,
    icon: FaLinkedin,
    external: true,
  },
];
