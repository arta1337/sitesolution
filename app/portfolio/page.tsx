import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { caseStudies, seoMeta } from "@/lib/content";
import { TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: seoMeta.portfolio.title,
  description: seoMeta.portfolio.description,
  keywords: seoMeta.portfolio.keywords,
};

// Get unique sectors for filtering
const sectors = [...new Set(caseStudies.map((study) => study.sector))];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Portfólio
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Conheça alguns dos projetos que desenvolvemos. Resultados reais
                para clientes de diversos setores.
              </p>
            </div>

            {/* Sector tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {caseStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/portfolio/${study.id}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-xl"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-foreground/10">
                        {study.client.charAt(0)}
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-background font-medium">
                        Ver estudo de caso
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {study.sector}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-foreground lg:text-2xl">
                      {study.client}
                    </h2>

                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>

                    {/* Result highlight */}
                    <div className="mt-6 flex items-center gap-3 rounded-lg bg-green-50 dark:bg-green-950/30 px-4 py-3 border border-green-200 dark:border-green-900">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Resultado
                        </div>
                        <div className="font-semibold text-green-700 dark:text-green-400">
                          {study.result}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Quer resultados como estes?
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Conte-nos sobre o seu projeto e criamos uma solução à medida.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contactos">Iniciar projeto</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
