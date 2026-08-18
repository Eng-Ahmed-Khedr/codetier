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
            duration: 0.5,
        }, "phase1");

        tl.to(dashboardRef.current, {
            scale: 1,
            y: 0,
            opacity: 1,
            ease: "none",
            duration: 0.5,
        }, "phase1");

        tl.to({}, { duration: 0.2 });

        tl.to(codeRef.current, {
            scale: 0.9,
            y: -40,
            opacity: 0.5,
            ease: "none",
            duration: 0.5,
        }, "phase2")

        tl.to(dashboardRef.current, {
            scale: 0.95,
            y: -20,
            opacity: 0.9,
            ease: "none",
            duration: 0.5,
        }, "phase2");


        tl.to(stackRef.current, {
            scale: 1,
            y: 20,
            opacity: 1,
            ease: "none",
            duration: 0.5,
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