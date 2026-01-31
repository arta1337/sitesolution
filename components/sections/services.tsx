import React from "react"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Wrench,
  Zap,
  Search,
  Shield,
  Server,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const t = useTranslations("ServicesSection");

  const serviceIds = [
    "criacao",
    "manutencao",
    "performance",
    "seo",
    "seguranca",
    "hosting",
  ];

  const iconMap: Record<string, React.ElementType> = {
    criacao: Globe,
    manutencao: Wrench,
    performance: Zap,
    seo: Search,
    seguranca: Shield,
    hosting: Server,
  };

  const imageMap: Record<string, string> = {
    criacao: "/services/criacao-websites.png",
    manutencao: "/services/manutencao.png",
    performance: "/services/performance.png",
    seo: "/services/seo.png",
    seguranca: "/services/seguranca.png",
    hosting: "/services/hosting.png",
  };

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-background">
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

        {/* Services grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {serviceIds.map((id) => {
            const Icon = iconMap[id] || Globe;
            const features = ["0", "1"];

            return (
              <div key={id} className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg">
                {/* Image */}
                <div className="mb-5 overflow-hidden rounded-xl border bg-muted">
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={imageMap[id] || "/placeholder.svg"}
                      alt={t(`items.${id}.title`)}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted ring-1 ring-border transition group-hover:ring-foreground/30 group-hover:bg-muted/80">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${id}.description`)}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {features.map((featureKey) => (
                    <li
                      key={featureKey}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40" />
                      {t(`items.${id}.features.${featureKey}`)}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={`/servicos#${id}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                >
                  {t("learnMore")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="brand">
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
