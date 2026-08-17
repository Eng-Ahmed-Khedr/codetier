import HeroSection from "@/components/sections/hero-section";
import TechnologyStack from "@/components/sections/technology-stack";
import DatabaseAnimation from "@/components/sections/database-animation";
import Architectures from "@/components/sections/architectures";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TechnologyStack />
      <DatabaseAnimation />
      <Architectures />
    </main>
  );
}
