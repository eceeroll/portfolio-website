import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { href: "https://github.com/eceeroll", icon: FaGithub, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/ece-erol-b64231242",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    { href: "ecee.eroll00@gmail.com", icon: FaEnvelope, label: "Email" },
  ];

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-text font-semibold text-sm">Ece Erol</p>
          <p className="text-text-muted text-xs mt-0.5">
            Full-Stack Developer · © {year}
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-9 h-9 flex items-center justify-center bg-surface border border-border rounded-lg text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
