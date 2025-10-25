import "../globals.css";

import LocaleProvider from "@/i18n/LocaleProvider";
import MaintenancePage from "./maintenance/page";

export const metadata = {
  title: "Modio Studio – Premium Web & App Development",
  description: "Wir entwickeln hochwertige Websites, Apps und digitale Produkte – Modio Studio.",
  icons: { icon: "/favicon.ico" },
  keywords: ["Webentwicklung", "App Development", "UI/UX Design", "Softwareagentur", "Modio Studio"],
  authors: [{ name: "Jaron", url: "https://modio.studio" }],
  openGraph: {
    title: "Modio Studio – Premium Web & App Development",
    description: "Wir entwickeln hochwertige Websites, Apps und digitale Produkte – Modio Studio.",
    url: "https://modio.studio",
    siteName: "Modio Studio",
    images: [{ url: "/logo.svg", width: 1200, height: 630 }],
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Modio Studio – Premium Web & App Development",
    description: "Wir entwickeln hochwertige Websites, Apps und digitale Produkte – Modio Studio.",
    images: ["/logo.svg"]
  }
};




interface Props {
  children: React.ReactNode;
  params: { lang: string };
}

export default function LocaleLayout({ children, params }: Props) {
  const lang = params.lang === "en" ? "en" : "de"; 
  const mode = process.env.NEXT_PUBLIC_MODE || "live";

  return (
    <LocaleProvider lang={lang}>
      {mode === "maintenance" ? <MaintenancePage /> : children}
    </LocaleProvider>
  );
}