"use client";

import { motion } from "motion/react";
import { Boxes, Database, MonitorSmartphone } from "lucide-react";
import SectionHeading from "../ui/section-heading";
import { containerVariants, itemVariants } from "@/lib/animations";

export default function TechnologyStack() {

    const stackedCardsData = [
        {
            id: 1,
            icon: <Boxes className="transition-colors duration-500 ease-out text-muted-foreground group-hover:text-primary" size={20} strokeWidth={1.5} />,
            title: "Frontend Pipelines",
            description: "Server-first rendering pipelines built on the App Router. Streamed payloads, strict component boundaries, and zero client-side waterfalls.",
            tags: [
                "React 19",
                "Next.js App Router",
                "Tailwind CSS",
                "RSC",
            ],
            metric: "Median LCP 0.9s across audited deployments",
        },
        {
            id: 2,
            icon: <MonitorSmartphone className="transition-colors duration-500 ease-out text-muted-foreground group-hover:text-primary" size={20} strokeWidth={1.5} />,
            title: "Native Terminals",
            description: "Zero-bloat cross-platform desktop clients compiled to native binaries. Rust core, system webview, offline by default.",
            tags: [
                "Tauri v2",
                "Rust",
                "IPC Commands",
                "Auto-Update",
            ],
            metric: "Shipped installers under 8 MB — Windows, macOS, Linux",
        },
        {
            id: 3,
            icon: <Database className="transition-colors duration-500 ease-out text-muted-foreground group-hover:text-primary" size={20} strokeWidth={1.5} />,
            title: "Data & State",
            description: "Deterministic state machines on the client, normalized persistence on the edge. Every mutation is typed, traced, and reversible.",
            tags: [
                "Redux Toolkit",
                "SQLite",
                "Supabase",
                "Postgres RLS",
            ],
            metric: "Row-level policies enforced at the database boundary",
        },
    ]
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="border-b technology-stack border-border">
            <div className="container mx-auto px-padding-x-desktop max-w-container-max py-padding-y-mobile sm:py-padding-y-desktop">
                <SectionHeading
                    tag="// Stack"
                    heading="The technology stack, chosen for consequence — not convenience."
                    description="Three layers. Each selected because it removes an entire class of failure from the system, not because it trends well."
                />
                <div className="grid grid-cols-1 gap-px mt-16 border bg-border lg:grid-cols-2">
                    {stackedCardsData.map((card) => {
                        return (
                            <motion.div
                                key={card.id}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.5 }}
                                className={`relative col-span-1 border border-border group ${card.id === 3 ? "lg:col-span-2" : "col-span-1"}`}
                            >
                                <div className="absolute transition-opacity duration-500 ease-out opacity-0 pointer-events-none bg-linear-to-br from-electric-blue via-electric-blue/20 to-deep-violet group-hover:opacity-100 inset-px"> </div>
                                <article className="relative flex flex-col justify-between h-full gap-5 p-8 transition-colors duration-500 ease-out bg-background group-hover:bg-white/2 sm:p-10 ">
                                    <div className="flex items-center justify-between gap-4">
                                        <span>
                                            {card.icon}
                                        </span>
                                        <span className="font-mono text-xs trackin-[0.2em] text-muted-foreground/60 ">
                                            0{card.id}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-medium tracking-tight text-foreground">
                                        {card.title}
                                    </h3>
                                    <p className="max-w-xl leading-relaxed text-pretty text-muted-foreground">
                                        {card.description}
                                    </p>
                                    <div>
                                        <ul className="flex flex-wrap gap-2 mt-5">
                                            {card.tags.map((tag, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="border border-border rounded-none px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors duration-500 ease-out group-hover:border-border-strong group-hover:text-foreground"
                                                    >
                                                        {tag}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <p className="flex items-center gap-3 font-mono mt-6 text-[11px] tracking-wide text-muted-foreground/70">
                                            <span
                                                className="w-6 h-px bg-linear-to-r from-electric-blue to-deep-violet"
                                            />
                                            {card.metric}
                                        </p>
                                    </div>
                                </article>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.section>
    )
}