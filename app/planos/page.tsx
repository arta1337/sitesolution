import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { plans, seoMeta, faq } from "@/lib/content";
import { Check, X, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: seoMeta.plans.title,
  description: seoMeta.plans.description,
  keywords: seoMeta.plans.keywords,
};

// Filter maintenance-related FAQs
const maintenanceFaqs = faq.filter(
  (item) =>
    item.question.toLowerCase().includes("manutenção") ||
    item.question.toLowerCase().includes("cancelar") ||
    item.question.toLowerCase().includes("suporte")
);

// Comparison features for the table
const comparisonFeatures = [
  { name: "Atualizações de segurança", essencial: "Mensais", profissional: "Semanais", premium: "Contínuas" },
  { name: "Backups", essencial: "Semanais", profissional: "Diários", premium: "Diários + 90 dias" },
  { name: "Monitorização de uptime", essencial: true, profissional: "24/7", premium: "Avançada 24/7" },
  { name: "Horas de alterações/mês", essencial: "1h", profissional: "3h", premium: "6h" },
  { name: "Tempo de resposta (SLA)", essencial: "48h úteis", profissional: "24h úteis", premium: "4h úteis" },
  { name: "Suporte por email", essencial: true, profissional: true, premium: true },
  { name: "Suporte prioritário", essencial: false, profissional: true, premium: true },
  { name: "Suporte dedicado", essencial: false, profissional: false, premium: true },
  { name: "Relatório mensal", essencial: false, profissional: true, premium: true },
  { name: "Consultoria incluída", essencial: false, profissional: false, premium: true },
  { name: "Otimização de performance", essencial: false, profissional: "Básica", premium: "Avançada" },
  { name: "Auditoria SEO", essencial: false, profissional: false, premium: "Trimestral" },
];

export default function PlanosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Planos de Manutenção
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Escolha o plano ideal para manter o seu site sempre atualizado,
                seguro e a funcionar sem interrupções.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(
                    "relative rounded-2xl border bg-card p-8 transition-all duration-300",
                    plan.popular
                      ? "border-foreground shadow-xl lg:scale-105 z-10"
                      : "border-border hover:border-foreground/20 hover:shadow-lg"
                  )}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-foreground px-4 py-1.5 text-sm font-semibold text-background">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  {/* Plan header */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground">
                      {plan.name}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                    <ul className="mt-8 space-y-4">
                      {plan.features?.map((feature) => (
                        <li
                          key={feature.text}
                          className={cn(
                            "flex items-start gap-3",
                            !feature.included && "opacity-50"
                          )}
                        >
                          {feature.included ? (
                            <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 flex-shrink-0 text-muted-foreground mt-0.5" />
                          )}

                          <span
                            className={cn(
                              "text-sm text-muted-foreground",
                              !feature.included && "line-through"
                            )}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      <Link href={`/contactos?plano=${plan.id}`}>
                        Escolher {plan.name}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-center text-sm text-muted-foreground">
              Os valores finais dependem do projeto. Peça uma proposta
              personalizada sem compromisso.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Comparação de Planos
              </h2>
              <p className="mt-4 text-muted-foreground">
                Veja em detalhe o que cada plano inclui.
              </p>
            </div>

            {/* Table - Desktop */}
            <div className="mt-12 hidden lg:block overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Funcionalidade
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Essencial
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground bg-foreground/5">
                      Profissional
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name} className="bg-card">
                      <td className="px-6 py-4 text-sm text-foreground">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                        {renderFeatureValue(feature.essencial)}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground bg-foreground/5">
                        {renderFeatureValue(feature.profissional)}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                        {renderFeatureValue(feature.premium)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards - Mobile */}
            <div className="mt-8 space-y-6 lg:hidden">
              {comparisonFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="font-medium text-foreground mb-3">
                    {feature.name}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">
                        Essencial
                      </div>
                      {renderFeatureValue(feature.essencial)}
                    </div>
                    <div className="text-center bg-secondary/50 rounded-lg py-2">
                      <div className="text-xs text-muted-foreground mb-1">
                        Profissional
                      </div>
                      {renderFeatureValue(feature.profissional)}
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">
                        Premium
                      </div>
                      {renderFeatureValue(feature.premium)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <HelpCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Dúvidas sobre Manutenção
                </h2>
              </div>

              <Accordion type="single" collapsible className="mt-8">
                {maintenanceFaqs.map((item, index) => (
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

              <div className="mt-8 text-center">
                <Link
                  href="/#faq"
                  className="text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Ver todas as perguntas frequentes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Não sabe qual escolher?
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Fale connosco e recomendamos o plano ideal para o seu caso.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contactos">Falar com especialista</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function renderFeatureValue(value: boolean | string) {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-600 mx-auto" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />;
  }
  return <span>{value}</span>;
}
