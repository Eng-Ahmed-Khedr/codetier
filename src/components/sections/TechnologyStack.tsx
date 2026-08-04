"use client";

import { motion, Variants } from "framer-motion";
import { Boxes } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
        }
    }
}

export default function TechnologyStack() {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="technology-stack">
            <div className="container mx-auto px-padding-x-desktop max-w-container-max py-padding-y-mobile sm:py-padding-y-desktop">
                <motion.div
                    variants={itemVariants}
                    className="max-w-2xl">
                    <motion.div>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                        // Stack
                        </span>
                    </motion.div>
                    <motion.div>
                        <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
                            The technology stack, chosen for consequence — not convenience.
                        </h2>
                    </motion.div>
                    <motion.div>
                        <p className="mt-5 leading-relaxed text-pretty text-muted-foreground">
                            Three layers. Each selected because it removes an entire class of failure from the system, not because it trends well.
                        </p>
                    </motion.div>
                </motion.div>
                <div className="grid grid-cols-2 boder border-border">
                    <motion.div
                        variants={itemVariants}
                        className="relative col-span-1 group"
                    >
                        <div className="absolute transition-opacity duration-500 ease-out opacity-0 pointer-events-none bg-linear-to-br from-electric-blue via-electric-blue/20 to-deep-violet group-hover:opacity-100 inset-px"> </div>
                        <div className="relative flex flex-col justify-between h-full gap-10 p-8 transition-colors duration-500 ease-out bg-background group-hover:bg-white/2 sm:p-10">
                            <div className="flex items-center justify-between">
                                <span>
                                    <Boxes className="transition-colors duration-500 ease-out text-muted-foreground group-hover:text-primary" size={24} strokeWidth={1.5} />
                                </span>
                                <span className="font-mono text-xs trackin-[0.2em] text-muted-foreground/60 ">
                                    01
                                </span>
                            </div>
                            <h3 className="mt-8 text-xl font-medium tracking-tight text-foreground">
                                Frontend Pipelines
                            </h3>
                            <p className="max-w-xl mt-4 leading-relaxed text-pretty text-muted-foreground">
                                Server-first rendering pipelines built on the App Router. Streamed payloads, strict component boundaries, and zero client-side waterfalls.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}