import "../app/globals.css";

export const metadata = {
  title: "Modio Studio – Premium Web & App Development",
  description: "Wir entwickeln hochwertige Websites, Apps und digitale Produkte – Modio Studio.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
