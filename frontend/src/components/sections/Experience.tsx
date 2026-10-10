import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { timelineData } from "@/data/experience";
import { experienceContent } from "@/data/content";
import Section from "@/components/ui/Section";
import TimelineCard from "@/components/ui/TimelineCard";
import { EASE_OUT_EXPO } from "@/lib/animations";

const items = [...timelineData].reverse();

const ExperienceSection = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section id="experience" content={experienceContent.section}>
      <ol ref={listRef} className="relative max-w-3xl space-y-6 pl-12 md:space-y-8 md:pl-16">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-4 w-px -translate-x-1/2 bg-border md:left-6"
        />
        <m.span
          aria-hidden="true"
          style={{ scaleY: progress }}
          className="absolute top-2 bottom-2 left-4 w-px origin-top -translate-x-1/2 bg-linear-to-b from-primary-pale via-primary to-primary-hover shadow-[0_0_10px_rgb(139_92_246/0.8)] md:left-6"
        />

        {items.map((item) => {
          const Icon = item.type === "education" ? GraduationCap : Briefcase;
          return (
            <m.li
              key={`${item.title}-${item.period}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 -left-12 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background text-primary-soft shadow-[0_0_0_4px_var(--color-background),0_0_18px_rgb(139_92_246/0.45)] md:-left-16 md:h-12 md:w-12"
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <TimelineCard item={item} />
            </m.li>
          );
        })}
      </ol>
    </Section>
  );
};

export default ExperienceSection;
