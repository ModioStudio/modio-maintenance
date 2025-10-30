import BackToHomeButton from "../components/ui/homeButton";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <section className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Modio Studio<br />
          Inhaber: Jaron Gehrt<br />
          58579 Schalksmühle, Deutschland<br />
          E-Mail: <a href="mailto:hello@modio.studio" className="hover:underline">hello@modio.studio</a>
        </p>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900 dark:text-white">§ 1 Geltungsbereich</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Modio Studio
            (Inhaber: Jaron Gehrt) – nachfolgend „Auftragnehmer“ genannt – und dem Auftraggeber über die
            Erbringung von Webdesign-, Webentwicklungs-, Branding-, Hosting- und Wartungsleistungen,
            einschließlich der Bereitstellung von Templates, CMS-Systemen und UX-Beratung.
          </p>
          <p>
            (2) Die AGB gelten ausschließlich gegenüber Unternehmern (§ 14 BGB).<br />
            (3) Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, ihrer Geltung
            wird ausdrücklich schriftlich zugestimmt.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900 dark:text-white">§ 2 Vertragsgegenstand</h2>
          <p>
            (1) Gegenstand des Vertrages ist die Konzeption, Gestaltung, technische Umsetzung und
            Bereitstellung von Websites, Webanwendungen, SaaS-Systemen, digitalen Designs oder sonstigen
            digitalen Leistungen gemäß dem vereinbarten Angebot.
          </p>
          <p>
            (2) Die genaue Leistungsbeschreibung ergibt sich aus dem jeweiligen schriftlichen Angebot,
            Kostenvoranschlag oder der Projektvereinbarung.<br />
            (3) Der Auftragnehmer schuldet nicht den wirtschaftlichen Erfolg, sondern die vereinbarte
            fachgerechte Leistungserbringung.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900 dark:text-white">§ 11 Schlussbestimmungen</h2>
          <p>
            (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.<br />
            (2) Gerichtsstand ist Lüdenscheid, sofern der Auftraggeber Kaufmann oder juristische Person des
            öffentlichen Rechts ist.
          </p>
          <p>
            (3) Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen
            Bestimmungen unberührt.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Stand: Oktober 2025 — Verantwortlich: Modio Studio · Jaron Gehrt · 58579 Schalksmühle
        </p>
        <BackToHomeButton />
      </section>
    </main>
  );
}
