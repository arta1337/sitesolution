import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { Search } from "lucide-react";
import { siteConfig } from "@/lib/content";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "SEO Técnico | SiteSolutions",
  description:
    "Serviço de SEO técnico para websites. Otimização de estrutura, indexação, schema markup e velocidade para melhor posicionamento no Google.",
  keywords: [
    "SEO técnico",
    "otimização SEO",
    "indexação Google",
    "schema markup",
    "SEO Portugal",
  ],
};

const includes = [
  "Auditoria completa de SEO técnico",
  "Otimização de estrutura de URLs",
  "Configuração de meta tags e Open Graph",
  "Implementação de schema markup",
  "Correção de erros de indexação",
  "Otimização de sitemap e robots.txt",
  "Configuração de Google Search Console",
  "Análise e correção de links internos",
];

const process = [
  {
    step: 1,
    title: "Auditoria",
    description:
      "Análise completa do estado atual: indexação, erros, estrutura e oportunidades.",
  },
  {
    step: 2,
    title: "Plano de Ação",
    description:
      "Priorizamos as correções por impacto e entregamos um roadmap claro.",
  },
  {
    step: 3,
    title: "Implementação",
    description:
      "Executamos as correções técnicas e otimizações identificadas.",
  },
  {
    step: 4,
    title: "Monitorização",
    description:
      "Acompanhamos os resultados e fazemos ajustes conforme necessário.",
  },
];

const deliverables = [
  "Relatório de auditoria SEO detalhado",
  "Lista priorizada de correções",
  "Schema markup implementado",
  "Sitemaps otimizados",
  "Acesso ao Search Console configurado",
  "Relatório de resultados (após 30-60 dias)",
];

const timelines = [
  { type: "Auditoria inicial", duration: "3-5 dias úteis" },
  { type: "Implementação básica", duration: "1-2 semanas" },
  { type: "Implementação completa", duration: "2-4 semanas" },
  { type: "Primeiros resultados visíveis", duration: "4-12 semanas" },
];

const faq = [
  {
    question: "O que é SEO técnico?",
    answer:
      "SEO técnico refere-se às otimizações na estrutura e código do site que facilitam a indexação e compreensão pelos motores de busca. Inclui velocidade, estrutura de URLs, meta tags, schema markup, links internos e muito mais.",
  },
  {
    question: "Qual a diferença entre SEO técnico e SEO de conteúdo?",
    answer:
      "SEO técnico foca na estrutura e código do site. SEO de conteúdo foca na criação de textos otimizados para palavras-chave. Ambos são importantes, mas oferecemos principalmente SEO técnico.",
  },
  {
    question: "Quanto tempo demora a ver resultados?",
    answer:
      "Depende do estado atual do site e da concorrência. Melhorias técnicas podem ter impacto em 4-12 semanas. Resultados significativos em posicionamento podem demorar 3-6 meses.",
  },
  {
    question: "Garantem posições no Google?",
    answer:
      "Não. Ninguém pode garantir posições específicas no Google. O que garantimos é um site tecnicamente otimizado que segue as melhores práticas e tem maiores chances de bom posicionamento.",
  },
  {
    question: "Trabalham com lojas online?",
    answer:
      "Sim. Lojas online têm desafios específicos de SEO (produtos, categorias, filtros). Temos experiência com WooCommerce, Shopify e plataformas custom.",
  },
  {
    question: "Incluem criação de conteúdo?",
    answer:
      "Não como serviço principal, mas podemos recomendar parceiros ou orientar a sua equipa na criação de conteúdo otimizado.",
  },
];

const relatedServices = [
  { title: "Performance", href: "/servicos/performance-core-web-vitals" },
  { title: "SEO para IA (GEO)", href: "/servicos/seo-para-ia-geo" },
  { title: "Landing Pages & CRO", href: "/servicos/landing-pages-cro" },
];

export default function SeoTecnicoPage() {
  const canonicalUrl = `${SITE_URL}/servicos/seo-tecnico`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Técnico",
    description: "Serviço de SEO técnico para websites. Otimização de estrutura, indexação, schema markup e velocidade para melhor posicionamento no Google.",
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
      title="SEO Técnico"
      subtitle="Otimizamos a estrutura técnica do seu site para que o Google e outros motores de busca o encontrem, compreendam e posicionem melhor."
      icon={Search}
      includes={includes}
      process={process}
      deliverables={deliverables}
      timelines={timelines}
      faq={faq}
      relatedServices={relatedServices}
      />
    </>
  );
}
