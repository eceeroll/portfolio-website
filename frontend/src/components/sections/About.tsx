import { m } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { fadeInUp, revealViewport, staggerContainer } from "@/lib/animations";
import { aboutContent, heroContent } from "@/data/content";
import { profileData, socialLinks } from "@/data/profile";
import Section from "@/components/ui/Section";
import SpotlightCard from "@/components/ui/SpotlightCard";
import StatsSection from "@/components/sections/StatsSection";
import { ButtonLink } from "@/components/ui/Button";
import LazyImage from "@/components/ui/LazyImage";
import portrait from "@/assets/portrait.webp";

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
        <m.div variants={fadeInUp} className="md:col-span-7">
          <SpotlightCard className="h-full p-6 sm:p-8 md:p-9">
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

        <m.div variants={fadeInUp} className="md:col-span-5">
          <SpotlightCard className="relative h-full min-h-[24rem] p-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_45%,rgb(139_92_246/0.35),transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                maskImage: "radial-gradient(circle at 50% 40%, #000, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 40%, #000, transparent 70%)",
              }}
            />
            <LazyImage
              src={portrait}
              alt={aboutContent.portraitAlt}
              width={560}
              height={785}
              className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto object-contain object-bottom drop-shadow-[0_0_40px_rgb(139_92_246/0.35)] transition-transform duration-700 ease-out group-hover/spot:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/80 to-transparent px-6 pt-16 pb-5">
              <p className="font-display text-lg font-semibold text-white">
                {profileData.fullName}
              </p>
              <p className="font-mono text-xs text-primary-pale">
                {profileData.title}
              </p>
            </div>
          </SpotlightCard>
        </m.div>

        <StatsSection className="md:col-span-12" />

        <m.div variants={fadeInUp} className="md:col-span-7">
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

        <m.div variants={fadeInUp} className="md:col-span-5">
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
