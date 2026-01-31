import React from "react"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import {
  CheckCircle,
  Shield,
  Zap,
  Wrench,
  ArrowRight,
  Clock,
  TrendingUp,
} from "lucide-react";

import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function Hero() {
  const t = await getTranslations('Hero');

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Spotlight effect */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Small badge above headline */}
            <ScrollAnimationWrapper delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                {t('badge')}
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                {t('title')}
              </h1>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl text-pretty">
                {t('subtitle')}
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="relative overflow-hidden text-base transition-all hover:scale-105 hover:shadow-primary/40 bg-[linear-gradient(110deg,#e2e8f0,45%,#cbd5e1,55%,#e2e8f0)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white">
                  <Link href="/auditoria-48h">
                    <Clock className="mr-2 h-4 w-4" />
                    {t('cta.primary')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/auditoria-48h#contacto"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  {t('cta.secondary')}
                </Link>
              </div>
            </ScrollAnimationWrapper>

            {/* Trust row with 3 key benefits */}
            <ScrollAnimationWrapper delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <span>{t('trust.maintenance')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>{t('trust.performance')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>{t('trust.support')}</span>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Real Results Strip - "Prova" block */}
            <ScrollAnimationWrapper delay={0.6}>
              <div className="mt-10 rounded-xl border border-border bg-card/50 backdrop-blur-sm p-4 hover:border-foreground/20 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {t('results.title')}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Link href="/portfolio/clinica-exemplo" className="group">
                    <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">+45%</div>
                    <div className="text-xs text-muted-foreground">{t('results.clinics')}</div>
                  </Link>
                  <Link href="/portfolio/imobiliaria-exemplo" className="group">
                    <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">+60%</div>
                    <div className="text-xs text-muted-foreground">{t('results.realEstate')}</div>
                  </Link>
                  <Link href="/portfolio/ecommerce-exemplo" className="group">
                    <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">-45%</div>
                    <div className="text-xs text-muted-foreground">{t('results.ecommerce')}</div>
                  </Link>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  {t('results.disclaimer')}{" "}
                  <Link href="/portfolio" className="underline hover:text-foreground">
                    {t('results.link')}
                  </Link>
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Visual - "Resultados e método" section */}
          <div className="relative lg:pl-8">
            <ScrollAnimationWrapper delay={0.4} direction="left">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h2 className="text-lg font-semibold text-foreground mb-4 relative">
                    {t('method.title')}
                  </h2>

                  {/* Service cards */}
                  <div className="space-y-3 relative">
                    <Link
                      href="/servicos/performance-core-web-vitals"
                      className="group/item flex items-start gap-4 rounded-xl bg-secondary/50 p-4 transition-all hover:bg-secondary hover:translate-x-1"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground flex-shrink-0 group-hover/item:bg-primary transition-colors">
                        <Zap className="h-5 w-5 text-background" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {t('method.performance.title')}
                        </div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {t('method.performance.desc')}
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/servicos/seo-tecnico"
                      className="group/item flex items-start gap-4 rounded-xl bg-secondary/50 p-4 transition-all hover:bg-secondary hover:translate-x-1"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground flex-shrink-0 group-hover/item:bg-primary transition-colors">
                        <TrendingUp className="h-5 w-5 text-background" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {t('method.seo.title')}
                        </div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {t('method.seo.desc')}
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/servicos/seguranca-backups"
                      className="group/item flex items-start gap-4 rounded-xl bg-secondary/50 p-4 transition-all hover:bg-secondary hover:translate-x-1"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground flex-shrink-0 group-hover/item:bg-primary transition-colors">
                        <Shield className="h-5 w-5 text-background" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {t('method.security.title')}
                        </div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {t('method.security.desc')}
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* CTA row */}
                  <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center gap-4 relative">
                    <Button asChild size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Link href="/auditoria-48h">
                        Auditoria 48h
                      </Link>
                    </Button>
                    <Link
                      href="/portfolio"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Ver portfólio
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div >
      </div >
    </section >
  );
}
