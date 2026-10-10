import type { HTMLAttributes, PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glow?: boolean;
  contentClassName?: string;
}

const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  target.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
};

const SpotlightCard = ({
  children,
  className,
  glow = true,
  contentClassName,
  ...props
}: SpotlightCardProps) => (
  <div
    onPointerMove={handlePointerMove}
    className={cn(
      "group/spot relative overflow-hidden rounded-2xl border border-border bg-surface/70 transition-[border-color,transform,box-shadow] duration-300",
      "hover:border-primary/30 hover:shadow-[0_20px_60px_-30px_rgb(139_92_246/0.6)]",
      className,
    )}
    {...props}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
      style={{
        background:
          "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 0%), rgb(139 92 246 / 0.12), transparent 45%)",
      }}
    />
    {glow && (
      <div
        aria-hidden="true"
        className="border-mask pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--spot-x, 50%) var(--spot-y, 0%), rgb(196 181 253 / 0.7), transparent 50%)",
        }}
      />
    )}
    <div className={cn("relative h-full", contentClassName)}>{children}</div>
  </div>
);

export default SpotlightCard;
