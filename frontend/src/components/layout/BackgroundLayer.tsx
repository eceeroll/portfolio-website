const NOISE_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const BackgroundLayer = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-background"
  >
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse 80% 55% at 50% 0%, #000 20%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 55% at 50% 0%, #000 20%, transparent 75%)",
      }}
    />

    <div
      className="absolute -top-[30%] left-1/2 h-[70rem] w-[70rem] -translate-x-1/2 animate-drift rounded-full motion-reduce:animate-none"
      style={{
        background:
          "radial-gradient(closest-side, rgb(139 92 246 / 0.22), rgb(139 92 246 / 0.06) 55%, transparent)",
      }}
    />
    <div
      className="absolute -right-[20%] -bottom-[35%] h-[60rem] w-[60rem] animate-drift rounded-full [animation-delay:-12s] motion-reduce:animate-none"
      style={{
        background:
          "radial-gradient(closest-side, rgb(124 58 237 / 0.16), transparent)",
      }}
    />
    <div
      className="absolute top-[35%] -left-[25%] h-[50rem] w-[50rem] rounded-full"
      style={{
        background:
          "radial-gradient(closest-side, rgb(167 139 250 / 0.07), transparent)",
      }}
    />

    <div
      className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
      style={{ backgroundImage: NOISE_SVG }}
    />
    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/70" />
  </div>
);

export default BackgroundLayer;
