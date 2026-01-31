import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "subtle";
}

export function CTABanner({
  title = "Pronto para ter um site sem preocupações?",
  subtitle = "Peça uma auditoria gratuita e descubra como podemos ajudar o seu negócio.",
  primaryCTA = { text: "Auditoria 48h", href: "/auditoria-48h" },
  secondaryCTA,
  variant = "default",
}: CTABannerProps) {
  if (variant === "subtle") {
    return (
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
              {title}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="brand">
                <Link href={primaryCTA.href}>
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-foreground text-background dark:bg-secondary dark:text-secondary-foreground transition-colors">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-balance">
          {title}
        </h2>
        <p className="mt-4 text-background/80 dark:text-secondary-foreground/80 text-lg text-pretty">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="brand"
          >
            <Link href={primaryCTA.href}>
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {secondaryCTA && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/30 bg-transparent text-background hover:bg-background/10 dark:border-secondary-foreground/30 dark:text-secondary-foreground dark:hover:bg-secondary-foreground/10"
            >
              <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
