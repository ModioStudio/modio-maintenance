"use client";

import LanguageSwitcher from "../components/ui/languageSwitcher";

//section imports
import Hero from "../components/sections/HeroSection";
import WorkFlow from "../components/sections/WorkFlowSection";
import Pricing from "../components/sections/PricingSection";
import Modules from "../components/sections/ModulesSection"
import FAQ from "../components/sections/FAQSection";
import Footer from "../components/sections/Footer"

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
