const TEXT = {
  contactSection: {
    title: "Haben Sie Fragen? Wir helfen Ihnen gerne!",
    ctaTitle: "Projektanfrage",
    ctaSubtitle: "Teilen Sie uns Ihre Anforderungen mit, und wir melden uns zeitnah bei Ihnen.",
    selectModules: "Wähle gewünschte Module aus:",
    form: {
      company: "Ihre Firma (optional)",
      name: "Ihr Name",
      email: "Ihre E-Mail",
      message: "Ihre Nachricht",
      button: "Ihr Projekt starten",
      sending: "Senden…",
      success: "Vielen Dank! Wir melden uns bald.",
      error: "Hoppla, etwas ist schiefgelaufen. Bitte versuche es erneut.",
    },
  },
 categories: [
    { 
      id: "general", 
      title: "Allgemein & Preise", 
      faqs: [
        { q: "Welche Zahlungsmöglichkeiten gibt es?", a: "Wir akzeptieren Überweisung und PayPal." },
        { q: "Kann ich eine Rechnung bekommen?", a: "Ja, für jedes Projekt stellen wir eine Rechnung aus." },
        { q: "Wo sitzt Modio Studio?", a: "Wir sind in Schalksmühle, Deutschland ansässig." },
      ] 
    },
    { 
      id: "project", 
      title: "Projekt & Support", 
      faqs: [
        { q: "Wie lange dauert ein Projekt?", a: "Die Dauer hängt vom Umfang ab, meist 2-6 Wochen." },
        { q: "Wie bekomme ich die fertigen Dateien?", a: "Wir liefern alle Dateien digital per Link oder E-Mail." },
        { q: "Bietet ihr Support nach Launch?", a: "Ja, wir haben optionale Supportpakete." },
      ] 
    },
 { 
      id: "packages", 
      title: "Pakete & Extras", 
      faqs: [
        {
          q: "Kann ich zusätzliche Features buchen?",
          a: "Ja, für Business und Starter Pakete können Sie optional CMS oder Branding Integration hinzufügen."
        },
        {
          q: "Wie lange dauert die Umsetzung?",
          a: "Starter: ca. 7–10 Tage | Business: ca. 2–3 Wochen | Enterprise: individuell nach Projektumfang."
        },
        {
          q: "Kann ich nachträglich ein Upgrade auf ein höheres Paket machen?",
          a: "Ja, Sie können jederzeit ein Upgrade buchen, inklusive Anpassungen und Add-ons."
        },
      ]
    },
  ],
  packages: ["Starter", "Business", "Enterprise"]
};

export default TEXT;