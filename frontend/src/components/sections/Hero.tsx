import { Fragment, type CSSProperties } from "react";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { heroContent } from "@/data/content";
import { profileData } from "@/data/profile";
import TerminalCard from "@/components/ui/TerminalCard";
import { Button, ButtonLink } from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import Container from "@/components/ui/Container";
import { scrollToTarget } from "@/lib/smoothScroll";

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const LETTER_STAGGER_MS = 30;
const NAME_START_MS = 80;

const AnimatedName = ({ text }: { text: string }) => {
  let letterIndex = 0;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="block">
        {text.split(" ").map((word, wordIndex, words) => {
          const isAccent = wordIndex === words.length - 1;
          const chars = Array.from(word);
          return (
            <Fragment key={word + wordIndex}>
              <span className="inline-block overflow-hidden pr-[0.04em] pb-[0.12em] align-bottom whitespace-nowrap">
                {chars.map((char, charIndex) => {
                  const index = letterIndex++;
                  // background-clip:text does not paint through transformed
                  // children, so the accent gradient is applied per letter.
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
              {wordIndex < words.length - 1 && " "}
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

const HeroSection = () => (
  <section
    id="home"
    aria-label="Introduction"
    className="relative flex min-h-[100svh] items-center pt-28 pb-20 lg:pt-24"
  >
    <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
      <div className="min-w-0 lg:col-span-7">
        <p
          className={`${fadeUp} mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 py-1.5 pr-4 pl-3 font-mono text-[0.7rem] tracking-[0.22em] text-primary-pale sm:text-xs`}
          style={delay(0)}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-soft opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-soft" />
          </span>
          {heroContent.badge}
        </p>

        <h1 className="mb-6 font-display text-[clamp(2.6rem,9vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-white">
          <AnimatedName text={heroContent.name} />
        </h1>

        <p
          className={`${fadeUp} mb-5 font-display text-xl font-medium tracking-tight text-text sm:text-2xl md:text-[1.75rem]`}
          style={delay(350)}
        >
          {heroContent.subtitle}
        </p>

        <p
          className={`${fadeUp} mb-8 max-w-xl text-base leading-relaxed text-text-muted md:text-lg`}
          style={delay(420)}
        >
          {heroContent.description}
        </p>

        <ul
          className={`${fadeUp} mb-10 flex flex-wrap gap-2`}
          style={delay(500)}
          aria-label="Focus areas"
        >
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

        <div
          className={`${fadeUp} flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center`}
          style={delay(580)}
        >
          <Magnetic className="flex sm:inline-flex">
            <ButtonLink
              href="#projects"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
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

        <ul
          className={`${fadeUp} mt-10 flex items-center gap-2`}
          style={delay(660)}
          aria-label="Social links"
        >
          {socials.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={external ? `${label} (opens in a new tab)` : label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/50 text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-white hover:shadow-[0_8px_20px_-8px_rgb(139_92_246/0.7)]"
              >
                <Icon size={17} />
              </a>
            </li>
          ))}
          <li aria-hidden="true" className="ml-2 h-px w-12 bg-linear-to-r from-border-strong to-transparent" />
        </ul>
      </div>

      <div className="relative min-w-0 lg:col-span-5">
        <TerminalCard />
      </div>
    </Container>

    <Button
      variant="ghost"
      size="sm"
      onClick={() => scrollToTarget("#about")}
      className={`${fadeUp} absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col gap-2 text-xs tracking-[0.2em] uppercase md:inline-flex`}
      style={delay(900)}
      rightIcon={
        <ArrowDown
          size={16}
          aria-hidden="true"
          className="animate-bounce motion-reduce:animate-none"
        />
      }
    >
      {heroContent.scrollLabel}
    </Button>
  </section>
);

export default HeroSection;
