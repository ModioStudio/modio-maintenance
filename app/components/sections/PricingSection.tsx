import { Check, CheckCircle } from "phosphor-react";

export default function Pricing() {
  const plans = [
    {
      title: "Template Website",
      price: "790 €",
      description: "Schnell & professionell – ideal für Einzelunternehmer oder erste Projekte",
      features: [
        "Fertiges Template",
        "Branding-Anpassung (Farben/Logo)",
        "Bis 3 Seiten",
        "Responsive Design",
        "Basis-SEO",
      ],
      button: "Jetzt starten",
      highlight: false,
    },
    {
      title: "Custom Website",
      price: "ab 1.990 €",
      description: "Maßgeschneidertes Design & Struktur – für Marken mit Anspruch",
      features: [
        "Individuelles Design",
        "3-6 Seiten",
        "Volle Kontrolle über Aufbau & Inhalte",
        "Performance-Optimierung",
        "Erweiterte SEO",
        "Technische Beratung",
      ],
      button: "Projekt anfragen",
      highlight: true,
    },
  ];

  return (
    <div className="py-8 lg:py-16 text-center relative mt-15">
      <h1 className="text-4xl font-semibold mb-12">Transparent. Fair. Ohne Überraschungen.</h1>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`relative flex-1 bg-white border ${
              plan.highlight ? "border-black" : "border-neutral-300"
            } rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                EMPFOHLEN
              </span>
            )}

            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>

            <p className="text-3xl font-bold mb-6">{plan.price}</p>

            <ul className="mb-20 flex flex-col gap-2 text-left text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle size={20} weight="bold" className="text-black" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-2 px-4 rounded-md font-medium hover:cursor-pointer ${
                plan.highlight
                  ? "bg-black text-white"
                  : "bg-white text-black border border-black hover:bg-black hover:text-white transition-colors"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

    
        <div
  className="absolute inset-0 w-full h-full pointer-events-none"
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
    zIndex: -1,
    maskImage:
      "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
    WebkitMaskImage:
      "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
  }}
></div>


    </div>
  );
}
