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
        id: "abo", 
        title: "Abo", 
        faqs: [
        { 
            q: "Wie funktioniert das Starter Abo?", 
            a: "Das Starter Abo umfasst monatlich 4 Social Media Posts und 1–2 kleine Anpassungen an Ihrer Website."
        },
        { 
            q: "Was bietet das Business Plus Abo?", 
            a: "Das Business Plus Abo umfasst alle Leistungen des Business Abos plus 6–10 Änderungen pro Monat, Analytics & Performance Checks sowie Funnel-Optimierung."
        },
        {
        q: "Kann ich mein Abo jederzeit kündigen?",
        a: "Nein, alle Abos sind an eine Mindestlaufzeit von einem Jahr gebunden und jährlich kündbar."
        }
        ] 
    },
  ],
  packages: ["Starter", "Business", "Enterprise"]
};

export default TEXT;