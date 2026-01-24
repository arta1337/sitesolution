import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/content";
import { ArrowLeft, TrendingUp, Quote, CheckCircle } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return {
      title: "Caso não encontrado",
    };
  }

  return {
    title: `${study.client} | Portfólio`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  // Get related case studies (same sector or random)
  const relatedStudies = caseStudies
    .filter((s) => s.id !== study.id)
    .slice(0, 2);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-8 lg:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao portfólio
            </Link>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Content */}
              <div>
                <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  {study.sector}
                </span>

                <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {study.client}
                </h1>

                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {study.description}
                </p>

                {/* Objective and Result */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <div className="text-sm text-muted-foreground">
                      Objetivo
                    </div>
                    <div className="mt-1 font-semibold text-foreground">
                      {study.objective}
                    </div>
                  </div>
                  <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-5">
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      Resultado
                    </div>
                    <div className="mt-1 font-bold text-green-700 dark:text-green-400 text-lg">
                      {study.result}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="rounded-2xl border border-border bg-secondary aspect-video flex items-center justify-center overflow-hidden">
                <div className="text-8xl font-bold text-foreground/10">
                  {study.client.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Challenge */}
              <div>
                <h2 className="text-xl font-bold text-foreground">O Desafio</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  O cliente precisava de uma solução digital moderna que
                  permitisse alcançar os seus objetivos de negócio e melhorar a
                  experiência dos seus utilizadores.
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-xl font-bold text-foreground">A Solução</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Desenvolvemos uma estratégia completa que incluiu design
                  personalizado, desenvolvimento técnico otimizado e
                  implementação de boas práticas de SEO e performance.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Serviços Prestados
                </h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "Design UI/UX personalizado",
                    "Desenvolvimento responsivo",
                    "Otimização de performance",
                    "SEO técnico",
                    "Manutenção contínua",
                  ].map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="h-12 w-12 mx-auto text-foreground/20" />
            <blockquote className="mt-6">
              <p className="text-xl font-medium text-foreground leading-relaxed lg:text-2xl">
                &ldquo;{study.testimonial}&rdquo;
              </p>
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold text-foreground">
                {study.testimonialAuthor}
              </div>
              <div className="text-sm text-muted-foreground">
                {study.testimonialRole}
              </div>
            </div>
          </div>
        </section>

        {/* Related projects */}
        {relatedStudies.length > 0 && (
          <section className="py-16 lg:py-24 bg-secondary/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground text-center">
                Outros Projetos
              </h2>

              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {relatedStudies.map((relatedStudy) => (
                  <Link
                    key={relatedStudy.id}
                    href={`/portfolio/${relatedStudy.id}`}
                    className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
                  >
                    <div className="aspect-video bg-secondary relative overflow-hidden flex items-center justify-center">
                      <div className="text-6xl font-bold text-foreground/10">
                        {relatedStudy.client.charAt(0)}
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {relatedStudy.sector}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-foreground">
                        {relatedStudy.client}
                      </h3>
                      <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-medium">
                        <TrendingUp className="h-4 w-4" />
                        {relatedStudy.result}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Quer resultados semelhantes?
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Fale connosco e descubra como podemos ajudar o seu negócio.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contactos">Pedir proposta</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
