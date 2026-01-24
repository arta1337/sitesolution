"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { siteConfig, contactForm, plans } from "@/lib/content";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function ContactosPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Contacte-nos
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Tem um projeto em mente? Precisa de manutenção para o seu site?
                Estamos aqui para ajudar.
              </p>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Contact info - Left column */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Informações de Contacto
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Resposta garantida em 24 horas úteis.
                </p>

                {/* Contact details */}
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Email
                      </div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-foreground hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border">
                      <Phone className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Telefone
                      </div>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                        className="text-foreground hover:underline"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border">
                      <MessageCircle className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        WhatsApp
                      </div>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:underline"
                      >
                        {siteConfig.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Morada
                      </div>
                      <div className="text-foreground">
                        {siteConfig.contact.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border">
                      <Clock className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        Horário
                      </div>
                      <div className="text-foreground">
                        {siteConfig.contact.hours}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-10 space-y-3">
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
              </div>

              {/* Form - Right column */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                  <h2 className="text-xl font-bold text-foreground">
                    {contactForm.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {contactForm.subtitle}
                  </p>

                  {isSubmitted ? (
                    <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-foreground">
                        Mensagem enviada!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Entraremos em contacto consigo em breve.
                      </p>
                      <Button
                        className="mt-6 bg-transparent"
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Enviar nova mensagem
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">{contactForm.fields.name}</Label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="O seu nome"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">
                            {contactForm.fields.company}
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            required
                            placeholder="Nome da empresa"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">{contactForm.fields.email}</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="email@empresa.pt"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{contactForm.fields.phone}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+351 900 000 000"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">
                          {contactForm.fields.website}
                        </Label>
                        <Input
                          id="website"
                          name="website"
                          type="url"
                          placeholder="https://..."
                        />
                      </div>

                      {/* Plan selector */}
                      <div className="space-y-2">
                        <Label>Plano de interesse (opcional)</Label>
                        <div className="flex flex-wrap gap-2">
                          {plans.map((plan) => (
                            <label
                              key={plan.id}
                              className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 cursor-pointer hover:bg-secondary/50 transition-colors has-[:checked]:border-foreground has-[:checked]:bg-secondary"
                            >
                              <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                className="sr-only"
                              />
                              <span className="text-sm">{plan.name}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {contactForm.fields.message}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Descreva o seu projeto ou necessidade..."
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <Checkbox id="maintenance" name="maintenance" />
                        <Label
                          htmlFor="maintenance"
                          className="text-sm font-normal text-muted-foreground cursor-pointer"
                        >
                          {contactForm.fields.maintenance}
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "A enviar..." : contactForm.submit}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="h-80 bg-secondary flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-sm">Mapa - {siteConfig.contact.address}</p>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center">
              Pode também interessar-lhe
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
              <Link
                href="/servicos"
                className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-foreground">Serviços</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Conheça tudo o que fazemos
                </p>
              </Link>
              <Link
                href="/planos"
                className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-foreground">Planos</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Compare os planos de manutenção
                </p>
              </Link>
              <Link
                href="/portfolio"
                className="rounded-xl border border-border bg-card p-6 text-center hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-foreground">Portfólio</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Veja o nosso trabalho
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
