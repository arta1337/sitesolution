import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export function CaseStudies() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Estudos de Caso
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              Resultados reais de clientes que confiam em nós.
            </p>
          </div>
          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/portfolio">
              Ver todos os projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Case studies grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/portfolio/${study.id}`}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-foreground/10">
                    {study.client.charAt(0)}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-background text-sm font-medium">
                    Ver caso
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {study.sector}
                </div>
                <h3 className="mt-2 text-base font-semibold text-foreground line-clamp-1">
                  {study.client}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {study.objective}
                </p>

                {/* Result */}
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 dark:bg-green-950/30 px-3 py-2 border border-green-200 dark:border-green-900">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                    {study.result}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
