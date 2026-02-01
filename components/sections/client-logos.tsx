"use client";

import { useTranslations } from "next-intl";

export function ClientLogos() {
  const t = useTranslations("HomePage.clientLogos");

  const sectors = [
    t("items.0"),
    t("items.1"),
    t("items.2"),
    t("items.3"),
    t("items.4"),
    t("items.5"),
  ];

  return (
    <section className="py-10 lg:py-12 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          {t("title")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {sectors.map((name) => (
            <div
              key={name}
              className="flex h-12 items-center justify-center px-6 rounded-lg bg-secondary/50 text-muted-foreground font-medium text-sm tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
