import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import ProjectCalculator from "@/components/sections/ProjectCalculator";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 selection:bg-violet-500/30">
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <ProjectCalculator />
      <About />
      <Team />
      <Contact />
    </div>
  );
}
