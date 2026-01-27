import Link from "next/link";
import { plans } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Check, X, Clock, Wrench, Database, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="planos" className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Planos de Manutenção
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Escolha o plano que melhor se adapta às necessidades do seu negócio.
            Sem fidelização, sem surpresas.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border bg-card p-8 transition-all duration-300 flex flex-col",
                plan.popular
                  ? "border-foreground shadow-xl scale-105 lg:scale-105 z-10"
                  : "border-border hover:border-foreground/20 hover:shadow-lg"
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-foreground px-4 py-1 text-xs font-semibold text-background">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Key highlights */}
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-secondary p-4">
                <div className="text-center">
                  <Wrench className="mx-auto h-4 w-4 text-muted-foreground mb-1" />
                  <div className="text-xs text-muted-foreground">Horas</div>
                  <div className="text-sm font-semibold text-foreground">
                    {plan.highlights.hours}
                  </div>
                </div>
                <div className="text-center border-x border-border">
                  <Clock className="mx-auto h-4 w-4 text-muted-foreground mb-1" />
                  <div className="text-xs text-muted-foreground">SLA</div>
                  <div className="text-sm font-semibold text-foreground">
                    {plan.highlights.sla}
                  </div>
                </div>
                <div className="text-center">
                  <Database className="mx-auto h-4 w-4 text-muted-foreground mb-1" />
                  <div className="text-xs text-muted-foreground">Backups</div>
                  <div className="text-sm font-semibold text-foreground">
                    {plan.highlights.backups}
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={cn(
                      "flex items-start gap-3",
                      !feature.included && "opacity-50"
                    )}
                  >
                    {feature.included ? (
                      <Check className="h-5 w-5 flex-shrink-0 text-green-600" />
                    ) : (
                      <X className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    )}
                    <span
                      className={cn(
                        "text-sm text-muted-foreground",
                        !feature.included && "line-through"
                      )}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href={`/auditoria-48h?plano=${plan.id}`}>
                    Escolher {plan.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Os valores finais dependem do projeto.{" "}
          <Link
            href="/auditoria-48h"
            className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80"
          >
            Peça uma auditoria gratuita
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
