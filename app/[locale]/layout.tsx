import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/content";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url).replace(/\/$/, "");

export const metadata: Metadata = {
  title: {
    default: "SiteSolutions | Websites que Geram Resultados - Criação e Manutenção",
    template: "%s | SiteSolutions",
  },
  description:
    "Criamos websites rápidos, seguros e otimizados para conversão. Manutenção mensal com SLA de 24h, backups diários e suporte dedicado. Peça uma proposta gratuita.",
  keywords: [
    "criação de websites Portugal",
    "manutenção de sites",
    "web design profissional",
    "desenvolvimento web Lisboa",
    "SEO técnico",
    "website empresarial",
    "agência web Portugal",
  ],
  authors: [{ name: "SiteSolutions" }],
  creator: "SiteSolutions",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "SiteSolutions",
    title: "SiteSolutions | Websites que Geram Resultados",
    description:
      "Criamos websites rápidos, seguros e otimizados para conversão. Manutenção mensal com SLA de 24h e suporte dedicado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteSolutions | Websites que Geram Resultados",
    description:
      "Criamos websites rápidos, seguros e otimizados para conversão. Manutenção mensal com suporte dedicado.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Validate that the incoming `locale` parameter is valid
  // const isValidLocale = ['pt', 'en', 'es', 'fr'].includes(locale);
  // if (!isValidLocale) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
