import React from "react"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";
import {
  CheckCircle,
  Shield,
  Zap,
  Wrench,
  ArrowRight,
  Clock,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Small badge above headline */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Disponíveis para novos projetos
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl text-pretty">
              {hero.subtitle}
            </p>

            {/* CTA - Single primary action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/auditoria-48h">
                  <Clock className="mr-2 h-4 w-4" />
                  Auditoria 48h
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link 
                href="/auditoria-48h#contacto"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto rápido
              </Link>
            </div>

            {/* Trust row with 3 key benefits */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-foreground" />
                <span>Manutenção e segurança incluídas</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-foreground" />
                <span>Performance e SEO técnico</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-foreground" />
                <span>SLA e suporte contínuo</span>
              </div>
            </div>

            {/* Real Results Strip - "Prova" block */}
            <div className="mt-10 rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Resultados reais (Exemplos)
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Link href="/portfolio/clinica-exemplo" className="group">
                  <div className="text-lg font-bold text-foreground group-hover:text-foreground/80 transition-colors">+45%</div>
                  <div className="text-xs text-muted-foreground">marcações</div>
                </Link>
                <Link href="/portfolio/imobiliaria-exemplo" className="group">
                  <div className="text-lg font-bold text-foreground group-hover:text-foreground/80 transition-colors">+60%</div>
                  <div className="text-xs text-muted-foreground">tráfego orgânico</div>
                </Link>
                <Link href="/portfolio/ecommerce-exemplo" className="group">
                  <div className="text-lg font-bold text-foreground group-hover:text-foreground/80 transition-colors">-45%</div>
                  <div className="text-xs text-muted-foreground">tempo carregamento</div>
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Resultados variam por projeto.{" "}
                <Link href="/portfolio" className="underline hover:text-foreground">
                  Ver exemplos no portfólio
                </Link>
              </p>
            </div>
          </div>

          {/* Visual - "Resultados e método" section */}
          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Resultados e método
                </h2>
                
                {/* Service cards */}
                <div className="space-y-3">
                  <Link 
                    href="/servicos/performance-core-web-vitals"
                    className="group flex items-start gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground flex-shrink-0">
                      <Zap className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-foreground/80">
                        Performance (Core Web Vitals)
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        Sites rápidos convertem mais
                      </div>
                    </div>
                  </Link>

                  <Link 
                    href="/servicos/seo-tecnico"
                    className="group flex items-start gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-foreground/80">
                        SEO técnico
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        Visibilidade nos motores de busca
                      </div>
                    </div>
                  </Link>

                  <Link 
                    href="/servicos/seguranca-backups"
                    className="group flex items-start gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground flex-shrink-0">
                      <Shield className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-foreground/80">
                        Segurança & Backups
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        Proteção contínua do seu site
                      </div>
                    </div>
                  </Link>
                </div>

                {/* CTA row */}
                <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center gap-4">
                  <Button asChild size="sm">
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
          </div>
        </div>
      </div>
    </section>
  );
}
