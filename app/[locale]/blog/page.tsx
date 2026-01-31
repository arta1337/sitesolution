import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogCard } from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";

import { POST_IDS, POST_IMAGES, POST_SLUGS } from "@/lib/blog-data";

import { useTranslations } from 'next-intl';

export default function BlogPage() {
    const t = useTranslations('Blog');

    const posts = POST_IDS.map(id => ({
        id,
        title: t(`posts.${id}.title`),
        excerpt: t(`posts.${id}.excerpt`),
        date: t(`posts.${id}.date`),
        category: t(`posts.${id}.category`),
        slug: POST_SLUGS[id],
        imageUrl: POST_IMAGES[id],
        readMoreLabel: t('readMore')
    }));

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

                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <BlogCard
                                key={post.id}
                                {...post}
                            />
                        ))}
                    </div>
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
