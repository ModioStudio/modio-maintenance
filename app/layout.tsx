import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://modio.studio"),
  title: "Modio Studio – Web & App Development",
  description:
    "Wir entwickeln hochwertige Websites, Apps und digitale Produkte – Modio Studio.",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico", // für ältere Browser
  },
  openGraph: {
    title: "Modio Studio – Web & App Development",
    description:
      "Wir entwickeln hochwertige Websites, Apps und digitale Produkte – Modio Studio.",
    url: "https://modio.studio",
    siteName: "Modio Studio",
    images: [{ url: "/images/logo.svg", width: 1200, height: 630 }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modio Studio – Web & App Development",
    description:
      "Wir entwickeln hochwertige Websites, Apps und digitale Produkte – Modio Studio.",
    images: ["/images/logo.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#FBFBFB] text-[#0A0A0A]">
        {children}
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
