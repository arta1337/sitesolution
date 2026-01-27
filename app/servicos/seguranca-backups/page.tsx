import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Segurança & Backups | SiteSolutions",
  description:
    "Serviço de segurança e backups para websites. Proteção contra ataques, SSL, headers de segurança e backups automáticos com restauração rápida.",
  keywords: [
    "segurança website",
    "backups website",
    "SSL certificado",
    "proteção site",
    "segurança WordPress",
  ],
};

const includes = [
  "Auditoria de segurança completa",
  "Configuração de SSL/HTTPS",
  "Headers de segurança (CSP, HSTS, etc.)",
  "Backups automáticos (frequência configurável)",
  "Monitorização de vulnerabilidades",
  "Firewall de aplicação (WAF)",
  "Proteção contra ataques comuns",
  "Plano de recuperação de desastres",
];

const process = [
  {
    step: 1,
    title: "Auditoria",
    description:
      "Avaliamos o estado atual: vulnerabilidades, configurações, backups existentes.",
  },
  {
    step: 2,
    title: "Hardening",
    description:
      "Implementamos medidas de segurança: SSL, headers, firewall, permissões.",
  },
  {
    step: 3,
    title: "Backups",
    description:
      "Configuramos sistema de backups automáticos com retenção adequada.",
  },
  {
    step: 4,
    title: "Monitorização",
    description:
      "Ativamos alertas para problemas de segurança e verificações regulares.",
  },
];

const deliverables = [
  "Relatório de auditoria de segurança",
  "SSL configurado e a funcionar",
  "Headers de segurança implementados",
  "Sistema de backups automáticos",
  "Documentação de recuperação",
  "Acesso a dashboard de monitorização",
];

const timelines = [
  { type: "Auditoria", duration: "2-3 dias úteis" },
  { type: "Implementação básica", duration: "2-5 dias úteis" },
  { type: "Setup completo", duration: "1-2 semanas" },
  { type: "Restauração de backup", duration: "Minutos a 2 horas" },
];

const faq = [
  {
    question: "Com que frequência são feitos os backups?",
    answer:
      "Depende do plano e necessidades. Pode ser diário, semanal ou até horário para sites com muitas atualizações. O importante é ter um histórico suficiente para recuperação.",
  },
  {
    question: "Onde são guardados os backups?",
    answer:
      "Em servidores externos ao do site (nunca no mesmo servidor). Usamos serviços cloud seguros com encriptação. Pode ter cópia local se preferir.",
  },
  {
    question: "Quanto tempo demora a restaurar um backup?",
    answer:
      "A maioria das restaurações demora menos de 1 hora. Em casos complexos pode demorar até 2-4 horas. Temos procedimentos documentados para minimizar o tempo.",
  },
  {
    question: "Protegem contra todos os ataques?",
    answer:
      "Implementamos múltiplas camadas de proteção que bloqueiam a grande maioria dos ataques. Nenhum sistema é 100% infalível, mas minimizamos significativamente o risco.",
  },
  {
    question: "E se o site for hackeado?",
    answer:
      "Temos procedimentos de resposta a incidentes. Isolamos o problema, restauramos um backup limpo e investigamos a origem. Clientes com manutenção têm prioridade.",
  },
  {
    question: "O SSL está incluído?",
    answer:
      "Configuramos SSL/HTTPS gratuito (Let's Encrypt) ou premium conforme necessidade. A configuração e renovação automática estão incluídas.",
  },
];

const relatedServices = [
  { title: "Manutenção de Sites", href: "/servicos/manutencao-sites" },
  { title: "Performance", href: "/servicos/performance-core-web-vitals" },
  { title: "SEO Técnico", href: "/servicos/seo-tecnico" },
];

export default function SegurancaBackupsPage() {
  return (
    <ServicePageTemplate
      title="Segurança & Backups"
      subtitle="Protegemos o seu site contra ameaças e garantimos que os seus dados estão sempre seguros com backups automáticos e recuperação rápida."
      icon={Shield}
      includes={includes}
      process={process}
      deliverables={deliverables}
      timelines={timelines}
      faq={faq}
      relatedServices={relatedServices}
    />
  );
}
