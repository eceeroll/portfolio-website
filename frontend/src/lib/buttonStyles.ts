import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Variant = "primary" | "secondary" | "ghost";
export type Size = "sm" | "md" | "lg";

export interface StyleProps {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap select-none transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-out disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "btn-shine bg-primary-hover text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.22),0_8px_24px_-6px_rgb(139_92_246/0.55)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.28),0_14px_36px_-8px_rgb(139_92_246/0.75)]",
  secondary:
    "glass border border-border-strong/80 text-text hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-white",
  ghost:
    "text-text-muted hover:text-white hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

export const buttonClasses = ({
  variant = "primary",
  size = "md",
}: Pick<StyleProps, "variant" | "size"> = {}) =>
  cn(base, variants[variant], sizes[size]);

