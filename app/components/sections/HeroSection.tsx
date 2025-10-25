import { useTranslations } from "next-intl";
import { Clock, Handshake, Wrench } from "phosphor-react";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="py-8 lg:py-16 text-center relative">
      <div className="flex row gap-4 justify-center">
        <div className="mt-1 w-2.5 h-2.5 rounded-full animate-pulse bg-[#FF9D00]"></div>
        <p className="text-xs">2 Plätze für Q2 Verfügbar</p>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold  mt-10 relative z-10 text-[#0A0A0A]">
        {t("headline")}
      </h1>
      <h2 className="text-5xl md:text-6xl mt-3 relative z-10 text-[#0A0A0A] font-kaushan">
        {t("headlinesub")}
      </h2>

      <h3 className="mt-5">{t("subheadline")}</h3>

      <a
        href="#contact"
        className="mt-5 inline-block px-4 py-3 bg-[#0A0A0A] text-[#FBFBFB] rounded-sm text-sm  hover:scale-105 shadow-md shadow-black/50"
      >
        {t("cta")}
      </a>

        <div className="mt-20 flex justify-center gap-25">
        <div className="flex items-center gap-4">
            <div className="bg-neutral-600/25 w-10 h-10 rounded-sm border border-dashed border-neutral-600/60 flex items-center justify-center">
            <Clock size={32} color="#0a0a0a" weight="thin" className="hover:animate-spin ease-in hover:cursor-pointer"/>
            </div>
            <p>{t("box1")}</p>
        </div>

        <div className="flex items-center gap-4">
            <div className="bg-neutral-600/25 w-10 h-10 rounded-sm border border-dashed border-neutral-600/60 flex items-center justify-center">
            <Wrench size={32} color="#0a0a0a" weight="thin" />
            </div>
            <p>{t("box2")}</p>
        </div>

        <div className="flex items-center gap-4">
            <div className="bg-neutral-600/25 w-10 h-10 rounded-sm border border-dashed border-neutral-600/60 flex items-center justify-center">
            <Handshake size={32} color="#0a0a0a" weight="thin" />
            </div>
            <p>{t("box3")}</p>
        </div>
        </div>


      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0A0A0A 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "-12px -12px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.125), transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.125), transparent 80%)",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
}
