const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <p className="text-primary font-mono text-sm mb-4">
        Software Engineer & Full-Stack Developer
      </p>

      <h1 className="text-5xl md:text-6xl font-bold text-text mb-4">
        Ece Erol
      </h1>

      <h2 className="text-2xl md:text-3xl text-text-muted mb-6">
        Building Modern Digital Experiences
      </h2>

      <p className="max-w-xl text-text-muted mb-8">
        I design and develop scalable web applications with React, TypeScript,
        Node.js, and modern cloud technologies, focusing on performance,
        usability, and clean architecture.
      </p>

      <a
        href="#projects"
        className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        View My Projects
      </a>
    </section>
  );
};

export default HeroSection;
