"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  FileText,
  ArrowRight,
  Gauge,
  Search,
  Lock,
  Smartphone,
  AlertTriangle,
} from "lucide-react";

import { auditFaq } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const auditIcons = [Gauge, Search, Lock, Smartphone, AlertTriangle, TrendingUp];

export default function Auditoria48hPage() {
  const t = useTranslations("Auditoria");
  const searchParams = useSearchParams();

  // Auditoria form state
  const [auditoriaForm, setAuditoriaForm] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    company: "", // honeypot
  });

  async function submitLead(payload: any) {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data?.error || "Failed to submit. Please try again.");
    }

    return res.json().catch(() => ({}));
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAuditoriaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLead({
        lead_type: "auditoria",
        name: auditoriaForm.name,
        email: auditoriaForm.email,
        website: auditoriaForm.website,
        phone: auditoriaForm.phone,
        company: auditoriaForm.company,
      });

      setIsSubmitted(true);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err);
      alert(err?.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setAuditoriaForm({ name: "", email: "", website: "", phone: "", company: "" });
  };

  // Get benefits and included items from translations
  const benefits = t.raw("benefits") as string[];
  const includedItems = t.raw("included.items") as { title: string; description: string }[];
  const reportFeatures = t.raw("report.features") as string[];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Content */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {t("badge")}
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                  {t("title")}
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl text-pretty">
                  {t("subtitle")}
                </p>

                {/* Benefits list */}
                <ul className="mt-8 space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Trust signals */}
                <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>{t("trust.free")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    <span>{t("trust.noCommitment")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>{t("trust.fullReport")}</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:sticky lg:top-24" id="form">
                <Card className="border-2">
                  <CardContent className="p-6 lg:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {t("success.title")}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {t("success.message", { email: auditoriaForm.email })}
                        </p>
                        <Button variant="outline" className="bg-transparent" onClick={resetForm}>
                          {t("success.newRequest")}
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="mb-6">
                          <h2 className="text-xl font-semibold text-foreground">
                            {t("form.title")}
                          </h2>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {t("form.subtitle")}
                          </p>
                        </div>

                        <form onSubmit={handleAuditoriaSubmit} className="space-y-4">
                          <input type="hidden" name="lead_type" value="auditoria" />
                          <div className="hidden">
                            <Label htmlFor="audit-company">{t("form.company")}</Label>
                            <Input
                              id="audit-company"
                              type="text"
                              tabIndex={-1}
                              autoComplete="off"
                              value={auditoriaForm.company}
                              onChange={(e) => setAuditoriaForm({ ...auditoriaForm, company: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="audit-name">{t("form.name")}</Label>
                            <Input
                              id="audit-name"
                              type="text"
                              placeholder={t("form.namePlaceholder")}
                              required
                              value={auditoriaForm.name}
                              onChange={(e) => setAuditoriaForm({ ...auditoriaForm, name: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="audit-email">{t("form.email")}</Label>
                            <Input
                              id="audit-email"
                              type="email"
                              placeholder={t("form.emailPlaceholder")}
                              required
                              value={auditoriaForm.email}
                              onChange={(e) => setAuditoriaForm({ ...auditoriaForm, email: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="audit-website">{t("form.website")}</Label>
                            <Input
                              id="audit-website"
                              type="url"
                              placeholder={t("form.websitePlaceholder")}
                              required
                              value={auditoriaForm.website}
                              onChange={(e) => setAuditoriaForm({ ...auditoriaForm, website: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="audit-phone">{t("form.phone")}</Label>
                            <Input
                              id="audit-phone"
                              type="tel"
                              placeholder={t("form.phonePlaceholder")}
                              value={auditoriaForm.phone}
                              onChange={(e) => setAuditoriaForm({ ...auditoriaForm, phone: e.target.value })}
                            />
                          </div>

                          <Button
                            type="submit"
                            size="lg"
                            variant="brand"
                            className="w-full mt-6"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              t("form.submitting")
                            ) : (
                              <>
                                {t("form.submit")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>

                          <p className="text-xs text-center text-muted-foreground mt-4">
                            {t("form.privacy")}{" "}
                            <Link href="/privacidade" className="underline hover:text-foreground">
                              {t("form.privacyLink")}
                            </Link>
                            {t("form.noSpam")}
                          </p>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("included.title")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("included.subtitle")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {includedItems.map((item, index) => {
                const Icon = auditIcons[index] || Gauge;
                return (
                  <Card key={item.title} className="bg-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sample Report Preview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {t("report.title")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {t("report.subtitle")}
                </p>

                <ul className="mt-6 space-y-3">
                  {reportFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild size="lg" variant="brand">
                    <a href="#form">
                      {t("report.cta")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Report Preview Mockup */}
              <div className="relative">
                <div className="rounded-xl border bg-card p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                    <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                      <span className="text-background font-bold text-sm">SS</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{t("report.mockup.title")}</div>
                      <div className="text-xs text-muted-foreground">{t("report.mockup.brand")}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900">
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">{t("report.mockup.performance")}</span>
                      <span className="text-sm font-bold text-red-600">32/100</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900">
                      <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">{t("report.mockup.seo")}</span>
                      <span className="text-sm font-bold text-yellow-600">58/100</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">{t("report.mockup.security")}</span>
                      <span className="text-sm font-bold text-green-600">85/100</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <div className="text-xs text-muted-foreground mb-2">{t("report.mockup.criticalIssues")}</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-muted-foreground">{t("report.mockup.issue1")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-muted-foreground">{t("report.mockup.issue2")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="text-muted-foreground">{t("report.mockup.issue3")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-xl bg-secondary/50" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          {/* FAQPage JSON-LD */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: auditFaq.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              }),
            }}
          />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">
              {t("faq.title")}
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {auditFaq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("finalCta.title")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("finalCta.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="brand">
                <a href="#form">
                  {t("finalCta.button")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
