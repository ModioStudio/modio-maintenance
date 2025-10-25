"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  lang: string;
  children: ReactNode;
}

export default function LocaleProvider({ lang, children }: Props) {
  const [messages, setMessages] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    fetch(`/locales/${lang}.json`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [lang]);

  if (!messages) return null;

  return (
    <NextIntlClientProvider locale={lang} messages={messages} now={new Date()} timeZone="Europe/Berlin">
      {children}
    </NextIntlClientProvider>
  );
}
