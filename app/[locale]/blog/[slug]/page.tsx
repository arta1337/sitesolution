import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTABanner } from "@/components/sections/cta-banner";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getPostIdBySlug, POST_IMAGES } from "@/lib/blog-data";
import Image from "next/image";

// Just checking imports... 
// I'll use standard <img> or Next <Image>

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postId = getPostIdBySlug(slug);

    if (!postId) {
        notFound();
    }

    const t = await getTranslations('Blog');
    const title = t(`posts.${postId}.title`);
    const date = t(`posts.${postId}.date`);
    const category = t(`posts.${postId}.category`);
    const imageUrl = POST_IMAGES[postId];

    return (
        <>
            <Header />
            <main className="flex-1 bg-background pt-24 pb-16">
                <article className="mx-auto max-w-3xl px-6 lg:px-8">
                    {/* Breadcrumb / Back link */}
                    <div className="mb-8">
                        <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            ← {t('title')}
                        </a>
                    </div>

                    {/* Header */}
                    <header className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                            <span className="text-primary">{category}</span>
                            <span>•</span>
                            <span>{date}</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                            {title}
                        </h1>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary mb-12 shadow-xl">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                        <p className="lead text-xl text-foreground font-medium mb-6">
                            {t(`posts.${postId}.excerpt`)}
                        </p>
                        <div className="space-y-6">
                            {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                                // Try to get content. Note: This is a bit of a hack because we don't know the array length easily without fetching it all.
                                // In a real app we might fetch the full object.
                                // But mapping blindly works if we handle empty strings gracefully or use a fixed structure.
                                // Better approach: Use rich text or just predefined keys.
                                // For this demo, let's assume we fetch the array structure if mapped correctly or mapped manually.
                                // ACTUALLY, useTranslations doesn't return arrays easily unless defined as object.
                                // Let's try to fetch keys or just use index till we fail.
                                // A safer way with next-intl is to use `rt` with Rich Text or get the object.
                                // Let's try getting the raw message object if possible, or just hardcode a reasonable loop:

                                return (
                                    <ContentBlock key={i} postId={postId} index={i} t={t} />
                                );
                            })}
                        </div>
                    </div>
                </article>
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

function ContentBlock({ postId, index, t }: { postId: string, index: number, t: any }) {
    try {
        const text = t(`posts.${postId}.content.${index}`);
        if (!text || text.includes('posts.')) return null;

        if (text.startsWith('## ')) {
            return <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{text.replace('## ', '')}</h2>;
        }

        return <p className="leading-relaxed">{text}</p>;
    } catch (e) {
        return null;
    }
}
