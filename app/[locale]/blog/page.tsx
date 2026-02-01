import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { client } from "@/sanity/lib/client";
import { postsQuery, categoriesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

import { getTranslations, getLocale } from 'next-intl/server';

// Types for Sanity data
interface SanityPost {
    _id: string;
    title: { pt: string; en: string };
    slug: { current: string };
    excerpt: { pt: string; en: string };
    mainImage?: {
        asset: { _ref: string };
        alt?: string;
    };
    publishedAt: string;
    readTime?: number;
    featured?: boolean;
    category?: {
        _id: string;
        title: { pt: string; en: string };
        slug: { current: string };
        color?: string;
    };
    author?: {
        _id: string;
        name: string;
        image?: { asset: { _ref: string } };
        role?: { pt: string; en: string };
    };
}

interface SanityCategory {
    _id: string;
    title: { pt: string; en: string };
    slug: { current: string };
    color?: string;
}

const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
};

export default async function BlogPage() {
    const t = await getTranslations('Blog');
    const locale = await getLocale() as 'pt' | 'en';

    // Fetch posts from Sanity
    const posts: SanityPost[] = await client.fetch(postsQuery);
    const categories: SanityCategory[] = await client.fetch(categoriesQuery);

    const hasContent = posts.length > 0;

    return (
        <>
            <Header />
            <main className="flex-1 bg-background pt-24 pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            {t('title')}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Categories filter */}
                    {categories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            <Link
                                href="/blog"
                                className="px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background"
                            >
                                {t('allPosts')}
                            </Link>
                            {categories.map((category) => (
                                <Link
                                    key={category._id}
                                    href={`/blog/categoria/${category.slug?.current}`}
                                    className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-foreground/50 transition-colors"
                                >
                                    {category.title[locale]}
                                </Link>
                            ))}
                        </div>
                    )}

                    {hasContent ? (
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {posts.map((post) => (
                                <article
                                    key={post._id}
                                    className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Image */}
                                    <Link href={`/blog/${post.slug?.current}`} className="aspect-[16/9] overflow-hidden">
                                        {post.mainImage ? (
                                            <Image
                                                src={urlFor(post.mainImage).width(600).height(340).url()}
                                                alt={post.mainImage.alt || post.title[locale]}
                                                width={600}
                                                height={340}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-secondary flex items-center justify-center">
                                                <span className="text-muted-foreground">Sem imagem</span>
                                            </div>
                                        )}
                                    </Link>

                                    {/* Content */}
                                    <div className="flex-1 p-6">
                                        {/* Category badge */}
                                        {post.category && (
                                            <Link
                                                href={`/blog/categoria/${post.category.slug?.current}`}
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${colorMap[post.category.color || 'blue']}`}
                                            >
                                                {post.category.title[locale]}
                                            </Link>
                                        )}

                                        {/* Title */}
                                        <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                            <Link href={`/blog/${post.slug?.current}`}>
                                                {post.title[locale]}
                                            </Link>
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                            {post.excerpt?.[locale]}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            {post.publishedAt && (
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    <span>
                                                        {new Date(post.publishedAt).toLocaleDateString(locale === 'pt' ? 'pt-PT' : 'en-US', {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                            )}
                                            {post.readTime && (
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    <span>{post.readTime} min</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Author */}
                                    {post.author && (
                                        <div className="px-6 py-4 border-t border-border flex items-center gap-3">
                                            {post.author.image ? (
                                                <Image
                                                    src={urlFor(post.author.image).width(40).height(40).url()}
                                                    alt={post.author.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
                                                    {post.author.name.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                                                {post.author.role && (
                                                    <p className="text-xs text-muted-foreground">{post.author.role[locale]}</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="mx-auto w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6">
                                <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-foreground mb-2">{t('emptyState.title')}</h2>
                            <p className="text-muted-foreground mb-6">{t('emptyState.description')}</p>
                            <Button asChild variant="outline">
                                <Link href="/studio">
                                    {t('emptyState.cta')}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            <section className="py-16 lg:py-24 bg-zinc-950 text-white relative overflow-hidden border-t border-white/10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-950/80"></div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {t('cta.title')}
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        {t('cta.subtitle')}
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-zinc-950 hover:bg-zinc-200 font-semibold"
                        >
                            <Link href="/auditoria-48h">{t('cta.button')}</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
