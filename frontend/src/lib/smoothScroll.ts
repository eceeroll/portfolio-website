import type Lenis from "lenis";

let instance: Lenis | null = null;

export const NAV_OFFSET = -88;

export const setLenis = (lenis: Lenis | null) => {
  instance = lenis;
};

export const scrollToTarget = (target: string | number) => {
  if (instance) {
    instance.scrollTo(target, { offset: typeof target === "number" ? 0 : NAV_OFFSET });
    return;
  }

  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
    return;
  }

  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
};
