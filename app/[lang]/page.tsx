"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../components/ui/languageSwitcher";

//section imports
import Hero from "../components/sections/HeroSection";
import WorkFlow from "../components/sections/WorkFlowSection";

export default function LandingPage() {
  const t = useTranslations("hero");

  return (
    <main className="md:max-w-[1000px] xl:max-w-[1200px] md:mx-8 lg:mx-auto md:border-l-[0.5px] md:border-r-[0.5px] md:border-neutral-400 px-4 md:px-8 relative">

        <Hero />
        
        <WorkFlow />


        <LanguageSwitcher />
    </main>
  );
}
