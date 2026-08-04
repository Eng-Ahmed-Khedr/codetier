"use client";

import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20
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

export default function HeroSection() {
    return (
        <motion.section
            className="border-b heroSection border-border"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <div className="container min-h-[91vh] mx-auto px-padding-x-desktop max-w-container-max py-padding-y-mobile sm:pt-36 sm:pb-47">
                <motion.div variants={itemVariants}>
                    <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                        // Enterprise software engineering
                    </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <h1 className="max-w-4xl mt-8 leading-[1.08] font-medium tracking-tight text-balance text-foreground sm:text-6xl text-4xl">
                        Systems engineered for operators who cannot afford downtime.
                    </h1>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <p className="max-w-2xl mt-8 leading-relaxed text-pretty text-muted-foreground">
                        Codetier Systems designs and delivers high-throughput web platforms and zero-bloat native desktop terminals. Fixed architecture, typed contracts, sovereign handover.
                    </p>
                </motion.div>
                <motion.div variants={itemVariants} className="mt-16">
                    <dl className="grid max-w-3xl grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
                        <div className="px-5 py-6 bg-background">
                            <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground/70 uppercase">
                                Uptime
                            </dt>
                            <dd className="mt-2 font-mono text-xl text-foreground">
                                99.98%
                            </dd>
                        </div>
                        <div className="px-5 py-6 bg-background">
                            <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground/70 uppercase">
                                p95 Query
                            </dt>
                            <dd className="mt-2 font-mono text-xl text-foreground">
                                84ms
                            </dd>
                        </div>
                        <div className="px-5 py-6 bg-background">
                            <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground/70 uppercase">
                                Binary Size
                            </dt>
                            <dd className="mt-2 font-mono text-xl text-foreground">
                                7.4 MB
                            </dd>
                        </div>
                        <div className="px-5 py-6 bg-background">
                            <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground/70 uppercase">
                                Handover
                            </dt>
                            <dd className="mt-2 font-mono text-xl text-foreground">
                                100%
                            </dd>
                        </div>
                    </dl>
                </motion.div>
            </div>
        </motion.section>
    );
};