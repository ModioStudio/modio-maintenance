"use client";

import dynamic from "next/dynamic";
import LanguageSwitcher from "../components/ui/languageSwitcher";

// Sections lazy loaden
const Hero = dynamic(() => import("../components/sections/HeroSection"), { ssr: true });
const WorkFlow = dynamic(() => import("../components/sections/WorkFlowSection"), { ssr: false });
const Pricing = dynamic(() => import("../components/sections/PricingSection"), { ssr: false });
const Modules = dynamic(() => import("../components/sections/ModulesSection"), { ssr: false });
const FAQ = dynamic(() => import("../components/sections/FAQSection"), { ssr: false });
const Footer = dynamic(() => import("../components/sections/Footer"), { ssr: false });

export default function LandingPage() {
  return (
    <div className="md:max-w-[1000px] xl:max-w-[1200px] md:mx-8 lg:mx-auto md:border-l-[0.5px] md:border-r-[0.5px] md:border-neutral-400 px-4 md:px-8">
      <Hero />
      <WorkFlow />
      <Pricing />
      <Modules />
      <FAQ />
      <LanguageSwitcher />
      <Footer />
    </div>
  );
}
