"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { siteConfig, navigation } from "@/lib/content";
import { cn } from "@/lib/utils";

import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations('Navigation');
  const tItems = useTranslations('Navigation.items');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { key: 'services', href: '/servicos' },
    { key: 'plans', href: '/planos' },
    { key: 'portfolio', href: '/portfolio' },
    { key: 'about', href: '/sobre' },
    // { key: 'blog', href: '/blog' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground transition-colors hover:text-foreground/80"
            aria-label={`${siteConfig.name} - Página inicial`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground">
              <span className="text-sm font-bold text-background">SS</span>
            </div>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {/* Services with Mega Menu */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                  servicesOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                {tItems('services')}
                <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>

              {/* Mega Menu Dropdown */}
              {servicesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[600px]"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="rounded-xl border border-border bg-background shadow-xl p-6">
                    <div className="grid grid-cols-2 gap-8">
                      {[
                        {
                          category: t('megaMenu.services'),
                          items: [
                            { id: "manutencao-sites", href: "/servicos/manutencao-sites" },
                            { id: "seo-tecnico", href: "/servicos/seo-tecnico" },
                            { id: "performance-core-web-vitals", href: "/servicos/performance-core-web-vitals" },
                            { id: "seguranca-backups", href: "/servicos/seguranca-backups" },
                            { id: "landing-pages-cro", href: "/servicos/landing-pages-cro" },
                            { id: "seo-para-ia-geo", href: "/servicos/seo-para-ia-geo" },
                          ]
                        },
                        {
                          category: t('megaMenu.sectors'),
                          items: [
                            { id: "sites-para-clinicas", href: "/setores/sites-para-clinicas" },
                            { id: "sites-para-imobiliarias", href: "/setores/sites-para-imobiliarias" },
                            { id: "sites-para-restaurantes", href: "/setores/sites-para-restaurantes" },
                            { id: "sites-para-ecommerce", href: "/setores/sites-para-ecommerce" },
                          ]
                        }
                      ].map((section) => (
                        <div key={section.category}>
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            {section.category}
                          </h3>
                          <ul className="space-y-1">
                            {section.items.map((item) => (
                              <li key={item.id}>
                                <Link
                                  href={item.href}
                                  className="group block rounded-lg p-2 -mx-2 hover:bg-secondary transition-colors"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <span className="block text-sm font-medium text-foreground group-hover:text-foreground">
                                    {t(`megaMenu.items.${item.id}.name`)}
                                  </span>
                                  <span className="block text-xs text-muted-foreground mt-0.5">
                                    {t(`megaMenu.items.${item.id}.description`)}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* CTA in mega menu */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <Link
                        href="/auditoria-48h"
                        className="flex items-center justify-center gap-2 rounded-md p-2 text-sm font-medium text-white transition-all hover:scale-105 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer border border-slate-800"
                        onClick={() => setServicesOpen(false)}
                      >
                        <Clock className="h-4 w-4" />
                        {t('megaMenu.cta')}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other nav items */}
            <Link
              href="/planos"
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {tItems('plans')}
            </Link>
            <Link
              href="/portfolio"
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {tItems('portfolio')}
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {tItems('blog')}
            </Link>
            <Link
              href="/sobre"
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {tItems('about')}
            </Link>
          </div>

          {/* Desktop CTA - Single primary CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <Button asChild size="sm" className="relative overflow-hidden shadow-sm transition-all hover:scale-105 bg-[linear-gradient(110deg,#e2e8f0,45%,#cbd5e1,55%,#e2e8f0)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white">
              <Link href="/auditoria-48h">
                <Clock className="mr-2 h-4 w-4" />
                {t('audit')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation (Overlay) */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute left-0 right-0 top-full z-[1100] bg-background border-t border-border"
          >
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
                <div className="space-y-1">
                  {/* Services Expandable Section */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      Serviços
                      <ChevronDown className={cn("h-5 w-5 transition-transform", mobileServicesOpen && "rotate-180")} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="ml-4 mt-2 space-y-4 border-l border-border pl-4">
                        {[
                          {
                            category: t('megaMenu.services'),
                            items: [
                              { id: "manutencao-sites", href: "/servicos/manutencao-sites" },
                              { id: "seo-tecnico", href: "/servicos/seo-tecnico" },
                              { id: "performance-core-web-vitals", href: "/servicos/performance-core-web-vitals" },
                              { id: "seguranca-backups", href: "/servicos/seguranca-backups" },
                              { id: "landing-pages-cro", href: "/servicos/landing-pages-cro" },
                              { id: "seo-para-ia-geo", href: "/servicos/seo-para-ia-geo" },
                            ]
                          },
                          {
                            category: t('megaMenu.sectors'),
                            items: [
                              { id: "sites-para-clinicas", href: "/setores/sites-para-clinicas" },
                              { id: "sites-para-imobiliarias", href: "/setores/sites-para-imobiliarias" },
                              { id: "sites-para-restaurantes", href: "/setores/sites-para-restaurantes" },
                              { id: "sites-para-ecommerce", href: "/setores/sites-para-ecommerce" },
                            ]
                          }
                        ].map((section) => (
                          <div key={section.category}>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                              {section.category}
                            </h4>
                            <ul className="space-y-1">
                              {section.items.map((item) => (
                                <li key={item.id}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {t(`megaMenu.items.${item.id}.name`)}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other nav items */}
                  {navigation.main.filter(item => item.name !== "Serviços").map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="pt-4 space-y-3">
                    <div className="flex justify-center pb-2 gap-4">
                      <ThemeToggle />
                      <LanguageToggle />
                    </div>
                    <Button asChild className="w-full" variant="default">
                      <Link href="/auditoria-48h" onClick={() => setIsOpen(false)}>
                        <Clock className="mr-2 h-4 w-4" />
                        Auditoria 48h
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header >
  );
}
