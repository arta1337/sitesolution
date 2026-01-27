import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { about, stats, seoMeta } from "@/lib/content";
import { Target, Users, Award, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: seoMeta.about.title,
  description: seoMeta.about.description,
  keywords: seoMeta.about.keywords,
};

const valueIcons = [Target, Users, Award, HeartHandshake];

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {about.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {about.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Image placeholder */}
              <div className="rounded-2xl border border-border bg-card aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-foreground mx-auto">
                    <span className="text-3xl font-bold text-background">SS</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">SiteSolutions</p>
                </div>
              </div>

              {/* Story content */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  A Nossa História
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  {about.story.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 lg:py-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold tracking-tight text-background lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-background/70 lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Os Nossos Valores
              </h2>
              <p className="mt-4 text-muted-foreground">
                Princípios que guiam o nosso trabalho todos os dias.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {about.values.map((value, index) => {
                const Icon = valueIcons[index] || Target;
                return (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary mx-auto">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                A Nossa Equipa
              </h2>
              <p className="mt-4 text-muted-foreground">
                Profissionais dedicados a entregar o melhor resultado.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {about.team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  {/* Avatar placeholder */}
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary mx-auto">
                    <span className="text-2xl font-bold text-foreground">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Vamos trabalhar juntos?
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Entre em contacto e descubra como podemos ajudar o seu negócio.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/auditoria-48h#contacto">Falar connosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
