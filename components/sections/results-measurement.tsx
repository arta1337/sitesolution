"use client";

import { Link } from "@/navigation";
import { Gauge, Search, Shield, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function ResultsMeasurement() {
  const t = useTranslations("HomePage.resultsMeasurement");

  const measurementCards = [
    {
      title: t("cards.0.title"),
      subtitle: t("cards.0.subtitle"),
      description: t("cards.0.description"),
      icon: Gauge,
      href: "/servicos/performance-core-web-vitals",
    },
    {
      title: t("cards.1.title"),
      subtitle: t("cards.1.subtitle"),
      description: t("cards.1.description"),
      icon: Search,
      href: "/servicos/seo-tecnico",
    },
    {
      title: t("cards.2.title"),
      subtitle: t("cards.2.subtitle"),
      description: t("cards.2.description"),
      icon: Shield,
      href: "/servicos/seguranca-backups",
    },
    {
      title: t("cards.3.title"),
      subtitle: t("cards.3.subtitle"),
      description: t("cards.3.description"),
      icon: TrendingUp,
      href: "/servicos/landing-pages-cro",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {measurementCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {card.subtitle}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
