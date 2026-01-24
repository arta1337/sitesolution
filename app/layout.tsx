import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  metadataBase: new URL("https://sitesolutions.pt"),
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://sitesolutions.pt",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
