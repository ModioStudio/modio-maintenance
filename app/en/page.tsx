"use client";

import Image from "next/image";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "../../messages/en.json";
import { motion } from "framer-motion";

export default function EnglishPage() {
  return (
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <MaintenancePage />
    </NextIntlClientProvider>
  );
}

function MaintenancePage() {
  const t = (key: keyof typeof enMessages["maintenance"]) => enMessages.maintenance[key];

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-950 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/logo.svg"
          alt="Modio Studio – Premium Web & App Development Logo"
          width={160}
          height={40}
          priority
        />
      </motion.div>

      <motion.h1
        className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {t("title")}
      </motion.h1>

      <motion.p
        className="mt-4 max-w-md text-lg text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {t("subtitle")}
      </motion.p>


      <footer className="absolute bottom-6 text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Modio Studio
      </footer>

       <LanguageSwitcher />
    </div>
  );
}
