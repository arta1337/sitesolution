import Link from "next/link";
import { siteConfig, contactForm } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";

// Contact section (info-only) — all lead capture routes to /auditoria-48h
export function Contact() {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              {contactForm.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {contactForm.subtitle}
            </p>

            {/* Contact info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefone</div>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm font-medium text-foreground hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Clock className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Horário</div>
                  <div className="text-sm font-medium text-foreground">
                    {siteConfig.contact.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {contactForm.trust.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Shield className="h-4 w-4" />
                  {item}
                </div>
              ))}
            </div>

            {/* Response time highlight */}
            <div className="mt-8 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-green-800 dark:text-green-300">
                    Resposta em 24h úteis
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    Se precisar de falar connosco, use o contacto rápido na auditoria.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Single funnel CTA */}
          <Card className="border-2 h-fit lg:sticky lg:top-24">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground">
                Fale connosco através da Auditoria 48h
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mantemos um único formulário para reduzir fricção e garantir resposta rápida. 
                Use “Contacto rápido” se não quiser pedir auditoria.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" variant="brand">
                  <Link href="/auditoria-48h">
                    Auditoria 48h
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Link
                  href="/auditoria-48h#contacto"
                  className="text-center text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Contacto rápido
                </Link>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                Sem spam. Usamos os seus dados apenas para responder ao pedido.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
