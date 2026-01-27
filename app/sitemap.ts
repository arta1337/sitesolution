import type { MetadataRoute } from "next";
import { caseStudies, siteConfig } from "@/lib/content";

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

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${SITE_URL}/portfolio/${study.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Note: /contactos is intentionally excluded (redirects to /auditoria-48h#contacto)
  return [...staticPages, ...caseStudyPages];
}
