import Link from "next/link";
import { faq } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
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
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Respostas rápidas às dúvidas mais comuns antes de avançar.
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
              Quer uma resposta aplicada ao seu site?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Peça uma auditoria gratuita em 48h e receba um relatório com quick
              wins priorizados.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="brand">
                <Link href="/auditoria-48h">Auditoria 48h</Link>
              </Button>
              <Link
                href="/planos"
                className="text-sm text-muted-foreground hover:text-foreground underline"
              >
                Ver planos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
