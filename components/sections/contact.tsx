"use client";

import React from "react"

import { useState } from "react";
import { siteConfig, contactForm } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function Contact() {
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
                    Enviamos uma proposta personalizada para o seu projeto
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  Mensagem enviada!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Entraremos em contacto consigo em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    <Label htmlFor="company">{contactForm.fields.company}</Label>
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
                  <Label htmlFor="website">{contactForm.fields.website}</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{contactForm.fields.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
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
                  {isSubmitting ? (
                    "A enviar..."
                  ) : (
                    <>
                      {contactForm.submit}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
