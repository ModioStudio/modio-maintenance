import "../globals.css";
import LocaleProvider from "@/i18n/LocaleProvider";
import MaintenancePage from "./maintenance/page";

interface Props {
  children: React.ReactNode;
  params: { lang: string };
}

export default async function LocaleLayout({ children, params }: Props) {
  const resolvedParams = await params; 
  const lang = resolvedParams?.lang || "de";
  const locale = lang === "en" ? "en" : "de";
  const mode = process.env.NEXT_PUBLIC_MODE || "live";

  return (
    <LocaleProvider lang={locale}>
      <div>
        {mode === "maintenance" ? <MaintenancePage /> : children}
      </div>
    </LocaleProvider>
  );
}
