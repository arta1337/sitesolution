"use client";

import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Process() {
  const t = useTranslations("HomePage.process");

  const process = [
    {
      step: 1,
      title: t("steps.0.title"),
      description: t("steps.0.description"),
    },
    {
      step: 2,
      title: t("steps.1.title"),
      description: t("steps.1.description"),
    },
    {
      step: 3,
      title: t("steps.2.title"),
      description: t("steps.2.description"),
    },
    {
      step: 4,
      title: t("steps.3.title"),
      description: t("steps.3.description"),
    },
    {
      step: 5,
      title: t("steps.4.title"),
      description: t("steps.4.description"),
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

        {/* Process steps - horizontal on desktop */}
        <div className="mt-12 lg:mt-16">
          <div className="grid gap-6 md:grid-cols-5">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connection line */}
                {index < process.length - 1 && (
                  <div className="absolute right-0 top-6 hidden h-px w-6 bg-border md:block translate-x-full" />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-lg font-bold text-background">
                    {step.step}
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="bg-transparent">
            <Link href="/auditoria-48h">
              {t("cta")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
