"use client";

import { useState } from "react";
import { Link } from "@/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, Clock, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import { UiShowcase } from "@/components/sections/ui-showcase";

export default function PortfolioPage() {
  const t = useTranslations("Portfolio");
  const [sectorFilter, setSectorFilter] = useState("all");

  const portfolioIds = [
    "ui-design-futuro",
    "clinica-exemplo",
    "consultoria-exemplo",
    "ecommerce-exemplo",
    "imobiliaria-exemplo",
  ];

  const imageMap: Record<string, string> = {
    "ui-design-futuro": "/ui_portfolio_showcase.png",
    "clinica-exemplo": "/clinic_portfolio_showcase.png",
    "consultoria-exemplo": "/finance_portfolio_showcase.png",
    "ecommerce-exemplo": "/ecommerce_portfolio_showcase.png",
    "imobiliaria-exemplo": "/realestate_portfolio_showcase.png",
  };

  // Filter logic needs to read the specific property.
  // We can't easily filter by "sector" without fetching all data first.
  // Or we map IDs to sectors hardcoded or fetch.
  // Let's fetch all items data first.

  const items = portfolioIds.map(id => ({
    id,
    // 'client' comes from caseStudies, 'sector/result/description' come from items
    client: t(`caseStudies.${id}.client`),
    sector: t(`items.${id}.sector`),
    result: t(`items.${id}.result`),
    description: t(`items.${id}.description`),
    image: imageMap[id]
  }));

  const filteredStudies = items.filter((study) => {
    // We need to map localized sector name to filter value?
    // Or just check if study.sector matches.
    // Filter values are: "Saúde", "Imobiliário" etc (in PT).
    // In TSX, filters are localized using `t('filters.health')` etc?
    // The sectorFilters array in original code had hardcoded labels.
    // I should update sectorFilters to use values that match the translation keys or values.
    // To keep it simple, I'll compare against the TRANSLATED sector string

    // Let's redefine filters to keys
    if (sectorFilter === "all") return true;
    // This is tricky because sectorFilter is a value like "health".
    // study.sector is "Saúde" (PT) or "Health" (EN).
    // I should map filter key to expected sector string.
    // t(`filters.${sectorFilter}`) should match study.sector?    
    // Example: sectorFilter="health". t("filters.health") = "Saúde". study.sector="Saúde". Match!
    return study.sector === t(`filters.${sectorFilter}`);
  });

  const filterOptions = [
    { key: "all", label: t("filters.all") },
    { key: "health", label: t("filters.health") },
    { key: "realestate", label: t("filters.realestate") },
    { key: "ecommerce", label: t("filters.ecommerce") },
    { key: "financial", label: t("filters.financial") },
    { key: "tech", label: t("filters.tech") },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("subtitle")}
              </p>
            </div>

            {/* Filters */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t("filters.label")}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {filterOptions.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSectorFilter(filter.key)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                      sectorFilter === filter.key
                        ? "bg-foreground text-background"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Audit CTA Card */}
            <div className="mb-12 rounded-2xl border border-border bg-card p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground">
                    <Clock className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {t("auditCard.title")}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {t("auditCard.subtitle")}
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/auditoria-48h">
                    {t("auditCard.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {filteredStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/portfolio/${study.id}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-xl"
                >
                  {/* Image Area */}
                  <div className="aspect-video bg-secondary relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={study.image}
                      alt={study.client}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback if image fails
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-zinc-900');
                      }}
                    />
                    {/* Fallback hidden by default, shown via CSS if img hidden? Hard to do inline.
                         Better: Use a component or simple approach.
                         If image loads, it covers. If not, we have a background.
                     */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center bg-zinc-900 text-zinc-700 font-bold text-4xl">
                      {study.client.charAt(0)}
                    </div>

                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-white font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        {t("viewStudy")}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {study.sector}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-foreground lg:text-2xl">
                      {study.client}
                    </h2>

                    <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-2">
                      {study.description}
                    </p>

                    {/* Result highlight */}
                    <div className="mt-6 flex items-center gap-3 rounded-lg bg-green-500/10 px-4 py-3 border border-green-500/20">
                      <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {t("result")}
                        </div>
                        <div className="font-semibold text-green-700 dark:text-green-400">
                          {study.result}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredStudies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {t("noProjects")}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => setSectorFilter("all")}
                >
                  {t("viewAll")}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA - Fixed Dark Mode */}
        <section className="py-16 lg:py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-950/80"></div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-zinc-950 hover:bg-zinc-200 font-semibold"
              >
                <Link href="/auditoria-48h">{t("cta.button")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
