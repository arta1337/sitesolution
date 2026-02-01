"use client";

import { Link } from "@/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, HeartHandshake } from "lucide-react";
import { useTranslations } from "next-intl";

const valueIcons = [Target, Users, Award, HeartHandshake];

export default function SobrePage() {
  const t = useTranslations("About");

  // Get arrays from translations
  const storyParagraphs = t.raw("story.paragraphs") as string[];
  const values = t.raw("values.items") as Array<{ title: string; description: string }>;
  const team = t.raw("team.members") as Array<{ name: string; role: string }>;
  const stats = t.raw("stats") as Array<{ label: string; value: string }>;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("subtitle")}
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
                  {t("story.title")}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  {storyParagraphs.map((paragraph, index) => (
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
                {t("values.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t("values.subtitle")}
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
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
                {t("team.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t("team.subtitle")}
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {team.map((member) => (
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

        {/* CTA - Matching Portfolio page style */}
        <section className="py-16 lg:py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-950/80"></div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-zinc-950 hover:bg-zinc-200 font-semibold"
              >
                <Link href="/auditoria-48h">{t("cta.button")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
