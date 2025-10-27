"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/app/components/ui/carousel"

export default function Moduls() {
  const modules = [
    { title: "CMS Integration", price: "+390 €", desc: "Pflege deine Inhalte selbst – mit einem einfachen CMS." },
    {
      title: "Branding Kit",
      price: "+590 €",
      desc: "Logo, Farbpalette & Typografie – dein Markenauftritt aus einem Guss.",
    },
    { title: "Hosting & Domain", price: "+250 €/Jahr", desc: "Schnell, sicher und direkt von uns verwaltet." },
    { title: "Wartung & Support", price: "29 €/Monat", desc: "Technische Updates & laufende Betreuung inklusive." },
    { title: "Copywriting", price: "+290 €", desc: "Texte, die verkaufen – klar, SEO-optimiert & authentisch." },
    { title: "i18n / Mehrsprachigkeit", price: "+290 €", desc: "Professionelle Übersetzung für deine Website." },
  ]

  return (
    <section className="py-16 lg:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-neutral-500 font-medium">Add-ons & Module</span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Erweitere dein Paket – flexibel & transparent.</h2>
        <p className="text-neutral-500 mt-2">
          Zieh mit der Maus oder swipe – oder lehn dich zurück und lass es laufen.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {modules.map((mod, i) => (
            <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 relative shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group h-full">
                <div className="absolute inset-0 border-2 border-dashed border-neutral-300 rounded-xl pointer-events-none opacity-40"></div>

                <h3 className="text-lg font-semibold mb-2 text-neutral-800 group-hover:text-black transition">
                  {mod.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">{mod.desc}</p>
                <span className="inline-block text-neutral-800 font-medium bg-neutral-100 rounded-md px-3 py-1">
                  {mod.price}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="text-center text-sm text-neutral-500 mt-10">
        Alle Preise zzgl. MwSt. | Kombinierbar mit allen Website-Paketen.
      </p>
    </section>
  )
}
