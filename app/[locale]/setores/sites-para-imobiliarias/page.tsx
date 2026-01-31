import type { Metadata } from "next";
import { SectorPageTemplate } from "@/components/templates/sector-page";
import { Home } from "lucide-react";
import { siteConfig } from "@/lib/content";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Sites para Imobiliárias | SiteSolutions",
  description:
    "Criação de websites para imobiliárias e agentes imobiliários. Sites com pesquisa avançada de imóveis, SEO otimizado e integração com CRM.",
  keywords: [
    "sites para imobiliárias",
    "website imobiliário",
    "site agência imobiliária",
    "pesquisa imóveis",
    "web design imobiliário",
  ],
};

const challenges = [
  "Site lento com demasiados imóveis a carregar",
  "Pesquisa de imóveis limitada e frustrante para visitantes",
  "Dificuldade em aparecer no Google para pesquisas relevantes",
  "Site não atualizado automaticamente com novos imóveis",
  "Falta de formulários de contacto por imóvel",
];

const solutions = [
  {
    title: "Pesquisa Avançada",
    description:
      "Filtros por localização, preço, tipologia, características. Experiência de pesquisa rápida e intuitiva.",
  },
  {
    title: "Páginas de Imóvel",
    description:
      "Páginas individuais otimizadas para SEO com galeria, mapa, características e formulário de contacto.",
  },
  {
    title: "Integração CRM",
    description:
      "Sincronização com CRM imobiliário para atualização automática de imóveis.",
  },
  {
    title: "SEO Imobiliário",
    description:
      "Otimização para pesquisas locais e por tipo de imóvel: 'T2 para venda em Lisboa', etc.",
  },
  {
    title: "Performance",
    description:
      "Sites rápidos mesmo com milhares de imóveis, usando lazy loading e otimização de imagens.",
  },
  {
    title: "Mobile-First",
    description:
      "Experiência perfeita em telemóvel, onde muitos compradores pesquisam primeiro.",
  },
];

const features = [
  "Pesquisa avançada com filtros",
  "Páginas individuais de imóveis",
  "Galeria de imagens otimizada",
  "Integração com Google Maps",
  "Formulários de contacto por imóvel",
  "Integração com CRM imobiliário",
  "SEO local e por tipologia",
  "Design responsivo",
  "Área de agente/consultor",
  "Destaque para imóveis premium",
];

const faq = [
  {
    question: "Integram com que CRMs imobiliários?",
    answer:
      "Trabalhamos com a maioria dos CRMs do mercado português: eGO Real Estate, ImovPlus, Casafari, etc. Se tiver API disponível, conseguimos integrar.",
  },
  {
    question: "Como funciona a sincronização de imóveis?",
    answer:
      "Dependendo do CRM, pode ser automática (via API) ou semi-automática (importação periódica). Novos imóveis aparecem no site sem intervenção manual.",
  },
  {
    question: "O site aguenta milhares de imóveis?",
    answer:
      "Sim. Usamos técnicas de performance (lazy loading, paginação, cache) que permitem sites rápidos mesmo com grandes catálogos.",
  },
  {
    question: "Fazem SEO para imobiliárias?",
    answer:
      "Sim. O site é construído com SEO técnico otimizado. Cada imóvel tem página própria indexável. Podemos implementar schema markup específico para imóveis.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Depende da complexidade e integrações. Um site imobiliário com pesquisa e integração CRM tipicamente requer investimento maior que um site institucional simples. Peça proposta.",
  },
  {
    question: "E se não tiver CRM?",
    answer:
      "Podemos implementar um sistema simples de gestão de imóveis no próprio site, ou recomendar CRMs adequados ao seu volume de negócio.",
  },
];

export default function SitesParaImobiliariasPage() {
  const canonicalUrl = `${SITE_URL}/setores/sites-para-imobiliarias`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sites para Imobiliárias",
    description: "Websites para imobiliárias com performance, captação de leads e páginas otimizadas por empreendimento/serviço.",
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
      <SectorPageTemplate
      title="Sites para Imobiliárias"
      subtitle="Websites profissionais para imobiliárias e agentes. Pesquisa avançada de imóveis, integração com CRM e SEO otimizado para captar mais leads."
      icon={Home}
      challenges={challenges}
      solutions={solutions}
      features={features}
      caseStudy={{
        client: "Imobiliária Central",
        result: "+60% tráfego orgânico",
        href: "/portfolio/imobiliaria-exemplo",
      }}
      faq={faq}
      />
    </>
  );
}
