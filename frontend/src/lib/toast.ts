import { createContext, useContext } from "react";

export type ToastVariant = "success" | "error" | "info";

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
}

export const ToastContext = createContext<((toast: ToastOptions) => void) | null>(
  null,
);

export const useToast = () => {
  const showToast = useContext(ToastContext);
  if (!showToast) {
    throw new Error("useToast must be used inside <ToastProvider>");
  }
  return showToast;
};
