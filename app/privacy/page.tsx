import BackToHomeButton from "../components/ui/homeButton";

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 tracking-tight text-gray-900 dark:text-white">
        Datenschutzerklärung
      </h1>

      <section className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">1. Allgemeines</h2>
          <p>
            Diese Website speichert grundsätzlich **keine personenbezogenen Daten** ihrer Nutzer. 
            Es gibt keine Anmeldung, kein Tracking oder Analyse-Tools.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">2. Cookies</h2>
          <p>
            Es werden nur **technisch notwendige Cookies** verwendet, die für die Funktion des Kontaktformulars erforderlich sind. 
            Diese Cookies sind nicht zustimmungspflichtig und dienen ausschließlich der sicheren Übermittlung der Nachrichten.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">3. Kontaktformular</h2>
          <p>
            Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Nachricht weitergeleitet. 
            Es erfolgt **keine dauerhafte Speicherung** der Daten auf unseren Servern.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4. Ihre Rechte</h2>
          <p>
            Da wir selbst keine personenbezogenen Daten speichern, gibt es keine zu löschenden oder auskunftspflichtigen Daten. 
            Sollten Sie dennoch Fragen haben, können Sie uns jederzeit unter <a href="mailto:hello@modio.studio" className="hover:underline">hello@modio.studio</a> kontaktieren.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500">
            Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:underline">e-recht24.de</a>
          </p>
        </div>
        <BackToHomeButton />
      </section>
    </main>
  );
}
