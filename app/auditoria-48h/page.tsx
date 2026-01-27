"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  FileText,
  ArrowRight,
  Gauge,
  Search,
  Lock,
  Smartphone,
  AlertTriangle,
} from "lucide-react";

const auditItems = [
  {
    icon: Gauge,
    title: "Performance & Core Web Vitals",
    description: "Análise completa de velocidade, LCP, FID, CLS e recomendações de otimização.",
  },
  {
    icon: Search,
    title: "SEO Técnico",
    description: "Verificação de meta tags, estrutura de URLs, sitemap, robots.txt e indexação.",
  },
  {
    icon: Lock,
    title: "Segurança",
    description: "Verificação de SSL, headers de segurança, vulnerabilidades comuns.",
  },
  {
    icon: Smartphone,
    title: "Responsividade",
    description: "Teste em múltiplos dispositivos e identificação de problemas mobile.",
  },
  {
    icon: AlertTriangle,
    title: "Erros Críticos",
    description: "Identificação de links quebrados, erros 404, problemas de carregamento.",
  },
  {
    icon: TrendingUp,
    title: "Oportunidades de Melhoria",
    description: "Lista priorizada de ações para melhorar conversões e visibilidade.",
  },
];

const benefits = [
  "Relatório PDF profissional",
  "Análise por especialista (não automática)",
  "Recomendações priorizadas por impacto",
  "Estimativa de tempo/custo por correção",
  "Sem compromisso de contratação",
];

export default function Auditoria48hPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Content */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Entrega em 48 horas úteis
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                  Auditoria Gratuita do Seu Website
                </h1>
                
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl text-pretty">
                  Descubra o que está a impedir o seu site de converter mais visitantes em clientes. 
                  Receba um relatório detalhado com recomendações práticas em 48 horas.
                </p>

                {/* Benefits list */}
                <ul className="mt-8 space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Trust signals */}
                <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>100% gratuito</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    <span>Sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Relatório PDF completo</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:sticky lg:top-24">
                <Card className="border-2">
                  <CardContent className="p-6 lg:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Pedido Recebido!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Vamos analisar o seu website e enviar o relatório para {formData.email} dentro de 48 horas úteis.
                        </p>
                        <Button asChild variant="outline" className="bg-transparent">
                          <Link href="/">Voltar à página inicial</Link>
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="mb-6">
                          <h2 className="text-xl font-semibold text-foreground">
                            Pedir Auditoria Gratuita
                          </h2>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Preencha o formulário e receba o relatório em 48h.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nome *</Label>
                            <Input
                              id="name"
                              type="text"
                              placeholder="O seu nome"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="email@exemplo.pt"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="website">URL do Website *</Label>
                            <Input
                              id="website"
                              type="url"
                              placeholder="https://www.exemplo.pt"
                              required
                              value={formData.website}
                              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Telefone (opcional)</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+351 912 345 678"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>

                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full mt-6"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              "A enviar..."
                            ) : (
                              <>
                                Receber Auditoria Gratuita
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>

                          <p className="text-xs text-center text-muted-foreground mt-4">
                            Ao submeter, concorda com a nossa{" "}
                            <Link href="/privacidade" className="underline hover:text-foreground">
                              política de privacidade
                            </Link>
                            . Não enviamos spam.
                          </p>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                O Que Está Incluído na Auditoria
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Análise profissional e detalhada do seu website em 6 áreas críticas.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {auditItems.map((item) => (
                <Card key={item.title} className="bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Report Preview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Exemplo de Relatório
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Cada auditoria inclui um relatório PDF profissional com análise detalhada, 
                  capturas de ecrã, métricas e recomendações priorizadas.
                </p>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Sumário executivo com problemas críticos destacados</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Análise técnica com capturas de ecrã e evidências</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Lista de ações priorizadas por impacto vs. esforço</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Estimativa de tempo e custo para cada correção</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <a href="#form">
                      Pedir Auditoria Gratuita
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Report Preview Mockup */}
              <div className="relative">
                <div className="rounded-xl border bg-card p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                    <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
                      <span className="text-background font-bold text-sm">SS</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Relatório de Auditoria</div>
                      <div className="text-xs text-muted-foreground">SiteSolutions.pt</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900">
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">Performance</span>
                      <span className="text-sm font-bold text-red-600">32/100</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900">
                      <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">SEO</span>
                      <span className="text-sm font-bold text-yellow-600">58/100</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900">
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">Segurança</span>
                      <span className="text-sm font-bold text-green-600">85/100</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <div className="text-xs text-muted-foreground mb-2">Problemas Críticos Encontrados</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-muted-foreground">LCP muito alto (4.2s)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-muted-foreground">Imagens não otimizadas</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="text-muted-foreground">Meta descriptions em falta</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-xl bg-secondary/50" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-2">
                  A auditoria é mesmo gratuita?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sim, 100% gratuita e sem compromisso. Oferecemos esta auditoria como forma de 
                  demonstrar o nosso conhecimento e identificar oportunidades de melhoria no seu site.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-2">
                  Em quanto tempo recebo o relatório?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Dentro de 48 horas úteis após a submissão do pedido. 
                  Receberá o relatório PDF diretamente no email indicado.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-2">
                  Sou obrigado a contratar algo depois?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Não, de todo. A auditoria é gratuita e sem qualquer obrigação. 
                  Pode implementar as recomendações internamente ou com outro parceiro.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-2">
                  Que tipo de sites analisam?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Analisamos qualquer tipo de website: institucional, e-commerce, blogs, 
                  landing pages, etc. A única condição é que o site esteja online e acessível.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Descubra o Potencial do Seu Website
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Peça já a sua auditoria gratuita e receba um diagnóstico completo em 48 horas.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="#form">
                  Pedir Auditoria Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
