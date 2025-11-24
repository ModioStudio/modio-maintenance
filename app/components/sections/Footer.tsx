"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { DiscordLogo, TwitterLogo } from "phosphor-react";
import { motion } from "framer-motion";

import TEXT from "@/lib/footer";

export default function Footer() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.footer
      className="bg-[#0a0a0a] text-[#fbfbfb] py-12 px-6 border-t border-neutral-800 mt-60 rounded-t-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="Modio Studio Logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <h2 className="text-lg font-semibold tracking-tight">{TEXT.contact.name}</h2>
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed">{TEXT.about.description}</p>

          <div className="flex gap-4 mt-2">
            <Link href={`mailto:${TEXT.contact.email}`} aria-label={TEXT.social.email}>
              <Mail size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
            <Link href="https://x.com/modiostudio" aria-label={TEXT.social.twitter}>
              <TwitterLogo size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
            <Link href="https://discord.com/" aria-label={TEXT.social.discord}>
              <DiscordLogo size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:w-1/3 gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
            {TEXT.legal.title}
          </h3>
          <Link href="/imprint" className="text-sm text-neutral-400 hover:text-white transition">
            {TEXT.legal.impressum}
          </Link>
          <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition">
            {TEXT.legal.privacy}
          </Link>
          <Link href="/terms" className="text-sm text-neutral-400 hover:text-white transition">
            {TEXT.legal.terms}
          </Link>
        </div>

        <div className="flex flex-col md:w-1/3 gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
            {TEXT.contact.title}
          </h3>
          <p className="text-sm text-neutral-400">
            {TEXT.contact.name} <br />
            {TEXT.contact.owner} <br />
            {TEXT.contact.location}
          </p>
          <Link
            href={`mailto:${TEXT.contact.email}`}
            className="text-sm text-neutral-400 hover:text-white transition"
          >
            {TEXT.contact.email}
          </Link>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-xs text-neutral-500">
        {TEXT.copyright}
      </div>
    </motion.footer>
  );
}
