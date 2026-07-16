import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { timelineData } from "../../data/experience";
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
        <SectionHeading number="01." title="About Me" />

        <div className="grid md:grid-cols-5 gap-12">
          {/* Sol: giriş metni */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 text-text-muted leading-relaxed space-y-4"
          >
            <p>
              I'm a Computer Engineering student with a strong interest in
              full-stack development. I enjoy turning ideas into working
              products — from designing a database schema to shipping a
              polished, responsive interface.
            </p>
            <p>
              My recent focus has been on the TypeScript ecosystem — building
              REST APIs with Node.js and Express, working with PostgreSQL and
              Prisma, and crafting interfaces with React and Tailwind CSS.
            </p>
            <p>
              I'm currently looking for opportunities to grow as a developer and
              contribute to real-world projects.
            </p>
          </motion.div>

          {/* Sağ: timeline kartları */}
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
