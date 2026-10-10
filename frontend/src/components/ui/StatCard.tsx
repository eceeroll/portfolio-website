import { useCountUp } from "@/hooks/useCountUp";
import type { StatItem } from "@/data/stats";

const StatCard = ({ stat }: { stat: StatItem }) => {
  const { count, ref } = useCountUp(stat.value);
  const finalValue = `${stat.value.toLocaleString("en-US")}${stat.suffix ?? ""}`;

  return (
    <div ref={ref} className="px-2 py-2 text-center sm:px-4">
      <p className="font-display text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl lg:text-6xl">
        <span className="sr-only">{finalValue}</span>
        <span aria-hidden="true" className="text-gradient">
          {count.toLocaleString("en-US")}
          <span className="text-primary-soft">{stat.suffix}</span>
        </span>
      </p>
      <p className="mt-2 font-mono text-[0.68rem] tracking-[0.16em] text-text-muted uppercase sm:text-xs">
        {stat.label}
      </p>
    </div>
  );
};

export default StatCard;
