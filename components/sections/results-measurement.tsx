import Link from "next/link";
import { Gauge, Search, Shield, TrendingUp } from "lucide-react";

const measurementCards = [
  {
    title: "Performance",
    subtitle: "Core Web Vitals",
    description:
      "Medimos e otimizamos LCP, FID e CLS para garantir uma experiência rápida e fluida.",
    icon: Gauge,
    href: "/servicos/performance-core-web-vitals",
  },
  {
    title: "SEO Técnico",
    subtitle: "Indexação e Estrutura",
    description:
      "Verificamos estrutura, metadados, schema markup e indexação nos motores de busca.",
    icon: Search,
    href: "/servicos/seo-tecnico",
  },
  {
    title: "Segurança & Backups",
    subtitle: "Proteção Contínua",
    description:
      "Monitorização de vulnerabilidades, SSL, headers de segurança e backups automáticos.",
    icon: Shield,
    href: "/servicos/seguranca-backups",
  },
  {
    title: "Conversão (CRO)",
    subtitle: "Otimização Leve",
    description:
      "Analisamos comportamento dos utilizadores e sugerimos melhorias para aumentar pedidos.",
    icon: TrendingUp,
    href: "/servicos/landing-pages-cro",
  },
];

export function ResultsMeasurement() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Como Medimos Resultados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Não nos baseamos em métricas vagas. Acompanhamos indicadores
            concretos que impactam o seu negócio.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {measurementCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {card.subtitle}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
