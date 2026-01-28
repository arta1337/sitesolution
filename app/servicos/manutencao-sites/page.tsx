import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { Wrench } from "lucide-react";
import { siteConfig } from "@/lib/content";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Manutenção de Sites | SiteSolutions",
  description:
    "Serviço de manutenção mensal de websites. Atualizações, backups, segurança e suporte. Planos a partir de 149€/mês sem fidelização.",
  keywords: [
    "manutenção de sites",
    "manutenção wordpress",
    "atualização de sites",
    "suporte website",
    "backups website",
  ],
};

const includes = [
  "Atualizações de segurança regulares",
  "Backups automáticos (frequência varia por plano)",
  "Monitorização de uptime 24/7",
  "Correções de bugs e erros",
  "Pequenas alterações de conteúdo",
  "Relatórios mensais de atividade",
  "Suporte por email (SLA conforme plano)",
  "Otimização básica de performance",
];

const processSteps = [
  {
    step: 1,
    title: "Onboarding",
    description:
      "Reunião inicial para conhecer o seu site, prioridades e canais de comunicação.",
  },
  {
    step: 2,
    title: "Auditoria Inicial",
    description:
      "Avaliamos o estado atual: performance, segurança, backups e problemas pendentes.",
  },
  {
    step: 3,
    title: "Setup",
    description:
      "Configuramos monitorização, backups automáticos e acesso aos sistemas.",
  },
  {
    step: 4,
    title: "Manutenção Contínua",
    description:
      "Atualizações regulares, resposta a pedidos e relatórios mensais.",
  },
];

const deliverables = [
  "Acesso ao dashboard de monitorização",
  "Relatório mensal de atividades",
  "Canal direto para pedidos de alteração",
  "Documentação de acessos e configurações",
  "Histórico de backups acessível",
];

const timelines = [
  { type: "Onboarding", duration: "1-2 dias úteis" },
  { type: "Auditoria inicial", duration: "2-3 dias úteis" },
  { type: "Alterações pequenas", duration: "Conforme SLA do plano" },
  { type: "Alterações urgentes", duration: "Prioridade máxima" },
];

const faq = [
  {
    question: "O que está incluído na manutenção mensal?",
    answer:
      "Atualizações de segurança, backups regulares, monitorização de uptime, correções de bugs e um número de horas para pequenas alterações (varia conforme o plano). Consulte a página de planos para detalhes específicos.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Os nossos planos são mensais e pode cancelar com 30 dias de aviso prévio. Não há fidelização nem penalizações.",
  },
  {
    question: "O que conta como pequena alteração?",
    answer:
      "Atualizações de texto, troca de imagens, ajustes de cores/espaçamentos, adição de campos em formulários. Não inclui novas páginas, funcionalidades complexas ou redesign de secções.",
  },
  {
    question: "Trabalham com WordPress?",
    answer:
      "Sim, trabalhamos com WordPress, Shopify, Next.js e outras plataformas. Adaptamos o serviço à tecnologia do seu site.",
  },
  {
    question: "Como peço uma alteração?",
    answer:
      "Por email ou pelo canal de comunicação acordado. Registamos o pedido, estimamos o tempo e executamos conforme o SLA do seu plano.",
  },
  {
    question: "E se o site tiver um problema urgente?",
    answer:
      "Problemas críticos (site em baixo, falha de segurança) são tratados com prioridade máxima, independentemente do plano.",
  },
];

const relatedServices = [
  { title: "Segurança & Backups", href: "/servicos/seguranca-backups" },
  { title: "Performance", href: "/servicos/performance-core-web-vitals" },
  { title: "SEO Técnico", href: "/servicos/seo-tecnico" },
];

export default function ManutencaoSitesPage() {
  const canonicalUrl = `${SITE_URL}/servicos/manutencao-sites`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Manutenção de Sites",
    description: "Manutenção mensal: atualizações, segurança, backups e pequenas alterações para manter o seu site rápido e estável.",
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
      title="Manutenção de Sites"
      subtitle="Mantemos o seu site sempre atualizado, seguro e a funcionar sem interrupções. Foque-se no seu negócio enquanto tratamos da parte técnica."
      icon={Wrench}
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
