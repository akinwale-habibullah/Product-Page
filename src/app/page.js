import Image from "next/image";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import FeaturesSection from "./components/features-section";

export default function Home() {
  return (
    <div>
      <div
        id="grid-container"
        className="w-[1170px] mx-auto h-fit grid grid-cols-12 gap-[48px]"
      >
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </div>
    </div>
  );
}
