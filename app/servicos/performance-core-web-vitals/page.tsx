import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { Gauge } from "lucide-react";
import { siteConfig } from "@/lib/content";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Performance & Core Web Vitals | SiteSolutions",
  description:
    "Otimização de performance e Core Web Vitals. Sites mais rápidos convertem mais. Melhoramos LCP, FID e CLS do seu website.",
  keywords: [
    "core web vitals",
    "performance website",
    "otimização velocidade",
    "LCP FID CLS",
    "site rápido",
  ],
};

const includes = [
  "Auditoria completa de performance",
  "Otimização de Core Web Vitals (LCP, FID, CLS)",
  "Compressão e otimização de imagens",
  "Minificação de CSS e JavaScript",
  "Configuração de cache e CDN",
  "Lazy loading de recursos",
  "Otimização de fontes web",
  "Relatório antes/depois com métricas",
];

const processSteps = [
  {
    step: 1,
    title: "Medição",
    description:
      "Analisamos as métricas atuais com ferramentas como PageSpeed Insights e WebPageTest.",
  },
  {
    step: 2,
    title: "Diagnóstico",
    description:
      "Identificamos os principais problemas e priorizamos por impacto na experiência.",
  },
  {
    step: 3,
    title: "Otimização",
    description:
      "Implementamos as correções: imagens, código, cache, CDN e lazy loading.",
  },
  {
    step: 4,
    title: "Validação",
    description:
      "Medimos novamente e entregamos relatório comparativo com melhorias obtidas.",
  },
];

const deliverables = [
  "Relatório de auditoria de performance",
  "Otimização de imagens do site",
  "Código CSS/JS minificado",
  "CDN e cache configurados",
  "Relatório antes/depois com métricas",
  "Recomendações para manutenção",
];

const timelines = [
  { type: "Auditoria", duration: "2-3 dias úteis" },
  { type: "Otimização básica", duration: "3-5 dias úteis" },
  { type: "Otimização completa", duration: "1-2 semanas" },
  { type: "Sites complexos", duration: "2-4 semanas" },
];

const faq = [
  {
    question: "O que são Core Web Vitals?",
    answer:
      "São métricas do Google que medem a experiência do utilizador: LCP (tempo até o maior elemento carregar), FID/INP (tempo de resposta a interações) e CLS (estabilidade visual). Afetam o posicionamento no Google.",
  },
  {
    question: "Quanto pode melhorar a velocidade?",
    answer:
      "Depende do estado atual. Em média, conseguimos melhorias de 40-70% no tempo de carregamento. Sites muito lentos podem ver melhorias ainda maiores.",
  },
  {
    question: "Isso afeta o SEO?",
    answer:
      "Sim. Core Web Vitals são um fator de ranking no Google desde 2021. Sites mais rápidos tendem a posicionar melhor e têm taxas de conversão superiores.",
  },
  {
    question: "Funciona com qualquer plataforma?",
    answer:
      "Sim. Trabalhamos com WordPress, Shopify, Next.js, sites estáticos e plataformas custom. As técnicas variam, mas o objetivo é o mesmo.",
  },
  {
    question: "As melhorias são permanentes?",
    answer:
      "As otimizações são permanentes, mas novos conteúdos (imagens grandes, plugins pesados) podem degradar a performance. Recomendamos monitorização contínua.",
  },
  {
    question: "Incluem CDN e hosting?",
    answer:
      "Podemos configurar CDN gratuito (Cloudflare) ou recomendar soluções premium. Hosting gerido está disponível como serviço adicional.",
  },
];

const relatedServices = [
  { title: "SEO Técnico", href: "/servicos/seo-tecnico" },
  { title: "Manutenção de Sites", href: "/servicos/manutencao-sites" },
  { title: "Landing Pages & CRO", href: "/servicos/landing-pages-cro" },
];

export default function PerformancePage() {
  const canonicalUrl = `${SITE_URL}/servicos/performance-core-web-vitals`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Performance & Core Web Vitals",
    description: "Otimização de performance e Core Web Vitals (LCP/CLS/INP). Melhoramos velocidade, UX e métricas essenciais.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate
      title="Performance & Core Web Vitals"
      subtitle="Sites rápidos vendem mais. Otimizamos a velocidade e as métricas Core Web Vitals do seu site para melhor experiência e conversão."
      icon={Gauge}
      includes={includes}
      process={processSteps}
      deliverables={deliverables}
      timelines={timelines}
      faq={faq}
      relatedServices={relatedServices}
      />
    </>
  );
}
