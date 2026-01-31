import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    slug: string;
    imageUrl?: string;
}

export function BlogCard({ title, excerpt, date, category, slug, imageUrl }: BlogCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 group h-full">
            {imageUrl && (
                <div className="aspect-video w-full overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}
            <CardHeader className="p-6 pb-2">
                <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs font-normal">
                        {category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {date}
                    </div>
                </div>
                <h3 className="line-clamp-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/${slug}`}>
                        {title}
                    </Link>
                </h3>
            </CardHeader>
            <CardContent className="p-6 pt-2 flex-grow">
                <p className="line-clamp-3 text-sm text-muted-foreground">
                    {excerpt}
                </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:translate-x-1 transition-transform" asChild>
                    <Link href={`/blog/${slug}`}>
                        Ler artigo <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
