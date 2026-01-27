import React from "react"
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
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

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  wrench: Wrench,
  zap: Zap,
  search: Search,
  shield: Shield,
  server: Server,
};

export function Services() {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Serviços
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Tudo o que precisa para ter uma presença digital profissional e
            eficaz.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div key={service.id} className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg">
                {/* Image */}
                  {service.image && (
                    <div className="mb-5 overflow-hidden rounded-xl border bg-muted">
                      <div className="relative h-[180px] w-full">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                  )}
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted ring-1 ring-border transition group-hover:ring-foreground/30 group-hover:bg-muted/80">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>  


                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={`/servicos#${service.id}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                >
                  Saber mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/auditoria-48h">
              Auditoria 48h
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
