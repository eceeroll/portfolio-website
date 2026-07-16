import { motion } from "framer-motion";

const lines = [
  { text: "const developer = {", color: "text-text" },
  { text: "  name: 'Ece Erol',", color: "text-primary" },
  { text: "  role: 'Full-Stack Developer',", color: "text-primary" },
  {
    text: "  stack: ['TypeScript', 'React', 'Node.js'],",
    color: "text-green-400",
  },
  { text: "  passion: 'clean architecture',", color: "text-green-400" },
  { text: "};", color: "text-text" },
];

const TerminalCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="w-full max-w-md bg-surface border border-border rounded-xl overflow-hidden shadow-2xl shadow-primary/10"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-text-muted text-xs font-mono">
          developer.ts
        </span>
      </div>

      <div className="p-6 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.12 }}
            className={line.color}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
        />
      </div>
    </motion.div>
  );
};

export default TerminalCard;
