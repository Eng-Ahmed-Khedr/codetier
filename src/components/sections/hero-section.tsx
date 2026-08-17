"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animateFadeUpStagger } from "@/lib/animations";

export default function HeroSection() {

    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        animateFadeUpStagger(".hero-item", null, 20, 0.1, 0.15)
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="border-b heroSection border-border bg-background"
        >
            <div
                className="container min-h-[91vh] mx-auto px-padding-x-desktop max-w-container-max py-padding-y-mobile sm:pt-36 sm:pb-47"
            >
                <div
                    className="hero-item"
                >
                    <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                        // Enterprise software engineering
                    </p>
                </div>
                <div
                    className="hero-item"
                >
                    <h1 className="max-w-4xl mt-8 leading-[1.08] font-medium tracking-tight text-balance text-foreground sm:text-6xl text-4xl">
                        Systems engineered for operators who cannot afford downtime.
                    </h1>
                </div>
                <div
                    className="hero-item"
                >
                    <p className="max-w-2xl mt-8 leading-relaxed text-pretty text-muted-foreground">
                        Codetier Systems designs and delivers high-throughput web platforms and zero-bloat native desktop terminals. Fixed architecture, typed contracts, sovereign handover.
                    </p>
                </div>
                <div className="mt-16 hero-item">
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
                </div>
            </div>
        </section>
    );
};