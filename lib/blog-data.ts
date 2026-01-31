export const POST_IDS = ["1", "2", "3", "4"] as const;

export const POST_IMAGES: Record<string, string> = {
    "1": "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop",
    "2": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop",
    "3": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    "4": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop"
};

export const POST_SLUGS: Record<string, string> = {
    "1": "2025-web-design-trends",
    "2": "nextjs-seo-best-practices",
    "3": "site-speed-conversion-rate",
    "4": "web-accessibility-importance"
};

export function getPostIdBySlug(slug: string): string | undefined {
    return Object.keys(POST_SLUGS).find(key => POST_SLUGS[key] === slug);
}
