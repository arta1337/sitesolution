import React from "react"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";
import {
  CheckCircle,
  Headphones,
  Shield,
  Zap,
  Wrench,
  ArrowRight,
} from "lucide-react";

const badgeIconMap: Record<string, React.ElementType> = {
  headphones: Headphones,
  zap: Zap,
  shield: Shield,
  wrench: Wrench,
};

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

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/contactos">
                  {hero.cta.primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base bg-transparent"
              >
                <Link href="/contactos?tipo=especialista">
                  {hero.cta.secondary}
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {hero.badges.map((badge) => {
                const Icon = badgeIconMap[badge.icon] || CheckCircle;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual - Dashboard mockup */}
          <div className="relative lg:pl-8">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main dashboard card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl">
                {/* Browser header */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-6 flex-1 rounded bg-secondary" />
                </div>

                {/* Dashboard content mockup */}
                <div className="space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-secondary p-4">
                      <div className="text-xs text-muted-foreground">
                        Visitas
                      </div>
                      <div className="mt-1 text-xl font-bold">12.4k</div>
                      <div className="mt-1 text-xs text-green-600">+23%</div>
                    </div>
                    <div className="rounded-lg bg-secondary p-4">
                      <div className="text-xs text-muted-foreground">
                        Conversões
                      </div>
                      <div className="mt-1 text-xl font-bold">847</div>
                      <div className="mt-1 text-xs text-green-600">+18%</div>
                    </div>
                    <div className="rounded-lg bg-secondary p-4">
                      <div className="text-xs text-muted-foreground">
                        Velocidade
                      </div>
                      <div className="mt-1 text-xl font-bold">1.2s</div>
                      <div className="mt-1 text-xs text-green-600">-45%</div>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-32 rounded-lg bg-secondary flex items-end justify-around px-4 pb-4">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="w-6 rounded-t bg-foreground/20"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  {/* Status indicators */}
                  <div className="flex items-center justify-between rounded-lg bg-green-50 dark:bg-green-950/20 p-3 border border-green-200 dark:border-green-900">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-400">
                        Site online
                      </span>
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-500">
                      99.9% uptime
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Backup concluído</div>
                    <div className="text-xs text-muted-foreground">
                      Há 2 minutos
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating security card */}
              <div className="absolute -top-2 -right-2 rounded-xl border border-border bg-card p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-foreground" />
                  <span className="text-xs font-medium">SSL Ativo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
