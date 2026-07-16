import { motion } from "framer-motion";
import { techStackData } from "../../data/techStack";
import SectionHeading from "../ui/SectionHeading";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import TechCard from "../ui/TechStackCard";

const TechStackSection = () => {
  return (
    <section className="px-6 py-24">
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading number="—" title="Tech Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStackData.map((group) => (
            <motion.div key={group.category} variants={fadeInUp}>
              <h3 className="text-text-muted font-mono text-xs uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-col gap-2">
                {group.items.map((tech) => (
                  <TechCard key={tech.name} tech={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStackSection;
