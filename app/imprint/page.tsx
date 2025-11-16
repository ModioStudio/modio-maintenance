import BackToHomeButton from "../components/ui/homeButton";

export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white">
        Impressum
      </h1>

      <section className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div className="space-y-1">
          <p className="font-medium text-lg">Jaron Gehrt</p>
          <p>Modio Studio (Einzelunternehmer)</p>
          <p>Dahlhauser Kopf 7</p>
          <p>Gebäude 44</p>
          <p>58579 Schalksmühle</p>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Kontakt</h2>
          <p>
            <span className="block">Telefon: <a href="tel:01756903615" className="hover:underline">0175 6903615</a></span>
            <span className="block">Fax: +49 (0) 123 44 55 99</span>
            <span className="block">E-Mail: <a href="mailto:hello@modio.studio" className="hover:underline">hello@modio.studio</a></span>
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            <span className="font-mono">DE999999999</span>
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Streitschlichtung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de/impressum-generator.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              e-recht24.de
            </a>
          </p>
        </div>
        <BackToHomeButton />
      </section>
    </main>
  );
}
