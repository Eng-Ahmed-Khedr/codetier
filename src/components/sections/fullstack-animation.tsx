"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionHeading from "../ui/section-heading";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
};

export default function FullStackAnimation() {

    const trackRef = useRef<HTMLElement>(null);
    const codeRef = useRef<HTMLImageElement>(null);
    const dashboardRef = useRef<HTMLImageElement>(null);
    const stackRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: trackRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });

        tl.to({}, { duration: 0.1 });

        tl.to(codeRef.current, {
            scale: 0.95,
            y: -20,
            opacity: 0.8,
            ease: "none",
            duration: 1,
        }, "phase1");

        tl.to(dashboardRef.current, {
            scale: 1,
            y: 0,
            opacity: 1,
            ease: "none",
            duration: 1,
        }, "phase1");

        tl.to({}, { duration: 0.2 });

        tl.to(codeRef.current, {
            scale: 0.9,
            y: -40,
            opacity: 0.5,
            ease: "none",
            duration: 1,
        }, "phase2")

        tl.to(dashboardRef.current, {
            scale: 0.95,
            y: -20,
            opacity: 0.9,
            ease: "none",
            duration: 1,
        }, "phase2");


        tl.to(stackRef.current, {
            scale: 1,
            y: 20,
            opacity: 1,
            ease: "none",
            duration: 1,
        }, "phase2")

        tl.to({}, { duration: 0.1 });

    }, { scope: trackRef })

    return (
        <section
            ref={trackRef}
            className="h-[300vh] border-b database-animation border-border bg-background relative"
        >
            <div className="sticky top-0 h-dvh">
                <div className="container mx-auto px-padding-x-desktop max-w-container-max py-padding-y-mobile sm:py-padding-y-desktop">
                    <SectionHeading
                        tag="// Architecture"
                        heading="Native execution. Zero web-wrapper bloat."
                        description="Compiled to bare metal using Tauri v2. Direct IPC bridging to a Rust-backed SQLite database ensures deterministic state, microsecond queries, and offline-by-default reliability."
                    />
                    <div className="grid max-w-2xl grid-cols-1 grid-rows-1 mx-auto mt-12 sm:mt-24 animation">
                        {/* <div
                            ref={codeRef}
                            className="z-0 w-full max-w-2xl col-start-1 row-start-1 border rounded-sm shadow-2xl under border-border bg-background"
                        >
                            <div className="flex items-center h-6 gap-2 px-4 rounded-sm top-banner bg-border">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                </div>
                                <h2 className="ml-auto font-mono text-xs text-[#6b7280]">
                                    architecture.rs
                                </h2>
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
                            className="z-20 grid w-full max-w-2xl col-start-1 row-start-1 gap-6 p-6 translate-y-20 border rounded-sm shadow-2xl opacity-0 border-border bg-background">
                            <div
                                className="flex items-center justify-between col-span-2 pb-4 mb-6 border-b top-banner border-border"
                            >
                                <h2
                                    className="font-mono text-xs tracking-[0.16em] text-foreground uppercase"
                                >
                                    Network Layer
                                </h2>
                                <div
                                    className="w-2 h-2 rounded-none bg-deep-violet"
                                />
                            </div>
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
                                    84ms
                                </p>
                                <p className="mt-4 font-mono text-xs text-[#6b7280]">
                                    Database query
                                </p>
                            </div>
                            <div className="col-span-2 p-4 border rounded-sm border-border">
                                <p className="font-mono text-[10px] tracking-[0.16em] text-[#6b7280] uppercase">
                                    Request Volume
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

                        </div> */}
                        {/* <div
                            className="z-10 flex flex-col w-full max-w-2xl col-start-1 row-start-1 border rounded-sm shadow-2xl middle border-border bg-background"
                        >
                            <div
                                className="flex items-center justify-between pb-1 m-6 border-b top-banner border-border"
                            >
                                <h2
                                    className="font-mono text-xs tracking-[0.16em] text-foreground uppercase"
                                >
                                    Compiled Stack
                                </h2>
                                <div
                                    className="flex items-center gap-1"
                                >
                                    <div className="w-2 h-2 rounded-none bg-electric-blue" />
                                    <div className="w-2 h-2 rounded-none bg-deep-violet" />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 w-full p-6 content">
                                <table
                                    className="w-full text-[9px] font-mono border-collapse text-muted-foreground"
                                >
                                    <thead>
                                        <tr
                                        // className="border-b border-border"
                                        >
                                            <th
                                                className="font-normal text-deep-violet tracking-[0.12em] pb-5 text-left border-b border-border/50"
                                            >
                                                Component
                                            </th>
                                            <th
                                                className="font-normal text-electric-blue tracking-[0.12em] pb-5 text-left border-b border-border/50"
                                            >
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className="border-b border-border"
                                        >
                                            <td
                                                className="py-2 text-foreground"
                                            >
                                                Frontend runtime
                                            </td>
                                            <td
                                                className="py-2"
                                            >
                                                <span
                                                    className="text-green-text me-2"
                                                >
                                                    ✓
                                                </span>
                                                Operational
                                            </td>
                                        </tr>
                                        <tr
                                            className="border-b border-border"
                                        >
                                            <td
                                                className="py-2 text-foreground"
                                            >
                                                Database Layer
                                            </td>
                                            <td
                                                className="py-2"
                                            >
                                                <span
                                                    className="text-green-text me-2"
                                                >
                                                    ✓
                                                </span>
                                                Operational
                                            </td>
                                        </tr>
                                        <tr
                                            className="border-b border-border"
                                        >
                                            <td
                                                className="py-2 text-foreground"
                                            >
                                                Message Queue
                                            </td>
                                            <td
                                                className="py-2"
                                            >
                                                <span
                                                    className="text-green-text me-2"
                                                >
                                                    ✓
                                                </span>
                                                Operational
                                            </td>
                                        </tr>
                                        <tr
                                            className="border-b border-border"
                                        >
                                            <td
                                                className="py-2 text-foreground"
                                            >
                                                Cache Layer
                                            </td>
                                            <td
                                                className="py-2"
                                            >
                                                <span
                                                    className="text-green-text me-2"
                                                >
                                                    ✓
                                                </span>
                                                Operational
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                                <div
                                    className="pt-3 mt-auto border-t border-border"
                                >
                                    <p
                                        className="text-[8px] text-muted-foreground tracking-wide"
                                    >
                                        Systems operational • Zero degradation
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        <Image
                            ref={codeRef}
                            src="/fullstack-animation/bottom-card.png"
                            alt=""
                            width={1800}
                            height={1200}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                            className="z-0 w-full max-w-2xl col-start-1 row-start-1 "
                        />
                        <Image
                            ref={dashboardRef}
                            src="/fullstack-animation/middle-card.png"
                            alt=""
                            width={1800}
                            height={1200}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            loading="lazy"
                            className="z-10 w-full max-w-2xl col-start-1 row-start-1 translate-y-20 opacity-0"
                        />
                        <Image
                            ref={stackRef}
                            src="/fullstack-animation/top-card.png"
                            alt=""
                            width={1800}
                            height={1200}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            loading="lazy"
                            className="z-20 w-full max-w-2xl col-start-1 row-start-1 translate-y-20 opacity-0"
                        />
                    </div >
                </div>
            </div>
        </section>
    );
};