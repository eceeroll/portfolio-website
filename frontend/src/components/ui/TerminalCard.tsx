import { Fragment } from "react";
import { m } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SiNodedotjs, SiPostgresql, SiReact } from "react-icons/si";
import { useTypewriter } from "@/hooks/useTypewriter";
import { heroContent } from "@/data/content";
import { EASE_OUT_EXPO } from "@/lib/animations";

type TokenType = "keyword" | "key" | "string" | "punct" | "plain";

const TOKEN_PATTERN =
  /(\bconst\b)|('[^']*'?)|([A-Za-z_$][\w$]*)(?=\s*:)|([{}[\],;:=])|(\s+|[^\s'{}[\],;:=]+)/g;

const TOKEN_CLASS: Record<TokenType, string> = {
  keyword: "text-primary-soft",
  key: "text-sky-300",
  string: "text-emerald-300",
  punct: "text-text-muted",
  plain: "text-text",
};

const tokenize = (line: string) => {
  const tokens: { type: TokenType; value: string }[] = [];
  for (const match of line.matchAll(TOKEN_PATTERN)) {
    const [value, keyword, str, key, punct] = match;
    const type: TokenType = keyword
      ? "keyword"
      : str
        ? "string"
        : key
          ? "key"
          : punct
            ? "punct"
            : "plain";
    tokens.push({ type, value });
  }
  return tokens;
};

const FLOATING_BADGES = [
  { icon: SiReact, label: "React", className: "-top-5 -left-3 sm:-left-8", delay: 0 },
  { icon: SiNodedotjs, label: "Node.js", className: "top-1/2 -right-3 sm:-right-7", delay: 1.2 },
  { icon: SiPostgresql, label: "PostgreSQL", className: "-bottom-5 left-8", delay: 2.4 },
];

const { lines, fileName } = heroContent.terminal;

const TerminalCard = () => {
  const reduceMotion = usePrefersReducedMotion();
  const typed = useTypewriter({
    lines,
    typingSpeed: 28,
    lineDelay: 200,
    startDelay: 700,
  });

  const displayedLines = reduceMotion ? lines : typed.displayedLines;
  const isDone = reduceMotion || typed.isDone;

  return (
    <m.div
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: EASE_OUT_EXPO }}
      className="relative mx-auto w-full max-w-lg [perspective:1200px]"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(closest-side,rgb(139_92_246/0.35),transparent)] blur-2xl"
      />

      <figure className="relative overflow-hidden rounded-2xl border border-border-strong/70 bg-surface/80 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9),0_0_0_1px_rgb(139_92_246/0.08)] backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-soft/60 to-transparent" />

        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
          <span className="ml-3 rounded-md border border-border bg-surface px-2.5 py-0.5 font-mono text-[0.7rem] text-text-muted">
            {fileName}
          </span>
        </div>

        <figcaption className="sr-only">
          A code snippet describing Ece: {lines.join(" ")}
        </figcaption>

        <pre
          aria-hidden="true"
          className="min-h-[15.5rem] overflow-x-auto px-4 py-5 font-mono text-[0.78rem] leading-7 sm:px-5 sm:text-[0.85rem]"
        >
          <code className="grid grid-cols-[auto_1fr] gap-x-4">
            {lines.map((_, index) => {
              const line = displayedLines[index];
              const isCurrent = !isDone && index === displayedLines.length - 1;
              return (
                <Fragment key={index}>
                  <span className="text-right text-border-strong select-none">
                    {index + 1}
                  </span>
                  <span className="whitespace-pre">
                    {line === undefined
                      ? "\u00A0"
                      : tokenize(line).map((token, tokenIndex) => (
                          <span key={tokenIndex} className={TOKEN_CLASS[token.type]}>
                            {token.value}
                          </span>
                        ))}
                    {isCurrent && (
                      <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary-soft" />
                    )}
                  </span>
                </Fragment>
              );
            })}
          </code>
        </pre>

        <div className="flex items-center justify-between border-t border-border bg-background/50 px-4 py-2 font-mono text-[0.68rem] text-text-muted">
          <span className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${isDone ? "bg-emerald-400" : "bg-amber-400"}`}
            />
            {isDone ? "compiled successfully" : "typing…"}
          </span>
          <span>TypeScript · UTF-8</span>
        </div>
      </figure>

      {FLOATING_BADGES.map(({ icon: Icon, label, className, delay }) => (
        <m.div
          key={label}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 + delay * 0.2, ease: EASE_OUT_EXPO }}
          className={`absolute hidden sm:block ${className}`}
        >
          <div
            className="glass flex animate-float items-center gap-2 rounded-xl border border-border-strong/70 px-3 py-2 text-xs font-medium text-text shadow-lg shadow-black/40 motion-reduce:animate-none"
            style={{ animationDelay: `${delay}s` }}
          >
            <Icon className="text-primary-soft" size={14} />
            {label}
          </div>
        </m.div>
      ))}
    </m.div>
  );
};

export default TerminalCard;
