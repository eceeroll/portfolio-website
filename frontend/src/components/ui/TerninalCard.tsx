import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";

const codeLines = [
  "const developer = {",
  "  name: 'Ece Erol',",
  "  role: 'Full-Stack Developer',",
  "  stack: ['TypeScript', 'React', 'Node.js'],",
  "  passion: 'clean architecture',",
  "  status: 'open to work',",
  "};",
];

const getLineColor = (line: string) => {
  if (line.includes("const") || line.includes("};")) return "text-text";
  if (
    line.includes("name:") ||
    line.includes("role:") ||
    line.includes("status:")
  )
    return "text-primary";
  return "text-green-400";
};

const TerminalCard = () => {
  const { displayedLines, isDone } = useTypewriter({
    lines: codeLines,
    typingSpeed: 30,
    lineDelay: 250,
    startDelay: 600,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md bg-surface border border-border rounded-xl overflow-hidden shadow-2xl shadow-primary/10"
    >
      {/* Terminal üst bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-text-muted text-xs font-mono">
          developer.ts
        </span>
      </div>

      {/* Kod içeriği */}
      <div className="p-6 font-mono text-sm leading-relaxed min-h-[220px]">
        {displayedLines.map((line, i) => (
          <div key={i} className={getLineColor(line)}>
            {line || "\u00A0"}
          </div>
        ))}
        {!isDone && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle"
          />
        )}
      </div>
    </motion.div>
  );
};

export default TerminalCard;
