"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

export default function FAQWithContact() {
  const [activeCategory, setActiveCategory] = useState("payment");
  const [projectType, setProjectType] = useState<"template" | "custom">("template");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const toggleModule = (mod: string) => {
    if (selectedModules.includes(mod)) {
      setSelectedModules(selectedModules.filter((m) => m !== mod));
    } else {
      setSelectedModules([...selectedModules, mod]);
    }
  };

  const modules = [
    "CMS Integration",
    "Branding Kit",
    "Hosting & Domain",
    "Wartung & Support",
    "Copywriting",
    "i18n / Mehrsprachigkeit",
  ];

  const categories = [
    {
      id: "payment",
      title: "Payment",
      faqs: [
        {
          q: "Which payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, and SEPA transfers.",
        },
        {
          q: "Can I get a refund?",
          a: "Refunds are available within 14 days of purchase under certain conditions.",
        },
        {
          q: "Is my payment information secure?",
          a: "Yes, all payments are processed through encrypted and PCI-compliant gateways.",
        },
      ],
    },
    {
      id: "handover",
      title: "Übergabe",
      faqs: [
        {
          q: "Wie läuft die Übergabe ab?",
          a: "Nach Abschluss erhältst du alle Dateien, Zugangsdaten und Dokumentationen.",
        },
        {
          q: "Kann ich nach der Übergabe noch Änderungen wünschen?",
          a: "Ja, kleinere Anpassungen sind innerhalb von 7 Tagen inklusive.",
        },
        {
          q: "Bekomme ich eine Einführung?",
          a: "Natürlich — wir bieten ein kurzes Onboarding, um dich mit allem vertraut zu machen.",
        },
      ],
    },
    {
      id: "support",
      title: "Support",
      faqs: [
        {
          q: "Wann ist euer Support erreichbar?",
          a: "Für alle zahlenden Kunden bieten wir 24/7 Support. Free-Plan Nutzer werktags 9–17 Uhr.",
        },
        {
          q: "Wie kann ich einen Bug melden?",
          a: "Du kannst uns über das Dashboard oder per E-Mail kontaktieren – bitte mit Screenshots und Schritten zur Reproduktion.",
        },
        {
          q: "Gibt es Telefonsupport?",
          a: "Telefonischer Support ist nur für Enterprise-Kunden verfügbar.",
        },
      ],
    },
  ];

  const current = categories.find((cat) => cat.id === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mt-3">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Find answers to common questions or contact our team directly if you
          need help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white border-primary"
                    : "bg-muted hover:bg-muted/80 text-foreground border-border"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <Accordion type="single" defaultValue="item-1" collapsible>
            {current?.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border py-3"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm mt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div id="contact" className="bg-muted/60 p-8 rounded-2xl shadow-sm flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-3 text-foreground text-center">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6 text-center">
            Select your project type and the modules you’re interested in.
          </p>

          {/* Project Type */}
          <div className="mb-6 flex justify-center gap-4">
            {["template", "custom"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setProjectType(type as "template" | "custom")}
                className={`px-4 py-2 rounded-full border font-medium transition ${
                  projectType === type
                    ? "bg-primary text-white border-primary"
                    : "bg-muted hover:bg-muted/80 text-foreground border-border"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-2">Select modules (multi-choice):</p>
            <div className="flex flex-wrap gap-3">
              {modules.map((mod) => (
                <button
                  key={mod}
                  type="button"
                  onClick={() => toggleModule(mod)}
                  className={`px-3 py-1 rounded-full border text-sm transition ${
                    selectedModules.includes(mod)
                      ? "bg-primary text-white border-primary"
                      : "bg-muted hover:bg-muted/80 text-foreground border-border"
                  }`}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your message"
              className="w-full rounded-md border border-dashed border-neutral-500 bg-background px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:border-0 focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
