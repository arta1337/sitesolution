"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Layout, Code, Rocket, BarChart } from "lucide-react";

const cards = [
    {
        icon: Zap,
        title: "Estratégia Digital",
        description: "Análise profunda do seu mercado e definição de KPIs claros para garantir retorno.",
        color: "bg-blue-500",
    },
    {
        icon: Layout,
        title: "UI/UX Design",
        description: "Interfaces intuitivas e modernas que guiam o utilizador até à conversão.",
        color: "bg-purple-500",
    },
    {
        icon: Code,
        title: "Desenvolvimento",
        description: "Código limpo em Next.js, rápido e seguro, construído para escalar.",
        color: "bg-pink-500",
    },
    {
        icon: Rocket,
        title: "Lançamento",
        description: "Setup de servidores, CDN global e verificações de segurança finais.",
        color: "bg-orange-500",
    },
    {
        icon: BarChart,
        title: "Crescimento",
        description: "Monitorização contínua e otimização baseada em dados reais.",
        color: "bg-green-500",
    },
];

export function ScrollDemo() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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
                                    Saber mais <ArrowRight className="h-4 w-4" />
                                </div>

                                <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-gradient-to-br from-foreground/5 to-transparent blur-3xl" />
                            </div>
                        </div>
                    ))}

                    {/* Final Call to Action Card */}
                    <div className="relative h-[450px] w-[350px] sm:w-[500px] flex-shrink-0 flex items-center justify-center">
                        <div className="text-center">
                            <h3 className="text-4xl font-bold text-foreground mb-6">Pronto para começar?</h3>
                            <Button size="lg" variant="brand" className="text-lg px-8 py-6 h-auto">
                                Pedir Proposta
                            </Button>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
