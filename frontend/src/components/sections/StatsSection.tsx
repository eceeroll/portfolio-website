import { motion } from "framer-motion";
import { statsData } from "../../data/stats";
import StatCard from "../ui/StatCard";
import { fadeInUp, staggerContainer } from "../../lib/animations";

const StatsSection = () => {
  return (
    <section className="px-6 py-16 border-y border-border">
      <motion.div
        className="max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {statsData.map((stat) => (
          <motion.div key={stat.label} variants={fadeInUp}>
            <StatCard stat={stat} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
