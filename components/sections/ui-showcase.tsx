"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, Fingerprint, Activity, Zap, Lock, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function UiShowcase() {
    const t = useTranslations("SpecialUI.showcase");

    return (
        <section className="py-24 bg-background text-foreground overflow-hidden relative">
            {/* Background ambient glow - More vibrant for light mode */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-400/40 via-purple-400/30 to-cyan-400/40 dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-400 dark:border-indigo-500/50 bg-indigo-100 dark:bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-400 mb-4 shadow-[0_0_20px_rgba(99,102,241,0.4)] dark:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    >
                        <Zap className="h-3 w-3" />
                        Next-Gen Interfaces
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-white dark:via-white/80 dark:to-white/40">
                        {t("title")}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Bento Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 md:col-span-2 row-span-2 rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500 dark:from-cyan-500/50 dark:via-indigo-500/30 dark:to-purple-500/50 shadow-[0_0_40px_rgba(99,102,241,0.3),0_0_80px_rgba(34,211,238,0.2)] dark:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                    >
                        <div className="h-full w-full rounded-[22px] bg-white dark:bg-zinc-900/95 p-8 backdrop-blur-2xl relative overflow-hidden group">
                            {/* Inner glows */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/30 dark:bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-400/50 dark:group-hover:bg-cyan-500/20 transition-all duration-500" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/30 dark:bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-400/50 dark:group-hover:bg-indigo-500/20 transition-all duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">{t("neuralEngine.title")}</h3>
                                        <p className="text-muted-foreground">{t("neuralEngine.description")}</p>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20">
                                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-600 dark:bg-cyan-500 animate-[pulse_1s_ease-in-out_infinite]" />
                                        <span className="text-xs font-medium text-cyan-700 dark:text-cyan-400">{t("neuralEngine.status")}</span>
                                    </div>
                                </div>

                                <div className="flex-1 flex items-center justify-center relative my-4">
                                    {/* Central Orb */}
                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-cyan-400/30 dark:bg-cyan-500/20 blur-xl animate-pulse" />
                                        <div className="relative h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-cyan-100 to-indigo-100 dark:from-cyan-400/20 dark:to-indigo-500/20 border border-white dark:border-border backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                            <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-600 dark:text-cyan-400 fill-cyan-400/20" />
                                        </div>

                                        {/* Orbiting Elements - hidden on mobile */}
                                        <div className="absolute h-48 w-48 rounded-full border border-zinc-200 dark:border-border animate-[spin_10s_linear_infinite] hidden sm:block" />
                                        <div className="absolute h-64 w-64 rounded-full border border-zinc-200 dark:border-border animate-[spin_15s_linear_infinite_reverse] hidden sm:block" />

                                        {/* Floating Data Points - hidden on mobile */}
                                        <div className="absolute -top-12 left-0 p-3 rounded-lg bg-white/90 dark:bg-card/80 border border-zinc-200 dark:border-border backdrop-blur-md animate-[bounce_3s_infinite] shadow-lg dark:shadow-none hidden sm:block">
                                            <div className="text-xs text-muted-foreground">{t("neuralEngine.processing")}</div>
                                            <div className="text-sm font-mono text-cyan-600 dark:text-cyan-400">24.5 TB/s</div>
                                        </div>
                                        <div className="absolute -bottom-8 right-0 p-3 rounded-lg bg-white/90 dark:bg-card/80 border border-zinc-200 dark:border-border backdrop-blur-md animate-[bounce_4s_infinite] shadow-lg dark:shadow-none hidden sm:block">
                                            <div className="text-xs text-muted-foreground">{t("neuralEngine.learningRate")}</div>
                                            <div className="text-sm font-mono text-indigo-600 dark:text-indigo-400">0.00451</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mt-auto">
                                    <div className="h-1 bg-zinc-100 dark:bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2"
                                        />
                                    </div>
                                    <div className="h-1 bg-zinc-100 dark:bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                                            className="h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-1/2"
                                        />
                                    </div>
                                    <div className="h-1 bg-zinc-100 dark:bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-1/2"
                                        />
                                    </div>
                                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                                            className="h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-1/2"
                                        />
                                    </div>
                                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 2, delay: 1, repeat: Infinity }}
                                            className="h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Credit Card 3D */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[300px] rounded-3xl bg-zinc-900/50 border border-white/10 p-6 flex flex-col justify-center items-center overflow-hidden perspective-1000 group"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

                        <motion.div
                            className="relative w-48 sm:w-64 h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-white/20 shadow-2xl p-4 sm:p-6 flex flex-col justify-between z-10"
                            whileHover={{
                                rotateX: 10,
                                rotateY: -10,
                                scale: 1.05,
                                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="flex justify-between items-start">
                                <CreditCard className="h-8 w-8 text-white/80" />
                                <Zap className="h-5 w-5 text-yellow-500" />
                            </div>
                            <div>
                                <div className="text-white/60 text-xs tracking-widest mb-1">BALANCE</div>
                                <div className="text-white font-mono text-lg">$24,500.00</div>
                            </div>
                        </motion.div>
                        <div className="mt-6 text-sm font-medium text-white/50">Hover para efeito 3D</div>
                    </motion.div>

                    {/* Card 3: Biometric Auth */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative min-h-[300px] rounded-3xl bg-zinc-900/50 border border-white/10 p-6 flex flex-col items-center justify-center overflow-hidden"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full animate-pulse" />
                            <div className="relative h-20 w-20 rounded-full border border-emerald-500/30 flex items-center justify-center bg-zinc-950/50 backdrop-blur-sm">
                                <Fingerprint className="h-10 w-10 text-emerald-500" />
                            </div>
                        </div>
                        <h3 className="mt-4 text-foreground font-semibold">{t("biometric.title")}</h3>
                        <p className="mt-2 text-center text-sm text-muted-foreground">
                            {t("biometric.description")}
                        </p>
                    </motion.div>
                </div>

                {/* Buttons Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-white/5 dark:to-white/5 border-2 border-indigo-200 dark:border-white/10 text-center shadow-[0_0_30px_rgba(99,102,241,0.15)] dark:shadow-none"
                >
                    <h3 className="text-xl font-semibold text-foreground mb-6">{t("microInteractions.title")}</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Glow Effect Button */}
                        <div className="rounded-full p-[2px] bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-[0_0_25px_rgba(34,211,238,0.5)] dark:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                            <Button className="rounded-full bg-white dark:bg-zinc-900 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:scale-105 transition-all duration-300 font-semibold">
                                {t("microInteractions.glowEffect")}
                            </Button>
                        </div>
                        {/* Cyberpunk Border Button */}
                        <Button variant="outline" className="rounded-full border-2 border-purple-400 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:border-purple-500 relative overflow-hidden group shadow-[0_0_20px_rgba(168,85,247,0.3)] dark:shadow-[0_0_15px_rgba(168,85,247,0.2)] font-semibold">
                            <span className="relative z-10">{t("microInteractions.cyberpunkBorder")}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/30 dark:via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </Button>
                        {/* Gradient Shadow Button */}
                        <Button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.5),0_0_60px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6),0_0_80px_rgba(168,85,247,0.4)] hover:scale-105 transition-all font-semibold">
                            {t("microInteractions.gradientShadow")}
                        </Button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
