import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/content";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Quote,
  CheckCircle,
  Target,
  Package,
  Clock,
  ChevronRight,
} from "lucide-react";

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

// Mock data for enhanced case study (in real app, this would come from CMS)
const enhancedData: Record<
  string,
  {
    context: string;
    objectives: string[];
    deliverables: string[];
    stack: string[];
    maintenance90Days: string[];
    metrics: { label: string; value: string; timeframe: string }[];
  }
> = {
  "clinica-exemplo": {
    context:
      "A Clínica Médica Premium procurava modernizar a sua presença digital e aumentar as marcações online. O site anterior era lento, não era responsivo e não inspirava confiança aos potenciais pacientes.",
    objectives: [
      "Aumentar marcações online em 30%",
      "Melhorar a velocidade de carregamento",
      "Criar uma experiência mobile-first",
    ],
    deliverables: [
      "Website institucional responsivo",
      "Sistema de marcação online integrado",
      "Páginas de especialidades otimizadas",
      "Blog para conteúdo de saúde",
      "Otimização SEO técnico",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "CRM Integração"],
    maintenance90Days: [
      "Semana 1-2: Monitorização intensiva e correções",
      "Mês 1: 3 ajustes de conteúdo solicitados",
      "Mês 2: Otimização de imagens e performance",
      "Mês 3: Implementação de schema markup para médicos",
    ],
    metrics: [
      { label: "Marcações online", value: "+45%", timeframe: "3 meses" },
      { label: "Tempo de carregamento", value: "-60%", timeframe: "vs anterior" },
      { label: "Taxa de rejeição", value: "-25%", timeframe: "3 meses" },
    ],
  },
  "consultoria-exemplo": {
    context:
      "A Consultoria Financeira ABC precisava de um website que transmitisse profissionalismo e gerasse leads qualificados. O site existente não convertia visitantes em pedidos de proposta.",
    objectives: [
      "Aumentar pedidos de proposta em 25%",
      "Posicionar a empresa como autoridade no setor",
      "Captar leads através de conteúdo de valor",
    ],
    deliverables: [
      "Website institucional premium",
      "Landing pages para serviços",
      "Formulários de captação otimizados",
      "Recursos para download (lead magnets)",
      "Integração com CRM",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "HubSpot", "Vercel"],
    maintenance90Days: [
      "Semana 1: Setup de analytics e tracking",
      "Mês 1: A/B testing em formulários",
      "Mês 2: Adição de novos case studies",
      "Mês 3: Otimização de CTAs baseada em dados",
    ],
    metrics: [
      { label: "Pedidos de proposta", value: "+32%", timeframe: "6 meses" },
      { label: "Qualidade dos leads", value: "+40%", timeframe: "vs anterior" },
      { label: "Tempo no site", value: "+55%", timeframe: "média" },
    ],
  },
  "ecommerce-exemplo": {
    context:
      "A Loja Gourmet Online enfrentava problemas de performance que impactavam as vendas. O checkout era lento e a experiência mobile era frustrante para os utilizadores.",
    objectives: [
      "Reduzir tempo de carregamento em 50%",
      "Melhorar taxa de conversão do checkout",
      "Otimizar experiência mobile",
    ],
    deliverables: [
      "Auditoria completa de performance",
      "Otimização de Core Web Vitals",
      "Redesign do processo de checkout",
      "Lazy loading de imagens",
      "CDN e caching avançado",
    ],
    stack: ["Shopify", "Performance APIs", "Cloudflare", "Google Analytics"],
    maintenance90Days: [
      "Semana 1-2: Monitorização de métricas",
      "Mês 1: Ajustes finos de performance",
      "Mês 2: Otimização de imagens de produtos",
      "Mês 3: Relatório completo de resultados",
    ],
    metrics: [
      { label: "Tempo de carregamento", value: "-45%", timeframe: "imediato" },
      { label: "Vendas", value: "+28%", timeframe: "3 meses" },
      { label: "Abandono de carrinho", value: "-18%", timeframe: "3 meses" },
    ],
  },
  "imobiliaria-exemplo": {
    context:
      "A Imobiliária Central queria modernizar a sua presença digital e tornar o site a principal fonte de contactos. A pesquisa de imóveis era limitada e o SEO estava muito fraco.",
    objectives: [
      "Aumentar tráfego orgânico em 40%",
      "Criar pesquisa avançada de imóveis",
      "Gerar mais contactos através do site",
    ],
    deliverables: [
      "Website com pesquisa avançada",
      "Páginas individuais de imóveis",
      "Integração com CRM imobiliário",
      "SEO técnico e local",
      "Formulários de contacto contextuais",
    ],
    stack: ["Next.js", "TypeScript", "Algolia", "API Imobiliária", "Vercel"],
    maintenance90Days: [
      "Semana 1: Indexação de todas as páginas",
      "Mês 1: Otimização de páginas de imóveis",
      "Mês 2: Schema markup para imóveis",
      "Mês 3: Relatório SEO e próximos passos",
    ],
    metrics: [
      { label: "Tráfego orgânico", value: "+60%", timeframe: "6 meses" },
      { label: "Contactos via site", value: "+85%", timeframe: "6 meses" },
      { label: "Páginas indexadas", value: "3x", timeframe: "vs anterior" },
    ],
  },
};

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const enhanced = enhancedData[id] || {
    context: study.description,
    objectives: [study.objective],
    deliverables: [
      "Design personalizado",
      "Desenvolvimento responsivo",
      "Otimização de performance",
      "SEO técnico",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    maintenance90Days: ["Em medição"],
    metrics: [
      { label: "Resultado principal", value: study.result, timeframe: "Em medição" },
    ],
  };

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs & Navigation */}
        <section className="bg-background pt-24 pb-4 lg:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Início
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/portfolio"
                className="hover:text-foreground transition-colors"
              >
                Portfólio
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{study.client}</span>
            </nav>

            {/* Back link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao portfólio
            </Link>
          </div>
        </section>

        {/* Hero */}
        <section className="bg-background pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Content */}
              <div>
                <Badge variant="secondary" className="mb-6">
                  {study.sector}
                </Badge>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {study.client}
                </h1>

                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {study.description}
                </p>

                {/* Key metrics */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {enhanced.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-border bg-card p-4"
                    >
                      <div className="text-2xl font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {metric.timeframe}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before/After images placeholder */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-secondary aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-foreground/10">
                      {study.client.charAt(0)}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Imagem do projeto
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground">
                Contexto do Cliente
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {enhanced.context}
              </p>
            </div>
          </div>
        </section>

        {/* Objectives & Deliverables */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Objectives */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-6 w-6 text-foreground" />
                  <h2 className="text-xl font-bold text-foreground">
                    Objetivos
                  </h2>
                </div>
                <ul className="space-y-3">
                  {enhanced.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-6 w-6 text-foreground" />
                  <h2 className="text-xl font-bold text-foreground">
                    O Que Foi Feito
                  </h2>
                </div>
                <ul className="space-y-3">
                  {enhanced.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stack & Maintenance */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Stack */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {enhanced.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Maintenance timeline */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-foreground" />
                  <h2 className="text-xl font-bold text-foreground">
                    Manutenção nos Primeiros 90 Dias
                  </h2>
                </div>
                <ul className="space-y-3">
                  {enhanced.maintenance90Days.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-secondary text-xs font-medium text-foreground shrink-0">
                        {index + 1}
                      </span>
                      {item}
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

        {/* CTA */}
        <section className="py-12 lg:py-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
              Quero um projeto semelhante
            </h2>
            <p className="mt-4 text-background/70">
              Fale connosco sobre os seus objetivos.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/auditoria-48h">Auditoria 48h</Link>
              </Button>
              <Link 
                href="/auditoria-48h#contacto"
                className="text-sm text-background/70 hover:text-background transition-colors flex items-center"
              >
                Contacto rápido
              </Link>
            </div>
          </div>
        </section>

        {/* Prev/Next Navigation */}
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prevStudy ? (
                <Link
                  href={`/portfolio/${prevStudy.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors group"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Projeto anterior
                    </div>
                    <div className="font-medium text-foreground">
                      {prevStudy.client}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextStudy && (
                <Link
                  href={`/portfolio/${nextStudy.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-foreground/20 transition-colors group text-right sm:ml-auto"
                >
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Próximo projeto
                    </div>
                    <div className="font-medium text-foreground">
                      {nextStudy.client}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
