"use client";

import { useRef } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UiShowcase } from "@/components/sections/ui-showcase";
import { ParallaxScroll } from "@/components/sections/parallax-scroll";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { ArrowLeft, MousePointerClick, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export default function UiDesignPage() {
    const t = useTranslations("SpecialUI");
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <>
            <Header />
            <main className="bg-background min-h-screen text-foreground overflow-x-hidden">
                {/* Navigation Bar */}
                <div className="fixed top-24 left-4 z-50 mix-blend-exclusion text-white">
                    <Button
                        asChild
                        variant="ghost"
                        className="text-white hover:text-white hover:bg-white/10"
                    >
                        <Link href="/portfolio" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            {t("back")}
                        </Link>
                    </Button>
                </div>

                {/* 3D Intro Hero */}
                <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center perspective-[1000px] overflow-hidden bg-background text-foreground">
                    {/* Background Grid - More visible */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#a5b4fc40_1px,transparent_1px),linear-gradient(to_bottom,#a5b4fc40_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-indigo-400/40 via-purple-400/30 to-cyan-400/40 dark:from-indigo-500/10 dark:via-purple-500/5 dark:to-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <motion.div
                        style={{ rotateX: 20, y, opacity, scale }}
                        initial={{ opacity: 0, rotateX: 45, y: 100 }}
                        animate={{ opacity: 1, rotateX: 20, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center relative z-10 max-w-4xl px-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-500/10 border-2 border-indigo-400 dark:border-indigo-500/50 text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-8 shadow-[0_0_20px_rgba(99,102,241,0.4)] dark:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            <Zap className="h-4 w-4" />
                            <span>{t("tag")}</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-indigo-600 via-purple-600 to-cyan-600 dark:from-white dark:via-white/90 dark:to-white/60">
                            {t("heroTitle")}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
                            {t("heroSubtitle")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* Primary button with gradient border */}
                            <div className="rounded-full p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-[0_0_30px_rgba(99,102,241,0.4)] dark:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                <Button
                                    size="lg"
                                    className="bg-white dark:bg-zinc-900 text-indigo-600 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 text-lg px-8 h-12 rounded-full font-semibold"
                                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    {t("startJourney")}
                                </Button>
                            </div>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-foreground border-2 border-purple-400 dark:border-purple-500/50 hover:bg-purple-50 dark:hover:bg-purple-500/10 text-lg px-8 h-12 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)] dark:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                                onClick={() => document.getElementById('parallax')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t("viewExamples")}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Floating Elements with cyberpunk borders */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-[10%] w-64 h-40 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/10 dark:to-purple-500/10 border-2 border-indigo-400 dark:border-indigo-500/30 backdrop-blur-md hidden lg:block shadow-[0_0_30px_rgba(99,102,241,0.3)] dark:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                    />
                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/4 right-[10%] w-56 h-56 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-500/10 dark:to-blue-500/10 border-2 border-cyan-400 dark:border-cyan-500/30 backdrop-blur-md hidden lg:block shadow-[0_0_30px_rgba(34,211,238,0.3)] dark:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    />
                </section>

                {/* The Components */}
                <div id="showcase" className="relative z-20 bg-background pb-24 pt-12">
                    <div className="container mx-auto px-4 mb-24">
                        {/* Wrapper with gradient border */}
                        <div className="p-[2px] rounded-3xl bg-gradient-to-b from-indigo-400 via-purple-500 to-cyan-400 dark:from-indigo-500/30 dark:via-purple-500/20 dark:to-cyan-500/30 shadow-[0_0_60px_rgba(99,102,241,0.25)] dark:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
                            <div className="bg-white dark:bg-zinc-900 backdrop-blur-xl rounded-[22px] overflow-hidden">
                                <UiShowcase />
                            </div>
                        </div>
                    </div>

                    <div id="parallax">
                        <ParallaxScroll />
                    </div>
                </div>

                {/* Footer CTA with cyberpunk styling */}
                <section className="py-24 bg-background text-foreground relative overflow-hidden border-t-2 border-indigo-400 dark:border-indigo-500/30">
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#a5b4fc30_1px,transparent_1px),linear-gradient(to_bottom,#a5b4fc30_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-400/30 via-purple-400/20 to-cyan-400/30 dark:from-indigo-500/10 dark:via-purple-500/5 dark:to-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-white dark:via-white/90 dark:to-white/70 mb-6">
                            {t("footerTitle")}
                        </h2>
                        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t("footerSubtitle")}
                        </p>
                        <div className="mt-10">
                            {/* CTA button with gradient border */}
                            <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-[0_0_40px_rgba(99,102,241,0.4)] dark:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white dark:bg-zinc-900 text-indigo-600 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 font-semibold px-8 py-6 h-auto text-lg rounded-full"
                                >
                                    <Link href="/auditoria-48h">
                                        <MousePointerClick className="mr-2 h-5 w-5" />
                                        {t("startProject")}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
