import { m } from "framer-motion";
import { techStackData } from "@/data/techStack";
import { techStackContent } from "@/data/content";
import Section from "@/components/ui/Section";
import SpotlightCard from "@/components/ui/SpotlightCard";
import TechCard from "@/components/ui/TechStackCard";
import { fadeInUp, revealViewport, staggerContainer } from "@/lib/animations";

const allTech = techStackData.flatMap((group) => group.items);

const Marquee = () => (
  <div aria-hidden="true" className="mask-fade-x group/marquee mb-12 overflow-hidden">
    <div className="flex w-max animate-marquee gap-3 group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
      {[...allTech, ...allTech].map(({ name, icon: Icon }, index) => (
        <span
          key={`${name}-${index}`}
          className="flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm whitespace-nowrap text-text-muted"
        >
          <Icon size={16} className="text-primary-soft" />
          {name}
        </span>
      ))}
    </div>
  </div>
);

const TechStackSection = () => (
  <Section id="skills" content={techStackContent.section}>
    <Marquee />

    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {techStackData.map((group) => (
        <m.div key={group.category} variants={fadeInUp}>
          <SpotlightCard className="h-full p-5">
            <div className="mb-4 flex items-center justify-between px-2">
              <h3 className="font-display text-base font-semibold text-white">
                {group.category}
              </h3>
              <span className="font-mono text-xs text-text-muted">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="space-y-1">
              {group.items.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </ul>
          </SpotlightCard>
        </m.div>
      ))}
    </m.div>
  </Section>
);

export default TechStackSection;
