import { Fragment, type CSSProperties } from "react";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { heroContent, aboutContent } from "@/data/content";
import { profileData } from "@/data/profile";
import TerminalCard from "@/components/ui/TerminalCard";
import { Button, ButtonLink } from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import Container from "@/components/ui/Container";
import { scrollToTarget } from "@/lib/smoothScroll";
import portrait from "@/assets/portrait.webp";

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const LETTER_STAGGER_MS = 30;
const NAME_START_MS = 80;

const AnimatedName = ({ text }: { text: string }) => {
  let letterIndex = 0;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, wordIndex, words) => {
          const isAccent = wordIndex === words.length - 1;
          const chars = Array.from(word);
          return (
            <Fragment key={word + wordIndex}>
              <span
                className={`inline-block overflow-hidden pr-[0.04em] pb-[0.12em] align-bottom whitespace-nowrap ${isAccent ? "block text-[1.12em]" : ""}`}
              >
                {chars.map((char, charIndex) => {
                  const index = letterIndex++;
                  const accentColor = isAccent
                    ? `color-mix(in oklab, var(--color-primary-pale), var(--color-primary) ${Math.round(
                        (charIndex / Math.max(chars.length - 1, 1)) * 70,
                      )}%)`
                    : undefined;
                  return (
                    <span
                      key={index}
                      className="inline-block animate-letter-in motion-reduce:animate-none"
                      style={{
                        ...delay(NAME_START_MS + index * LETTER_STAGGER_MS),
                        color: accentColor,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
              {!isAccent && " "}
            </Fragment>
          );
        })}
      </span>
    </>
  );
};

const socials = [
  { href: profileData.githubUrl, label: "GitHub", icon: FaGithub, external: true },
  { href: profileData.linkedinUrl, label: "LinkedIn", icon: FaLinkedin, external: true },
  { href: `mailto:${profileData.email}`, label: "Email", icon: Mail, external: false },
];

const fadeUp = "animate-fade-up motion-reduce:animate-none";

const Portrait = () => (
  <div className={`${fadeUp} relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-none`} style={delay(200)}>
    <div
      aria-hidden="true"
      className="absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.45),transparent)] blur-2xl"
    />
    <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/40 bg-surface shadow-[0_0_0_1px_rgb(139_92_246/0.2),0_40px_100px_-24px_rgb(139_92_246/0.75)]">
      <div className="absolute inset-x-6 top-0 z-10 h-px bg-linear-to-r from-transparent via-primary-pale to-transparent" />
      <img
        src={portrait}
        alt={aboutContent.portraitAlt}
        width={560}
        height={785}
        fetchPriority="high"
        decoding="async"
        className="aspect-[4/5] w-full object-cover object-[center_18%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-background via-transparent to-transparent lg:block"
      />
      <div className="relative p-2.5 lg:absolute lg:inset-x-3.5 lg:bottom-3.5 lg:p-0">
        <TerminalCard embedded />
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section
    id="home"
    aria-label="Introduction"
    className="relative flex min-h-[100svh] items-center pt-28 pb-16 lg:pt-24 lg:pb-20"
  >
    <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-8">
      <div className="min-w-0 lg:col-start-1">
        <p
          className={`${fadeUp} mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 py-1.5 pr-4 pl-3 font-mono text-[0.7rem] tracking-[0.22em] text-primary-pale sm:text-xs`}
          style={delay(0)}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-soft opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-soft" />
          </span>
          {heroContent.badge}
        </p>

        <h1 className="font-display text-[clamp(2.7rem,11vw,5.4rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-white">
          <AnimatedName text={heroContent.name} />
        </h1>
      </div>

      <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Portrait />
      </div>

      <div className="min-w-0 lg:col-start-1">
        <p
          className={`${fadeUp} mb-4 font-display text-xl font-medium tracking-tight text-text sm:text-2xl`}
          style={delay(280)}
        >
          {heroContent.subtitle}
        </p>
        <p
          className={`${fadeUp} mb-7 max-w-xl text-base leading-relaxed text-text-muted md:text-lg`}
          style={delay(360)}
        >
          {heroContent.description}
        </p>

        <ul className={`${fadeUp} mb-8 flex flex-wrap gap-2`} style={delay(440)} aria-label="Focus areas">
          {heroContent.highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-sm text-text-muted"
            >
              <Icon size={14} className="text-primary-soft" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <div className={`${fadeUp} flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center`} style={delay(520)}>
          <Magnetic className="flex sm:inline-flex">
            <ButtonLink
              href="#projects"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={
                <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              }
            >
              {heroContent.ctaPrimary}
            </ButtonLink>
          </Magnetic>
          <ButtonLink href="#contact" size="lg" variant="secondary">
            {heroContent.ctaContact}
          </ButtonLink>
          <ButtonLink
            href={profileData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="ghost"
            leftIcon={<Download size={17} aria-hidden="true" />}
          >
            {heroContent.ctaSecondary}
          </ButtonLink>
        </div>

        <ul className={`${fadeUp} mt-8 flex items-center gap-2`} style={delay(600)} aria-label="Social links">
          {socials.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={external ? `${label} (opens in a new tab)` : label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/50 text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-white"
              >
                <Icon size={17} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>

    <Button
      variant="ghost"
      size="sm"
      onClick={() => scrollToTarget("#about")}
      className={`${fadeUp} absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col gap-1 text-[0.65rem] tracking-[0.22em] uppercase xl:inline-flex`}
      style={delay(800)}
      rightIcon={<ArrowDown size={16} aria-hidden="true" className="animate-bounce motion-reduce:animate-none" />}
    >
      {heroContent.scrollLabel}
    </Button>
  </section>
);

export default HeroSection;
