import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import type { TimelineItem } from "../../data/experience";

interface TimelineCardProps {
  item: TimelineItem;
}

const TimelineCard = ({ item }: TimelineCardProps) => {
  const Icon = item.type === "education" ? GraduationCap : Briefcase;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative bg-surface border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="text-primary" size={20} />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h3 className="text-text font-semibold">{item.title}</h3>
            <span className="text-text-muted font-mono text-xs shrink-0">
              {item.period}
            </span>
          </div>
          <p className="text-primary text-sm mb-3">{item.organization}</p>
          <p className="text-text-muted text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;
