import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Landing Pages & CRO | SiteSolutions",
  description:
    "Criação de landing pages otimizadas para conversão. Aumentamos a taxa de conversão do seu site com CRO (Conversion Rate Optimization).",
  keywords: [
    "landing pages",
    "CRO",
    "otimização conversão",
    "taxa conversão",
    "landing page Portugal",
  ],
};

const includes = [
  "Design de landing pages focado em conversão",
  "Copywriting persuasivo (em parceria)",
  "Formulários otimizados",
  "A/B testing de elementos",
  "Análise de comportamento (heatmaps)",
  "Otimização mobile-first",
  "Integração com ferramentas de marketing",
  "Relatórios de performance",
];

const process = [
  {
    step: 1,
    title: "Briefing",
    description:
      "Entendemos o objetivo, público-alvo e proposta de valor a comunicar.",
  },
  {
    step: 2,
    title: "Design & Copy",
    description:
      "Criamos o layout e mensagens focados em converter o visitante.",
  },
  {
    step: 3,
    title: "Desenvolvimento",
    description:
      "Implementamos a página com performance otimizada e tracking configurado.",
  },
  {
    step: 4,
    title: "Otimização",
    description:
      "Analisamos dados e fazemos ajustes para melhorar a conversão.",
  },
];

const deliverables = [
  "Landing page responsiva e rápida",
  "Formulários integrados com CRM/email",
  "Tracking de conversões configurado",
  "Variantes para A/B testing (opcional)",
  "Relatório de performance inicial",
];

const timelines = [
  { type: "Landing page simples", duration: "5-7 dias úteis" },
  { type: "Landing page complexa", duration: "2-3 semanas" },
  { type: "Múltiplas variantes (A/B)", duration: "1-2 semanas extra" },
  { type: "Otimização contínua", duration: "Mensal" },
];

const faq = [
  {
    question: "O que é uma landing page?",
    answer:
      "É uma página focada num único objetivo de conversão: captar leads, vender um produto, promover um evento. Diferente de um site completo, elimina distrações e guia o visitante para a ação desejada.",
  },
  {
    question: "O que é CRO?",
    answer:
      "CRO (Conversion Rate Optimization) é o processo de melhorar a percentagem de visitantes que completam o objetivo da página. Usamos dados e testes para otimizar elementos como títulos, CTAs e formulários.",
  },
  {
    question: "Quanto pode melhorar a conversão?",
    answer:
      "Depende do ponto de partida e do setor. Melhorias de 20-50% são comuns. Casos extremos podem ver melhorias de 100%+ quando o original estava muito fraco.",
  },
  {
    question: "Incluem copywriting?",
    answer:
      "Podemos criar copy básico ou trabalhar com o seu texto. Para copywriting profissional especializado, recomendamos parceiros de confiança.",
  },
  {
    question: "Funciona para qualquer negócio?",
    answer:
      "Sim. Serviços B2B, e-commerce, eventos, captação de leads — os princípios de conversão aplicam-se. Adaptamos a estratégia ao seu contexto.",
  },
  {
    question: "Como medem os resultados?",
    answer:
      "Configuramos tracking de conversões (Google Analytics, Facebook Pixel, etc.) e analisamos métricas como taxa de conversão, tempo na página e comportamento dos visitantes.",
  },
];

const relatedServices = [
  { title: "SEO Técnico", href: "/servicos/seo-tecnico" },
  { title: "Performance", href: "/servicos/performance-core-web-vitals" },
  { title: "Manutenção de Sites", href: "/servicos/manutencao-sites" },
];

export default function LandingPagesCroPage() {
  return (
    <ServicePageTemplate
      title="Landing Pages & CRO"
      subtitle="Criamos páginas focadas em converter visitantes em clientes. Design, copy e otimização para maximizar os seus resultados."
      icon={TrendingUp}
      includes={includes}
      process={process}
      deliverables={deliverables}
      timelines={timelines}
      faq={faq}
      relatedServices={relatedServices}
    />
  );
}
