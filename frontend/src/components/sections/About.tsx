const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-mono text-sm mb-2">01. About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 text-text-muted leading-relaxed space-y-4">
            <p>
              I'm a full-stack developer passionate about building clean,
              efficient web applications. My journey into programming started
              with curiosity and has grown into a dedication to writing
              maintainable, well-structured code.
            </p>
            <p>
              I enjoy working across the stack — from designing REST APIs and
              database schemas to crafting responsive, accessible user
              interfaces.
            </p>
          </div>

          <div>
            <h3 className="text-text font-semibold mb-4">Tech Stack</h3>
            <ul className="grid grid-cols-2 gap-2 text-text-muted font-mono text-sm">
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Prisma</li>
              <li>Tailwind</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
