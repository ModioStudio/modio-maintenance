import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import deMessages from "../messages/de.json";

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
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className="bg-black text-white">
        <NextIntlClientProvider locale="de" messages={deMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
