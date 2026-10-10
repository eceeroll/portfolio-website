import { m } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { fadeInUp, revealViewport, staggerContainer } from "@/lib/animations";
import { aboutContent, heroContent } from "@/data/content";
import { profileData, socialLinks } from "@/data/profile";
import Section from "@/components/ui/Section";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { ButtonLink } from "@/components/ui/Button";

const CardLabel = ({ children }: { children: string }) => (
  <p className="mb-5 font-mono text-[0.7rem] tracking-[0.2em] text-primary-soft uppercase">
    {children}
  </p>
);

const AboutSection = () => {
  const [lead, ...rest] = aboutContent.paragraphs;
  const externalLinks = socialLinks.filter((link) => link.external);

  return (
    <Section id="about" content={aboutContent.section}>
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-4 md:grid-cols-12"
      >
        <m.div variants={fadeInUp} className="order-1 md:col-span-7 lg:col-span-8">
          <SpotlightCard className="h-full border-l-2 border-l-primary p-6 sm:p-8 md:p-9">
            <CardLabel>{aboutContent.bioLabel}</CardLabel>
            <p className="mb-5 font-display text-xl leading-snug font-medium tracking-tight text-text sm:text-2xl">
              {lead}
            </p>
            <div className="space-y-4 text-[0.95rem] leading-relaxed text-text-muted">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SpotlightCard>
        </m.div>

        <m.div variants={fadeInUp} className="order-3 md:col-span-12">
          <SpotlightCard className="h-full p-6 sm:p-8" contentClassName="flex flex-col">
            <CardLabel>{aboutContent.focusLabel}</CardLabel>
            <ul className="grid flex-1 gap-3 sm:grid-cols-3">
              {heroContent.highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-4 transition-colors duration-300 hover:border-primary/30 sm:flex-col sm:items-start sm:justify-between sm:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary-soft ring-1 ring-primary/25">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-text">{label}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </m.div>

        <m.div variants={fadeInUp} className="order-2 md:col-span-5 lg:col-span-4">
          <SpotlightCard className="h-full p-6 sm:p-8" contentClassName="flex flex-col">
            <CardLabel>{aboutContent.connectLabel}</CardLabel>
            <p className="mb-5 text-sm text-text-muted">
              {aboutContent.connectText}
            </p>
            <ul className="mb-6 space-y-2">
              {externalLinks.map(({ href, label, displayText, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 rounded-lg px-1 py-1.5 text-sm text-text transition-colors hover:text-white"
                  >
                    <Icon size={16} className="text-primary-soft" aria-hidden="true" />
                    <span>{displayText ?? label}</span>
                    <span className="sr-only">(opens in a new tab)</span>
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                      className="ml-auto text-text-muted transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-primary-soft"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink
              href={profileData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="mt-auto w-full"
              leftIcon={<Download size={16} aria-hidden="true" />}
            >
              {heroContent.ctaSecondary}
            </ButtonLink>
          </SpotlightCard>
        </m.div>
      </m.div>
    </Section>
  );
};

export default AboutSection;
