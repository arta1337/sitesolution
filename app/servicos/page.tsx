import React from "react"
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { services, seoMeta } from "@/lib/content";
import {
  Globe,
  Wrench,
  Zap,
  Search,
  Shield,
  Server,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: seoMeta.services.title,
  description: seoMeta.services.description,
  keywords: seoMeta.services.keywords,
};

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  wrench: Wrench,
  zap: Zap,
  search: Search,
  shield: Shield,
  server: Server,
};

// Service pages mapping for "Saber mais" links
const servicePageLinks: Record<string, string> = {
  "criacao": "/servicos/landing-pages-cro",
  "manutencao": "/servicos/manutencao-sites",
  "performance": "/servicos/performance-core-web-vitals",
  "seo": "/servicos/seo-tecnico",
  "seguranca": "/servicos/seguranca-backups",
  "hosting": "/servicos/manutencao-sites", // Hosting included in maintenance
};

const extendedServices = [
  {
    ...services[0],
    extendedFeatures: [
      "Design personalizado e exclusivo",
      "Layout 100% responsivo (mobile, tablet, desktop)",
      "Otimização para conversão e leads",
      "Integração com ferramentas de analytics",
      "Formulários de contacto personalizados",
      "Estrutura SEO otimizada",
    ],
    cta: "Ideal para empresas que querem uma presença online profissional.",
    pageLink: "/servicos/landing-pages-cro",
  },
  {
    ...services[1],
    extendedFeatures: [
      "Atualizações de segurança regulares",
      "Correção de bugs e erros",
      "Pequenas alterações de conteúdo",
      "Monitorização de uptime 24/7",
      "Backups automáticos",
      "Relatórios mensais de performance",
    ],
    cta: "Mantenha o seu site sempre atualizado sem preocupações.",
    pageLink: "/servicos/manutencao-sites",
  },
  {
    ...services[2],
    extendedFeatures: [
      "Otimização de Core Web Vitals",
      "Compressão e otimização de imagens",
      "Minificação de CSS e JavaScript",
      "Implementação de CDN",
      "Cache avançado",
      "Lazy loading de recursos",
    ],
    cta: "Sites rápidos convertem mais e posicionam melhor no Google.",
    pageLink: "/servicos/performance-core-web-vitals",
  },
  {
    ...services[3],
    extendedFeatures: [
      "Estrutura de URLs otimizada",
      "Meta tags e Open Graph",
      "Schema markup (dados estruturados)",
      "Sitemap e robots.txt",
      "Indexação correta no Google",
      "Auditoria técnica SEO",
    ],
    cta: "Garanta que o Google encontra e indexa o seu site corretamente.",
    pageLink: "/servicos/seo-tecnico",
  },
  {
    ...services[4],
    extendedFeatures: [
      "Certificado SSL/HTTPS",
      "Firewall e proteção contra ataques",
      "Monitorização de vulnerabilidades",
      "Backups diários automáticos",
      "Restauração rápida em caso de problema",
      "Atualizações de segurança prioritárias",
    ],
    cta: "Proteja o seu site e os dados dos seus clientes.",
    pageLink: "/servicos/seguranca-backups",
  },
  {
    ...services[5],
    extendedFeatures: [
      "Servidores de alta performance",
      "SSD NVMe para velocidade máxima",
      "Certificado SSL incluído",
      "99.9% de uptime garantido",
      "Suporte técnico dedicado",
      "Escalabilidade conforme necessidade",
    ],
    cta: "Alojamento profissional sem as dores de cabeça técnicas.",
    pageLink: "/servicos/manutencao-sites",
  },
];

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Os Nossos Serviços
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Soluções completas para criar, otimizar e manter a sua presença
                digital. Desde o design inicial até à manutenção contínua.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/auditoria-48h">Auditoria 48h</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services detail */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {extendedServices.map((service, index) => {
                const Icon = iconMap[service.icon] || Globe;
                const isEven = index % 2 === 0;

                  return (
                    <div
                      key={service.id}
                      id={service.id}
                      className="grid gap-8 items-center lg:grid-cols-2 lg:gap-16"
                    >
                      {/* Content */}
                      <div className={isEven ? "" : "lg:order-2"}>
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground">
                          <Icon className="h-7 w-7 text-background" />
                        </div>

                        <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                          {service.title}
                        </h2>

                        <p className="mt-4 text-lg text-muted-foreground">
                          {service.description}
                        </p>

                        {/* Features list */}
                        <ul className="mt-6 space-y-3">
                          {service.extendedFeatures.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-6 text-sm font-medium text-foreground">
                          {service.cta}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                          <Button asChild variant="outline" className="bg-transparent">
                            <Link href={service.pageLink}>
                              Saber mais
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Link 
                            href="/auditoria-48h" 
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Pedir auditoria
                          </Link>
                        </div>
                      </div>

                      {/* Visual */}
                      <div
                        className={`relative overflow-hidden rounded-2xl border border-border bg-card ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        {service.image ? (
                          <div className="relative h-[360px] w-full lg:h-[420px]">
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              fill
                              className="object-cover"
                              sizes="(min-width: 1024px) 50vw, 100vw"
                              priority={index === 0}
                            />
                          </div>
                        ) : (
                          <div className="flex h-[360px] w-full items-center justify-center lg:h-[420px]">
                            <Icon className="h-32 w-32 text-foreground/10" />
                          </div>
                        )}
                      </div>
                    </div>
                  );

              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Pronto para começar?
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Peça uma auditoria gratuita e descubra como podemos ajudar.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Contacto rápido
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
