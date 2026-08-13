"use client";

import { itemVariants } from "@/lib/animations";
import { motion } from "motion/react";

export default function SectionHeading({ tag, heading, description }: { tag: string, heading: string, description: string }) {
    return (
        <motion.div
            variants={itemVariants}
            className="max-w-2xl">
            <motion.div
                variants={itemVariants}
            >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    {tag}
                </span>
            </motion.div>
            <motion.div
                variants={itemVariants}
            >
                <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
                    {heading}
                </h2>
            </motion.div>
            <motion.div
                variants={itemVariants}
            >
                <p className="mt-5 leading-relaxed text-pretty text-muted-foreground">
                    {description}
                </p>
            </motion.div>
        </motion.div>
    )
}