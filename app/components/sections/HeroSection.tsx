import { useTranslations } from "next-intl";
import { Clock, Handshake, Wrench } from "phosphor-react";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="py-8 lg:py-16 text-center relative">
      <motion.div
        className="flex row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mt-1 w-2.5 h-2.5 rounded-full animate-pulse bg-[#FF9D00]"></div>
        <p className="text-xs">2 Plätze für Q2 Verfügbar</p>
      </motion.div>

      {/* Headlines */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mt-10 relative z-10 text-[#0A0A0A]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("headline")}
      </motion.h1>
      <motion.h2
        className="text-5xl md:text-6xl mt-3 relative z-10 text-[#0A0A0A] font-kaushan"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {t("headlinesub")}
      </motion.h2>

      <motion.h3
        className="mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("subheadline")}
      </motion.h3>

      <motion.a
        href="#contact"
        className="mt-5 inline-block px-4 py-3 bg-[#0A0A0A] text-[#FBFBFB] rounded-sm text-sm shadow-md shadow-black/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t("cta")}
      </motion.a>

      <div className="mt-20 flex justify-center gap-25">
        {[
          { icon: <Clock size={32} color="#0a0a0a" weight="thin" />, text: t("box1") },
          { icon: <Wrench size={32} color="#0a0a0a" weight="thin" />, text: t("box2") },
          { icon: <Handshake size={32} color="#0a0a0a" weight="thin" />, text: t("box3") },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-neutral-600/25 w-10 h-10 rounded-sm border border-dashed border-neutral-600/60 flex items-center justify-center">
              {item.icon}
            </div>
            <p>{item.text}</p>
          </motion.div>
        ))}
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
