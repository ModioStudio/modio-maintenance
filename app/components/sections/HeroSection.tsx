"use client";

import { Clock, Handshake, Wrench } from "phosphor-react";
import { motion } from "framer-motion";
import { useMemo } from "react";

import TEXT from "@/lib/hero";
import { Tagline } from "../ui/tagline";

export default function Hero() {
  const quarter = useMemo(() => Math.floor(new Date().getMonth() / 3) + 1, []);
  const seats = 2;

  const stats = [
    { icon: <Clock size={32} weight="thin" />, text: TEXT.box1 },
    { icon: <Wrench size={32} weight="thin" />, text: TEXT.box2 },
    { icon: <Handshake size={32} weight="thin" />, text: TEXT.box3 },
  ];

  return (
    <div className="py-8 lg:py-16 text-center relative hero-bg">
      <motion.div
        className="flex row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mt-0.5 w-2.5 h-2.5 rounded-full animate-pulse bg-[#FF9D00]" />
        <p className="text-xs">
          {seats} {TEXT.seats} Q{quarter} {TEXT.available}
        </p>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl font-bold mt-14 text-[#0A0A0A]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {TEXT.headline}
      </motion.h1>

      <motion.h2
        className="text-5xl md:text-6xl mt-3 text-[#0A0A0A] font-kaushan"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {TEXT.headlinesub}
      </motion.h2>

      <motion.h3
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {TEXT.subheadline}
      </motion.h3>

      <motion.a
        href="#contact"
        className="mt-10 inline-block px-4 py-3 bg-[#0A0A0A] text-[#FBFBFB] rounded-sm text-sm shadow-md shadow-black/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {TEXT.cta}
      </motion.a>

      <div className="mt-20 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-25">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2 w-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-neutral-600/25 w-10 h-10 rounded-sm border border-dashed border-neutral-600/60 flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-center">{item.text}</p>
          </motion.div>
        ))}
      </div>

            <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0A0A0A 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "-12px -12px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.125), transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.125), transparent 80%)",
          zIndex: -1,
        }}
      />
    </div>
  );
}
