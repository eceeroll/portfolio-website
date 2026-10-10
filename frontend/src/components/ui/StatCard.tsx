import { useCountUp } from "@/hooks/useCountUp";
import type { StatItem } from "@/data/stats";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface StatCardProps {
  stat: StatItem;
}

const StatCard = ({ stat }: StatCardProps) => {
  const { count, ref } = useCountUp(stat.value);
  const finalValue = `${stat.value.toLocaleString("en-US")}${stat.suffix ?? ""}`;

  return (
    <SpotlightCard className="h-full p-5 sm:p-6">
      <div ref={ref}>
        <p className="font-display text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
          <span className="sr-only">{finalValue}</span>
          <span aria-hidden="true" className="text-gradient">
            {count.toLocaleString("en-US")}
            <span className="text-primary-soft">{stat.suffix}</span>
          </span>
        </p>
        <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
      </div>
    </SpotlightCard>
  );
};

export default StatCard;
