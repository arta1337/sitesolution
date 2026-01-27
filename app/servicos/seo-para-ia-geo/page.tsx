import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/content";
import {
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Bot,
  AlertTriangle,
  BookOpen,
  Table,
  Quote,
  Target,
} from "lucide-react";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "SEO para IA (GEO) | SiteSolutions",
  description:
    "Otimização para motores generativos (GEO). Prepare o seu site para ser referenciado por ChatGPT, Gemini e outros assistentes de IA.",
  keywords: [
    "GEO",
    "SEO IA",
    "otimização ChatGPT",
    "motores generativos",
    "SEO futuro",
  ],
};

const geoStrategies = [
  {
    title: "Entidades e Topical Authority",
    description:
      "Estruturamos o conteúdo em torno de entidades claras e construímos autoridade temática para que a IA reconheça a sua expertise.",
    icon: Target,
  },
  {
    title: "Schema Markup Avançado",
    description:
      "Implementamos schema detalhado (Organization, FAQ, HowTo, etc.) para que a IA compreenda o contexto do seu conteúdo.",
    icon: BookOpen,
  },
  {
    title: "Páginas por Intenção",
    description:
      "Criamos páginas que respondem diretamente a perguntas específicas do seu público, aumentando a probabilidade de citação.",
    icon: Quote,
  },
  {
    title: "Conteúdo Comparativo e Tabelas",
    description:
      "Tabelas de comparação e listas estruturadas são mais facilmente citadas por sistemas de IA.",
    icon: Table,
  },
];

const faq = [
  {
    question: "O que é GEO (Generative Engine Optimization)?",
    answer:
      "GEO é a prática de otimizar conteúdo para ser encontrado e citado por motores generativos de IA como ChatGPT, Gemini, Perplexity e outros. É uma evolução natural do SEO tradicional.",
  },
  {
    question: "Como é diferente do SEO tradicional?",
    answer:
      "SEO tradicional foca em ranking em páginas de resultados. GEO foca em ser citado como fonte por assistentes de IA. Há sobreposição (conteúdo de qualidade, autoridade), mas GEO dá mais ênfase a estruturação, entidades e E-E-A-T.",
  },
  {
    question: "Podem garantir que serei mencionado pelo ChatGPT?",
    answer:
      "Não. Ninguém pode garantir menções específicas em sistemas de IA. O que fazemos é otimizar os sinais que aumentam a probabilidade: autoridade, estrutura, schema, fontes citadas, etc.",
  },
  {
    question: "Isto substitui o SEO tradicional?",
    answer:
      "Não substitui, complementa. O SEO tradicional continua importante. GEO é uma camada adicional que prepara o seu site para a evolução dos motores de busca.",
  },
  {
    question: "Quanto tempo demora a ver resultados?",
    answer:
      "GEO é ainda mais difícil de medir que SEO tradicional. Os sistemas de IA são opacos sobre as suas fontes. Focamos em boas práticas que beneficiam tanto SEO como GEO.",
  },
  {
    question: "Vale a pena investir agora?",
    answer:
      "Se o seu público já usa assistentes de IA para pesquisar (cada vez mais comum), faz sentido preparar-se. As práticas de GEO também melhoram o SEO tradicional, por isso não há desperdício.",
  },
];

export default function SeoParaIaGeoPage() {
  const canonicalUrl = `${SITE_URL}/servicos/seo-para-ia-geo`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO para IA (GEO)",
    description: "Otimização para motores de resposta e IA: estrutura, entidades, schema e conteúdo para visibilidade em assistentes.",
    url: canonicalUrl,
    provider: { "@type": "Organization", name: siteConfig.name, url: SITE_URL },
    areaServed: { "@type": "Country", name: "Portugal" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Início
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/servicos"
                className="hover:text-foreground transition-colors"
              >
                Serviços
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">SEO para IA (GEO)</span>
            </nav>

            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground">
                  <Bot className="h-8 w-8 text-background" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                SEO para IA (GEO)
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Prepare o seu site para ser encontrado e citado por ChatGPT,
                Gemini, Perplexity e outros assistentes de IA.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/auditoria-48h#contacto">
                    Saber mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/auditoria-48h">Auditoria grátis em 48h</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-secondary/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 max-w-3xl mx-auto">
              <AlertTriangle className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Nota importante:</strong>{" "}
                  Não existe garantia de menção em assistentes de IA. Os sistemas
                  são opacos e as fontes mudam constantemente. O que oferecemos é
                  otimização dos sinais que aumentam a probabilidade de citação,
                  com práticas que também beneficiam o SEO tradicional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O Que É GEO */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                O Que É GEO?
              </h2>
              <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  GEO (Generative Engine Optimization) é a otimização de conteúdo
                  para motores generativos — assistentes de IA como ChatGPT,
                  Gemini, Claude e Perplexity que geram respostas a partir de
                  fontes web.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Enquanto o SEO tradicional foca em aparecer nos resultados de
                  pesquisa, o GEO foca em ser{" "}
                  <strong className="text-foreground">
                    citado como fonte confiável
                  </strong>{" "}
                  quando estes sistemas respondem a perguntas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com cada vez mais pessoas a usar assistentes de IA para
                  pesquisar informação, estar bem posicionado nestes sistemas
                  pode ser tão importante como o Google tradicional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estratégias */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
              Estratégias de GEO
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Práticas que aumentam a probabilidade de ser citado por sistemas de
              IA.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {geoStrategies.map((strategy) => {
                const Icon = strategy.icon;
                return (
                  <div
                    key={strategy.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {strategy.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {strategy.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                E-E-A-T: A Base do GEO
              </h2>
              <p className="mt-4 text-center text-muted-foreground">
                Os sistemas de IA valorizam fontes com Experience, Expertise,
                Authoritativeness e Trustworthiness.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    letter: "E",
                    title: "Experience (Experiência)",
                    description:
                      "Conteúdo baseado em experiência real, não apenas teoria.",
                  },
                  {
                    letter: "E",
                    title: "Expertise (Especialização)",
                    description:
                      "Demonstrar conhecimento profundo no tema abordado.",
                  },
                  {
                    letter: "A",
                    title: "Authoritativeness (Autoridade)",
                    description:
                      "Ser reconhecido como referência no setor ou tema.",
                  },
                  {
                    letter: "T",
                    title: "Trustworthiness (Confiança)",
                    description:
                      "Informação precisa, fontes citadas, contactos reais.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background font-bold shrink-0">
                      {item.letter}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {item.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* O Que Fazemos */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
              O Que Fazemos
            </h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <ul className="space-y-3">
                {[
                  "Auditoria de presença em motores generativos",
                  "Otimização de schema markup para IA",
                  "Estruturação de conteúdo por entidades",
                  "Criação de páginas FAQ otimizadas",
                  "Tabelas comparativas e listas estruturadas",
                  "Recomendações de E-E-A-T",
                  "Monitorização (quando possível) de citações",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
                Perguntas Frequentes
              </h2>
              <Accordion type="single" collapsible className="mt-8">
                {faq.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground text-center">
              Serviços Relacionados
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                { title: "SEO Técnico", href: "/servicos/seo-tecnico" },
                { title: "Performance", href: "/servicos/performance-core-web-vitals" },
                { title: "Landing Pages & CRO", href: "/servicos/landing-pages-cro" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-xl border border-border bg-card px-6 py-4 hover:border-foreground/20 hover:shadow-lg transition-all"
                >
                  <span className="font-medium text-foreground">
                    {service.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Prepare-se para o futuro da pesquisa
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Fale connosco sobre como otimizar o seu site para IA.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/auditoria-48h#contacto">Falar connosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
