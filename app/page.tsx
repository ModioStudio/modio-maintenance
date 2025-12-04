"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../app/components/sections/HeroSection"), { ssr: true });
const WorkFlow = dynamic(() => import("../app/components/sections/WorkFlowSection"), { ssr: false });
const Pricing = dynamic(() => import("../app/components/sections/PricingSection"), { ssr: false });
const Modules = dynamic(() => import("../app/components/sections/ModulesSection"), { ssr: false });
const FAQ = dynamic(() => import("../app/components/sections/FAQSection"), { ssr: false });
const Footer = dynamic(() => import("../app/components/sections/Footer"), { ssr: false });

export default function LandingPage() {
  return (
    <div className="md:max-w-[1000px] xl:max-w-[1200px] md:mx-8 lg:mx-auto md:border-l-[0.5px] md:border-r-[0.5px] md:border-neutral-400 px-4 md:px-8">
      <Hero />
      <WorkFlow />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
