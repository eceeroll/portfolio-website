import { useCallback, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, Info, X, XCircle } from "lucide-react";
import { ToastContext, type ToastOptions, type ToastVariant } from "@/lib/toast";
import { EASE_OUT_EXPO } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface ToastItem extends ToastOptions {
  id: number;
}

const DURATION_MS = 4500;

const ICONS: Record<ToastVariant, typeof Info> = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

const ICON_CLASS: Record<ToastVariant, string> = {
  success: "text-emerald-400",
  error: "text-red-400",
  info: "text-primary-soft",
};

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (toast: ToastOptions) => {
      const id = nextId.current++;
      setToasts((current) => [...current.slice(-2), { ...toast, id }]);
      window.setTimeout(() => dismiss(id), DURATION_MS);
    },
    [dismiss],
  );

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-3 bottom-4 z-[80] flex flex-col items-center gap-2 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:items-end"
      >
        <AnimatePresence initial={false}>
          {toasts.map(({ id, title, description, variant = "info" }) => {
            const Icon = ICONS[variant];
            return (
              <m.div
                key={id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                className={cn(
                  "glass pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border border-border-strong/80 p-4 shadow-[0_20px_50px_-15px_rgb(0_0_0/0.8)]",
                  variant === "error" && "border-red-500/30",
                  variant === "success" && "border-emerald-500/30",
                )}
              >
                <Icon size={20} className={cn("mt-0.5 shrink-0", ICON_CLASS[variant])} aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  {description && (
                    <p className="mt-0.5 text-sm text-text-muted">{description}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => dismiss(id)}
                  aria-label="Dismiss notification"
                  className="-m-1 rounded-md p-1 text-text-muted transition-colors hover:text-white"
                >
                  <X size={16} />
                </button>
              </m.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
