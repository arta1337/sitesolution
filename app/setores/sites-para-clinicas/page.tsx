import type { Metadata } from "next";
import { SectorPageTemplate } from "@/components/templates/sector-page";
import { Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Sites para Clínicas | SiteSolutions",
  description:
    "Criação de websites para clínicas médicas e dentárias. Sites profissionais com sistema de marcações online, otimizados para conversão.",
  keywords: [
    "sites para clínicas",
    "website clínica médica",
    "site clínica dentária",
    "marcações online",
    "web design saúde",
  ],
};

const challenges = [
  "Site antigo que não inspira confiança aos pacientes",
  "Dificuldade em converter visitantes em marcações",
  "Falta de sistema de marcação online integrado",
  "Má experiência mobile para pacientes que pesquisam no telemóvel",
  "Pouca visibilidade no Google para pesquisas locais",
];

const solutions = [
  {
    title: "Design Profissional",
    description:
      "Sites modernos que transmitem confiança e profissionalismo, essenciais na área da saúde.",
  },
  {
    title: "Marcações Online",
    description:
      "Integração com sistemas de agenda para marcações 24/7, reduzindo chamadas e trabalho administrativo.",
  },
  {
    title: "SEO Local",
    description:
      "Otimização para aparecer nas pesquisas locais: 'clínica dentária perto de mim', 'médico em Lisboa', etc.",
  },
  {
    title: "Páginas de Especialidades",
    description:
      "Páginas dedicadas a cada serviço/especialidade para melhor posicionamento e informação clara.",
  },
  {
    title: "Mobile-First",
    description:
      "Design pensado primeiro para telemóvel, onde a maioria dos pacientes pesquisa.",
  },
  {
    title: "RGPD Compliant",
    description:
      "Formulários e políticas em conformidade com o RGPD, essencial para dados de saúde.",
  },
];

const features = [
  "Design responsivo e profissional",
  "Sistema de marcações online",
  "Páginas por especialidade/serviço",
  "Perfis de médicos/equipa",
  "Blog para conteúdo de saúde",
  "Integração com Google Maps",
  "Formulários RGPD compliant",
  "SEO local otimizado",
  "Manutenção e suporte incluídos",
  "Performance otimizada",
];

const faq = [
  {
    question: "Integram com o meu sistema de agenda?",
    answer:
      "Sim, trabalhamos com a maioria dos sistemas de gestão clínica e agendamento. Se o seu sistema tiver API, conseguimos integrar. Caso contrário, podemos recomendar soluções compatíveis.",
  },
  {
    question: "Quanto custa um site para clínica?",
    answer:
      "Depende da complexidade: número de páginas, integrações necessárias, funcionalidades específicas. Contacte-nos para proposta personalizada.",
  },
  {
    question: "Tratam do conteúdo?",
    answer:
      "Podemos estruturar o conteúdo e fazer copywriting básico. Para conteúdo médico especializado, recomendamos que reveja ou forneça as informações técnicas.",
  },
  {
    question: "E a manutenção depois?",
    answer:
      "Oferecemos planos de manutenção mensal que incluem atualizações, backups, suporte e pequenas alterações. Consulte a página de planos.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "Um site institucional de clínica tipicamente demora 3-6 semanas, dependendo da complexidade e rapidez de feedback.",
  },
  {
    question: "Ajudam com Google Business Profile?",
    answer:
      "Sim, podemos ajudar a otimizar o seu perfil Google Business para aparecer no mapa e pesquisas locais.",
  },
];

export default function SitesParaClinicasPage() {
  return (
    <SectorPageTemplate
      title="Sites para Clínicas"
      subtitle="Websites profissionais para clínicas médicas e dentárias. Design que inspira confiança, marcações online e otimização para pacientes locais."
      icon={Stethoscope}
      challenges={challenges}
      solutions={solutions}
      features={features}
      caseStudy={{
        client: "Clínica Médica Premium",
        result: "+45% marcações online",
        href: "/portfolio/clinica-exemplo",
      }}
      faq={faq}
    />
  );
}
