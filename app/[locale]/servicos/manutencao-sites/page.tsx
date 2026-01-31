import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/service-page";
import { Wrench } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { getTranslations } from "next-intl/server";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Services.maintenance' });

  return {
    title: `${t('title')} | SiteSolutions`,
    description: t('subtitle'),
    keywords: [
      "manutenção de sites",
      "manutenção wordpress",
      "atualização de sites",
      "suporte website",
      "backups website",
    ],
  };
}

const relatedServices = [
  { title: "Segurança & Backups", href: "/servicos/seguranca-backups" },
  { title: "Performance", href: "/servicos/performance-core-web-vitals" },
  { title: "SEO Técnico", href: "/servicos/seo-tecnico" },
];

export default async function ManutencaoSitesPage() {
  const t = await getTranslations('Services.maintenance');
  const canonicalUrl = `${SITE_URL}/servicos/manutencao-sites`;

  const includes = [0, 1, 2, 3, 4, 5, 6, 7].map(i => t(`includes.${i}`));

  const processSteps = [0, 1, 2, 3].map(i => ({
    step: i + 1,
    title: t(`process.${i}.title`),
    description: t(`process.${i}.description`)
  }));

  const deliverables = [0, 1, 2, 3, 4, 5].map(i => t(`deliverables.${i}`));

  const timelines = [0, 1, 2].map(i => ({
    type: t(`timelines.${i}.type`),
    duration: t(`timelines.${i}.duration`)
  }));

  const faq = [0, 1, 2, 3, 4, 5].map(i => ({
    question: t(`faq.${i}.question`),
    answer: t(`faq.${i}.answer`)
  }));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t('title'),
    description: t('subtitle'),
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
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
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
