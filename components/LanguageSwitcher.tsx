"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");

  const toggleLanguage = () => {
    const newPath = isEnglish ? "/" : "/en";
    router.push(newPath);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full px-4 py-2 shadow-lg font-medium transition-colors hover:opacity-80"
    >
      {isEnglish ? "DE" : "EN"}
    </motion.button>
  );
}
