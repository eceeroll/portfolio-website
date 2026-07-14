import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/sections/About";
import ContactSection from "./components/sections/Contact";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-text pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
