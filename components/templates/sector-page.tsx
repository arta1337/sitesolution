import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, ChevronRight, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SectorPageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  challenges: string[];
  solutions: { title: string; description: string }[];
  features: string[];
  caseStudy?: {
    client: string;
    result: string;
    href: string;
  };
  faq: { question: string; answer: string }[];
}

export function SectorPageTemplate({
  title,
  subtitle,
  icon: Icon,
  challenges,
  solutions,
  features,
  caseStudy,
  faq,
}: SectorPageProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Início
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{title}</span>
            </nav>

            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground">
                  <Icon className="h-8 w-8 text-background" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="brand">
                  <Link href="/auditoria-48h">
                    Auditoria 48h
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                Desafios Comuns
              </h2>
              <p className="mt-4 text-center text-muted-foreground">
                Problemas que ouvimos frequentemente de empresas do setor.
              </p>
              <ul className="mt-8 space-y-4">
                {challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
              Como Ajudamos
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                O Que Incluímos
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Case Study highlight */}
        {caseStudy && (
          <section className="py-16 lg:py-20 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto">
                <Link
                  href={caseStudy.href}
                  className="block rounded-2xl border border-border bg-card p-8 hover:border-foreground/20 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span>Exemplo de projeto</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {caseStudy.client}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      {caseStudy.result}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      Ver caso
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                Perguntas Frequentes
              </h2>
              <Accordion type="single" collapsible className="mt-8">
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
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Pronto para melhorar a sua presença digital?
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Peça uma auditoria gratuita do seu site em 48h.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/auditoria-48h">Auditoria 48h</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
