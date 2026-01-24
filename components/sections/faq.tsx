import Link from "next/link";
import { faq } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Respostas às dúvidas mais comuns sobre os nossos serviços.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mt-12">
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional help */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-center">
            <MessageCircle className="mx-auto h-8 w-8 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              Ainda tem dúvidas?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A nossa equipa está disponível para esclarecer todas as suas
              questões.
            </p>
            <Button asChild className="mt-4">
              <Link href="/contactos">Falar connosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
