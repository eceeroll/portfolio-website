import { useCountUp } from "../../hooks/useCountUp";
import type { StatItem } from "../../data/stats";

interface StatCardProps {
  stat: StatItem;
}

const StatCard = ({ stat }: StatCardProps) => {
  const { count, ref } = useCountUp(stat.value);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="text-text-muted text-sm">{stat.label}</p>
    </div>
  );
};

export default StatCard;
