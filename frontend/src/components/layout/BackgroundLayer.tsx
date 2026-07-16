const BackgroundLayer = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-225 h-225 bg-primary/15 rounded-full blur-[160px]" />

      <div className="absolute bottom-[-10%] right-[-5%] w-175 h-175 bg-purple-500/10 rounded-full blur-[160px]" />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/80" />
    </div>
  );
};

export default BackgroundLayer;
