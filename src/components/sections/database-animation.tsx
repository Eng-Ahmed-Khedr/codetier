"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionHeading from "../ui/section-heading";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
};

export default function DatabaseAnimation() {

    const trackRef = useRef<HTMLElement>(null);
    const codeRef = useRef<HTMLDivElement>(null);
    const dashboardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trackRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });
        tl.to({}, { duration: 0.3 });

        tl.to(codeRef.current, {
            opacity: 0,
            scale: 0.95,
            ease: "none",
            duration: 0.1,
        }, 0.3);

        tl.to(dashboardRef.current, {
            opacity: 1,
            y: 0,
            ease: "none",
            duration: 0.1,
        }, 0.5);

        tl.to({}, { duration: 0.4 });

    }, { scope: trackRef })

    return (
        <section
            ref={trackRef}
            className="h-[200vh] border-b database-animation border-border bg-background relative"
        >
            <div className="sticky top-0 h-dvh">
                <div className="container mx-auto px-padding-x-desktop max-w-container-max py-padding-y-mobile sm:py-padding-y-desktop">
                    <SectionHeading
                        tag="// Architecture"
                        heading="Native execution. Zero web-wrapper bloat."
                        description="Compiled to bare metal using Tauri v2. Direct IPC bridging to a Rust-backed SQLite database ensures deterministic state, microsecond queries, and offline-by-default reliability."
                    />
                    <div className="grid max-w-2xl grid-cols-1 grid-rows-1 mx-auto mt-12 sm:mt-24 animation">
                        <div
                            ref={codeRef}
                            className="z-0 w-full max-w-2xl col-start-1 row-start-1 border rounded-sm shadow-2xl under border-border bg-background"
                        >
                            <div className="flex items-center h-6 gap-2 px-4 rounded-sm top-banner bg-border">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                </div>
                                <p className="ml-auto font-mono text-xs text-[#6b7280]">
                                    architecture.rs
                                </p>
                            </div>
                            <div className="p-6 font-mono text-sm leading-relaxed content text-foreground">
                                <div>
                                    <span className="text-deep-violet">impl</span><span className="text-electric-blue"> Database </span>{"{"}
                                </div>
                                <div className="mt-2 ml-4">
                                    <span className="text-deep-violet">pub async fn</span><span className="text-green-text"> execute_query</span>{"(&"}<span className="text-deep-violet">self</span>{") ->"}<span className="text-electric-blue"> Result</span>{"<"}<span className="text-electric-blue">Vec</span>{"<"}<span className="text-electric-blue">Row</span>{">> {"}
                                </div>
                                <div className="mt-2 ml-8">
                                    <span className="text-deep-violet">let</span> connection =<span className="text-deep-violet"> self</span>{".pool.acquire()."}<span className="text-green-text">await</span>{"?;"}
                                </div>
                                <div className="mt-2 ml-8">
                                    <span className="text-deep-violet">connection</span>.<span className="text-green-text">query</span>(<span className="text-green-text">self</span>.sql).<span className="text-green-text">await</span>
                                </div>
                                <div className="mt-2 ml-4">
                                    {"}"}
                                </div>
                                <div className="mt-2">
                                    {"}"}
                                </div>
                            </div>
                        </div>
                        <div
                            ref={dashboardRef}
                            className="z-10 grid w-full max-w-2xl col-start-1 row-start-1 gap-6 p-6 translate-y-20 border rounded-sm shadow-2xl opacity-0 border-border bg-background">
                            <div className="col-span-1 p-4 border rounded-sm border-border">
                                <p className="font-mono text-[10px] tracking-[0.16em] text-[#6b7280] uppercase">
                                    Server Status
                                </p>
                                <p className="mt-4 font-mono text-2xl text-green-text">
                                    99.98%
                                </p>
                                <p className="mt-4 font-mono text-xs text-[#6b7280]">
                                    Last 30 days
                                </p>
                            </div>
                            <div className="col-span-1 p-4 border rounded-sm border-border">
                                <p className="font-mono text-[10px] tracking-[0.16em] text-[#6b7280] uppercase">
                                    Server Status
                                </p>
                                <p className="mt-4 font-mono text-2xl text-electric-blue">
                                    99.98%
                                </p>
                                <p className="mt-4 font-mono text-xs text-[#6b7280]">
                                    Last 30 days
                                </p>
                            </div>
                            <div className="col-span-2 p-4 border rounded-sm border-border">
                                <p className="font-mono text-[10px] tracking-[0.16em] text-[#6b7280] uppercase">
                                    Server Status
                                </p>
                                <div className="flex items-end h-16 gap-2 mt-4">
                                    <div className="flex-1 rounded-sm h-4/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                                    <div className="flex-1 rounded-sm h-7/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                                    <div className="flex-1 rounded-sm h-5/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                                    <div className="flex-1 rounded-sm h-8/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                                    <div className="flex-1 rounded-sm h-6/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                                    <div className="flex-1 rounded-sm h-9/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                                    <div className="flex-1 rounded-sm h-7/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                                </div>
                            </div>

                        </div>
                    </div >
                </div>
            </div>
        </section>
    );
};