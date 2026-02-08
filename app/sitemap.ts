import type { MetadataRoute } from "next";
import { caseStudies, siteConfig } from "@/lib/content";
import { locales } from "@/navigation";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
      { path: "/", changeFrequency: "weekly", priority: 1 },
      { path: "/servicos", changeFrequency: "monthly", priority: 0.9 },
      { path: "/planos", changeFrequency: "weekly", priority: 0.9 },
      { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
      { path: "/sobre", changeFrequency: "monthly", priority: 0.6 },
      { path: "/auditoria-48h", changeFrequency: "weekly", priority: 0.9 },

      // Service pages
      { path: "/servicos/manutencao-sites", changeFrequency: "monthly", priority: 0.8 },
      { path: "/servicos/seo-tecnico", changeFrequency: "monthly", priority: 0.8 },
      { path: "/servicos/performance-core-web-vitals", changeFrequency: "monthly", priority: 0.8 },
      { path: "/servicos/seguranca-backups", changeFrequency: "monthly", priority: 0.8 },
      { path: "/servicos/landing-pages-cro", changeFrequency: "monthly", priority: 0.8 },
      { path: "/servicos/seo-para-ia-geo", changeFrequency: "weekly", priority: 0.8 },

      // Sector pages
      { path: "/setores/sites-para-clinicas", changeFrequency: "monthly", priority: 0.8 },
      { path: "/setores/sites-para-imobiliarias", changeFrequency: "monthly", priority: 0.8 },
      { path: "/setores/sites-para-restaurantes", changeFrequency: "monthly", priority: 0.8 },
      { path: "/setores/sites-para-ecommerce", changeFrequency: "monthly", priority: 0.8 },

      // Legal
      { path: "/privacidade", changeFrequency: "yearly", priority: 0.3 },
      { path: "/termos", changeFrequency: "yearly", priority: 0.3 },
    ];

  const staticPages = staticPaths.flatMap((p) => {
    return locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${p.path === "/" ? "" : p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    }));
  });

  const caseStudyPages = caseStudies.flatMap((study) => {
    return locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/portfolio/${study.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  });

  // Note: /contactos is intentionally excluded (redirects to /auditoria-48h)
  return [...staticPages, ...caseStudyPages];
}
