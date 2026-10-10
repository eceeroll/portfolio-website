import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Download, Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSections";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { navLinks, profileData } from "@/data/profile";
import { heroContent } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { EASE_OUT_EXPO } from "@/lib/animations";
import { cn } from "@/lib/cn";
import logo from "@/assets/logo.webp";

const SECTION_IDS = navLinks.map((link) => link.id);

const iconLinkClass =
  "flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-white/5 hover:text-white";

const Navbar = () => {
  const activeSection = useActiveSection(SECTION_IDS);
  const { hidden, scrolled } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const isHidden = hidden && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-5 sm:pt-4",
        isHidden && "-translate-y-[130%]",
      )}
    >
      <nav
        aria-label="Primary"
            className={cn(
              "mx-auto max-w-6xl rounded-2xl border transition-[background-color,border-color,box-shadow] duration-300",
              menuOpen
                ? "border-border bg-surface shadow-[0_10px_40px_-12px_rgb(0_0_0/0.6)]"
                : scrolled
                  ? "glass border-border shadow-[0_10px_40px_-12px_rgb(0_0_0/0.6)]"
                  : "border-transparent bg-transparent",
            )}
      >
        <div className="flex h-16 items-center justify-between gap-4 pr-2 pl-4 sm:pl-5">
          <a
            href="#home"
            aria-label={`${profileData.fullName} — back to top`}
            className="group flex shrink-0 items-center gap-3 rounded-lg"
          >
            <img
              src={logo}
              alt=""
              width={66}
              height={36}
              fetchPriority="high"
              className="h-9 w-auto drop-shadow-[0_0_10px_rgb(139_92_246/0.55)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden font-display text-sm font-semibold tracking-tight text-text sm:inline">
              {profileData.fullName}
            </span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "text-text-muted hover:text-white",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <m.span
                        layoutId="nav-underline"
                        aria-hidden="true"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-linear-to-r from-primary-soft via-primary to-primary-soft shadow-[0_0_12px_rgb(139_92_246/0.9)]"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className={cn(iconLinkClass, "hidden sm:flex")}
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className={cn(iconLinkClass, "hidden sm:flex")}
            >
              <FaLinkedin size={18} />
            </a>
            <ButtonLink
              href={profileData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="secondary"
              className="ml-1 hidden md:inline-flex"
              leftIcon={<Download size={15} aria-hidden="true" />}
            >
              Resume
            </ButtonLink>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong/70 bg-surface/60 text-text transition-colors hover:border-primary/50 hover:text-white xl:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <m.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </m.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <m.div
              id={menuId}
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              className="overflow-hidden xl:hidden"
            >
              <m.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.04 } },
                }}
                className="flex flex-col gap-1 px-3 pt-1 pb-3"
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <m.li
                      key={link.id}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <a
                        href={`#${link.id}`}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-colors",
                          isActive
                            ? "bg-primary/15 text-white"
                            : "text-text-muted hover:bg-white/5 hover:text-white",
                        )}
                      >
                        {link.label}
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-primary-soft shadow-[0_0_8px_rgb(139_92_246)]"
                          />
                        )}
                      </a>
                    </m.li>
                  );
                })}
                <m.li
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  className="mt-2 grid grid-cols-3 gap-2 border-t border-border pt-3"
                >
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 text-sm text-text"
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 text-sm text-text"
                  >
                    <FaLinkedin aria-hidden="true" /> LinkedIn
                  </a>
                  <a
                    href={profileData.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary-hover text-sm font-medium text-white"
                  >
                    <Download size={15} aria-hidden="true" />
                    {heroContent.ctaSecondary.replace("Download ", "")}
                  </a>
                </m.li>
              </m.ul>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
