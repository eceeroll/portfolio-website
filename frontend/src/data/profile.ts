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
  fullName: "Ece Erol Subaş",
  title: "Full-Stack Developer",
  email: "ecee.eroll00@gmail.com",
  githubUrl: "https://github.com/eceeroll",
  linkedinUrl: "https://www.linkedin.com/in/ece-erol-b64231242",
  cvUrl: "/Ece_Erol_CV.pdf",
};

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
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
    displayText: "github.com/eceeroll",
    icon: FaGithub,
    external: true,
  },
  {
    href: profileData.linkedinUrl,
    label: "LinkedIn",
    displayText: "in/ece-erol",
    icon: FaLinkedin,
    external: true,
  },
];
