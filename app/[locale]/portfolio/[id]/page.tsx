"use client";

import { use } from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { caseStudies } from "@/lib/content";
import { ArrowLeft, CheckCircle, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  params: Promise<{ id: string; locale: string }>;
}

export default function CaseStudyPage({ params }: Props) {
  const { id, locale } = use(params);

  // Redirect to the special UI page if that's the ID
  if (id === 'ui-design-futuro') {
    redirect(`/${locale}/portfolio/ui-design-futuro`);
  }

  const study = caseStudies.find((s) => s.id === id);
  const t = useTranslations("Portfolio.caseStudies");
  const tLabels = useTranslations("Portfolio.labels");

  if (!study) {
    notFound();
  }

  // Map images to IDs
  const imageMap: Record<string, string> = {
    "clinica-exemplo": "/clinic_portfolio_showcase.png",
    "consultoria-exemplo": "/finance_portfolio_showcase.png",
    "ecommerce-exemplo": "/ecommerce_portfolio_showcase.png",
    "imobiliaria-exemplo": "/realestate_portfolio_showcase.png",
  };

  const imagePath = imageMap[id];

  // Translation helpers
  // We assume the structure in JSON matches standard keys
  const tStudy = (key: string) => t(`${id}.${key}`);

  const getArray = (key: string) => {
    try {
      const items = t.raw(`${id}.${key}`);
      return Array.isArray(items) ? items : [];
    } catch (e) {
      return [];
    }
  };

  const getMetrics = () => {
    try {
      const metrics = t.raw(`${id}.metrics`);
      return Array.isArray(metrics) ? metrics : [];
    } catch (e) {
      return [];
    }
  };

  const objectives = getArray("objectives");
  const deliverables = getArray("deliverables");
  const maintenance = getArray("maintenance90Days");
  const metrics = getMetrics();

  return (
    <>
      <Header />
      <main>
        {/* Case Study Headers */}
        <section className="bg-zinc-900 pt-24 pb-16 lg:pt-32 lg:pb-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <Link
                  href="/portfolio"
                  className="mb-8 inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {tLabels("backToPortfolio")}
                </Link>

                <div className="flex items-center gap-4 mb-6">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 border border-indigo-500/20">
                    {tStudy("sector")}
                  </span>
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400 border border-zinc-700">
                    2024
                  </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  {tStudy("client")}
                </h1>
                <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                  {tStudy("description")}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 min-w-[140px]">
                    <div className="text-sm text-zinc-500 mb-1">{tLabels("result")}</div>
                    <div className="text-xl font-bold text-emerald-400">
                      {tStudy("result")}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 min-w-[140px]">
                    <div className="text-sm text-zinc-500 mb-1">{tLabels("service")}</div>
                    <div className="text-xl font-bold text-white">
                      {tStudy("serviceCategory")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-800 border border-zinc-700 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  {imagePath ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={imagePath}
                      alt={tStudy("client")}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-zinc-800 text-zinc-500">
                      <span className="text-lg">Imagem indisponível</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Case Study Content */}
        <section className="py-12 lg:py-20 bg-background text-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand" />
                    {tLabels("techStack")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TailwindCSS", "TypeScript"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-background rounded-md text-xs font-mono border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    {tLabels("maintenance")}
                  </h3>
                  <ul className="space-y-3">
                    {maintenance.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">

                {/* Context */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{tLabels("challengeContext")}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {tStudy("context")}
                  </p>
                </div>

                {/* Objectives */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{tLabels("objectives")}</h2>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {objectives.map((obj, i) => (
                      <li key={i} className="flex gap-3 p-4 rounded-xl bg-card border border-border">
                        <CheckCircle className="h-5 w-5 text-brand shrink-0" />
                        <span className="text-sm font-medium text-foreground">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{tLabels("solution")}</h2>
                  <ul className="space-y-3 pl-4 border-l-2 border-border ml-2">
                    {deliverables.map((item, i) => (
                      <li key={i} className="text-muted-foreground pl-4 relative">
                        <span className="absolute -left-[21px] top-2 h-2 w-2 rounded-full bg-background border-2 border-border" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">{tLabels("impactMetrics")}</h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {metrics.map((metric, i) => (
                      <div key={i} className="p-4 rounded-xl bg-secondary/20 border border-border">
                        <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                        <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs font-medium text-brand mt-1">{metric.timeframe}</div>
                        <div className="h-1.5 w-full bg-border rounded-full mt-3 overflow-hidden">
                          <div
                            className="h-full bg-brand rounded-full"
                            style={{ width: '75%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
