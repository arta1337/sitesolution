import React from "react"
import { whySiteSolutions } from "@/lib/content";
import {
  RefreshCw,
  Clock,
  Zap,
  Shield,
  MessageCircle,
  BarChart3,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  refresh: RefreshCw,
  clock: Clock,
  zap: Zap,
  shield: Shield,
  message: MessageCircle,
  chart: BarChart3,
};

export function WhySiteSolutions() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {whySiteSolutions.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {whySiteSolutions.subtitle}
          </p>
        </div>

        {/* Pillars grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {whySiteSolutions.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Zap;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground/10">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
