"use client";

import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  Activity,
  Search,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export function MonthlyReportPreview() {
  const t = useTranslations("HomePage.monthlyReport");

  const reportSections = [
    {
      title: t("mockup.metrics.uptime"),
      value: "99.98%",
      status: "ok",
      icon: Activity,
    },
    {
      title: t("mockup.metrics.updates"),
      value: t("mockup.metrics.updatesValue"),
      status: "ok",
      icon: Wrench,
    },
    {
      title: t("mockup.metrics.performance"),
      value: "92/100",
      status: "ok",
      icon: Clock,
    },
    {
      title: t("mockup.metrics.seo"),
      value: t("mockup.metrics.seoValue"),
      status: "pending",
      icon: Search,
    },
  ];

  const nextSteps = [
    t("mockup.nextSteps.0"),
    t("mockup.nextSteps.1"),
    t("mockup.nextSteps.2"),
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {t("subtitle")}
            </p>
            <p className="mt-4 text-muted-foreground">
              {t("note")}
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/auditoria-48h">
                  {t("cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Report mockup */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
            {/* Report header */}
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {t("mockup.header")}
                </div>
                <div className="text-lg font-semibold text-foreground mt-1">
                  Janeiro 2026
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
              {reportSections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="rounded-lg bg-secondary/50 p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {section.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-foreground">
                        {section.value}
                      </span>
                      {section.status === "ok" && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pedidos realizados */}
            <div className="border-t border-border pt-4 mb-4">
              <div className="text-sm font-medium text-foreground mb-2">
                {t("mockup.requestsTitle")}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("mockup.requestsText")}
              </div>
            </div>

            {/* Next steps */}
            <div className="border-t border-border pt-4">
              <div className="text-sm font-medium text-foreground mb-3">
                {t("mockup.nextStepsTitle")}
              </div>
              <ul className="space-y-2">
                {nextSteps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-secondary text-xs font-medium text-foreground shrink-0">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
