import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({ number, title }: SectionHeadingProps) => {
  return (
    <motion.div variants={fadeInUp} className="mb-12">
      <div
        className="
      inline-flex
      items-center
      gap-4
      px-5
      py-3
      rounded-full
      border
      border-primary/20
      bg-primary/[0.04]
      backdrop-blur-md
    "
      >
        <span className="text-primary font-mono text-2xl font-bold">
          {number.padStart(2, "0")}
        </span>

        <span className="h-px w-12 bg-gradient-to-r from-primary/70 to-transparent" />

        <span className="text-text-muted font-mono text-xl uppercase tracking-[0.35em]">
          {title}
        </span>
      </div>
    </motion.div>
  );
};
export default SectionHeading;
