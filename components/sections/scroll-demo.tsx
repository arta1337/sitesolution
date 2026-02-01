"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Layout, Code, Rocket, BarChart } from "lucide-react";
import { useTranslations } from "next-intl";



export function ScrollDemo() {
    const t = useTranslations("HomePage.scrollDemo");
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const cards = [
        {
            icon: Zap,
            title: t("items.0.title"),
            description: t("items.0.description"),
            color: "bg-blue-500",
        },
        {
            icon: Layout,
            title: t("items.1.title"),
            description: t("items.1.description"),
            color: "bg-purple-500",
        },
        {
            icon: Code,
            title: t("items.2.title"),
            description: t("items.2.description"),
            color: "bg-pink-500",
        },
        {
            icon: Rocket,
            title: t("items.3.title"),
            description: t("items.3.description"),
            color: "bg-orange-500",
        },
        {
            icon: BarChart,
            title: t("items.4.title"),
            description: t("items.4.description"),
            color: "bg-green-500",
        },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <motion.div style={{ x }} className="flex gap-8 px-8 sm:px-16">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="group relative h-[450px] w-[350px] sm:w-[500px] flex-shrink-0 overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-brand/50 transition-colors shadow-2xl"
                        >
                            <div
                                className={`absolute inset-0 opacity-10 ${card.color} group-hover:opacity-20 transition-opacity duration-500`}
                            />

                            <div className="relative flex h-full flex-col justify-between p-8 sm:p-12">
                                <div>
                                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary shadow-inner">
                                        <card.icon className="h-7 w-7 text-foreground" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-foreground">
                                        {card.title}
                                    </h3>
                                    <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-sm font-medium text-foreground opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {t("learnMore")} <ArrowRight className="h-4 w-4" />
                                </div>

                                <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-gradient-to-br from-foreground/5 to-transparent blur-3xl" />
                            </div>
                        </div>
                    ))}

                    {/* Final Call to Action Card */}
                    <div className="relative h-[450px] w-[350px] sm:w-[500px] flex-shrink-0 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-foreground mb-6">{t("cta.title")}</h3>
                            <Button size="lg" variant="brand" className="text-lg px-8 py-6 h-auto">
                                {t("cta.button")}
                            </Button>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
