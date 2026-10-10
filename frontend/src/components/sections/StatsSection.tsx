import { m } from "framer-motion";
import { statsData } from "@/data/stats";
import StatCard from "@/components/ui/StatCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const StatsSection = () => {
  return (
    <section className="px-6 py-16 border-y border-border">
      <m.div
        className="max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {statsData.map((stat) => (
          <m.div key={stat.label} variants={fadeInUp}>
            <StatCard stat={stat} />
          </m.div>
        ))}
      </m.div>
    </section>
  );
};

export default StatsSection;
