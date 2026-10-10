import { m } from "framer-motion";
import { statsData } from "@/data/stats";
import StatCard from "@/components/ui/StatCard";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

const StatsSection = ({ className }: { className?: string }) => (
  <div
    role="group"
    aria-label="Quick stats"
    className={cn("grid grid-cols-2 gap-4 lg:grid-cols-4", className)}
  >
    {statsData.map((stat) => (
      <m.div key={stat.label} variants={fadeInUp}>
        <StatCard stat={stat} />
      </m.div>
    ))}
  </div>
);

export default StatsSection;
