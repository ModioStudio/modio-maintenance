import { useState } from "react";
import { Home, Briefcase, Building2, ArrowUpRight } from "lucide-react";
import { Card } from "@/app/components/ui/card";

export default function PricingPage() {
  const [mode, setMode] = useState<"one-time" | "subscription">("one-time");

const pricing = [
  {
    title: "Starter",
    icon: <Home className="w-5 h-5 text-[#FF9D00]" />,
    description:
      "Schnell einsatzbereit, perfekt für Einsteiger",
    price: "890 €",
    features: [
      "Vorlage / Template Design",
      "1–3 Seiten",
      "Mobile First & responsive",
      "Basis SEO / Meta-Tags",
      "1 Revision inklusive, schnelle Umsetzung",
    ],
    btn: "Jetzt anfragen",
    btnClass:
      "bg-transparent border border-black text-[#0a0a0a] hover:bg-foreground/90 hover:text-[#fbfbfb]",
  },
  {
    title: "Business",
    icon: <Briefcase className="w-5 h-5 text-[#FF9D00]" />,
    description:
    "Professionell & markenkonform für wachsende Unternehmen.",
    price: "1.600 €",
    features: [
        "Individuelles Design für 5–8 Seiten",
        "Responsive & Mobile-First Layouts",
        "Kontaktformular & Social-Media-Integration",
        "SEO-Basics inkl. Google My Business",
        "2–3 Revisionen inklusive",
    ],
    btn: "Jetzt anfragen",
    btnClass: "bg-foreground text-background hover:bg-foreground/90",
  },
  {
    title: "Enterprise",
    icon: <Building2 className="w-5 h-5 text-[#FF9D00]" />,
    description:
      "Rundum-Paket für Unternehmen, die im Web glänzen wollen.",
    price: "3.500 €",
    features: [
        "Individuelles Premium-Design & Branding Integration",
        "CMS für Blog / Content-Management",
        "10+ Seiten oder komplexe Layouts",
        "SEO-Strategie inkl. Keyword-Analyse",
        "Vollständige Beratung & Projekt-Roadmap",
        "Optional: API-Integration & WebApp-Funktionen",
    ],
    btn: "Jetzt anfragen",
    btnClass:
      "bg-transparent border border-black text-[#0a0a0a] hover:bg-foreground/90 hover:text-[#fbfbfb]",
  },
];


  return (
    <div className="relative min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-[#fafaf9]">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 max-w-2xl">
          <h1 className="mb-4 text-balance text-4xl font-normal leading-tight tracking-tight text-foreground md:text-5xl">
            Ihr digitales <em className="font-serif not-italic">Wachstum</em>{" "}
            beginnt hier
          </h1>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Von Starter-Websites bis zu Enterprise-Lösungen – inklusive Add-ons
            und Branding-Services
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-stretch gap-y-20">
          {pricing.map((tier) => (
            <Card
              key={tier.title}
              className="relative flex flex-col border bg-[#f5f4f2] p-8 rounded-xl shadow-xl md:h-[670px] sm:h-[650px] h-auto"
            >
              <div className="absolute -top-7 left-6 bg-[#FF9D00]/40 border-1 border-[#FF9D00] px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                {tier.icon}
                <span className="font-serif text-xl italic font-normal text-foreground">
                  {tier.title}
                </span>
              </div>
              <p className="mt-8 mb-1 text-sm text-muted-foreground leading-relaxed">
                {tier.description}
              </p>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                 ab:{" "}
                  <span className="text-lg font-medium text-foreground">
                    {tier.price}
                  </span>
                </p>
              </div>
              <ul className="mb-8 flex-1 space-y-3 border-t border-foreground/10 pt-6 text-sm">
                {tier.features.map((feature, i) => (
                  <li className="text-muted-foreground" key={i}>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full gap-2 rounded-lg font-semibold flex items-center justify-center p-2 hover:scale-3d ${tier.btnClass}`}
              >
                {tier.btn} <ArrowUpRight className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex md:flex-row flex-col mx-auto justify-center items-center gap-3">
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              135deg, 
              #FF9D00 0px, 
              #FF9D00 2px, 
              transparent 1px, 
              transparent 6px
            )
          `,
          opacity: 0.08,
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
        }}
      />
    </div>
  );
}
