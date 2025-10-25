"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import deMessages from "@/public/locales/de.json";
import enMessages from "@/public/locales/en.json";

interface Props {
  lang: "de" | "en";
  children: ReactNode;
}

export default function LocaleProvider({ lang, children }: Props) {
  const messages = lang === "de" ? deMessages : enMessages;
  return <NextIntlClientProvider locale={lang} messages={messages}>{children}</NextIntlClientProvider>;
}
