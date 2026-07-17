import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
  startDelay?: number;
}

export const useTypewriter = ({
  lines,
  typingSpeed = 35,
  lineDelay = 300,
  startDelay = 500,
}: UseTypewriterOptions) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const result: string[] = [];

    const run = async () => {
      await new Promise((r) => setTimeout(r, startDelay));

      for (const line of lines) {
        if (cancelled) return;
        let current = "";
        result.push("");
        setDisplayedLines([...result]);

        for (const char of line) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, typingSpeed));
          current += char;
          result[result.length - 1] = current;
          setDisplayedLines([...result]);
        }

        await new Promise((r) => setTimeout(r, lineDelay));
      }

      if (!cancelled) setIsDone(true);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [lines, typingSpeed, lineDelay, startDelay]);

  return { displayedLines, isDone };
};
