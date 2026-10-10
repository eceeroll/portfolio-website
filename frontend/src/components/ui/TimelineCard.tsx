import type { TimelineItem } from "@/data/experience";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface TimelineCardProps {
  item: TimelineItem;
}

const TimelineCard = ({ item }: TimelineCardProps) => (
  <SpotlightCard className="p-6 md:p-7">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 font-mono text-[0.68rem] tracking-[0.15em] text-primary-pale uppercase">
        {item.type}
      </span>
      <span className="font-mono text-xs text-text-muted">{item.period}</span>
    </div>
    <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
      {item.title}
    </h3>
    <p className="mt-1 mb-3 text-sm font-medium text-primary-soft">
      {item.organization}
    </p>
    <p className="text-sm leading-relaxed text-text-muted md:text-[0.95rem]">
      {item.description}
    </p>
  </SpotlightCard>
);

export default TimelineCard;
