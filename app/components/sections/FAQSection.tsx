"use client";

import { useState, FormEvent } from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "../ui/select";

import TEXT from "@/lib/faq";

export default function FAQWithContact() {
  const categories = TEXT.categories;
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const current = categories.find((cat) => cat.id === activeCategory);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company,
          name,
          email,
          message,
          projectType: selectedPackage,
        }),
      });

      if (!res.ok) throw new Error(`Serverfehler: ${res.status}`);
      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setCompany("");
        setName("");
        setEmail("");
        setMessage("");
        setSelectedPackage("");
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
      <div className="text-center mb-12" id="contact">
        <h1 className="text-4xl font-bold text-foreground mt-3">
          {TEXT.contactSection.title}
        </h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          {TEXT.contactSection.ctaSubtitle}
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

          <Accordion type="single" defaultValue="item-0" collapsible>
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

        {/* Right: Contact Form */}
        <div className="bg-muted/60 p-8 rounded-2xl shadow-sm flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-3 text-foreground text-center">
            {TEXT.contactSection.ctaTitle}
          </h2>
          <p className="text-muted-foreground mb-6 text-center">
            {TEXT.contactSection.ctaSubtitle}
          </p>

          {/* Package Selection */}
          <div className="mb-6">
            <Select
              value={selectedPackage}
              onValueChange={(val) => setSelectedPackage(val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Wählen Sie ein Paket" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TEXT.packages.map((pkg) => (
                    <SelectItem key={pkg} value={pkg}>
                      {pkg}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={TEXT.contactSection.form.company}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="text"
              placeholder={TEXT.contactSection.form.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <input
              type="email"
              placeholder={TEXT.contactSection.form.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <textarea
              placeholder={TEXT.contactSection.form.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-md border border-dashed border-neutral-500 bg-background px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? TEXT.contactSection.form.sending
                : TEXT.contactSection.form.button}
            </Button>

            {success === true && (
              <p className="text-green-600 text-sm mt-2 text-center">
                {TEXT.contactSection.form.success}
              </p>
            )}
            {success === false && (
              <p className="text-red-600 text-sm mt-2 text-center">
                {TEXT.contactSection.form.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
