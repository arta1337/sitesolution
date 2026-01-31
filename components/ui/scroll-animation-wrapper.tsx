"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    once?: boolean;
}

export default function ScrollAnimationWrapper({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction = "up",
    once = true,
}: ScrollAnimationWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
        none: {},
    };

    const initial = {
        opacity: 0,
        ...directions[direction],
    };

    const animate = {
        opacity: 1,
        y: 0,
        x: 0,
    };

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={isInView ? animate : initial}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
