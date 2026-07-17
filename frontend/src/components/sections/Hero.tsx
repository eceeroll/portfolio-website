import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import { heroContent } from "../../data/content";
import TerminalCard from "../ui/TerninalCard";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs tracking-[0.2em] mb-6">
              {heroContent.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl tracking-tight mb-4 bg-linear-to-r from-white via-white to-primary bg-clip-text text-transparent font-syne"
          >
            {heroContent.name}
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-text-muted mb-6 font-bricolage"
          >
            {heroContent.subtitle}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-muted mb-8 leading-relaxed max-w-md mx-auto md:mx-0 font-sans"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start text-sm text-text-muted mb-10"
          >
            {heroContent.highlights.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2">
                <Icon size={15} className="text-primary" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all"
            >
              {heroContent.ctaPrimary}
            </a>

            <a
              href="#contact"
              className="border border-border hover:border-primary bg-surface/40 backdrop-blur-sm text-text px-8 py-3.5 rounded-xl font-semibold hover:-translate-y-1 transition-all"
            >
              {heroContent.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden md:flex justify-center mt-2">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
