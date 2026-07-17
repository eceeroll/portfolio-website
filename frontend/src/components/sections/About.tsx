import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { timelineData } from "../../data/experience";
import { aboutContent } from "../../data/content";
import TimelineCard from "../ui/TimelineCard";
import SectionHeading from "../ui/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-28">
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading
          number={aboutContent.section.headingNumber}
          title={aboutContent.section.title}
        />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 text-text-muted leading-relaxed space-y-4"
          >
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="md:col-span-3 flex flex-col gap-4"
          >
            {timelineData.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TimelineCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
