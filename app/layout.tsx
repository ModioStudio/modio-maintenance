import "../app/globals.css";

export const metadata = ({ params }: { params?: { lang: string } }) => {
  const lang = params?.lang === "en" ? "en" : "de";

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
    title: titles[lang],
    description: descriptions[lang],
    icons: { icon: "/favicon.ico" },
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      url: "https://modio.studio",
      siteName: "Modio Studio",
      images: [{ url: "/logo.svg", width: 1200, height: 630 }],
      locale: lang === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang],
      description: descriptions[lang],
      images: ["/logo.svg"],
    },
  };
};


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className="bg-[#FBFBFB] text-[#0A0A0A]">{children}

                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Modio Studio",
              "url": "https://modio.studio",
              "logo": "https://modio.studio/logo.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
