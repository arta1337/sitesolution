"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Command, Layers, Cpu, Globe, Database } from "lucide-react";
import { useTranslations } from "next-intl";

interface CardProps {
    icon: React.ElementType;
    title: string;
    subtitle: string;
}

export function ParallaxScroll() {
    const t = useTranslations("SpecialUI.parallax");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    const cards: CardProps[] = [
        { icon: Zap, title: t("cards.instantLoad"), subtitle: t("cards.instantLoadDesc") },
        { icon: Command, title: t("cards.commandK"), subtitle: t("cards.commandKDesc") },
        { icon: Layers, title: t("cards.smartStacking"), subtitle: t("cards.smartStackingDesc") },
        { icon: Cpu, title: t("cards.edgeCompute"), subtitle: t("cards.edgeComputeDesc") },
        { icon: Globe, title: t("cards.realTimeSync"), subtitle: t("cards.realTimeSyncDesc") },
        { icon: Database, title: t("cards.localFirst"), subtitle: t("cards.localFirstDesc") },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-[120vh] overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-background"
        >
            {/* Background Gradients - More vibrant */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-indigo-400/50 via-purple-400/40 to-cyan-400/50 dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[800px] h-[500px] bg-gradient-to-r from-purple-400/40 to-pink-400/30 dark:from-purple-500/10 dark:to-pink-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        {t("title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">{t("titleHighlight")}</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Main container with gradient border */}
                <div className="rounded-3xl p-[2px] bg-gradient-to-br from-indigo-400 via-purple-500 to-cyan-400 dark:from-indigo-500/30 dark:via-purple-500/20 dark:to-cyan-500/30 shadow-[0_0_60px_rgba(99,102,241,0.3),0_0_100px_rgba(168,85,247,0.2)] dark:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[800px] overflow-hidden rounded-[22px] bg-white/95 dark:bg-zinc-900/95 p-8 relative">
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white dark:from-zinc-900 to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent z-20 pointer-events-none" />

                        {/* Column 1 */}
                        <motion.div style={{ y: y1 }} className="flex flex-col gap-6">
                            {cards.slice(0, 3).map((card, i) => (
                                <ParallaxCard key={i} {...card} color="cyan" />
                            ))}
                            {cards.slice(0, 3).map((card, i) => (
                                <ParallaxCard key={`dup-1-${i}`} {...card} color="cyan" />
                            ))}
                        </motion.div>

                        {/* Column 2 - Reverse Scroll */}
                        <motion.div style={{ y: y2 }} className="flex flex-col gap-6 -mt-24">
                            {cards.slice(3, 6).map((card, i) => (
                                <ParallaxCard key={i} {...card} color="purple" />
                            ))}
                            {cards.slice(3, 6).map((card, i) => (
                                <ParallaxCard key={`dup-2-${i}`} {...card} color="purple" />
                            ))}
                        </motion.div>

                        {/* Column 3 */}
                        <motion.div style={{ y: y3 }} className="hidden lg:flex flex-col gap-6">
                            {cards.slice(1, 4).map((card, i) => (
                                <ParallaxCard key={i} {...card} color="indigo" />
                            ))}
                            {cards.slice(1, 4).map((card, i) => (
                                <ParallaxCard key={`dup-3-${i}`} {...card} color="indigo" />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const colorMap = {
    cyan: {
        border: "border-cyan-300 dark:border-cyan-500/30",
        shadow: "shadow-[0_0_20px_rgba(34,211,238,0.3)] dark:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
        glow: "bg-cyan-400",
        iconBg: "bg-cyan-100 dark:bg-cyan-500/10",
        iconBorder: "border-cyan-300 dark:border-cyan-500/30"
    },
    purple: {
        border: "border-purple-300 dark:border-purple-500/30",
        shadow: "shadow-[0_0_20px_rgba(168,85,247,0.3)] dark:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
        glow: "bg-purple-400",
        iconBg: "bg-purple-100 dark:bg-purple-500/10",
        iconBorder: "border-purple-300 dark:border-purple-500/30"
    },
    indigo: {
        border: "border-indigo-300 dark:border-indigo-500/30",
        shadow: "shadow-[0_0_20px_rgba(99,102,241,0.3)] dark:shadow-[0_0_15px_rgba(99,102,241,0.2)]",
        glow: "bg-indigo-400",
        iconBg: "bg-indigo-100 dark:bg-indigo-500/10",
        iconBorder: "border-indigo-300 dark:border-indigo-500/30"
    }
};

function ParallaxCard({ icon: Icon, title, subtitle, color }: CardProps & { color: keyof typeof colorMap }) {
    const colors = colorMap[color];
    return (
        <div className={`group relative overflow-hidden rounded-2xl border-2 ${colors.border} bg-white dark:bg-zinc-900/80 p-6 transition-all hover:-translate-y-1 ${colors.shadow}`}>
            <div className={`absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 transition-opacity`}>
                <div className={`h-16 w-16 rounded-full blur-2xl ${colors.glow}`} />
            </div>

            <div className="relative z-10 flex items-start gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} border ${colors.iconBorder} transition-colors`}>
                    <Icon className="h-6 w-6 text-foreground" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground text-lg">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
