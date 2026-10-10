import { ArrowUp } from "lucide-react";
import { footerContent } from "@/data/content";
import { navLinks, profileData, socialLinks } from "@/data/profile";
import Container from "@/components/ui/Container";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-border/70 bg-background/60 backdrop-blur-sm">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-linear-to-r from-transparent via-primary/60 to-transparent"
      />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3 rounded-lg">
              <img src={logo} alt="" width={66} height={36} loading="lazy" className="h-9 w-auto" />
              <span className="font-display text-base font-semibold text-white">
                {profileData.fullName}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              {profileData.title} · {footerContent.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <p className="mb-4 font-mono text-[0.7rem] tracking-[0.2em] text-primary-soft uppercase">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="mb-4 font-mono text-[0.7rem] tracking-[0.2em] text-primary-soft uppercase">
              Elsewhere
            </p>
            <ul className="flex gap-2">
              {socialLinks.map(({ href, icon: Icon, label, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={external ? `${label} (opens in a new tab)` : label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-muted">
            © {year} {profileData.fullName}. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-lg text-xs font-medium text-text-muted transition-colors hover:text-white"
          >
            {footerContent.backToTop}
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:text-primary-soft">
              <ArrowUp size={15} aria-hidden="true" />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
