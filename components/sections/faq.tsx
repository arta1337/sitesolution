"use client";

import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function FAQ() {
  const t = useTranslations("HomePage.faq");

  const faq = [
    { question: t("items.0.question"), answer: t("items.0.answer") },
    { question: t("items.1.question"), answer: t("items.1.answer") },
    { question: t("items.2.question"), answer: t("items.2.answer") },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-secondary/30 py-16 lg:py-24">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {t("subtitle")}
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-10">
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground">
              {t("ctaBox.title")}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("ctaBox.description")}
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="brand">
                <Link href="/auditoria-48h">{t("ctaBox.button")}</Link>
              </Button>
              <Link
                href="/planos"
                className="text-sm text-muted-foreground hover:text-foreground underline"
              >
                {t("ctaBox.link")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
