import HeroSection from "@/components/sections/hero-section";
import TechnologyStack from "@/components/sections/technology-stack";
import FullStackAnimation from "@/components/sections/fullstack-animation";
import Architectures from "@/components/sections/architectures";
// import ExportCanvasSection from "@/components/sections/scrennshotSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechnologyStack />
      <FullStackAnimation />
      <Architectures />
      {/* <ExportCanvasSection /> */}
    </main>
  );
}
