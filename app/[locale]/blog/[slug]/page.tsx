import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTABanner } from "@/components/sections/cta-banner";
import { notFound } from "next/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

// Custom components for Portable Text
const ptComponents: PortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden bg-secondary">
                    <Image
                        src={urlFor(value).width(800).fit('max').auto('format').url()}
                        alt={value.alt || 'Blog image'}
                        fill
                        className="object-contain"
                    />
                </div>
            );
        }
    },
    block: {
        h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
        normal: ({ children }) => <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-2 text-muted-foreground">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-2 text-muted-foreground">{children}</ol>,
    },
    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a href={value.href} rel={rel} className="text-primary hover:underline font-medium">
                    {children}
                </a>
            );
        },
    },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const locale = await getLocale() as 'pt' | 'en';

    // Fetch post from Sanity
    const post = await client.fetch(postBySlugQuery, { slug });

    if (!post) {
        notFound();
    }

    const t = await getTranslations('Blog');

    // Fallbacks for content
    const title = post.title?.[locale] || post.title?.pt || 'Untitled';
    const content = post.content?.[locale] || post.content?.pt || [];
    const date = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString(locale === 'pt' ? 'pt-PT' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : '';

    const category = post.category?.title?.[locale] || post.category?.title?.pt;
    const author = post.author;

    return (
        <>
            <Header />
            <main className="flex-1 bg-background pt-24 pb-16">
                <article className="mx-auto max-w-3xl px-6 lg:px-8">
                    {/* Breadcrumb / Back link */}
                    <div className="mb-8">
                        <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                            ← {t('title')}
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                            {category && <span className="text-primary">{category}</span>}
                            {category && date && <span>•</span>}
                            {date && <span>{date}</span>}
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-6">
                            {title}
                        </h1>

                        {/* Author info if available */}
                        {author && (
                            <div className="flex items-center justify-center gap-3">
                                {author.image && (
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={urlFor(author.image).width(100).height(100).url()}
                                            alt={author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div className="text-left">
                                    <p className="text-sm font-medium text-foreground">{author.name}</p>
                                    {author.role?.[locale] && (
                                        <p className="text-xs text-muted-foreground">{author.role[locale]}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </header>

                    {/* Featured Image */}
                    {post.mainImage && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary mb-12 shadow-xl border border-border/50">
                            <Image
                                src={urlFor(post.mainImage).width(1200).height(675).url()}
                                alt={post.mainImage.alt || title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Content Body */}
                    <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
                        {content.length > 0 ? (
                            <PortableText value={content} components={ptComponents} />
                        ) : (
                            <p className="text-muted-foreground italic text-center py-10">
                                {locale === 'pt' ? 'Conteúdo em breve...' : 'Content coming soon...'}
                            </p>
                        )}
                    </div>
                </article>
            </main>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
                <div className="border-t border-border pt-16">
                    <CTABanner
                        variant="default"
                        title={t('cta.title')}
                        subtitle={t('cta.subtitle')}
                        primaryCTA={{ text: t('cta.button'), href: "/auditoria-48h" }}
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}
