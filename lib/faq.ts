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
      button: "Anfrage senden",
      sending: "Senden…",
      success: "Vielen Dank! Wir melden uns bald.",
      error: "Hoppla, etwas ist schiefgelaufen. Bitte versuche es erneut.",
    },
  },
  categories: [
    { id: "payment", title: "Zahlung & Preise", faqs: [
        { q: "Welche Zahlungsmöglichkeiten gibt es?", a: "Wir akzeptieren Überweisung, PayPal und Kreditkarte." },
        { q: "Kann ich eine Rechnung bekommen?", a: "Ja, für jedes Projekt stellen wir eine Rechnung aus." },
        { q: "Gibt es Rabatte für Startups?", a: "Ja, kontaktiere uns gerne für ein individuelles Angebot." },
      ] 
    },
    { id: "handover", title: "Projektabwicklung", faqs: [
        { q: "Wie lange dauert ein Projekt?", a: "Die Dauer hängt vom Umfang ab, meist 2-6 Wochen." },
        { q: "Wie bekomme ich die fertigen Dateien?", a: "Wir liefern alle Dateien digital per Link oder E-Mail." },
        { q: "Kann ich Änderungen nach Lieferung anfragen?", a: "Ja, wir bieten Nachbesserungen innerhalb von 14 Tagen an." },
      ] 
    },
    { id: "support", title: "Support & Betreuung", faqs: [
        { q: "Bietet ihr Support nach Launch?", a: "Ja, wir haben optionale Supportpakete." },
        { q: "Kann ich selbst Änderungen vornehmen?", a: "Wenn ein CMS integriert ist, ja. Wir schulen dich dafür." },
        { q: "Gibt es Schulungen?", a: "Ja, auf Wunsch führen wir kurze Trainingssessions durch." },
      ] 
    },
  ],
  packages: ["Starter", "Business", "Enterprise"]
};

export default TEXT;