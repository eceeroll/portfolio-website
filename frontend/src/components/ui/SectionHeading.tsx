import { m } from "framer-motion";
import { fadeInUp, revealViewport, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id?: string;
  number: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading = ({
  id,
  number,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) => (
  <m.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={revealViewport}
    className={cn("relative mb-12 max-w-2xl md:mb-16", className)}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-6 -left-1 font-display text-7xl leading-none font-semibold text-transparent select-none [-webkit-text-stroke:1px_rgb(167_139_250/0.35)] md:-top-10 md:text-8xl"
    >
      {number.padStart(2, "0")}
    </span>
    <m.p
      variants={fadeInUp}
      className="relative mb-4 inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary-soft uppercase"
    >
      <span className="text-primary-pale">{number.padStart(2, "0")}</span>
      <span
        aria-hidden="true"
        className="h-px w-10 bg-linear-to-r from-primary-soft to-transparent"
      />
      {eyebrow ?? title}
    </m.p>
    <m.h2
      id={id ? `${id}-title` : undefined}
      variants={fadeInUp}
      className="text-gradient relative text-3xl leading-[1.08] font-semibold tracking-tight sm:text-4xl md:text-5xl"
    >
      {title}
    </m.h2>
    {description && (
      <m.p
        variants={fadeInUp}
        className="mt-5 text-base leading-relaxed text-text-muted md:text-lg"
      >
        {description}
      </m.p>
    )}
  </m.div>
);

export default SectionHeading;
