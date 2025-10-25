"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../components/ui/languageSwitcher";

export default function LandingPage() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold">{t("headline")}</h1>
      <p className="mt-4 text-lg">{t("subheadline")}</p>
      <LanguageSwitcher />
    </section>
  );
}
