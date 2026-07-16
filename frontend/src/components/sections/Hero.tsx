import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import heroImage from "../../assets/photo.png";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.div variants={fadeInUp}>
            <span
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                border
                border-primary/30
                bg-primary/10
                text-primary
                font-mono
                text-xs
                tracking-[0.2em]
                mb-6
              "
            >
              FULL-STACK ENGINEER • REACT • NODE.JS
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              tracking-tight
              mb-4
              bg-linear-to-r
              from-white
              via-white
              to-primary
              bg-clip-text
              text-transparent
            "
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
            className="
              text-text-muted
              mb-8
              leading-relaxed
              max-w-md
              mx-auto
              md:mx-0
            "
          >
            From responsive interfaces to backend APIs, I enjoy building web
            applications that solve real problems and deliver a smooth user
            experience.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="
              flex
              flex-wrap
              gap-4
              justify-center
              md:justify-start
              text-sm
              text-text-muted
              mb-10
            "
          >
            <span>⚡ React & TypeScript</span>
            <span>🚀 Full-Stack Development</span>
            <span>💻 Computer Engineer</span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              md:justify-start
              gap-4
            "
          >
            <a
              href="#projects"
              className="
                bg-primary
                hover:bg-primary-hover
                text-white
                px-8
                py-3.5
                rounded-xl
                font-semibold
                shadow-lg
                shadow-primary/30
                hover:-translate-y-1
                transition-all
              "
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="
                border
                border-border
                hover:border-primary
                bg-surface/40
                backdrop-blur-sm
                text-text
                px-8
                py-3.5
                rounded-xl
                font-semibold
                hover:-translate-y-1
                transition-all
              "
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: -70, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />

            <img
              src={heroImage}
              alt="Ece Erol Subaş"
              className="
                relative
                z-10
                max-w-lg
                w-full
                h-auto
                object-contain
                -translate-y-8
                hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
