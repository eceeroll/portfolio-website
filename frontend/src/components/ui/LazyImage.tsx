import { useRef, type ImgHTMLAttributes } from "react";
import { useInView } from "framer-motion";

// Native loading="lazy" still fetches images ~1-2 screens ahead, which competes
// with first paint on mobile. This defers the request until it is near view.
const LazyImage = ({ src, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const ref = useRef<HTMLImageElement>(null);
  const isNear = useInView(ref, { once: true, margin: "400px 0px" });

  return (
    <img
      ref={ref}
      src={isNear ? src : undefined}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default LazyImage;
