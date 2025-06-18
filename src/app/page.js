import Image from "next/image";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import BenefitsSection from "./components/benefits-section";

export default function Home() {
  return (
    <div>
      <div
        id="grid-container"
        className="w-[1170px] mx-auto h-full grid grid-cols-12 grid-rows-3 gap-[48px]"
      >
        <HeroSection />
        <AboutSection />
        {/* <BenefitsSection /> */}
      </div>
    </div>
  );
}
