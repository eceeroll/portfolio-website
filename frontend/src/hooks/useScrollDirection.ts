import { useEffect, useState } from "react";

const THRESHOLD = 8;
const TOP_ZONE = 80;

export const useScrollDirection = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y < TOP_ZONE) {
        setHidden(false);
      } else if (Math.abs(y - lastY) > THRESHOLD) {
        setHidden(y > lastY);
      }

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { hidden, scrolled };
};
