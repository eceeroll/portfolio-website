import { useEffect } from "react";
import Lenis from "lenis";
import { NAV_OFFSET, setLenis } from "@/lib/smoothScroll";

const SmoothScroll = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      anchors: { offset: NAV_OFFSET },
    });
    setLenis(lenis);

    return () => {
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
