import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import TerminalCard from "../ui/TerninalCard";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24 pb-12"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.p
            variants={fadeInUp}
            className="text-primary font-mono text-sm mb-4 tracking-wide"
          >
            Software Engineer & Full-Stack Developer
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-text mb-4 tracking-tight"
          >
            Ece Erol Subaş
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-text-muted mb-6"
          >
            Turning ideas into reliable digital products.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-muted mb-10 leading-relaxed max-w-md mx-auto md:mx-0"
          >
            From responsive interfaces to backend APIs, I enjoy building web
            applications that solve real problems and deliver a smooth user
            experience.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="bg-primary hover:bg-primary-hover text-white px-7 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="border border-border hover:border-primary text-text px-7 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden md:flex justify-center">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
