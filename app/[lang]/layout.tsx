// app/[lang]/layout.tsx
import "../globals.css";
import LocaleProvider from "@/i18n/LocaleProvider";
import MaintenancePage from "./maintenance/page";
import { Metadata } from "next";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

// Dynamic metadata generator
export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "de";

  const titles = {
    de: "Modio Studio – Premium Web & App Development",
    en: "Modio Studio – Premium Web & App Development",
  } as const;

  const descriptions = {
    de: "Wir entwickeln hochwertige Websites, Apps und digitale Produkte – Modio Studio.",
    en: "We build premium websites, apps, and digital products – Modio Studio.",
  } as const;

  return {
    metadataBase: new URL("https://modio.studio"),
    title: titles[locale],
    description: descriptions[locale],
    icons: { icon: "/favicon.ico" },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: "https://modio.studio",
      siteName: "Modio Studio",
      images: [{ url: "/logo.svg", width: 1200, height: 630 }],
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      images: ["/logo.svg"],
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "de";
  const mode = process.env.NEXT_PUBLIC_MODE ?? "live";

  return (
    <html lang={locale}>
      <body className="bg-[#FBFBFB] text-[#0A0A0A]">
        <LocaleProvider lang={locale}>
          {mode === "maintenance" ? <MaintenancePage /> : children}
        </LocaleProvider>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Modio Studio",
              url: "https://modio.studio",
              logo: "https://modio.studio/logo.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
