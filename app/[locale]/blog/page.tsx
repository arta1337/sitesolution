import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogCard } from "@/components/ui/blog-card";
import { CTABanner } from "@/components/sections/cta-banner";

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
        imageUrl: POST_IMAGES[id]
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
            <CTABanner
                variant="default"
                title={t('cta.title')}
                subtitle={t('cta.subtitle')}
                primaryCTA={{ text: t('cta.button'), href: "/auditoria-48h" }}
            />
            <Footer />
        </>
    );
}
