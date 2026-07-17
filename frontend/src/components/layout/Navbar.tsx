import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useActiveSection } from "../../hooks/useActiveSections";
import logo from "../../assets/logo2.png";
import { navLinks, profileData } from "../../data/profile";

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
      className="
        fixed
        top-5
        left-0
        w-full
        z-50
        transition-all
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`
            flex items-center justify-between
            rounded-2xl
            border
            px-6 py-3
            transition-all duration-300

            ${
              scrolled
                ? "bg-surface/75 backdrop-blur-xl border-border shadow-xl shadow-black/20"
                : "bg-surface/40 backdrop-blur-md border-border/50"
            }
          `}
        >
          <a
            href="#home"
            className="
              flex items-center
              group
            "
          >
            <img
              src={logo}
              alt="EE Logo"
              className="
                h-20
                w-auto
                object-contain
                transition-all
                duration-300
                group-hover:scale-110
                drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]
              "
            />
          </a>

          {/* Navigation */}
          <div
            className="
              hidden md:flex
              items-center
              gap-2
              bg-background/50
              border
              border-border
              rounded-full
              p-1
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`
                  relative
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  font-mono
                  ${
                    activeSection === link.id
                      ? "text-white bg-primary shadow-lg shadow-primary/40"
                      : "text-text-muted hover:text-white"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                bg-primary/10
                border
                border-primary/20
                text-text
                hover:text-primary
                hover:border-primary
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-primary/20
                transition-all
                duration-300
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                bg-primary/10
                border
                border-primary/20
                text-text
                hover:text-primary
                hover:border-primary
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-primary/20
                transition-all
                duration-300
              "
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
