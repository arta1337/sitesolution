import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Legal.privacy");
  return {
    title: `${t("title")} | SiteSolutions`,
    description: t("title"),
  };
}

interface Section {
  title: string;
  content: string;
  items?: string[];
}

export default async function PrivacidadePage() {
  const t = await getTranslations("Legal");
  const sections = t.raw("privacy.sections") as Section[];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-8 lg:pt-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("privacy.title")}
            </h1>
            <p className="mt-4 text-muted-foreground">
              {t("lastUpdated")}: {t("privacy.date")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.items && (
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
