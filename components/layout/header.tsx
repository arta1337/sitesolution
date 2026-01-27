"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, navigation } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
                Serviços
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
                      {navigation.servicesMenu.map((section) => (
                        <div key={section.category}>
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                            {section.category}
                          </h3>
                          <ul className="space-y-1">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="group block rounded-lg p-2 -mx-2 hover:bg-secondary transition-colors"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <span className="block text-sm font-medium text-foreground group-hover:text-foreground">
                                    {item.name}
                                  </span>
                                  <span className="block text-xs text-muted-foreground mt-0.5">
                                    {item.description}
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
                        className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/80"
                        onClick={() => setServicesOpen(false)}
                      >
                        <Clock className="h-4 w-4" />
                        Receber auditoria gratuita em 48h
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other nav items */}
            {navigation.main.filter(item => item.name !== "Serviços").map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA - Single primary CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button asChild size="sm">
              <Link href="/auditoria-48h">
                <Clock className="mr-2 h-4 w-4" />
                Auditoria 48h
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
                        {navigation.servicesMenu.map((section) => (
                          <div key={section.category}>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                              {section.category}
                            </h4>
                            <ul className="space-y-1">
                              {section.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {item.name}
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
                    <Button asChild className="w-full">
                      <Link href="/auditoria-48h" onClick={() => setIsOpen(false)}>
                        <Clock className="mr-2 h-4 w-4" />
                        Auditoria 48h
                      </Link>
                    </Button>
                    <Link 
                      href="/auditoria-48h#contacto" 
                      onClick={() => setIsOpen(false)}
                      className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      Contacto rápido
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
