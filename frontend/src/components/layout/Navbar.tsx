import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useActiveSection } from "../../hooks/useActiveSections";
import logo from "../../assets/logo2.png";
import { navLinks, profileData } from "../../data/profile";

const Navbar = () => {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      "
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div
          className={`
            rounded-2xl
            border
            transition-all
            duration-300

            ${
              scrolled
                ? "bg-surface/75 backdrop-blur-xl border-border shadow-xl shadow-black/20"
                : "bg-surface/40 backdrop-blur-md border-border/50"
            }
          `}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3">
            {/* Logo */}
            <a href="#home" className="flex items-center group">
              <img
                src={logo}
                alt="EE Logo"
                className="
                  h-12
                  md:h-20
                  w-auto
                  object-contain
                  transition-all
                  duration-300
                  group-hover:scale-110
                  drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]
                "
              />
            </a>

            {/* Desktop Navigation */}
            <div
              className="
                hidden
                md:flex
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

            {/* Desktop Socials */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-11 h-11
                  rounded-full
                  flex items-center justify-center
                  bg-primary/10
                  border border-primary/20
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
                  w-11 h-11
                  rounded-full
                  flex items-center justify-center
                  bg-primary/10
                  border border-primary/20
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                bg-primary/10
                border
                border-primary/20
                text-primary
              "
            >
              {menuOpen ? (
                <HiOutlineX size={22} />
              ) : (
                <HiOutlineMenuAlt3 size={22} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-300

              ${menuOpen ? "max-h-125 opacity-100 pb-4" : "max-h-0 opacity-0"}
            `}
          >
            <div className="px-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    py-3
                    px-4
                    rounded-xl
                    font-medium
                    transition-all

                    ${
                      activeSection === link.id
                        ? "bg-primary text-white"
                        : "text-text-muted hover:bg-primary/10 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}

              <div className="h-px bg-border my-2" />

              <div className="flex items-center gap-3">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-primary/10
                    border
                    border-primary/20
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-primary/10
                    border
                    border-primary/20
                  "
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
