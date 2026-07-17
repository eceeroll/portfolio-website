import { motion } from "framer-motion";
import { profileData, socialLinks } from "../../data/profile";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = socialLinks.map((link) => ({
    href: link.href,
    icon: link.icon,
    label: link.label,
    external: link.external !== false,
  }));

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-text font-semibold text-sm">{profileData.name}</p>
          <p className="text-text-muted text-xs mt-0.5">
            {profileData.title} · © {year}
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ href, icon: Icon, label, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
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
