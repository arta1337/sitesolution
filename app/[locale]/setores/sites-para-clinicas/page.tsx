import type { Metadata } from "next";
import { SectorPageTemplate } from "@/components/templates/sector-page";
import { Stethoscope } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { getTranslations } from "next-intl/server";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Sectors.clinics.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
  };
}

export default async function SitesParaClinicasPage() {
  const t = await getTranslations('Sectors.clinics');
  const canonicalUrl = `${SITE_URL}/setores/sites-para-clinicas`;

  const challenges = [0, 1, 2, 3, 4].map(i => t(`challenges.${i}`));

  const solutions = [0, 1, 2, 3, 4, 5].map(i => ({
    title: t(`solutions.${i}.title`),
    description: t(`solutions.${i}.description`)
  }));

  const features = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => t(`features.${i}`));

  const faq = [0, 1, 2, 3, 4, 5].map(i => ({
    question: t(`faq.${i}.question`),
    answer: t(`faq.${i}.answer`)
  }));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t('hero.title'),
    description: t('metadata.description'),
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
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        icon={Stethoscope}
        challenges={challenges}
        solutions={solutions}
        features={features}
        caseStudy={{
          client: t('caseStudy.client'),
          result: t('caseStudy.result'),
          href: "/portfolio/clinica-exemplo",
        }}
        faq={faq}
      />
    </>
  );
}
