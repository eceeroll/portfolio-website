import { motion } from "framer-motion";
import type { TechItem } from "../../data/techStack";

interface TechCardProps {
  tech: TechItem;
}

const TechCard = ({ tech }: TechCardProps) => {
  const Icon = tech.icon;

  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "var(--color-primary)" }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-3"
    >
      <Icon className="text-primary text-xl shrink-0" />
      <span className="text-text text-sm font-medium">{tech.name}</span>
    </motion.div>
  );
};

export default TechCard;
