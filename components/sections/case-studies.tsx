"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function CaseStudies() {
  const t = useTranslations("HomePage.caseStudies");

  const caseStudies = [
    {
      id: "ui-design-futuro",
      client: t("items.ui-design-futuro.client"),
      sector: t("items.ui-design-futuro.sector"),
      objective: t("items.ui-design-futuro.objective"),
      result: t("items.ui-design-futuro.result"),
      image: "/ui_portfolio_showcase.png",
    },
    {
      id: "clinica-exemplo",
      client: t("items.clinica-exemplo.client"),
      sector: t("items.clinica-exemplo.sector"),
      objective: t("items.clinica-exemplo.objective"),
      result: t("items.clinica-exemplo.result"),
      image: "/clinic_portfolio_showcase.png",
    },
    {
      id: "consultoria-exemplo",
      client: t("items.consultoria-exemplo.client"),
      sector: t("items.consultoria-exemplo.sector"),
      objective: t("items.consultoria-exemplo.objective"),
      result: t("items.consultoria-exemplo.result"),
      image: "/finance_portfolio_showcase.png",
    },
    {
      id: "ecommerce-exemplo",
      client: t("items.ecommerce-exemplo.client"),
      sector: t("items.ecommerce-exemplo.sector"),
      objective: t("items.ecommerce-exemplo.objective"),
      result: t("items.ecommerce-exemplo.result"),
      image: "/ecommerce_portfolio_showcase.png",
    },
    {
      id: "imobiliaria-exemplo",
      client: t("items.imobiliaria-exemplo.client"),
      sector: t("items.imobiliaria-exemplo.sector"),
      objective: t("items.imobiliaria-exemplo.objective"),
      result: t("items.imobiliaria-exemplo.result"),
      image: "/realestate_portfolio_showcase.png",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              {t("subtitle")}
            </p>
          </div>
          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/portfolio">
              {t("viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Case studies grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/portfolio/${study.id}`}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.client}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-background text-sm font-medium border border-background/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    {t("viewCase")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {study.sector}
                </div>
                <h3 className="mt-2 text-base font-semibold text-foreground line-clamp-1">
                  {study.client}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {study.objective}
                </p>

                {/* Result */}
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 dark:bg-green-950/30 px-3 py-2 border border-green-200 dark:border-green-900 w-fit">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                    {study.result}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
