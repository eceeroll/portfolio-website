import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({ number, title }: SectionHeadingProps) => {
  return (
    <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
      <span className="text-primary font-mono text-sm shrink-0">{number}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-text whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px w-full bg-border" />
    </motion.div>
  );
};

export default SectionHeading;
