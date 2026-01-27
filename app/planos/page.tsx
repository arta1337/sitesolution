import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { plans, seoMeta } from "@/lib/content";
import { Check, X, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StickyCTA } from "@/components/sections/sticky-cta";

export const metadata: Metadata = {
  title: seoMeta.plans.title,
  description: seoMeta.plans.description,
  keywords: seoMeta.plans.keywords,
};

// Price anchors for each plan
const priceAnchors: Record<string, string> = {
  essencial: "a partir de 149€/mês",
  profissional: "a partir de 299€/mês",
  premium: "a partir de 499€/mês",
};

// Outcome-focused comparison features
const comparisonFeatures = [
  {
    name: "SLA (tempo de resposta)",
    essencial: "48h úteis",
    profissional: "24h úteis",
    premium: "4h úteis",
  },
  {
    name: "Horas de alterações incluídas",
    essencial: "1h/mês",
    profissional: "3h/mês",
    premium: "6h/mês",
  },
  {
    name: "Backups",
    essencial: "Semanais",
    profissional: "Diários",
    premium: "Diários + 90 dias retenção",
  },
  {
    name: "Monitorização de uptime",
    essencial: true,
    profissional: "24/7",
    premium: "24/7 + alertas",
  },
  {
    name: "Otimização de performance",
    essencial: false,
    profissional: "Básica",
    premium: "Avançada (Core Web Vitals)",
  },
  {
    name: "SEO técnico",
    essencial: false,
    profissional: "Verificação mensal",
    premium: "Auditoria trimestral",
  },
  {
    name: "Pequenas evoluções",
    essencial: "Sob orçamento",
    profissional: "Até 3h incluídas",
    premium: "Até 6h incluídas",
  },
  {
    name: "Relatório mensal",
    essencial: false,
    profissional: true,
    premium: "Detalhado + consultoria",
  },
  {
    name: "Suporte por email",
    essencial: true,
    profissional: true,
    premium: true,
  },
  {
    name: "Suporte prioritário",
    essencial: false,
    profissional: true,
    premium: true,
  },
  {
    name: "Suporte WhatsApp/Telefone",
    essencial: false,
    profissional: false,
    premium: true,
  },
];

// Purchase-focused FAQ
const purchaseFaq = [
  {
    question: "Fico preso a contrato?",
    answer:
      "Não. Os nossos planos são mensais e pode cancelar a qualquer momento com 30 dias de aviso prévio. Não há fidelização obrigatória nem penalizações por cancelamento.",
  },
  {
    question: "O que conta como 'pequena alteração'?",
    answer:
      "Pequenas alterações incluem: atualização de textos, troca de imagens, ajustes de cores ou espaçamentos, adição de novos campos em formulários, correções de bugs. Não inclui: novas páginas, funcionalidades complexas, redesign de secções inteiras.",
  },
  {
    question: "Qual o prazo médio de entrega para alterações?",
    answer:
      "Depende do plano: Essencial (até 5 dias úteis), Profissional (até 3 dias úteis), Premium (até 1 dia útil). Urgências são tratadas com prioridade conforme o SLA contratado.",
  },
  {
    question: "O que acontece se precisar de mais horas?",
    answer:
      "Horas adicionais são faturadas à parte, com preço definido no contrato. Avisamos sempre antes de ultrapassar o limite mensal e pode optar por adiar trabalho não urgente para o mês seguinte.",
  },
  {
    question: "Vocês tratam do domínio e hosting?",
    answer:
      "Sim, podemos gerir o domínio e hosting por si, incluído no plano. Se preferir manter o controlo, trabalhamos com o seu fornecedor atual sem problema.",
  },
  {
    question: "Como funciona a migração?",
    answer:
      "Tratamos de toda a migração do seu site atual para os nossos servidores (ou para o alojamento da sua escolha). O processo é transparente, sem interrupções, e testamos tudo antes de fazer o switch.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim, pode fazer upgrade ou downgrade do plano a qualquer momento. A alteração entra em vigor no mês seguinte.",
  },
  {
    question: "Como é o processo de onboarding?",
    answer:
      "Após contratação, fazemos uma reunião de kickoff (30 min) para entender o seu site, prioridades e canais de comunicação preferidos. Em 48h o seu site está sob a nossa monitorização.",
  },
];

export default function PlanosPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
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

                    {/* Price anchor */}
                    <div className="mt-4 py-4 border-y border-border">
                      <div className="text-2xl font-bold text-foreground">
                        {priceAnchors[plan.id]}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 space-y-4">
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

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Valores podem variar consoante complexidade e stack. Inclui
              manutenção e suporte conforme SLA.
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
                Veja em detalhe o que cada plano inclui, focado em resultados.
              </p>
            </div>

            {/* Table - Desktop */}
            <div className="mt-12 hidden lg:block overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      O que recebe
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

        {/* Purchase FAQ */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <HelpCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Dúvidas Frequentes sobre Contratação
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Respostas às perguntas mais comuns antes de contratar.
                </p>
              </div>

              <Accordion type="single" collapsible className="mt-8">
                {purchaseFaq.map((item, index) => (
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
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contactos">Falar com especialista</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10 bg-transparent"
              >
                <Link href="/auditoria-48h">Receber auditoria grátis</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky CTA for mobile */}
      <StickyCTA />

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
