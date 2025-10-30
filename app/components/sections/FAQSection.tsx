"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { useTranslations } from "next-intl";

export default function FAQWithContact() {
  const t = useTranslations("faq");

  const categories = [
    {
      id: "payment",
      title: t("categories.payment.title"),
      faqs: [
        {
          q: t("categories.payment.faqs.0.q"),
          a: t("categories.payment.faqs.0.a"),
        },
        {
          q: t("categories.payment.faqs.1.q"),
          a: t("categories.payment.faqs.1.a"),
        },
        {
          q: t("categories.payment.faqs.2.q"),
          a: t("categories.payment.faqs.2.a"),
        },
      ],
    },
    {
      id: "handover",
      title: t("categories.handover.title"),
      faqs: [
        {
          q: t("categories.handover.faqs.0.q"),
          a: t("categories.handover.faqs.0.a"),
        },
        {
          q: t("categories.handover.faqs.1.q"),
          a: t("categories.handover.faqs.1.a"),
        },
        {
          q: t("categories.handover.faqs.2.q"),
          a: t("categories.handover.faqs.2.a"),
        },
      ],
    },
    {
      id: "support",
      title: t("categories.support.title"),
      faqs: [
        {
          q: t("categories.support.faqs.0.q"),
          a: t("categories.support.faqs.0.a"),
        },
        {
          q: t("categories.support.faqs.1.q"),
          a: t("categories.support.faqs.1.a"),
        },
        {
          q: t("categories.support.faqs.2.q"),
          a: t("categories.support.faqs.2.a"),
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [projectType, setProjectType] = useState<"template" | "custom">("template");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const modules = [
    t("modules.items.0.title"),
    t("modules.items.1.title"),
    t("modules.items.2.title"),
    t("modules.items.3.title"),
    t("modules.items.4.title"),
    t("modules.items.5.title"),
  ];

  const toggleModule = (mod: string) => {
    if (selectedModules.includes(mod)) {
      setSelectedModules(selectedModules.filter((m) => m !== mod));
    } else {
      setSelectedModules([...selectedModules, mod]);
    }
  };

  const current = categories.find((cat) => cat.id === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mt-3">
          {t("contactSection.title")}
        </h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          {t("contactSection.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* FAQ Categories */}
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

        {/* Contact / Project Type & Modules */}
        <div className="bg-muted/60 p-8 rounded-2xl shadow-sm flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-3 text-foreground text-center">
            {t("contactSection.ctaTitle")}
          </h2>
          <p className="text-muted-foreground mb-6 text-center">
            {t("contactSection.ctaSubtitle")}
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

          {/* Module Selection */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-2">
              {t("contactSection.selectModules")}
            </p>
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

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder={t("contactSection.form.name")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder={t("contactSection.form.email")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder={t("contactSection.form.message")}
              className="w-full rounded-md border border-dashed border-neutral-500 bg-background px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:border-0 focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" className="w-full">
              {t("contactSection.form.button")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
