"use client";

import { motion } from "motion/react";
import SectionHeading from "../ui/section-heading";

export default function DatabaseAnimation() {
    return (
        <motion.section
            className="border-b database-animation border-border"
        >
            <div className="container mx-auto px-padding-x-desktop max-w-container-max py-padding-y-mobile sm:py-padding-y-desktop">
                <SectionHeading
                    tag="// Architecture"
                    heading="Native execution. Zero web-wrapper bloat."
                    description="Compiled to bare metal using Tauri v2. Direct IPC bridging to a Rust-backed SQLite database ensures deterministic state, microsecond queries, and offline-by-default reliability."
                />
                <div className="relative">
                    <div className="absolute z-0 under">
                        <div className="flex items-center justify-between banner rounded-xs bg-border">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full" />
                                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                            </div>
                            <p className="font-mono">
                                architecture.rs
                            </p>
                        </div>
                    </div>
                    <div className="absolute z-10 over">

                    </div>
                </div>
            </div>
        </motion.section>
    );
};