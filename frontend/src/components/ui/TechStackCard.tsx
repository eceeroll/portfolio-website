import type { TechItem } from "@/data/techStack";

interface TechCardProps {
  tech: TechItem;
}

const TechCard = ({ tech }: TechCardProps) => {
  const Icon = tech.icon;

  return (
    <li className="group/tech flex items-center gap-3 rounded-xl border border-transparent px-2 py-2 transition-colors duration-300 hover:border-border hover:bg-background/50">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background/60 text-primary-soft transition-all duration-300 group-hover/tech:-translate-y-0.5 group-hover/tech:border-primary/40 group-hover/tech:text-white group-hover/tech:shadow-[0_6px_18px_-6px_rgb(139_92_246/0.8)]">
        <Icon size={19} aria-hidden="true" />
      </span>
      <span className="text-sm font-medium text-text">{tech.name}</span>
    </li>
  );
};

export default TechCard;
