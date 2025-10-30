"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { DiscordLogo, TwitterLogo } from "phosphor-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

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
            <h2 className="text-lg font-semibold tracking-tight">{t("contact.name")}</h2>
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed">
            {t("about.description")}
          </p>

          <div className="flex gap-4 mt-2">
            <Link href={`mailto:${t("contact.email")}`} aria-label={t("social.email")}>
              <Mail size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
            <Link href="https://x.com/modiostudio" aria-label={t("social.twitter")}>
              <TwitterLogo size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
            <Link href="https://discord.com/" aria-label={t("social.discord")}>
              <DiscordLogo size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col md:w-1/3 gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
            {t("legal.title")}
          </h3>
          <Link href="/imprint" className="text-sm text-neutral-400 hover:text-white transition">
            {t("legal.impressum")}
          </Link>
          <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition">
            {t("legal.privacy")}
          </Link>
          <Link href="/terms" className="text-sm text-neutral-400 hover:text-white transition">
            {t("legal.terms")}
          </Link>
        </div>

        <div className="flex flex-col md:w-1/3 gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
            {t("contact.title")}
          </h3>
          <p className="text-sm text-neutral-400">
            {t("contact.name")} <br />
            {t("contact.owner")} <br />
            {t("contact.location")}
          </p>
          <Link
            href={`mailto:${t("contact.email")}`}
            className="text-sm text-neutral-400 hover:text-white transition"
          >
            {t("contact.email")}
          </Link>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-xs text-neutral-500">
        {t("copyright", { year })}
      </div>
    </motion.footer>
  );
}
