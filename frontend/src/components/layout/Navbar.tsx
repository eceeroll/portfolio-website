import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useActiveSection } from "../../hooks/useActiveSections";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-surface/60 to-background/50 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-primary font-bold text-sm">EE</span>
          </div>
        </a>

        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-px bg-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4 pl-6 border-l border-border">
            <a
              href="https://github.com/eceeroll"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-primary transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/kullaniciadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-primary transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
