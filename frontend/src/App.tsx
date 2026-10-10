import { LazyMotion, MotionConfig } from "framer-motion";
import BackgroundLayer from "@/components/layout/BackgroundLayer";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScroll";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import ExperienceSection from "@/components/sections/Experience";
import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import TechStackSection from "@/components/sections/TechStackSection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ToastProvider from "@/components/ui/ToastProvider";

const loadMotionFeatures = () =>
  import("@/lib/motionFeatures").then((module) => module.default);

function App() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <ToastProvider>
          <SmoothScroll />
          <a
            href="#main"
            className="sr-only rounded-lg bg-primary-hover px-4 py-2 font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70]"
          >
            Skip to content
          </a>
          <BackgroundLayer />
          <ScrollProgress />
          <Navbar />
          <main id="main" tabIndex={-1} className="relative text-text outline-none">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <TechStackSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </ToastProvider>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
