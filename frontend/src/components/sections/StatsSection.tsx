import { m } from "framer-motion";
import { statsData } from "@/data/stats";
import StatCard from "@/components/ui/StatCard";
import Container from "@/components/ui/Container";
import { fadeInUp, revealViewport, staggerContainer } from "@/lib/animations";

const StatsSection = () => (
  <section aria-label="Quick stats" className="relative border-y border-primary/30 bg-primary/[0.07]">
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-soft to-transparent" />
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
    <Container>
      <m.div
        role="group"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4 md:py-12"
      >
        {statsData.map((stat) => (
          <m.div key={stat.label} variants={fadeInUp}>
            <StatCard stat={stat} />
          </m.div>
        ))}
      </m.div>
    </Container>
  </section>
);

export default StatsSection;
