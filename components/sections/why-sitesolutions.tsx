import React from "react"
import { BentoGrid } from "@/components/ui/bento-grid";
import { whySiteSolutions } from "@/lib/content";
import { cn } from "@/lib/utils";
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
  message: MessageCircle,
  chart: BarChart3,
};

export function WhySiteSolutions() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {whySiteSolutions.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {whySiteSolutions.subtitle}
          </p>
        </div>

        {/* Custom Bento Grid Implementation */}
        <BentoGrid className="md:auto-rows-[20rem]">
          {whySiteSolutions.pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon] || Zap;
            const isWide = i === 3 || i === 6;

            return (
              <div
                key={pillar.title}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1",
                  isWide ? "md:col-span-2" : "col-span-1"
                )}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Pattern for wide cards */}
                {isWide && (
                  <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-y-1/4 translate-x-1/4 pointer-events-none">
                    <Icon className="w-64 h-64" />
                  </div>
                )}
              </div>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
