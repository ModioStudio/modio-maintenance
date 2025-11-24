"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/app/components/ui/carousel";


import TEXT from "@/lib/modules";

export default function ModulesSection() {
  return (
    <section className="py-16 lg:py-24 px-4 select-none">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-neutral-500 font-medium">
          {TEXT.subtitle}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">{TEXT.title}</h2>
        <p className="text-neutral-500 mt-2">{TEXT.description}</p>
      </div>

      <Carousel
        opts={{ align: "start", loop: true, dragFree: true }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {TEXT.items.map((item, i) => (
            <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 relative shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group h-full">
                <div className="absolute inset-0 border-2 border-dashed border-neutral-300 rounded-xl pointer-events-none opacity-40"></div>

                <h3 className="text-lg font-semibold mb-2 text-neutral-800 group-hover:text-black transition">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">{item.desc}</p>
                <span className="inline-block text-neutral-800 font-medium bg-neutral-100 rounded-md px-3 py-1">
                  {item.price}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="text-center text-sm text-neutral-500 mt-10">{TEXT.footer}</p>
    </section>
  );
}
