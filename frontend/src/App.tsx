import BackgroundLayer from "./components/layout/BackgroundLayer";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/sections/About";
import ContactSection from "./components/sections/Contact";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import StatsSection from "./components/sections/StatsSection";
import TechStackSection from "./components/sections/TechStackSection";

function App() {
  return (
    <>
      <BackgroundLayer />
      <Navbar />
      <main className="text-text pt-16 relative">
        <HeroSection />
        <StatsSection />
        <TechStackSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
