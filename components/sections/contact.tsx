"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

// Contact section (info-only) — all lead capture routes to /auditoria-48h
export function Contact() {
  const t = useTranslations("HomePage.contact");

  const trustItems = [
    t("trust.0"),
    t("trust.1"),
    t("trust.2"),
  ];

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {t("subtitle")}
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t("labels.email")}</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t("labels.phone")}</div>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Clock className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{t("labels.hours")}</div>
                  <div className="text-sm font-medium text-foreground">
                    {siteConfig.contact.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Shield className="h-4 w-4" />
                  {item}
                </div>
              ))}
            </div>

            {/* Response time highlight */}
            <div className="mt-8 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-green-800 dark:text-green-300">
                    {t("responseBadge.title")}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    {t("responseBadge.subtitle")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Single funnel CTA */}
          <Card className="border-2 h-fit lg:sticky lg:top-24">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground">
                {t("ctaBox.title")}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("ctaBox.description")}
              </p>

              <div className="mt-6">
                <Button asChild size="lg" variant="brand" className="w-full">
                  <Link href="/auditoria-48h">
                    {t("ctaBox.button")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                {t("ctaBox.note")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
