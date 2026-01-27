import type { Metadata } from "next";
import { SectorPageTemplate } from "@/components/templates/sector-page";
import { ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Sites para E-commerce | SiteSolutions",
  description:
    "Criação de lojas online profissionais. E-commerce otimizado para conversão, rápido e seguro. WooCommerce, Shopify e soluções custom.",
  keywords: [
    "loja online",
    "e-commerce Portugal",
    "criar loja online",
    "website vendas",
    "WooCommerce Shopify",
  ],
};

const challenges = [
  "Loja lenta que perde vendas (cada segundo conta)",
  "Checkout complicado com alta taxa de abandono",
  "Dificuldade em gerir produtos e stock",
  "Falta de visibilidade no Google para produtos",
  "Site não preparado para picos de tráfego (promoções, natal)",
];

const solutions = [
  {
    title: "Performance Extrema",
    description:
      "Lojas rápidas que carregam em menos de 2 segundos. Velocidade = mais vendas.",
  },
  {
    title: "Checkout Otimizado",
    description:
      "Processo de compra simples e rápido para reduzir abandono de carrinho.",
  },
  {
    title: "SEO para Produtos",
    description:
      "Páginas de produto otimizadas para aparecer nas pesquisas do Google.",
  },
  {
    title: "Gestão Fácil",
    description:
      "Painel intuitivo para gerir produtos, preços, stock e encomendas.",
  },
  {
    title: "Segurança",
    description:
      "SSL, proteção de pagamentos e conformidade com RGPD para compras seguras.",
  },
  {
    title: "Escalabilidade",
    description:
      "Infraestrutura que aguenta picos de tráfego sem cair.",
  },
];

const features = [
  "Design responsivo e otimizado",
  "Checkout simplificado",
  "Múltiplos métodos de pagamento",
  "Gestão de produtos e stock",
  "SEO para produtos e categorias",
  "Integração com CTT/transportadoras",
  "Schema markup para produtos",
  "Emails transacionais",
  "Analytics e tracking",
  "Performance otimizada",
];

const faq = [
  {
    question: "WooCommerce ou Shopify?",
    answer:
      "Depende. WooCommerce oferece mais flexibilidade e controlo. Shopify é mais simples de gerir mas tem custos mensais. Analisamos o seu caso e recomendamos.",
  },
  {
    question: "Integram com que métodos de pagamento?",
    answer:
      "Multibanco, MB Way, cartão de crédito (Stripe, PayPal), transferência. Configuramos os métodos mais relevantes para o mercado português.",
  },
  {
    question: "E os envios?",
    answer:
      "Integramos com CTT, DPD, GLS e outras transportadoras. Calculamos portes automaticamente ou definimos regras fixas conforme preferir.",
  },
  {
    question: "Posso gerir sozinho depois?",
    answer:
      "Sim. O painel de gestão é intuitivo para adicionar produtos, gerir encomendas e ver relatórios. Damos formação incluída.",
  },
  {
    question: "Quanto custa uma loja online?",
    answer:
      "Varia muito conforme funcionalidades, número de produtos e integrações. Desde lojas simples a projetos complexos. Peça proposta para o seu caso.",
  },
  {
    question: "E a manutenção?",
    answer:
      "Oferecemos planos de manutenção específicos para e-commerce que incluem atualizações, backups, monitorização e suporte prioritário.",
  },
];

export default function SitesParaEcommercePage() {
  return (
    <SectorPageTemplate
      title="Sites para E-commerce"
      subtitle="Lojas online que vendem. Performance, checkout otimizado e SEO para produtos. WooCommerce, Shopify ou soluções à medida."
      icon={ShoppingCart}
      challenges={challenges}
      solutions={solutions}
      features={features}
      caseStudy={{
        client: "Loja Gourmet Online",
        result: "-45% tempo carregamento",
        href: "/portfolio/ecommerce-exemplo",
      }}
      faq={faq}
    />
  );
}
