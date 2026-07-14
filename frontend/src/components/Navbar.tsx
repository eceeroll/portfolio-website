const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-text font-bold text-lg">
          Ece Erol
        </a>

        <ul className="flex gap-8">
          <li>
            <a
              href="#home"
              className="text-text hover:text-primary transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-text hover:text-primary transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-text hover:text-primary transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-text hover:text-primary transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
