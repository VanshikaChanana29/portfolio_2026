import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import HeroTicker from "./components/homepage/hero-ticker";
import MetricsSection from "./components/homepage/metrics";
import Projects from "./components/homepage/projects";
import Services from "./components/homepage/services";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <HeroTicker />
      <MetricsSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <ContactSection />
    </div>
  )
};
