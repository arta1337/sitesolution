"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StickyCTA } from "@/components/sections/sticky-cta";
import { useTranslations } from "next-intl";

export default function PlanosPage() {
  const t = useTranslations("Plans");

  // Helper to get array from translation object keys
  const planKeys = ["essencial", "profissional", "premium"];
  const comparisonFeatures = [
    "sla",
    "hours",
    "backups",
    "uptime",
    "performance",
    "seo",
    "evolutions",
    "report",
    "supportEmail",
    "supportPriority",
    "supportPhone"
  ];

  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t("hero.title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {planKeys.map((key) => {
                const isPopular = key === "profissional";
                return (
                  <div
                    key={key}
                    className={cn(
                      "relative rounded-2xl border bg-card p-8 transition-all duration-300",
                      isPopular
                        ? "border-foreground shadow-xl lg:scale-105 z-10"
                        : "border-border hover:border-foreground/20 hover:shadow-lg"
                    )}
                  >
                    {/* Popular badge */}
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-foreground px-4 py-1.5 text-sm font-semibold text-background">
                          {t(`list.${key}.badge`)}
                        </span>
                      </div>
                    )}

                    {/* Plan header */}
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-foreground">
                        {t(`list.${key}.name`)}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t(`list.${key}.description`)}
                      </p>

                      {/* Price anchor */}
                      <div className="mt-4 py-4 border-y border-border">
                        <div className="text-2xl font-bold text-foreground">
                          {t(`prices.${key}`)}
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="mt-6 space-y-4">
                        <PlanFeatures t={t} planKey={key} />
                      </ul>

                      {/* CTA */}
                      <div className="mt-8">
                        <Button
                          asChild
                          className="w-full"
                          variant={isPopular ? "default" : "outline"}
                          size="lg"
                        >
                          <Link href={`/auditoria-48h`}>
                            {t(`list.${key}.cta`)}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              * {t("prices.essencial")}
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {t("comparison.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t("comparison.subtitle")}
              </p>
            </div>

            {/* Table - Desktop */}
            <div className="mt-12 hidden lg:block overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      {t("comparison.cols.feature")}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      {t("comparison.cols.essencial")}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground bg-foreground/5">
                      {t("comparison.cols.profissional")}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      {t("comparison.cols.premium")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature} className="bg-card">
                      <td className="px-6 py-4 text-sm text-foreground">
                        {t(`comparison.features.${feature}`)}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                        {renderFeatureValue(t(`comparison.values.${feature}.essencial`))}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground bg-foreground/5">
                        {renderFeatureValue(t(`comparison.values.${feature}.profissional`))}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                        {renderFeatureValue(t(`comparison.values.${feature}.premium`))}
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
                  key={feature}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="font-medium text-foreground mb-3">
                    {t(`comparison.features.${feature}`)}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">
                        {t("comparison.cols.essencial")}
                      </div>
                      {renderFeatureValue(t(`comparison.values.${feature}.essencial`))}
                    </div>
                    <div className="text-center bg-secondary/50 rounded-lg py-2">
                      <div className="text-xs text-muted-foreground mb-1">
                        {t("comparison.cols.profissional")}
                      </div>
                      {renderFeatureValue(t(`comparison.values.${feature}.profissional`))}
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">
                        {t("comparison.cols.premium")}
                      </div>
                      {renderFeatureValue(t(`comparison.values.${feature}.premium`))}
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
                  {t("faq.title")}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {t("faq.subtitle")}
                </p>
              </div>

              <Accordion type="single" collapsible className="mt-8">
                {Array.from({ length: 7 }).map((_, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                      {t(`faq.items.${index}.question`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {t(`faq.items.${index}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* CTA */}
        <section className="py-16 lg:py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-white/10">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-950/80"></div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("cta_bottom.title")}
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              {t("cta_bottom.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-zinc-950 hover:bg-zinc-200 font-semibold"
              >
                <Link href="/auditoria-48h">{t("cta_bottom.primary")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/auditoria-48h">{t("cta_bottom.secondary")}</Link>
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

function PlanFeatures({ t, planKey }: { t: any, planKey: string }) {
  try {
    const features = t.raw(`list.${planKey}.features`) as Record<string, string>;
    if (features && typeof features === 'object') {
      return (
        <>
          {Object.values(features).map((featureText, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
              <span className="text-sm text-muted-foreground">
                {featureText}
              </span>
            </li>
          ))}
        </>
      );
    }
  } catch (e) {
    // Fallback
  }

  // Fallback loop
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => {
        try {
          const val = t(`list.${planKey}.features.${i}`);
          if (val === `list.${planKey}.features.${i}`) return null;
          return (
            <li key={i} className="flex items-start gap-3">
              <Check className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
              <span className="text-sm text-muted-foreground">
                {val}
              </span>
            </li>
          );
        } catch { return null; }
      })}
    </>
  );
}

function renderFeatureValue(value: string) {
  if (value === "true") {
    return <Check className="h-5 w-5 text-green-600 mx-auto" />;
  }
  if (value === "false") {
    return <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />;
  }
  return <span>{value}</span>;
}
