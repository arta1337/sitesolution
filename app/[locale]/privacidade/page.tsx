import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { legal, seoMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: seoMeta.privacy.title,
  description: seoMeta.privacy.description,
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-8 lg:pt-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {legal.privacy.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              Última atualização: {legal.privacy.lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {legal.privacy.content.split("\n\n").map((section, index) => {
                if (section.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-xl font-bold text-foreground mt-8 mb-4"
                    >
                      {section.replace("## ", "")}
                    </h2>
                  );
                }
                if (section.startsWith("- ")) {
                  const items = section.split("\n");
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {section}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
