import type { Metadata } from "next";
import { SectorPageTemplate } from "@/components/templates/sector-page";
import { UtensilsCrossed } from "lucide-react";
import { siteConfig } from "@/lib/content";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Sites para Restaurantes | SiteSolutions",
  description:
    "Criação de websites para restaurantes e cafés. Sites com menu digital, reservas online e otimização para pesquisas locais.",
  keywords: [
    "sites para restaurantes",
    "website restaurante",
    "menu digital",
    "reservas online restaurante",
    "web design restauração",
  ],
};

const challenges = [
  "Menu em PDF difícil de atualizar e não indexável pelo Google",
  "Falta de sistema de reservas online (dependência de chamadas)",
  "Site lento com fotos pesadas e não otimizadas",
  "Má visibilidade em pesquisas locais",
  "Informações desatualizadas (horários, contactos)",
];

const solutions = [
  {
    title: "Menu Digital",
    description:
      "Menu web interativo, fácil de atualizar, com fotos e preços. Indexável pelo Google.",
  },
  {
    title: "Reservas Online",
    description:
      "Sistema de reservas integrado para reduzir chamadas e gerir mesas eficientemente.",
  },
  {
    title: "SEO Local",
    description:
      "Otimização para pesquisas como 'restaurante italiano em Lisboa' ou 'melhor pizza perto de mim'.",
  },
  {
    title: "Galeria Atrativa",
    description:
      "Fotos de pratos e ambiente otimizadas para carregar rápido e impressionar visitantes.",
  },
  {
    title: "Google Business",
    description:
      "Integração e otimização do perfil Google para aparecer no Maps e pesquisas.",
  },
  {
    title: "Mobile-First",
    description:
      "Site perfeito no telemóvel, onde a maioria pesquisa restaurantes.",
  },
];

const features = [
  "Design apelativo e responsivo",
  "Menu digital interativo",
  "Sistema de reservas online",
  "Galeria de fotos otimizada",
  "Integração Google Maps",
  "Horários e contactos claros",
  "SEO local otimizado",
  "Schema markup para restaurantes",
  "Integração com redes sociais",
  "Fácil atualização de menu/preços",
];

const faq = [
  {
    question: "Posso atualizar o menu sozinho?",
    answer:
      "Sim. Criamos um painel simples onde pode atualizar pratos, preços e fotos sem conhecimentos técnicos. Ou incluímos atualizações no plano de manutenção.",
  },
  {
    question: "Integram com sistemas de reservas?",
    answer:
      "Sim. Podemos integrar com sistemas como TheFork, Resy, ou implementar um sistema próprio mais simples conforme as suas necessidades.",
  },
  {
    question: "Fazem fotografia?",
    answer:
      "Não diretamente, mas podemos recomendar fotógrafos especializados em food photography. Boas fotos são essenciais para restaurantes.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Um site de restaurante com menu digital e reservas tipicamente tem custo moderado. Contacte-nos para proposta personalizada.",
  },
  {
    question: "E o Google Business Profile?",
    answer:
      "Sim, ajudamos a otimizar. É crucial para restaurantes aparecerem nas pesquisas locais e no Maps.",
  },
  {
    question: "Demora quanto tempo?",
    answer:
      "Um site de restaurante tipicamente fica pronto em 2-4 semanas, dependendo da complexidade e do material fotográfico disponível.",
  },
];

export default function SitesParaRestaurantesPage() {
  const canonicalUrl = `${SITE_URL}/setores/sites-para-restaurantes`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sites para Restaurantes",
    description: "Websites para restaurantes com menus, reservas e SEO local para aumentar ocupação e pedidos.",
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
      title="Sites para Restaurantes"
      subtitle="Websites que abrem o apetite. Menu digital, reservas online e SEO local para atrair mais clientes ao seu restaurante."
      icon={UtensilsCrossed}
      challenges={challenges}
      solutions={solutions}
      features={features}
      faq={faq}
      />
    </>
  );
}
