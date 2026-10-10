import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

export default Container;
