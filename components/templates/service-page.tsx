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
import {
  CheckCircle,
  ArrowRight,
  Clock,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServicePageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  includes: string[];
  process: { step: number; title: string; description: string }[];
  deliverables: string[];
  timelines: { type: string; duration: string }[];
  faq: { question: string; answer: string }[];
  relatedServices?: { title: string; href: string }[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  icon: Icon,
  includes,
  process,
  deliverables,
  timelines,
  faq,
  relatedServices,
}: ServicePageProps) {
  const t = useTranslations("ServicePageTemplate");

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
                {t("breadcrumbs.home")}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/servicos"
                className="hover:text-foreground transition-colors"
              >
                {t("breadcrumbs.services")}
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
                    {t("cta.audit")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* O Que Inclui */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                {t("sections.includes")}
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
              {t("sections.process")}
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div key={step.step} className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-bold">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entregáveis & Prazos */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Entregáveis */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {t("sections.deliverables")}
                </h2>
                <ul className="mt-6 space-y-3">
                  {deliverables.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prazos */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-foreground" />
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    {t("sections.timelines")}
                  </h2>
                </div>
                <div className="space-y-4">
                  {timelines.map((timeline, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                    >
                      <span className="text-muted-foreground">
                        {timeline.type}
                      </span>
                      <span className="font-semibold text-foreground">
                        {timeline.duration}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t("sections.timelines_disclaimer")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                {t("sections.faq")}
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

        {/* Related Services - if provided */}
        {relatedServices && (
          <section className="py-16 lg:py-20 bg-secondary/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center mb-8">
                {t("sections.related_services")}
              </h2>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                {relatedServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="block p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                    <div className="mt-2 text-primary flex items-center text-sm font-medium">
                      {t("common.more_info")} <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              {t("footer.title")}
            </h2>
            <p className="mt-4 text-lg text-background/70">
              {t("footer.subtitle")}
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/auditoria-48h">{t("footer.button")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
