// ============================================================
// SiteSolutions - Configuração i18n
// ============================================================
// Este ficheiro prepara a estrutura para internacionalização.
// Para adicionar novos idiomas, siga os passos abaixo.
// ============================================================

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

// Configuração de routing para i18n
// No futuro, use isto com o middleware do Next.js para routing baseado em locale
export const i18nConfig = {
  locales,
  defaultLocale,
  // Se true, o locale default não aparece no URL (/servicos em vez de /pt/servicos)
  hideDefaultLocale: true,
};

// ============================================================
// COMO ADICIONAR UM NOVO IDIOMA (EN/ES):
// ============================================================
//
// 1. Crie um ficheiro de conteúdo para cada idioma:
//    - lib/content.ts (já existe - PT)
//    - lib/content.en.ts (criar para EN)
//    - lib/content.es.ts (criar para ES)
//
// 2. Crie a estrutura de pastas baseada em locale:
//    - app/[locale]/page.tsx
//    - app/[locale]/servicos/page.tsx
//    - etc.
//
// 3. Crie um middleware.ts na raiz do projeto:
//
//    import { NextResponse } from 'next/server';
//    import type { NextRequest } from 'next/server';
//    import { locales, defaultLocale } from '@/lib/i18n';
//
//    export function middleware(request: NextRequest) {
//      const pathname = request.nextUrl.pathname;
//
//      // Verificar se o pathname já tem um locale
//      const pathnameHasLocale = locales.some(
//        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//      );
//
//      if (pathnameHasLocale) return;
//
//      // Detectar locale do browser ou usar default
//      const locale = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || defaultLocale;
//      const targetLocale = locales.includes(locale as any) ? locale : defaultLocale;
//
//      // Redirecionar para o locale correto
//      return NextResponse.redirect(new URL(`/${targetLocale}${pathname}`, request.url));
//    }
//
//    export const config = {
//      matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
//    };
//
// 4. Atualize o layout para usar o locale dinâmico:
//    - app/[locale]/layout.tsx
//
// 5. Crie uma função para carregar o conteúdo correto:
//
//    export async function getContent(locale: Locale) {
//      switch (locale) {
//        case 'en':
//          return import('@/lib/content.en');
//        case 'es':
//          return import('@/lib/content.es');
//        default:
//          return import('@/lib/content');
//      }
//    }
//
// ============================================================
